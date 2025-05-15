import { Box, Stack } from "@mui/material";
import GLBViewer from "../../glbViewer/GLBViewer";
import ToolBoxWrapper from "../../ui/MapToolbox/ToolboxWrapper";
import { Button } from "@mui/material";
import { useContext, useState } from "react";
import { Rotate3D, Light3D } from "../../utils/icons";
import ZoomButton3D from "../../ui/MapToolbox/ZoomButton3D";
import { theme } from "../../utils/theme/ThemeProviderWrapper";
import uno from "/1.svg";
import dos from "/2.svg";
import tres from "/3.svg";
import LoadingAnimation from "../../ui/LoadingAnimation";
import translations from "../../utils/translations";
import { LanguageContext } from "../../contexts/LanguageContext";
import PageWrapper from "../../ui/PageWrapper";
import Side from "./Side";
// import MarkerTooltip3D from "../../ui/MarkerTooltip3D";
export default function Modelo() {
  const [rotateModel, setRotateModel] = useState(false);
  const [turnLight, setTurnLight] = useState(true);
  const [zoomLevel, setZoomLevel] = useState(1);
  const { lang } = useContext(LanguageContext);
  const t = translations[lang].piezas.modelos;

  const models = [
    {
      id: 1,
      url: "/models/botijo.glb",
      markerScale: 3,
      markers: [
        {
          id: 1,
          position: [1.7, 5, 1.7],
          image: "/microscopio/1.jpg",
        },
      ],
    },
    {
      id: 2,
      url: "/models/botella.glb",
      markerScale: 0.8,
      markers: [
        {
          id: 1,
          position: [-0.3, 0.8, 0.4],
        },
        {
          id: 2,
          position: [-0.4, 0.8, -0.4],
        },
        {
          id: 3,
          position: [0.3, 0.8, -0.4],
        },
      ],
    },
    {
      id: 3,
      url: "/models/cepillo.glb",
      markerScale: 1,
      markers: [
        {
          id: 1,
          position: [-2, 0.3, 0.3],
        },
      ],
    },
    {
      id: 4,
      url: "/models/embudo.glb",
      markerScale: 0.7,
      markers: [
        {
          id: 1,
          position: [-0.3, 0.6, -0.5],
        },
      ],
    },
    {
      id: 5,
      url: "/models/plato.glb",
      markerScale: 10,
      markers: [
        {
          id: 1,
          image: "/microscopio/11.jpg",
          position: [0, 2, -23],
        },
        {
          id: 2,
          image: "/microscopio/12.jpg",
          position: [0, 1.5, -16],
        },
      ],
    },
    {
      id: 6,
      url: "/models/taza-flores.glb",
      markerScale: 1.6,
      markers: [
        {
          id: 1,
          position: [1, 0, -2],
        },
      ],
    },
    {
      id: 7,
      url: "/models/vasinica.glb",
      markerScale: 0.5,
      markers: [
        {
          id: 1,
          position: [0, -0.4, 0],
        },
      ],
    },
    {
      id: 8,
      url: "/models/bacin.glb",
      markerScale: 2,
      markers: [
        {
          id: 1,
          position: [2.5, -0.4, 0],
        },
        {
          id: 2,
          image: "/microscopio/10.jpg",

          position: [2.5, 0.4, -1],
        },
      ],
    },
    {
      id: 9,
      url: "/models/budare.glb",
      markerScale: 2,
      markers: [
        {
          id: 1,
          position: [-1, -0.5, -8],
          image: "/microscopio/1.jpg",
        },
        {
          id: 2,
          image: "/microscopio/2.jpg",
          position: [0, -0.5, -9],
        },
        {
          id: 3,
          image: "/microscopio/3.jpg",
          position: [-2.3, -0.5, -9],
        },
        {
          id: 4,
          image: "/microscopio/4.jpg",
          position: [-1, -0.5, -9.3],
        },
      ],
    },
    {
      id: 10,
      url: "/models/escudilla.glb",
      markerScale: 4,
      markers: [
        {
          id: 1,
          position: [2.2, -3, -2.2],
          image: "/microscopio/8.jpg",
        },
        {
          id: 2,
          position: [0, -1, 0],
          image: "/microscopio/9.jpg",
        },
      ],
    },
    {
      id: 11,
      url: "/models/fragmento-ceramica-indigena.glb",
      markerScale: 0.1,
      markers: [
        {
          id: 1,
          position: [0.05, 0.05, -0.05],
        },
        {
          id: 2,
          position: [0.05, 0.03, 0.05],
          image: "/microscopio/5.jpg",
        },
      ],
    },
    {
      id: 12,
      url: "/models/litico.glb",
      markerScale: 1,
      markers: [
        {
          id: 1,
          position: [0, 0.5, 0],
          image: "/microscopio/6.jpg",
        },
        {
          id: 2,
          position: [0, 0.5, -2],
          image: "/microscopio/7.jpg",
        },
      ],
    },
    {
      id: 13,
      url: "/models/vasija-africana.glb",
      markerScale: 3,
      markers: [
        {
          id: 1,
          position: [0, 2.2, -4],
          image: "/microscopio/6.jpg",
        },
        {
          id: 2,
          position: [0, 2, -2],
          image: "/microscopio/7.jpg",
        },
      ],
    },
  ];
  const modelsWithText = models.map((model, indexModel) => ({
    ...model,
    ...t[indexModel],
    markers: model.markers.map((marker, indexMarker) => ({
      ...marker,
      ...t[indexModel].markers[indexMarker],
    })),
  }));

  const [selectedModel, setSelectedModel] = useState(modelsWithText[12]);

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
  const renderSideButtons = modelsWithText.map((model) => (
    <Button
      key={model.id}
      // disabled={selectedModel.id === model.id}
      variant="contained"
      onClick={() => {
        if (selectedModel.id === model.id) return;
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
      {model.title}
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
    <PageWrapper>
      <Side
        title={selectedModel.sideTitle}
        body={selectedModel.sideParagraph}
      />
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
    </PageWrapper>
  );
}
