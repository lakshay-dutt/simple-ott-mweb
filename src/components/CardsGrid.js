import React, { useEffect, useState } from "react";
import LazyLoadImage from "./LazyLoadImage";
import Placholder from "../assets/placeholder_for_missing_posters.png";
const Card = ({ item }) => {
  return item["poster-image"] && item.name ? (
    <div className="w-1/3 px-2 mb-4 h-full">
      <LazyLoadImage
        className="h-full rounded-lg  mx-auto object-cover shadow-2xl"
        src={require(`../assets/${item["poster-image"]}`).default}
        alt={item.name}
        placeholderImg={Placholder}
      />
      {item.name}
    </div>
  ) : (
    <React.Fragment />
  );
};
const CardsGrid = ({ contentItems }) => {
  const [items] = useState(18);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <React.Fragment>
      <div className="flex flex-wrap -mx-2 mb-8 max-h-full">
        {[...contentItems].slice(0, items).map((item, i) => (
          <React.Fragment key={i}>
            <Card item={item} />
          </React.Fragment>
        ))}
      </div>
    </React.Fragment>
  );
};

export default CardsGrid;
