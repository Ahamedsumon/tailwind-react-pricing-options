import { CircleCheckBig } from "lucide-react";

const PricingFeature = ({ feature }) => {
  return (
    <p className="flex gap-2 mt-4">
      <CircleCheckBig></CircleCheckBig> {feature}
    </p>
  );
};

export default PricingFeature;
