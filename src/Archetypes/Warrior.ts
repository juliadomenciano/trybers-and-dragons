import Energy, { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype implements Energy {
  type_:EnergyType;
  amount: number;
  private static _orderCount = 0;
  constructor(
    _name: string,
    _cost: number,
    _special: number,
    amount: number,
  ) {
    super(_name, _special, _cost);
    this.type_ = 'stamina';
    this.amount = amount;
    Warrior._orderCount += 1;
  }

  get energyType(): EnergyType {
    return this.type_;
  }

  static createdArchetypeInstances(): number {
    return Warrior._orderCount;
  }
}