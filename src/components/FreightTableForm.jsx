import { useState } from "react";

export default function FreightTableForm({ onSave }) {
  const [form, setForm] = useState({
    transportadora: "",
    estado: "",
    valorKg: "",
    prazo: "",
  });

  function updates(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function salvar() {
    onSave(form);
    setForm({ transportadora: "", estado: "", valorKg: "", prazo: "" });
  }

  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h2 className="text-lg font-bold mb-3">Cadastrar Tabela de Frete</h2>

      <input
        name="transportadora"
        value={form.transportadora}
        onChange={updates}
        placeholder="Transportadora"
        className="input"
      />

      <input
        name="estado"
        value={form.estado}
        onChange={updates}
        placeholder="Estado / Região"
        className="input"
      />

      <input
        name="valorKg"
        value={form.valorKg}
        onChange={updates}
        placeholder="Valor por kg"
        className="input"
      />

      <input
        name="prazo"
        value={form.prazo}
        onChange={updates}
        placeholder="Prazo (dias)"
        className="input"
      />

      <button onClick={salvar} className="btn-primary mt-3 w-full">
        Salvar
      </button>
    </div>
  );
}
