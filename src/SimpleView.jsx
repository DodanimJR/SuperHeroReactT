import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const SimpleView = ({ apiData }) => apiData && apiData.map((el, i) => 
      <Card key={i} sx={{ maxWidth: 285}} style={{margin: 8}} raised>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {el.priceChangePercent}
          </Typography>
          <Typography variant="h5" component="div">
            {el.symbol}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Precio: {el.askPrice}
          </Typography>
          <Typography variant="body2">
            Volumen: {el.volume}
          </Typography>
        </CardContent>
        </Card>
      )
export default SimpleView;