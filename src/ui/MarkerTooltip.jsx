/* eslint-disable react/prop-types */
import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import { Link } from "react-router";
import { KeepScale } from "react-zoom-pan-pinch";
import { CloseIcon } from "../utils/icons";
import { useContext } from "react";
import { AccesibilityContext } from "../contexts/AccesibilityContext";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export default function MarkerTooltip({
  image,
  title,
  path,
  description,
  button,
  positionTooltip,
  onClose,
}) {
  const { highContrast } = useContext(AccesibilityContext);
  const imageIsGallery = Array.isArray(image);
  const imagesList =
    imageIsGallery &&
    image.map((img) => ({ original: img, originalClass: "tooltipGallery" }));
  const renderImage =
    typeof image === "string" ? (
      <img
        src={image}
        width="480px"
        height="290px"
        style={{
          objectFit: "cover",
          borderRadius: "8px",
          filter: highContrast ? "invert(1)" : "none",
        }}
      />
    ) : (
      <Box
        width="480px"
        height="290px"
        sx={{ filter: highContrast ? "invert(1)" : "none" }}
      >
        <ImageGallery
          // ref={photoGalleryRef}
          items={imagesList}
          onClick={null}
          showBullets={false}
          showNav={true}
          lazyLoad={true}
          showThumbnails={false}
          showPlayButton={true}
          showFullscreenButton={false}
          stopPropagation={true}
          autoPlay={true}
          slideDuration={200}
        />
      </Box>
    );

  return (
    <KeepScale
      style={{
        position: "absolute",
        transform: "translateX(-50%)",
        top: positionTooltip.y + "%",
        left: positionTooltip.x + "%",
      }}
    >
      <Paper
        elevation={4}
        bgcolor="white"
        // onClick={onClose}
      >
        <CloseIcon
          sx={{
            position: "absolute",
            top: "5px",
            right: "5px",
            cursor: "pointer",
            color: "primary.main",
            bgcolor: "white",
            borderRadius: "100%",
          }}
        />
        <Stack alignItems={"center"} gap={1} p={1}>
          {image && renderImage}
          {title && (
            <Typography variant="h6" color="primary">
              {title}
            </Typography>
          )}
          {description && (
            <Typography variant="body1">{description}</Typography>
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
    </KeepScale>
  );
}
