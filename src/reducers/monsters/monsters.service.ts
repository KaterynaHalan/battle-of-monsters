import { API_URL } from '../../constants/env';
import { Battle, Monster, Winner } from '../../models/interfaces/monster.interface';

const getAll = async (): Promise<Monster[]> =>
  await fetch(`${API_URL}/monsters`).then((response) => response.json());

const startBattle = async (data: Battle): Promise<Winner> =>
  await fetch(`${API_URL}/battle`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then((response) => response.json());

export const MonsterService = {
  getAll, startBattle,
};
