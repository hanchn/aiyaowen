export type FeedType = 'video' | 'image' | 'form';

export interface FeedItem {
  id: string;
  type: FeedType;
  user: {
    name: string;
    avatar: string;
  };
  title: string;
  description: string;
  likes: number;
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
  };
}

export const MOCK_FEED: FeedItem[] = [
  {
    id: '1',
    type: 'video',
    user: {
      name: 'TravelVibes',
      avatar: 'https://i.pravatar.cc/150?u=travel',
    },
    title: 'Beautiful Sunset',
    description: 'The view from my window is amazing today! #sunset #vibes',
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
    user: {
      name: 'PhotoMaster',
      avatar: 'https://i.pravatar.cc/150?u=photo',
    },
    title: 'City Lights',
    description: 'Tokyo at night is just different. Which one is your favorite?',
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
    user: {
      name: 'DailyPoll',
      avatar: 'https://i.pravatar.cc/150?u=poll',
    },
    title: 'Quick Survey',
    description: 'Help us decide what to cook for dinner tonight!',
    likes: 56,
    comments: 102,
    shares: 2,
    isLiked: false,
    isFavorite: false,
    form: {
      question: 'What should we cook?',
      options: ['Pizza', 'Sushi', 'Burgers', 'Salad'],
    },
  },
  {
    id: '4',
    type: 'video',
    user: {
      name: 'NatureLover',
      avatar: 'https://i.pravatar.cc/150?u=nature',
    },
    title: 'Forest Walk',
    description: 'Morning walk in the woods. So peaceful.',
    likes: 2300,
    comments: 150,
    shares: 89,
    isLiked: false,
    isFavorite: false,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
  },
];
