import getData from "@utils/getData"

const API = 'https://rickandmortyapi.com/api/character/?page='
let count = 1


const getUrlApi = () => {
    let SEARCH = location.search
    let API_PAGE = `${API}${count}&${SEARCH}`
    count++
    return API_PAGE
}

export default getUrlApi