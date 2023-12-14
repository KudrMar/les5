import { Character } from '../js/Character.js';

export class Undead extends Character {
	constructor(name) {
		super(name, "Undead");
		this.type = "Undead";
        this.attack = 25;
        this.defence = 25;
	}
}