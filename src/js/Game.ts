import { Card } from './Card'

export class Game {
    constructor(private dom: HTMLDivElement, private cards: Card[]) {

    }

    init() {
        console.log('funcionando')
        this.dom.innerHTML = `
            ${this.cards.map( card => {`
            <div class="card" data-card="${card.id}">
                <img src="img/${card.img}" class="card-front" alt="">
                <img src="img/back.jpg" class="card-back" alt="">
            </div>
            `}).join('')}
        `
    }
}
