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

  return (

    <MainLayout>

      <Hero />

      <section className="generate-section">

        <TopicInput onGenerate={setResult} />

      </section>

      {

        result ? (

          <>

            <section className="dashboard-grid">

              <StrategyCard strategy={result.strategy} />

              <WorkflowStatus result={result} />

            </section>

            <section className="content-section">

              <ContentCard content={result.content} />

            </section>

            <section className="image-section">

              <ImageCard imageUrl={result.image_url} />
              
            </section>


            <section className="review-section">

              <ReviewCard review={result.review} />
              
            </section>


            

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