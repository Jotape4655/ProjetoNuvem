// worker.js

export default {
  async fetch(request) {

    const horaDoServidor = new Date().toLocaleString("pt-BR", {
      timeZone: "America/Sao_Paulo",
    });

    const frases = [
      "Hoje é um ótimo dia para aprender algo novo!",
      "Persistência leva ao sucesso.",
      "Nunca desista dos seus objetivos.",
      "Cada desafio é uma oportunidade de crescer.",
      "Pequenos passos levam a grandes conquistas."
    ];

    const fraseDoDia =
      frases[Math.floor(Math.random() * frases.length)];

    const corpo = {
      mensagem: "Olá da nuvem!",
      horaDoServidor,
      fraseDoDia
    };

    return new Response(JSON.stringify(corpo), {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
      },
    });

  },
};