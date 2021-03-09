import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import './LeagueCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const LeagueCard = ({league}) => {
    console.log(league);
    const history = useHistory();
    const {idLeague, strLeague, strSport} = league;
    const [logo, setLogo] = useState([]);
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setLogo(data.leagues[0].strBadge))
    }, [idLeague]);
    const element = <FontAwesomeIcon icon={faArrowRight} />
    return (
        <div className="league-card">
            <img className="img-fluid" src={logo} alt=""/>
            <h5 className="text-center text-success"><strong>{strLeague}</strong></h5>
            <p className="text-center text-success">Sports type: {strSport}</p>
            <p className="text-center "><button className="btn btn-outline-success" onClick= {() => history.push(`/leagues/${idLeague}`)}>Explore {element}</button></p>
        </div>
    );
};

export default LeagueCard;