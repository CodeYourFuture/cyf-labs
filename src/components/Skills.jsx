import "../App.css";

const Skills = () => {
  return (
    <section className="skills">
      <ul>
        <li>
          Full-stack PERN Web Development: <strong>HTML</strong> and
          <strong> CSS</strong>,<strong> JavaScript</strong> and functional
          programming,<strong> React</strong>,<strong> Node</strong>,
          <strong> SQL</strong>, <strong> PostgreSQL</strong>,
          <strong> Testing</strong>, asynchronous programming
        </li>
        <li>
          Building and delivering a full stack web application in a cross
          functional <strong>Agile</strong> team
        </li>
        <li>
          Some graduates have taken additional specialist tracks in
          <strong> Product Management</strong>,<strong> Cloud</strong>,
          <strong> DevOps</strong>,{" "}
          <a href="https://systems.codeyourfuture.io/">
            <strong>Systems Engineering</strong>
          </a>
          ,<strong> UX/UI Design</strong>
        </li>
      </ul>
    </section>
  );
};

export default Skills;
