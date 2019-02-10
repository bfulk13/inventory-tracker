import React, {Component} from 'react';

class Search extends Component{
    constructor(props){
        super(props);

        this.state = {
            filtered: [],
            input: ``
        }
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount(){
        this.setState({
            filtered: this.props.items
        })
    }
    
    handleChange(e){
        let currentList = [];
        let newList = [];
        if (e.target.value !== ``){
            currentList = this.props;
            newList = currentList.filter(item => {
                const lc = item.toLowerCase();
                const input = e.target.value.toLowerCase();
                return lc.brand.includes(e.target.value)
            })
        } else {
            newList = this.props;
        }
        this.setState({
            filtered: newList
        })
    }

    

    render(){
        const {filtered} = this.state;
        return(
            <div>
                <input 
                    placeholder="Search Inventory"
                    onChange={(e) => this.handleChange}
                />
                {filtered}    
            </div>
        )
    }
}

export default Search;