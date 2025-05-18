import { Button } from "@mui/material";
import React from "react";

import { database } from "../database";

export default function CartPage() {
  const subtotal = database.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const tax = subtotal * 0.111;
  const shipping = 3.0;
  const total = subtotal + tax + shipping;

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-4xl font-serif font-bold mb-2">Cart</h1>
      <p className="text-gray-600 mb-6">{database.length} items</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-4">
          {database.map((item) => (
            <div
              key={item.id}
              className="flex items-center bg-neutral-50 rounded-2xl shadow-md overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-32 h-32 object-cover rounded-l-2xl"
              />
              <div className="p-4 flex-grow">
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-green-600 font-bold">${item.price.toFixed(2)}</p>
                <div className="mt-2">
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    className="w-20 p-2 border rounded-md"
                  />
                </div>
              </div>
              <div className="p-4 text-right font-semibold">
                ${(item.price * item.quantity).toFixed(2)}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-neutral-50 rounded-2xl shadow-md p-6 h-fit">
          <h3 className="text-xl font-semibold mb-4">Order summary</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Tax</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>${shipping.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold border-t pt-2">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
          <Button className="mt-6 w-full bg-green-700 hover:bg-green-800 text-white">
            Continue to payment
          </Button>
        </div>
      </div>
    </div>
  );
}
