import {BrowserRouter, Route, Routes} from "react-router";
import Game from "./routes/game/Game";
import {GameOver} from "./routes/game-over/GameOver";

export function AppComponent() {
    return <BrowserRouter basename='faerbl'>
        <Routes>
            <Route index element={<Game/>}/>
            <Route path="game-over" element={<GameOver />}/>
        </Routes>
    </BrowserRouter>
}