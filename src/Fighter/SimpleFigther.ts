export default interface SimpleFighter {
  lifePoints: number
  strength: number

  attack(enemy: SimpleFighter): void;
  reciveDamage(attackPoints: number): number;
}