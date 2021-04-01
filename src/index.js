import './sass/style.scss'
import Router from './routes/router'
import getData from '@utils/getData'
const url = 'https://rickandmortyapi.com/api/character/';


const hola = async () => {
    let hola = await getData(url)
    console.log(hola)
}

hola()

window.addEventListener('load', Router())