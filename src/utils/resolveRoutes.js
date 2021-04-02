import getData from '@utils/getData'



const resolveRoutes = async (route) => {
    const data = await getData()
    const numberOfCharacter = data.info.count < 1000 ? 3 : 4

    if(route.length <= numberOfCharacter) {
        let valiRoutes = route === '/' ? route : '/'
        return valiRoutes
    }

    return `/${route}`
    
}

export default resolveRoutes