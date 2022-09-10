import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { elementActions } from "../services/getElement";

const actions = {
  ...elementActions,
};

export const useAction = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};
