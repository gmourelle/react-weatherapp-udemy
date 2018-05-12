import React from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import './styles.css';

const renderItemsDays = (forecastData)=>{
     
    return forecastData.map(forecast => (
         <ForecastItem 
             key={`${forecast.weekDay}${forecast.hour}`}
             weekDay={forecast.weekDay} hour={forecast.hour}
             data={forecast.data}>
         </ForecastItem>));
 }

 const renderProgress = () =>{
     return "Cargando ForecastExtended";
 }

const ForecastExtended =({city,forecastData})=>(  
        
    <div>
            <h2 className="forecast-title">Pronóstico Extendido para {city}</h2>
            {forecastData ?
                    renderItemsDays(forecastData):
                    renderProgress()
            }
    </div>
)


ForecastExtended.propTypes = 
{
    city: PropTypes.string.isRequired,
    forecastData: PropTypes.array,
}


export default ForecastExtended