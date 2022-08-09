import Mock from 'mockjs';

export const data = Mock.mock('/topSearchList', {
  success: true,
  data: [
    'Racing car',
    'Japanese princess',
    'Australian walks',
    'Man charged over',
    'Los Angeles',
    'hiwdfibwerif',
  ],
});

export const data2 = Mock.mock('/api', {
  data: [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
  ],
});
