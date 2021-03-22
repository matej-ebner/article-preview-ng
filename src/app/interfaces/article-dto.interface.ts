export interface ArticleSizeDTO {
  value: number;
}

export interface ArticleImageDTO {
  path: string;
  alt: string;
  size?: number;
}

export interface ArticleAdditionalInfoDTO {
  text: string;
}

export interface ArticleDTO {
  id: number;
  name?: string;
  short_description?: string;
  sizes?: ArticleSizeDTO[];
  images?: ArticleImageDTO[];
  additional_info?: ArticleAdditionalInfoDTO[];
}
