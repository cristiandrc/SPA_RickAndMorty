import getData from "@utils/getData"

const API = 'https://rickandmortyapi.com/api/character/?page='
let count = 0

const getPages = async () => {
    const data = await getData()
    let pages = data.info.pages
    return pages
}

const getUrlApi = () => {
    let API_PAGE = API + count
    count++
    console.log('hola '+count)
    return API_PAGE
}

export default getUrlApi