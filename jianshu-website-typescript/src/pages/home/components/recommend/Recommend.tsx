import React from 'react';
import { RecommendItem, RecommendWrapper } from '../../style';
import { useAppSelector } from '../../../../store/hooks';
import { BannerProps } from '../../../../store/reducer/homeReducer/model';

function Recommend() {
  const { bannerPics } = useAppSelector((state) => state.home);

  return (
    <RecommendWrapper>
      {bannerPics.map((item: BannerProps) => (
        <RecommendItem key={item.id} imgUrl={item.imgUrl} />
      ))}
    </RecommendWrapper>
  );
}

export default Recommend;
