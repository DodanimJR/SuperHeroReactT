import React from 'react';

const SimpleView = (apidata) => {
    //console.log("apidata:",apidata.data);
    try {
        const finaldata = apidata.data;

        const response = <div className='superHeroFullInfo'>
            <div className='superHeroMainInfo'>
                <h1>{finaldata.name}</h1>
                <img src={finaldata.image.url} alt="" />
                <h2>{finaldata.slug}</h2>
                <div className='superHeroWorks'>
                    <h3>{finaldata.work.base}</h3>
                    <h3>{finaldata.work.occupation}</h3>
                    <h3>Connections:</h3>
                    <h4>Relatives:{finaldata.connections.relatives!==null &&finaldata.connections.relatives}</h4>
                    <h4>{finaldata.connections["group-affiliation"]!==null &&finaldata.connections["group-affiliation"]}</h4>
                </div>
            </div>
            <div className='powerStats'>
                <h3>Intelligence:{finaldata.powerstats.intelligence!==null && finaldata.powerstats.intelligence}</h3>
                <h3>Strength:{finaldata.powerstats.strength!==null &&finaldata.powerstats.strength}</h3>
                <h3>Speed:{finaldata.powerstats.speed!==null &&finaldata.powerstats.speed}</h3>
                <h3>Durability:{finaldata.powerstats.durability!==null &&finaldata.powerstats.durability}</h3>
                <h3>Power:{finaldata.powerstats.power!==null &&finaldata.powerstats.power}</h3>
                <h3>Combat:{finaldata.powerstats.combat!==null &&finaldata.powerstats.combat}</h3>
            </div>
            <div className='appearance'>
                <p>{finaldata.appearance.gender}</p>
                <p>{finaldata.appearance.race}</p>
                <p>{finaldata.appearance["eye-color"]}</p>
                <p>{finaldata.appearance["hair-color"]}</p>
                <p>{finaldata.appearance.height}</p>
                <p>{finaldata.appearance.weight}</p>
            </div>
            <div className='biography'>
                <p>Full name:{finaldata.biography["full-name"]}</p>
                <p>Alter egos:{finaldata.biography["alter-egos"]}</p>
                <p>Aliases:{finaldata.biography.aliases}</p>
                <p>Place of birth:{finaldata.biography["place-of-birth"]}</p>
                <p>First appearance:{finaldata.biography["first-appearance"]}</p>
                <p>Publisher: {finaldata.biography.publisher}</p>
                <p>Alignment:{finaldata.biography.alignment}</p>
            </div>
        </div>
        return (response);
    } catch (error) {
        return(<div>
            <h1>{error}</h1>
        </div>);
        
    }
}

export default SimpleView;
