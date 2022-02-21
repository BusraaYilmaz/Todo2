import { notesInitialState } from "./notesInitialStage";

export const notesReducer = (state = notesInitialState) => {
  return {
    ...state,
    note: action.payload,
  };
};
