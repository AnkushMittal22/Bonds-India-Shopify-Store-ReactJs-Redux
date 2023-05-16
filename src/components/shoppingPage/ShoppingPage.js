import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import LocalData from "../../localData/LocalData";
import { actionOne } from "../../store/ShopingStore";
import style from "./Shopping.module.css";

const ShoppingPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const bookProductHanlder = (title, price, id, poster) => {
    dispatch(actionOne.ProductName({ title, price, id, poster }));

    navigate("/PaymentPage");
  };

  let ProductList = LocalData.map((ele, ind) => {
    return (
      <div className={style.products} key={ind}>
        <div>
          <div>
            <p className={style.postersize}>
              <img src={ele.Poster} alt="img" />
            </p>

            <p>
              <span>Product Name :</span> {ele.Title}
            </p>

            <p>
              <span>Product Price :</span>
              {ele.Price}
            </p>

            <p>
              <span>Language:</span> {ele.Language}
            </p>
          </div>

          <button
            onClick={() =>
              bookProductHanlder(ele.Title, ele.Price, ind, ele.Poster)
            }
          >
            Buy Now
          </button>
        </div>
      </div>
    );
  });
  return <div className={style.product}>{ProductList}</div>;
};

export default ShoppingPage;
