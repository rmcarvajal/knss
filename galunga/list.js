let list = ["ouppy","kibty","bnuuy"]
list.push("hampter")
list.push("fishfosh")
list.push("honse")

for(let i = 0; i < list.length; i++){
    let animal = list[i]
    console.log(animal)
}

let search = "o"
//remember caps are different characters
let searchlist = []
for(let i = 0; i < list.length; i++){
    let animal = list[i]
    if(animal.includes(search)){
        searchlist.push(animal)
    }
}
console.log(searchlist)