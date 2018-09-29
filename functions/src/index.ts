import * as functions from 'firebase-functions';
import fetch from 'node-fetch';
import { RedditPost, Post, HNPost } from './interfaces/post.interface';

const mergePosts = (...posts: Post[]): Post[] =>
  posts.sort((a, b) => (a.points > b.points ? -1 : 1));

const getReddit = async () => {
  const redditAPI = `https://www.reddit.com/user/tehrash/m/work.json`;
  const data: RedditPost[] = (await (await fetch(
    redditAPI
  )).json()).data.children.map(r => r.data);

  return data.map(post => ({
    title: post.title,
    author: post.author,
    points: post.ups - post.downs,
    category: post.subreddit,
    url: post.url,
    comments: post.num_comments,
  }));
};

const getHN = async () => {
  const hnAPI = `https://hn.algolia.com/api/v1/search_by_date?tags=story&numericFilters=points%3E50`;
  const data = (await (await fetch(hnAPI)).json()).hits;

  return data.map((post: HNPost) => ({
    title: post.title,
    author: post.author,
    points: post.points,
    category: 'HN',
    url: post.url,
    comments: post.num_comments,
  }));
};

export const listings = functions.https.onRequest(async (_, res) => {
  const redditPosts = await getReddit();
  const hnPosts = await getHN();
  const posts = mergePosts(...redditPosts, ...hnPosts);
  res.send(posts);
});
