import './style.css';
import STi from '../../assets/1STi.png';
import flix from '../../assets/streamFlix.png';
import git from '../../assets/GitHub-logo-2-imagen.jpg';
import rick from '../../assets/rickAndMorty.jpg';
import starwars from '../../assets/starwars.png';

function Projects() {
  

    return (
      <div className="containerProject">
          <div className='container-card'>
              <div className='card'>
                <img className="imgCard" src={STi} alt="img" width="320px" height="180px"/>
                <h2>1. 1STi Challenge</h2>
                <p> Website that consumes an API to return the weather forecast for any city in the world, and also informs the forecast in real time from 10 capitals of Brazil. You can access the source code <a href='https://github.com/cairomedeiros/Current-Weather' target="_blank">here!</a></p>
                <small>HTML | CSS | JS | REACTJS</small>
              </div>

              <div className='card'>
                <a  href='https://project-flix.netlify.app/'>
                <img className="imgCard" src={flix} alt="img" width="320px" height="180px"/>
                </a>
                <h2>2. Project Filmes</h2>
                <p> Website that consumes an API to return movies and series database, I built this to improve my front end skills with reactJS. You can access the source code <a href='https://github.com/cairomedeiros/Projeto-filmes' target="_blank">here!</a></p>
                <small>HTML | CSS | JS | REACTJS</small>
              </div>

              <div className='card'>
              <a href="https://busca-repos.netlify.app" >
                <img className="imgCard" src={git} alt="img" width="320px" height="180px"/>
                </a>
                <h2>3. Busca-Repos</h2>
                <p> Website that consumes GitHub API to return general informations from users, I built this to improve my front end skills with reactJS. You can access the source code <a href='https://github.com/cairomedeiros/busca-repos' target="_blank">here!</a></p>
                <small>HTML | STYLED COMPONENTS | JS | REACTJS</small>
              </div>

              <div className='card'>
                <img className="imgCard" src={rick} alt="img" width="320px" height="180px"/>
                
                <h2>4. Rick and Morty</h2>
                <p> Website created to train my habilities with Reactjs and API's consume. You can acess the source code <a href='https://github.com/cairomedeiros/Rick-and-Morty-api' target="_blank">here!</a></p>
                <small>HTML | STYLED COMPONENTS | JS | REACTJS</small>
              </div>

              <div className='card'>
                
                
                <img className="imgCard" src={starwars} alt="img" width="320px" height="180px"/>
                
                <h2>5. Bornlogic Challenge</h2>
                <p>Challenge with the purpose of learn Redux. You can acess the source code <a href='https://github.com/cairomedeiros/Bornlogic-Challenge' target="_blank">here!</a></p>
                <small>STYLED COMPONENTS | JS | REACTJS | REDUX</small>
              </div>
             


              
          </div>
      </div>
    )
  }
  
  export default Projects;