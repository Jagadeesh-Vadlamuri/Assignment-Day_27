import React from "react";

function MapObjectChild({datum}) {
  return (
    <div>
      <h2>
        {datum.name} {datum.location}
      </h2>
    </div>
  );
}

export default MapObjectChild;
