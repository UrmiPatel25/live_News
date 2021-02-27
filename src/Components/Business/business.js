import React, { Component } from 'react';
import axios from 'axios';
import '../../images/card.css';
import {Card} from 'react-bootstrap';

class Business extends Component{
    state = {
        business: []
        
    }
    componentDidMount() {
        axios.get('http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=8ff2ae800a4546cfb37844c719615734')
            .then(res => {
                console.log(res);
                this.setState({
                business: res.data.articles
            })
        })
    }
    render() {
        console.log(this.state.business)
        return (<div>
            <div className="row">  
                {this.state.business.map(bsns => {
                return (
                       <div className="col-sm-3" id="cat-card" >
                        <Card style={{ width: '18rem' }} >
                            <a href={bsns.url} target="_blank" className="a">
                                <Card.Img variant="top" src={bsns.urlToImage} />
                                        <Card.Body>
                                            <Card.Title>{bsns.title}</Card.Title>
                                            <Card.Text>
                                                {bsns.description}
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
export default Business;