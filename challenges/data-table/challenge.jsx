import * as React from "react";
import { fetchData } from "./utils";

export default function DataTable() {
  const [data, setData] = React.useState([]);
  const [isRTL, setIsRTL] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [sortColumn, setSortColumn] = React.useState("id");
  const [sortOrder, setSortOrder] = React.useState("asc");

  React.useEffect(() => {
    (async () => {
      const res = await fetchData();
      setData(res);
    })();
  }, [])

  const handleHeaderClick = (column) => {
    if (column === sortColumn) {
      setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortColumn(column);
      setSortOrder("asc");
    }
  };

  const handleToggleClick = () => {
    setIsRTL((prev) => !prev);
  };

  const filteredData = React.useMemo(
    () => searchTerm.length > 0
      ? data.filter(d => d.name.toLowerCase().includes(searchTerm.toLowerCase()))
      : data,
  [data, searchTerm]);

  const sortedData = React.useMemo(() => {
    return filteredData.sort(
      (a, b) => a[sortColumn] > b[sortColumn]
        ? (sortOrder === "asc" ? 1 : -1)
        : (sortOrder === "asc" ? -1 : 1)
    )
  }, [filteredData, sortColumn, sortOrder])

  return (
    <div>
      <header>
        <button className="secondary" onClick={handleToggleClick}>
          Toggle Columns
        </button>

        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search items"
        />
      </header>

      <table className={isRTL ? "rtl" : ""}>
        <thead>
        <tr>
          <th>
            <button
              className="link"
              onClick={() => handleHeaderClick("id")}
              aria-label="ID"
            >
              ID {sortColumn === "id" && (sortOrder === "asc" ? "↑" : "↓")}
            </button>
          </th>
          <th>
            <button
              className="link"
              onClick={() => handleHeaderClick("name")}
              aria-label="Name"
            >
              Name{" "}
              {sortColumn === "name" && (sortOrder === "asc" ? "↑" : "↓")}
            </button>
          </th>
          <th>
            <button
              className="link"
              onClick={() => handleHeaderClick("weight")}
              aria-label="Weight"
            >
              Weight{" "}
              {sortColumn === "weight" && (sortOrder === "asc" ? "↑" : "↓")}
            </button>
          </th>
        </tr>
        </thead>
        <tbody>
        {sortedData.map((row) => (
          <tr key={row.id}>
            <td>{row.id}</td>
            <td>{row.name}</td>
            <td>{row.weight}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
}
