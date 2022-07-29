import {
  CHANGE_INPUT_VALUE,
  GET_INIT_LISTS,
  INIT_LIST_ACTION,
  SUBMIT,
} from "./actionTypes";
import axios from "axios";

export const getInputChangeAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value,
});

export const getAddItemAction = () => ({
  type: SUBMIT,
});

export const getInitLIst = () => ({
  type: GET_INIT_LISTS,
});

export const initialListAction = (data) => ({
  type: INIT_LIST_ACTION,
  data,
});

// 返回的是函数，而不是对象
export const getTodoList = () => {
  // return async (dispatch) => {
  //   const { data } = await axios.get("/api");
  //   dispatch(initialListAction(data));
  // };

  return (dispatch) => {
    axios.get("/api").then((res) => {
      const data = res.data;
      dispatch(initialListAction(data));
    });
  };
};
