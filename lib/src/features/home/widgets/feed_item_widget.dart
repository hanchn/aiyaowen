import 'package:flutter/material.dart';
import 'package:video_player/video_player.dart';
import 'package:chewie/chewie.dart';
import '../../../shared/models/feed_item.dart';

class FeedItemWidget extends StatelessWidget {
  final FeedItem item;

  const FeedItemWidget({super.key, required this.item});

  @override
  Widget build(BuildContext context) {
    return Stack(
      fit: StackFit.expand,
      children: [
        _buildContent(),
        _buildOverlay(context),
      ],
    );
  }

  Widget _buildContent() {
    switch (item.type) {
      case FeedType.video:
        return _VideoPlayer(url: item.videoUrl!);
      case FeedType.image:
        return Image.network(
          item.images!.first,
          fit: BoxFit.cover,
        );
      case FeedType.form:
        return _QuizCard(form: item.form!);
    }
  }

  Widget _buildOverlay(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(16),
      decoration: const BoxDecoration(
        gradient: LinearGradient(
          begin: Alignment.topCenter,
          end: Alignment.bottomCenter,
          colors: [Colors.transparent, Colors.black54],
          stops: [0.7, 1.0],
        ),
      ),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.end,
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              _Tag(text: item.subject.name.toUpperCase(), color: Colors.blue),
              const SizedBox(width: 8),
              _Tag(text: item.difficulty.name.toUpperCase(), color: Colors.orange),
            ],
          ),
          const SizedBox(height: 8),
          Text('@${item.user.name}',
              style: const TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
          const SizedBox(height: 8),
          Text(item.title,
              style: const TextStyle(fontSize: 16, fontWeight: FontWeight.bold)),
          Text(item.description),
          const SizedBox(height: 16),
        ],
      ),
    );
  }
}

class _Tag extends StatelessWidget {
  final String text;
  final Color color;

  const _Tag({required this.text, required this.color});

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
      decoration: BoxDecoration(
        color: color.withOpacity(0.8),
        borderRadius: BorderRadius.circular(4),
      ),
      child: Text(text, style: const TextStyle(fontSize: 10, fontWeight: FontWeight.bold)),
    );
  }
}

class _VideoPlayer extends StatefulWidget {
  final String url;
  const _VideoPlayer({required this.url});

  @override
  State<_VideoPlayer> createState() => _VideoPlayerState();
}

class _VideoPlayerState extends State<_VideoPlayer> {
  late VideoPlayerController _controller;
  ChewieController? _chewieController;

  @override
  void initState() {
    super.initState();
    _controller = VideoPlayerController.network(widget.url)
      ..initialize().then((_) {
        setState(() {
          _chewieController = ChewieController(
            videoPlayerController: _controller,
            autoPlay: true,
            looping: true,
            showControls: false,
            aspectRatio: _controller.value.aspectRatio,
          );
        });
      });
  }

  @override
  void dispose() {
    _controller.dispose();
    _chewieController?.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return _chewieController != null && _chewieController!.videoPlayerController.value.isInitialized
        ? Chewie(controller: _chewieController!)
        : const Center(child: CircularProgressIndicator());
  }
}

class _QuizCard extends StatelessWidget {
  final QuizForm form;
  const _QuizCard({required this.form});

  @override
  Widget build(BuildContext context) {
    return Container(
      color: const Color(0xFF2C3E50),
      padding: const EdgeInsets.all(32),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          const Icon(Icons.quiz, size: 64, color: Colors.white),
          const SizedBox(height: 24),
          Text(
            form.question,
            style: const TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
            textAlign: TextAlign.center,
          ),
          const SizedBox(height: 32),
          ...form.options.asMap().entries.map((entry) => Padding(
                padding: const EdgeInsets.only(bottom: 16),
                child: SizedBox(
                  width: double.infinity,
                  child: ElevatedButton(
                    onPressed: () {},
                    child: Text(entry.value),
                  ),
                ),
              )),
        ],
      ),
    );
  }
}
