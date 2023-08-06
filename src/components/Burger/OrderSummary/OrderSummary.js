import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';
import '../../UI/Button/Button.css';

class OrderSummary extends Component {
    
    componentDidUpdate() {
        console.log('Order summary will update')
    }

    render() {

        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(igKey => {
            return (
             <li key={igKey}>
                <span style={{textTransform: 'capitalize'}}>
                    {igKey}
                </span>: {this.props.ingredients[igKey]}
             </li>);
        });

        return (
            <Aux>
                <h3>Your order:</h3>
                <p>Delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
                <p>Continue to checkout?</p>
                <Button className="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
                <Button className="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </Aux>
        );
    }
}

export default OrderSummary;