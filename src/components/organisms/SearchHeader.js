import React, { useState } from "react";
import Text from "../atoms/Text";
import InputBox from "../atoms/InputBox";
import MainButton from "../atoms/MyButton";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { BiSearch, BiCloset } from "react-icons/bi";

const SearchHeader = () => {
  const [searchValue, setSearchValue] = useState("");
  const [showSearch, setShowSearch] = useState(true);

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const backNormal = () => {
    setSearchValue("");
    setShowSearch(true);
  };

  const keyDown = (e) => {
    console.log(e.keyCode);
    if (e.keyCode === 13 && searchValue) {
      setShowSearch(false);
      console.log("enter key pressed");
      setSearchValue(e.target.value);
      console.log(searchValue);
    }
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          width: "100%",
          backgroundColor: "#c1c1c1",
          justifyContent: "center",
          padding: "75px 0 75px",
        }}
      >
        <Grid
          container
          item
          xs={12}
          style={{
            // backgroundColor: "red",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Grid
            item
            xs={0.5}
            style={showSearch ? { display: "block" } : { display: "none" }}
          >
            <MainButton color="#808080" text={<BiSearch />} />
          </Grid>
          <Grid
            item
            xs={9}
            style={showSearch ? { display: "block" } : { display: "none" }}
          >
            <InputBox
              placeholder={"search for photo"}
              value={searchValue}
              onChange={(e) => handleSearchChange(e)}
              onKeyDown={(e) => keyDown(e)}
            />
          </Grid>
          <Grid
            container
            item
            xs={10}
            style={
              showSearch
                ? { display: "none" }
                : { display: "flex", justifyContent: "left" }
            }
          >
            <Typography variant="h4" color="#001c3d" fontFamily={"PT SANS"}>
              Search Results for {searchValue}
            </Typography>
          </Grid>
          <Grid
            container
            item
            xs={1}
            style={
              showSearch
                ? { display: "none" }
                : { display: "flex", justifyContent: "left" }
            }
          >
            <BiCloset onClick={() => backNormal()} />
          </Grid>

          {/* <Grid item xs={1}>
            <MainButton color="#808080" text={<BiSearch />} />
          </Grid> */}
        </Grid>
      </div>
    </div>
  );
};

export default SearchHeader;
