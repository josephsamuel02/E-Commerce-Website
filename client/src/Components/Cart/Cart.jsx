import "./Cart.css";
import { IconContext } from "react-icons";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetCart, UpdateCart } from "../../store/actions/Cart";

// import { BsTrash } from "react-icons/bs";

const Cart = () => {
    const cartItems = useSelector((state) => state.GetCart);
    const dispatch = useDispatch();

    const [Total, setTotal] = useState();

    // const [quantity, setQuantity] = useState(0);

    const inc = (e) => {
        let s = e.target.innerText;
        let i = Number(e.target.nextSibling.innerText);

        if (s == "+") {
            e.target.nextSibling.innerText = i + 1;
        }
    };

    const dec = (e) => {
        let s = e.target.innerText;
        const o = Number(e.target.previousSibling.innerText);

        if (o != 1) {
            e.target.previousSibling.innerText = o - 1;
        }
    };

    // const updateitem = (id, title, image, price, quantity) => {
    //     dispatch(
    //         UpdateCart(
    //             [
    //                 {
    //                     productId: id,
    //                     title: title,
    //                     image: image,
    //                     price: price,
    //                     quantity: quantity,
    //                 },
    //             ],
    //             id
    //         )
    //     );
    // };
    const handlechange = (e, id) => {
        const q = e.target.value;
        dispatch(UpdateCart(q, id));
        console.log(q);
    };

    const theTotal = () => {
        cartItems.map((i) => setTotal((prevstate) => i.price));
    };
    const userId = "9ny48xxj4";
    useEffect(() => dispatch(GetCart(userId)), [cartItems]);
    useEffect(() => theTotal(), []);
    // console.log(cartItems);
    return (
        <div id="cartpage">
            {cartItems
                ? cartItems.map((i) => (
                      <div className="cartCard" key={i._id}>
                          <div className="productimage">
                              <img src={i.image} alt="laptop" />
                          </div>
                          <div className="itemdetails">
                              <h3 className="productname">{i.title}</h3>
                              <p className="productprice">price: {i.price}</p>

                              <h3 className="quantity">
                                  <select
                                      defaultValue={i.quantity}
                                      onChange={(e) => handlechange(e, i._id)}
                                  >
                                      <option value={1}>1 </option>
                                      <option value={2}>2</option>
                                      <option value={3}>3</option>
                                      <option value={4}>4</option>
                                      <option value={5}>5</option>
                                      <option value={6}>6</option>
                                      <option value={7}>7</option>
                                      <option value={8}>8</option>
                                      <option value={9}>9</option>
                                      <option value={10}>10</option>
                                      <option value={11}>11</option>
                                      <option value={12}>12</option>
                                      <option value={13}>13</option>
                                      <option value={14}>14</option>
                                      <option value={15}>15</option>
                                      <option value={16}>16</option>
                                      <option value={17}>17</option>
                                      <option value={18}>18</option>
                                      <option value={19}>19</option>
                                      <option value={20}>20</option>
                                  </select>
                              </h3>

                              <h3 className="productprice">
                                  sum:
                                  {i.quantity * i.price}
                              </h3>
                          </div>
                          <button id="removeItem">remove</button>
                      </div>
                  ))
                : null}

            {/* {cartItems
                ? cartItems.map((i) => (
                      <div className="cartCard" key={i._id}>
                          <div className="productimage">
                              <img src={i.image} alt="laptop" />
                          </div>
                          <div className="itemdetails">
                              <h3 className="productname">{i.title}</h3>
                              <p className="productprice">price: {i.price}</p>

                              <h3 className="quantity">
                                  <button
                                      onClick={() =>
                                          updateitem(
                                              i.id,
                                              i.title,
                                              i.image,
                                              i.price,
                                              i.quantity
                                          )
                                      }
                                  >
                                      +
                                  </button>
                                  <p> {i.quantity} </p>
                                  <button onClick={(e) => dec(e)}>-</button>
                              </h3>

                              <h3 className="productprice">
                                  sum:
                                  {i.quantity * i.price}
                              </h3>
                          </div>
                          <button id="removeItem">remove</button>
                      </div>
                  ))
                : null} */}

            <br />
            <br />
            <br />

            <h3>TOTAL {Total} </h3>

            <br />
            <br />
            <br />
            {/* 
                <div className="cartCard">
                    <div className="productimage">
                        <img src="photos/laptop.jpg" alt="laptop" />
                    </div>
                    <div className="itemdetails">
                        <h3 className="productname">HP Laptop</h3>

                        <h3 className="productprice">N 300,000</h3>

                        <select defaultValue={quantity}>
                            <option value={1}>1 </option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                            <option value={6}>6</option>
                            <option value={7}>7</option>
                            <option value={8}>8</option>
                            <option value={9}>9</option>
                            <option value={10}>10</option>
                            <option value={11}>11</option>
                            <option value={12}>12</option>
                            <option value={13}>13</option>
                            <option value={14}>14</option>
                            <option value={15}>15</option>
                            <option value={16}>16</option>
                            <option value={17}>17</option>
                            <option value={18}>18</option>
                            <option value={19}>19</option>
                            <option value={20}>20</option>
                        </select>

                        <h3 className="quantity">Quantity: 3</h3>
                    </div>
                    <button id="removeItem">remove</button>
                </div>

                <div className="cartCard">
                    <div className="productimage">
                        <img src="photos/laptop.jpg" alt="laptop" />
                    </div>
                    <div className="itemdetails">
                        <h3 className="productname">HP Laptop</h3>

                        <h3 className="productprice">N 300,000</h3>

                        <h3 className="quantity">Quantity: 3</h3>
                    </div>
                    <button id="removeItem">remove</button>
                </div>

                <div className="cartCard">
                    <div className="productimage">
                        <img src="photos/laptop.jpg" alt="laptop" />
                    </div>
                    <div className="itemdetails">
                        <h3 className="productname">HP Laptop</h3>

                        <h3 className="productprice">N 300,000</h3>

                        <h3 className="quantity">Quantity: 3</h3>
                    </div>
                    <button id="removeItem">remove</button>
                </div> */}
        </div>
    );
};

export default Cart;

{
    /*             <select
                                          id="filter"
                                          onChange={(e) => handlechange(e)}
                                          defaultValue={i.quantity}
                                      >
                                          <option value={1}>1 </option>
                                          <option value={2}>2</option>
                                          <option value={3}>3</option>
                                          <option value={4}>4</option>
                                          <option value={5}>5</option>
                                          <option value={6}>6</option>
                                          <option value={7}>7</option>
                                          <option value={8}>8</option>
                                          <option value={9}>9</option>
                                          <option value={10}>10</option>
                                          <option value={11}>11</option>
                                          <option value={12}>12</option>
                                          <option value={13}>13</option>
                                          <option value={14}>14</option>
                                          <option value={15}>15</option>
                                          <option value={16}>16</option>
                                          <option value={17}>17</option>
                                          <option value={18}>18</option>
                                          <option value={19}>19</option>
                                          <option value={20}>20</option>
                                      </select> */
}
