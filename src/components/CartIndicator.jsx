import Button from "react-bootstrap/Button";
import { withRouter } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { connect } from 'react-redux'
// connect is going to connect our component to the Redux Store
// with connect our component is going to receive ADDITIONAL PROPS

const mapStateToProps = (state) => ({
  productsLength: state.cart.products.length
})
// every property of this object is going to be assigned to the props of this component

// mapStateToProps is a function that returns an object

const CartIndicator = ({ history, productsLength }) => (
  <div className="ml-auto mt-2">
    <Button color="primary" onClick={() => history.push("/cart")}>
      <FaShoppingCart />
      <span className="ml-2">{productsLength}</span>
    </Button>
  </div>
);

export default connect(mapStateToProps)(withRouter(CartIndicator));
// connect needs one or two parameters, depending on your component
// if your component is just going to READ from the state, you just need the first one (mapStateToProps)
// but if your component ALSO need to change to state, you will need the second parameter (mapDispatchToProps)