import "./Product.css";
import Chart from "../../components/chart/Chart";
import { productData } from "../../data";
import { Add, Publish } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function Product() {
  return (
    <div className="product">
      <div className="product-title-container">
        <h1 className="product-title">Product Details</h1>
        <Link to="/addNewProduct" className="link">
          <button className="add-product-button">
            <Add /> Add Product
          </button>
        </Link>
      </div>
      <div className="product-top">
        <div className="product-top-left">
          <Chart data={productData} dataKey="Sales" title="Sales Performance" />
        </div>
        <div className="product-top-right">
          <div className="product-info-top">
            <img
              src="/images/apple.jpg"
              alt="Apple"
              className="product-info-image"
            />
            <span className="product-name">Apple</span>
          </div>
          <div className="product-info-bottom">
            <div className="product-info-item">
              <span className="product-info-key">Product ID:</span>
              <span className="product-info-value">123</span>
            </div>
            <div className="product-info-item">
              <span className="product-info-key">Sales:</span>
              <span className="product-info-value">5123</span>
            </div>
            <div className="product-info-item">
              <span className="product-info-key">Active:</span>
              <span className="product-info-value">yes</span>
            </div>
            <div className="product-info-item">
              <span className="product-info-key">In Stock:</span>
              <span className="product-info-value">No</span>
            </div>
          </div>
        </div>
      </div>
      <div className="product-bottom">
        <form className="product-form">
          <div className="product-form-left">
            <label>Product Name</label>
            <input type="text" placeholder="Apple" />
            <label>Category</label>
            <select name="inStock" id="idStock">
              <option selected disabled>
                Select Category
              </option>
              <option value="cereals">Cereals</option>
              <option value="detergents">Detergents</option>
              <option value="fruits">Fruits</option>
              <option value="gifts">Gifts</option>
              <option value="hardDrinks">Hard Drinks</option>
              <option value="pestTrees">Pest Trees</option>
              <option value="toiletTress">Toilet Tress</option>
              <option value="softDrinks">Soft Drinks</option>
              <option value="spices">Spices</option>
              <option value="staionaries">Stationaries</option>
            </select>
            <label>In Stock</label>
            <select name="inStock" id="idStock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <label>Active</label>
            <select name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="product-form-right">
            <div className="product-upload">
              <img
                src="/images/apple.jpg"
                alt="Product Image"
                className="product-upload-image"
              />
              <label for="file">
                <Publish />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="product-button">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}
