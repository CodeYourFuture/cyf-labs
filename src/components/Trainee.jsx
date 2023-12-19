import "../App.css";

const Trainee = ({ text, percent }) => {
  return (
    <article className="trainee">
      <figure className="percent">
        <svg>
          <circle cx={75} cy={75} r={70}></circle>
          <circle cx={75} cy={75} r={70} className={text}></circle>
        </svg>
        <p className="number">
          {percent}
          <span>%</span>
        </p>
      </figure>
      <p className="text">{text}</p>
    </article>
  );
};

export default Trainee;
