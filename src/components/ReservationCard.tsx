import React from "react";
import { useDispatch } from "react-redux";
import { removeReservation } from "../features/reservationSlice";
import { addCustomer } from "../features/customerSlice";
import { v4 as uuid } from "uuid";

interface ReservationCardTypes {
  name: string;
  index: number;
}

const ReservationCard: React.FC<ReservationCardTypes> = ({ name, index }) => {
  const dispatch = useDispatch();

  const removeCard = (): void => {
    dispatch(removeReservation(index));
    dispatch(addCustomer({ id: uuid(), name, food: [] }));
  };

  return (
    <div className="reservation-card-container" onClick={removeCard}>
      {name}
    </div>
  );
};

export default ReservationCard;
