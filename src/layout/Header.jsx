/* eslint-disable react/prop-types */
import {
  Box,
  Button,
  FormControlLabel,
  Menu,
  MenuItem,
  Switch,
  Typography,
} from "@mui/material";
import { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import ButtonNav from "../ui/ButtonNav";
import { LanguageContext } from "../contexts/LanguageContext";
import translations from "../utils/translations";
import { SettingsIcon, TextIncreaseIcon, VisibilityIcon } from "../utils/icons";
import { theme } from "../utils/theme/ThemeProviderWrapper";
import { AccesibilityContext } from "../contexts/AccesibilityContext";

export default function Header() {
  // Navigate and routes
  const navigate = useNavigate();
  const path = useLocation();
  // Language and texts
  const { lang } = useContext(LanguageContext);
  const t = translations[lang].header;
  return (
    <Box component="nav" sx={{ display: "flex", alignItems: "center", gap: 2 }}>
      <Box sx={{ width: "25%" }}>
        <Link to="/">
          <img
            src="/logo-museo-del-oro.png"
            alt="Logo Museo del Oro"
            width={162}
          />
        </Link>
      </Box>
      <Box
        sx={{
          display: "flex",
          width: "75%",
          justifyContent: "space-between",
          gap: 2,
        }}
      >
        <Box display="flex" gap={2}>
          {path?.pathname !== "/" && <ButtonNav text={t.btnHome} to="/" />}
          {path?.pathname !== "/" && (
            <ButtonNav text={t.btnBack} onClick={() => navigate(-1)} />
          )}
        </Box>
        <Box display="flex" gap={2}>
          <LangButton />
          <SettingsButton text={t.settings} />
        </Box>
      </Box>
    </Box>
  );
}

const SettingsButton = ({ text }) => {
  const [openMenu, setOpenMenu] = useState(null);
  const { fontScale, setFontScale, highContrast, setHighContrast } =
    useContext(AccesibilityContext);
  const handleClose = () => {
    setOpenMenu(false);
  };
  const styles = {
    menu: {
      display: "flex",
      justifyContent: "space-between",
    },
  };
  const buttonRef = useRef();

  const menu = (
    <Menu anchorEl={buttonRef.current} open={openMenu} onClose={handleClose}>
      <MenuItem sx={{ ...styles.menu }}>
        <FormControlLabel
          control={
            <Switch
              checked={fontScale}
              onChange={() => {
                setFontScale(!fontScale);
              }}
              color="primary"
            />
          }
          label={text.menuFont}
        />
        <TextIncreaseIcon
          color="secondary"
          onClick={() => setHighContrast(!highContrast)}
        />
      </MenuItem>
      <MenuItem sx={{ ...styles.menu }}>
        <FormControlLabel
          control={
            <Switch
              checked={highContrast}
              onChange={() => {
                setHighContrast(!highContrast);
              }}
              color="primary"
            />
          }
          label={text.menuContrast}
        />
        <VisibilityIcon
          color="secondary"
          onClick={() => setHighContrast(!highContrast)}
        />
      </MenuItem>
    </Menu>
  );
  return (
    <>
      <Button
        ref={buttonRef}
        onClick={() => setOpenMenu((prev) => !prev)}
        sx={{
          borderRadius: 100,
          border: "1px solid" + theme.palette.primary.main,
        }}
      >
        <SettingsIcon />
      </Button>
      {menu}
    </>
  );
};

const LangButton = () => {
  const { lang, setLang } = useContext(LanguageContext);
  return (
    <Button
      variant="outlined"
      color="primary"
      onClick={() => setLang((prev) => (prev === "es" ? "en" : "es"))}
      sx={{
        borderRadius: 100,
        border: "1px solid" + theme.palette.primary.main,
      }}
    >
      <Typography variant="h6"> {lang?.toUpperCase()}</Typography>
    </Button>
  );
};
