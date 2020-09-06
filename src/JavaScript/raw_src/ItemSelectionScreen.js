class ItemSelectionScreen extends React.Component{
    constructor(props){
        super(props);
    }

    render(){



        return (
        <div componentType="ItemSelectionScreen">
            <div componentType="selectionSection">
                <div componentType="sanitizerSelectButton" onClick={this.props.player.inventory.push("Hand sanitizer")}><img src="../../../Game_assets/Sanitizer.png" />Hand sanitizer</div>
                <div componentType="maskSelectButton" onClick={this.props.player.inventory.push("Mask")}><img src="../../../Game_assets/Mask.png" />Mask</div>
                <div componentType="snackSelectButton" onClick={this.props.player.inventory.push("Snack")}><img src="../../../Game_assets/Snack.png" />Snack</div>
                <div componentType="shoesSelectButton" onClick={this.props.player.inventory.push("Shoes")}><img src="../../../Game_assets/Shoes.png" />Shoes</div>
                <div componentType="gogglesSelectButton" onClick={this.props.player.inventory.push("Lab goggles")}><img src="../../../Game_assets/Goggles.png" />Lab goggles</div>
                <div componentType="notebookSelectButton" onClick={this.props.player.inventory.push("Lab notebook")}><img src="../../../Game_assets/Lab_Notebook.png" />Lab notebook</div>
            </div>

            <div componentType="startGameButton" onClick="">Start!</div>
        </div>
        );
    }
}

