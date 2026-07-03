import {
  FaRobot,
  FaBrain,
  FaPenNib,
  FaSearch,
  FaRocket
} from "react-icons/fa";

import "../styles/EmptyState.css";

function EmptyState() {

  const prompts = [
    "Resume",
    "LinkedIn Post",
    "Portfolio",
    "Interview",
    "Roadmap",
    "Startup Idea"
  ];

  return (

    <section className="empty-card">

      <div className="robot-circle">

        <FaRobot />

      </div>

      <h2>

        Ready to Generate

      </h2>

      <p>

        Enter a topic above and let ORCA's Multi-Agent AI
        generate premium content for you.

      </p>

      <div className="prompt-list">

        {prompts.map((item,index)=>(

          <span key={index}>

            {item}

          </span>

        ))}

      </div>

      <div className="workflow-preview">

        <div>

          <FaBrain />

          Planner

        </div>

        <div>

          <FaPenNib />

          Copywriter

        </div>

        <div>

          <FaSearch />

          Critic

        </div>

        <div>

          <FaRocket />

          Publish

        </div>

      </div>

    </section>
  );
}
export default EmptyState;