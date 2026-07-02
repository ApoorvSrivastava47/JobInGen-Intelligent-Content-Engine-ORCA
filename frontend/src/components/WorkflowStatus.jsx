import {
  FaCheckCircle,
  FaRobot,
  FaBrain,
  FaImage,
  FaPenNib,
  FaSearch,
} from "react-icons/fa";

import "../styles/WorkflowStatus.css";

function WorkflowStatus({ result }) {

  if (!result) return null;

  const steps = [

    {
      icon:<FaBrain/>,
      title:"Planner Agent",
      description:"Strategy Generated",
    },

    {
      icon:<FaPenNib/>,
      title:"Copywriter Agent",
      description:"Content Written",
    },

    {
      icon:<FaSearch/>,
      title:"Critic Agent",
      description:"Quality Checked",
    },

    {
      icon:<FaRobot/>,
      title:"Image Prompt Agent",
      description:"Prompt Created",
    },

    {
      icon:<FaImage/>,
      title:"Image Generator",
      description:"Image Generated",
    },

  ];

  return (

    <section className="workflow-card">

      <h2>

        AI Workflow

      </h2>

      {

        steps.map((step,index)=>(

          <div
            className="workflow-item"
            key={step.title}
            style={{
              animationDelay:`${index*0.18}s`
            }}
          >

            <div className="workflow-left">

              {step.icon}

              <div>

                <strong>

                  {step.title}

                </strong>

                <small>

                  {step.description}

                </small>

              </div>

            </div>

            <div className="workflow-right">

              <FaCheckCircle/>

              Completed

            </div>

          </div>

        ))

      }

    </section>

  );

}

export default WorkflowStatus;