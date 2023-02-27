const base_url = "https://api.themoviedb.org/3";
const api_key = "a7fc86247b11632c0653045db31b40ff";

const getUrlPagination = (endpoint_url, page_number) => {
    return `${base_url}${endpoint_url}?api_key=${api_key}&page=${page_number}`
}

const getUrl = (endpoint_url) => {
    return `${base_url}${endpoint_url}?api_key=${api_key}`
}


// TODO:  Implement Search Query here...
//const getQuery = (endpointURL, query) => {
//     return 
// }

export default {getUrlPagination, getUrl};