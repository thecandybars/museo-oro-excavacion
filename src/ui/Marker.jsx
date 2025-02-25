/* eslint-disable react/prop-types */
import { Box, Typography } from "@mui/material";
import { KeepScale } from "react-zoom-pan-pinch";
import { theme } from "../utils/theme/ThemeProviderWrapper";

export default function Marker({ marker, onClick }) {
  return (
    <KeepScale
      key={marker.caption}
      style={{
        position: "absolute",
        top: marker.position.y + "%",
        left: marker.position.x + "%",
      }}
    >
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
        onClick={() => onClick(Number(marker.caption))}
        // style={{ ...style }}
      >
        <Typography variant="h6">{marker.caption}</Typography>
      </Box>
    </KeepScale>
  );
}
