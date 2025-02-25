import { Stack } from "@mui/material";
import { Outlet } from "react-router";
import Header from "./Header";
import { AccesibilityContext } from "../contexts/AccesibilityContext";
import { useContext } from "react";

export default function Layout() {
  const { highContrast } = useContext(AccesibilityContext);
  return (
    <Stack
      sx={{
        bgcolor: "background.default",
        color: "text.primary",
        height: "100vh",
        width: "100vw",
        padding: 2,
        gap: 2,
        filter: highContrast ? "invert(1)" : "none",
      }}
    >
      <Header />
      <Outlet />
    </Stack>
  );
}
