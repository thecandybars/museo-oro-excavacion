import { Box, Stack } from "@mui/material";
import GLBViewer from "../../glbViewer/GLBViewer";
import ToolBoxWrapper from "../../ui/MapToolbox/ToolboxWrapper";
import { Button } from "@mui/material";
import { useState } from "react";
import { Rotate3D, Light3D } from "../../utils/icons";
import ZoomButton3D from "../../ui/MapToolbox/ZoomButton3D";
import { theme } from "../../utils/theme/ThemeProviderWrapper";
export default function Modelo() {
  const [rotateModel, setRotateModel] = useState(false);
  const [turnLight, setTurnLight] = useState(true);
  const [zoomLevel, setZoomLevel] = useState(1);

  const models = [
    {
      id: 0,
      name: "Vasija",
      url: "/models/vasija.glb",
      defaultScale: 1,
      defaultCamera: [3, 3, 1],
      markers: [
        { id: 0, position: [1.5, 2, 0] },
        { id: 1, position: [1, 1, 1] },
        { id: 2, position: [2, 1, 1] },
      ],
    },
    // {
    //   id: 1,
    //   name: "Botijo",
    //   url: "/models/botijo.glb",
    //   defaultScale: 0.18,
    //   markers: [
    //     { id: 0, position: [0.5, 0.5, 0.5] },
    //     { id: 1, position: [0, 0, 0] },
    //   ],
    // },
    {
      id: 2,
      name: "Botella",
      url: "/models/botella.glb",
      defaultScale: 0.18,
      markers: [
        // { id: 0, position: [0.5, 0.5, 0.5] },
        // { id: 1, position: [0, 0, 0] },
      ],
    },
    {
      id: 3,
      name: "Cepillo",
      url: "/models/cepillo.glb",
      defaultScale: 0.18,
      markers: [
        // { id: 0, position: [0.5, 0.5, 0.5] },
        // { id: 1, position: [0, 0, 0] },
      ],
    },
    {
      id: 4,
      name: "Embudo",
      url: "/models/embudo.glb",
      defaultScale: 0.18,
      markers: [
        // { id: 0, position: [0.5, 0.5, 0.5] },
        // { id: 1, position: [0, 0, 0] },
      ],
    },
    {
      id: 5,
      name: "Plato",
      url: "/models/plato.glb",
      defaultScale: 0.18,
      markers: [
        // { id: 0, position: [0.5, 0.5, 0.5] },
        // { id: 1, position: [0, 0, 0] },
      ],
      // selectedChild: "first",
    },
    {
      id: 6,
      name: "Taza",
      url: "/models/taza.glb",
      defaultScale: 0.18,
      markers: [
        // { id: 0, position: [0.5, 0.5, 0.5] },
        // { id: 1, position: [0, 0, 0] },
      ],
    },
    // {
    //   id: 7,
    //   name: "Vasinica",
    //   url: "/models/vasinica.glb",
    //   defaultScale: 0.18,
    //   markers: [
    //     // { id: 0, position: [0.5, 0.5, 0.5] },
    //     // { id: 1, position: [0, 0, 0] },
    //   ],
    // },
    {
      id: 8,
      name: "Bacin",
      url: "/models/bacin.glb",
      defaultScale: 0.18,
      markers: [
        // { id: 0, position: [0.5, 0.5, 0.5] },
        // { id: 1, position: [0, 0, 0] },
      ],
    },
  ];
  const [selectedModel, setSelectedModel] = useState(models[1]);

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
  const enumLayers = ["both", "first", "second"];
  const [selectedLayer, setSelectedLayer] = useState(0);

  return (
    <Box height={1} display="flex">
      <Box position="relative" width="100%" bgcolor="#eee">
        <GLBViewer
          model={selectedModel}
          rotateModel={rotateModel}
          turnLight={turnLight}
          zoomLevel={zoomLevel}
          selectedLayer={enumLayers[selectedLayer]}
        />
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
          <Button onClick={() => setSelectedLayer((prev) => (prev + 1) % 3)}>
            {selectedLayer}
          </Button>
        </ToolBoxWrapper>
      </Box>

      <Stack gap={1} width="200px" p={2}>
        {renderSideButtons}
      </Stack>
    </Box>
  );
}
