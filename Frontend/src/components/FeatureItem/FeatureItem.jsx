import "./FeatureItem.style.css";

function FeatureItem({ feature }) {
  return (
    <div className="feature-item">
      <img
        src={feature.imageUrl}
        alt={feature.imageAlt}
        className="feature-icon"
      />
      <h3 className="feature-item-title">{feature.title}</h3>
      <p>{feature.text}</p>
    </div>
  );
}

export default FeatureItem;
