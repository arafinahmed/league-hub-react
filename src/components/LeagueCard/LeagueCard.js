import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

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
    return (
        <div>
            <h3>{strLeague}</h3>
            <h3>{strSport}</h3>
            <img src={logo} alt=""/>
            <button onClick= {() => history.push(`/leagues/${idLeague}`)}>Explore </button>
        </div>
    );
};

export default LeagueCard;