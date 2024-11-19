import { useEffect, useState } from 'react';
import Logo from '../../assets/Erasmus_Hadebe.jpg';
import data from './data';
import { IoIosColorPalette } from 'react-icons/io';
import { useModalContext } from '../../context/modal-context';
import './navbar.css';

const Navbar = () => {
  const { showModalHandler } = useModalContext();
  const [isShaking, setIsShaking] = useState(false);

  useEffect(() => {
    // Trigger the shake animation when the component mounts for the first time
    setIsShaking(true);
    const timer = setTimeout(() => {
      setIsShaking(false); // Stop the animation after 4 seconds
    }, 4000);

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, []);

  return (
    <nav>
      <div className="container nav__container">
        <a href="index.html" className="nav__logo">
          <img src={Logo} alt="Logo" />
        </a>
        <ul className="nav__menu">
          {data.map(item => (
            <li key={item.id}>
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>
        <button
          id="theme__icon"
          onClick={showModalHandler}
          title="Change Theme"
          className={isShaking ? 'shake' : ''}
        >
          <IoIosColorPalette />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
