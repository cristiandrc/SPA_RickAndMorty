import './sass/style.scss'
import Router from './routes/router'
import character from '@pages/character'
import detectScrolly from '@utils/detectScrolly'



window.addEventListener('load', Router())
window.addEventListener('hashchange', character)
window.addEventListener('scroll', detectScrolly)