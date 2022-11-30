import { ActionTypes } from "./ActionTypes";
export const ProgrammersReposReducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.allProgrammers:
      return {
        ...state,
        allProgrammers: action.payload,
      };

    case ActionTypes.setFilteredProgrammers:
      return {
        ...state,
        filteredProgrammers: state.allProgrammers.filter(
          (programmer) =>
            programmer.login.includes(action.payload) ||
            programmer.email.includes(action.payload)
        ),
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
