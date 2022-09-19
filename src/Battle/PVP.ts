import Battle from './Battle';

export default class PVP extends Battle {
  constructor(player1: Battle, player2) {
    super(player1);
  }

  fight(): number {
    return super.fight();
  }
}