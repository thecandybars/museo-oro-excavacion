import { Box } from "@mui/material";
import { useContext, useRef, useState } from "react";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import { LanguageContext } from "../../contexts/LanguageContext";
import translations from "../../utils/translations";
import MarkerTooltip from "../../ui/MarkerTooltip";
// import TimelineButton from "../../ui/MapToolbox/TimelineButton";
import ToolBoxWrapper from "../../ui/MapToolbox/ToolboxWrapper";
import Marker from "../../ui/Marker";
import ZoomButton from "../../ui/MapToolbox/ZoomButton";
import { AccesibilityContext } from "../../contexts/AccesibilityContext";

export default function Mapa() {
  const wrapperRef = useRef();

  const { lang } = useContext(LanguageContext);
  const t = translations[lang].map;

  const mapas = ["mapa01.jpg", "mapa02.jpg", "mapa03.jpg"];

  // const [map, setMap] = useState(0);
  const map = 0;
  const [isPanning, setIsPanning] = useState(false);

  const { highContrast } = useContext(AccesibilityContext);

  // Markers
  const [selectedMarker, setSelectedMarker] = useState(null);
  const markers = [
    {
      image: ["/mapa_t1_0.jpeg", "/mapa_t1_1.jpeg", "/mapa_t1_2.jpeg"],
      position: { x: 38, y: 36 },
      positionTooltip: { x: 35, y: 20 },
      path: "/excavacion",
    },
    {
      image: "/mapa_t2.jpeg",
      position: { x: 45, y: 36 },
      positionTooltip: { x: 43, y: 20 },
      path: "/",
    },
  ];
  const markersWithTexts = markers.map((marker, i) => ({
    ...marker, // Markers data +
    ...t.markers[i], // Markers texts
  }));

  const renderTooltips = markersWithTexts.map((marker) => (
    <Marker
      key={marker.caption}
      marker={marker}
      onClick={(markerCaption) => handleMarkerClick(markerCaption)}
      // style={{ filter: highContrast ? "invert(1)" : "none" }}
    />
  ));

  const handleMarkerClick = (markerCaption) => {
    if (markerCaption === selectedMarker) setSelectedMarker(null);
    else setSelectedMarker(markerCaption);
  };

  // Marker tooltip
  const tooltipData =
    selectedMarker &&
    markersWithTexts.find(
      (marker) => Number(marker.caption) === selectedMarker
    );
  const renderTooltipInfo = !!selectedMarker && (
    <MarkerTooltip
      positionTooltip={tooltipData.positionTooltip}
      image={tooltipData.image}
      title={tooltipData.title}
      description={tooltipData.description}
      path={tooltipData.path}
      button={tooltipData.button}
      onClose={() => setSelectedMarker(null)}
    />
  );

  return (
    <Box
      sx={{
        cursor: isPanning ? "grabbing" : "grab",
      }}
    >
      {/* MAP */}
      <TransformWrapper
        ref={wrapperRef}
        initialScale={1.7}
        centerOnInit={true}
        wheel={{ disabled: true }}
        doubleClick={{ disabled: true }}
        pinch={{ disabled: true }}
        zoomAnimation={{ disabled: true }}
        panning={{ velocityDisabled: false }}
        onPanningStart={() => setIsPanning(true)}
        onPanningStop={() => setIsPanning(false)}
      >
        <TransformComponent>
          {renderTooltips}
          {renderTooltipInfo}
          <img
            src={`/${mapas[map / 10]}`}
            width="100%"
            style={{
              zIndex: -1,
              filter: highContrast ? "invert(100%)" : "none",
            }}
          />
        </TransformComponent>
      </TransformWrapper>

      {/* TOOLBOX */}
      <ToolBoxWrapper>
        {/* <TimelineButton value={map} onChange={(value) => setMap(value)} /> */}
        <ZoomButton wrapperRef={wrapperRef} />
      </ToolBoxWrapper>
    </Box>
  );
}
