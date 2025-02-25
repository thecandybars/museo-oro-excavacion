/* eslint-disable react/prop-types */
import { Box, Button, Slide, Stack, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";
import translations from "../../utils/translations";
import { BibliographyIcon, CancelIcon } from "../../utils/icons";

export default function Side() {
  const { lang } = useContext(LanguageContext);
  const [currentPage, setCurrentPage] = useState(0);
  const t = translations[lang].main;

  // PAGE 0
  const renderPage0 = (
    <>
      <Typography variant="h1" color="primary">
        {t.sideTitle}
      </Typography>
      <Typography variant="body1">{t.sideParagraph}</Typography>
    </>
  );

  // PAGE 1
  const renderBooks = t.sideBibliography.books.map((book) => (
    <Book book={book} key={book.title} />
  ));
  const renderPage1 = (
    <Slide direction="right" in={currentPage === 1} mountOnEnter unmountOnExit>
      <Box>
        <Typography variant="h1" color="primary">
          {t.sideBibliography.title}
        </Typography>
        {renderBooks}
      </Box>
    </Slide>
  );

  const renderBibliographyButton = (
    <Button
      variant="contained"
      color="primary"
      onClick={() => setCurrentPage((prev) => 1 - prev)}
      sx={{
        borderRadius: 100,
        height: "60px",
        width: "60px",
        alignSelf: "flex-end",
      }}
    >
      {currentPage === 0 ? <BibliographyIcon /> : <CancelIcon />}
    </Button>
  );
  return (
    <Stack height={1} justifyContent="space-between">
      <Stack> {currentPage === 0 ? renderPage0 : renderPage1}</Stack>
      {renderBibliographyButton}
    </Stack>
  );
}

const Book = ({ book }) => {
  return (
    <Stack>
      <Typography variant="h6" color="primary">
        {book.title}
      </Typography>
      <Typography variant="body1" color="secondary">
        {book.author}
      </Typography>
      <Typography variant="caption" color="secondary">
        {book.footer}
      </Typography>
    </Stack>
  );
};
