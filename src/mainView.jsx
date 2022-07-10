import React from 'react';

const SimpleView = ({ apidata }) => {
    return (
        <div>
        <h1>{apidata.name}</h1>
        <img src={apidata.image.url} alt=""/>
        <p>{apidata.description}</p>
        </div>
    );
}

export default SimpleView;
// {
//     "data": {
//       "response": "success",
//       "id": "50",
//       "name": "Atom",
//       "powerstats": "{combat: \"null\", durability: \"null\", intelligence: …}",
//       "biography": "{aliases: Array(2), alignment: \"good\", alter-egos: …}",
//       "appearance": "{eye-color: \"Blue\", gender: \"Male\", hair-color: \"Re…}",
//       "work": "{base: \"GBS Building, Gotham City (former) Calvin C…}",
//       "connections": "{group-affiliation: \"formerly Justice Society of Am…}",
//       "image": "{url: \"https://www.superherodb.com/pictures2/portra…}"
//     }
//   }