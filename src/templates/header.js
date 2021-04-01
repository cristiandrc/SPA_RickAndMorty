import github from  '@images/github.png'
import twitter from '@images/twitter.png'
import instagram from '@images/instagram.png'
import logo from '@images/logo.png'

const Header = () => {
    const view = `
    <a href="#/" class="header-logo">
        <img src="${logo}" alt="Logo Rick & Morty">
    </a>
    <nav class="header-nav">
        <a href="#">
            <img src="${github}" alt="logo github">
        </a>
        <a href="#">
            <img src="${twitter}" alt="logo twitter">
        </a>
    </nav>
    `

    return view
}

export default Header