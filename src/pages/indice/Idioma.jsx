import { Box, Stack, Typography } from "@mui/material";
import ButtonNav from "../../ui/ButtonNav";
import { useContext } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";
import translations from "../../utils/translations";

export default function Idioma() {
  const { lang, setLang } = useContext(LanguageContext);
  const t = translations[lang].inicio;

  return (
    <Stack
      height={1}
      sx={{ backgroundColor: "black", color: "white" }}
      alignItems="center"
      justifyContent={"space-between"}
      p={8}
    >
      <img
        src="/logo_moz.png"
        alt="logo moz"
        style={{ width: 163, height: "auto" }}
      />
      <Typography variant="h1">{t.titulo}</Typography>
      <Box display={"flex"} gap={2}>
        <ButtonNav text="Español" to="/indice" onClick={() => setLang("es")} />
        <ButtonNav text="English" to="/indice" onClick={() => setLang("en")} />
      </Box>
      <img
        src="/logo_banco_republica.png"
        alt="logo moz"
        style={{ width: 163, height: "auto" }}
      />
    </Stack>
  );
}
