export interface TopicProps {
  id: number;
  title: string;
  imgUrl: string;
}

export interface BannerProps {
  id: number;
  imgUrl: string;
}

export interface ArticleProps {
  id: number;
  title: string;
  imgUrl: string;
  desc: string;
}

export interface HomeDataType {
  topicList: TopicProps[];
  articleLists: ArticleProps[];
  bannerPics: BannerProps[];
}
