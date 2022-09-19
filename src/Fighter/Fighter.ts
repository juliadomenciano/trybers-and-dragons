import Energy from '../Energy';
import SimpleFighter from './SimpleFigther';

export default interface Fighter extends SimpleFighter {
  defense: number,
  energy?: Energy

  special?(enemy: Fighter): void;
  levelUp():void;
}