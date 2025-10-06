import {AppLayout} from "../../components/layout/app-layout/AppLayout";
import {CenteredContentContainer} from "../../components/layout/centered-content/CenteredContentContainer";
import {useLocation} from "react-router";
import {Icon} from "../../components/icon/Icon";
import {LinkButton} from "../../components/button/Button";
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