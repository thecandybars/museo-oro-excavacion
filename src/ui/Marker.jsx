/* eslint-disable react/prop-types */
import { Box, Typography } from "@mui/material";
import { KeepScale } from "react-zoom-pan-pinch";
import { theme } from "../utils/theme/ThemeProviderWrapper";
import MarkerTooltip from "./MarkerTooltip";

export default function Marker({ marker, onClick, isOpen, onClose }) {
  return (
    <KeepScale
      key={marker.caption}
      style={{
        position: "absolute",
        top: `${marker.position.y}%`,
        left: `${marker.position.x}%`,
        transform: "translate(-50%, -50%)",
      }}
    >
      <Box
        onClick={onClick}
        sx={{
          borderRadius: "100%",
          border: `3px solid ${theme.palette.primary.translucid}`,
        }}
      >
        <Box
          sx={{
            width: 40,
            height: 40,
            borderRadius: "100%",
            border: `3px solid ${theme.palette.primary.dark}`,
            bgcolor: theme.palette.primary.translucid,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: "white",
              textShadow:
                "0 0 1px black,0 0 2px black, 0 0 4px black, 0 0 8px black, 0 0 32px black",
            }}
          >
            {marker.caption}
          </Typography>
        </Box>
      </Box>
      {isOpen && (
        <MarkerTooltip
          image={marker.image}
          title={marker.title}
          description={marker.description}
          path={marker.path}
          button={marker.button}
          onClose={onClose}
        />
      )}
    </KeepScale>
  );
}
