import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addFoodToCustomer } from "../features/customerSlice";

interface CustomerCardType {
  id: string;
  name: string;
  food: string[];
}

const Customer: React.FC<CustomerCardType> = ({ name, food, id }) => {
  const [customerFoodInput, setCustomerFoodInput] = useState("");

  const dispatch = useDispatch();

  return (
    <div className="customer-food-card-container">
      <p>{name}</p>
      <div className="customer-foods-container">
        <div className="customer-food">
          {food.map((food) => {
            return <p>{food}</p>;
          })}
        </div>
        <div className="customer-food-input-container">
          <input
            placeholder="Add Food"
            value={customerFoodInput}
            onChange={(e) => setCustomerFoodInput(e.target.value)}
          />
          <button
            onClick={() => {
              if (!customerFoodInput) return;
              dispatch(
                addFoodToCustomer({
                  id,
                  food: customerFoodInput,
                })
              );
              setCustomerFoodInput("");
            }}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Customer;
