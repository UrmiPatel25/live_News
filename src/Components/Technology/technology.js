import React, { Component } from 'react';
import axios from 'axios';
import '../../images/card.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';

class Technology extends Component {
    state = {
        techlonogies: []

    }
    componentDidMount() {
        axios.get('http://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=8ff2ae800a4546cfb37844c719615734')
            .then(res => {
                console.log(res);
                this.setState({
                    techlonogies: res.data.articles
                })
            })
    }
    render() {
        console.log(this.state.techlonogies)
        return (<div>
            <div className="row">
                {this.state.techlonogies.map(tech => {
                    return (
                        <div className="col-sm-3" id="cat-card" >
                            <Card style={{ width: '18rem' }}>
                                <a href={tech.url} target="_blank" className="a">
                                    <Card.Img variant="top" src={tech.urlToImage} />
                                    <Card.Body>
                                        <Card.Title>{tech.title}</Card.Title>
                                        <Card.Text>
                                            {tech.description}
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
export default Technology;