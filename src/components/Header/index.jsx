import { Link } from 'react-router-dom';
import { HeaderContainer } from './style';


function Header() {
  

    return (
      <HeaderContainer>
        <nav>
            <div className='logo'>

                <h1>Cairo Dev</h1>

            </div>

            <div className='infos'>

                <ul>
                    <li>
                    <Link to="/">Home</Link>
                    </li>

                    <li>
                        <Link to="/projects">Projects</Link>
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