import Archetype, { Mage } from "./Archetypes";
import Energy from "./Energy";
import Fighter from "./Fighter";
import Race, { Elf } from "./Races";
import getRandomInt from "./utils";

export default class Character implements Fighter {
  private _race: Race,
  private _archetype: Archetype,
  private _maxLifePoints: number,
  private _lifePoints: number,
  private _strength: number,
  private _defense: number,
  private _dexterity: number,
  private _energy: Energy,


  constructor(name: string, race: Race, archetype: Archetype, maxLifePoints: number, lifePoints: number, strength: number, defense: number, dexterity: number, energy: Energy){
    this._dexterity = getRandomInt(1, 10)
    this._maxLifePoints = 99/2
    this._race = new Elf(name, this._dexterity, this._maxLifePoints)
    this._archetype = new Mage(name)
    this._lifePoints = this._maxLifePoints
    this._strength = getRandomInt(1, 10)
    this._defense = getRandomInt(1, 10)
    this._energy = {type_: 'mana', amount: getRandomInt(1, 10)}

  }

  get lifePoints():number {
    return this._lifePoints
  }
  get strength():number {
    return this._strength
  }
  get defense():number {
    return this._defense
  }
  get energy(): Energy {
    return this._energy
  }
  get dexterity(): number {
    return this._dexterity
  }

  reciveDamage(attackPoints: number): number {
    if((attackPoints - this._defense) > 0) {
      this._lifePoints =- (attackPoints - this._defense);
    }
    if(this._lifePoints <= 0 ) {
      this._lifePoints = -1;
    }
    return this._lifePoints;
  }

  attack(enemy: Fighter): void {
    enemy.lifePoints =- this._strength
  }
  
  levelUp(): void {
    this._maxLifePoints =+ getRandomInt(1, 10);
    this._strength =+ getRandomInt(1, 10);
    this._dexterity =+ getRandomInt(1, 10);
    this._defense =+ getRandomInt(1, 10);
    this._energy.amount = 10;
    if(this._maxLifePoints > 99) {
      this._maxLifePoints = 99
    }
  }
}