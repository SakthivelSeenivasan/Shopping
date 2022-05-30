import { Button, Card, Col } from "react-bootstrap";
import { CartState } from "../Context/Context";
import Rating from "./Rating";

const SingleProduct = ({ prod }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  return (
    <Col className='products' md={4}>
      <Card>
        <Card.Img variant='top' src={prod.image} alt={prod.name}></Card.Img>
        <Card.Body>
          <Card.Title>{prod.name}</Card.Title>
          <Card.Subtitle style={{ paddingBottom: "10px" }}>
            <span>Rs {prod.price.split(".")[0]}</span>
            {prod.fastDelivary ? (
              <div>Fast Delivary</div>
            ) : (
              <div>4 days Delivary</div>
            )}
            <Rating rating={prod.rating} />
          </Card.Subtitle>
          {cart.some((p) => p.id === prod.id) ? (
            <Button
              variant='danger'
              onClick={() => {
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: prod,
                });
              }}
            >
              Remove from Cart
            </Button>
          ) : (
            <Button
              disabled={!prod.inStock}
              onClick={() => {
                dispatch({
                  type: "ADD_TO_CART",
                  payload: prod,
                });
              }}
            >
              {!prod.inStock ? "Out of Stock" : "Add to Cart"}
            </Button>
          )}
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleProduct;
