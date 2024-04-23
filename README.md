
# Pet-Laços - Projeto de Site de Adoção de Animais <img src="view/assets/Vertical_-_White.png" align="right"></img>

Bem-vindo ao nosso projeto de site de adoção de animais! Este repositório contém os arquivos e recursos para o desenvolvimento do site.

<h2>Sumário</h2>

- [Pet-Laços - Projeto de Site de Adoção de Animais ](#pet-laços---projeto-de-site-de-adoção-de-animais-)
  - [Objetivo](#objetivo)
  - [Funcionalidades Planejadas](#funcionalidades-planejadas)
  - [Tecnologias Utilizadas](#tecnologias-utilizadas)
  - [Autor](#autor)
- [Orientações do código 👨‍💻👩‍💻](#orientações-do-código-)
  - [Fontes](#fontes)
  - [Cores](#cores)
  - [Componentes](#componentes)
    - [Header - NavBar (Barra de Navegação)](#header---navbar-barra-de-navegação)
    - [Footer (Rodapé)](#footer-rodapé)


## Objetivo
O objetivo deste projeto é criar uma plataforma online onde pessoas interessadas em adotar animais possam encontrar facilmente animais disponíveis para adoção. Queremos facilitar o processo de adoção, conectando animais necessitados a lares amorosos.

## Funcionalidades Planejadas
1. Listagem de animais disponíveis para adoção.
2. Detalhes sobre cada animal, incluindo fotos, idade, raça, temperamento e informações de contato do responsável pela adoção.
3. Formulário de contato para solicitar mais informações sobre um animal específico.
4. Página de informações sobre o processo de adoção e responsabilidades dos adotantes.
5. Seção de depoimentos de adotantes anteriores.
6. Possibilidade para responsáveis de animais resgatados cadastrarem novos animais para adoção.

## Tecnologias Utilizadas
- HTML5, CSS3, JavaScript para a estrutura, estilo e interatividade do site.
- Frameworks ou bibliotecas adicionais podem ser considerados conforme a necessidade do projeto.

## Autor
Este projeto está sendo desenvolvido por Equipe Pet-Laços. A equipe Conta com os seguintes integrantes:

- **Guilherme Henrique**;
- **Caio Luppo**;
- **Kariny Lima**;
- **Rogerio Sem Sobrenome**.


Vamos trabalhar juntos para criar um ambiente melhor para os animais necessitados!

**Nota:** Este README é um esboço inicial e será atualizado conforme o desenvolvimento do projeto avançar.

---

# Orientações do código 👨‍💻👩‍💻

Esta seção servirá como guia para utilização dos recursos do código para a equipe.

## Fontes

Ao criar um elemento de texto, independente se for h1, h2, ou qualquer outra coisa, basta colocar a classe com o nome da tipografia desejada. São elas:
- **displayFont** - Utilizada em textos grandes que são apenas para destacar alguma frase, por exemplo o lema do site;
- **titleFont** - Utilizada para títulos grandes  (Ex: "Dê uma olhada!");
- **sectionTitleFont** - Utilizada para títulos de seções ou subtítulos;
- **sectionSubtitleFont** - Utilizada para subtítulos de seções;
- **paragraphFont** - Utilizada em textos de parágrafos. É o texto padrão quando vai se escrever algo;
- **legendFont** - Usada em coisas sem muita ênfase, ou textos pequenos. Ex: Footer.

Exemplo de utilização:
```html
<h1 class="titleFont classeCustomizada">Título da Página</h1>
<!-- A separação das classes é feita por ESPAÇO. Então, a "classeCustomizada",
representa uma classe que você precisaria para uma modificação sua. -->
```

## Cores

As cores disponíveis estão listadas no Figma. Para verificar qual cor deve ser usada, basta clicar no componente colorido e ver qual cor esta setada nele. Após isso, no css, deve-se utilizar a cor utilizando a função "var(--valor)".

Por exemplo, no botão "Cadastrar-se", temos a cor "Casca de Laranja" segundo o Figma. Como se trata de um botão laranja, cujo o estilo é utilizado mais vezes, criaremos uma classe chamada "orangeButton":

```css
/*Botão Laranja*/
.orangeButton {
    background-color: var(--cascaLaranja);
}
```

## Componentes
Os componentes, localizados em "/view/components", são códigos reutilizados em todo o site ou em boa parte.

### Header - NavBar (Barra de Navegação)
Utilização:
```html
<main>
    <!-- Header ⬇ -->
    <header-component></header-component>
    <script src="/view/components/header.js"></script>
    <!-- Restante do código... -->
</main>
```

### Footer (Rodapé)
Utilização:
```html
<main>
    <!-- Header ⬇ -->
    <footer-component></footer-component>
    <script src="/view/components/footer.js"></script>
    <!-- Restante do código... -->
</main>
```