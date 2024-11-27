import React from "react";

export default function AccomodationsTab() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-20 bg-gradient-to-b from-pink-100 to-pink-300">
      <div className="w-full max-w-3xl bg-white p-4 rounded-lg shadow-lg overflow-x-auto">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Acomodações</h2>

        <table className="w-full border-collapse text-black">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4 text-left">Acomodação</th>
              <th className="py-2 px-4 text-left">Cama Solteiro</th>
              <th className="py-2 px-4 text-left">Cama Casal</th>
              <th className="py-2 px-4 text-left">Suíte</th>
              <th className="py-2 px-2 text-left">Climatização</th>
              <th className="py-2 px-4 text-left">Garagem</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 text-lg font-semibold text-gray-600">Casal Simples</td>
              <td className="py-2 px-4">Não possui</td>
              <td className="py-2 px-4">1 cama</td>
              <td className="py-2 px-4">1 suite</td>
              <td className="py-2 px-4">Sim</td>
              <td className="py-2 px-4">1 vaga</td>
            </tr>
            <tr>
              <td className="py-2 px-4 text-lg font-semibold text-gray-600">Família Simples</td>
              <td className="py-2 px-4">2 camas</td>
              <td className="py-2 px-4">1 cama</td>
              <td className="py-2 px-4">1 suite</td>
              <td className="py-2 px-4">Sim</td>
              <td className="py-2 px-4">1 vaga</td>
            </tr>
            <tr>
              <td className="py-2 px-4 text-lg font-semibold text-gray-600">Família Mais</td>
              <td className="py-2 px-4">5 camas</td>
              <td className="py-2 px-4">1 cama</td>
              <td className="py-2 px-4">2 suites</td>
              <td className="py-2 px-4">Sim</td>
              <td className="py-2 px-4">2 vagas</td>
            </tr>
            <tr>
              <td className="py-2 px-4 text-lg font-semibold text-gray-600">Família Super</td>
              <td className="py-2 px-4">6 camas</td>
              <td className="py-2 px-4">2 camas</td>
              <td className="py-2 px-4">3 suites</td>
              <td className="py-2 px-4">Sim</td>
              <td className="py-2 px-4">2 vagas</td>
            </tr>
            <tr>
              <td className="py-2 px-4 text-lg font-semibold text-gray-600">Solteiro Simples</td>
              <td className="py-2 px-4">1 cama</td>
              <td className="py-2 px-4">Não possui</td>
              <td className="py-2 px-4">1 suite</td>
              <td className="py-2 px-4">Sim</td>
              <td className="py-2 px-4">Não possui</td>
            </tr>
            <tr>
              <td className="py-2 px-4 text-lg font-semibold text-gray-600">Solteiro Mais</td>
              <td className="py-2 px-4">Não possui</td>
              <td className="py-2 px-4">1 cama</td>
              <td className="py-2 px-4">1 suite</td>
              <td className="py-2 px-4">Sim</td>
              <td className="py-2 px-4">Possui</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}
