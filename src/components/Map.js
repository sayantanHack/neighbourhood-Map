import React from 'react';

class Map extends React.Component {
    markers = [];
    addMarkers = locations => {
        if (window.google){
            // initializing infor window
            let infowindow = new window.google.maps.InfoWindow();
            // looping through the area
            for(let i=0; i < locations.length; i++){
            let marker = new window.google.maps.Marker({
                position: {
                    lat: locations[i].venue.location.lat ,
                     lng: locations[i].venue.location.lng
                    },
                    map: window.mapObj,
                    title: locations[i].venue.id
                });        
                 marker.addListener('click', function() {
                 let content = this.props.prepareContent(locations[i]);
                 infowindow.setContent(content);
                 // Open An InfoWindow
                infowindow.open(window.mapObj, marker)

                });
                
                this.markers.push(marker);
            }
            window.infowindow = infowindow;
            window.markers = this.markers;

        }
    };   


    removeMapMarkers(){
        for(let i= 0; i< this.markers.length; i++){
            this.markers[i].setMap(null);
        }
    }

    render(){
        console.log("Makerrss LOATIONSSS",this.props.locations);
        this.removeMapMarkers()
        this.addMarkers(this.props.locations);
        return <div id="map" /> ;
    }
}

export default Map;