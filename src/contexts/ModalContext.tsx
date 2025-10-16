import {createContext, PropsWithChildren, ReactNode, useContext, useEffect, useMemo, useState} from "react";
import {Modal} from "../components/modal/Modal";

const ModalContext = createContext({
    open: (content: ReactNode) => {},
    close: () => {},
})

function ModalContextProvider(props: PropsWithChildren) {
    const [currentContent, setCurrentContent] = useState< React.ReactNode | null>(null);

    const handleOpen = useMemo(() => (content: ReactNode) => {
        setCurrentContent(content)
    }, [setCurrentContent])

    const handleClose = useMemo(() => () => {
       setCurrentContent(null)
    }, [setCurrentContent])

    useEffect(() => {
    }, [currentContent])


    return <ModalContext.Provider value={{open: (c) => handleOpen(c), close: () => handleClose()}}>
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