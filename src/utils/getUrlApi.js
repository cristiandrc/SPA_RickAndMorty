import getData from "@utils/getData"

const API = 'https://rickandmortyapi.com/api/character/?page='
let count = 1


const getUrlApi = () => {
    let API_PAGE = API + count
    count++
    return API_PAGE
}

export default getUrlApi