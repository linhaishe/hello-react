import React from 'react';
import { ListItem, ListInfo } from '../../style';
import { useAppSelector } from '../../../../store/hooks';
import { ArticleProps } from '../../../../store/reducer/homeReducer/model';

function Lists() {
  const { articleLists } = useAppSelector((state) => state.home);
  function getArticleLists() {
    if (articleLists.length) {
      return articleLists.map((item: ArticleProps) => (
        <ListItem key={item.id}>
          <img alt='' src={item.imgUrl} className='pic' />
          <ListInfo>
            <h3 className='title'>{item.title}</h3>
            <p className='desc'>{item.desc}</p>
          </ListInfo>
        </ListItem>
      ));
    }
    return null;
  }

  return <div>{getArticleLists()}</div>;
}

export default Lists;
