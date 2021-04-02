import getData from '@utils/getData'
import getHash from '../utils/getHash';

const character = async () => {
    const id = getHash()
    const data = await getData(id);
    const view = `
    <section class="details">
        <div class="details-container"> 
            <article class="details-main">
                <img src="${data.image}" alt="">
                <h2>${data.name}</h2>
            </article>

            <article class="details-general">
                <h3>Status:<span>  ${data.status}</span></h3>
                <h3>Species:<span>  ${data.species}</span></h3>
                <h3>Gender:<span>  ${data.gender}</span></h3>
                <h3>Origen:<span>  ${data.origin.name}</span></h3>
            </article>
        </div>
    </section>

    `
    return view
}

export default character