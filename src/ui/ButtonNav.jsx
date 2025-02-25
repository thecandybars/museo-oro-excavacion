/* eslint-disable react/prop-types */
import { Button, Typography } from "@mui/material";
import { Link } from "react-router";
import { theme } from "../utils/theme/ThemeProviderWrapper";

export default function ButtonNav({ text, to, onClick }) {
  return (
    <Button
      component={Link}
      to={to}
      onClick={onClick}
      variant="outlined"
      color="primary"
      sx={{
        borderRadius: 100,
        border: "1px solid" + theme.palette.primary.main,
      }}
    >
      <Typography variant="h6"> {text}</Typography>
    </Button>
  );
}
