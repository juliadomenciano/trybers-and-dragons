import Energy, { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype implements Energy {
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
    this.type_ = 'mana';
    this.amount = amount;
    Mage._orderCount += 1;
  }

  get energyType(): EnergyType {
    return this.type_;
  }

  static createdArchetypeInstances(): number {
    return Mage._orderCount;
  }
}