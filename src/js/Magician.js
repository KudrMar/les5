import { Character } from '../js/Character.js';

export class Magician extends Character {
	constructor(name) {
		super(name, "Magician");
		this.type = "Magician";
        this.attack = 10;
        this.defence = 40;
	}
}