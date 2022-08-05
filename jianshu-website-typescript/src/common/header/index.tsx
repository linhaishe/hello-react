import React, { useState } from 'react';
import { useDispatch, connect } from 'react-redux';

import {
  Addition,
  Button,
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  SearchWrapper,
} from './style';

function Header() {
  const dispatch = useDispatch();
  const isFocused = useState(true);

  return (
    <HeaderWrapper>
      <Logo />
      <Nav>
        <NavItem className='left active'>首页</NavItem>
        <NavItem className='left'>下载App</NavItem>
        <NavItem className='right'>登陆</NavItem>
        <NavItem className='right'>
          <span className='iconfont icon-AApay' />
        </NavItem>
        <SearchWrapper>
          <NavSearch />
          <span className='iconfont icon-search' />
        </SearchWrapper>
      </Nav>
      <Addition>
        <Button className='reg'>注册</Button>
        <Button className='writting'>
          <span className='iconfont icon-yongyan' />
          写文章
        </Button>
      </Addition>
    </HeaderWrapper>
  );
}
const mapStateToProps = (state) => state.todolistReducer;
const mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
