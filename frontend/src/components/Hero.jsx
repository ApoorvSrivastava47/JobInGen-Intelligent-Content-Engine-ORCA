import {
  FaBrain,
  FaMagic,
  FaBolt,
  FaRobot,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

import "../styles/Hero.css";

function Hero() {

  const features = [

    {
      icon: <FaBrain />,
      title: "Planner Agent",
    },

    {
      icon: <FaMagic />,
      title: "AI Copywriter",
    },

    {
      icon: <FaBolt />,
      title: "Quality Critic",
    },

    {
      icon: <FaRobot />,
      title: "AI Image Generator",
    },

  ];

  const stats = [

    {
      value: "5+",
      label: "AI Agents",
    },

    {
      value: "5",
      label: "Platforms",
    },

    {
      value: "100%",
      label: "AI Powered",
    },

  ];

  return (

    <section className="hero">

      <div className="hero-badge">

        <span className="status-dot"></span>

        Enterprise Multi-Agent AI Platform

      </div>

      <h1>

        JobInGen's

        <br />

        <span>Intelligent Content Engine</span>

      </h1>

      <h2>

        ORCA

      </h2>

      <p>

        Generate premium LinkedIn posts, blogs,
        Instagram captions, AI-powered visuals,
        and quality-reviewed content using a modular
        Multi-Agent architecture.

      </p>

      <div className="hero-tags">

        {

          features.map((item)=>(

            <div

              className="hero-tag"

              key={item.title}

            >

              {item.icon}

              {item.title}

            </div>

          ))

        }

      </div>

      <div
        style={{
          display:"flex",
          justifyContent:"center",
          gap:"18px",
          flexWrap:"wrap",
          marginTop:"40px",
        }}
      >

                {

          stats.map((item)=>(

            <div
              key={item.label}
              style={{
                minWidth:"160px",
                padding:"20px 26px",
                borderRadius:"18px",
                background:"rgba(255,255,255,.05)",
                border:"1px solid rgba(255,255,255,.08)",
                backdropFilter:"blur(10px)",
                textAlign:"center",
              }}
            >

              <h3
                style={{
                  margin:0,
                  color:"#ffffff",
                  fontSize:"2rem",
                  fontWeight:"800",
                }}
              >

                {item.value}

              </h3>

              <p
                style={{
                  marginTop:"8px",
                  marginBottom:0,
                  color:"#cbd5e1",
                  fontSize:".95rem",
                }}
              >

                {item.label}

              </p>

            </div>

          ))

        }

      </div>

      <div
        style={{
          display:"flex",
          justifyContent:"center",
          flexWrap:"wrap",
          gap:"16px",
          marginTop:"40px",
        }}
      >

        <div
          style={{
            display:"flex",
            alignItems:"center",
            gap:"10px",
            color:"#dbeafe",
            fontWeight:"600",
          }}
        >

          <FaCheckCircle color="#22c55e"/>

          Strategy Planning

        </div>

        <div
          style={{
            display:"flex",
            alignItems:"center",
            gap:"10px",
            color:"#dbeafe",
            fontWeight:"600",
          }}
        >

          <FaCheckCircle color="#22c55e"/>

          AI Copywriting

        </div>

        <div
          style={{
            display:"flex",
            alignItems:"center",
            gap:"10px",
            color:"#dbeafe",
            fontWeight:"600",
          }}
        >

          <FaCheckCircle color="#22c55e"/>

          AI Image Generation

        </div>

      </div>

      <div
        style={{
          marginTop:"45px",
          display:"flex",
          justifyContent:"center",
        }}
      >

        <button
          style={{
            display:"flex",
            alignItems:"center",
            gap:"12px",
            padding:"16px 34px",
            borderRadius:"999px",
            border:"none",
            cursor:"default",
            background:"linear-gradient(135deg,#7c3aed,#4f46e5)",
            color:"#fff",
            fontWeight:"700",
            fontSize:"1rem",
            boxShadow:"0 12px 30px rgba(124,58,237,.30)",
          }}
        >

          Generate AI Content

          <FaArrowRight/>

        </button>

      </div>

    </section>

  );

}

export default Hero;