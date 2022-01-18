import React from "react";
import Text from "../atoms/Text";

const Header = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          width: "100%",
          backgroundColor: "#eeeeee",
          justifyContent: "flex-end",
          padding: "15px 0",
        }}
      >
        <Text text={"02 May, 2022"} padding="0 15px" />
        <Text text={"Home"} padding="0 15px" />
        <Text text={"About"} padding="0 15px" />
        <Text text={"Contact Developer"} padding="0 15px" />
      </div>
    </div>
  );
};

export default Header;
