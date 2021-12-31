import React from 'react'
import { Container, Row, Col, Card} from 'react-bootstrap';
import "../../../node_modules/bootstrap/dist/css/bootstrap-grid.min.css"
import "./CardLayout.css"
//import Card from "./Card"

function CardLayout({ cardItems }) {
    
    return (
        <Container>
            <Row xs={1} md={2} className="g-4">
                {
                    cardItems.map((item, index) => {
                        return (
                            <Col key={index}>
                                <div className="card-container">
                                    <Card className="card">
                                        <Card.Img className="cardImg" variant="top" src={item.imgUrl} />
                                        <Card.Body>
                                        <Card.Title className="cardTitle">{item.title}</Card.Title>
                                        <Card.Text className="cardDescription">
                                            {item.description}
                                        </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Col>
                        )
                    })
                }
            </Row>
        </Container>
    )
    
};

export default CardLayout;