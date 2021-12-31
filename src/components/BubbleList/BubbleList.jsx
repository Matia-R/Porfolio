import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import "../../../node_modules/bootstrap/dist/css/bootstrap-grid.min.css"
import './BubbleList.css';

function BubbleList({ bubbleItems }) {
    
    return (
        <Container className="bubble-list-container">
            <Row xs={2} md={3} className="g-6">
                {
                    bubbleItems.map((item, index) => {
                        return (
                            <Col key={index} xs="auto" md="auto">
                                <div className="bubble">
                                    <h1 className="bubble-text">{item}</h1>
                                </div>
                            </Col>
                        )
                    })
                }
            </Row>
        </Container>
    )
    
};

export default BubbleList;