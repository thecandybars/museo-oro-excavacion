import { Box, Button } from "@mui/material";
import PageWrapper from "../../ui/PageWrapper";
import Side from "./Side";
import GLBViewer from "../../glbViewer/GLBViewer";
import { useContext, useMemo, useState } from "react";
import ToolBoxWrapper from "../../ui/MapToolbox/ToolboxWrapper";
import ZoomButton3D from "../../ui/MapToolbox/ZoomButton3D";
import { theme } from "../../utils/theme/ThemeProviderWrapper";
import { Light3D, Rotate3D } from "../../utils/icons";
import MarkerTooltip3D from "../../ui/MarkerTooltip3D";
import { LanguageContext } from "../../contexts/LanguageContext";
import translations from "../../utils/translations";

export default function Excavacion() {
  const [rotateModel, setRotateModel] = useState(false);
  const [turnLight, setTurnLight] = useState(true);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [markerPosition, setMarkerPosition] = useState(null);
  console.log("🚀 ~ Excavacion ~ markerPosition:", markerPosition);

  // TEXTOS
  const { lang } = useContext(LanguageContext);
  const t = translations[lang].excavacion;

  // MODEL
  const model = {
    id: 0,
    name: "Excavacion",
    url: "/models/casa-excavacion.glb",
    defaultScale: 6,
    defaultCamera: [3, 3, 1],
    onOrbit: (pos) => setMarkerPosition(pos),
    markers: [
      {
        id: 0,
        position: [1, 1, 1],
        image: "/plaza-aduana.jpg",
        path: "/piezas",
        onClick: () => setSelectedMarker(model.markers[0]),
      },
    ],
  };

  const tooltipTexts = selectedMarker && t.markers[selectedMarker.id];
  const tooltip = useMemo(
    () =>
      selectedMarker && {
        ...selectedMarker,
        ...tooltipTexts,
        onClose: () => setSelectedMarker(null),
      },
    [model.markers, selectedMarker, tooltipTexts]
  );
  console.log("🚀 ~ Excavacion ~ tooltip:", tooltip);

  // ZOOM
  const zoomStep = 1.1;
  const onZoomOut = () => {
    setZoomLevel((prev) => Math.max(0.8, prev / zoomStep));
  };
  const onZoomIn = () => {
    setZoomLevel((prev) => Math.min(5, prev * zoomStep));
  };
  const onZoomReset = () => {
    setZoomLevel(1);
  };
  return (
    <PageWrapper>
      <Side />
      <Box position="relative" width="100%" bgcolor="#eee" height="100%">
        <GLBViewer
          model={model}
          rotateModel={rotateModel}
          turnLight={turnLight}
          zoomLevel={zoomLevel}
        />
        {tooltip && (
          <MarkerTooltip3D
            image={tooltip?.image}
            title={tooltip?.title}
            description={tooltip?.description}
            button={tooltip?.button}
            path={tooltip?.path}
            positionTooltip={{ x: 50, y: 50 }}
            onClose={() => tooltip.onClose()}
          />
        )}

        <ToolBoxWrapper>
          <ZoomButton3D
            onZoomIn={onZoomIn}
            onZoomOut={onZoomOut}
            onZoomReset={onZoomReset}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={() => setRotateModel((prev) => !prev)}
            sx={{
              border: `5px solid ${
                rotateModel ? "white" : theme.palette.primary.main
              }`,

              borderRadius: 100,
              height: "60px",
              width: "60px",
            }}
          >
            <Rotate3D />
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setTurnLight((prev) => !prev)}
            sx={{
              border: `5px solid ${
                turnLight ? "white" : theme.palette.primary.main
              }`,

              borderRadius: 100,
              height: "60px",
              width: "60px",
            }}
          >
            <Light3D />
          </Button>
        </ToolBoxWrapper>
      </Box>
    </PageWrapper>
  );
}
