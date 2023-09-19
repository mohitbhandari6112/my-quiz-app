import React from "react";

const StartScreen = ({ numQuestion, dispatch }) => {
  return (
    <div className='Start'>
      <h2>Welcome to React Quiz!</h2>
      <h3>{numQuestion} questions to test your react knowledge</h3>
      <button
        className='btn btn-ui'
        onClick={() => dispatch({ type: "start" })}
      >
        Let's Begin
      </button>
    </div>
  );
};

export default StartScreen;
