import { useState } from "react";

import MainLayout from "./layout/MainLayout";

import Hero from "./components/Hero";
import TopicInput from "./components/TopicInput";
import WorkflowStatus from "./components/WorkflowStatus";
import StrategyCard from "./components/StrategyCard";
import ContentCard from "./components/ContentCard";
import ReviewCard from "./components/ReviewCard";
import Footer from "./components/Footer";
import EmptyState from "./components/EmptyState";
import ImageCard from "./components/ImageCard";

import "./App.css";

function App() {

const [result, setResult] = useState(null);

const [showStrategy,setShowStrategy]=useState(false);

const [showWorkflow,setShowWorkflow]=useState(false);

const [showContent,setShowContent]=useState(false);

const [showImage,setShowImage]=useState(false);

const [showReview,setShowReview]=useState(false);

function handleResult(data){

  setResult(data);

  setShowStrategy(false);

  setShowWorkflow(false);

  setShowContent(false);

  setShowImage(false);

  setShowReview(false);

  setTimeout(()=>setShowStrategy(true),150);

  setTimeout(()=>setShowWorkflow(true),350);

  setTimeout(()=>setShowContent(true),550);

  setTimeout(()=>setShowImage(true),750);

  setTimeout(()=>setShowReview(true),950);

}

  return (

    <MainLayout>

      <Hero />

      <section className="generate-section">

      <TopicInput onGenerate={handleResult} />

      </section>

      {

        result ? (

          <>

           <section className="dashboard-grid">

  {

    showStrategy && (

      <div className="reveal">

        <StrategyCard strategy={result.strategy}/>

      </div>

    )

  }

  {

    showWorkflow && (

      <div className="reveal">

        <WorkflowStatus result={result}/>

      </div>

    )

  }

</section>

            {

showContent && (

<section className="content-section">

<div className="reveal">

<ContentCard content={result.content}/>

</div>

</section>

)

}
           {

showImage && (

<section className="image-section">

<div className="reveal">

<ImageCard imageUrl={result.image_url}/>

</div>

</section>

)

}


         {

showReview && (

<section className="review-section">

<div className="reveal">

<ReviewCard review={result.review}/>

</div>

</section>

)

}


            

          </>

        ) : (

          <EmptyState />

        )

      }

      <Footer />

    </MainLayout>

  );

}

export default App;