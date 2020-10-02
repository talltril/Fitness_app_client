
import React from "react";
import '../About/AboutUs.css'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
    appBar: {
        backgroundColor: "#fff"
    },
    hero: {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.squarespace-cdn.com/content/v1/56b2c2e7d210b8c659dc9dcf/1572383710442-X3G69XQQN4YI87Z81OW4/ke17ZwdGBToddI8pDm48kFyD7pzB8zoMIVY5aiUuFlp7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0jG2lbcDYBOeMi4OFSYem8DMb5PTLoEDdB05UqhYu-xbnSznFxIRsaAU-3g5IaylIg/Jen+and+Mike+Fitness+July+09-+201788-1.jpg?format=500w')`,
        height: "500px",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        fontSize: "4rem",
        [theme.breakpoints.down("sm")]: {
            height: 300,
            fontSize: "3em"
        }
    },
    blogsContainer: {
        paddingTop: theme.spacing(3)
    },
    blogTitle: {
        fontWeight: 800,
        paddingBottom: theme.spacing(3)
    },
    card: {
        maxWidth: "100%",
    },
    media: {
        height: 240
    },
    cardActions: {
        display: "flex",
        margin: "0 10px",
        justifyContent: "space-between"
    },
    author: {
        display: "flex"
    },
    paginationContainer: {
        display: "flex",
        justifyContent: "center"
    }
}));

function About() {
    const classes = useStyles();

    return (
        <div className="App">
            <AppBar className={classes.appBar} position="static">
                <Toolbar>
                    <Typography variant="h6" color="primary" >

                    </Typography>
                </Toolbar>
            </AppBar>
            <Box className={classes.hero}>
                <Box>30 DAY JUMP START</Box>
            </Box>
            <Container maxWidth="lg" className={classes.blogsContainer}>
                <Typography variant="h4" className={classes.blogTitle}>
                   <h1> BELIEVE. WORK. ACHIEVE.</h1>
        </Typography>
            </Container>
            <div>
                <div className="slogan is-family-primary has-text-centered has-text-weight-bold" style={{ fontSize: '20px', marginBottom: '30' }}>
                    <h1>
                    </h1>
                    <div class="container is-fluid" style={{ width: '50%' }}>
                        <div class="notification" style={{ fontSize: '25px' }}>
                            <strong>About Us</strong>
                        </div>
                        <p>Located in Fort Lauderdale, Florida. Strong Bodiez offers customized 1 on 1 Personal Training, Semi-Private Training sessions, and Lifetstyle & Nutrition Coaching.</p>
                        <br />
                        <p>We work with everyone from busy professionals and busy moms, to brides/grooms to be. and people wanting a mental and physical transformation.</p>
                        <br />
                        <p>Through our combined decade of experience, we've helped hundreds of clients achieve a level they never before thought possible.</p>
                        <br />
                        <br />
                        <br />

                    </div>
                </div>
            </div>
      
    
        </div>
    );
}

export default About;