import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './LeagueDetails.css'
import Female from '../../Photo/Female.png';
import Male from '../../Photo/Male.png';

const LeagueDetails = () => {
    const {id} = useParams();
    const [leagueDetails, setLeagueDetails] = useState({});
    const {strBanner, strDescriptionEN, strLeague, intFormedYear, strCountry, strSport, strGender} = leagueDetails;
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data.leagues[0]);
            setLeagueDetails(data.leagues[0]);
        })
    }, [id]);
    return (
        <div>
            <section className="header-banner">
                <img src={strBanner} alt=""/>
            </section>
            <section>
                <div>
                    <h4>{strLeague}</h4>
                    <h5>Founded: {intFormedYear}</h5>
                    <h5>Country: {strCountry}</h5>
                    <h5>Sport Type: {strSport}</h5>
                    <h5>Gender: {strGender}</h5>
                </div>
                <div>
                    {
                        (strGender === "Male") ? <img src={Male} alt=""/> : <img src={Female} alt=""/>
                    }
                </div>
            </section>
            <p>{strDescriptionEN} {strSport}</p>

        </div>
    );
};

export default LeagueDetails;