import { useState } from "react";
import Item from "./Item";

export default function PackingList({
  items,
  onDeleteItem,
  onChecked,
  onClearList,
}) {
  const [sortValue, setSortValue] = useState("input");
  let sortedItems;

  if (sortValue === "input") sortedItems = items;
  if (sortValue === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortValue === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onChecked={onChecked}
          />
        ))}
      </ul>
      <div className="actions">
        <select
          value={sortValue}
          onChange={(e) => setSortValue(e.target.value)}
        >
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description order</option>
          <option value="packed">Sort by packed order</option>
        </select>
        <button onClick={onClearList}>Clear List</button>
      </div>
    </div>
  );
}
