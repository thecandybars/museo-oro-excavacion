/* eslint-disable react/prop-types */
import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import { Link } from "react-router";
import { CloseIcon } from "../utils/icons";
import "react-image-gallery/styles/css/image-gallery.css";
import { useContext } from "react";
import { AccesibilityContext } from "../contexts/AccesibilityContext";
import { theme } from "../utils/theme/ThemeProviderWrapper";

export default function MarkerTooltip({
  image,
  title,
  path,
  description,
  button,
  onClose,
  highContrastProp,
  fontScaleProp = false,
}) {
  console.log("🚀 ~ highContrastProp:", highContrastProp);
  const highContrast =
    !!useContext(AccesibilityContext)?.highContrast || highContrastProp;
  console.log("🚀 ~ highContrast:", highContrast);
  const fontScale = useContext(AccesibilityContext)?.fontScale || fontScaleProp;
  const fontScaler = fontScale ? 1.7 : 1;

  const renderImage = (
    <img
      src={image}
      width="480px"
      height="auto"
      style={{
        borderRadius: "8px",
        filter: highContrast ? "invert(1)" : "none",
      }}
    />
  );

  return (
    <Box
      sx={{
        position: "absolute",
        top: "100%", // Positions the box below the marker
        left: "100%",
        width: "400px",
        height: "auto",
        filter: "opacity(0.9)",
      }}
      onClick={onClose}
    >
      <Paper elevation={4} bgcolor="white">
        <Box display={"flex"} justifyContent={"flex-end"}>
          <CloseIcon
            sx={{
              position: image ? "absolute" : "relative",
              top: "5px",
              right: "5px",
              cursor: "pointer",
              color: theme.palette.primary.main,
              bgcolor: "white",
              borderRadius: "100%",
              zIndex: 1000,
            }}
          />
        </Box>
        <Stack alignItems={"center"} gap={1} p={2}>
          {image && renderImage}
          {title && (
            <Typography
              variant="h6"
              sx={{
                fontSize: `${1.1 * fontScaler}rem`,
                fontWeight: "bold",
                color: theme.palette.primary.main,
              }}
            >
              {title}
            </Typography>
          )}
          {description && (
            <Typography
              variant="body1"
              sx={{ fontSize: `${1 * fontScaler}rem`, textAlign: "left" }}
            >
              {description}
            </Typography>
          )}
          {button && path && (
            <Button
              variant="contained"
              color="primary"
              component={Link}
              to={path}
            >
              <Typography variant="body1">{button}</Typography>
            </Button>
          )}
        </Stack>
      </Paper>
    </Box>
  );
}
