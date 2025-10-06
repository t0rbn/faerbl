import {BrowserRouter, Route, Routes} from "react-router";
import Game from "./components/routes/game/Game";
import {GameOver} from "./components/routes/game-over/GameOver";

export function AppComponent() {
    return <BrowserRouter basename='faerbl'>
        <Routes>
            <Route index element={<Game/>}/>
            <Route path="game-over" element={<GameOver />}/>
        </Routes>
    </BrowserRouter>
}