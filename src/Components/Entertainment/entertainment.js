import React, { Component } from 'react';
import axios from 'axios';
import '../../images/card.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';

class Entertainment extends Component {
    state = {
        entertainments: []

    }
    componentDidMount() {
        axios.get('http://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=8ff2ae800a4546cfb37844c719615734')
            .then(res => {
                console.log(res);
                this.setState({
                    entertainments: res.data.articles
                })
            })
    }
    render() {
        console.log(this.state.entertainments)
        return (<div>
            <div className="row">
                {this.state.entertainments.map(ent => {
                    return (
                        <div className="col-sm-3" id="cat-card" >
                            <Card style={{ width: '18rem' }} >
                                <a href={ent.url} target="_blank" className="a">
                                    <Card.Img variant="top" src={ent.urlToImage} />
                                    <Card.Body>
                                        <Card.Title>{ent.title}</Card.Title>
                                        <Card.Text>
                                            {ent.description}
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
export default Entertainment;