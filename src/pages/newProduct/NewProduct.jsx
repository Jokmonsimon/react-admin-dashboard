import "./NewProduct.css";
import { Add } from "@mui/icons-material";

export default function NewProduct() {
  return (
    <div className="new-product">
      <h1 className="new-product-title">New Product</h1>
      <form className="add-product-form">
        <div className="add-product-item">
          <label>Product Image</label>
          <input type="file" id="file" />
        </div>
        <div className="add-product-item">
          <label>Product Name</label>
          <input type="text" placeholder="Apple" />
        </div>
        <div className="add-product-item">
          <label>Product Category</label>
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
        </div>
        <div className="add-product-item">
          <label>Product Quantity</label>
          <input type="number" placeholder="348" />
        </div>
        <div className="add-product-item">
          <label>In Stock</label>
          <select name="inStock" id="idStock">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div className="add-product-item">
          <label>Active</label>
          <select name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        <button className="add-product-button">
          <Add />
          Create
        </button>
      </form>
    </div>
  );
}
