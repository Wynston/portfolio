import GitLabIcon from "@iconify/icons-mdi/gitlab";
import { Icon as IconifyIcon } from "@iconify/react";
import { Grid, IconButton, makeStyles, Paper, Theme, Tooltip, Typography } from "@material-ui/core";
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import React from "react";

const useStyles = makeStyles((theme: Theme) => ({
  footer: {
    padding: theme.spacing(4, 2)
  }
}));

function Footer() {
  const classes = useStyles();

  return (
    <Paper elevation={1} className={classes.footer} square>
      <Grid container direction="row" justify="center">
        <Grid item>
          <Tooltip title="GitLab">
            <IconButton href="https://gitlab.com/wynstonramsay" target="_blank">
              <IconifyIcon icon={GitLabIcon} />
            </IconButton>
          </Tooltip>
        </Grid>
        <Grid item>
          <Tooltip title="GitHub">
            <IconButton href="https://github.com/Wynston" target="_blank">
              <GitHubIcon />
            </IconButton>
          </Tooltip>
        </Grid>
        <Grid item>
          <Tooltip title="LinkedIn">
            <IconButton href="https://www.linkedin.com/in/wynston-ramsay-22812bb8/" target="_blank">
              <LinkedInIcon />
            </IconButton>
          </Tooltip>
        </Grid>
        <Grid item>
          <Tooltip title="Email">
            <IconButton href="mailto: wynstonramsay@gmail.com">
              <EmailIcon />
            </IconButton>
          </Tooltip>
        </Grid>
        <Grid item xs={12} container justify="center">
          <Typography variant="caption" color="textSecondary" align="center">
            © Wynston Ramsay 2020
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Footer;
