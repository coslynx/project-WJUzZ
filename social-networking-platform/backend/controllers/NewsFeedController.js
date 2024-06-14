import express from 'express';
import NewsFeed from '../models/NewsFeed';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const newsFeed = await NewsFeed.find().populate('user').sort({ createdAt: -1 });
    res.json(newsFeed);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

router.post('/', async (req, res) => {
  const { user, content } = req.body;

  try {
    const newPost = new NewsFeed({
      user,
      content
    });

    await newPost.save();
    res.json(newPost);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

router.put('/:id', async (req, res) => {
  const { content } = req.body;

  try {
    let post = await NewsFeed.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ msg: 'Post not found' });
    }

    post.content = content;

    await post.save();
    res.json(post);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

router.delete('/:id', async (req, res) => {
  try {
    let post = await NewsFeed.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ msg: 'Post not found' });
    }

    await post.remove();
    res.json({ msg: 'Post removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

export default router;