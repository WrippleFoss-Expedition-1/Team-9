import { Image, Grid, Row, Col, Button } from 'react-bootstrap';
import React from 'react';

function Clinics() {
    return <Grid>
        <Row>
            <Col xs={4} md={3}>
                <Image src="images\physician.jpg" circle thumbnail responsive />
                <Button bsStyle="info" bsSize="small" block>
                    Physician
          </Button>
            </Col>
            <Col xs={4} md={3}>
                <Image src="images\ent.jpg" circle thumbnail responsive />
                <Button bsStyle="info" bsSize="small" block>
                    ENT
          </Button>
            </Col>
            <Col xs={4} md={3}>
                <Image src="images\dental.png" circle thumbnail responsive />
                <Button bsStyle="info" bsSize="small" block>
                    Dental
          </Button>
            </Col>
            <Col xs={4} md={3}>
                <Image src="images\Knowmore.png" circle thumbnail responsive />
                <Button bsStyle="info" bsSize="small" block>
                    Know more
          </Button>
            </Col>
        </Row>
    </Grid>;
}

export default Clinics;