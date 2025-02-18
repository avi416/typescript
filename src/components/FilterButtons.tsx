import React from "react";

interface FilterButtonsProps {
  setFilter: (filter: string) => void;
}

const FilterButtons: React.FC<FilterButtonsProps> = ({ setFilter }) => {
  /**
   * Renders filter buttons to filter tasks based on their status.
   * Clicking a button updates the filter state.
   * @param {string} filter - The filter value to be set ("all", "completed", or "notCompleted").
   */
  return (
    <div className="btn-group mb-3">
      {/** Button to show all tasks */}
      <button className="btn btn-outline-primary" onClick={() => setFilter("all")}>All</button>
      {/** Button to show only completed tasks */}
      <button className="btn btn-outline-success" onClick={() => setFilter("completed")}>Completed</button>
      {/** Button to show only not completed tasks */}
      <button className="btn btn-outline-danger" onClick={() => setFilter("notCompleted")}>Not Completed</button>
    </div>
  );
};

export default FilterButtons;
