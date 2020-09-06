import React from 'react';
import "../CSS/item_selection_screen.css";

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

        this.render();
    }

    getButtonClassName(itemName){
        if(itemName === "sanitizer"){
            console.log("check1");
            if(this.sanitizerState){
                console.log("check2");
                return "item-button-selected";
            }
            else{
                console.log("check3");
                return "item-button";
            }
        }
    }

    render(){
        return (
        <div className="item-selection-screen">
            <h1>Choose three items!</h1>
            <div className="selection-section">
                <div className={this.getButtonClassName("sanitizer")} onClick={(e) => {this.toggleItem("Hand sanitizer")}}><img src={require("../Images/Sanitizer.png")} /><p>Hand sanitizer</p></div>
                <div className={`item-button mask-select-button `} onClick={(e) => {this.toggleItem("Mask")}}><img src={require("../Images/Mask.png")} /><p>Mask</p></div>
                <div className={`item-button snack-select-button `} onClick={(e) => {this.toggleItem("Snack")}}><img src={require("../Images/Snack.png")} /><p>Snack</p></div>
                <div className={`item-button shoes-select-button `} onClick={(e) => {this.toggleItem("Shoes")}}><img src={require("../Images/Shoes.png")} /><p>Shoes</p></div>
                <div className={`item-button goggles-select-button `} onClick={(e) => {this.toggleItem("Lab goggles")}}><img src={require("../Images/Goggles.png")} /><p>Lab goggles</p></div>
                <div className={`item-button notebook-select-button `} onClick={(e) => {this.toggleItem("Lab notebook")}}><img src={require("../Images/Lab_Notebook.png")} /><p>Lab notebook</p></div>
            </div>

            <div className="start-game-button" onClick={(e) => {
                console.log("clicked play");
                this.props.startFunc();
            }}>Play</div>
        </div>
        );
    }
}

export default ItemSelectionScreen;