"use client"
import React, { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"
import axios from "axios"

interface Cliente {
  id: number
  name: string
}

interface Acomodacao {
  id: number
  nome: string
}

export default function CreateHospedagemPage() {
  const [idHospede, setidHospede] = useState<number | null>(null)
  const [idAcomodacao, setidAcomodacao] = useState<number | null>(null)
  const [checkIn, setCheckIn] = useState("")
  const [checkOut, setCheckOut] = useState("")

  const [clientes, setClientes] = useState<Cliente[]>([])

  const acomodacoes: Acomodacao[] = [
    { id: 1, nome: "Casal Simples" },
    { id: 2, nome: "Família Simples" },
    { id: 3, nome: "Família Mais" },
    { id: 4, nome: "Família Super" },
    { id: 5, nome: "Solteiro Simples" },
    { id: 6, nome: "Solteiro Mais" },
  ]

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/hospedes/list")
        const data = response.data

        setClientes(data)
        console.log(clientes)
      } catch (error) {
        console.error("Erro ao buscar clientes:", error)
      }
    }

    fetchData()
  }, [])

  const handleClienteChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = parseInt(event.target.value)
    setidHospede(selectedId)
  }

  const handleAcomodacaoChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = parseInt(event.target.value)
    setidAcomodacao(selectedId)
  }

  const handleCheckInChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckIn(event.target.value)
  }

  const handleCheckOutChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckOut(event.target.value)
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    let formData = {
      idHospede,
      idAcomodacao,
      checkIn,
      checkOut,
    }
    console.log(formData)
    try {
      const response = await axios.post("http://localhost:8080/hospedagens/create", formData)

      console.log("Resposta do servidor:", response.data)

      window.location.href = "/hospedagens"
    } catch (error) {
      console.error("Erro ao enviar os dados:", error)
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center pt-20 bg-gradient-to-b from-pink-100 to-pink-300">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <Link href="/hospedagens" className="text-blue-500 hover:text-blue-700 mb-4 inline-flex items-center">
          <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
          Voltar para Lista de Hospedagens
        </Link>

        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Criar Nova Hospedagem</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="cliente" className="block text-gray-700 font-semibold mb-2">
              Cliente
            </label>
            <select
              id="cliente"
              className="w-full p-2 border rounded text-gray-700 font-light mb-2"
              value={idHospede || ""}
              onChange={handleClienteChange}
              required
            >
              <option value="" disabled>
                Selecione um cliente
              </option>
              {clientes.map((cliente) => (
                <option key={cliente.id} value={cliente.id}>
                  {cliente.name}
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
              value={idAcomodacao || ""}
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
            Criar Hospedagem
          </button>
        </form>
      </div>
    </main>
  )
}
