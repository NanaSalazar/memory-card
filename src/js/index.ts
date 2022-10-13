import { cards } from "./Card";
import { Game } from "./Game";

const dom = document.querySelector('[data-game]') as HTMLDivElement

const game = new Game(dom, cards)
game.init()

