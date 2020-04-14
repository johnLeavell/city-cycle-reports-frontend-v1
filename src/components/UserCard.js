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
      maxWidth: 1000,
    },
    media: {
      height: 100,
    },
  });

const UserCard = (props) =>{
    const classes = useStyles();

    const tools = props.user
//  console.log( props.user.reports[0]);

console.log(tools.reports)
// debugger

// const newTools = tools.map(tool => {
//    return console.log(tool);
    
// })

// console.log(newTools);


// props.user.reports.map(report => {
//     return (report.img_src)
// })

// props.user.reports.map(report => {
//     return (report.title);
//     })

// props.user.reports.map(report => {
    // return (report.content);
    // })
    return (
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={"props.user"}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h5">
              {""}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
              {''}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Edit Report
            </Button>
            <Button size="small" color="primary">
              Delete Report
            </Button>
          </CardActions>
        </Card>
    );
}
    

export default UserCard
    
//     return (
//       <Card className={classes.root}>
//         <CardActionArea>
//           <CardMedia
//             classname={classes.media}
//             component="img"
//             alt={props.username}
//             height="180"

//             image={props.user.reports.map(report => {
//                 return (report.img_src)
//             })}
//             title={props.user.reports.map(report => {
//                 return (report.title);
//                 })}
//             // {this.sports()}
//           />
//           <CardContent>
//             <Typography 
//             gutterBottom variant="h5"
//             component="h2">
//             {props.user.username}
//             </Typography>
//             <Typography variant="body2" 
//             color="textSecondary" 
//             component="p">
//             {props.content}
//             </Typography>
//           </CardContent>
//         </CardActionArea>
            
//       </Card>
//     );
//   }







