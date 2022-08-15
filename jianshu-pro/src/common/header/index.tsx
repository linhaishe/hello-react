import React, { useState, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import * as actionCreators from '../../store/actionCreators/headerActionCreators';
import {
  Addition,
  Button,
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  SearchInfo,
  SearchInfoItem,
  SearchInfoSwitch,
  SearchInfoTitle,
  SearchWrapper,
  TopSearch,
} from './style';

function Header() {
  const [lists, setLists] = useState([]);
  const [mouseIn, setMouseIn] = useState(false);
  const { isFocused, listforReducer } = useAppSelector((state) => state.header);
  // const list222 = useAppSelector((state) => state.header);44
  const dispatch = useAppDispatch();
  const { searchInputFocus, getTopSearchListforReducer } = bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
    if (!lists.length) {
      axios
        .get('/topSearchList')
        .then((res) => {
          setLists(res.data.data);
        })
        .catch((err) => console.log(err));
    }
  }, []);

  // useEffect(() => {
  //   console.log(1);
  //   getTopSearchListforReducer();
  // }, [lists]);
  // Hooks can only be called inside of the body of a function component.
  // useAppDispatch 只能在函数组件内使用，单独文件夹下无法使用
  // 1.单独文件下下，使用redux的dispatch功能 2. 或者单独把actionCreator的对象单独都放在一的文件中

  // const dispatch = useAppDispatch();
  // const testttt = () => {
  //   dispatch({
  //     type: 'isFocus',
  //     payload: !isFocused
  //   });
  // };44

  function getSearchInfoArea() {
    if (isFocused || mouseIn) {
      return (
        <SearchInfo onMouseEnter={() => setMouseIn(true)} onMouseLeave={() => setMouseIn(false)}>
          <TopSearch>
            <SearchInfoTitle>热门搜索</SearchInfoTitle>
            <SearchInfoSwitch>换一换</SearchInfoSwitch>
          </TopSearch>
          {lists.map((item) => (
            <SearchInfoItem key={item}>{item}</SearchInfoItem>
          ))}
        </SearchInfo>
      );
    }
    return null;
  }

  return (
    <HeaderWrapper>
      <Link to='/'>
        <Logo />
      </Link>
      <Nav>
        <NavItem className='left active'>首页</NavItem>
        <NavItem className='left'>下载App</NavItem>
        <NavItem className='right'>退出</NavItem>
        <NavItem className='right'>
          <span className='iconfont icon-AApay' />
        </NavItem>
        <SearchWrapper>
          <NavSearch onFocus={() => searchInputFocus(!isFocused)} onBlur={() => searchInputFocus(!isFocused)} />
          <span className='iconfont icon-search' />
          {getSearchInfoArea()}
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
