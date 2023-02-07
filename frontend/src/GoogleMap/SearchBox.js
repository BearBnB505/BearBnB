import React from 'react';

class SearchBox extends React.Component {

    render() {
        return (
            <input
                id="pac-input"
                className="controls"
                type="text"
                placeholder="Search Box"
                ref={(ref)=> this.input = ref}
            />)
    }


    componentDidMount({ map, mapApi} = this.props ) {
        this.searchBox = new mapApi.places.SearchBox(this.input);
    }

}

export default SearchBox