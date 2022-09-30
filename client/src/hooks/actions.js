import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { elementActions } from "../services/getElement";
import { lngDetectActions } from "../services/lngDetector";

const actions = {
  ...elementActions,
  ...lngDetectActions,
};

export const useAction = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};
