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

const InvalidPage = () => {
    const { paper } = useStyles();
    return (
        <div>
            <Paper className={paper} variant='outlined' elevation={0}>
                <Typography variant="h4" gutterBottom>
                    <strong>This page could not be found!</strong>
                </Typography>
                <Typography variant="h3" gutterBottom>
                    <strong>The page you requested could not be found. Please make sure you have typed the correct URL.</strong>
                </Typography>
            </Paper>
        </div>
    );
}

export default InvalidPage;