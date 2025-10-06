import {AppLayout} from "../../layout/app-layout/AppLayout";
import {CenteredContentContainer} from "../../layout/centered-content/CenteredContentContainer";
import {useLocation} from "react-router";
import {Icon} from "../../icon/Icon";
import {LinkButton} from "../../button/Button";
import styles from "./GameOver.module.css";

export function GameOver() {
    const location = useLocation();

    return <AppLayout>
        <CenteredContentContainer className={styles.container}>
            <Icon icon="star" size="huge" className={styles.starIcon}/>
            <strong>Your final score: {location.state.points}</strong>
            <div className={styles.spacer}/>
            <LinkButton label="Play again" href="/"/>
        </CenteredContentContainer>
    </AppLayout>
}