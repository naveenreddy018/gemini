import React, { useState, useEffect } from 'react';
import ImageComponent from '../ImageComponent/image';
import { assets } from '../../assets/assets';
import './slide.css';

function SlideBar() {
  const [menu, setMenu] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Update the window width when the screen is resized
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calculate the minWidth based on the window size
  const getMinWidth = () => {
    if (windowWidth <= 468) {
      return menu ? '5vw' : '0vw'; // For mobile (468px and below)
    } else if (windowWidth <= 768) {
      return menu ? '15vw' : '0vw'; // For tablet (768px and below)
    } else {
      return menu ? '20vw' : '0vw'; // For larger screens
    }
  };

  return (
    <div className='slide_container'>
      <div className='top' style={{ minWidth: getMinWidth() }}>
        <ImageComponent
          src={assets.menu_icon}
          style={{
            width: 30,
            margin:10
          }}
          onClick={() => setMenu((prev) => !prev)}
        />

        <div className='top-section'>
          <div className='top-middle-layer'>
            <div className='plus-icon'>
              <ImageComponent
                src={assets.plus_icon}
                style={{
                  width: 30,
                  margin:5
                }}
              />
              {menu && <p>New Chat</p>}
            </div>
          </div>

          <div className='top-bottom-layer'>
            <div className='recent-items'>
              <ImageComponent
                src={assets.message_icon}
                style={{
                  width: 30,
                  margin:5
                }}
              />
              {menu && <p>Recent Items</p>}
            </div>
          </div>
        </div>
      </div>

      <div className='bottom'>
        <div className='bottom-entry-item'>
          <ImageComponent
            src={assets.history_icon}
            style={{
              width: 30,
            }}
          />
          {menu && <p>History</p>}
        </div>
        <div className='bottom-entry-item'>
          <ImageComponent
            src={assets.question_icon}
            style={{
              width: 30,
            }}
          />
          {menu && <p>Help</p>}
        </div>
        <div className='bottom-entry-item'>
          <ImageComponent
            src={assets.setting_icon}
            style={{
              width: 30,
            }}
          />
          {menu && <p>Settings</p>}
        </div>
      </div>
    </div>
  );
}

export default SlideBar;

