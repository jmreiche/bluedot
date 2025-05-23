import React from 'react';

const AGICourse: React.FC = () => {
  const [currentStep, setCurrentStep] = React.useState(0);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [userResponses, setUserResponses] = React.useState<any[]>([]);
  const [userInput, setUserInput] = React.useState('');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [assessment, setAssessment] = React.useState<any | null>(null);
  const [isTyping, setIsTyping] = React.useState(false);
  const [conversation, setConversation] = React.useState([
    {
      role: 'ai',
      content: "Hello! I'm your AI tutor for today's assessment on Artificial General Intelligence (AGI). Let's start with an open question: What do you understand by the term 'Artificial General Intelligence' and how does it differ from current AI systems?",
    },
  ]);

  const questions = [
    {
      id: 'definition',
      question: "What do you understand by the term 'Artificial General Intelligence' and how does it differ from current AI systems?",
      followUp: "That's interesting. Could you elaborate on the autonomy aspect of AGI? What level of autonomy would an AGI system need to have?",
      area: 'Definition',
    },
    {
      id: 'limitations',
      question: "Based on what you've learned, what are the main limitations of current AI systems that prevent them from being considered AGI?",
      followUp: 'Let me ask you specifically about the Vending-Bench evaluation. What did this test reveal about AI capabilities and limitations?',
      area: 'Current Limitations',
    },
    {
      id: 'development',
      question: 'How has the expected development path to AGI changed in recent years?',
      followUp: "Could you explain the shift from 'next-word prediction' to 'next-action prediction' and why it's significant?",
      area: 'Development Pathways',
    },
    {
      id: 'timeline',
      question: 'What are the current industry projections for when we might achieve AGI?',
      followUp: "Why do you think there's such significant investment in AGI development right now? What economic or technological factors are driving this?",
      area: 'Timeline Projections',
    },
    {
      id: 'final',
      question: "Based on everything we've discussed, what do you think are the most important challenges to overcome before achieving AGI?",
      followUp: '',
      area: 'Synthesis',
    },
  ];

  const handleUserInput = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (userInput.trim() === '') return;

    const newConversation = [...conversation, { role: 'user', content: userInput }];
    setConversation(newConversation);
    setUserResponses({ ...userResponses, [currentStep]: userInput });
    setUserInput('');
    setIsTyping(true);

    setTimeout(() => {
      let nextResponse;

      if (currentStep < questions.length - 1) {
        if (currentStep % 2 === 0 && questions) {
          nextResponse = questions?.[Math.floor(currentStep / 2)]?.followUp;
        } else {
          const nextQuestion = questions?.[Math.floor(currentStep / 2) + 1]?.question;
          nextResponse = `Thank you for that explanation. Let's move to another aspect of AGI. ${nextQuestion}`;
        }
      } else {
        generateAssessment();
        nextResponse = "Thank you for all your responses. I'm now preparing your assessment based on our conversation. One moment please...";
      }

      setConversation([...newConversation, { role: 'ai', content: nextResponse ?? '' }]);
      setCurrentStep(currentStep + 1);
      setIsTyping(false);
    }, 1000);
  };

  const generateAssessment = () => {
    setTimeout(() => {
      const strengths = [];
      const improvements = [];

      if (((userResponses)[0]?.toLowerCase().includes('economically valuable')
          || userResponses[0]?.toLowerCase().includes('outperform humans'))) {
        strengths.push("Strong understanding of AGI's definition");
      } else {
        improvements.push('Review the formal definition of AGI as systems that outperform humans at most economically valuable work');
      }

      if (userResponses[2]?.toLowerCase().includes('planning')
          || userResponses[2]?.toLowerCase().includes('vending-bench')) {
        strengths.push('Good grasp of current AI limitations');
      } else {
        improvements.push('Deepen understanding of specific AI limitations in multi-step planning and project management');
      }

      if (userResponses[4]?.toLowerCase().includes('scaling')
          || userResponses[4]?.toLowerCase().includes('next-action')) {
        strengths.push('Clear understanding of development pathways');
      } else {
        improvements.push('Review the shift from expecting scientific breakthroughs to scaling existing approaches');
      }

      if (userResponses[6]?.toLowerCase().includes('5 year')
          || userResponses[6]?.toLowerCase().includes('investment')) {
        strengths.push('Awareness of industry timeline projections');
      } else {
        improvements.push('Explore industry predictions and the significant investments being made in AGI development');
      }

      const assessmentResult = {
        strengths: strengths.length > 0 ? strengths : ['Engagement with the assessment process'],
        improvements: improvements.length > 0 ? improvements : ['Continue exploring AGI concepts in more depth'],
      };

      setAssessment(assessmentResult);

      const finalFeedback = `
        Based on our conversation, here's my assessment of your understanding of AGI:
        
        Strengths:
        ${assessmentResult.strengths.map((s) => `- ${s}`).join('\n')}
        
        Areas for improvement:
        ${assessmentResult.improvements.map((i) => `- ${i}`).join('\n')}
        
        Thank you for participating in this assessment. Continue exploring these concepts to deepen your understanding of AGI!
      `;

      setConversation((prev) => [...prev, { role: 'ai', content: finalFeedback }]);
    }, 2000);
  };

  return (
    <div className="flex flex-col h-screen max-w-4xl mx-auto p-4 bg-gray-50">
      <div className="bg-white rounded-lg shadow-md p-4 mb-4">
        <h1 className="text-2xl font-bold text-blue-600 mb-2">AGI Assessment</h1>
        <p className="text-gray-600">
          This is a conversational assessment of your understanding of Artificial General Intelligence.
          Please respond to the questions to demonstrate your knowledge.
        </p>
      </div>

      <div className="flex-grow overflow-auto mb-4 bg-white rounded-lg shadow-md p-4">
        {conversation.map((message, index) => (
          <div
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            className={`mb-4 ${message.role === 'ai' ? 'pr-8' : 'pl-8'}`}
          >
            <div
              className={`p-3 rounded-lg ${
                message.role === 'ai'
                  ? 'bg-blue-100 text-blue-800 rounded-bl-none'
                  : 'bg-gray-100 text-gray-800 rounded-br-none ml-auto'
              }`}
            >
              <p className="whitespace-pre-line">{message.content}</p>
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="mb-4 pr-8">
            <div className="p-3 bg-blue-100 text-blue-800 rounded-lg rounded-bl-none">
              <p>Typing...</p>
            </div>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={userInput}
          onChange={handleUserInput}
          disabled={assessment !== null || isTyping}
          placeholder={assessment !== null ? 'Assessment complete' : 'Type your response...'}
          className="flex-grow p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          disabled={userInput.trim() === '' || assessment !== null || isTyping}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          Send
        </button>
      </form>

      {assessment && (
        <div className="mt-4 bg-green-50 border border-green-200 rounded-lg p-4">
          <h2 className="text-size-lg font-semibold text-green-800 mb-2">Assessment Complete</h2>
          <p className="text-size-sm text-gray-600">
            Thank you for completing this assessment on Artificial General Intelligence.
          </p>
        </div>
      )}
    </div>
  );
};

export default AGICourse;
