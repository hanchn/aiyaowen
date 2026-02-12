enum FeedType { video, image, form }
enum Subject { physics, biology, chemistry, english, math }
enum Difficulty { easy, medium, hard }

class FeedItem {
  final String id;
  final FeedType type;
  final Subject subject;
  final Difficulty difficulty;
  final List<String> tags;
  final User user;
  final String title;
  final String description;
  final int likes;
  final int comments;
  final int shares;
  final bool isLiked;
  final bool isFavorite;
  final String? videoUrl;
  final List<String>? images;
  final QuizForm? form;

  FeedItem({
    required this.id,
    required this.type,
    required this.subject,
    required this.difficulty,
    required this.tags,
    required this.user,
    required this.title,
    required this.description,
    required this.likes,
    required this.comments,
    required this.shares,
    required this.isLiked,
    required this.isFavorite,
    this.videoUrl,
    this.images,
    this.form,
  });
}

class User {
  final String name;
  final String avatar;
  final String title;

  User({required this.name, required this.avatar, required this.title});
}

class QuizForm {
  final String question;
  final List<String> options;
  final int correctAnswer;
  final String explanation;

  QuizForm({
    required this.question,
    required this.options,
    required this.correctAnswer,
    required this.explanation,
  });
}

final List<FeedItem> mockFeed = [
  FeedItem(
    id: '1',
    type: FeedType.video,
    subject: Subject.physics,
    difficulty: Difficulty.medium,
    tags: ['Mechanics', 'Gravity'],
    user: User(name: 'Mr. Newton', avatar: 'https://i.pravatar.cc/150?u=physics', title: 'Physics Expert'),
    title: 'Understanding Gravity',
    description: 'Why do apples fall? Let\'s explore Newton\'s Law.',
    likes: 1240,
    comments: 45,
    shares: 12,
    isLiked: false,
    isFavorite: false,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
  ),
  FeedItem(
    id: '2',
    type: FeedType.image,
    subject: Subject.biology,
    difficulty: Difficulty.hard,
    tags: ['Cell', 'Mitosis'],
    user: User(name: 'BioLab', avatar: 'https://i.pravatar.cc/150?u=bio', title: 'Biology Researcher'),
    title: 'Stages of Mitosis',
    description: 'Detailed microscope slides showing cell division.',
    likes: 890,
    comments: 23,
    shares: 5,
    isLiked: true,
    isFavorite: true,
    images: [
      'https://picsum.photos/id/122/800/1200',
      'https://picsum.photos/id/188/800/1200',
    ],
  ),
  FeedItem(
    id: '3',
    type: FeedType.form,
    subject: Subject.english,
    difficulty: Difficulty.easy,
    tags: ['Grammar', 'Tenses'],
    user: User(name: 'English Daily', avatar: 'https://i.pravatar.cc/150?u=eng', title: 'ESL Teacher'),
    title: 'Quick Grammar Check',
    description: 'Choose the correct form of the verb.',
    likes: 56,
    comments: 102,
    shares: 2,
    isLiked: false,
    isFavorite: false,
    form: QuizForm(
      question: 'She ____ to the store yesterday.',
      options: ['go', 'gone', 'went', 'going'],
      correctAnswer: 2,
      explanation: 'Use past simple "went" for completed past actions.',
    ),
  ),
];
