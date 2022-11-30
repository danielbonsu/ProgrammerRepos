import { ActionTypes } from "./ActionTypes";
export const ProgrammersReposReducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.searchProgrammer:
      return {
        ...state,
        programmers: action.payload,
      };

    case ActionTypes.setLoading:
      return {
        ...state,
        loading: !state.loading,
      };

    default:
      return state;
  }
};
