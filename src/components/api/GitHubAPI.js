import { Octokit, App } from "octokit";

export const api = async (endpoint='/users') => {
    //   @params endpoint ===  endpoint for github endpoint 
    const octokit = new Octokit({ auth: process.env.REACT_APP_PAT });
    const url = `${endpoint}`
    console.log(url, 7676)

    const { data } = await octokit.request(`GET ${url}`, {});
    const fullUserDetails = []
    return data

}