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

const RulesPage = () => {
    const { paper } = useStyles();
    return (
        <div>
            <Paper className={paper} variant='outlined' elevation={0}>
                <br></br>
                <Typography variant="h4" gutterBottom>
                    <strong>Rules & Regulations For The Chess Tournament</strong>
                </Typography>
                <Typography variant="h4" gutterBottom>
                    Overview
                </Typography>
                <Typography variant="p" gutterBottom>
                The tournament will take place virtually over lichess.org and a zoom call where the players will be overseen. The tournament will be a bracket style tournament where the teams will be facing in a knockout system. On assigned days, each team will face another team in the tournament. The teams will be attempting to earn the most points against the opposing team. In doing so, the team with less points when time runs out will be eliminated from the tournament and the victorious team will move on to the next round of the brackets. Points are earned by winning games, winning multiple games in a row will increase your points earned per victory. Final point tally will be the sum of every team member's points. Berserk mode will be enabled. To learn more about the specifics, please see our documentation “Documentation - 4: Game Specifics”. The team that wins the final bracket will be deemed the winner of the tournament. The brackets will be made based on the number of teams participating in the tournament, so exact scheduling depends on how many teams sign up.
                </Typography>
                <Typography variant="h4" gutterBottom>
                    <br></br>
                    Teams
                </Typography>
                <Typography variant="p" gutterBottom>
                All teams must be under a TDSB high school. Each school can have a maximum of two teams, an A team and a B team. The teams must consist of 5 players each and 1 substitute will be allowed per team and every player must be on only one team. The substitute must also be registered alongside the team when registering. Substitutes will only play if one of the other team members is not able to make the tournament, otherwise they aren’t participating in the tournament. We recommend creating a chess club and holding virtual tournaments at the school to decide who will be representing the school as part of their team. For more information on our recommendations, check out our documentation “Documentation - 3: Tournament Prep.” Every team also requires a teacher advisor to make sure that the teams are abiding by the rules. 
                </Typography>
                <Typography variant="h4" gutterBottom>
                    <br></br>
                    Chess Matches
                </Typography>
                <Typography variant="p" gutterBottom>
                All players will be playing a 10+0 rapid chess, up until the semi finals. Each player will be playing their own individual games with no outside assistance. The players will be playing a standard variation of chess where they will be assigned white or black at random. Lichess.org will be keeping time and tracking all the moves made by both players. Each team will be playing against each other for one hour and whichever team earns the most points by the end will be deemed victorious and move onto the next tournament. The other team will be eliminated. 
                <br></br><br></br>For the semi finals and finals, two day tournaments will be held. Each day of the semi finals and finals will be one hour and half and the chess matches will be 15+10 rapid. The team which accumulated the most points over the course of the two days will move onto the next round and opposition will be eliminated.
                </Typography>
                <Typography variant="h4" gutterBottom>
                    <br></br>
                    Requirements
                </Typography>
                <Typography variant="p" gutterBottom>
                The teams must be under a TDSB highschool. All players must be attending the school full time including the substitute. Every player competing in the tournament must have a Lichess account, and must submit both their lichess username and real name and student number when they register their team for the tournament. 
                <br></br><br></br>All schools will have until Friday, April 9th, 2021 to register their teams and players in the google form. All teams and players will be emailed out dates and times of their matches.
                </Typography>
                <Typography variant="h4" gutterBottom>
                    <br></br>
                    Prizes
                </Typography>
                <Typography variant="p" gutterBottom>
                    Undecided
                </Typography>
                <Typography variant="h4" gutterBottom>
                    <br></br>
                    Special Cases
                </Typography>
                <Typography variant="p" gutterBottom>
                    Tiebreaker Scenarios:
                    <br></br>All tie breakers will be decided by one more match between two elected players from each team. Whoever wins the chess game, their team will move on to the next round and the other team will be eliminated. This doesn’t relate to a draw between players but rather the teams accumulating the same number of points by the end of the given time.
                    <br></br><br></br>
                    Joining Late:
                    <br></br>
                    The team will be permitted 5 mins after the official start time of the match to join. If unable to make it in that time, the team will be disqualified from the tournament unless they’ve provided legitimate reasoning for their absence. 	
                </Typography>
                <Typography variant="h4" gutterBottom>
                    <br></br>
                    Rules
                </Typography>
                <Typography variant="p" gutterBottom>
                Use of assistance in the form of chess engines, chess databases, chess books, another person or any other form of assistance is prohibited, anyone receiving assistance during the tournament will be disqualified. 
                <br></br><br></br>
                Be respectful and civil towards everyone in the tournament. This includes everyone, from your opponents to your teammates. No verbal or physical harassment. Breaking of this rule can result in disqualification.
                <br></br><br></br>
                Act as you would if you were at school or at an OTB tournament.
                <br></br><br></br>
                Losing intentionally or throwing games is not permitted, play as best you can.
                <br></br><br></br>
                Any violation of these rules may result in disqualification of individual players or teams, at the discretion of the TCC organizers.
                </Typography>
            </Paper>
        </div>
    );
}

export default RulesPage;