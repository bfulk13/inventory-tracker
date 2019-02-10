import React, {Component} from 'react';

class Shoe extends Component{
    constructor(props){
        super(props)

        this.state = {
            editing: false,
            inputRelease: ``,
            inputPurchase: ``,
            inputValue: ``
        }
    }

    edit(){
        const {shoe} = this.props;
        this.setState({
            editing: true
        })
        this.props.setEdit(shoe.releaseInfo, shoe.purchaseInfo, shoe.marketValue)
    }

    updateShoe = (id) => {
        this.props.updateShoe(id, this.state.inputRelease, this.state.inputPurchase, this.state.inputValue);

        this.setState({
            editing: false,
        })
    }

    render(){
        const {shoe, deleteShoe} = this.props;
        return(
            <div>
                {this.state.editing ? (
                    <div>
                        <h2>{shoe.brand}</h2>
                        <input onChange={(e) => this.setState({inputRelease:e.target.value})} placeholder="Release Info:" value={this.state.inputRelease}/>
                        {/* <h5>Purchase Info: {shoe.purchaseInfo}</h5> */}
                        <input onChange={(e) => this.setState({inputPurchase:e.target.value})} placeholder="Purchase Info" value={this.state.inputPurchase}/>
                        <input onChange={(e) => this.setState({inputValue:e.target.value})} placeholder="Market Value:" value={this.state.inputValue}/>
                        <button onClick={() => deleteShoe(shoe.id)}>Delete Shoe</button>
                        <button onClick={() => this.updateShoe(shoe.id)}>Save Shoe</button>
                    </div>
                ) : (
                    <div>
                        <h2>{shoe.brand}</h2>
                        <h5>Release Info: {shoe.releaseInfo}</h5>
                        <h5>Purchase Info: {shoe.purchaseInfo}</h5>
                        <h3>Market Value: {shoe.marketValue}</h3>
                        <button onClick={() => deleteShoe(shoe.id)}>Delete Shoe</button>
                        <button onClick={() => this.setState({editing:true, inputRelease: shoe.releaseInfo, inputPurchase: shoe.purchaseInfo, inputValue: shoe.marketValue})}>Edit Shoe</button>
                    </div>
                )}
            </div>
        )
    }
}

export default Shoe;