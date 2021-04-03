import getData from "@utils/getData"

const API = 'https://rickandmortyapi.com/api/character/?page='
let count = 1


const getUrlApi = () => {
    let API_PAGE = API + count
    count++
    const SEARCH = location.search
    console.log(SEARCH)
    return API_PAGE + SEARCH
}

export default getUrlApi