const container = document.getElementById("container")

for(let i = 1; i <= 40; i++ ) {
    container.innerHTML += `
    <img src='https://rickandmortyapi.com/api/character/avatar/${i}.jpeg'/>
`
}
