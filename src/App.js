import React, { Component } from 'react'
import './App.css'
import Header from './components/Header'
import Content from './components/Content'


class App extends Component {

  
  initMap = () => {

    // Create A Map
    let map = new window.google.maps.Map(document.getElementById("map"), {
      // latitude longitude
      center: {lat: 22.6718897, lng: 88.2610251},
      zoom: 10
    });
    window.mapObj = map; 
  }

  loadScript() {
    let scriptEl  = this.createMapScript();
    let scriptOnPage = document.getElementsByTagName("script");
    let script = scriptOnPage[0];
    console.log(scriptOnPage);
    //console.log(script.parentNode);  
    script.parentNode.insertBefore(scriptEl, script);
    window.initMap = this.initMap;
  }
  
  createMapScript(){
    let mapScript = document.createElement("script");
    mapScript.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyD1DrDBUd6GNL2EIBCxK-K0OjkTny8kbuA&callback=initMap";
    mapScript.async = true;
    mapScript.defer = true;
    return mapScript;
  }

  render() {
    this.loadScript();
    return (
        <div className="App">
          <Header />
          <Content />
        </div>
      
    );
  }
}



export default App;
