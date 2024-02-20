import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { Battle, Monster, Winner } from '../../models/interfaces/monster.interface';
import { MonsterService } from './monsters.service';

export const fetchMonstersData = createAsyncThunk<Monster[]>(
  'monsters/fetchMonstersData',
  MonsterService.getAll,
);
export const fetchStartBattle = createAsyncThunk<Winner, Battle>(
  'monsters/fetchStartBattle',
  MonsterService.startBattle,
);

export const setSelectedMonster = createAction<Monster | null>(
  'monsters/setSelectedMonster',
);
