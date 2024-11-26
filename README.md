# Sistema de Inventário e Catálogo de Itens

Este projeto é um sistema de inventário que organiza e exibe itens categorizados de diferentes setores, como mineradora, fundição, ferraria, armaria, hospital, tabacaria, estábulo e treinamento de cavalos.

## Funcionalidades

O sistema permite:
- Listar os itens disponíveis em cada setor.
- Mostrar o nome, o intervalo de preço mínimo e máximo de cada item.

Cada setor possui sua própria função que imprime os itens e seus detalhes.

## Estrutura do Código

### Categorias de Itens

O código organiza os itens em arrays de objetos. Cada objeto representa um item com as seguintes propriedades:
- `id`: Identificação única do item.
- `nome`: Nome do item.
- `min`: Valor mínimo do item.
- `max`: Valor máximo do item.

### Categorias Disponíveis

- **Mineradora**: Itens relacionados à mineração (ex.: carvão, ferro, diamante).
- **Fundição**: Produtos derivados de metais (ex.: lingotes e blocos).
- **Ferraria**: Ferramentas e peças de uso geral (ex.: machado, picareta, martelo).
- **Armaria**: Armas e munições (ex.: revólveres, rifles, munições).
- **Hospital**: Itens médicos (ex.: bandagens, kits de primeiros socorros).
- **Tabacaria**: Produtos relacionados ao tabaco (ex.: charutos, cigarros).
- **Estábulo**: Itens e alimentos para cuidados de animais (ex.: cenouras, ração).
- **Treinamento de Cavalos**: Serviços de treinamento para cavalos (ex.: treinamento de velocidade).

### Funções de Listagem

Cada categoria possui uma função que imprime os itens no console.

