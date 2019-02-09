import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Shoe from './components/Shoe'


class App extends Component {
  constructor(){
    super()

    this.state = {
      shoes: [],
      id: 0,
      brand: ``,
      releaseInfo: ``,
      purchaseInfo: ``,
      marketValue: ``
    }
    this.deleteShoe = this.deleteShoe.bind(this);
  }

  handleBrand(val){
    this.setState({ brand: val })
  }

  handleReleaseDate(val){
    this.setState({ releaseInfo: val })
  }

  handlePurchaseInfo(val){
    this.setState({ purchaseInfo: val })
  }

  handleMarketValue(val){
    this.setState({ marketValue: val })
  }
  
  componentDidMount(){
    axios.get('/api/shoes').then((res) => {
      this.setState({
        shoes: res.data
      })
    })
  }

  addShoe(brand,releaseInfo,purchaseInfo,marketValue){
    axios.post('/api/shoe', {brand,releaseInfo,purchaseInfo,marketValue}).then(res => {
      this.setState({
        shoes: res.data,
        brand: ``,
        releaseInfo: ``,
        purchaseInfo: ``,
        marketValue: ``
      })
    })
  }

  updateShoe = (id, releaseInfo, marketValue) => {
    axios.put(`/api/shoe/${id}`, {releaseInfo,marketValue}).then(res => {
      this.setState({
        shoes: res.data,
      })
    })
  }

  deleteShoe(id){
    axios.delete(`/api/shoe/${id}`).then(res => {
      this.setState({
        shoes: res.data
      })
    })
  }

  setEdit(releaseInfo,marketValue){
    this.setState({
      releaseInfo,
      marketValue
    })
  }
  // handleSearch(){
  //   let shoes = this.state.shoes.map((val,i) => {

  //   })
  //   this.setState({
  //     brand:  
  //   })
  // }

  render() {
    const {brand, releaseInfo,purchaseInfo,marketValue} = this.state
    let mappedShoes = this.state.shoes.map(shoe => {
      return(
        <Shoe 
          key={shoe.id}
          shoe={shoe}
          deleteShoe={this.deleteShoe}
          updateShoe={this.updateShoe}
          setEdit={this.setEdit}

        />
      )
    })
    return (
      <div className="App">
        <h1>SneakerHead Inventory</h1>
        <input 
          
          placeholder="Add Shoe Brand-Model"
          onChange={(e) => this.handleBrand(e.target.value)}
          value={this.state.brand}
        />
        <input 
          placeholder="Add release date info"
          onChange={(e) => this.handleReleaseDate(e.target.value)}
          value={this.state.releaseInfo}
        />
        <input 
          placeholder="Add purchase info"
          onChange={(e) => this.handlePurchaseInfo(e.target.value)}
          value={this.state.purchaseInfo}
        />
        <input 
          placeholder="Add market value info"
          onChange={(e) => this.handleMarketValue(e.target.value)}
          value={this.state.marketValue}
        />
        <button onClick={() => this.addShoe(brand,releaseInfo,purchaseInfo,marketValue)}>Add Shoe</button>
        
        {mappedShoes}
      </div>
    );
  }
}

export default App;
