import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
// const RecentList = (list) => {
    // console.log(list);
const RecentList = ({ list }) => list && list.map((el, i) =>     
  <Card key={i} sx={{ maxWidth: 285}} style={{margin: 8}} raised>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {el.name}
          </Typography>
          {/* <Typography variant="h5" component="div">
            {el.symbol}
          </Typography> */}
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Full Name: {el.biography['full-name']}
          </Typography>
          <Typography variant="body2">
            Publsher: {el.biography.publisher}
          </Typography>
        </CardContent>
        <CardActions>
        <Button size="small" color="primary" className="btnView">
          view
        </Button>
        </CardActions>
        </Card>
    );
//}

export default RecentList;