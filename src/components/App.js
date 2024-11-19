import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

export default function App() {
  const [items, setItems] = useState([]);
  function addItemHandler(item) {
    setItems((items) => [...items, item]);
  }

  function deleteItemHandler(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleChecked(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    const confirm = window.confirm("Are you sure you want to delete all!!!");
    if (confirm) setItems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onaddItem={addItemHandler} />
      <PackingList
        items={items}
        onDeleteItem={deleteItemHandler}
        onChecked={handleChecked}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
