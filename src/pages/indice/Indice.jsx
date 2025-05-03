import { useContext } from "react";
import translations from "../../utils/translations";
import { LanguageContext } from "../../contexts/LanguageContext";
import { Box, List, ListItem, Stack, Typography } from "@mui/material";
import { CircleIcon } from "../../utils/icons";
import ButtonNav from "../../ui/ButtonNav";

export default function Indice() {
  const { lang } = useContext(LanguageContext);
  const t = translations[lang].inicio;
  const renderIndice = t.indice.map((item) => (
    <List key={item}>
      <ListItem sx={{ display: "flex", gap: 2, alignItems: "baseline" }}>
        <CircleIcon fontSize="small" color="primary" />
        <Typography variant="h2">{item}</Typography>
      </ListItem>
    </List>
  ));
  return (
    <Stack
      height={1}
      sx={{ backgroundColor: "black", color: "white" }}
      alignItems="center"
      justifyContent={"space-between"}
      p={8}
    >
      <Box>{renderIndice}</Box>
      <ButtonNav text={t.boton} to="/mapa" style={{ paddingX: "3rem" }} />
      <img
        src="/logo_banco_republica.png"
        alt="logo moz"
        style={{ width: 163, height: "auto" }}
      />
    </Stack>
  );
}
