import React from "react";
import {
  Card,
  CardContent,
  Grid,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { useNavigate } from "react-router";
import { database } from "../database";

export default function CrochetShopPage() {
  const [sort, setSort] = React.useState("default");
  const navigate = useNavigate();
  const SortedAZDb =
    sort === "default"
      ? database
      : database.toSorted((a, b) => {
          return a.name.localeCompare(b.name);
        });

  const handleFilter = (event, newValue) => {
    if (newValue !== null) {
      console.log(event, newValue, event.target.value);
      setSort(event.target.value);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-4xl font-serif font-bold mb-4 my-12">
        Crochet Items
      </h1>
      <div className="flex justify-between items-center mb-6">
        <div></div>
        <ToggleButtonGroup
          value={sort}
          onChange={handleFilter}
          className="space-x-2"
        >
          <ToggleButton value="default">Default</ToggleButton>
          <ToggleButton value="az">A-Z</ToggleButton>
        </ToggleButtonGroup>
      </div>
      <Grid container spacing={4}>
        {SortedAZDb.map((item, index) => (
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
                  <p className="text-green-600 font-bold">${item.price}</p>
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
