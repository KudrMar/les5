import { Character } from '../js/Character.js';

export class Daemon extends Character {
	constructor(name) {
		super(name, "Daemon");
		this.type = "Daemon";
        this.attack = 10;
        this.defence = 40;
	}
}