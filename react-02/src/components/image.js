import React from 'react';





class Image extends React.Component {
    constructor() {
        super();
        
    }


    picture () {
        this.counter++
    }

    render() {
        this.picture()

        return (
            <div onClick={this.props.onClick}>
                <img 
                    id={"idImg" + this.props.imageId} 
                    src={this.props.src} 
                    tabIndex={0} alt=""
                />
            </div>
            )
    }
}

export default Image;