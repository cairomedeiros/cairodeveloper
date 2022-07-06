import { Link } from 'react-router-dom';
import { HeaderContainer } from './style';
import { FaBars } from 'react-icons/fa';


function Header() {
  

    return (
      <HeaderContainer>
        <nav>

            

            <div className='logo'>

                <h1>Cairo Dev</h1>
                

            </div>

            <div className='infos'>

            <input type="checkbox" id="check" />
                <label for="check" class="checkbtn" >
                    <FaBars/>
                </label>

                <ul className='checar'>
                    <li>
                    <Link className="checado" for="check" to="/">Home</Link>
                    </li>

                    <li>
                        <Link className="checado" for="check" to="/projects">Projects</Link>
                    </li>

                    <li>
                        <a href="https://www.linkedin.com/in/cairomedeiros/" target="_blank">LinkedIn</a>
                    </li>

                    <li>
                        <a href="https://github.com/cairomedeiros" target="_blank">GitHub</a>
                    </li>
                </ul>

                
            </div>

        </nav>
      </HeaderContainer>
    )
  }
  
  export default Header;