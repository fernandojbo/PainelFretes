export default function Login({ onLogin }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 shadow-md rounded">
        <h2 className="text-xl font-bold mb-4">Acessar Painel</h2>

        <button
          onClick={() => onLogin(true)}
          className="btn-primary w-full"
        >
          Entrar
        </button>
      </div>
    </div>
  );
}
