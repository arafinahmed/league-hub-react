import React from 'react';
import './LeagueNotFound.css';
const LeagueNotFound = ({id}) => {
    
    return (
        <div className="league-not-found d-flex align-items-center justify-content-center">

            <h1 className="text-danger">No League found for the id {id}</h1>
            
        </div>
    );
};

export default LeagueNotFound;