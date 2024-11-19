import HeaderImage from '../../assets/Erasmus_Hadebe.jpg'
import logo1 from '../../assets/logo1.svg'
import data from './data'
import './header.css'

const Header = () => {
  return (
    <header id="header">
    
      <div className="container header__container">
      
        <div className="header__profile">
          <img src={HeaderImage} alt="Header Portait" />
          
        </div>
        <h3>Erasmus Hadebe</h3>
        <p>
        Hi, I'm Sphiwe Erasmus Hadebe, a Senior Software Engineer specializing in building high-performance, scalable, and user-centric web applications. &#128187;

        </p>
        <div className="header__cta">
          <a href="#contact" className='btn primary'>Contact Me</a>
          <a href="#portfolio" className='btn light'>Projects</a>
          
        </div>
        <div className="header__socials">
          {
            data.map(item => <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer">{item.icon}</a>)
          }
        </div>
      </div>
    </header>
  )
}

export default Header