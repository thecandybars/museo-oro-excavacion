import { Stack, Typography } from "@mui/material";
import { useContext } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";
import translations from "../../utils/translations";

export default function Side() {
  const { lang } = useContext(LanguageContext);
  const t = translations[lang].piezas;

  return (
    <Stack height={1}>
      <Typography variant="h1" color="primary">
        {t.sideTitle}
      </Typography>
      <Typography variant="body1">{t.sideParagraph}</Typography>
    </Stack>
  );
}
