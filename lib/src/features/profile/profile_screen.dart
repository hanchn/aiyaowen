import 'package:flutter/material.dart';
import '../../shared/models/feed_item.dart';

class ProfileScreen extends StatefulWidget {
  const ProfileScreen({super.key});

  @override
  State<ProfileScreen> createState() => _ProfileScreenState();
}

class _ProfileScreenState extends State<ProfileScreen> with SingleTickerProviderStateMixin {
  late TabController _tabController;

  @override
  void initState() {
    super.initState();
    _tabController = TabController(length: 2, vsync: this);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      body: SafeArea(
        child: NestedScrollView(
          headerSliverBuilder: (context, _) => [
            SliverToBoxAdapter(child: _buildHeader()),
            SliverPersistentHeader(
              delegate: _SliverAppBarDelegate(
                TabBar(
                  controller: _tabController,
                  labelColor: Colors.black,
                  unselectedLabelColor: Colors.grey,
                  indicatorColor: Colors.black,
                  tabs: const [
                    Tab(icon: Icon(Icons.bookmark_border), text: 'Saved'),
                    Tab(icon: Icon(Icons.warning_amber), text: 'Mistakes'),
                  ],
                ),
              ),
              pinned: true,
            ),
          ],
          body: TabBarView(
            controller: _tabController,
            children: [
              _buildGrid(),
              _buildGrid(),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildHeader() {
    return Padding(
      padding: const EdgeInsets.all(16),
      child: Column(
        children: [
          Stack(
            children: [
              const CircleAvatar(
                radius: 48,
                backgroundImage: NetworkImage('https://i.pravatar.cc/150?u=student'),
              ),
              Positioned(
                bottom: 0,
                right: 0,
                child: Container(
                  padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                  decoration: BoxDecoration(
                    color: Colors.amber,
                    borderRadius: BorderRadius.circular(12),
                    border: Border.all(color: Colors.white, width: 2),
                  ),
                  child: const Text('Lv.5', style: TextStyle(fontWeight: FontWeight.bold, fontSize: 10)),
                ),
              ),
            ],
          ),
          const SizedBox(height: 12),
          const Text('Student Alex', style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold, color: Colors.black)),
          const Text(
            'Learning Physics & Math 🚀\nGoal: Master Calculus by June!',
            textAlign: TextAlign.center,
            style: TextStyle(color: Colors.grey),
          ),
          const SizedBox(height: 24),
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            children: [
              _buildStat('12.5h', 'Study Time'),
              _buildStat('42', 'Mastered'),
              _buildStat('15', 'Streak'),
            ],
          ),
          const SizedBox(height: 24),
          _buildSubjectProgress(),
        ],
      ),
    );
  }

  Widget _buildStat(String value, String label) {
    return Column(
      children: [
        Text(value, style: const TextStyle(fontSize: 20, fontWeight: FontWeight.bold, color: Colors.black)),
        Text(label, style: const TextStyle(fontSize: 12, color: Colors.grey)),
      ],
    );
  }

  Widget _buildSubjectProgress() {
    return Container(
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(color: Colors.grey[100], borderRadius: BorderRadius.circular(12)),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          const Text('Subject Proficiency', style: TextStyle(fontWeight: FontWeight.bold, color: Colors.black)),
          const SizedBox(height: 12),
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: Subject.values.take(3).map((s) => _buildProgressItem(s)).toList(),
          ),
        ],
      ),
    );
  }

  Widget _buildProgressItem(Subject subject) {
    return Column(
      children: [
        Container(width: 8, height: 8, decoration: BoxDecoration(color: _getSubjectColor(subject), shape: BoxShape.circle)),
        const SizedBox(height: 4),
        Text(subject.name, style: const TextStyle(fontSize: 12, color: Colors.grey)),
        const Text('75%', style: TextStyle(fontWeight: FontWeight.bold, color: Colors.black)),
      ],
    );
  }

  Widget _buildGrid() {
    return GridView.builder(
      padding: const EdgeInsets.all(1),
      gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
        crossAxisCount: 3,
        crossAxisSpacing: 1,
        mainAxisSpacing: 1,
        childAspectRatio: 0.8,
      ),
      itemCount: mockFeed.length,
      itemBuilder: (context, index) {
        final item = mockFeed[index];
        return Container(
          color: Colors.grey[200],
          child: Stack(
            fit: StackFit.expand,
            children: [
              if (item.type == FeedType.image)
                Image.network(item.images!.first, fit: BoxFit.cover)
              else
                Center(child: Icon(item.type == FeedType.video ? Icons.videocam : Icons.edit, color: Colors.grey)),
              Positioned(
                top: 4,
                right: 4,
                child: Container(
                  width: 20,
                  height: 20,
                  decoration: BoxDecoration(color: _getSubjectColor(item.subject), shape: BoxShape.circle),
                  child: Center(child: Text(item.subject.name[0].toUpperCase(), style: const TextStyle(fontSize: 10, fontWeight: FontWeight.bold))),
                ),
              ),
            ],
          ),
        );
      },
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

class _SliverAppBarDelegate extends SliverPersistentHeaderDelegate {
  final TabBar _tabBar;
  _SliverAppBarDelegate(this._tabBar);

  @override
  double get minExtent => _tabBar.preferredSize.height;
  @override
  double get maxExtent => _tabBar.preferredSize.height;

  @override
  Widget build(BuildContext context, double shrinkOffset, bool overlapsContent) {
    return Container(color: Colors.white, child: _tabBar);
  }

  @override
  bool shouldRebuild(_SliverAppBarDelegate oldDelegate) => false;
}
