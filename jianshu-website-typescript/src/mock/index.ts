import Mock, { Random } from 'mockjs';

export const data = Mock.mock('/topSearchList', {
  success: true,
  data: [
    'Racing car',
    'Japanese princess',
    'Australian walks',
    'Man charged over',
    'Los Angeles',
    'hiwdfibwerif',
    'Los Angeles1',
    'Los Angeles2',
    'Los Angeles3',
    'Los Angeles4',
    'Los Angeles5',
  ],
});

export const homeData = Mock.mock('/home', {
  success: true,
  data: {
    'topicList|1-10': [
      {
        id: () => Random.increment(),
        title: () => Random.cword(5, 7),
        imgUrl: () => Random.image('1400x900', '#02adea', '#fff', 'png', 'topicList'),
      },
    ],
    'articleLists|1-10': [
      {
        id: () => Random.increment(),
        title: () => Random.cword(5, 80),
        desc: () => Random.cword(5, 200),
        imgUrl: () => Random.image('1400x900', '#02adea', 'articleLists'),
      },
    ],
    'bannerPics|4': [
      {
        id: () => Random.increment(),
        imgUrl: () => Random.image('1400x900', '#02adea', 'bannerPics'),
      },
    ],
  },
});

export const detailsData = Mock.mock('/detail', {
  success: true,
  data: {
    title: () => Random.cword(5, 7),
    imgUrl: () => Random.image('1400x900', '#02adea', 'detailImg'),
    content: () => Random.cword(300, 1000),
  },
});
