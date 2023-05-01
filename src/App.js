import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./Components/Navigation/Header";
import Home from "./Pages/Home";
import Games from "./Pages/Games";
import Categories from "./Pages/Categories";
import Online from "./Pages/Online";
import {useState} from "react";
import {ThemeContext} from "./Utilities/ThemeContext";

const App = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
    return (
        <ThemeContext.Provider value={theme}>
            <BrowserRouter>
                <Header setTheme={setTheme}/>
                <div className={`body ${theme}`}>
                    <Routes>
                        <Route exact path='/' element={<Home/>}/>
                        <Route path='/games' element={<Games/>}/>
                        <Route path='/categories' element={<Categories/>}/>
                        <Route path='/online' element={<Online/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
        </ThemeContext.Provider>
    );
};

export default App;
