export interface RepliesResponse {
  replies: Replies;
}

export interface Replies {
  comments: Comment[];
}

export interface Comment {
  kind: string;
  etag: string;
  id: string;
  snippet: Snippet;
}

export interface Snippet {
  channelId: string;
  videoId: string;
  textDisplay: string;
  textOriginal: string;
  parentId: string;
  authorDisplayName: string;
  authorProfileImageUrl: string;
  authorChannelUrl: string;
  authorChannelId: AuthorChannelId;
  canRate: boolean;
  viewerRating: string;
  likeCount: number;
  publishedAt: string;
  updatedAt: string;
}

export interface AuthorChannelId {
  value: string;
}
