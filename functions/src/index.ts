import * as functions from 'firebase-functions';
import fetch from 'node-fetch';
import { Post } from './interfaces/post.interface';
const API = `https://www.reddit.com/user/tehrash/m/work.json`;

export const listings = functions.https.onRequest(async (_, res) => {
  const posts: Post[] = (await (await fetch(API)).json()).data.children;
  const data = posts.map(post => ({
    title: post.title,
    author: post.author,
    points: post.ups - post.downs,
    category: post.subreddit,
  }));
  res.send(data);
});
