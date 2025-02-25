import { Box } from "@mui/material";
import { useContext, useRef, useState } from "react";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import { LanguageContext } from "../../contexts/LanguageContext";
import translations from "../../utils/translations";
import MarkerTooltip from "../../ui/MarkerTooltip";
import TimelineButton from "../../ui/MapToolbox/TimelineButton";
import ToolBoxWrapper from "../../ui/MapToolbox/ToolboxWrapper";
import Marker from "../../ui/Marker";
import ZoomButton from "../../ui/MapToolbox/ZoomButton";
import { AccesibilityContext } from "../../contexts/AccesibilityContext";

export default function Map() {
  const wrapperRef = useRef();

  const { lang } = useContext(LanguageContext);
  const t = translations[lang].main;

  const mapas = ["mapa01.jpg", "mapa02.jpg", "mapa03.jpg"];

  const [map, setMap] = useState(0);
  const [isPanning, setIsPanning] = useState(false);

  const { highContrast } = useContext(AccesibilityContext);

  // Markers
  const [selectedMarker, setSelectedMarker] = useState(null);
  const markers = [
    {
      image: "/plaza-aduana.jpg",
      position: { x: 50, y: 50 },
      positionTooltip: { x: 37, y: 28 },
      path: "/casa",
    },
    {
      image: "/plaza-san-pedro-claver.jpg",
      position: { x: 80, y: 50 },
      positionTooltip: { x: 67, y: 33 },
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
            src={`/public/${mapas[map / 10]}`}
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
        <TimelineButton value={map} onChange={(value) => setMap(value)} />
        <ZoomButton wrapperRef={wrapperRef} />
      </ToolBoxWrapper>
    </Box>
  );
}
