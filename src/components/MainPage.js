import React from 'react';

class MainPage extends React.Component {

    state= {
        users: [],
        filterKey: "",
        searchResult: []
    }

    updateList = (e) => {
        e.preventDefault();
        this.setState({searchResult: [...this.state.users.filter(user => 
            Object.values(user).some(d => JSON.stringify(d).includes(this.state.filterKey))        
        )]});
    }

    filterKeyChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
        console.log(this.state.filterKey);
    } 

    componentDidMount(){
        const url = "https://jsonplaceholder.typicode.com/users";
        fetch(url).then(result => result.json())
        .then(data => this.setState({users: data}, () => console.log(typeof data[0])));
    }

    render(){
        return (
            <div>
                <header style={headerStyle}>
                    <h1>Registered Users</h1>
                </header>
                <div>
                    <form style={formStyle} onSubmit={this.updateList}>
                        <input id="filterKey" type="text" name="filterKey" placeholder="Search.." value={this.state.filterKey} onChange={this.filterKeyChange}/>
                        <input type="submit" value="filter"/>
                    </form>
                </div>
                <div style={formStyle}>
                    {this.state.users.map((user) => <li>{user.name}</li> )}
                </div>
                <div>
                    <header style={headerStyle}>
                        <h3>Search Results</h3>
                    </header>
                    <div style={formStyle}>
                        {this.state.searchResult.map((user) => <li>{user.name}</li> )}
                    </div>
                </div>
            </div>
        );
    }
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    padding: '10px',
}
const formStyle = {
    padding: '10px',
}


export default MainPage;
