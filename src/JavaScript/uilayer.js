import React from 'react';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import { red, green, purple } from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles((theme) => ({
    root: {
       
        margin: theme.spacing(1),
        backgroundColor: "#500000",
        color : "#FFFFFF"
    },
    '&:hover': {
        backgroundColor: '#0069d9',
        borderColor: '#500000',
        boxShadow: 'none',
        color : "#000000"
    }
}));

const useStylesLinearProgress = makeStyles({
    root: {
      width: '100%',
      position: "absolute",
      bottom: "0px",
      float : "middle",
      margin: "auto"
    },
  });
const useStylesProgressBar1 = makeStyles({
    root: {
      width: 200,
      position: "absolute",
      bottom: "0px",
      float : "middle",
      margin: "auto"
    },
});
const ColorButton = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText( "#500000"),
      backgroundColor: "#500000",
      '&:hover': {
        backgroundColor: red[600],
      },
    },
}))(Button);
const styles = theme => ({
    root: {
      backgroundColor: "#500000",
      color : "#FFFFFF"
    }
  });
export function ContinuousSlider() {
    const classes = useStylesProgressBar1();
    const [value, setValue] = React.useState(30);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <Typography id="disabled-slider" gutterBottom>
                COVID Bar
            </Typography>
            <Slider disabled defaultValue={30} aria-labelledby="disabled-slider" />
        </div>
    );
}
export function LinearDeterminate() {
    const classes = useStylesLinearProgress();
    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {
        const timer = setInterval(() => {
        setProgress((oldProgress) => {
            if (oldProgress === 100) {
            return 0;
            }
            const diff = Math.random() * 10;
            return Math.min(oldProgress + diff, 100);
        });
        }, 500);

        return () => {
        clearInterval(timer);
        };
    }, []);

    return (
        <div className={classes.root}>
        <LinearProgress variant="determinate" value={progress} />
        </div>
    );
}
export function FadeMenu() {
    
    const styless = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
        <ColorButton  size="small" variant = "outlined" color = "primary" aria-haspopup="true" onClick={handleClick}>
            Menu
        </ColorButton>
        <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
        >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
        </div>
    );
}
class UI extends React.Component{
    
    constructor(props){
        super(props);
    }
    state = {
        searchNodes: ""
    };
    render(){
        //const classes = useStyles();
        const { classes } = this.props;
        
        return(
            
          <div className="UIDiv1">
              
                THIS IS DIV
                {/*This is the menu thing. The code for it is in the function fademenu. */}
                <FadeMenu/>
                {/*This is the progress bar. The code for it is in the function LinearDeterminate. */}
                <LinearDeterminate/>

                {/*These are 2 types of buttons. If u want a different color button, reference the thing called ColorButton.(Ctrl F it). Its the const one. U can put whatever color u want.
                
                
                To use the buttons u just need to import them. The hover is for when u hover. U can give it whatever color u want. 

                https://material-ui.com/components/buttons/#CustomizedButtons.js 
                Go to the link above for more styles. Good luck boiss.
                */}
                <div className = "UIButton1">
                    <Button size="large" variant = "contained" color = "primary" classname = "colorInherit">TO DO BUTTON</Button>
                </div>
                <br></br><br></br>
                <div className = "UIButton2">
                    <Button className = {classes.root} size="small" variant = "outlined" color = "primary" >TO DO BUTTON</Button>
                </div>
          </div>
          
        );
    }
}

export default  withStyles(styles)(UI);