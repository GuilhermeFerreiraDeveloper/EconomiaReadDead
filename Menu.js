const prompt = require("prompt-sync")();


const mineradora = [
  { id: 1, nome: "carvao", min: 0.3, max: 0.4 },
  { id: 2, nome: "ferro", min: 0.3, max: 0.4 },
  { id: 3, nome: "quartzo", min: 0.3, max: 0.75 },
  { id: 4, nome: "pedra", min: 0.1, max: 0.15 },
  { id: 5, nome: "ouro", min: 0.5, max: 0.6 },
  { id: 6, nome: "sal", min: 0.1, max: 0.15 },
  { id: 7, nome: "cobre", min: 0.2, max: 0.3 },
  { id: 8, nome: "diamante", min: 0.75, max: 1.5 }
];

function Mineradora() {
  console.log("\n[Itens da Mineradora]");
  mineradora.forEach(mineradora => {
    console.log(mineradora.id, mineradora.nome, mineradora.min, " - ", mineradora.max);
  });
}




const fundicao = [
  { id: 9, nome: "lingote de ferro", min: 2.5, max: 3 },
  { id: 10, nome: "lingote de prata", min: 2.1, max: 2.5 },
  { id: 11, nome: "lingote de cobre", min: 1.15, max: 1.6 },
  { id: 12, nome: "lingote de ouro", min: 3, max: 4 },
  { id: 13, nome: "lingote de aço", min: 2.56, max: 2.56 },
  { id: 14, nome: "bloco de quartzo", min: 0.95, max: 1.4 },
  { id: 15, nome: "minerio de ouro (Lapidado)", min: 1.1, max: 1.6 }
];

function Fundicao() {
  console.log("\n[Itens da Fundição]");
  fundicao.forEach(fundicao => {
    console.log(fundicao.id, fundicao.nome, fundicao.min, " - ", fundicao.max)
  });
}

const ferraria = [
  { id: 16, nome: "ferradura de ouro", min: 8.7, max: 10 },
  { id: 17, nome: "kit reparo de carroça", min: 34, max: 10 },
  { id: 18, nome: "lamina de prata:", min: 3.9, max: 4.2 },
  { id: 19, nome: "machado", min: 9.05, max: 13.4 },
  { id: 20, nome: "prego", min: 0.3, max: 0.45 },
  { id: 21, nome: "pá", min: 11.95, max: 17.95 },
  { id: 22, nome: "tesoura de poda", min: 10.95, max: 12.85 },
  { id: 23, nome: "rastelo", min: 10, max: 12.85 },
  { id: 24, nome: "picareta", min: 5.15, max: 5.13 },
  { id: 25, nome: "martelo de ferro", min: 9.7, max: 14.65 },
  { id: 26, nome: "caixa de ferramenta", min: 3.35, max: 4 },
  { id: 27, nome: "corpo de revolver", min: 5.35, max: 5.6 },
  { id: 28, nome: "corpo de pistola", min: 5.5, max: 5.75 },
  { id: 29, nome: "corpo de rifle", min: 6.25, max: 6.5 },
  { id: 30, nome: "corpo de shotgun", min: 7.9, max: 8.2 },
  { id: 31, nome: "peca de revolver", min: 5.45, max: 5.7 },
  { id: 32, nome: "peca de pistola", min: 4.55, max: 4.8 },
  { id: 33, nome: "peca de shotgun", min: 8, max: 8.3 },
  { id: 34, nome: "faca", min: 9, max: 13.6 },
  { id: 35, nome: "faca de arremesso", min: 2.7, max: 4 },
  { id: 36, nome: "detector de metal", min: 17.4, max: 26.1 }
];

function Ferraria() {
  console.log("\n[Itens da Ferraria]")
  ferraria.forEach(ferraria => {
    console.log(ferraria.id, ferraria.nome, ferraria.min, " - ", ferraria.max)
  });
}

const armaria = [
  { id: 37, nome: "pano de limpeza", min: 1.1, max: 1.65 },
  { id: 38, nome: "revolver de vaqueiro", min: 75, max: 112.5 },
  { id: 39, nome: "revolver doubleAction", min: 85, max: 127.5 },
  { id: 40, nome: "pistola mauser", min: 90, max: 135 },
  { id: 41, nome: "Double barrel shotgun", min: 80, max: 120 },
  { id: 42, nome: "evans repetidora", min: 130, max: 195 },
  { id: 43, nome: "henry repetidora", min: 140, max: 210 },
  { id: 44, nome: "rifle springfield", min: 175, max: 262.5 },
  { id: 45, nome: "municao veloz de pistola (pack/20und)", min: 4, max: 6 },
  { id: 46, nome: "municao veloz de rifle (pack/20und)", min: 2.5, max: 3.75 },
  { id: 47, nome: "municao veloz de revolver (pack/20und)", min: 2.5, max: 3.75 },
  { id: 48, nome: "municao normal de pistola (pack/20und)", min: 2.5, max: 3.75 },
  { id: 49, nome: "municao expressa de rifle (pack/20und)", min: 4, max: 6 },
  { id: 50, nome: "municao expressa de revolver (pack/20und)", min: 2.9, max: 4.75 },
  { id: 51, nome: "municao expressa de pistola (pack/20und)", min: 3.95, max: 5.92 },
  { id: 52, nome: "municao de repetidora (pack/20und)", min: 2.5, max: 3.75 },
  { id: 53, nome: "municao de rifle (pack/20und)", min: 2.2, max: 3.3 },
  { id: 54, nome: "municao simples de rifle (pack/20und)", min: 2.2, max: 3.3 },
  { id: 55, nome: "municao simples de revolver (pack/20und)", min: 2.2, max: 3.3 },
  { id: 56, nome: "municao simples de shotgun (pack/20und)", min: 2.5, max: 3.75 },
  { id: 57, nome: "kit de reparo de armas", min: 30, max: 45 }
]
function Armaria() {
  console.log("\n[Itens da Armaria]")
  armaria.forEach(armaria => {
    console.log(armaria.id, armaria.nome, armaria.min, " - ", armaria.max)
  });
}

const hospital = [
  { id: 58, nome: "bandagem", min: 5, max: 10 },
  { id: 59, nome: "tonico miraculoso", min: 10, max: 15.8 },
  { id: 60, nome: "antidoto", min: 7.7, max: 12 },
  { id: 61, nome: "kit primeiros socorros", min: 15, max: 25 },
  { id: 62, nome: "penincilina", min: 0.65, max: 0.96 }
]

function Hospital() {
  console.log("\n[Itens do Hospital]")
  hospital.forEach(hospital => {
    console.log(hospital.id, hospital.nome, hospital.min, " - ", hospital.max)
  });
}

const tabacaria = [
  { id: 63, nome: "tabaco de mascar", min: 0.65, max: 1 },
  { id: 64, nome: "charuto", min: 1, max: 1.6 },
  { id: 65, nome: "cigarro de palha", min: 0.5, max: 0.8 },
  { id: 66, nome: "tabaco tratado", min: 1.6, max: 2.4 },
  { id: 67, nome: "cigarro", min: 3, max: 0.6 }
]

function Tabacaria() {
  console.log("\n[Itens da Tabacaria]")
  tabacaria.forEach(tabacaria => {
    console.log(tabacaria.id, tabacaria.nome, tabacaria.min, " - ", tabacaria.max)
  });
}

const estabulo = [
  { id: 68, nome: "escova", min: 3.5, max: 4.5 },
  { id: 69, nome: "cenoura", min: 0.4, max: 0.5 },
  { id: 70, nome: "estimulante equino", min: 4.2, max: 5 },
  { id: 71, nome: "reanimador equino", min: 7, max: 9 },
  { id: 72, nome: "injecao de fertilidade", min: 40.3, max: 50.3 },
  { id: 73, nome: "estimulante especial", min: 28, max: 35 },
  { id: 74, nome: "seringa", min: 1.5, max: 2.2 },
  { id: 75, nome: "racao bovina", min: 1.5, max: 2.5 },
  { id: 76, nome: "racao suina", min: 1.5, max: 2.5 },
  { id: 77, nome: "racao caprina", min: 1.5, max: 2.5 },
  { id: 78, nome: "racao aves", min: 1.5, max: 2.5 },
]

function Estabulo() {
  console.log("\n[Itens do Estabulo]")
  estabulo.forEach(estabulo => {
    console.log(estabulo.id, estabulo.nome, estabulo.min, " - ", estabulo.max)
  });
}

const treinamentoCavalo = [
  { id: 79, nome: "treinamento completo(100%)", min: 318, max: 318 },
  { id: 80, nome: "treinamento de velocidade (1 nivel)", min: 32, max: 32 },
  { id: 81, nome: "treinamento de aceleracao(1 nivel)", min: 32, max: 32 },
  { id: 82, nome: "treinamento de manuseio(1 nivel)", min: 32, max: 32 },
]

function TreinamentoCavalo() {
  console.log("\n[Preço de Treinamento de Cavalos]")
  treinamentoCavalo.forEach(treinamentoCavalo => {
    console.log(treinamentoCavalo.id, treinamentoCavalo.nome, treinamentoCavalo.min, " - ", treinamentoCavalo.max)
  });
}

const saloon = [
  { id: 83, nome: "ovos em conserva", min: 1.5, max: 2.15 },
  { id: 84, nome: "wisky", min: 1.75, max: 2.05 },
  { id: 85, nome: "mix de temperos", min: 1, max: 1 },
  { id: 86, nome: "carne seca", min: 0.85, max: 0.85 },
  { id: 87, nome: "garrafa de agua", min: 0.5, max: 1.25 },
  { id: 88, nome: "carne de porco com salada", min: 2.2, max: 2.4 },
  { id: 89, nome: "torta de limao", min: 2.55, max: 2.9 },
  { id: 90, nome: "suco de red uva", min: 0.95, max: 2.1 },
  { id: 91, nome: "cha silvestre", min: 0.9, max: 1.14 },
  { id: 92, nome: "carré de cordeiro ", min: 57, max: 1 },
  { id: 93, nome: "doce de leite", min: 1, max: 1.6 },
  { id: 94, nome: "bife de cervo", min: 1, max: 2 },
  { id: 95, nome: "drink oud dutch", min: 1.1, max: 2.5 },
  { id: 96, nome: "batida de morango", min: 0.85, max: 2.25 },
  { id: 97, nome: "file de jacare", min: 0.6, max: 1 },
  { id: 98, nome: "mousse de leite", min: 1.3, max: 1.9 },
  { id: 99, nome: "la bamba", min: 1.1, max: 2.5 },
  { id: 100, nome: "caipirinha", min: 0.9, max: 1.1 },
  { id: 101, nome: "milk roster", min: 1, max: 2 },
  { id: 102, nome: "frango com pure", min: 1.1, max: 2.25 },
  { id: 103, nome: "bolo de frutas", min: 1.1, max: 2.25 },
  { id: 104, nome: "vinho de menta", min: 0.6, max: 1 },
  { id: 105, nome: "limonada grappin", min: 0.9, max: 1.1 },
  { id: 106, nome: "sorvete de morango", min: 0.87, max: 1.1 },
  { id: 107, nome: "sorvete de uva", min: 0.87, max: 1.1 },
  { id: 108, nome: "sorvete de pessego", min: 0.87, max: 1.1 },
  { id: 109, nome: "geleia de uva", min: 1.57, max: 2.25 },
  { id: 110, nome: "geleia de morango", min: 1.57, max: 2.25 },
  { id: 111, nome: "geleia de pessego", min: 1.57, max: 2.25 }
]

function Saloon() {
  console.log("[Itens do Saloon]")
  saloon.forEach(saloon => {
    console.log(saloon.id, saloon.nome, saloon.min, " - ", saloon.max)
  });
}

const nativos = [
  { id: 112, nome: "arco simples", min: 20, max: 25 },
  { id: 113, nome: "flechas (pack com 20und)", min: 7, max: 8.8 },
  { id: 114, nome: "tocha (1Und por pessoa)", min: 40, max: 40 },
  { id: 115, nome: "laco reforçado", min: 18, max: 22.5 },
  { id: 116, nome: "laco simples", min: 10, max: 12.5 },
  { id: 117, nome: "machado de arremeco", min: 2.5, max: 3.3 },
  { id: 118, nome: "fogueira de sinalização", min: 1, max: 1.25 }
]

function Nativos() {
  console.log("\n[Itens dos Nativos]")
  nativos.forEach(nativos => {
    console.log(nativos.id, nativos.nome, nativos.min, " - ", nativos.max)
  });
}

const artesanato = [
  { id: 119, nome: "capsula de municao", min: 0.5, max: 0.6 },
  { id: 120, nome: "verniz ", min: 0.65, max: 1 },
  { id: 121, nome: "cabo de madeira", min: 0.5, max: 0.75 },
  { id: 122, nome: "balde vazio", min: 1.45, max: 0.75 },
  { id: 123, nome: "alca de couro", min: 0.7, max: 1.1 },
  { id: 124, nome: "curtimento", min: 0.85, max: 1.3 },
  { id: 125, nome: "pele tratada P", min: 0.75, max: 1.15 },
  { id: 126, nome: "pele tratada m", min: 1, max: 1.5 },
  { id: 127, nome: "pele tratada G", min: 1.5, max: 3 },
  { id: 128, nome: "sebo", min: 0.8, max: 1.2 },
  { id: 129, nome: "oleo vegetal", min: 0.6, max: 0.9 },
  { id: 130, nome: "barbante", min: 0.45, max: 0.7 },
  { id: 131, nome: "mochila 10", min: 20, max: 28 },
  { id: 132, nome: "mochila 20", min: 30, max: 37 },
  { id: 133, nome: "linha", min: 0.35, max: 0.5 },
  { id: 134, nome: "bussola", min: 15, max: 20 },
  { id: 135, nome: "pano", min: 0.4, max: 0.6 },
  { id: 136, nome: "capsula plastica", min: 0.5, max: 0.8 },
  { id: 137, nome: "pomada de cabelo", min: 0.5, max: 0.7 },
  { id: 138, nome: "camera fotografica", min: 21, max: 32 },
  { id: 139, nome: "caixote", min: 1.15, max: 1.8 },
  { id: 140, nome: "polvora", min: 0.8, max: 1.2 },
  { id: 141, nome: "glicilina especial", min: 1, max: 1.5 },
  { id: 142, nome: "plastico", min: 0.45, max: 0.7 },
  { id: 143, nome: "mapa", min: 1.3, max: 1.85 },
  { id: 144, nome: "cantil", min: 6.7, max: 10.45 },
  { id: 145, nome: "sabonete", min: 0.7, max: 1 },
  { id: 146, nome: "pedra de amolar", min: 0.9, max: 1.35 },
]

function Artesanato() {
  console.log("\n[Itens do Artesanato]")
  artesanato.forEach(artesanato => {
    console.log(artesanato.id, artesanato.nome, artesanato.min, " - ", artesanato.max)
  })
}

const povoNorte = [
  { id: 147, nome: "carne de porco assada", min: 2, max: 3 },
  { id: 148, nome: "pao de cevada", min: 1.5, max: 2.5 },
  { id: 149, nome: "ensopado de alce", min: 9, max: 14 },
  { id: 150, nome: "hidromel", min: 2.5, max: 3.5 },
  { id: 151, nome: "sidra de maca selvagem", min: 1.2, max: 2.4 },
  { id: 152, nome: "vinho de frutas silvestres", min: 10, max: 15 },
  { id: 153, nome: "mel", min: 0.5, max: 1 },
]

function PovoNorte() {
  console.log("\n[Itens do Povo do Norte]")
  povoNorte.forEach(povoNorte => {
    console.log(povoNorte.id, povoNorte.nome, povoNorte.min, " - ", povoNorte.max)
  })
}

const fazenda = [
  { id: 154, nome: "polpa de morango", min: 0.71, max: 0.78 },
  { id: 155, nome: "polpa de uva", min: 0.71, max: 0.78 },
  { id: 156, nome: "polpa de milho", min: 0.71, max: 0.78 },
  { id: 157, nome: "polpa de pessego", min: 0.51, max: 0.56 },
  { id: 158, nome: "farinha", min: 0.16, max: 0.18 },
  { id: 159, nome: "leite integral", min: 1.17, max: 1.29 },
  { id: 160, nome: "alcool industrial", min: 0.7, max: 0.77 },
  { id: 161, nome: "iorgut", min: 1.74, max: 1.91 },
  { id: 162, nome: "manteiga", min: 0.86, max: 0.95 },
  { id: 163, nome: "queijo", min: 0.81, max: 0.89 },
  { id: 164, nome: "alcool", min: 0.5, max: 0.55 },
  { id: 165, nome: "acucar", min: 0.3, max: 0.35 },
  { id: 166, nome: "sementes (TODAS)", min: 0.3, max: 0.4 },
  { id: 167, nome: "banha", min: 0.3, max: 0.5 },
  { id: 168, nome: "leite", min: 0.3, max: 0.35 },
  { id: 169, nome: "ovo", min: 0.2, max: 0.3 },
  { id: 170, nome: "carne vermelha", min: 0.5, max: 0.6 },
  { id: 171, nome: "carne branca", min: 0.3, max: 0.4 }
]

function Fazenda() {
  console.log("\n[Itens da Fazenda]")
  fazenda.forEach(fazenda => {
    console.log(fazenda.id, fazenda.nome, fazenda.min, " - ", fazenda.max)
  });
}

let sair = false;
do {
  console.log("[Bem vindo ao Menu]\n" +
    "Digite [1] para mostrar o menu de itens de todo condado;\n" +
    "Digite [2] para mostrar o menu da fazenda;\n" +
    "Digite [3] para fechar")
  let opcao1 = parseInt(prompt());

  switch (opcao1) {
    case 1:
      console.log("Escolha a area desejada:\n" +
        "Digite [1] para ver itens da Mineradora\n" +
        "Digite [2] para ver itens da Fundicao\n" +
        "Digite [3] para ver itens da Ferraria\n" +
        "Digite [4] para ver itens da Armaria\n" +
        "Digite [5] para ver itens do Hospital\n" +
        "Digite [6] para ver itens da Tabacaria\n" +
        "Digite [7] para ver itens do Estabulo\n" +
        "Digite [8] para ver itens do Treinamento de Cavalo\n" +
        "Digite [9] para ver itens do Sallon\n" +
        "Digite [10] para ver itens do Nativo\n" +
        "Digite [11] para ver itens do Artesanato\n" +
        "Digite [12] para ver itens do Viking\n" +
        "Digite [13] para ver itens da Fazenda\n"
      );
      let opcao2 = parseInt(prompt());
      switch (opcao2) {
        case 1:
          Mineradora();
          break;
        case 2:
          Fundicao();
          break;
        case 3:
          Ferraria();
          break;
        case 4:
          Armaria();
          break;
        case 5:
          Hospital();
          break;
        case 6:
          Tabacaria();
          break;
        case 7:
          Estabulo();
          break;
        case 8:
          TreinamentoCavalo();
          break;
        case 9:
          Saloon();
          break;
        case 10:
          Nativos();
          break;
        case 11:
          Artesanato();
          break;
        case 12:
          PovoNorte();
          break;
        case 13:
          Fazenda();
          break;
        default:
          console.log("Opção inválida. Por favor, escolha uma opção válida.");
      }

      break;
    case 2:
      console.log("Você escolheu o menu da fazenda.");
      break;
    case 3:
      console.log("Encerrando o programa. Obrigado!");
      sair = true;
      break;
    default:
      console.log("Opção inválida. Por favor, escolha uma opção válida.");
  }
} while (!sair);

