import { fetchMonstersData, fetchStartBattle, setSelectedMonster } from './monsters.actions';
import { monstersReducer } from './monsters.reducer';
import monstersData from '../../../data/monsters.json';
import winnerData from '../../../data/winner.json';

describe('Monsters Reducer', () => {
  it('should return the initial state', () => {
    expect(monstersReducer(undefined, { type: undefined })).toEqual({
      loader: false,
      monsters: [],
      selectedMonster: null,
      winner: null,
    });
  });

  it('should not change the monsters list on action pending', () => {
    const action = { type: fetchMonstersData.pending };
    const state = monstersReducer(undefined, action);
    expect(state).toEqual(
      expect.objectContaining({
        monsters: [],
      }),
    );
  });

  it('should not change the monsters list on action rejected', () => {
    const action = { type: fetchMonstersData.rejected };
    const state = monstersReducer(undefined, action);
    expect(state).toEqual(
      expect.objectContaining({
        monsters: [],
      }),
    );
  });

  it('should change the monsters list on action fulfilled', () => {
    const action = {
      type: fetchMonstersData.fulfilled,
      payload: monstersData.monsters,
    };
    const state = monstersReducer(undefined, action);
    expect(state).toEqual(
      expect.objectContaining({
        monsters: monstersData.monsters,
      }),
    );
  });

  it('should not change the winner and the loader should be changed on action pending', () => {
    const action = { type: fetchStartBattle.pending };
    const state = monstersReducer(undefined, action);
    expect(state).toEqual(
      expect.objectContaining({
        winner: null,
        loader: true
      }),
    );
  });

  it('should not change the winner and should change the loader on action rejected', () => {
    const action = { type: fetchStartBattle.rejected };
    const state = monstersReducer(undefined, action);
    expect(state).toEqual(
      expect.objectContaining({
        winner: null,
        loader: false
      }),
    );
  });

  it('should change the winner and the loader on action fulfilled', () => {
    const action = {
      type: fetchStartBattle.fulfilled,
      payload: winnerData,
    };
    const state = monstersReducer(undefined, action);
    expect(state).toEqual(
      expect.objectContaining({
        winner: winnerData.winner,
        loader: false
      }),
    );
  });

  it('should add the selected monster to the state', () => {
    const state = monstersReducer(
      undefined,
      setSelectedMonster(monstersData.monsters[0]),
    );

    expect(state).toEqual(
      expect.objectContaining({
        selectedMonster: monstersData.monsters[0],
      }),
    );
  });
});
