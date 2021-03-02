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


const HomePage = () => {
    const { paper } = useStyles();
    return (
        <div>
            <Paper className={paper} variant='outlined' elevation={0}>
                <Typography variant="h2" gutterBottom>
                    h2. heading
                </Typography>
                <Typography variant="h3" gutterBottom>
                    h3. heading
                </Typography>
                <Typography variant="h4" gutterBottom>
                    h4. heading
                </Typography>
                <Typography variant="h5" gutterBottom>
                    h5. heading
                </Typography>
                <Typography variant="h6" gutterBottom>
                    h6. heading
                </Typography>
                <Typography variant="p" gutterBottom>
                    paragraph: Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                </Typography>
            </Paper>
        </div>
    );
}

export default HomePage;