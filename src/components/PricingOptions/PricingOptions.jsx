import { use } from "react";
import PricingCard from "../PricingCard/PricingCard";
import DaisyPricing from "../DaisyPricing/DaisyPricing";

const PricingOptions = ({ pricingPromise }) => {
  const pricingData = use(pricingPromise);

  return (
    <div>
      <h1>Get Our Membership</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* {pricingData.map((pricing) => (
          <PricingCard pricing={pricing} key={pricing.id}></PricingCard>
        ))} */}
        {pricingData.map((pricing) => (
          <DaisyPricing key={pricing.id} pricing={pricing}></DaisyPricing>
        ))}
      </div>
    </div>
  );
};

export default PricingOptions;
