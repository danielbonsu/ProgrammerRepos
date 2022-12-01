import { Octokit, App } from "octokit";
import * as parse from 'parse-link-header';

export const api = async (endpoint = "/users", page=1) => {
  //   @params endpoint ===  endpoint for github endpoint

  let fullPaginatedData = []
  const octokit = new Octokit({
    auth: process.env.REACT_APP_PAT,
  });
  const url = `${endpoint}`;

//   const fullyPagenatedData = await octokit.paginate(
//     `GET ${url}`,
//     {
//       per_page: 100,
//     },
//     (response) => console.log(response.data)
//   );

  const paginatedData = await octokit.request(
    `GET ${url}`,
    {
        visibility: 'all',
        sort: 'created',
        direction: 'desc',
        per_page: 100,
        page: page
    }

  );

  return paginatedData.data



//   // Parse the pagination headers
//   const pagination = parse(paginatedData.headers.link);
  

//   // If we have a next property, we have more results to load
//   if (pagination.next) {
      
//     // Recursively call this function again
//     const response = await api(url, parseInt(pagination.next.page));
//     fullPaginatedData.push(...response);
//   }




  



  return fullPaginatedData;
};
