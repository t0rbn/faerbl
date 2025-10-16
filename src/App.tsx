import {BrowserRouter, Route, Routes} from "react-router";
import Game from "./components/routes/game/Game";
import {GameOver} from "./components/routes/game-over/GameOver";
import {ModalContextProvider} from "./contexts/ModalContext";
import {PwaInstallModal} from "./components/pwa-install/PwaInstallModal";

export function AppComponent() {
    return <ModalContextProvider>
        <PwaInstallModal/>
        <BrowserRouter basename='faerbl'>
            <Routes>
                <Route index element={<Game/>}/>
                <Route path="game-over" element={<GameOver/>}/>
            </Routes>
        </BrowserRouter>
        <PwaInstallModal/>
    </ModalContextProvider>
}