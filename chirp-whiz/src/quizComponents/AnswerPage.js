import React from 'react';
import AudioButton from './AudioButton';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';

function AnswerPage(props) {
    return (
        <div>
            {props.answerType == "correct" ? (
                <h2 style={{color: 'green'}}><strong>Correct!</strong></h2>
            ) : (
                <h2 style={{color: 'red'}}><strong>Incorrect...</strong></h2>
            )}
            <Card>
                <Card.Header as="h2">
                    {props.bird.name}
                </Card.Header>
                <Card.Body>
                <Image src={props.bird.image[props.birdImage]} rounded style={{height: '200px'}} />
                    <AudioButton sound={props.bird.sound} />
                </Card.Body>
            </Card>
        </div>
    );
}

export default AnswerPage;
