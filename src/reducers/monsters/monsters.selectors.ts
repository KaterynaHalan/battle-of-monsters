import { RootState } from '../../app/store';

export const selectMonsters = (state: RootState) => state.monsters.monsters;

export const selectSelectedMonster = (state: RootState) =>
  state.monsters.selectedMonster;

export const selectWinner = (state: RootState) =>
  state.monsters.winner;

export const selectLoader = (state: RootState) =>
  state.monsters.loader;
