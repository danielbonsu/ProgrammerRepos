import { ActionTypes } from "./ActionTypes";
export const ProgrammersReposReducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.setFilteredProgrammers:
      return {
        ...state,
        filteredProgrammers: action.payload,
      };



    case ActionTypes.setLoading:
      return {
        ...state,
        loading: action.payload,
      };

    case ActionTypes.clearFiltered:
      return {
        ...state,
        filteredProgrammers: [],
      };

    default:
      return state;
  }
};
