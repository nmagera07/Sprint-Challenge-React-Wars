import React, {} from 'react';
import { Card, Button, Modal, Icon } from 'semantic-ui-react'

const Characters = (props) => {
    return ( 
        <div className="character">
            {props.character.map(person => 
            <div className="card">
                <Card centered >
                     <Card.Content>
                        <Card.Header>{person.name} <Icon name='space shuttle'/></Card.Header>
                        <Modal trigger={<Button>Click for more info</Button>}>
                            <Modal.Header>{person.name}</Modal.Header>
                            <Modal.Content >
                            <Modal.Description>
                                <p>Birth Year: {person.birth_year}</p>
                                <p>Gender: {person.gender}</p>
                                <p>Height: {person.height}</p>
                                <p>Mass: {person.mass}</p>
                                <p>Eye Color: {person.eye_color}</p>
                            </Modal.Description>
                            </Modal.Content>
                        </Modal>
                        </Card.Content>
                </Card>
            </div>
                )}
        </div>
     );
}
 
export default Characters;