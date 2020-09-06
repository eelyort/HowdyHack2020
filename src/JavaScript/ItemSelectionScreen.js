import React from 'react';

class ItemSelectionScreen extends React.Component{
    constructor(props){
        super(props);
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
        if(itemName == "Hand sanitizer"){
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
            
        else if(itemName == "Mask"){
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

        else if(itemName == "Snack"){
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

        else if(itemName == "Shoes"){
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

        else if(itemName == "Lab goggles"){
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

        else if(itemName == "Lab notebook"){
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
    }

    render(){
        return (
        <div componentType="ItemSelectionScreen">
            <div componentType="selectionSection">
                <div componentType="sanitizerSelectButton" onClick={this.toggleItem("Hand Sanitizer")}><img src="../Images/Sanitizer.png" />Hand sanitizer</div>
                <div componentType="maskSelectButton" onClick={this.toggleItem("Mask")}><img src="./Game_assets/Mask.png" />Mask</div>
                <div componentType="snackSelectButton" onClick={this.toggleItem("Snack")}><img src={require("../Images/Snack.png")} />Snack</div>
                <div componentType="shoesSelectButton" onClick={this.toggleItem("Shoes")}><img src="../Images/Shoes.png" />Shoes</div>
                <div componentType="gogglesSelectButton" onClick={this.toggleItem("Lab goggles")}><img src="../Images/Goggles.png" />Lab goggles</div>
                <div componentType="notebookSelectButton" onClick={this.toggleItem("Lab notebook")}><img src="../Images/Lab_Notebook.png" />Lab notebook</div>
            </div>

            <div componentType="startGameButton" onClick="">Start!</div>
        </div>
        );
    }
}

export default ItemSelectionScreen;