import React from 'react';
import './Home.css'
import ThemeContext from '../../contexts/ThemeContext'
import Image from '../image';

class HomePage extends React.Component {
    constructor(props) {
        super(props)
        this.images = this.props.images
    }
    

    render() {
        return (
            <div className='wrapper'>
                {console.log(this.props.images[0])}
                <h1 className='title'>Welcome To My First Portfolio!</h1>
                <p className='description'>I first created this project when I attended the <a href='https://www.inceptionu.com/programs'>EvolveU Fast Track Full Stack Development Program</a> at InceptionU. I decided to take another look at it recently to add some clarity. But first...</p>
                <h2>About the Programmer</h2>
                <p><strong>Lucas Seeger</strong> (also known as RdngShotgn and Zapfly), is a creative web developer and game designer from Calgary, Alberta. After several years of acting in the Calgary theatre scene, Lucas decided that he wanted to use he skills in problem solving to help people instead of only to entertain them.</p>
                <img src={this.images[0].src }></img>

            </div>
        )
    }
}

export default HomePage;