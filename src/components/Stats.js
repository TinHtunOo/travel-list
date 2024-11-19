export default function Stats({ items }) {
  if (!items.length)
    return <p className="stats">You can start adding your items.</p>;
  const numOfItems = items.length;
  const numOFPackedItems = items.filter((item) => item.packed).length;
  const percentage = Math.round((numOFPackedItems / numOfItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You have everything packed. You are ready to go."
          : `You have ${numOfItems} items on your list and you already pack 
        ${numOFPackedItems} (${percentage}%).`}
      </em>
    </footer>
  );
}
