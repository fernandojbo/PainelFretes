export default function FreightTableList({ list }) {
  return (
    <div className="bg-white p-4 rounded shadow-md mt-5">
      <h2 className="text-lg font-bold mb-3">Tabelas Cadastradas</h2>

      {list.length === 0 && <p>Nenhuma tabela cadastrada ainda.</p>}

      {list.map((t, i) => (
        <div key={i} className="border p-2 rounded mb-2">
          <p><b>Transportadora:</b> {t.transportadora}</p>
          <p><b>Estado:</b> {t.estado}</p>
          <p><b>Valor/kg:</b> R$ {t.valorKg}</p>
          <p><b>Prazo:</b> {t.prazo} dias</p>
        </div>
      ))}
    </div>
  );
}
