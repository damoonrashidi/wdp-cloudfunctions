import * as functions from 'firebase-functions';
import fetch from 'node-fetch';
import { Post } from './interfaces/post.interface';

export const listings = functions.https.onRequest(async (_, res) => {
  const API = `https://www.reddit.com/user/tehrash/m/work.json`;
  const data: Post[] = (await (await fetch(API)).json()).data.children.map(
    r => r.data
  );
  const posts = data.map(post => ({
    title: post.title,
    author: post.author,
    points: post.ups - post.downs,
    category: post.subreddit
  }));
  res.send(posts);
});
