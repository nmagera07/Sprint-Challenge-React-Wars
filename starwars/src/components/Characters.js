import React, {} from 'react';

const Characters = (props) => {
    return ( 
        <div>
            {props.character.map(person => 
            <div className="character">
                <p>{person.name}</p>
                <p>{person.height}</p>
                <p>{person.mass}</p>
                <p>{person.hair_color}</p>
                <p>{person.skin_color}</p>
            </div>
                )}
        </div>
     );
}
 
export default Characters;