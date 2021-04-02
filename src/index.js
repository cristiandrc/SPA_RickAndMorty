import './sass/style.scss'
import Router from './routes/router'
import character from '@pages/character'



window.addEventListener('load', Router())
window.addEventListener('hashchange', character)
