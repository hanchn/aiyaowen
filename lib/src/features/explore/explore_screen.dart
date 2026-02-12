import 'package:flutter/material.dart';
import '../../shared/models/feed_item.dart';

class ExploreScreen extends StatelessWidget {
  const ExploreScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.black,
      appBar: AppBar(
        title: const Text('Knowledge Map'),
        backgroundColor: Colors.black,
        actions: [
          IconButton(icon: const Icon(Icons.search), onPressed: () {}),
        ],
      ),
      body: ListView(
        padding: const EdgeInsets.all(16),
        children: [
          _buildSection('Subjects', _buildSubjectGrid()),
          const SizedBox(height: 24),
          _buildSection('Popular Topics', _buildTopicChips()),
          const SizedBox(height: 24),
          _buildChallengeCard(),
        ],
      ),
    );
  }

  Widget _buildSection(String title, Widget content) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(title, style: const TextStyle(fontSize: 20, fontWeight: FontWeight.bold)),
        const SizedBox(height: 16),
        content,
      ],
    );
  }

  Widget _buildSubjectGrid() {
    return GridView.count(
      shrinkWrap: true,
      physics: const NeverScrollableScrollPhysics(),
      crossAxisCount: 2,
      childAspectRatio: 1.5,
      mainAxisSpacing: 16,
      crossAxisSpacing: 16,
      children: Subject.values.map((s) => _buildSubjectCard(s)).toList(),
    );
  }

  Widget _buildSubjectCard(Subject subject) {
    final color = _getSubjectColor(subject);
    return Container(
      decoration: BoxDecoration(
        color: const Color(0xFF1A1A1A),
        borderRadius: BorderRadius.circular(16),
        border: Border.all(color: color.withOpacity(0.5)),
      ),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Container(
            width: 40,
            height: 40,
            decoration: BoxDecoration(color: color, shape: BoxShape.circle),
            child: Center(
              child: Text(subject.name[0].toUpperCase(),
                  style: const TextStyle(fontSize: 20, fontWeight: FontWeight.bold)),
            ),
          ),
          const SizedBox(height: 8),
          Text(subject.name.toUpperCase(), style: const TextStyle(fontWeight: FontWeight.bold)),
        ],
      ),
    );
  }

  Widget _buildTopicChips() {
    final topics = ['Calculus', 'Mechanics', 'Organic Chemistry', 'Genetics', 'Grammar'];
    return Wrap(
      spacing: 8,
      runSpacing: 8,
      children: topics.map((t) => Chip(label: Text('# $t'))).toList(),
    );
  }

  Widget _buildChallengeCard() {
    return Container(
      padding: const EdgeInsets.all(20),
      decoration: BoxDecoration(
        color: Colors.blue,
        borderRadius: BorderRadius.circular(16),
      ),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          const Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text('Physics: Motion', style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
              SizedBox(height: 4),
              Text('Solve 5 problems in 10 mins', style: TextStyle(color: Colors.white70)),
            ],
          ),
          ElevatedButton(
            onPressed: () {},
            style: ElevatedButton.styleFrom(backgroundColor: Colors.white, foregroundColor: Colors.blue),
            child: const Text('Start'),
          ),
        ],
      ),
    );
  }

  Color _getSubjectColor(Subject subject) {
    switch (subject) {
      case Subject.physics: return Colors.blue;
      case Subject.biology: return Colors.green;
      case Subject.chemistry: return Colors.purple;
      case Subject.english: return Colors.yellow;
      case Subject.math: return Colors.red;
    }
  }
}
