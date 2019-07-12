import React, {} from 'react';
import { Card, Button } from 'semantic-ui-react'

const Characters = (props) => {
    return ( 
        <div>
            {props.character.map(person => 
            <div className="character">
                <Card centered>
                     <Card.Content>
                        <Card.Header>{person.name}</Card.Header>
                        <Card.Meta>Birth Year: {person.birth_year}</Card.Meta>
                        <Card.Description>
                        Steve wants to add you to the group <strong>best friends</strong>
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div className='ui two buttons'>
                        <Button basic color='green'>
                            Approve
                        </Button>
                        <Button basic color='red'>
                            Decline
                        </Button>
                        </div>
                    </Card.Content>
                </Card>
            </div>
                )}
        </div>
     );
}
 
export default Characters;