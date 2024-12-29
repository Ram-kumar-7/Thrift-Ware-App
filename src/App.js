import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import SignIn from "./web/pages/auth-page/sign-in"

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" Component={SignIn} />
            </Routes>
        </Router>
    )
}

export default App;
