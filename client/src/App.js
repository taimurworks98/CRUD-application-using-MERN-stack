import './App.css';
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core'
import Student from './components/ShowStudents';
import Create from './components/CreateStudent';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles((theme) =>
  createStyles({
    App:{
      width: 'max-content',
    },

    toolbar: {
      minHeight: '10px',
    },
    
    content: {
      flexGrow: 1,
      height: '100vh',
      overflow: 'auto',
      padding: theme.spacing(3),
      backgroundColor: '#F5F5F5',
    },
  
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
      paddingLeft: '0%',
      paddingRight: '0%',
    },
    paper: {
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
    },
    
  }),
);
function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Container maxWidth="max-content" style={{paddingRight:'0px', paddingLeft: '0px'}}>
        <AppBar className={classes.appBar} position="static" color="inherit">
          <Typography className={classes.heading} variant="h2" align="center" style={{backgroundColor:'#3f51b5', color:'#ffffff'}}>
            STUDENTS CRUD SYSTEM
          </Typography>
        </AppBar>
          <main className={classes.content}>
            <div className={classes.toolbar} />
            <Container maxWidth="lg" className={classes.container}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Paper className={classes.paper}>
                    
                      <Grid container>
                        <Grid item xl={8} lg={8} md={12} sm={12} xs={12} zeroMinWidth>
                          <Student/>
                        </Grid>
                        <Grid item xl={4} lg={4} md={12} sm={12} xs={12} zeroMinWidth>
                          <Create/>
                        </Grid>
                      </Grid>
                    
                  </Paper>
                </Grid>
              </Grid>
            </Container>
          </main>
      </Container>
    </div>
  );
}

export default App;
