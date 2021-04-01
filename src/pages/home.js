import getData from '@utils/getData'

const URL = 'https://rickandmortyapi.com/api/character/';


const home = async () => {
    const data = await getData(URL)
    const view = `
    <div class="character">
        ${data.results.map(result => `
            <article>
            <a href="#/${result.id}/">
                <img src="${result.image}" alt="imagen de ${result.name}">
                <h2>${result.name}</h2>
            </a>
            </article>
        `)}
    </div>
    `

    return view
}

export default home