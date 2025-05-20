import { useNavigate, useParams } from "react-router-dom";
import {
  Card,
  CardContent,
  Grid,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { database } from "../database";

export default function SearchPage() {
  const { name } = useParams();
  const navigate = useNavigate();
  const currentDb = name === undefined ? database : database.filter(item => item.name.toLowerCase().includes(name.toLowerCase()))

  return (
    <div className="p-6">
      <h1 className="text-4xl font-serif font-bold mb-4 my-12">
        Search results for "{name}"
      </h1>
      {currentDb.length === 0 ? <div>No results for "{name}"</div> : <div></div>}
      <div className="flex justify-between items-center mb-6">
        <div></div>
        <ToggleButtonGroup
          type="single"
          //   value={sort}
          //   onValueChange={(value) => setSort(value)}
          className="space-x-2"
        >
          <ToggleButton value="default">Default</ToggleButton>
          <ToggleButton value="az">A-Z</ToggleButton>
          <ToggleButton value="list">List view</ToggleButton>
        </ToggleButtonGroup>
      </div>
      <Grid container spacing={4}>
        {currentDb.map((item, index) => (
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
