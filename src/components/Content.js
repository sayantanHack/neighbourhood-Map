import React from 'react';
import Map from './Map';
import List from './List';
import * as Fetch from './../api/Locations';

class Content extends React.Component {
    state = {
        locations: [],
        queryResult: [],
        query: ""
    };
    componentDidMount(){
        Fetch.getLocationDetails()
        .then(locations =>console.log(locations));
    }
    handleClick = (location) => {
        for(let i=0; i< window.makers.length; i++){
            if(location.venue.id === window.makers[i].title){
                let content = this.prepareContent(location);
                // opening the setcontent function window
                window.infowindow.setContent(content);
                window.infowindow.open(window.mapObj, window.markers[i]);
            }
        }
    }
    // content of  locations
    prepareContent = location =>{
        return `<div>
        <h2 className='title'><a href='#'>${location.venue.name}</a></h2>
          <p>${location.venue.location.address}</p>
             </div>`;
    };

    handleTextChange = (query) => {
        this.setState({query});
        if (query){
            this.setState({locations: this.filterLocations(query, this.state.locations)})
        }
        else{
            this.setState({locations: this.state.allLocations})
        }
    };
    // filtering the queries
    filterLocations = (query, locations)=>{
        return locations.filter(locations=> locations.venue.name.includes(query));
    }

    render(){
        console.log(this.state.locations);
        return (
            <div className="content">
                <List locations={this.state.locations}
                    showInfoontent={this.handleClick}
                    queryString = {this.state.query}
                    handleChange = {this.handleTextChange}
                />
                <Map locations={this.state.locations} 
                    prepareContent={this.prepareContent} 
                    /> 
            </div>
        )
    }
}

export default Content;