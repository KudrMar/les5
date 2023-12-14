import { Character } from '../js/Character.js';

export class Bowman extends Character {
	constructor(name) {
		super(name, "Bowman");
		this.type = "Bowman";
        this.attack = 25;
        this.defence = 25;
	}
}