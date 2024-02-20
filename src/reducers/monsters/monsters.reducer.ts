import { createReducer } from '@reduxjs/toolkit';
import { Monster } from '../../models/interfaces/monster.interface';
import { fetchMonstersData, fetchStartBattle, setSelectedMonster } from './monsters.actions';

interface MonsterState {
  monsters: Monster[];
  winner: Monster | null;
  loader: boolean;
  selectedMonster: Monster | null;
}

const initialState: MonsterState = {
  monsters: [],
  winner: null,
  loader: false,
  selectedMonster: null,
};

export const monstersReducer = createReducer(initialState, (builder) => {
  builder.addCase(fetchMonstersData.pending, (state) => ({
    ...state,
    monsters: [],
  }));

  builder.addCase(fetchMonstersData.rejected, (state) => ({
    ...state,
    monsters: [],
  }));

  builder.addCase(fetchMonstersData.fulfilled, (state, action) => ({
    ...state,
    monsters: action.payload,
  }));

  builder.addCase(fetchStartBattle.pending, (state) => ({
    ...state,
    loader: true,
    winner: null,
  }));

  builder.addCase(fetchStartBattle.rejected, (state) => ({
    ...state,
    loader: false,
    winner: null,
  }));

  builder.addCase(fetchStartBattle.fulfilled, (state, action) => ({
    ...state,
    loader: false,
    winner: action.payload.winner,
  }));

  builder.addCase(setSelectedMonster, (state, action) => ({
    ...state,
    winner: null,
    selectedMonster: action.payload,
  }));
});
