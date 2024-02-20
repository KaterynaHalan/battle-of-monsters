import { MonsterService } from './monsters.service';
import monstersData from '../../../data/monsters.json';
import winnerData from '../../../data/winner.json';
import { Battle } from '../../models/interfaces/monster.interface';

describe('Monsters Service', () => {
  it('should return the monsters list empty', async () => {
    jest.spyOn(MonsterService, 'getAll').mockResolvedValue([]);
    const response = await MonsterService.getAll();
    expect(response).toEqual([]);
  });

  it('should return the monsters list with data', async () => {
    jest
      .spyOn(MonsterService, 'getAll')
      .mockResolvedValue([monstersData.monsters[0], monstersData.monsters[1]]);
    const response = await MonsterService.getAll();
    expect(response).toEqual([
      monstersData.monsters[0],
      monstersData.monsters[1],
    ]);
  });

  it('should return the winner', async () => {
    jest
      .spyOn(MonsterService, 'startBattle')
      .mockResolvedValue(winnerData);
    const data: Battle = {
      monster1Id: monstersData.monsters[0].id,
      monster2Id: monstersData.monsters[1].id
    }
    const response = await MonsterService.startBattle(data);
    expect(response).toEqual(winnerData);
  });
});
