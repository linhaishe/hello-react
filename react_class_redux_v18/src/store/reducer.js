import { CHANGE_INPUT_VALUE, SUBMIT } from "./actionTypes";

const initialValue = {
  inputValue: "",
  data: [
    "Racing car sprays burning fuel into crowd.",
    "Japanese princess to wed commoner.",
    "Australian walks 100km after outback crash.",
    "Man charged over missing wedding girl.",
    "Los Angeles battles huge wildfires.",
  ],
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

  return state;
};
