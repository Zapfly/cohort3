import React from 'react';





class Image extends React.Component {



    render() {

        return (
            <div onClick={this.props.onClick}>
                <img 
                    id={"idImg" + this.props.imageId} 
                    src={this.props.src} 
                    tabIndex={0}
                    alt=""
                    onClick={this.props.onClick}
                />
            </div>
            )
    }
}

export default Image;