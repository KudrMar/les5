import { Bowman } from "../../js/Bowman.js";
import { Magician } from "../../js/Magician.js";
import { Daemon } from "../../js/Daemon.js";
import { Swordsman } from "../../js/Swordsman.js";
import { Undead } from "../../js/Undead.js";
import { Zombie } from "../../js/Zombie.js";
import { Character } from "../../js/Character.js";

const bowman = new Bowman("Вася");
test('Bowerman new', () => {

  const comparison = {
       "attack": 25,
       "defence": 25,
       "health": 100,
        "level": 1,
        "name": "Вася",
       "type": "Bowman",
      }

  expect(bowman).toEqual(comparison);
});

const magician = new Magician("Вася");
test('Magician new', () => {

  const comparison = {
       "attack": 10,
       "defence": 40,
       "health": 100,
        "level": 1,
        "name": "Вася",
       "type": "Magician",
      }

  expect(magician).toEqual(comparison);
});

const daemon = new Daemon("Вася");
test('Daemon new', () => {

  const comparison = {
       "attack": 10,
       "defence": 40,
       "health": 100,
        "level": 1,
        "name": "Вася",
       "type": "Daemon",
      }

  expect(daemon).toEqual(comparison);
});

const swordsman = new Swordsman("Вася");
test('Swordsman new', () => {

  const comparison = {
       "attack": 40,
       "defence": 10,
       "health": 100,
        "level": 1,
        "name": "Вася",
       "type": "Swordsman",
      }

  expect(swordsman).toEqual(comparison);
});

const undead = new Undead("Вася");
test('Undead new', () => {

  const comparison = {
       "attack": 25,
       "defence": 25,
       "health": 100,
        "level": 1,
        "name": "Вася",
       "type": "Undead",
      }

  expect(undead).toEqual(comparison);
});

const zombie = new Zombie("Вася");
test('Zombie new', () => {

  const comparison = {
       "attack": 40,
       "defence": 10,
       "health": 100,
        "level": 1,
        "name": "Вася",
       "type": "Zombie",
      }

  expect(zombie).toEqual(comparison);
});

const zombieLevelUp = new Zombie("Вася");
zombieLevelUp.levelUp();
test('Zombie levelUp', () => {

  const comparison = {
       "attack": 48,
       "defence": 12,
       "health": 100,
        "level": 2,
        "name": "Вася",
       "type": "Zombie",
      }

  expect(zombieLevelUp).toEqual(comparison);
});


const zombieDamage = new Zombie("Вася");
zombieDamage.damage(10);
test('Zombie damage', () => {

  const comparison = {
       "attack": 40,
       "defence": 10,
       "health": 91,
        "level": 1,
        "name": "Вася",
       "type": "Zombie",
      }

  expect(zombieDamage).toEqual(comparison);
});


test('name exception', () => {
  expect(() => new Zombie("В")).toThrowError(
    "Имя должно быть от 2 до 10 символов!"
  );
});

test('type exception', () => {
  expect(() => new Character("Вася")).toThrowError(
    "Недопустимый тип персонажа!"
  );
});

const zombieLevelUpForDead = new Zombie("Вася");
zombieLevelUpForDead.health = 0;

test('Zombie levelUp for dead', () => {
  expect(() => zombieLevelUpForDead.levelUp()).toThrowError(
    "Нельзя повысить левел умершего!"
  );
});