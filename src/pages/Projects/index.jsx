import './style.css';
import STi from '../../assets/1STi.png';
import flix from '../../assets/streamFlix.png';

function Projects() {
  

    return (
      <div className="containerProject">
          <div className='container-card'>
              <div className='card'>
                <img className="imgCard" src={STi} alt="img" width="350px" height="200px"/>
                <h2>1. 1STi Challenge</h2>
                <p> Website that consumes an API to return the weather forecast for any city in the world, and also informs the forecast in real time from 10 capitals of Brazil. You can acess the source code <a href='https://github.com/cairomedeiros/Current-Weather' target="_blank">here!</a></p>
                <small>HTML | CSS | JS | REACTJS</small>
              </div>

              <div className='card'>
                <a  href='https://project-flix.netlify.app/'>
                <img className="imgCard" src={flix} alt="img" width="350px" height="200px"/>
                </a>
                <h2>2. Project Filmes</h2>
                <p> Website that consumes an API to return movies and series database, I built this to improve my front end skills with reactJS. You can acess the source code <a href='https://github.com/cairomedeiros/Projeto-filmes' target="_blank">here!</a></p>
                <small>HTML | CSS | JS | REACTJS</small>
              </div>
          </div>
      </div>
    )
  }
  
  export default Projects;