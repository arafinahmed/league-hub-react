import React from 'react';
import { useParams } from 'react-router';

const LeagueDetails = () => {
    const {id} = useParams();
    return (
        <div>
            this is league details {id}
        </div>
    );
};

export default LeagueDetails;