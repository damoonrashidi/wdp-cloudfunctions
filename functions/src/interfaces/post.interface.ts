export interface Post {
  title: string;
  author: string;
  points: number;
  category: string;
  url: string;
  comments: number;
}

export interface HNPost {
  created_at: Date;
  title: string;
  url: string;
  author: string;
  points: number;
  story_text: string;
  comment_text?: any;
  num_comments: number;
  story_id?: any;
  story_title?: any;
  story_url?: any;
  parent_id?: any;
  created_at_i: number;
  _tags: string[];
  objectID: string;
  _highlightResult: any;
}

export interface RedditPost {
  approved_at_utc?: any;
  subreddit: string;
  selftext: string;
  author_fullname: string;
  saved: boolean;
  mod_reason_title?: any;
  gilded: number;
  clicked: boolean;
  title: string;
  link_flair_richtext: any[];
  subreddit_name_prefixed: string;
  hidden: boolean;
  pwls?: number;
  link_flair_css_class: string;
  downs: number;
  thumbnail_height?: number;
  hide_score: boolean;
  name: string;
  quarantine: boolean;
  link_flair_text_color: string;
  author_flair_background_color: string;
  subreddit_type: string;
  ups: number;
  domain: string;
  media_embed: any;
  thumbnail_width?: number;
  author_flair_template_id?: any;
  is_original_content: boolean;
  user_reports: any[];
  secure_media: any;
  is_reddit_media_domain: boolean;
  is_meta: boolean;
  category?: any;
  secure_media_embed: any;
  link_flair_text: string;
  can_mod_post: boolean;
  score: number;
  approved_by?: any;
  thumbnail: string;
  edited: any;
  author_flair_css_class: string;
  author_flair_richtext: any[];
  gildings: any;
  post_hint: string;
  content_categories?: any;
  is_self: boolean;
  mod_note?: any;
  created: number;
  link_flair_type: string;
  wls?: number;
  banned_by?: any;
  author_flair_type: string;
  contest_mode: boolean;
  selftext_html: string;
  likes?: any;
  suggested_sort?: any;
  banned_at_utc?: any;
  view_count?: any;
  archived: boolean;
  no_follow: boolean;
  is_crosspostable: boolean;
  pinned: boolean;
  over_18: boolean;
  preview: any;
  media_only: boolean;
  link_flair_template_id: string;
  can_gild: boolean;
  spoiler: boolean;
  locked: boolean;
  author_flair_text?: any;
  visited: boolean;
  num_reports?: any;
  distinguished?: any;
  subreddit_id: string;
  mod_reason_by?: any;
  removal_reason?: any;
  link_flair_background_color: string;
  id: string;
  report_reasons?: any;
  author: string;
  num_crossposts: number;
  num_comments: number;
  send_replies: boolean;
  whitelist_status: string;
  mod_reports: any[];
  author_flair_text_color: string;
  permalink: string;
  parent_whitelist_status: string;
  stickied: boolean;
  url: string;
  subreddit_subscribers: number;
  created_utc: number;
  media: any;
  is_video: boolean;
}
