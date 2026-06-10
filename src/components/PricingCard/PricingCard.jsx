import PricingFeature from "./PricingFeature";

const PricingCard = ({ pricing }) => {
  const { name, price, description, features } = pricing;
  console.log(pricing);
  return (
    <div className="flex flex-col  border bg-amber-600 rounded-2xl p-4 text-white">
      {/* card Header */}
      <div className="">
        <h1 className="text-6xl">{name}</h1>
        <h4 className="text-3xl">${price}</h4>
      </div>
      {/* Card Body */}
      <div className="bg-amber-400 p-4 rounded-2xl mt-10 flex-1">
        <p>{description}</p>
        {features.map((feature, index) => (
          <PricingFeature key={index} feature={feature}></PricingFeature>
        ))}
      </div>
      <button className="btn w-full mt-4">Wide</button>
    </div>
  );
};

export default PricingCard;
