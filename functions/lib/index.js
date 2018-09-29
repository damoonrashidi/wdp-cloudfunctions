"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const node_fetch_1 = require("node-fetch");
const mergePosts = (...posts) => posts.sort((a, b) => (a.points > b.points ? -1 : 1));
const getReddit = () => __awaiter(this, void 0, void 0, function* () {
    const redditAPI = `https://www.reddit.com/user/tehrash/m/work.json`;
    const data = (yield (yield node_fetch_1.default(redditAPI)).json()).data.children.map(r => r.data);
    return data.map(post => ({
        title: post.title,
        author: post.author,
        points: post.ups - post.downs,
        category: post.subreddit,
        url: post.url,
        comments: post.num_comments,
    }));
});
const getHN = () => __awaiter(this, void 0, void 0, function* () {
    const hnAPI = `https://hn.algolia.com/api/v1/search_by_date?tags=story&numericFilters=points%3E50`;
    const data = (yield (yield node_fetch_1.default(hnAPI)).json()).hits;
    return data.map((post) => ({
        title: post.title,
        author: post.author,
        points: post.points,
        category: 'HN',
        url: post.url,
        comments: post.num_comments,
    }));
});
exports.listings = functions.https.onRequest((_, res) => __awaiter(this, void 0, void 0, function* () {
    const redditPosts = yield getReddit();
    const hnPosts = yield getHN();
    const posts = mergePosts(...redditPosts, ...hnPosts);
    res.send(posts);
}));
//# sourceMappingURL=index.js.map