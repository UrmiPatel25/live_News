import React, { Component } from 'react';
import axios from 'axios';
import '../../images/card.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';

class Sport extends Component {
    state = {
        sports: []

    }
    componentDidMount() {
        axios.get('http://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=8ff2ae800a4546cfb37844c719615734')
            .then(res => {
                console.log(res);
                this.setState({
                    sports: res.data.articles
                })
            })
    }
    render() {
        console.log(this.state.sports)
        return (<div>
            <div className="row">
                {this.state.sports.map(sprt => {
                    return (
                        <div className="col-sm-3" id="cat-card" >
                            <Card style={{ width: '18rem' }} >
                                <a href={sprt.url} target="_blank"  className="a">
                                    <Card.Img variant="top" src={sprt.urlToImage} />
                                    <Card.Body>
                                        <Card.Title>{sprt.title}</Card.Title>
                                        <Card.Text>
                                            {sprt.description}
                                        </Card.Text>
                                    </Card.Body>
                                </a>
                            </Card>
                        </div>
                    )
                })
                }
            </div>

        </div>
        )
    }
}
export default Sport;