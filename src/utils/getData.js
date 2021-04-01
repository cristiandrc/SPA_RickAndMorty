const API = 'https://rickandmortyapi.com/api/character/';



const getData = async (id) => {
    const APIURL = id ? `${API}${id}` : API
    try{
        const response =  await fetch(APIURL)
        const data = await response.json()
        return data

    } catch(err) {
        console.log('getData error', err)
    }
}

export default getData