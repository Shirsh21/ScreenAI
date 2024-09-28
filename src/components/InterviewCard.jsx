/* eslint-disable react/prop-types */

import './InterviewCard.css';

const InterviewCard = ({ interview }) => {
  return (
    <div className="interview-card">
      <h4>{interview.title}</h4>
      <p>{interview.experience} of Experience</p>
      <p>Created At: {interview.date}</p>
      <div className="buttons">
        <button className="feedback">Feedback</button>
        <button className="start">Start</button>
      </div>
    </div>
  );
};

export default InterviewCard;
