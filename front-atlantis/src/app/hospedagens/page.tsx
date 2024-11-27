'use client'
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import axios from "axios";

interface Hospedagem {
  id: number;
  nomeHospede: string;
  acomodacao: string;
  checkIn: string;
  checkOut: string;
}

export default function HospedagensPage() {
  const [hospedagens, setHospedagens] = useState<Hospedagem[]>([]);

  useEffect(() => {
    const fetchHospedagens = async () => {
      try {
        const response = await axios.get("http://localhost:8080/hospedagens/list");
        const fetchedHospedagens = response.data;
  
        const hospedagensComDatasLegiveis = fetchedHospedagens.map((hospedagem) => ({
          ...hospedagem,
          checkIn: new Date(hospedagem.checkIn).toLocaleDateString(),
          checkOut: new Date(hospedagem.checkOut).toLocaleDateString(),
        }));
  
        setHospedagens(hospedagensComDatasLegiveis);
      } catch (error) {
        console.error("Erro ao buscar hospedagens:", error);
      }
    };
  
    fetchHospedagens();
  }, []);
  
  const handleDelete = async (id: number) => {
    const confirmed = window.confirm(`Tem certeza que deseja excluir a hospedagem de ID "${id}"?`)

    if (confirmed) {
      try {
        await axios.delete(`http://localhost:8080/hospedagens/${id}`);
        setHospedagens((hospedagens) => hospedagens.filter((guest) => guest.id !== id));
        console.log(hospedagens)
      } catch (error) {
        console.error("Erro ao excluir o hóspede:", error);
      }
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center pt-20 bg-gradient-to-b from-pink-100 to-pink-300">
      <div className="w-full max-w-3xl bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Hospedagens</h2>

        <div className="mb-4 flex justify-end">
          <Link href="/hospedagens/create" className="flex items-center text-green-500 hover:text-green-700">
            <FontAwesomeIcon icon={faPlus} className="mr-2" />
            Criar nova hospedagem
          </Link>
        </div>

        {hospedagens.length === 0 ? (
          <p className="text-gray-600 text-center">Nenhuma hospedagem feita ainda</p>
        ) : (
          <table className="w-full border-collapse text-black">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-2 px-4 text-left">ID do Hóspede</th>
                <th className="py-2 px-4 text-left">ID da Acomodação</th>
                <th className="py-2 px-4 text-left">Check-In</th>
                <th className="py-2 px-4 text-left">Check-Out</th>
                <th className="py-2 px-4 text-left">Ações</th>
              </tr>
            </thead>
            <tbody>
              {hospedagens.map((hospedagem, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : ""}>
                  <td className="py-2 px-4">{hospedagem.idHospede}</td>
                  <td className="py-2 px-4">{hospedagem.idAcomodacao}</td>
                  <td className="py-2 px-4">{hospedagem.checkIn}</td>
                  <td className="py-2 px-4">{hospedagem.checkOut}</td>
                  <td className="py-2 px-4">
                    <Link href={`/hospedagens/edit/${hospedagem.id}`} className="text-blue-500 hover:text-blue-700 mr-2">
                      <FontAwesomeIcon icon={faEdit} />
                    </Link>
                    <button className="text-red-500 hover:text-red-700 pl-4" onClick={() => handleDelete(hospedagem.id)}>
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </main>
  );
}