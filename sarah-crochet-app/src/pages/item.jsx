import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Button,
  FormControl,
  FormControlLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
} from "@mui/material";
import { database } from "../database";

export default function ItemPage() {
  const { id } = useParams();
  const item = database.find((i) => i.id === parseInt(id));
  const [selectedImage, setSelectedImage] = useState(item.image);
  const [quantity, setQuantity] = useState(1);
  const [descOrReview, setDescOrReview] = useState("description");
  const navigate = useNavigate();

  const addToCart = () => {
    const addedCart = []
    if (localStorage.getItem('cart')) {
      const currentCart = JSON.parse(localStorage.getItem('cart'))
      if (currentCart.find(e => e.id === item.id)) {
        currentCart[currentCart.indexOf(currentCart.find(e => e.id === item.id))].quantity = quantity
        addedCart.push(...currentCart)
      } else {
        addedCart.push(...currentCart)
        addedCart.push({id: item.id, name: item.name, quantity: quantity, price: item.price, image: item.image})
      }
    } else {
      addedCart.push({id: item.id, name: item.name, quantity: quantity, price: item.price, image: item.image})
    }
    localStorage.setItem('cart', JSON.stringify(addedCart))
    console.log({id: item.id, name: item.name, quantity: quantity, price: item.price, image: item.image})
  }

  return (
    <div className="p-6">
      <Button onClick={() => navigate(-1)} className="mb-4">
        Back
      </Button>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex md:flex-col gap-2">
            {item.thumbnails.map((thumb, index) => (
              <img
                key={index}
                src={thumb}
                alt="Thumbnail"
                onClick={() => setSelectedImage(thumb)}
                className="w-20 h-20 object-cover rounded-lg border cursor-pointer hover:border-black-400"
              />
            ))}
          </div>
          <img
            src={selectedImage}
            alt={item.name}
            className="w-full md:w-[400px] h-[300px] object-cover rounded-lg"
          />
        </div>

        <div className="flex-1">
          <p className="text-sm text-gray-500 mb-1">{item.category}</p>
          <h2 className="text-3xl font-bold mb-2">{item.name}</h2>
          <p className="text-green-600 text-xl font-semibold mb-2">
            ${item.price}
          </p>
          <p className="text-sm text-gray-500 mb-4">
            Tax included. Shipping costs are calculated at checkout
          </p>
          <p className="font-semibold mb-2">
            Availability: {item.availability}
          </p>
          <div className="flex items-center gap-4 mb-4">
            <label htmlFor="qty" className="font-medium">
              Qty:
            </label>
            <Select
              id="qty"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              size="small"
              className="bg-white"
            >
              {[1, 2, 3, 4, 5].map((num) => (
                <MenuItem key={num} value={num}>
                  {num}
                </MenuItem>
              ))}
            </Select>
          </div>
          <Button onClick={addToCart} variant="filled" className="bg-red-600 text-white hover:bg-red-700">
            Add to Cart
          </Button>
        </div>
      </div>

      <div className="mt-10 border-t pt-6">
        <FormControl>
          <RadioGroup
            row
            defaultValue="description"
            name="row-radio-buttons-group"
          >
            <FormControlLabel
              value="description"
              control={
                <Radio
                  icon={<span style={{ color: "#000" }} />}
                  checkedIcon={<span style={{ color: "#000" }} />}
                />
              }
              label="Description"
              className={descOrReview === "description" ? "underline" : ""}
              onClick={(e) => setDescOrReview(e.target.value)}
            />
            <FormControlLabel
              value="reviews"
              control={
                <Radio
                  icon={<span style={{ color: "#000" }} />}
                  checkedIcon={<span style={{ color: "#000" }} />}
                />
              }
              className={descOrReview === "reviews" ? "underline" : ""}
              label="Reviews"
              onClick={(e) => setDescOrReview(e.target.value)}
            />
          </RadioGroup>
        </FormControl>
        {descOrReview === "description" ? (
          <p className="text-gray-700 leading-relaxed">{item.description}</p>
        ) : (
          <p>No reviews yet</p>
        )}
      </div>
    </div>
  );
}
