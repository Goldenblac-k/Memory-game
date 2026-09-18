var dimension = 150

imgs = []
for (let i = 0; i < 8; i++){
    var imgStart = Math.round((Math.random() * 100))
    imgs.push(`https://picsum.photos/id/${imgStart}/${dimension}`)
}

cards = [...imgs, ...imgs]

function shuffle(array){
    for (let i = 0; i < array.length - 2; i++){
        j = Math.round(Math.random() * i)
        tmp = cards[i]
        cards[i] = cards[j]
        cards[j] = tmp
    }
}
shuffle(cards)

console.log(cards)