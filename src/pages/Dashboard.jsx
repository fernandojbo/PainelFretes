import { useState } from "react";
import FreightTableForm from "../components/FreightTableForm";
import FreightTableList from "../components/FreightTableList";

export default function Dashboard() {
  const [tables, setTables] = useState([]);

  function addTable(t) {
    setTables([...tables, t]);
  }

  return (
    <div className="max-w-4xl mx-auto mt-24">
      <FreightTableForm onSave={addTable} />
      <FreightTableList list={tables} />
    </div>
  );
}
