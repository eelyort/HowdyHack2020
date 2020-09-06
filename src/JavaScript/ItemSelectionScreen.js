import React from 'react';

class ItemSelectionScreen extends React.Component{
    constructor(props){
        super(props);
        this.toggleItem = this.toggleItem.bind(this);

        this.sanitizerState = false;
        this.maskState = false;
        this.snackState = false;
        this.shoesState = false;
        this.gogglesState = false;
        this.notebookState = false;
        this.props.player.inventory = [];
    }


    //Toggles item on click
    toggleItem(itemName){
        if(itemName === "Hand sanitizer"){
            if(this.sanitizerState){
                this.props.player.inventory.splice(this.props.player.inventory.indexOf(itemName),1);
                this.sanitizerState = false;
            }
            else{
                if(this.props.player.inventory.length < 3){
                    this.props.player.inventory.push(itemName);
                    this.sanitizerState = true;
                }
            }
        }
            
        else if(itemName === "Mask"){
            if(this.maskState){
                this.props.player.inventory.splice(this.props.player.inventory.indexOf(itemName),1);
                this.maskState = false;
            }
            else{
                if(this.props.player.inventory.length < 3){
                    this.props.player.inventory.push(itemName);
                    this.maskState = true;
                }
            }
        }

        else if(itemName === "Snack"){
            if(this.snackState){
                this.props.player.inventory.splice(this.props.player.inventory.indexOf(itemName),1);
                this.snackState = false;
            }
            else{
                if(this.props.player.inventory.length < 3){
                    this.props.player.inventory.push(itemName);
                    this.snackState = true;
                }
            }
        }

        else if(itemName === "Shoes"){
            if(this.shoesState){
                this.props.player.inventory.splice(this.props.player.inventory.indexOf(itemName),1);
                this.shoesState = false;
            }
            else{
                if(this.props.player.inventory.length < 3){
                    this.props.player.inventory.push(itemName);
                    this.shoesState = true;
                }
            }
        }

        else if(itemName === "Lab goggles"){
            if(this.gogglesState){
                this.props.player.inventory.splice(this.props.player.inventory.indexOf(itemName),1);
                this.gogglesState = false;
            }
            else{
                if(this.props.player.inventory.length < 3){
                    this.props.player.inventory.push(itemName);
                    this.gogglesState = true;
                }
            }
        }

        else if(itemName === "Lab notebook"){
            if(this.notebookState){
                this.props.player.inventory.splice(this.props.player.inventory.indexOf(itemName),1);
                this.notebookState = false;
            }
            else{
                if(this.props.player.inventory.length < 3){
                    this.props.player.inventory.push(itemName);
                    this.notebookState = true;
                }
            }
        }

        console.log(`Inventory length: ${this.props.player.inventory.length}`);
    }



    render(){
        return (
        <div componenttype="ItemSelectionScreen">
            <div componenttype="selectionSection">
                <div componenttype="sanitizerSelectButton" onClick={(e) => {this.toggleItem("Hand sanitizer")}}><img src={require("../Images/Sanitizer.png")} />Hand sanitizer</div>
                <div componenttype="maskSelectButton" onClick={(e) => {this.toggleItem("Mask")}}><img src={require("../Images/Mask.png")} />Mask</div>
                <div componenttype="snackSelectButton" onClick={(e) => {this.toggleItem("Snack")}}><img src={require("../Images/Snack.png")} />Snack</div>
                <div componenttype="shoesSelectButton" onClick={(e) => {this.toggleItem("Shoes")}}><img src={require("../Images/Shoes.png")} />Shoes</div>
                <div componenttype="gogglesSelectButton" onClick={(e) => {this.toggleItem("Lab goggles")}}><img src={require("../Images/Goggles.png")} />Lab goggles</div>
                <div componenttype="notebookSelectButton" onClick={(e) => {this.toggleItem("Lab notebook")}}><img src={require("../Images/Lab_Notebook.png")} />Lab notebook</div>
            </div>

            <div componenttype="startGameButton" onClick={function(e) {console.log("Start pressed")}}>Start!</div>
        </div>
        );
    }
}

export default ItemSelectionScreen;