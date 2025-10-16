import {useEffect} from "react";
import {Button} from "../button/Button";
import {useModalContext} from "../../contexts/ModalContext";
import styles from "./PwaInstallModal.module.css";

export function PwaInstallModal() {
    const ctx = useModalContext()

    useEffect(() => {
        window.addEventListener('beforeinstallprompt', (event: any) => {
            event.preventDefault()

            const install = () => {
                event.prompt();
                close()
            }

            ctx.open(<div className={styles.content}>
                    <h1>Install färbl?</h1>
                    <p>
                        Enjoy faster access, offline play, and a full-screen experience!
                        <br />
                        Install färbl on your device to improve your color skills anytime with just one tap.
                    </p>
                    <div className={styles.buttonGroup}>
                        <Button label="no, thanks" onClick={() => ctx.close()}></Button>
                        <Button label="install" onClick={install}/>
                    </div>
                </div>
            )
        })
    }, [])

    return null
}