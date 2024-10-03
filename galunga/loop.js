let counter = 0
while (counter <= 5){
    if(counter % 2 === 0){
        console.log("counter: (even) " + counter)
    }
    else{
        console.log("counter: (odd) " + counter)
    }
//counter + 1 = counter++
    counter++
}
console.log ("done")

//all the top stuff summarized [let = 0; while condition; full action]
for(let i = 0; i <= 5; i++){
    if(i % 2 === 0){
        console.log("2counter: (even) " + i)
    }
    else{
        console.log("2counter: (odd) " + i)
    }
}
console.log("done")