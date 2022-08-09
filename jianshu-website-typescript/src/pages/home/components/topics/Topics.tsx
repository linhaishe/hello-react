import React, { useEffect } from 'react';
import { useAppSelector } from '../../../../store/hooks';
import { TopicItem, TopicWrapper } from '../../style';
import { TopicProps } from '../../../../store/reducer/homeReducer/model';

function Topics() {
  const { topicList } = useAppSelector((state) => state.home);
  return (
    <TopicWrapper>
      {topicList.map((item: TopicProps) => (
        <TopicItem key={item.id}>
          <img alt='' className='topic-pic' src={item.imgUrl} />
          {item.title}
        </TopicItem>
      ))}
    </TopicWrapper>
  );
}

export default Topics;
