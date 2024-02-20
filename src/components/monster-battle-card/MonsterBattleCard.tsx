import { Monster } from "../../models/interfaces/monster.interface"
import {
    BattleMonsterCard,
    BattleMonsterTitle,
    MonsterImage,
    MonsterName,
    MonsterSkill, MonsterSkillName, ProgressBar,
} from "./MonsterBattleCard.styled";

type MonsterCardProps = {
    monster?: Monster | null
    title?: string
}

const MONSTER_SKILLS = Object.freeze({
    hp: 'HP',
    attack: 'Attack',
    defence: 'Defence',
    speed: 'Speed'
})

const MonsterBattleCard: React.FC<MonsterCardProps> = ({ title, monster }) => {
    return (
        <BattleMonsterCard centralized>
            {
                monster ? (
                  <div>
                      <MonsterImage src={monster.imageUrl} />
                      <MonsterName>{monster.name}</MonsterName>

                      {
                          Object.entries(MONSTER_SKILLS).map(([key, name]) => (
                            <MonsterSkill key={key}>
                                <MonsterSkillName>{name}</MonsterSkillName>
                                <ProgressBar variant="determinate" value={monster[key as keyof Monster] as number || 0} />
                            </MonsterSkill>
                          ))
                      }
                  </div>
                ) : <BattleMonsterTitle>{title!}</BattleMonsterTitle>
            }
        </BattleMonsterCard>
    )
}

export { MonsterBattleCard }