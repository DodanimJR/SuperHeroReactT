import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { makeStyles } from '@mui/material/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const useStyles = makeStyles({
  root: {
    marginRight: "4px",
    fontSize: "16px",
    letterSpacing: "2px",
    color: "#000000",
    border: "3px solid",
    padding: "0.25em 0.5em",
    boxShadow: "1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px, 5px 5px 0px 0px",
    position: "relative",
  }
});

const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#550a8a',
      darker: '#9e88ae',
    },
    neutral: {
      main: '#e7cffa',
      contrastText: '#fff',
    },
    text:{
      primary: "#000",
      secondary: "#000"
    }
    
  },
  typography:{
    fontFamily: [
      'Edu',
      'SA',
      'cursive',
    ].join(','),
  },
  card:{


  },
  
  
});
const RecentList = (props)=>{
  const classes = useStyles();

  const clickHandler=(id)=>{
    props.setclickedIndex(id);
    console.log("elementoID CLICKEADO",props.clickedIndex);

    
  }
  console.log("Lista que entra:",props.list);
  return(
    props.list && props.list.map((el, i) => 

      <ThemeProvider theme={theme}>
        <Card key={i} sx={{ maxWidth: 285}} style={{margin: 8}} theme={theme} className={classes.root} raised>
        
          <CardContent>
            <Typography variant='h4' sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              {el.name}
            </Typography>
            <Typography variant='h5' sx={{ mb: 1.5 }} color="text.secondary">
              Full Name: {el.biography['full-name']}
            </Typography>
            <Typography variant="body2">
              Publsher: {el.biography.publisher}
            </Typography>
          </CardContent>
          <CardActions>
          <Button size="small" color="primary" onClick={()=>clickHandler(el.name)} >
            view
          </Button>
          </CardActions>
        
        </Card>
      </ThemeProvider>
        
    
  )
  );
}

// const RecentList = ({ list },{handleClick}) => list && list.map((el, i) =>     
//   <Card key={i} sx={{ maxWidth: 285}} style={{margin: 8}} raised>
//         <CardContent>
//           <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
//             {el.name}
//           </Typography>
//           {/* <Typography variant="h5" component="div">
//             {el.symbol}
//           </Typography> */}
//           <Typography sx={{ mb: 1.5 }} color="text.secondary">
//             Full Name: {el.biography['full-name']}
//           </Typography>
//           <Typography variant="body2">
//             Publsher: {el.biography.publisher}
//           </Typography>
//         </CardContent>
//         <CardActions>
//         <Button size="small" color="primary" onClick={handleClick}>
//           view
//         </Button>
//         </CardActions>
//         </Card>
//     );


export default RecentList;