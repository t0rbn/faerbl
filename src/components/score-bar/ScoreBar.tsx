import {GameState} from "../../types/game-state";
import {Icon} from "../icon/Icon";
import styles from "./ScoreBar.module.css"
import {cns} from "../../utils/cns";

interface ScoreBarProps {
    state: GameState
}

export function ScoreBar(props: ScoreBarProps) {
    return <div className={styles.scoreBar}>

        {new Array(5).fill(null).map((a,i) => <Icon icon="favorite" className={cns(styles.health, i >= props.state.health ? styles.hidden : null)} />)}

        <div className={styles.spacer} />
        <Icon icon="star" className={styles.points}/>
        <div>{props.state.points}</div>
    </div>
}