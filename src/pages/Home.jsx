import { Suspense, lazy } from "react";
import Hero from "../components/pages/home/Hero";
const LatestCollection = lazy(
  () => import("../components/pages/home/LatestCollection"),
);
const BestSeller = lazy(() => import("../components/pages/home/BestSeller"));

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
    </main>
  );
};

export default Home;
