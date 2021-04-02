import home from '@pages/home'
import getData from '@utils/getData'

const container = null || document.getElementById('main-container')
let allPages 
let page = 32


const getPages = async () => {
    const data = await getData(' ')//se envia ' ' para que no ejecute el contador de GetUrlApi :)
    allPages = data.info.pages
}
window.addEventListener('load', getPages())



const detectScrolly = async () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY

    if(Math.ceil(scrolled) === scrollable  && page <= allPages){
        page ++
        console.log('pagina actual ' + page)
        container.innerHTML += await home()
        
    }
}

export default detectScrolly