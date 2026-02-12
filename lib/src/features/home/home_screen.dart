import 'package:flutter/material.dart';
import '../../shared/models/feed_item.dart';
import 'widgets/feed_item_widget.dart';

class HomeScreen extends StatefulWidget {
  const HomeScreen({super.key});

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  final PageController _pageController = PageController();
  Subject? _selectedSubject;

  @override
  void dispose() {
    _pageController.dispose();
    super.dispose();
  }

  List<FeedItem> get _filteredFeed {
    if (_selectedSubject == null) return mockFeed;
    return mockFeed.where((item) => item.subject == _selectedSubject).toList();
  }

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        PageView.builder(
          controller: _pageController,
          scrollDirection: Axis.vertical,
          itemCount: _filteredFeed.length,
          itemBuilder: (context, index) {
            return FeedItemWidget(item: _filteredFeed[index]);
          },
        ),
        _buildTopBar(),
      ],
    );
  }

  Widget _buildTopBar() {
    return SafeArea(
      child: Container(
        height: 50,
        child: ListView(
          scrollDirection: Axis.horizontal,
          padding: const EdgeInsets.symmetric(horizontal: 16),
          children: [
            _buildSubjectTab(null, 'All'),
            ...Subject.values.map((s) => _buildSubjectTab(s, s.name.toUpperCase())),
          ],
        ),
      ),
    );
  }

  Widget _buildSubjectTab(Subject? subject, String label) {
    final isSelected = _selectedSubject == subject;
    return GestureDetector(
      onTap: () => setState(() => _selectedSubject = subject),
      child: Container(
        padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
        margin: const EdgeInsets.only(right: 8),
        decoration: isSelected
            ? const BoxDecoration(
                border: Border(bottom: BorderSide(color: Colors.white, width: 2)),
              )
            : null,
        child: Text(
          label,
          style: TextStyle(
            color: isSelected ? Colors.white : Colors.white60,
            fontWeight: FontWeight.bold,
          ),
        ),
      ),
    );
  }
}
