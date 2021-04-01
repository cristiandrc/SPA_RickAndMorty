const getHash = () =>  
    location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/' // funciona como return



export default getHash;