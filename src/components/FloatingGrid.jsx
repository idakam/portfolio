import React from "react";

const generateGridPositions = (rows, cols) => {
  const positions = [];
  const rowSpacing = 100 / rows;
  const colSpacing = 100 / cols;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const top = r * rowSpacing + rowSpacing / 4;  // add jitter
      const left = c * colSpacing + colSpacing / 4;
      positions.push({
        top: `${top + Math.random() * 5 - 2.5}%`,
        left: `${left + Math.random() * 5 - 2.5}%`,
        rotate: Math.random() * 30 - 15,
      });
    }
  }

  // Shuffle the positions
  for (let i = positions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [positions[i], positions[j]] = [positions[j], positions[i]];
  }

  return positions;
};

const FloatingGrid = ({ items }) => {
  const positions = generateGridPositions(3, 4); // adjust for your number of paintings

  return (
    <div className="">
    {/* <div className=" h-[100vh] overflow-hidden">
      {items.map((item, index) => {
        const pos = positions[index] || { top: "50%", left: "50%", rotate: 0 };
        return (
          <div
            key={index}
            className="absolute transition-transform hover:scale-105"
            style={{
              top: pos.top,
              left: pos.left,
              transform: `rotate(${pos.rotate}deg)`,
              zIndex: index,
              maxWidth: "200px",
            }}
          >
            <img
              src={item.image}
              alt={item.description}
              className="w-full rounded-lg shadow-lg"
            />
            <p className="text-sm mt-2 text-center">{item.description}</p>
          </div>
        );
      })}
    </div> */}
    </div>
  );
};

export default FloatingGrid;
