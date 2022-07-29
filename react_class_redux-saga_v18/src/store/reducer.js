import { CHANGE_INPUT_VALUE, INIT_LIST_ACTION, SUBMIT } from "./actionTypes";

const initialValue = {
  inputValue: "",
  data: [],
};

export default (state = initialValue, action) => {
  // 只能接受数据，不能改变数据，所以进行深拷贝。
  if (action.type === CHANGE_INPUT_VALUE) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }

  if (action.type === SUBMIT) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.data.push(newState.inputValue);
    newState.inputValue = "";
    return newState;
  }

  if (action.type === INIT_LIST_ACTION) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.data = action.data.data;
    return newState;
  }

  return state;
};
