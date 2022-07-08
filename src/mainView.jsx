import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const simpleView = ({ apiData }) => apiData && apiData((el, i) => 
      <Card key={i} sx={{ maxWidth: 285}} style={{margin: 8}} raised>
        <CardContent>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Nombre: {el.name}
          </Typography>
          <Typography variant="body2">
            Image: {el.image}
          </Typography>
        </CardContent>
        </Card>
      )

export default simpleView;