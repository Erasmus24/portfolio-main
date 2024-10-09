import AboutImage from '../../assets/Erasmus_With_BananaPhone.jpg'
import CV from '../../assets/cvErasmus.docx'
import {HiDownload} from 'react-icons/hi'
import data from './data'
import Card from '../../components/Card'
import './about.css'

const About = () => {
  return (
    <section id="about">
        <div className="container about__container">
            <div className="about__left">
                <div className="about__portrait">
                    <img src={AboutImage} alt="About Image" />
                </div>
            </div>
            <div className="about__right">
                <h2>About Me</h2>
                <div className="about__cards">
                    {
                        data.map(item => (
                            <Card key={item.id} className="about__card">
                                <span className='about__card-icon'>{item.icon}</span>
                                <h5>{item.title}</h5>
                                <small>{item.desc}</small>
                            </Card>
                        ))
                    }
                </div>
                <p>
             
                </p>
                <p>
                I am a successful Senior Full Stack Web Developer with extensive expertise in both front-end and back-end development. I excel in creating visually appealing and user-friendly web interfaces using HTML, CSS, and JavaScript, with a strong focus on React and Angular. On the back-end, I leverage Node.js, SQL and/or C# .Net framework to build scalable and efficient server-side applications, ensuring seamless data integration and functionality. My versatility in utilizing a wide range of programming languages and technologies, coupled with strong communication skills, makes me a collaborative team player who thrives in cross-functional environments. I am committed to continuous learning, staying current with industry trends, and delivering exceptional results in web development projects.
                </p>
                <a href={CV} download className='btn primary'>Download CV <HiDownload/></a>
            </div>
        </div>
    </section>
  )
}

export default About