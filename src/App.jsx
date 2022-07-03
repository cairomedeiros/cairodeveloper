import Header from './components/Header/index';
import Rotas from './rotas';

import { BrowserRouter} from 'react-router-dom';


function App() {
  

  return (
    <BrowserRouter>
    <Header/>
    <Rotas/>
    </BrowserRouter>
  )
}

export default App;
