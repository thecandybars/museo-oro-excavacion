/* eslint-disable react/prop-types */
import { Box, Typography } from "@mui/material";
import { theme } from "../utils/theme/ThemeProviderWrapper";
export default function Marker3D({ caption, onClick }) {
  return (
    <Box
      width="40px"
      height="40px"
      color="white"
      marginBottom={2}
      bgcolor={theme.palette.primary.main}
      sx={{ borderRadius: "100%", border: "3px solid white" }}
      display={"flex"}
      justifyContent="center"
      alignItems="center"
      // onClick={() => onClick(Number(caption))}
      //   onClick={() => setSelectedTooltip(Number(tooltip.caption))}
    >
      <Typography variant="h6">{caption}</Typography>
    </Box>
  );
}
