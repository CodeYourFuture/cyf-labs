import "./Trainee.css";

const Trainee = ({ text, percent }) => {
  return (
    <div className="box">
      <div className="percent">
        <svg>
          <circle cx={70} cy={70} r={70}></circle>
          <circle cx={70} cy={70} r={70} className={text}></circle>
        </svg>
        <div className="number">
          <h2>
            {percent}
            <span>%</span>
          </h2>
        </div>
      </div>
      <div className="text">{text}</div>
    </div>
  );
};

export default Trainee;
