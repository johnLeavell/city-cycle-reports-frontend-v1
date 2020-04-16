import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function ReportCard(props) {
  const classes = useStyles();

  // console.log(props);
  
  const renderCardActions = () => {
    if(props.renderButtons) {
      return (
        <CardActions>
        <Button onClick={(e) => props.handleEditReport(e, props.report)} size="small" color="primary">
          Edit
        </Button>
        <Button onClick={(e) => props.handleDeleteReport(e, props.report)} size="small" color="primary">
          Delete Report
        </Button>
      </CardActions>
      )
    }
  }


  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.report.img_src || 'https://www.berkeleyside.com/wp-content/uploads/2019/09/Gilman-bike-crash-02.jpg'} 
          title="City Reports"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.report.title.substring(0, 20) + "..." }
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           {props.report.content.substring(0, 180) + "..."}
          </Typography>
        </CardContent>
      </CardActionArea>
        {renderCardActions()}
    </Card>
  );
}

