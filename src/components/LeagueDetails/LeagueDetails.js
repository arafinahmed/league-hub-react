import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './LeagueDetails.css'
import Female from '../../Photo/Female.png';
import Male from '../../Photo/Male.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMars, faFutbol, faFlag, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import SocialMedia from '../SocialMedia/SocialMedia';
import LeagueNotFound from '../LeagueNotFound/LeagueNotFound';
const LeagueDetails = () => {
    const maleIcon = <FontAwesomeIcon icon={faMars} />;
    const footballIcon = <FontAwesomeIcon icon={faFutbol} />;
    const flagIcon = <FontAwesomeIcon icon={faFlag} />;
    const locationIcon = <FontAwesomeIcon icon={faMapMarkerAlt} />;

    const { id } = useParams();
    const [leagueDetails, setLeagueDetails] = useState({});
    const [isLeagueFound, setisLeagueFound] = useState(true);
    const { strBanner, strDescriptionEN, strLeague, intFormedYear, strCountry, strSport, strGender } = leagueDetails;
    console.log(leagueDetails);
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                if (data.leagues) {
                    setLeagueDetails(data.leagues[0]);
                }
                else {
                    setisLeagueFound(false);
                }

            })
    }, [id]);
    
    return (
        <div>
            {
                isLeagueFound ? <>
                    <section className="header-banner">
                        {
                            strBanner ? <img src={strBanner} alt="" /> : <img src="https://www.thesportsdb.com/images/media/league/banner/ohqozv1557525072.jpg" alt=""></img>
                        }
                        
                    </section>
                    <section className="container">
                        <div className="information-section">
                            <div className="written-information d-flex align-items-center">
                                <div>
                                    <h3> <strong>{strLeague}</strong> </h3>
                                    <div className="info-template">
                                        <h4>{locationIcon}</h4>
                                        <h4>Founded: {intFormedYear}</h4>
                                        <h4>{flagIcon}</h4>
                                        <h4>Country: {strCountry}</h4>
                                        <h4>{footballIcon}</h4>
                                        <h4> Sport Type: {strSport}</h4>
                                        <h4> {maleIcon}  </h4>
                                        <h4>Gender: {strGender}</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="image-container d-flex justify-content-end">
                                {
                                    (strGender === "Male") ? <img className="img-fluid" src={Male} alt="" /> : <img className="img-fluid" src={Female} alt="" />
                                }
                            </div>
                        </div>
                    </section>
                    <section className="container">

                        <div className="description-container">
                            <p>{strDescriptionEN}</p>
                        </div>

                    </section>
                    <SocialMedia league={leagueDetails} key={id}></SocialMedia>
                </> : <LeagueNotFound id={id} key={id}></LeagueNotFound>
            }
        </div>
    );
};

export default LeagueDetails;