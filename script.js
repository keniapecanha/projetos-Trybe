const cursos = [
  { nome: "Desenvolvimento Web Full Stack", instituicao: "Trybe", carga: "1.500h" },
  { nome: "Graduação em Tecnologia de Análise e Desenvolvimento de Sistemas", instituicao: "FAESA", carga: " " },
];

const projetos = [
  { nome: "Portfólio Web", descricao: "Meu site pessoal com HTML, CSS e JS", link: "https://github.com/keniapecanha/keniapecanha.github.io" },
];

// Adiciona cursos
const listaCursos = document.getElementById("lista-cursos");
cursos.forEach(curso => {
  const li = document.createElement("li");
  li.textContent = `${curso.nome} — ${curso.instituicao} (${curso.carga})`;
  listaCursos.appendChild(li);
});

// Adiciona projetos
const listaProjetos = document.getElementById("lista-projetos");
projetos.forEach(p => {
  const div = document.createElement("div");
  div.classList.add("projeto");
  div.innerHTML = `
    <h3>${p.nome}</h3>
    <p>${p.descricao}</p>
    <a href="${p.link}" target="_blank">Ver no GitHub</a>
  `;
  listaProjetos.appendChild(div);
});
