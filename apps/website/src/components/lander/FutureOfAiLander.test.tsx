import { describe, expect, test } from 'vitest';
import { render } from '@testing-library/react';
import FutureOfAiLander from './FutureOfAiLander';

const courseData = {
  type: 'success',
  course: {
    title: 'Future of AI',
  },
  units: [
    {
      courseId: 'rec8CeVOWU0mGu2Jf',
      courseTitle: 'What the fish [Test Course]',
      coursePath: '/courses/test-course',
      path: '/courses/test-course/1',
      title: 'Basic Principles of Fish',
      content: "## Welcome to the deep end! \nThis unit explores the core concepts that _every_ fish enthusiast needs to understand, from basic anatomy to the physics of water movement.\nWe'll explore how fish \n[ ] communicate,\n[ ] navigate,\n[ ] and survive in their watery world\n...with special attention to the unique adaptations that make each species special.\nThrough hands-on exercises and detailed study materials, you'll develop a strong foundation in **_[ichthyology](https://en.wikipedia.org/wiki/Ichthyology)_** (that's fish science for those who don't speak fluent marine biologist).\n",
      duration: 12,
      unitNumber: '1',
      description: 'Master the fundamental concepts of fish biology, behavior, and basic aquatic principles.',
      id: 'recySscaN1b0Cm1jn',
    },
    {
      courseId: 'rec8CeVOWU0mGu2Jf',
      courseTitle: 'What the fish [Test Course]',
      coursePath: '/courses/test-course',
      path: '/courses/test-course/2',
      title: 'What Fish Are People Catching, and Why?',
      content: "Ever wondered why some fishermen chase tuna while others pursue cod? This unit dives into the complex world of modern fishing practices, from traditional line-fishing to industrial-scale operations. We'll examine the technological innovations driving the industry, the economic forces at play, and the eternal question of why that one weird fish at the bottom of the ocean looks like that. Through case studies and practical examples, you'll understand the delicate balance between feeding humanity and keeping our oceans stocked with sufficiently sassy fish.\n",
      duration: 5,
      unitNumber: '2',
      description: 'Explore current trends in fishing technology and the motives behind different fishing approaches.',
      id: 'recyGMcsDLhp9mPqH',
    },
    {
      courseId: 'rec8CeVOWU0mGu2Jf',
      courseTitle: 'What the fish [Test Course]',
      coursePath: '/courses/test-course',
      path: '/courses/test-course/3',
      title: 'The Promise of Fish',
      content: "Fish: they're not just for dinner anymore. This unit explores the untapped potential of our scaly friends in solving global challenges. From fish-powered renewable energy to underwater real estate development, we'll examine how piscine innovations are reshaping our world. We'll also delve into fish-based social networks (Fishbook), fish-inspired fashion trends, and why salmon make excellent financial advisors. Special attention will be paid to the emerging field of fish-human diplomacy.\n",
      duration: 110,
      unitNumber: '3',
      description: 'Understand how fish will revolutionize everything from the economy to your social life.',
      id: 'recjPDtSupcowWbmw',
    },
    {
      courseId: 'rec8CeVOWU0mGu2Jf',
      courseTitle: 'What the fish [Test Course]',
      coursePath: '/courses/test-course',
      path: '/courses/test-course/4',
      title: 'The Risks of Fish',
      content: "Not all that glitters is goldfish. This unit examines the darker side of piscine potential, from the threat of fish becoming too self-aware to the risks of sharks learning to use smartphones. Through careful analysis and possibly paranoid speculation, we'll prepare for worst-case scenarios like fish developing opposable fins or deciding to implement their own cryptocurrency. Includes emergency protocols for dealing with fish uprising scenarios.\n",
      duration: 8,
      unitNumber: '4',
      description: 'Explore what could go wrong when fish gain too much power.',
      id: 'recc6cSN9fn3VfTvZ',
    },
    {
      courseId: 'rec8CeVOWU0mGu2Jf',
      courseTitle: 'What the fish [Test Course]',
      coursePath: '/courses/test-course',
      path: '/courses/test-course/5',
      title: 'Contributing to Fish Safety',
      content: "### The future of fish-human relations depends on you! \nThis capstone unit brings together everything we've learned about our aquatic [overlords-in-waiting](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBWqLpd7QgEtYIur4g48rq8PhAApbpOuO2fwoRB1aPvZpijMnS) and channels it into practical action. \nWe'll explore how to make the world a safer place for fish while maintaining appropriate species boundaries. \nThrough \n- case studies,\n- hands-on projects,\n- and possibly underwater meditation sessions,\n\nyou'll learn to bridge the gap between gill and lung breathers. \n\n> Warning: May cause increased empathy for tuna sandwiches.\n",
      duration: 15,
      unitNumber: '5',
      description: 'Learn how you can help create a better world for fish (and their reluctant human neighbors).',
      id: 'recIztjGqTNNpLTe1',
    },
  ],
};

describe('FutureOfAiLander', () => {
  test('renders as expected', () => {
    const { container } = render(<FutureOfAiLander courseData={courseData} />);
    expect(container).toMatchSnapshot();
  });
});
