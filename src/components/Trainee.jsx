import "../App.css";

const Trainee = ({ text, percent }) => {
  return (
    <article className="trainee">
      <figure className="percent">
        <svg>
          <circle cx={70} cy={70} r={70}></circle>
          <circle cx={70} cy={70} r={70} className={text}></circle>
        </svg>
        <h2 className="number">
          {percent}
          <span>%</span>
        </h2>
      </figure>
      <p className="text">{text}</p>
    </article>
  );
};

export default Trainee;
