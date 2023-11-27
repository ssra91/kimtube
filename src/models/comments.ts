import { Replies } from "@/src/models/replies";

export interface CommentsResponse {
  kind: string;
  etag: string;
  nextPageToken: string;
  pageInfo: PageInfo;
  items: ICommentItem[];
}

export interface PageInfo {
  totalResults: number;
  resultsPerPage: number;
}

export interface ICommentItem {
  kind: string;
  etag: string;
  id: string;
  snippet: Snippet;
  replies: Replies;
}

export interface Snippet {
  channelId: string;
  videoId: string;
  topLevelComment: TopLevelComment;
  canReply: boolean;
  totalReplyCount: number;
  isPublic: boolean;
}

export interface TopLevelComment {
  kind: string;
  etag: string;
  id: string;
  snippet: Snippet2;
}

export interface Snippet2 {
  channelId: string;
  videoId: string;
  textDisplay: string;
  textOriginal: string;
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
