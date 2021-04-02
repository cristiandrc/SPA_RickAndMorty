import getData from "@utils/getData"

const API = 'https://rickandmortyapi.com/api/character/?page='
let count = 0


const getUrlApi = () => {
    let API_PAGE = API + count
    count++
    console.log('Generador de la URL API '+count)
    return API_PAGE
}

export default getUrlApi