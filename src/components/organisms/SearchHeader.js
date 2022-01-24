import React, { useState } from "react";
// import Text from "../atoms/Text";
import InputBox from "../atoms/InputBox";
// import MainButton from "../atoms/MyButton";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
// import { BiSearch } from "react-icons/bi";
import { AiFillCloseCircle } from "react-icons/ai";

const SearchHeader = ({ ...props }) => {
  const { getKeyword } = props;
  const [searchValue, setSearchValue] = useState("");
  const [showSearch, setShowSearch] = useState(true);

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const backNormal = () => {
    setSearchValue("");
    setShowSearch(true);
    getKeyword("");
  };

  const keyDown = (e) => {
    if (e.keyCode === 13 && searchValue) {
      setShowSearch(false);

      setSearchValue(e.target.value);
      getKeyword(e.target.value);
    }
  };
  return (
    <div style={{ width: "100%" }}>
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
          {/* <Grid
            item
            xs={0.5}
            style={showSearch ? { display: "block" } : { display: "none" }}
          >
            <MainButton color="#808080" text={<BiSearch />} />
          </Grid> */}
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
                : {
                    display: "flex",
                    justifyContent: "left",
                  }
            }
          >
            <AiFillCloseCircle
              onClick={() => backNormal()}
              style={{ width: 30, height: 30 }}
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default SearchHeader;
