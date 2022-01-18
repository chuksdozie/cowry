import React from "react";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import { Input } from "@mui/material";

const MyInput = styled(Input)({
  boxShadow: "none",
  fontSize: 16,
  fontWeight: 400,
  padding: "8px",
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

const InputBox = (props) => {
  const { placeholder, onChange, value, onKeyPress, onKeyDown } = props;
  return (
    <div>
      <Grid item xs={12}>
        <MyInput
          placeholder={placeholder || "insert a placeholder"}
          onChange={onChange}
          value={value}
          onKeyPress={onKeyPress}
          onKeyDown={onKeyDown}
          fullWidth
        ></MyInput>
      </Grid>
    </div>
  );
};

export default InputBox;
