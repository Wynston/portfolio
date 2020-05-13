import { Box, Button, Container, Typography } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import WynstonShrug from "assets/wynstonShrug.png";
import Image from "material-ui-image";
import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <Container maxWidth="sm">
      <Box padding={2} margin={2}>
        <Image src={WynstonShrug} aspectRatio={1} alt={"Shrug"} color="transparent" />
        <Typography variant="subtitle1" color="textSecondary" align="center">
          "Sorry, I can't seem to find that."
        </Typography>
        <Box marginTop={2} display="flex" justifyContent="center">
          <Button
            component={Link}
            to="/"
            startIcon={<HomeIcon />}
            variant="contained"
            color="primary">
            Home
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default PageNotFound;
