import React, { Component } from 'react';
import axios from 'axios';
import '../../images/card.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';

class Home extends Component {
    state = {
        latest: []

    }
    componentDidMount() {
        axios.get('http://newsapi.org/v2/top-headlines?country=us&apiKey=8ff2ae800a4546cfb37844c719615734')
            .then(res => {
                console.log(res);
                this.setState({
                    latest: res.data.articles
                })
            })
    }
    render() {
        console.log(this.state.latest)
        return (<div>
            <div className="row">
                {this.state.latest.map(lst => {
                    return (
                        <div className="col-sm-3" id="cat-card" >
                            <Card style={{ width: '18rem' }} >
                                <a href={lst.url} target="_blank" className="a">
                                    <Card.Img variant="top" src={lst.urlToImage} />
                                    <Card.Body>
                                        <Card.Title>{lst.title}</Card.Title>
                                        <Card.Text>
                                            {lst.description}
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
export default Home;