import home from '@pages/home'

const Router = async () => {
    const container = null || document.getElementById('main-container')
    container.innerHTML = await home()


}

export default Router