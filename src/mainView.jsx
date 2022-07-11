import React from 'react';

const SimpleView = (apidata) => {
    //console.log("apidata:",apidata.data);
    try {
        const finaldata = apidata.data;

        const response = <div className='superHeroFullInfo'>
            <div className='heroImg'>
                    <img src={finaldata.image.url} alt="" className='ImagenHeroe' />
                </div>
            <div className='superHeroMainInfo'>
                <h1>{finaldata.name}</h1>
                <h2>{finaldata.slug}</h2>
                <div className='leftRightInfoCombined'>
                    <div className='leftInfo'>
                        <div className='biography'>
                            <h3>Biography</h3>
                            <h4>Full name:{finaldata.biography["full-name"]}</h4>
                            <h4>Alter egos:{finaldata.biography["alter-egos"]}</h4>
                            <h4>Aliases:{finaldata.biography.aliases}</h4>
                            <h4>Place of birth:{finaldata.biography["place-of-birth"]}</h4>
                            <h4>First appearance:{finaldata.biography["first-appearance"]}</h4>
                            <h4>Publisher: {finaldata.biography.publisher}</h4>
                            <h4>Alignment:{finaldata.biography.alignment}</h4>
                        </div>
                        <div className='superHeroWorks'>
                            <h3>Works</h3>
                            <h4>{finaldata.work.base}</h4>
                            <h4>{finaldata.work.occupation}</h4>
                            <h3>Connections:</h3>
                            <h4>Relatives:{finaldata.connections.relatives!==null &&finaldata.connections.relatives}</h4>
                            <h4>Groups:{finaldata.connections["group-affiliation"]!==null &&finaldata.connections["group-affiliation"]}</h4>
                        </div>
                    </div>
                    <div className='rightInfo'>
                        <div className='appearance'>
                            <h3>Appearance</h3>
                            <h4>Gender:{finaldata.appearance.gender}</h4>
                            <h4>Race:{finaldata.appearance.race}</h4>
                            <h4>Eye color:{finaldata.appearance["eye-color"]}</h4>
                            <h4>Hair color:{finaldata.appearance["hair-color"]}</h4>
                            <h4>Height:{finaldata.appearance.height[0]-finaldata.appearance.height[1]}</h4>
                            <h4>Weitht:{finaldata.appearance.weight[0]-finaldata.appearance.weight[1]}</h4>
                        </div>
                        <div className='powerStats'>
                            <h3>Power Stats</h3>
                            <h4>Intelligence:{finaldata.powerstats.intelligence!==null && finaldata.powerstats.intelligence}</h4>
                            <h4>Strength:{finaldata.powerstats.strength!==null &&finaldata.powerstats.strength}</h4>
                            <h4>Speed:{finaldata.powerstats.speed!==null &&finaldata.powerstats.speed}</h4>
                            <h4>Durability:{finaldata.powerstats.durability!==null &&finaldata.powerstats.durability}</h4>
                            <h4>Power:{finaldata.powerstats.power!==null &&finaldata.powerstats.power}</h4>
                            <h4>Combat:{finaldata.powerstats.combat!==null &&finaldata.powerstats.combat}</h4>
                        </div>
                    </div>
                </div>
                
            </div>
            
            
            
        </div>
        return (response);
    } catch (error) {
        return(<div>
            <h1>Error ocurred, please reload page</h1>
        </div>);
        
    }
}

export default SimpleView;
