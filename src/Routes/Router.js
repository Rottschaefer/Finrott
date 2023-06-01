import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomePage } from "../Pages/HomePage/HomePage"

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage/>} />
                <Route  path="signup" element={<p>Signup</p>} />
            </Routes>
        </BrowserRouter>
    )
}