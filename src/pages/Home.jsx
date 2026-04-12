import { Suspense, lazy } from "react";
import Hero from "../components/pages/home/Hero";
const LatestCollection = lazy(
  () => import("../components/pages/home/LatestCollection"),
);

const Home = () => {
  return (
    <main>
      <Hero />
      <Suspense fallback={<p>Loading...</p>}>
        <LatestCollection />
      </Suspense>
    </main>
  );
};

export default Home;
