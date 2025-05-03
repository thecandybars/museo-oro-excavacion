/* eslint-disable react/prop-types */
import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import PageWrapper from "../../ui/PageWrapper";
import Side from "./Side";
import { useContext, useState } from "react";
import ToolBoxWrapper from "../../ui/MapToolbox/ToolboxWrapper";
import { CloseIcon, ResetIcon, SkipNextIcon } from "../../utils/icons";
// import MarkerTooltip3D from "../../ui/MarkerTooltip3D";
// import { LanguageContext } from "../../contexts/LanguageContext";
// import translations from "../../utils/translations";
import GLBAnimation from "../../glbViewer/GLBAnimation";
import { useNavigate } from "react-router";
import { theme } from "../../utils/theme/ThemeProviderWrapper";
import { LanguageContext } from "../../contexts/LanguageContext";
import translations from "../../utils/translations";
// import { AccesibilityContext } from "../../contexts/AccesibilityContext";

export default function Excavacion() {
  // const [selectedMarker, setSelectedMarker] = useState(null);
  // const [markerPosition, setMarkerPosition] = useState(null);
  const navigate = useNavigate();

  // TEXTOS
  const { lang } = useContext(LanguageContext);
  const t = translations[lang].excavacion;

  // Animation control
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  console.log("🚀 ~ Excavacion ~ isPlaying:", isPlaying);

  //

  const markers = {
    0: null,
    1: {
      position: [60, 60],
      image: "/zonaExcavacion1.png",
      positionTooltip: { x: 10, y: 20 },
    },
    2: {
      position: [60, 65],
      image: "/zonaExcavacion2.png",
      positionTooltip: { x: 15, y: 20 },
    },
  };
  return (
    <PageWrapper>
      <Side />
      <Box position="relative" width="100%" bgcolor="#ddd" height="100%">
        {!isPlaying && (
          <Marker
            marker={markers[currentStep]}
            text={t.markers[currentStep - 1]}
          />
        )}
        <GLBAnimation step={currentStep} onPlaying={(e) => setIsPlaying(e)} />
        <ToolBoxWrapper>
          <Button
            variant="contained"
            color="primary"
            onClick={() =>
              currentStep === 2
                ? navigate("/piezas")
                : setCurrentStep((prevStep) => (prevStep + 1) % 3)
            }
            sx={{
              display: "flex",
              gap: 1,
              border: `5px solid ${theme.palette.primary.main}`,
              borderRadius: 100,
              height: "60px",
              width: currentStep === 2 ? "200px" : "60px",
              transition: "all 0.1s ease-in-out",
            }}
          >
            {currentStep === 2 && (
              <Typography>{t.botones.linkPiezas}</Typography>
            )}
            <SkipNextIcon />
          </Button>
          {currentStep === 2 && (
            <Button
              variant="contained"
              color="primary"
              onClick={() => setCurrentStep((prevStep) => (prevStep + 1) % 3)}
              sx={{
                border: `5px solid ${theme.palette.primary.main}`,

                borderRadius: 100,
                height: "60px",
                width: "60px",
              }}
            >
              <ResetIcon />
            </Button>
          )}
        </ToolBoxWrapper>
      </Box>
    </PageWrapper>
  );
}

const Marker = ({ marker, text }) => {
  const [openDialog, setOpenDialog] = useState(false);
  return (
    <>
      {openDialog && (
        <MarkerTooltip
          positionTooltip={marker.positionTooltip}
          image={marker.image}
          title={text.title}
          description={text.description}
          button={text.button}
          onClose={() => setOpenDialog(false)}
        />
      )}
      {marker && (
        <Box
          position="absolute"
          width="40px"
          height="40px"
          color="white"
          marginBottom={2}
          bgcolor={theme.palette.primary.main}
          sx={{
            borderRadius: "100%",
            border: "3px solid white",
            top: `${marker.position[0]}%`,
            left: `${marker.position[1]}%`,
            zIndex: "1000",
            cursor: "pointer",
          }}
          display={"flex"}
          justifyContent="center"
          alignItems="center"
          onClick={() => setOpenDialog(true)}
          // style={{ ...style }}
        >
          <Typography variant="h6">{text?.caption || ""}</Typography>
        </Box>
      )}
    </>
  );
};

const MarkerTooltip = ({
  positionTooltip,
  image,
  title,
  description,
  button,
  onClose,
}) => {
  // const { highContrast } = useContext(AccesibilityContext);

  return (
    <Box
      sx={{
        position: "absolute",
        zIndex: "1000",

        // transform: "translateX(-50%)",
        top: positionTooltip.y + "%",
        left: positionTooltip.x + "%",
      }}
    >
      <Paper elevation={4} bgcolor="white" onClick={onClose}>
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
          {image && (
            <img
              src={image}
              width="480px"
              height="auto"
              style={{
                objectFit: "cover",
                borderRadius: "8px",
                // filter: highContrast ? "invert(1)" : "none",
              }}
            />
          )}
          {title && (
            <Typography variant="h6" color="primary">
              {title}
            </Typography>
          )}
          {description && (
            <Typography variant="body1">{description}</Typography>
          )}
          {button && (
            <Button variant="contained" color="primary" onClick={onClose}>
              <Typography variant="body1">{button}</Typography>
            </Button>
          )}
        </Stack>
      </Paper>
    </Box>
  );
};

// import { Box, Button } from "@mui/material";
// import PageWrapper from "../../ui/PageWrapper";
// import Side from "./Side";
// import GLBViewer from "../../glbViewer/GLBViewer";
// import { useContext, useMemo, useState } from "react";
// import ToolBoxWrapper from "../../ui/MapToolbox/ToolboxWrapper";
// import ZoomButton3D from "../../ui/MapToolbox/ZoomButton3D";
// import { theme } from "../../utils/theme/ThemeProviderWrapper";
// import { Light3D, Rotate3D } from "../../utils/icons";
// import MarkerTooltip3D from "../../ui/MarkerTooltip3D";
// import { LanguageContext } from "../../contexts/LanguageContext";
// import translations from "../../utils/translations";
// import GLBAnimation from "../../glbViewer/GLBAnimation";

// export default function Excavacion() {
//   const [rotateModel, setRotateModel] = useState(false);
//   const [turnLight, setTurnLight] = useState(true);
//   const [zoomLevel, setZoomLevel] = useState(1);
//   const [selectedMarker, setSelectedMarker] = useState(null);
//   const [markerPosition, setMarkerPosition] = useState(null);
//   console.log("🚀 ~ Excavacion ~ markerPosition:", markerPosition);

//   // TEXTOS
//   const { lang } = useContext(LanguageContext);
//   const t = translations[lang].excavacion;

//   // MODEL
//   const model = {
//     id: 0,
//     name: "Excavacion",
//     url: "/models/casa-3d-export-4.glb",
//     defaultScale: 6,
//     defaultCamera: [3, 3, 1],
//     // onOrbit: (pos) => setMarkerPosition(pos),
//     markers: [
//       {
//         id: 0,
//         position: [1, 1, 1],
//         image: "/plaza-aduana.jpg",
//         path: "/piezas",
//         onClick: () => setSelectedMarker(model.markers[0]),
//       },
//     ],
//   };

//   const tooltipTexts = selectedMarker && t.markers[selectedMarker.id];
//   const tooltip = useMemo(
//     () =>
//       selectedMarker && {
//         ...selectedMarker,
//         ...tooltipTexts,
//         onClose: () => setSelectedMarker(null),
//       },
//     [model.markers, selectedMarker, tooltipTexts]
//   );

//   // ZOOM
//   const zoomStep = 1.1;
//   const onZoomOut = () => {
//     setZoomLevel((prev) => Math.max(0.8, prev / zoomStep));
//   };
//   const onZoomIn = () => {
//     setZoomLevel((prev) => Math.min(5, prev * zoomStep));
//   };
//   const onZoomReset = () => {
//     setZoomLevel(1);
//   };
//   return (
//     <PageWrapper>
//       <Side />
//       <Box position="relative" width="100%" bgcolor="#eee" height="100%">
//         {/* <GLBViewer
//           model={model}
//           rotateModel={rotateModel}
//           turnLight={turnLight}
//           zoomLevel={zoomLevel}
//         /> */}
//         <GLBAnimation />
//         {tooltip && (
//           <MarkerTooltip3D
//             image={tooltip?.image}
//             title={tooltip?.title}
//             description={tooltip?.description}
//             button={tooltip?.button}
//             path={tooltip?.path}
//             positionTooltip={{ x: 50, y: 50 }}
//             onClose={() => tooltip.onClose()}
//           />
//         )}

//         {/* <ToolBoxWrapper>
//           <ZoomButton3D
//             onZoomIn={onZoomIn}
//             onZoomOut={onZoomOut}
//             onZoomReset={onZoomReset}
//           />
//           <Button
//             variant="contained"
//             color="primary"
//             onClick={() => setRotateModel((prev) => !prev)}
//             sx={{
//               border: `5px solid ${
//                 rotateModel ? "white" : theme.palette.primary.main
//               }`,

//               borderRadius: 100,
//               height: "60px",
//               width: "60px",
//             }}
//           >
//             <Rotate3D />
//           </Button>
//           <Button
//             variant="contained"
//             color="primary"
//             onClick={() => setTurnLight((prev) => !prev)}
//             sx={{
//               border: `5px solid ${
//                 turnLight ? "white" : theme.palette.primary.main
//               }`,

//               borderRadius: 100,
//               height: "60px",
//               width: "60px",
//             }}
//           >
//             <Light3D />
//           </Button>
//         </ToolBoxWrapper> */}
//       </Box>
//     </PageWrapper>
//   );
// }
