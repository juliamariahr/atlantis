'use client'
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

interface Cliente {
  id: number;
  nome: string;
}

interface Acomodacao {
  id: number;
  nome: string;
}

interface Hospedagem {
  id: number;
  clienteId: number;
  acomodacaoId: number;
  checkIn: string;
  checkOut: string;
}

export default function EditHospedagemPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;

  const [selectedCliente, setSelectedCliente] = useState<number | null>(null);
  const [selectedAcomodacao, setSelectedAcomodacao] = useState<number | null>(null);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const [hospedagem, setHospedagem] = useState<Hospedagem | null>(null);

  const clientes: Cliente[] = [
    { id: 1, nome: "João" },
    { id: 2, nome: "Maria" },
    { id: 3, nome: "John" },
  ];

  const acomodacoes: Acomodacao[] = [
    { id: 1, nome: "Casal Simples" },
    { id: 2, nome: "Família Simples" },
    { id: 3, nome: "Família Mais" },
    { id: 4, nome: "Família Super" },
    { id: 5, nome: "Família Mais" },
    { id: 6, nome: "Solteiro Simples" },
    { id: 7, nome: "Solteiro Mais" },
  ];

  useEffect(() => {
  }, [id]);

  const handleClienteChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = parseInt(event.target.value);
    setSelectedCliente(selectedId);
  };

  const handleAcomodacaoChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = parseInt(event.target.value);
    setSelectedAcomodacao(selectedId);
  };

  const handleCheckInChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckIn(event.target.value);
  };

  const handleCheckOutChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckOut(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Aqui você pode fazer o tratamento para enviar os dados atualizados ao backend
    console.log("Cliente selecionado:", selectedCliente);
    console.log("Acomodação selecionada:", selectedAcomodacao);
    console.log("Check-In:", checkIn);
    console.log("Check-Out:", checkOut);
  };

  return (
    <main className="flex min-h-screen flex-col items-center pt-20 bg-gradient-to-b from-pink-100 to-pink-300">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <Link href="/hospedagens" className="text-blue-500 hover:text-blue-700 mb-4 inline-flex items-center">
          <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
          Voltar para Lista de Hospedagens
        </Link>

        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Editar Hospedagem</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="cliente" className="block text-gray-700 font-semibold mb-2">
              Cliente
            </label>
            <select
              id="cliente"
              className="w-full p-2 border rounded text-gray-700 font-light"
              value={selectedCliente || ""}
              onChange={handleClienteChange}
              required
            >
              <option value="" disabled>
                Selecione um cliente
              </option>
              {clientes.map((cliente) => (
                <option key={cliente.id} value={cliente.id}>
                  {cliente.nome}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="acomodacao" className="block text-gray-700 font-semibold mb-2">
              Acomodação
            </label>
            <select
              id="acomodacao"
              className="w-full p-2 border rounded text-gray-700 font-light mb-2"
              value={selectedAcomodacao || ""}
              onChange={handleAcomodacaoChange}
              required
            >
              <option value="" disabled>
                Selecione uma acomodação
              </option>
              {acomodacoes.map((acomodacao) => (
                <option key={acomodacao.id} value={acomodacao.id}>
                  {acomodacao.nome}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="checkIn" className="block text-gray-700 font-semibold mb-2">
              Check-In
            </label>
            <input
              type="date"
              id="checkIn"
              className="w-full p-2 border rounded"
              value={checkIn}
              onChange={handleCheckInChange}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="checkOut" className="block text-gray-700 font-semibold mb-2">
              Check-Out
            </label>
            <input
              type="date"
              id="checkOut"
              className="w-full p-2 border rounded"
              value={checkOut}
              onChange={handleCheckOutChange}
              required
            />
          </div>

          <button
            type="submit"
            className="bg-green-500 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded"
          >
            Salvar Alterações
          </button>
        </form>
      </div>
    </main>
  );
}
