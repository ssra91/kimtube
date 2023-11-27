export interface ChannelResponse {
  kind: string;
  etag: string;
  pageInfo: PageInfo;
  items: IChannelItem[];
}

export interface PageInfo {
  totalResults: number;
  resultsPerPage: number;
}

export interface IChannelItem {
  kind: string;
  etag: string;
  id: string;
  snippet: Snippet;
}

export interface Snippet {
  title: string;
  description: string;
  customUrl: string;
  publishedAt: string;
  thumbnails: Thumbnails;
  localized: Localized;
  country: string;
}

export interface Thumbnails {
  default: Default;
  medium: Medium;
  high: High;
}

export interface Default {
  url: string;
  width: number;
  height: number;
}

export interface Medium {
  url: string;
  width: number;
  height: number;
}

export interface High {
  url: string;
  width: number;
  height: number;
}

export interface Localized {
  title: string;
  description: string;
}
