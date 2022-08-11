import React from 'react';
import { Link } from 'react-router-dom';
import { ListItem, ListInfo, LoadMore } from '../../style';
import { useAppSelector } from '../../../../store/hooks';
import { ArticleProps } from '../../../../store/reducer/homeReducer/model';
// rgrg
function Lists() {
  const { articleLists } = useAppSelector((state) => state.home);
  function getArticleLists() {
    if (articleLists.length) {
      return articleLists.map((item: ArticleProps) => (
        <ListItem key={item.id}>
          <Link to={`/details/${item.id}`}>
            <img alt='' src={item.imgUrl} className='pic' />
            <ListInfo>
              <h3 className='title'>{item.title}</h3>
              <p className='desc'>{item.desc}</p>
            </ListInfo>
          </Link>
        </ListItem>
      ));
    }
    return null;
  }

  return (
    <div>
      {getArticleLists()}
      <LoadMore>更多内容</LoadMore>
    </div>
  );
}

export default Lists;
