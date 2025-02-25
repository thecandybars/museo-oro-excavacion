import { Button } from "@mui/material";
import { Link } from "react-router";
import PageWrapper from "../../ui/PageWrapper";
import Side from "./Side";

export default function Excavacion() {
  return (
    <PageWrapper>
      <Side />
      <Button variant="contained" component={Link} to="/piezas">
        Piezas
      </Button>
    </PageWrapper>
  );
}
