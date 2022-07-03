import './style.css';
import perfil from '../../assets/perfil.jpg';
import { DiHtml5, DiCss3, DiJavascript1, DiReact, DiGit } from 'react-icons/di';
import { SiRedux, SiFirebase } from 'react-icons/si';


function Home() {
  

    return (
      <main className='container'>

        <div className='container-content'>
            <div>
                <h1 className='title'>
                    Hello, World! <strong>I am Cairo Medeiros</strong>
                </h1>

                <p className='texto'>I'm a frontend developer. This web page is to show my projects and challenges.</p>
            </div>

            <div>
                <img  className='img' src={perfil} alt="picture" width="300px"/>
            </div>

            

        </div>

            <div className='skills'>
                <h1>My Skills</h1>
                <p>This is my main technologies:</p>
            </div>

        <div className='skills-container'>

            <div className='skills-box'>
                <p>Front-end</p>
                <DiHtml5 color="#e44d26" size={80}/>
                <DiCss3 color="#1572b6" size={80}/>
                <DiJavascript1 color="#f0db4f" size={80}/>
            </div>
            <div className='skills-box'>
                <p>FrameWorks</p>
                <DiReact color=" #61dafb" size={80}/>
                <SiRedux color="#764abc" size={80}/>
                
            </div>
            <div className='skills-box'>
                <p>Tools</p>
                <DiGit color="#f34f29" size={80}/>
                <SiFirebase color="#f58220" size={80}/>
                
            </div>
        </div>

        
        
      </main>
    )
  }
  
  export default Home;