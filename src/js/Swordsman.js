import { Character } from '../js/Character.js';

export class Swordsman extends Character {
	constructor(name) {
		super(name, "Swordsman");
		this.type = "Swordsman";
        this.attack = 40;
        this.defence = 10;
	}
}