import React, { useState } from "react";
import SearchHeader from "../components/organisms/SearchHeader";
import MainContent from "../components/organisms/MainContent";

const Home = () => {
  const [keyword, setKeyword] = useState("");

  // callback to update state
  const getKeyword = (key) => {
    setKeyword(key);
  };
  return (
    <div>
      <SearchHeader getKeyword={getKeyword} />
      <MainContent keyword={keyword} />
    </div>
  );
};

export default Home;
