import React from "react";

interface FilterButtonsProps {
  setFilter: (filter: string) => void;
}

const FilterButtons: React.FC<FilterButtonsProps> = ({ setFilter }) => {
  return (
    <div className="btn-group mb-3">
      <button className="btn btn-outline-primary" onClick={() => setFilter("all")}>All</button>
      <button className="btn btn-outline-success" onClick={() => setFilter("completed")}>Completed</button>
      <button className="btn btn-outline-danger" onClick={() => setFilter("notCompleted")}>Not Completed</button>
    </div>
  );
};

export default FilterButtons;