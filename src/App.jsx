import { Suspense } from "react";
import "./App.css";
// import DaisyNav from "./components/DaisyNav/DaisyNav";
import NavBar from "./components/NavBar/NavBar";
import PricingOptions from "./components/PricingOptions/PricingOptions";
import ResultCharts from "./components/ResultCharts/ResultCharts";
import SimpleBarCharts from "./components/SimpleBarCharts/SimpleBarCharts";
import axios from "axios";
import MarksChart from "./components/MarksChart/MarksChart";
const pricingPromise = fetch("pricingData.json").then((res) => res.json());
const studentPromis = axios("studentData.json");
function App() {
  return (
    <>
      <header>
        {/* <DaisyNav></DaisyNav> */}
        <NavBar></NavBar>
      </header>
      <main>
        <Suspense
          fallback={
            <span className="loading loading-spinner loading-lg"></span>
          }
        >
          <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
        </Suspense>
        <Suspense
          fallback={
            <span className="loading loading-spinner loading-lg"></span>
          }
        >
          <MarksChart studentPromis={studentPromis}></MarksChart>
        </Suspense>
        <ResultCharts></ResultCharts>
        <SimpleBarCharts></SimpleBarCharts>
      </main>
    </>
  );
}

export default App;
