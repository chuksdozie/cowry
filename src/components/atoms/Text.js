import React from "react";
import Typography from "@mui/material/Typography";

const Text = (props) => {
  const { color, size, text, weight, padding } = props;
  return (
    <Typography
      color={color}
      fontSize={size}
      fontWeight={weight}
      padding={padding}
      fontFamily={"PT Sans"}
    >
      {text || "Insert a text"}
    </Typography>
  );
};

export default Text;
