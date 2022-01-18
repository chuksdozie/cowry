import React from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";

import { fontFamily } from "@mui/system";

const MyButton = styled(Button)({
  boxShadow: "none",
  fontSize: 18,
  fontWeight: 400,
  padding: "15px",
  color: "#001c3d",
  border: "1px solid",
  backgroundColor: "#fff",
  fontFamily: "PT Sans",
  borderRadius: "0px",
  borderColor: "#fff",
  "&:hover": {
    backgroundColor: "#fff",
    borderColor: "#fff",
    boxShadow: "none",
  },
});

const MainButton = (props) => {
  const { text, onClick } = props;
  return (
    <div>
      <Grid item xs={12}>
        <MyButton fullWidth onClick={onClick}>
          {text || "insert a text"}
        </MyButton>
      </Grid>
    </div>
  );
};

export default MainButton;
