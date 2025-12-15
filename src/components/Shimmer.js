import React from "react";

const Shimmer = () => {
  const cards = Array.from({ length: 8 });

  return (
    <div className="shimmer-container" aria-busy="true" aria-label="Loading">
      {cards.map((_, idx) => (
        <div className="shimmer-card" key={idx}>
          <div className="shimmer-image" />
          <div className="shimmer-body">
            <div className="shimmer-line short" />
            <div className="shimmer-line medium" />
            <div className="shimmer-line long" />
            <div className="shimmer-row">
              <div className="shimmer-pill" />
              <div className="shimmer-pill small" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
