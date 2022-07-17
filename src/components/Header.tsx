import './styling/main-header.css';
import './styling/action-button.css';
const MainHeader = () => {
  return (
    <div className='header'>
      <h1>Dentistry</h1>
      <h2>Staffordshire</h2>
      <a href='#about'>
        <button type='button' className='fill'>
          Find us
        </button>
      </a>
    </div>
  );
};
export default MainHeader;
