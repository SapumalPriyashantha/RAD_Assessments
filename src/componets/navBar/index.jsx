import React, { Component } from "react";
import {styleSheet} from "./style.js";
import { withStyles } from "@mui/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

class NavBar extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        const { classes } = this.props;
        return(
            <AppBar position="fixed">
                <CssBaseline />
                <Toolbar>
                    <Typography variant="h4" className={classes.logo}>
                        Dashboard
                    </Typography>
                    <div className={classes.navLinks}>
                        <Box>
                            <Link href="/home" className={classes.link} style={{color:"#010809" ,marginLeft:"15px"}} >Home</Link>
                        </Box>
                    </div>
                    <div className={classes.navLinks}>
                        <Box>
                            <Link href="/customer" className={classes.link} style={{color:"#010809" ,marginLeft:"15px"}} >Customer</Link>
                        </Box>
                    </div>
                    <div className={classes.navLinks}>
                        <Box>
                            <Link href="/item" className={classes.link} style={{color:"#010809" ,marginLeft:"15px"}} >Item</Link>
                        </Box>
                    </div>
                </Toolbar>
            </AppBar>
        )
    }
}
export default withStyles(styleSheet)(NavBar)
