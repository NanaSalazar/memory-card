export interface Card {
    id: string,
    description: string,
    img: string
}

//Estrutura de cartas únicas respeitando a interface

const uniqueCards: Card[] = [
    {img: '01.jpg', description: 'card 1', id: 'card01'},
    {img: '02.jpg', description: 'card 2', id: 'card02'},
    {img: '03.jpg', description: 'card 3', id: 'card03'},
    {img: '04.jpg', description: 'card 4', id: 'card04'},
    {img: '05.png', description: 'card 5', id: 'card05'},
    {img: '06.jpg', description: 'card 6', id: 'card06'},
    {img: '07.jpg', description: 'card 7', id: 'card07'},
    {img: '08.jpg', description: 'card 8', id: 'card08'}
]

const originalCards: Card[] = []


//A função deve retornar um número inteiro
function shuffleNumber(min: number, max: number) {
    const n = Math.random() * (max - min + 1) + min
    return parseInt(n.toString())
}



uniqueCards.forEach( (card) => {
    originalCards.push( { ...card})
    originalCards.push( { ...card})
})

const cards: Card[] = []

const len = originalCards.length
while(cards.length < len) {
    let shuffled = shuffleNumber(0, originalCards.length - 1)
    const item = originalCards.splice(shuffled, 1)
    cards.push(item[0])
}




export { cards }