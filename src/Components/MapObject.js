import React from "react";
import MapObjectChild from './MapObjectChild'

function MapObject() {
  const data = [
    {
      id: 1,
      name: "Jagadeesh",
      location: "Hyderabad",
    },
    {
      id: 2,
      name: "Navya",
      location: "Bangalore",
    },
    {
      id: 3,
      name: "Teja",
      location: "Mumbai",
    },
    {
      id: 4,
      name: "Vasu",
      location: "Mysore",
    },
  ];
  const sample = data.map((datum) => <MapObjectChild datum={datum}/>);
  return <div>{sample}</div>;
}

export default MapObject;
