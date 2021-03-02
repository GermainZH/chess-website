import React from 'react';
import { Card, Paper, makeStyles } from '@material-ui/core';
import { Autorenew } from '@material-ui/icons';
import { Typography } from '@material-ui/core';
import { Divider } from '@material-ui/core';
import { spacing } from '@material-ui/system';

const useStyles = makeStyles(() => ({
    paper: {
        marginTop: '100px',
        marginBottom: '50px',
        margin: 'auto',
        width: '60%',
        padding: '40px',
    },
}));

const LeaderboardPage = () => {
    const { paper } = useStyles();
    return (
        <div>
            <Paper className={paper} variant='outlined' elevation={0}>
                <h2>Leaderboard -Coming Soon</h2>
                <h2>This section of our website is currently undergoing construction, come back soon!</h2>
            </Paper>
        </div>
    );
}

export default LeaderboardPage;