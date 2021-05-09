import React from "react";
import * as Back from "./assets/Back.png";
import * as Search from "./assets/search.png";
import page from "./api/CONTENTLISTINGPAGE-PAGE1.json";
import CardsGrid from "./components/CardsGrid";
import useScroll from "./hooks/scrollHook";

function Header() {
  return (
    <header className="flex justify-between h-10">
      <img className="h-6 w-6 cursor-pointer" src={Back.default} alt="back" />
      <span className="w-full ml-3 text-white">Romantic Comedy</span>
      <img className="h-6 w-6 ml-2 cursor-pointer" src={Search.default} alt="search" />
    </header>
  );
}
function App() {
  const content = (((page || {}).page || {})["content-items"] || {}).content || [];
  return (
    <div className="App">
      <main className="mx-auto my-10 mweb-container" style={{ width: "425px" }}>
        <div className="mweb-container wrapper px-4 pt-4 relative border-2 shadow-2xl border-gray-100 bg-black h-screen" style={{ borderRadius: "35px" }}>
          <Header />
          {content.length > 0 && (
            <div className="mt-3 scroll-effect">
              <CardsGrid contentItems={content} />
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
