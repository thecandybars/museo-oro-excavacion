import { Box, Stack } from "@mui/material";
import GLBViewer from "../../glbViewer/GLBViewer";
import ToolBoxWrapper from "../../ui/MapToolbox/ToolboxWrapper";
import { Button } from "@mui/material";
import { useState } from "react";
import { Rotate3D, Light3D } from "../../utils/icons";
import ZoomButton3D from "../../ui/MapToolbox/ZoomButton3D";
import { theme } from "../../utils/theme/ThemeProviderWrapper";
import uno from "/1.svg";
import dos from "/2.svg";
import tres from "/3.svg";
import LoadingAnimation from "../../ui/LoadingAnimation";
// import MarkerTooltip3D from "../../ui/MarkerTooltip3D";
export default function Modelo() {
  const [rotateModel, setRotateModel] = useState(false);
  const [turnLight, setTurnLight] = useState(true);
  const [zoomLevel, setZoomLevel] = useState(1);

  const models = [
    {
      id: 1,
      name: "Botijo",
      url: "/models/botijo.glb",
      defaultScale: 0.18,
    },
    {
      id: 2,
      name: "Botella",
      url: "/models/botella.glb",
      defaultScale: 1.18,
    },
    {
      id: 3,
      name: "Cepillo",
      url: "/models/cepillo.glb",
      defaultScale: 2.18,
    },
    {
      id: 4,
      name: "Embudo",
      url: "/models/embudo.glb",
      defaultScale: 2.18,
    },
    {
      id: 5,
      name: "Plato",
      url: "/models/plato.glb",
      defaultScale: 0.18,
    },
    {
      id: 6,
      name: "Taza",
      url: "/models/taza-flores.glb",
      defaultScale: 1.5,
    },
    {
      id: 7,
      name: "Vasinica",
      url: "/models/vasinica.glb",
      defaultScale: 1.5,
    },
    {
      id: 8,
      name: "Bacin",
      url: "/models/bacin.glb",
      defaultScale: 1.1,
    },
    {
      id: 9,
      name: "Budare",
      url: "/models/budare.glb",
      defaultScale: 0.18,
    },
    {
      id: 10,
      name: "Escudilla",
      url: "/models/escudilla.glb",
      defaultScale: 0.18,
    },
    {
      id: 11,
      name: "Fragmento ceramica indigena",
      url: "/models/fragmento-ceramica-indigena.glb",
      defaultScale: 8,
    },
    {
      id: 12,
      name: "Litico",
      url: "/models/litico.glb",
      defaultScale: 6,
    },
    {
      id: 13,
      name: "Vasija africana",
      url: "/models/vasija-africana.glb",
      defaultScale: 0.8,
    },
  ];
  const [selectedModel, setSelectedModel] = useState(models[0]);

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

  // Side Buttons
  const renderSideButtons = models.map((model) => (
    <Button
      key={model.id}
      variant="contained"
      onClick={() => {
        setSelectedModel(model);
        setSelectedLayer(0);
        setIsReady(false);
      }}
      sx={{
        borderLeft:
          selectedModel.id === model.id
            ? `5px solid ${theme.palette.primary.light}}`
            : "none",
        borderLeftStyle: "inset",
      }}
    >
      {model.name}
    </Button>
  ));

  // selectedLayer
  const modelLayers = {
    0: {
      name: "both",
      icon: uno,
    },
    1: {
      name: "first",
      icon: dos,
    },
    2: {
      name: "second",
      icon: tres,
    },
  };
  const [selectedLayer, setSelectedLayer] = useState(0);

  // Mouse
  const [isClicked, setIsClicked] = useState(false);

  //
  const [isReady, setIsReady] = useState(false);

  return (
    <Box height={1} display="flex">
      <Box
        position="relative"
        width="100%"
        bgcolor="#ddd"
        sx={{ cursor: isClicked ? "grabbing" : "grab" }}
        onMouseDown={() => setIsClicked(true)}
        onMouseUp={() => setIsClicked(false)}
      >
        <LoadingAnimation open={!isReady} />
        <GLBViewer
          model={selectedModel}
          rotateModel={rotateModel}
          turnLight={turnLight}
          zoomLevel={zoomLevel}
          selectedLayer={modelLayers[selectedLayer].name}
          onReady={() => setIsReady(true)}
        />
        {/* {tooltip && (
          <MarkerTooltip3D
            image={tooltip?.image}
            title={tooltip?.title}
            description={tooltip?.description}
            button={tooltip?.button}
            path={tooltip?.path}
            positionTooltip={{ x: 50, y: 50 }}
            onClose={() => tooltip.onClose()}
          />
        )} */}
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
          <Button
            color="primary"
            onClick={() => setSelectedLayer((prev) => (prev + 1) % 3)}
            sx={{
              borderRadius: 100,
              height: "60px",
              width: "60px",
              backgroundColor: theme.palette.primary.main,
            }}
          >
            <img
              src={modelLayers[selectedLayer].icon}
              width={40}
              height={40}
              style={{
                borderRadius: 100,
                filter:
                  "brightness(0) saturate(100%) invert(100%) sepia(100%) saturate(0%) hue-rotate(233deg) brightness(104%) contrast(104%)",
              }}
            />
          </Button>
        </ToolBoxWrapper>
      </Box>

      <Stack gap={1} width="200px" p={2}>
        {renderSideButtons}
      </Stack>
    </Box>
  );
}
