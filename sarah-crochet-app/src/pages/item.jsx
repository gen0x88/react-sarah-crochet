import { Button } from "@mui/material";
import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const items = [
  {
    id: 1,
    name: "Peas in a pod",
    price: "$5.99",
    image: require("../img/peasinapod.jpg"),
    description:
      "A cute set of peas snuggled together in a soft green pod. Perfect for gifts or decor!",
    handmadeBy: "Sarah",
  },
  {
    id: 2,
    name: "Watermelon on a stick",
    price: "$12.99",
    image: require("../img/watermelon.jpg"),
    description:
      "A cheerful watermelon slice on a stick, full of personality and color.",
    handmadeBy: "Sarah",
  },
];

export default function ItemDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const item = items.find((item) => item.id === parseInt(id));

  const handleAddToCart = () => {
    alert(`${item.name} has been added to your cart!`);
  };

  if (!item) {
    return <div className="p-6 text-red-600">Item not found</div>;
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <Button onClick={() => navigate(-1)} className="mb-4">
        Back
      </Button>
      <div className="rounded-2xl shadow-lg overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-96 object-cover"
        />
        <div className="bg-white p-6">
          <h1 className="text-3xl font-bold mb-2">{item.name}</h1>
          <p className="text-green-600 text-xl font-semibold mb-4">
            {item.price}
          </p>
          <p className="text-gray-700 mb-4">{item.description}</p>
          <p className="text-sm text-gray-500">Handmade by {item.handmadeBy}</p>
          <Button
            onClick={handleAddToCart}
            className="bg-green-600 hover:bg-green-700 text-white"
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}
