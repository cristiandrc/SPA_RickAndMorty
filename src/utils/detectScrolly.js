import home from '@pages/home'
const container = null || document.getElementById('main-container')


const detectScrolly = async () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY

    if(Math.ceil(scrolled) === scrollable){
        
        container.innerHTML += await home()
        
        
    }
}

export default detectScrolly