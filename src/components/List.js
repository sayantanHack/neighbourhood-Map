import React from 'react';

class List extends React.Component {
    render(){
        // location list
        const locations = this.props.locations;
        return (
        <div id="list">
            <h2>Lists of Food Center</h2>
            <input type="text" value={this.props.queryString} onhange={e => this.props.handleChange(e.target.value)} />
            <ol>
                {locations.map(loc => (
                    <li key={loc.venue.id}>
                        <div>
                            <h2 className='title'><a href="#">{loc.venue.name}</a></h2>
                            <p>loc.venue.location.address</p>
                        </div>
                    </li>
                ))}
            </ol>    
        </div>
        );
    }
}

export default List;