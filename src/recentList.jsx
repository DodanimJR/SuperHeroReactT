import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

// const RecentList = ({list},{funcion}) => {
//   console.log("Lista que entra:",list);
//   console.log("largoLista:",list.length);
//   //for(x of list)
//   //let response= React.createElement("div",{className:"card-container"});
//   for(const x of list){
//     console.log("xFINSA:",x);
    
//   }
//   const response= list.map((lista)=>{
//     console.log("listaelemento:",lista);
//     <div>
//       <Card>
//         <CardContent>
//           <Typography variant="h5" component="h2">
//             {lista.name}
//           </Typography>
//         </CardContent>
//         <CardActions>
//           <Button size="small" color="primary" onClick={funcion}>View</Button>
//         </CardActions>
//       </Card>
//     </div>
//   })
//   console.log("response:",response);
  // const response=list.map((el, i) =>     
  // <Card key={i} sx={{ maxWidth: 285}} style={{margin: 8}} raised>
  //       <CardContent>
  //         <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
  //           {el.name}
  //         </Typography>
  //         <Typography sx={{ mb: 1.5 }} color="text.secondary">
  //           Full Name: {el.biography['full-name']}
  //         </Typography>
  //         <Typography variant="body2">
  //           Publsher: {el.biography.publisher}
  //         </Typography>
  //       </CardContent>
  //       <CardActions>
  //       <Button size="small" color="primary" onClick={funcion}>
  //         view
  //       </Button>
  //       </CardActions>
  //       </Card>
//   //   );
  
//   return(response);

// }
const RecentList = (props)=>{

  const clickHandler=(id)=>{
    props.setclickedIndex(id);
    console.log("elementoID CLICKEADO",props.clickedIndex);

    
  }
  console.log("Lista que entra:",props.list);
  return(
    props.list && props.list.map((el, i) => 

      <Card key={i} sx={{ maxWidth: 285}} style={{margin: 8}} raised>
        
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {el.name}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Full Name: {el.biography['full-name']}
          </Typography>
          <Typography variant="body2">
            Publsher: {el.biography.publisher}
          </Typography>
          <Typography>{el.listIndex}</Typography>
        </CardContent>
        <CardActions>
        <Button size="small" color="primary" onClick={()=>clickHandler(el.listIndex)} >
          view
        </Button>
        </CardActions>
        
        </Card>
        
    
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