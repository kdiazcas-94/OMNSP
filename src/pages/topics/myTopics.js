import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Modal from '../../components/modal/TopicModal'
import useModal from '../../components/modal/useModal';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: "#444e5c",
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export default function Album() {
  const classes = useStyles();
  const {isShowing, toggle} = useModal();
  return (
    <React.Fragment>
      <AppBar position="relative">
        <Toolbar>
          <CameraIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            My Topics
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom marginTop="sm">
              My Topic Name
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Insert information of the topic
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary" onClick={toggle}>Read More</Button>
                  <Modal
                    isShowing={isShowing}
                    hide={toggle}
                  />
                </Grid>
              </Grid>
            </div>
          </Container>
          <br />
          <hr />
          <br />
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              My Topic Name
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Insert information of the topic
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary" onClick={toggle}>Read More</Button>
                  <Modal
                    isShowing={isShowing}
                    hide={toggle}
                  />
                </Grid>
              </Grid>
            </div>
          </Container>
          <br />
          <hr />
          <br />
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              My Topic Name
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Insert information of the topic
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary" onClick={toggle}>Read More</Button>
                  <Modal
                    isShowing={isShowing}
                    hide={toggle}
                  />
                </Grid>
              </Grid>
            </div>
          </Container>
          <br />
          <hr />
          <br />
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              My Topic Name
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Insert information of the topic
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary" onClick={toggle}>Read More</Button>
                  <Modal
                    isShowing={isShowing}
                    hide={toggle}
                  />
                </Grid>
              </Grid>
            </div>
          </Container>

          
          
        </div>
      </main>
    </React.Fragment>
  );
}