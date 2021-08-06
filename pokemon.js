const container = document.querySelector('#container');
const imgUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

for( let i = 1; i<= 151; i++){
    const pokeimg = document.createElement('div')
    const label = document.createElement('span')
    label.innerText = `#${i}`
    const newImg = document.createElement('img');
    newImg.src = `${imgUrl}${i}.png`
    
    pokeimg.appendChild(newImg);
    pokeimg.appendChild(label);
    container.appendChild(pokeimg)
}
