export type FeedType = 'video' | 'image' | 'form';

export type Subject = 'physics' | 'biology' | 'chemistry' | 'english' | 'math';

export interface FeedItem {
  id: string;
  type: FeedType;
  subject: Subject;
  difficulty: 'easy' | 'medium' | 'hard';
  tags: string[];
  user: {
    name: string;
    avatar: string;
    title: string; // e.g. "Physics Teacher"
  };
  title: string;
  description: string;
  likes: number; // Represents "Marked as Mastered" or helpful
  comments: number;
  shares: number;
  isLiked: boolean;
  isFavorite: boolean;
  // Video specific
  videoUrl?: string;
  // Image specific
  images?: string[];
  // Form specific
  form?: {
    question: string;
    options: string[];
    correctAnswer?: number;
    explanation?: string;
  };
}

export const SUBJECTS: { id: Subject; label: string; color: string }[] = [
  { id: 'physics', label: 'Physics', color: '#3498db' },
  { id: 'biology', label: 'Biology', color: '#2ecc71' },
  { id: 'chemistry', label: 'Chemistry', color: '#9b59b6' },
  { id: 'english', label: 'English', color: '#f1c40f' },
  { id: 'math', label: 'Math', color: '#e74c3c' },
];

export const MOCK_FEED: FeedItem[] = [
  {
    id: '1',
    type: 'video',
    subject: 'physics',
    difficulty: 'medium',
    tags: ['Mechanics', 'Newton\'s Laws', 'Gravity'],
    user: {
      name: 'Mr. Newton',
      avatar: 'https://i.pravatar.cc/150?u=physics',
      title: 'Physics Expert',
    },
    title: 'Understanding Gravity',
    description: 'Why do apples fall? Let\'s explore Newton\'s Law of Universal Gravitation with a simple experiment.',
    likes: 1240,
    comments: 45,
    shares: 12,
    isLiked: false,
    isFavorite: false,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
  },
  {
    id: '2',
    type: 'image',
    subject: 'biology',
    difficulty: 'hard',
    tags: ['Cell Biology', 'Mitosis', 'Microscope'],
    user: {
      name: 'BioLab',
      avatar: 'https://i.pravatar.cc/150?u=bio',
      title: 'Biology Researcher',
    },
    title: 'Stages of Mitosis',
    description: 'Detailed microscope slides showing the phases of cell division. Swipe to see Prophase, Metaphase, Anaphase, and Telophase.',
    likes: 890,
    comments: 23,
    shares: 5,
    isLiked: true,
    isFavorite: true,
    images: [
      'https://picsum.photos/id/122/800/1200',
      'https://picsum.photos/id/188/800/1200',
      'https://picsum.photos/id/214/800/1200',
    ],
  },
  {
    id: '3',
    type: 'form',
    subject: 'english',
    difficulty: 'easy',
    tags: ['Grammar', 'Tenses', 'Quiz'],
    user: {
      name: 'English Daily',
      avatar: 'https://i.pravatar.cc/150?u=eng',
      title: 'ESL Teacher',
    },
    title: 'Quick Grammar Check',
    description: 'Choose the correct form of the verb to complete the sentence.',
    likes: 56,
    comments: 102,
    shares: 2,
    isLiked: false,
    isFavorite: false,
    form: {
      question: 'She ____ to the store yesterday.',
      options: ['go', 'gone', 'went', 'going'],
      correctAnswer: 2,
      explanation: 'The sentence describes a completed action in the past, so we use the past simple tense "went".',
    },
  },
  {
    id: '4',
    type: 'video',
    subject: 'chemistry',
    difficulty: 'medium',
    tags: ['Reactions', 'Safety', 'Lab'],
    user: {
      name: 'ChemFun',
      avatar: 'https://i.pravatar.cc/150?u=chem',
      title: 'Chemistry Teacher',
    },
    title: 'Elephant Toothpaste Reaction',
    description: 'Watch this rapid decomposition of hydrogen peroxide! Exothermic reaction in action.',
    likes: 2300,
    comments: 150,
    shares: 89,
    isLiked: false,
    isFavorite: false,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
  },
  {
    id: '5',
    type: 'image',
    subject: 'math',
    difficulty: 'hard',
    tags: ['Calculus', 'Derivatives', 'Formulas'],
    user: {
      name: 'MathWiz',
      avatar: 'https://i.pravatar.cc/150?u=math',
      title: 'Math Professor',
    },
    title: 'Derivative Rules Cheat Sheet',
    description: 'Save this for your next calculus exam! Common derivative rules you need to know.',
    likes: 1500,
    comments: 80,
    shares: 300,
    isLiked: false,
    isFavorite: true,
    images: [
      'https://picsum.photos/id/20/800/1200',
      'https://picsum.photos/id/24/800/1200',
    ],
  },
];
