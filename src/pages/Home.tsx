import { Grid, Typography, Box, Button } from "@material-ui/core";
import WynstonPortrait from "assets/wynstonBrickPortrait.png";
import ImageComponent from "material-ui-image";
import React from "react";
import { useWidth } from "hooks";

function Home() {
  const width = useWidth();

  return (
    <Grid container direction="row" justify="space-evenly" alignItems="flex-end">
      <Grid item xs={12} md={6}>
        <Box
          textAlign="center"
          margin={2}
          minHeight={width === "xs" || width === "sm" ? 0 : "50vh"}>
          <Typography variant="h4" color="textPrimary" align="center" gutterBottom>
            Hello, I'm Wynston Ramsay
          </Typography>
          <Typography variant="body1" color="textSecondary" align="center" gutterBottom>
            I'm a software developer from
            <Button
              component="a"
              target="_blank"
              color="secondary"
              size="small"
              href="https://www.google.com/maps/place/Saskatoon,+SK/@52.1397391,-106.7167664,12z/data=!3m1!4b1!4m5!3m4!1s0x5304f6bf47ed992b:0x5049e3295772690!8m2!3d52.1332144!4d-106.6700458">
              Saskatoon, Saskatchewan
            </Button>
            <span role="img" aria-label="Canadian Flag" aria-labelledby="Canadian Flag">
              🇨🇦
            </span>
          </Typography>
          <Button
            variant="outlined"
            component="a"
            color="primary"
            target="_blank"
            size="small"
            href="https://drive.google.com/file/d/0B-X2oEFXcNBUY2RaMGM1eTRULWs/view?usp=sharing">
            Résumé
          </Button>
        </Box>
      </Grid>

      <Grid item xs={12} md={6} lg={5} xl={4}>
        <Box marginLeft={4}>
          <ImageComponent
            alt="Portrait of Wynston"
            color="transparent"
            src={WynstonPortrait}
            title="Portrait of Wynston"
          />
        </Box>
      </Grid>
    </Grid>
  );
}

export default Home;
