import React from 'react';
import './SocialMedia.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faYoutubeSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
const SocialMedia = ({league}) => {
    const fb = <FontAwesomeIcon icon={faFacebookSquare} />
    const twitter = <FontAwesomeIcon icon={faTwitterSquare} />
    const youtube = <FontAwesomeIcon icon={faYoutubeSquare} />
    const {strFacebook, strTwitter, strYoutube} = league;
    console.log(strFacebook);
    
    return (
        <div>
            <h1 className="text-center icon-container">
                <a href={"https://"+strFacebook} target="_blank" rel="noopener noreferrer">{fb}</a>
                <a href={"https://"+strTwitter} target="_blank" rel="noopener noreferrer">{twitter}</a>
                <a href={"https://"+strYoutube} target="_blank" rel="noopener noreferrer">{youtube}</a>
            </h1>
        </div>
    );
};

export default SocialMedia;