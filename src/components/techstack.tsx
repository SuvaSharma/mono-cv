import React from "react";

const TechStack: React.FC = () => {
  return (
    <div className="techstack-section">
      <div className="techstack-slider">
        <div className="techstack-slide-track">


          {/* Duplicate logos for smooth infinite loop */}
          <div className="techstack-logo"><img src="/assets/flutter.png" alt="Flutter" /></div>
          <div className="techstack-logo"><img src="/assets/dart.png" alt="Dart" /></div>
          <div className="techstack-logo"><img src="/assets/tensorflow.png" alt="TensorFlow" /></div>
          <div className="techstack-logo"><img src="/assets/firebase.png" alt="Firebase" /></div>
          <div className="techstack-logo"><img src="/assets/github.png" alt="GitHub" /></div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
