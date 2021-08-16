import React, { Component , useState} from 'react';
import ReactDOM from "react-dom";
import 'react-calendar/dist/Calendar.css';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { CardText, CardBody, CardLink, CardTitle, CardSubtitle, CardGroup} from 'reactstrap';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import "react-datepicker/dist/react-datepicker.css";
import {Grid} from '@material-ui/core/'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

 
  function AdminHome() {

    
  
    const [on1, setOn1] = useState(1);
    const [on2, setOn2] = useState(1);
    const [on3, setOn3] = useState(1);
    const [on4, setOn4] = useState(1);
    const [on5, setOn5] = useState(1);
    const [on6, setOn6] = useState(1);
    const [on7, setOn7] = useState(1);
    const [on8, setOn8] = useState(1);
    const [on9, setOn9] = useState(1);
    const [on10, setOn10] = useState(1);
    const [on11, setOn11] = useState(1);
    const [on12, setOn12] = useState(1);

  
    const enable1 = () =>{ setOn1(1);
      axios.put('http://localhost:8080/updateFloorAvailability', { 
        params:{
          userId:1234,
          floorId:1,
          buildingId:1,
          availability:on1
        }
      })
    }
    const disable1 = () => setOn1(0);
    const enable2 = () => setOn2(1);
    const disable2 = () => setOn2(0);
    const enable3 = () => setOn3(1);
    const disable3 = () => setOn3(0);
    const enable4 = () => setOn4(1);
    const disable4 = () => setOn4(0);
    const enable5 = () => setOn5(1);
    const disable5 = () => setOn5(0);
    const enable6 = () => setOn6(1);
    const disable6 = () => setOn6(0);
    const enable7 = () => setOn7(1);
    const disable7 = () => setOn7(0);
    const enable8 = () => setOn8(1);
    const disable8 = () => setOn8(0);
    const enable9 = () => setOn9(1);
    const disable9 = () => setOn9(0);
    const enable10 = () => setOn10(1);
    const disable10 = () => setOn10(0);
    const enable11 = () => setOn11(1);
    const disable11 = () => setOn11(0);
    const enable12 = () => setOn12(1);
    const disable12 = () => setOn12(0);
  const classes = useStyles();
 
  
  return (
    <div class="container">
       
    <CardGroup>
      <div class="row">

      <div class="col s4">

      <Card buildingid="1" className={classes.root} variant="outlined" style={{width:"40%"}}>
        <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Building 1
        </Typography>

        <Typography variant="body2" component="p" floorid="1">Floor 1</Typography>
        <Typography>{on1}</Typography>
        <CardActions>
        <Button onClick={enable1}>Enable</Button>
        <Button onClick={disable1}>Disable</Button>
        </CardActions>

        <Typography variant="body2" component="p" floorid="2">Floor 2</Typography>
        <Typography>{on2}</Typography>
        <CardActions>
        <Button onClick={enable2}>Enable</Button>
        <Button onClick={disable2}>Disable</Button>
        </CardActions>

        <Typography variant="body2" component="p" floorid="3">Floor 3</Typography>
        <Typography>{on3}</Typography>
        <CardActions>
        <Button onClick={enable3}>Enable</Button>
        <Button onClick={disable3}>Disable</Button>
        </CardActions>

        <Typography variant="body2" component="p" floorid="4">Floor 4</Typography>
        <Typography>{on4}</Typography>
        <CardActions>
        <Button onClick={enable4}>Enable</Button>
        <Button onClick={disable4}>Disable</Button>
        </CardActions>

        </CardContent>
     
    </Card>
    </div>

    <div class="col s4">
    <Card buildingid="2" className={classes.root} variant="outlined" style={{width:"40%"}}>
        <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Building 2
        </Typography>
        
        <Typography variant="body2" component="p" floorid="1">Floor 1</Typography>
        <Typography>{on5}</Typography>
        <CardActions>
        <Button onClick={enable5}>Enable</Button>
        <Button onClick={disable5}>Disable</Button>
        </CardActions>

        <Typography variant="body2" component="p" floorid="2">Floor 2</Typography>
        <Typography>{on6}</Typography>
        <CardActions>
        <Button onClick={enable6}>Enable</Button>
        <Button onClick={disable6}>Disable</Button>
        </CardActions>

        <Typography variant="body2" component="p" floorid="3">Floor 3</Typography>
        <Typography>{on7}</Typography>
        <CardActions>
        <Button onClick={enable7}>Enable</Button>
        <Button onClick={disable7}>Disable</Button>
        </CardActions>

        <Typography variant="body2" component="p" floorid="4">Floor 4</Typography>
        <Typography>{on8}</Typography>
        <CardActions>
        <Button onClick={enable8}>Enable</Button>
        <Button onClick={disable8}>Disable</Button>
        </CardActions>

        </CardContent>
     
    </Card>
    </div>
    <div class="col s4">

    <Card buildingid="3" className={classes.root} variant="outlined" style={{width:"40%"}}>
        <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Building 3
        </Typography>

        <Typography variant="body2" component="p" floorid="1">Floor 1</Typography>
        <Typography>{on9}</Typography>
        <CardActions>
        <Button onClick={enable9}>Enable</Button>
        <Button onClick={disable9}>Disable</Button>
        </CardActions>

        <Typography variant="body2" component="p" floorid="2">Floor 2</Typography>
        <Typography>{on10}</Typography>
        <CardActions>
        <Button onClick={enable10}>Enable</Button>
        <Button onClick={disable10}>Disable</Button>
        </CardActions>

        <Typography variant="body2" component="p" floorid="3">Floor 3</Typography>
        <Typography>{on11}</Typography>
        <CardActions>
        <Button onClick={enable11}>Enable</Button>
        <Button onClick={disable11}>Disable</Button>
        </CardActions>

        <Typography variant="body2" component="p" floorid="4">Floor 4</Typography>
        <Typography>{on12}</Typography>
        <CardActions>
        <Button onClick={enable12}>Enable</Button>
        <Button onClick={disable12}>Disable</Button>
        </CardActions>

        </CardContent>
     
    </Card>
    </div>
    </div>
    </CardGroup>
    </div>
   );
}

export default AdminHome;