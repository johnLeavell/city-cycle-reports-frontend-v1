import React from 'react';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import Typography from '@material-ui/core/Typography';
// import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ReportCard from './ReportCard'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function ReportsContainer(props) {
  const classes = useStyles();
  console.log(props);
  
  const renderReportCards= () => {
    return props.reports.map(report => {
        return (
            <Grid item xs={3}>
                <ReportCard {...props} report={report} key={report.id} handleEditReport={props.handleEditReport} handleDeleteReport={props.handleDeleteReport} renderButtons={props.renderButtons} />
            </Grid>
        )
     })
    }

    // console.log(props);

    return (
      
        <div className={classes.root}>
            <Grid container spacing={3}>
               {renderReportCards()}
            </Grid>
        </div>
    );
}
