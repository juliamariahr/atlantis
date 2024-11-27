'use client'
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

interface Guest {
  name: string;
  age: string;
  country: string;
}

export default function EditGuestPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params; // Obtendo o ID da URL.

  const initialGuest: Guest = {
    name: '',
    age: '',
    country: '',
  };

  const [guest, setGuest] = useState(initialGuest);

  useEffect(() => {
    if (id) {
      // Aqui você pode buscar os dados do hóspede pelo ID, se necessário.
      // Por exemplo, fazer uma chamada API para obter informações desse hóspede.
    }
  }, [id]);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGuest({ ...guest, name: event.target.value });
  };

  const handleAgeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGuest({ ...guest, age: event.target.value });
  };

  const handleCountryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGuest({ ...guest, country: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Adicionar lógica para se comunicar com o BackEnd');
    console.log(guest.name, guest.age, guest.country);
  };

  return (
    <main className="flex min-h-screen flex-col items-center pt-20 bg-gradient-to-b from-pink-100 to-pink-300">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <Link href="/hospedes" className="text-blue-500 hover:text-blue-700 mb-4 inline-flex items-center">
          <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
          Voltar para Lista de Hóspedes
        </Link>

        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Editar Hóspede</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Nome</label>
            <input
              type="text"
              id="name"
              className="w-full p-2 border rounded"
              value={guest.name}
              onChange={handleNameChange}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="age" className="block text-gray-700 font-semibold mb-2">Idade</label>
            <input
              type="number"
              id="age"
              className="w-full p-2 border rounded"
              value={guest.age}
              onChange={handleAgeChange}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="country" className="block text-gray-700 font-semibold mb-2">País</label>
            <input
              type="text"
              id="country"
              className="w-full p-2 border rounded"
              value={guest.country}
              onChange={handleCountryChange}
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
