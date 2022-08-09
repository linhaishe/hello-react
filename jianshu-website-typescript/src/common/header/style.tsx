import styled from 'styled-components';
import logoPic from '../../statics/logo.png';

export const HeaderWrapper = styled.div`
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
  max-width: 1440px;
  display: flex;
  justify-content: space-between;
`;

export const Logo = styled.a.attrs({
  href: '/',
})`
  display: inline-block;
  width: 90px;
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
  background: url(${logoPic});
  background-size: contain;
  //border: 1px solid red;
`;

export const Nav = styled.div`
  width: 960px;
  height: 100%;
  //border: 1px solid blue;
`;

export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  //border: 1px solid red;
  &.left {
    float: left;
  }

  &.right {
    float: right;
    color: #969696;
    .iconfont {
      font-size: 25px;
    }
  }

  &.active {
    color: #ea6f5a;
  }
`;

export const NavSearch = styled.input.attrs({
  placeholder: 'search',
})`
  width: 160px;
  height: 38px;
  padding: 0 20px;
  margin-top: 9px;
  margin-left: 20px;
  box-sizing: border-box;
  border: none;
  outline: none;
  border-radius: 19px;
  background: #eee;
  font-size: 14px;
  &::placeholder {
    color: #999;
  }
`;

export const SearchInfo = styled.div`
  position: absolute;
  left: 140px;
  top: 56px;
  width: 200px;
  padding: 0 20px;
  //height: 100px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  background-color: white;
`;

export const TopSearch = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SearchInfoTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
`;

export const SearchInfoSwitch = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  line-height: 20px;
  font-size: 13px;
  color: #787878;
`;

export const SearchInfoItem = styled.a`
  display: inline-block;
  line-height: 20px;
  padding: 0 5px;
  font-size: 12px;
  border: 1px solid #ddd;
  color: #787878;
  border-radius: 3px;
  margin-bottom: 15px;
  margin-right: 3px;
`;

export const Addition = styled.div`
  display: flex;
  height: 56px;
`;

export const Button = styled.div`
  width: 60px;
  height: 38px;
  line-height: 38px;
  margin-top: 9px;
  margin-right: 20px;
  border-radius: 19px;
  border: 1px solid #ec6149;
  padding: 0 20px;
  text-align: center;
  font-size: 14px;
  &.reg {
    color: #ec6149;
  }
  &.writting {
    color: #fff;
    background: #ec6149;
    .icon {
      font-size: 14px;
    }
  }
`;

export const SearchWrapper = styled.div`
  position: relative;
  .iconfont {
    position: absolute;
    right: 630px;
    bottom: 4px;
    width: 30px;
    height: 30px;
    line-height: 30px;
    border-radius: 30px;
    box-sizing: border-box;
    text-align: center;
    font-size: 23px;
  }
`;
