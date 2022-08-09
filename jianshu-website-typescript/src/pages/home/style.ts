import styled from 'styled-components';

export const HomeWrapper = styled.div`
  overflow: hidden;
  width: 1200px;
  margin: 0 auto;
  //border: 1px solid yellow;
`;

export const HomeLeft = styled.div`
  float: left;
  margin-left: 15px;
  padding-top: 30px;
  width: 700px;
  //border: 1px solid green;
  .banner-img {
    width: 100%;
    height: 270px;
  }
`;

export const HomeRight = styled.div`
  width: 440px;
  float: right;
  //border: 1px solid pink;
`;

export const TopicWrapper = styled.div`
  overflow: hidden;
  padding: 20px 0 10px 0;
  margin-left: -30px;
  display: flex;
  flex-wrap: wrap;
  border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
  height: 32px;
  line-height: 32px;
  background: #f7f7f7;
  font-size: 14px;
  color: #000;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  padding-right: 10px;
  margin-left: 30px;
  margin-bottom: 10px;
  .topic-pic {
    display: block;
    float: left;
    width: 32px;
    height: 32px;
    margin-right: 10px;
  }
`;

export const ListItem = styled.div`
  padding: 20px;
  border-bottom: 1px solid #dcdcdc;
  //border: 1px solid pink;
  overflow: hidden;
  .pic {
    display: block;
    width: 125px;
    height: 100px;
    float: right;
    border-radius: 10px;
  }
`;
export const ListInfo = styled.div`
  width: 500px;
  float: left;

  .title {
    line-height: 27px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }

  .desc {
    font-size: 13px;
    line-height: 24px;
    color: #999;
    margin-top: 5px;
  }
`;

export const RecommendWrapper = styled.div`
  margin: 30px 0;
  width: 280px;
`;

interface UrlProps {
  imgUrl: string;
}

export const RecommendItem = styled.div<UrlProps>`
  width: 280px;
  height: 50px;
  background: url(${(props) => props.imgUrl});
  background-size: contain;
  margin-bottom: 10px;
`;

export const WriterWrapper = styled.div`
  width: 278px;
  border: 1px solid #dcdcdc;
  border-radius: 3px;
  height: 300px;
  text-align: center;
  line-height: 300px;
`;
