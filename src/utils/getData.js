import getUrlApi from '@utils/getUrlApi'

const API_ID = 'https://rickandmortyapi.com/api/character/'


const getData = async (id, search) => {
    const API = id ? '' : getUrlApi()
    const APIURL = search ? `${API_ID}${search}${id}` : id ?  `${API_ID}${id}` : API
    try{
        const response =  await fetch(APIURL)
        const data = await response.json()
        return data

    } catch(err) {
        console.log('getData error', err)
    }
}

export default getData