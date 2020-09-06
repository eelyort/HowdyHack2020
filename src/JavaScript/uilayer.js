import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        backgroundColor: "#500000",
        color : "#FFFFFF"
      },
    },
}));
const styles = theme => ({
    root: {
      backgroundColor: "#500000",
      color : "#FFFFFF"
    }
  });
export function FadeMenu() {
    
    const classes = useStyles();

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
        <Button className={classes.root} size="small" variant = "outlined" color = "primary" aria-haspopup="true" onClick={handleClick}>
            Menu
        </Button>
        <Menu
            id="fade-menu"
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
                <FadeMenu/>
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