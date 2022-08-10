import Race from './Race';

export default class Orc extends Race {
  private static _orderCount = 0;
  constructor(
    _name: string, 
    _dexterity: number,
    private _maxLifePoints: number,
  ) {
    super(_name, _dexterity);
    this._maxLifePoints = 74;
    Orc._orderCount += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Orc._orderCount;
  }
}