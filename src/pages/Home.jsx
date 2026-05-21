import { Suspense, lazy } from "react";
import Hero from "../components/pages/home/Hero";
const LatestCollection = lazy(
  () => import("../components/pages/home/LatestCollection"),
);
const BestSeller = lazy(() => import("../components/pages/home/BestSeller"));
import OurPolicy from "../components/pages/home/OurPolicy";
import NewsletterBox from "../components/common/NewsletterBox";

const Home = () => {
  return (
    <main>
      <Hero />
      <Suspense fallback={<p>Loading...</p>}>
        <LatestCollection />
      </Suspense>
      <Suspense fallback={<p>Loading...</p>}>
        <BestSeller />
      </Suspense>
      <OurPolicy />
      <NewsletterBox />
    </main>
  );
};

export default Home;
