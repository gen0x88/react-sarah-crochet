import React from "react";
import {
  Card,
  CardContent,
  Grid,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { useNavigate } from "react-router";

const items = [
  {
    id: 1,
    name: "Peas in a pod",
    price: "$5.99",
    image: require("../img/peasinapod.jpg"),
    handmadeBy: "Sarah",
  },
  {
    id: 2,
    name: "Watermelon on a stick",
    price: "$12.99",
    image: require("../img/watermelon.jpg"),
    handmadeBy: "Sarah",
  },
  {
    id: 3,
    name: "monkey",
    price: "$9.99",
    image: require("../img/monkey.jpg"),
    handmadeBy: "Sarah",
  },
];

export default function CrochetShopPage() {
  const [sort, setSort] = React.useState("default");
  const navigate = useNavigate();

  return (
    <div className="p-6">
      <h1 className="text-4xl font-serif font-bold mb-4 my-12">
        Crochet Items
      </h1>
      <div className="flex justify-between items-center mb-6">
        <div></div>
        <ToggleButtonGroup
          type="single"
          value={sort}
          onValueChange={(value) => setSort(value)}
          className="space-x-2"
        >
          <ToggleButton value="default">Default</ToggleButton>
          <ToggleButton value="az">A-Z</ToggleButton>
          <ToggleButton value="list">List view</ToggleButton>
        </ToggleButtonGroup>
      </div>
      <Grid container spacing={4}>
        {items.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <div onClick={() => navigate(`/item/${item.id}`)}>
              <Card className="rounded-2xl shadow-md cursor-pointer">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-64 object-cover rounded-t-2xl h-40 w-60 object-fill"
                />
                <CardContent className="bg-neutral-50">
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-green-600 font-bold">{item.price}</p>
                  <p className="text-sm text-gray-600">
                    Handmade by {item.handmadeBy}
                  </p>
                </CardContent>
              </Card>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
