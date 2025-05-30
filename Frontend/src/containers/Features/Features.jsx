import "./Features.style.css";
import { features } from "../../data/data";
import FeatureItem from "../../components/FeatureItem/FeatureItem";

function Features() {
  return (
    <section className="features">
      <h2 className="sr-only">Features</h2>
      {features.map((feature) => (
        <FeatureItem key={Math.random()} feature={feature} />
      ))}
    </section>
  );
}

export default Features;
