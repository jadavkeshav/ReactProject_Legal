import React, { useState } from 'react';

const ButtonAnimation = () => {
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleButtonClick = () => {
    setButtonClicked(true);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className={`col-4 offset-${buttonClicked ? '0' : '4'} d-flex justify-content-center`}>
          <button
            className={`btn btn-primary ${buttonClicked ? 'translate-left' : ''}`}
            onClick={handleButtonClick}
            disabled={buttonClicked}
            style={{ transition: `transform ${buttonClicked ? '1s' : '1.5s'} ease-in-out` }} // Adjust the duration here
          >
            Click me
          </button>
        </div>
        <div className="col-8">
          <div
            className="text-container"
            style={{ opacity: buttonClicked ? 1 : 0, transition: 'opacity 1.5s ease-in-out' }} // Adjust the duration here
          >
            <div style={{ display: buttonClicked ? 'block' : 'none', padding: '20px' }}>
              <h3>New Content</h3>
              <p>This is the text that appears when the button is clicked.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonAnimation;
