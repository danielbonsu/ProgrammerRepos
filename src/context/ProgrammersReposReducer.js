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
            programmer?.login?.includes(action.payload.toLowerCase().trim()) ||
            programmer?.email?.includes(action.payload.toLowerCase().trim())
        ),
      };

    case ActionTypes.setLoading:
        return {
            ...state,
            loading: action.payload
        }

    case ActionTypes.clearFiltered:
        return {
            ...state,
            filteredProgrammers: []
        }

    default:
      return state;
  }
};
