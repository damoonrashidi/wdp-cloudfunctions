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
exports.listings = functions.https.onRequest((_, res) => __awaiter(this, void 0, void 0, function* () {
    const API = `https://www.reddit.com/user/tehrash/m/work.json`;
    const data = (yield (yield node_fetch_1.default(API)).json()).data.children.map(r => r.data);
    const posts = data.map(post => ({
        title: post.title,
        author: post.author,
        points: post.ups - post.downs,
        category: post.subreddit
    }));
    res.send(posts);
}));
//# sourceMappingURL=index.js.map