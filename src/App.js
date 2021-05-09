import React, { useRef, useState } from "react";
import * as Back from "./assets/Back.png";
import * as Search from "./assets/search.png";
import page1 from "./api/CONTENTLISTINGPAGE-PAGE1.json";
import page2 from "./api/CONTENTLISTINGPAGE-PAGE2.json";
import page3 from "./api/CONTENTLISTINGPAGE-PAGE3.json";
import CardsGrid from "./components/CardsGrid";

function Header() {
  const [searchEdit] = useState(false);
  return (
    <header className="flex justify-between h-10">
      <img className="h-6 w-6 cursor-pointer" src={Back.default} alt="back" />
      <span className="w-full ml-3 text-white">Romantic Comedy</span>
      {searchEdit && <input />}
      <img className="h-6 w-6 ml-2 cursor-pointer" src={Search.default} alt="search" />
    </header>
  );
}
function App() {
  let content = [];
  [page1, page2, page3].map(page => {
    const temp = (((page || {}).page || {})["content-items"] || {}).content || [];
    content = [...content, ...temp];
    return null;
  });
  const scroll = useRef(null);
  return (
    <div className="App">
      <main className="mx-auto my-10 mweb-container" style={{ width: "425px" }}>
        <div className="mweb-container wrapper px-4 pt-4 relative border-2 shadow-2xl border-gray-100 bg-black h-screen" style={{ borderRadius: "35px" }}>
          <Header />
          <div className="mt-3 scroll-effect" ref={scroll}>
            <CardsGrid contentItems={[...content]} scrollRef={scroll} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
