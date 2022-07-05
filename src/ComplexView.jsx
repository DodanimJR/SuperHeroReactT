import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import './ComplexView.css'

const ComplexView = (props) => {
  return(
      props.apiData && props.apiData.map((el, i) => 
      <Accordion key={i}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
        >
          {/* deberia ser component :) */}
          <Typography>{el.symbol}  •  {el.openPrice < el.askPrice ? <span style={{color: 'green'}}>↑ {el.priceChangePercent}%</span> : <span style={{color: 'red'}}>↓ {el.priceChangePercent}%</span>}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant='h5'>Datos - Ultimas 24h</Typography>
          <div className="cardGrid">
            <div>
              <Typography>Precio mas alto: <span style={{fontWeight: '800'}}>{el.highPrice}</span></Typography>
              <Typography>Precio mas bajo: <span style={{fontWeight: '800'}}>{el.lowPrice}</span></Typography>
            </div>
            <div>
              <Typography>Volumen: <span style={{fontWeight: '800'}}>{el.volume}</span></Typography>
              <Typography>Precio apertura: <span style={{fontWeight: '800'}}>{el.openPrice}</span></Typography>
            </div>

            <div>
              {
                el.openPrice < el.askPrice ? <span className="cardEmoji">🚀</span> : <span className="cardEmoji">👩‍🚒</span>
              }
            </div>
          </div>
        </AccordionDetails>
      </Accordion>)
  )
  }
export default ComplexView;