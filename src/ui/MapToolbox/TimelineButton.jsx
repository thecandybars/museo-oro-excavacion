/* eslint-disable react/prop-types */
import { Box, Button, Fade, Slider } from "@mui/material";
import { TimelineToolIcon } from "../../utils/icons";
import { useState } from "react";
import { theme } from "../../utils/theme/ThemeProviderWrapper";

const TimelineButton = ({ value, onChange }) => {
  const [openTimeline, setOpenTimeline] = useState(false);
  const marks = [
    {
      value: 0,
      label: "1700",
    },
    {
      value: 10,
      label: "1800",
    },
    {
      value: 20,
      label: "2000",
    },
  ];
  return (
    <Box display="flex" alignItems={"center"} justifyContent="flex-end" gap={2}>
      <Fade in={openTimeline}>
        <Box
          sx={{
            bgcolor: "white",
            paddingRight: 8,
            paddingLeft: 7,
            marginRight: -6,
            height: "60px",
            borderTopLeftRadius: 100,
            borderBottomLeftRadius: 100,
            overflow: "hidden",
          }}
        >
          <Slider
            aria-label="Timeline"
            //   getAriaValueText={valuetext}
            // valueLabelDisplay="auto"
            value={value}
            marks={marks}
            min={0}
            max={20}
            sx={{
              width: "100px",
              //   marginTop: 2,
              "& .MuiSlider-markLabel": {
                color: "primary.main",
                fontSize: "0.8rem",
                fontWeight: "bold",
              },
            }}
            onChange={(e) => onChange(e.target.value)}
            onChangeCommitted={(e, value) =>
              onChange(Math.round(value / 10) * 10)
            }
          />
        </Box>
      </Fade>

      <Button
        variant="contained"
        color="primary"
        onClick={() => setOpenTimeline((prev) => !prev)}
        sx={{
          border: `5px solid ${
            openTimeline ? "white" : theme.palette.primary.main
          }`,

          borderRadius: 100,
          height: "60px",
          width: "60px",
        }}
      >
        <TimelineToolIcon />
      </Button>
    </Box>
  );
};

export default TimelineButton;
