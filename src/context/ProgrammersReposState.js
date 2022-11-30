import ProgrammersContext from "./ProgrammersReposContext";
import { useReducer } from "react";
import {ProgrammersReposReducer} from "./ProgrammersReposReducer"
import axios from "axios";


const ProgrammerReposState = ({children}) => {
    const initialState = {
        programmers: [],
        repos: [],
        loading: false
    }

    const [state, dispatch] =  useReducer(ProgrammersReposReducer, initialState)


    // actions
    
    const searchProgrammer = async searchText => {
        const apiRes =  await axios.get(`https://api.github.com/search/users?q=${searchText}`)
        console.log(apiRes.data.items, 'aaaaa')
    }

    return <ProgrammersContext.Provider value={{
       programmers: state.programmers,
       searchProgrammer
    }}>
        {children}
    </ProgrammersContext.Provider>
}


export default ProgrammerReposState