import * as React from "react";

const items = [
  "Apple",
  "Banana",
  "Cherry",
  "Date",
  "Fig",
  "Grape",
  "Honeydew",
  "Lemon",
  "Mango",
  "Nectarine",
  "Orange",
  "Papaya",
  "Raspberry",
  "Strawberry",
  "Watermelon"
];

export default function SearchFilter() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [filteredItems, setFilteredItems] = React.useState(items);

  const handleUpdateSearch = (e) => {
    const newVal = e.target.value;
    setSearchTerm(newVal);
    setFilteredItems(items.filter(item => item.toLowerCase().includes(newVal.toLowerCase())))
  }

  return (
    <div>
      <h1>Search Filter</h1>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleUpdateSearch}
      />
      <ul>
        {filteredItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
