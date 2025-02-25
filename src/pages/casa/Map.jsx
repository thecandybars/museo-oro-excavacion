import { Box } from "@mui/material";
import { useContext, useRef, useState } from "react";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import ToolBoxWrapper from "../../ui/MapToolbox/ToolboxWrapper";
import Markers from "../../ui/Marker";
import MarkerTooltip from "../../ui/MarkerTooltip";
import { LanguageContext } from "../../contexts/LanguageContext";
import translations from "../../utils/translations";
import ZoomButton from "../../ui/MapToolbox/ZoomButton";

export default function Map() {
  const [isPanning, setIsPanning] = useState(false);
  const wrapperRef = useRef();

  // Language and texts
  const { lang } = useContext(LanguageContext);
  const t = translations[lang].casa;

  // Markers
  const markers = [
    {
      position: { x: 23, y: 70 },
      positionTooltip: { x: 4, y: 45 },
      path: "/excavacion",
    },
  ];
  const markersWithTexts = markers.map((marker, i) => ({
    ...marker,
    ...t.markers[i],
  }));
  const [selectedMarker, setSelectedMarker] = useState(null);

  const renderMarkers = markersWithTexts.map((marker) => (
    <Markers
      key={marker.caption}
      marker={marker}
      onClick={(caption) => setSelectedMarker(caption)}
    />
  ));

  // Tooltips data box
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
        height: "100%",
      }}
    >
      {/* MAP */}
      <TransformWrapper
        ref={wrapperRef}
        initialScale={1}
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
          {renderMarkers}
          {renderTooltipInfo}
          <img
            src={`/casa-colonial-mapa.jpg`}
            style={{
              maxWidth: "none",
              height: "100%",
            }}
          />
        </TransformComponent>
      </TransformWrapper>
      {/* TOOLBOX */}
      <ToolBoxWrapper>
        <ZoomButton wrapperRef={wrapperRef} />
      </ToolBoxWrapper>
    </Box>
  );
}
