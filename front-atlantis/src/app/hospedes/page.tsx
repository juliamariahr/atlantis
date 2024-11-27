"use client"
import React, { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEdit, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"
import axios from "axios"

interface Guest {
  id: number
  name: string
  age: number
  country: string
}

export default function EditGuestPage() {
  const [guests, setGuests] = useState<Guest[]>([]);

  useEffect(() => {
    const fetchGuests = async () => {
      try {
        const response = await axios.get("http://localhost:8080/hospedes/list");
        const fetchedGuests = response.data; 

        setGuests(fetchedGuests);
      } catch (error) {
        console.error("Erro ao buscar hóspedes:", error);
      }
    };

    fetchGuests();
  }, []); 

  const handleDelete = async (id: number, name: string) => {
    const confirmed = window.confirm(`Tem certeza que deseja excluir o usuário "${name}"?`);
  
    if (confirmed) {
      try {
        await axios.delete(`http://localhost:8080/hospedes/${id}`);
        setGuests((prevGuests) => prevGuests.filter((guest) => guest.id !== id));
      } catch (error) {
        console.error("Erro ao excluir o hóspede:", error);
      }
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center pt-20 bg-gradient-to-b from-pink-100 to-pink-300">
      <div className="w-full max-w-3xl bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Hóspedes</h2>

        <div className="mb-4 flex justify-end">
          <Link href="/hospedes/create" className="flex items-center text-green-500 hover:text-green-700">
            <FontAwesomeIcon icon={faPlus} className="mr-2" />
            Criar novo
          </Link>
        </div>

        {guests.length === 0 ? (
          <p className="text-gray-600 text-center">Você ainda não possui nenhum hóspede, cadastre um novo!</p>
        ) : (
          <table className="w-full border-collapse text-black">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-2 px-4 text-left w-2/5">Nome</th>
                <th className="py-2 px-4 text-left">Idade</th>
                <th className="py-2 px-4 text-left">País</th>
                <th className="py-2 px-4 text-center">Ações</th>
              </tr>
            </thead>
            <tbody>
              {guests.map((guest, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : ""}>
                  <td className="py-2 px-4">{guest.name}</td>
                  <td className="py-2 px-4">{guest.age}</td>
                  <td className="py-2 px-4">{guest.country}</td>
                  <td className="py-2 px-4">
                    <Link
                      href={`/hospedes/edit/${guest.id}`}
                      className="text-blue-500 hover:text-blue-700 mr-2 pl-12"
                    >
                      <FontAwesomeIcon icon={faEdit} />
                    </Link>
                    <button
                      className="text-red-500 hover:text-red-700 pl-4"
                      onClick={() => handleDelete(guest.id, guest.name)}
                    >
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
  )
}
