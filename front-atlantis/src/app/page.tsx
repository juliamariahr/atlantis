import Image from "next/image"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col pt-20 bg-gradient-to-b from-pink-100 to-pink-300">
      <header className="text-center mb-6">
        <Image
          className="mx-auto"
          src="/atlantisicon.png"
          width={100}
          height={100}
          alt="Onda de praia e resort"
        />
        <h1 className="text-4xl font-extrabold text-white">Bem-vindo ao Sistema Atlantis</h1>
        <p className="text-lg text-white">
          Seu gerenciador de hóspedes, acomodações e registro de hospedagens.
        </p>
      </header>

      <section className="max-w-3xl mx-auto p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Sobre o Sistema Atlantis</h2>
        <p className="text-gray-800 my-auto">
          O Sistema Atlantis é uma plataforma <b>avançada</b> para gerenciar todos os
          aspectos do seu resort. Com recursos de cadastro de hóspedes, atribuição de acomodações e registro
          de hospedagens, estamos comprometidos em proporcionar uma experiência de gerenciamento eficiente e
          simplificada.
        </p>
      </section>

      <footer className="text-center mt-20 text-white">
        &copy; {new Date().getFullYear()} Sistema Atlantis. Todos os direitos reservados.
      </footer>
    </main>
  )
}
