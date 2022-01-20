import React, { useState } from "react";
import SearchHeader from "../components/organisms/SearchHeader";
import MainContent from "../components/organisms/MainContent";

const Home = () => {
  const [keyword, setKeyword] = useState("");

  // callback to update state
  const getKeyword = (key) => {
    // console.log(key, "88");
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
