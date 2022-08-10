export default abstract class Race {
  constructor(private _name: string, private _dexterity: number) { 

  }

  get name(): string {
    return this.name;
  }

  get dexterity(): string {
    return this.name;
  }

  abstract get maxLifePoints(): number;

  static createdRacesInstances(): number {
    throw new Error('Not implemented');
    
    // return Race._orderCount;
  }
}