import home from '@pages/home'
import getData from '@utils/getData'

const container = null || document.getElementById('main-container')
let allPages 
let page = 2


const getPages = async () => {
    const SEARCH = location.search
    
    const data = await getData(' ',SEARCH)//se envia ' ' para que no ejecute el contador de GetUrlApi :)
    
    allPages = data.info.pages
    console.log(allPages + ' yo soy el total de paginas')
}
window.addEventListener('load', getPages())
// window.addEventListener('search', getPages)




const detectScrolly = async () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY

    if(Math.ceil(scrolled) === scrollable  && page <= allPages){
        page ++
        container.innerHTML += await home()
    }
}

export default detectScrolly