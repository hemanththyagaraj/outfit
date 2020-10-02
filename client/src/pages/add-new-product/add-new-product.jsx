import React, { useContext, useState } from "react";
import Button from "../../components/views/button/button";
import Input from "../../components/views/input/input";
import Select from "../../components/views/select/select";
import Upload from "../../components/views/upload/upload";
import { createNewProduct } from "../../services/api/product";
import { constructFormdata } from "../../_helpers/formData";
import { availability, categories, productStructure } from "./static";
import "./add-new-product.css";
import { AlertContext } from "../../context/alert/alert-state";

const AddNewProduct = () => {
  const [newKey, setNewKey] = useState(new Date());
  const [loading, setLoading] = useState(false)
  const [productImageUrl, setProductImageUrl] = useState("");
  const [product, setProduct] = useState(productStructure);
  const { setAlert } = useContext(AlertContext);

  const handleChange = (event) => {
    const { value, name } = event.target;
    setProduct((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleUpload = (file, data) => {
    setProduct((prevState) => ({ ...prevState, file: file }));
    setProductImageUrl((prevState) => data);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true)
    try {
      const formData = constructFormdata(product);
      const { data } = await createNewProduct(formData);
      setNewKey(new Date());
      setProduct(productStructure);
      setProductImageUrl("");
      setAlert("success", data.message);
      setLoading(false)
    } catch (error) {
      setLoading(false)
      setAlert("error", "Failed to create product");
    }
  };

  return (
    <div className="newproduct__container">
      <div className="newproduct__card">
        <div className="panel-left">
          {productImageUrl && (
            <img
              src={productImageUrl}
              alt="product"
              className="product__image"
            />
          )}
        </div>
        <div className="panel-right">
          <form onSubmit={handleSubmit} key={newKey}>
            <h2 className="title">Add new product</h2>
            <div className="row">
              <div className="col">
                <Input
                  autoComplete="off"
                  placeholder="Product name"
                  name="name"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="col">
                <Input
                  autoComplete="off"
                  placeholder="Manufactured by"
                  name="manufacturer"
                  required
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="row">
              <div className="col">
                <Input
                  autoComplete="off"
                  placeholder="Product price"
                  name="price"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="col">
                <Select
                  label="Select product availability"
                  name="inStock"
                  required
                  onChange={handleChange}
                  options={availability}
                />
              </div>
            </div>

            <div className="row">
              <div className="col">
                <Upload
                  showImage={false}
                  label="Upload product image"
                  size="medium"
                  onChange={handleUpload}
                  className="btn__product-upload"
                />
              </div>
              <div className="col">
                <Select
                  label="Select category"
                  name="category"
                  required
                  onChange={handleChange}
                  options={categories}
                />
              </div>
            </div>

            <div className="row">
              <textarea
                className="textarea"
                placeholder="Product description (Min 200 words)"
                rows="10"
                name="description"
                required
                onChange={handleChange}
                minLength={200}
                autoComplete="off"
              />
            </div>

            <div className="row">
              <Button color="var(--primary-green)" className="btn__addproduct" disabled={loading}>
                {loading ? 'Adding new product...' : 'Submit'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddNewProduct;
