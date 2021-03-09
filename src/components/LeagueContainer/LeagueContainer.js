import React, { useEffect, useState } from 'react';
import LeagueCard from '../LeagueCard/LeagueCard';
import './LeagueContainer.css'

const LeagueContainer = () => {
    const [leagues, setLeagues] = useState([]);
    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/all_leagues.php')
        .then(res => res.json())
        .then(data => {
            const slicedData = data.leagues.slice(0,20);
            setLeagues(slicedData);
        })
    }, []);
    return (
        <div className="leaguesContainer container">
            
            {
                leagues.map(league => <LeagueCard league={league} key={league.idLeague}></LeagueCard>)
            }
        </div>
    );
};

export default LeagueContainer;