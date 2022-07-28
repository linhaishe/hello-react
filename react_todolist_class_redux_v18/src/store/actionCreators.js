import { CHANGE_INPUT_VALUE, SUBMIT } from "./actionTypes";

export const getInputChangeAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value,
});

export const getAddItemAction = () => ({
  type: SUBMIT,
});
