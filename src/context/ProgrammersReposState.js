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
    const filterProgrammers = async searchText => {
       
        try {
            dispatch({
                type: ActionTypes.setFilteredProgrammers,
                payload: searchText
               
            })
        } catch (error) {
            console.log(error.message)
        }
    }

    // clear filtered

    const clearFiltered = () => {
        dispatch({
            type: ActionTypes.clearFiltered,
        })
    }


    // get all programmers
    
    const getAllProgrammers =  async () => {
        dispatch({type: ActionTypes.setLoading, payload: true})
        const apiRes =  await api()
        const getProgrammersFullDetails = apiRes && apiRes.map(async user => {
            return  await api(`/users/${user.login}`)
            
        })

        const fullProgrammersFullDetailsFin = await Promise.all(getProgrammersFullDetails)
 
    
        dispatch({
            type: ActionTypes.allProgrammers,
            payload: fullProgrammersFullDetailsFin
        })

        dispatch({type: ActionTypes.setLoading, payload: false})
    }

    return <ProgrammersContext.Provider value={{
       allProgrammers: state.allProgrammers,
       filteredProgrammers:state.filteredProgrammers,
       loading: state.loading,
       filterProgrammers,
       getAllProgrammers,
       clearFiltered
    }}>
        {children}
    </ProgrammersContext.Provider>
}


export default ProgrammerReposState