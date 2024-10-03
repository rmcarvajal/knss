const moviephrases = [
    "I'll be back.",
    "Here's looking at you, kid.",
    "May the Force be with you.",
    "There's no place like home.",
    "You talking to me?",
    "I coulda been a contender.",
    "I'm gonna make him an offer he can't refuse.",
    "To infinity and beyond!",
    "I'll have what she's having.",
    "You can't handle the truth!",
    "Houston, we have a problem.",
    "I see dead people.",
    "There's no crying in baseball!",
    "I'm the king of the world!",
    "You had me at hello.",
    "Life is like a box of chocolates.",
    "Keep the change, ya filthy animal!",
    "Nobody puts Baby in a corner.",
    "You had me at 'hello.'",
    "I want the truth!",
    "Inconceivable!",
    "Just keep swimming.",
    "It's alive! It's alive!",
    "You can't handle the truth!",
    "Why so serious?",
    "I'm the one who knocks!",
    "You complete me.",
    "After all, tomorrow is another day.",
    "You shall not pass!",
    "I am your father.",
    "I'll be back.",
    "What we've got here is failure to communicate.",
    "It's a trap!",
    "E.T. phone home.",
    "The name's Bond, James Bond.",
    "Say hello to my little friend!",
    "I’m not a smart man, but I know what love is.",
    "I'll have what she's having.",
    "You're gonna need a bigger boat.",
    "Nobody puts Baby in a corner.",
    "You can't handle the truth!",
    "I wish I knew how to quit you.",
    "Just keep swimming.",
    "You had me at 'hello.'",
    "Hasta la vista, baby.",
    "Why so serious?",
    "Carpe Diem. Seize the day, boys.",
    "I am Groot.",
    "Get busy living, or get busy dying.",
    "You can't fight in here! This is the War Room!",
    "I’m king of the world!",
    "We’re not in Kansas anymore.",
    "It's not the years, honey, it's the mileage.",
    "Why don't we just wait here for a while?",
    "There's no place like home.",
    "I am your father.",
    "Just when I thought I was out, they pull me back in.",
    "I'm the king of the world!",
    "You had me at 'hello.'",
    "I see dead people.",
    "I'm too old for this shit.",
    "We're not in Kansas anymore.",
    "Life is like a box of chocolates.",
    "To infinity and beyond!",
    "The first rule of Fight Club is: You do not talk about Fight Club.",
    "You had me at 'hello.'",
    "You can't handle the truth!",
    "I'll be back.",
    "I coulda been a contender.",
    "There's no crying in baseball!",
    "You complete me.",
    "I’m going to make him an offer he can’t refuse.",
    "To infinity and beyond!",
    "I see dead people.",
    "You had me at 'hello.'",
    "You can't handle the truth!",
    "I'm not bad. I'm just drawn that way.",
    "Keep the change, ya filthy animal!",
    "I'm the king of the world!",
    "Nobody puts Baby in a corner.",
    "Why so serious?",
    "There's no place like home.",
    "I’m not a smart man, but I know what love is.",
    "I'll have what she's having.",
    "I'm the one who knocks!",
    "You talking to me?",
    "You can't fight in here! This is the War Room!",
    "You shall not pass!",
    "You had me at 'hello.'",
    "I am your father.",
    "Get busy living, or get busy dying.",
    "It's a trap!",
    "I’m king of the world!",
    "We’re not in Kansas anymore.",
    "It's alive! It's alive!",
    "What we've got here is failure to communicate.",
    "I'm the king of the world!",
    "I want the truth!",
    "After all, tomorrow is another day.",
    "You can't handle the truth!",
    "Say hello to my little friend!",
    "Inconceivable!",
    "I'm too old for this shit.",
    "Just keep swimming.",
    "Life is like a box of chocolates.",
    "I’ll be back."
];
const container = document.getElementById("container")

function renderphrases(list){
    container.innerHTML =""
    for(let i = 0; i < list.length; i++){
        const phrase = list[i]
        container.innerHTML +=`
         <div class="quote-item">
        <input type="checkbox">
        <p>${phrase}</p>
        </div>`
    }
}
function search() {
    const input = document.getElementById("input")
    const value = input.value
    if(value === ""){
        renderphrases(moviephrases)
    }
    else {
        let list =[]
        for(let i = 0; i < moviephrases.length; i++){
            const phrase = moviephrases[i]
            if(phrase.includes(value)){
                list.push(phrase)
            }
        }
        renderphrases(list)
    }
}

renderphrases(moviephrases)