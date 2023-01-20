import logo from './logo.svg';
import './App.css';
import Test from "./Test";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./Header";
import Table1 from "./components/Table1";
import Table2 from "./components/Table2";
import Table3 from "./components/Table3";
import Table4 from "./components/Table4";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/member" element={<Table1 />} />
                <Route path="/lodging" element={<Table2/>}/>
                <Route path="/report" element={<Table3/>}/>
                <Route path="/sales" element={<Table4/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
