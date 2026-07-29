import FlavorTitle from "../components/FlavorTitle";
import FlavorSlider from "../components/FlavorSlider";

const FlavorSection = () => {
  return (
    <section className="flavor-section">
      <div className="collection-layout">
        <div className="collection-intro">
          <FlavorTitle />
        </div>
        <div className="collection-rail">
          <FlavorSlider />
        </div>
      </div>
    </section>
  );
};

export default FlavorSection;
