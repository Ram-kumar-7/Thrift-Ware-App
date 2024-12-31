import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import SignIn from "./web/pages/auth-page/sign-in"
import ThriftWare from "./web/pages/Thrift-ware";
import './App.css'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="" Component={SignIn} />
                <Route path="app" Component={ThriftWare} />
            </Routes>
        </Router>
    )
}

export default App;
