import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home/index';

import Projects from './pages/Projects/index';


export default function Rotas(){
    return(
       
            <Routes>

                <Route path="/" exact element={ <Home/> } />
                <Route path="/projects" exact element={ <Projects/> } />

            </Routes>
      
    )
}