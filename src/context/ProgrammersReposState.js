import ProgrammersContext from "./ProgrammersReposContext";
import { useReducer } from "react";
import {ProgrammersReposReducer} from "./ProgrammersReposReducer"
import axios from "axios";
import { api } from "../components/api/GitHubAPI";
import { ActionTypes } from "./ActionTypes";





const ProgrammerReposState = ({children}) => {
    const initialState = {
        allProgrammers: [],
        filteredProgrammers: [],
        repos: [],
        loading: false
    }

    const [state, dispatch] =  useReducer(ProgrammersReposReducer, initialState)


    // actions
    

    // filter users
    const searchProgrammer = async searchText => {
       
        try {
            const apiRes = await api(searchText)

            dispatch({
                type: ActionTypes.setFilteredProgrammers,
               
            })
        } catch (error) {
            console.log(error.message)
        }

    
        

    }


    // get all programmers
    
    const getAllProgrammers =  async () => {
        
        const apiRes =  await api()
        const getProgrammersFullDetails = apiRes && apiRes.map(async user => {
            return  await api(`/users/${user.login}`)
            
        })

        const fullProgrammersFullDetailsFin = await Promise.all(getProgrammersFullDetails)
    
        dispatch({
            type: ActionTypes.allProgrammers,
            payload: fullProgrammersFullDetailsFin
        })
    }

    return <ProgrammersContext.Provider value={{
       allProgrammers: state.allProgrammers,
       filteredProgrammers:state.filteredProgrammers,
       searchProgrammer,
       getAllProgrammers
    }}>
        {children}
    </ProgrammersContext.Provider>
}


export default ProgrammerReposState