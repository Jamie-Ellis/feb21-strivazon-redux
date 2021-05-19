import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import { withRouter } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { connect } from 'react-redux'
import { Component } from "react";
import { setUserNameAction } from '../actions'
// connect is going to connect our component to the Redux Store
// with connect our component is going to receive ADDITIONAL PROPS

const mapStateToProps = (state) => ({
  productsLength: state.cart.products.length,
  userName: state.user.firstName
})
// every property of this object is going to be assigned to the props of this component

// mapStateToProps is a function that returns an object

const mapDispatchToProps = (dispatch) => ({
  setUserName: (name) => {
    dispatch(setUserNameAction(name))
  }
})

class CartIndicator extends Component {

  state = {
    inputValue: ''
  }

  render() {
    return (
      <div className="ml-auto mt-2">
        {this.props.userName ?
          <>
            <span className="mr-2">Welcome {this.props.userName}!</span>
            <Button color="primary" onClick={() => this.props.history.push("/cart")}>
              <FaShoppingCart />
              <span className="ml-2">{this.props.productsLength}</span>
            </Button>
          </> :
          <FormControl
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
            value={this.state.inputValue}
            onChange={(e) => this.setState({ inputValue: e.currentTarget.value })}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                console.log('you just pressed enter')
                // now we're going to dispatch my action
                this.props.setUserName(this.state.inputValue)
              }
            }}
          />
        }
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CartIndicator));
// connect needs one or two parameters, depending on your component
// if your component is just going to READ from the state, you just need the first one (mapStateToProps)
// but if your component ALSO need to change to state, you will need the second parameter (mapDispatchToProps)