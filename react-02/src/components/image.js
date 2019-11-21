import React from 'react';

let counter = 0

let imgArr = [
    "",
    "https://publicdomainvectors.org/photos/nicubunu-RPG-map-symbols-Round-Tower-2.png",
    "https://publicdomainvectors.org/photos/nicubunu-RPG-map-symbols-Windmill-1.png",
    "https://publicdomainvectors.org/photos/nicubunu-RPG-map-symbols-Tower-Square-2.png",
    "https://publicdomainvectors.org/photos/nicubunu-RPG-map-symbols-Statue-1.png",
    "https://publicdomainvectors.org/photos/nicubunu-RPG-map-symbols-Fortress-2.png",
    "https://publicdomainvectors.org/photos/nicubunu-RPG-map-symbols-Cathedral-2.png"
]

class Image extends React.Component {
    // constructor() {
    //     super();
    //         this.icon = "https://publicdomainvectors.org/photos/nicubunu-RPG-map-symbols-Round-Tower-2.png"
    //         this.identifier = counter
    //         this.picture = this.picture.bind(this)

    // }


    picture () {
        counter++
    }

    render() {
        this.picture()
        
        return (
            <div>
                <img id={"idImg" + counter} src={imgArr[counter]}/>
            </div>
            )
    }
}

export default Image;