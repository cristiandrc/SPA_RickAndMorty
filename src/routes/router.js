import home from '@pages/home'
import character from '@pages/character'
import Error404 from '@pages/Error404'
import Header from '@templates/header'
import getHash from '@utils/getHash'
import resolveRoutes from '@utils/resolveRoutes'

const routes = {
    '/': home,
    '/:id': character,

}


// const Router = async () => {
//     const container = null || document.getElementById('main-container')
//     const header = null || document.getElementById('header')
    
//     let hash = getHash()
//     let route = await resolveRoutes(hash)
//     let render = routes[route] ? routes[route] : Error404
//     container.innerHTML = await render()
//     header.innerHTML = await Header()
// }

const Router = async () => {
    const container = null || document.getElementById('main-container')
    const header = null || document.getElementById('header')
    
    let hash = getHash()
    let route = await resolveRoutes(hash)
    let render = routes[route] ? routes[route] : Error404
    container.innerHTML = await home()
    header.innerHTML = await Header()
}

export default Router