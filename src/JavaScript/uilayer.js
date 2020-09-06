import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    root: {
      backgroundColor: "#500000",
      color : "#FFFFFF"
    }
  });

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