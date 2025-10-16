import {createContext, PropsWithChildren, ReactNode, useContext, useState} from "react";
import {Modal} from "../components/modal/Modal";

const ModalContext = createContext({
    open: (content: ReactNode, closeable?: boolean) => {},
    close: () => {},
})

function ModalContextProvider(props: PropsWithChildren) {
    const [currentContent, setCurrentContent] = useState< React.ReactNode | null>(null);

    const handleOpen = (content: ReactNode) => {
        setCurrentContent(() => content)
    }

    const handleClose = () => {
       setCurrentContent(() => null)
    }

    return <ModalContext.Provider value={{open: handleOpen, close: handleClose}}>
        {currentContent ? <Modal>{currentContent}</Modal> : null}
        {props.children}
    </ModalContext.Provider>
}

function useModalContext() {
    return useContext(ModalContext)
}

export {
    useModalContext,
    ModalContextProvider
}