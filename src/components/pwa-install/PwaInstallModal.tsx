import {useEffect, useState} from "react";
import {Button} from "../button/Button";
import {useModalContext} from "../../contexts/ModalContext";
import {Modal} from "../modal/Modal";

export function PwaInstallModal() {
    const ctx = useModalContext()

    const [event, setEvent] = useState<any>(null);

    const install = () => {
        event.prompt();
        ctx.close()
    }


    useEffect(() => {
        window.addEventListener('beforeinstallprompt', (event) => {
            console.log("ehehehehehehe")
            event.preventDefault()
            setEvent(event)
        })
    }, [])

    if (!event) {
        return null
    }


    return <Modal>
        <div>
            <h1>Install färbl?</h1>\
            <p>Lorem Ipsum</p>
            <div>
                <Button label="no, thanks" onClick={ctx.close}></Button>
                <Button label="install"  onClick={install} />
            </div>
        </div>
    </Modal>

}