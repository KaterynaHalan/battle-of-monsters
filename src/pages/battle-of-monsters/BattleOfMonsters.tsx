import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useAppDispatch } from "../../app/hooks"
import { MonsterBattleCard } from "../../components/monster-battle-card/MonsterBattleCard"
import { MonstersList } from "../../components/monsters-list/MonstersList"
import { Title } from "../../components/title/Title"
import { fetchMonstersData, fetchStartBattle } from '../../reducers/monsters/monsters.actions';
import { selectMonsters, selectSelectedMonster, selectWinner, selectLoader } from '../../reducers/monsters/monsters.selectors';
import { Battle, Monster } from '../../models/interfaces/monster.interface';
import { WinnerDisplay } from '../../components/winner-display/WinnerDisplay';
import { BattleSection, PageContainer, StartBattleButton } from "./BattleOfMonsters.styled"

const BattleOfMonsters = () => {
    const dispatch = useAppDispatch()

    const monsters = useSelector(selectMonsters)
    const selectedMonster = useSelector(selectSelectedMonster)
    const winner = useSelector(selectWinner)
    const loader = useSelector(selectLoader)
    const [computerMonster, setComputerMonster] = useState<Monster | null>(null)

    useEffect(() => {
        dispatch(fetchMonstersData())
    }, []);

    useEffect(() => {
        // Randomly select a monster for the computer
        if (selectedMonster && monsters?.length) {
            const maxIndex = monsters.length - 1;
            const randomIndex = Math.floor(Math.random() * maxIndex);
            setComputerMonster(monsters[randomIndex]);
        }
    }, [selectedMonster]);

    const handleStartBattleClick = () => {
        if (selectedMonster && computerMonster) {
            const data: Battle = {
                monster1Id: selectedMonster.id,
                monster2Id: computerMonster.id
            }
            dispatch(fetchStartBattle(data))
        }
    }

    return (
        <PageContainer>
            <Title>Battle of Monsters</Title>

            <MonstersList monsters={monsters} />

            { winner && <WinnerDisplay text={winner.name} /> }

            <BattleSection>
                <MonsterBattleCard title="Player" monster={selectedMonster}></MonsterBattleCard>
                <StartBattleButton
                  data-testid="start-battle-button"
                  disabled={!selectedMonster || !computerMonster || loader}
                  onClick={handleStartBattleClick}
                >
                    Start Battle
                </StartBattleButton>
                <MonsterBattleCard title="Computer" monster={computerMonster}></MonsterBattleCard>
            </BattleSection>
        </PageContainer>
    )
}

export { BattleOfMonsters }