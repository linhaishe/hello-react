import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
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
  // const isFocus = useSelector((state: RootState) => state.test);
  // const dispatch = useDispatch();

  const isFocused = useAppSelector((state) => state.isFocused);
  const dispatch = useAppDispatch();
  // dispatch({ type: '11', payload: {} });rrr

  const testttt = (test: boolean) => {
    console.log('1112222');
    dispatch({
      type: 'isFocus',
      payload: !isFocused,
    });
  };

  const log = () => {
    console.log('1112222');
  };
  // test22ddd
  return (
    <HeaderWrapper>
      <Logo />
      <Nav onClick={() => testttt(true)}>
        <NavItem className='left active'>首页</NavItem>
        <NavItem className='left'>下载App</NavItem>
        <NavItem className='right'>{isFocused.toString()}</NavItem>
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

export default Header;
