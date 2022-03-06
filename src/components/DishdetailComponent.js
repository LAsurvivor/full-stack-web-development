import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
    constructor(props) {
        super(props);
    }

    renderDish(dish) {
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }

    renderComment(dish) {
        if (dish != null){
            const commentList = dish.comments.map((comment) => {
                return (
                    <li>
                        <p>{comment.comment}</p>
                        <p>-- {comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                    </li>
                );
            });

            return (
                <div>
                    <h2>Comments</h2>
                    <ul className="list-unstyled">
                        { commentList }
                    </ul>
                </div>
            );
        }
        else
            return (
                <div></div>
            );
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        { this.renderDish(this.props.dish) }
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        { this.renderComment(this.props.dish) }
                    </div>
                </div>
            </div> 
        );
    }
}

export default DishDetail;