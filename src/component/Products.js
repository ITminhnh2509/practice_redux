import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, deleteProduct, editProduct } from "../redux/productsSlice";
import { addCart, deleteCart } from "../redux/cartSlice";
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
  Container,
  Input,
  Row,
} from "reactstrap";
export default function Products() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const cart = useSelector((state) => state.cart.cart);
  const [text, setText] = useState("");
  const [textEdit, setTextEdit] = useState("");
  const [isEdit, setIsEdit] = useState([{ id: "", flag: false }]);
  const handleAddProduct = (product) => {
    dispatch(addProduct(product));
    setText("");
  };
  const handleAddcart = (cart) => {
    dispatch(addCart(cart));
  };
  const handleDeleteProduct = (id) => {
    dispatch(deleteProduct(id));
  };
  const handleEditProduct = () => {
    if (text.trim() && isEdit.id) {
      dispatch(editProduct({ id: isEdit.id, name: text }));
      setIsEdit({ id: "", flag: false });
      setText("");
    }
  };

  return (
    <Container>
      <h1>Products</h1>
      <Input
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key == "Enter") {
            handleAddProduct({ name: text });
          }
        }}
      />
      <Row>
        {products.map((product) => (
          <Card
            className="py-1 px-2 m-3"
            key={product.id}
            style={{
              width: "18rem",
            }}
          >
            <img alt="Sample" src="https://picsum.photos/300/200" />
            <CardBody>
              <CardTitle tag="h5">Card title</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Product
              </CardSubtitle>
              <CardText>
                {isEdit.id === product.id && isEdit.flag == true ? (
                  <Input
                    value={textEdit}
                    onChange={(e) => setTextEdit(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key == "Enter") {
                        handleEditProduct(textEdit);
                      }
                    }}
                  />
                ) : (
                  <p
                    onDoubleClick={() => {
                      setText(product.name);
                      setIsEdit({ id: product.id, flag: true });
                    }}
                  >
                    {product.name} - ${product.price}
                  </p>
                )}
              </CardText>
              <Button onClick={() => handleAddcart(product)}>Add</Button>
              <Button onClick={() => handleDeleteProduct(product.id)}>
                Delete
              </Button>
            </CardBody>
          </Card>
        ))}
      </Row>
      {cart.map((item) => (
        <h1>{item.name}</h1>
      ))}
    </Container>
  );
}
