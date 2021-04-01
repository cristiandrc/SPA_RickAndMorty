import getData from '@utils/getData'

const home = async () => {
    const data = await getData()
    const view = `
    <div class="character">
        ${data.results.map(result => `
            <article>
            <a href="#/${result.id}/">
                <img src="${result.image}" alt="imagen de ${result.name}">
                <h2>${result.name}</h2>
            </a>
            </article>
        `).join('')}
    </div>
    `

    return view
}

export default home