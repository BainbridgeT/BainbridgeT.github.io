import { appFeatures } from "./featuresData";
import FeatureBlock from './FeatureBlock';

export default function AppFeatures() {
  return (
    <section id="features" className="w-full bg-white">
      {appFeatures.map((feature, index) => (
        <FeatureBlock
          key={feature.id}
          title={feature.title}
          description={feature.description}
          screenshot={feature.screenshot}
          isAlt={index % 2 !== 0}
        />
      ))}
    </section>
  );
}
