import React, { useEffect, useState } from "react";
import LazyLoadImage from "./LazyLoadImage";
import Placholder from "../assets/placeholder_for_missing_posters.png";
import useScroll from "../hooks/scrollHook";
const Card = ({ item, index }) => {
  return item["poster-image"] && item.name ? (
    <div className="w-1/3 px-2 mb-4 h-full">
      <LazyLoadImage
        className="h-full rounded-lg mx-auto object-cover shadow-2xl content-image"
        src={require(`../assets/${item["poster-image"]}`).default}
        alt={item.name}
        placeholderImg={Placholder}
      />
      {`${index}. ${item.name}`}
    </div>
  ) : (
    <React.Fragment />
  );
};
const CardsGrid = ({ contentItems, scrollRef }) => {
  const [items, setItems] = useState(6);
  const [scrollDirection, setScrollDirection] = useState(null);
  const { scrollX, scrollY } = useScroll(scrollRef, setScrollDirection);
  console.log(scrollX, scrollY);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    if (scrollDirection === "up" && items < contentItems.length) {
      setItems(items + 3);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollDirection]);
  return [...contentItems].length > 0 ? (
    <React.Fragment>
      <div className="flex flex-wrap -mx-2 mb-8 max-h-full">
        {[...contentItems].slice(0, items).map((item, i) => (
          <React.Fragment key={i}>
            <Card item={item} index={i + 1} />
          </React.Fragment>
        ))}
      </div>
    </React.Fragment>
  ) : (
    <React.Fragment />
  );
};

export default CardsGrid;
