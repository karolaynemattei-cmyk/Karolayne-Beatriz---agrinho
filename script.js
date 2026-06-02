#!/bin/bash
# ==============================================================================
# SCRIPT DE CONFIGURAÇÃO DE REPOSITÓRIO - AGRINHO 2026
# ==============================================================================
# Este script automatiza a criação da estrutura de pastas e inicialização do Git.

echo "🌱 Iniciando a configuração do projeto Agrinho 2026..."

# 1. Verificar se o diretório já existe
if [ -d "agrinho-2026" ]; then
    echo "⚠️  A pasta 'agrinho-2026' já existe."
    read -p "Deseja sobrescrever? (s/N): " confirm
    if [[ "$confirm" != [sS] ]]; then
        echo "Operação cancelada pelo usuário."
        exit 1
    fi
    rm -rf agrinho-2026
fi

# 2. Criando a estrutura de diretórios
echo "📂 Criando estrutura de pastas..."
mkdir -p agrinho-2026/{documentos,pesquisa,src,assets/{imagens,logos,graficos,videos}}

cd agrinho-2026

# 3. Criando o arquivo README.md principal
echo "📝 Criando README.md..."
cat << 'EOF' > README.md
# 🌱 Projeto Agrinho 2026

Bem-vindo ao repositório do projeto desenvolvido para o **Programa Agrinho 2026**!

Este espaço é dedicado ao armazenamento, organização e desenvolvimento de todas as etapas do nosso trabalho, unindo **tecnologia, educação e sustentabilidade**.

---

## 📂 Estrutura do Repositório

* **`📁 documentos/`** — Relatórios, artigos, PDFs e documentos oficiais
* **`📁 pesquisa/`** — Dados, questionários, entrevistas e referências
* **`📁 src/`** — Códigos, apresentações, slides e materiais criativos
* **`📁 assets/`** — Recursos visuais
  * `imagens/` — Fotos e imagens gerais
  * `logos/` — Logotipos e identidade visual
  * `graficos/` — Gráficos e infográficos
  * `videos/` — Vídeos e animações

---

## 💡 Sobre o Projeto

A tecnologia tem se tornado uma grande aliada da agricultura familiar e da sustentabilidade. Neste projeto, exploramos o uso de **tecnologias acessíveis** como sensores de umidade do solo, aplicativos de monitoramento, drones de baixo custo e sistemas de irrigação inteligente, com o objetivo de aumentar a produtividade, reduzir o desperdício de água e promover práticas mais ecológicas nas pequenas propriedades rurais.

O foco principal é mostrar como a tecnologia pode ser democratizada, tornando-a simples e viável para agricultores familiares e escolas do campo.

---

## 👥 Equipe

* **Aluno 1** — *Função (ex: Líder / Pesquisador)*
* **Aluno 2** — *Função (ex: Designer / Desenvolvedor)*
* **Professor(a) Orientador(a):** Nome do Professor

---

🌿 *Desenvolvido com inovação e sustentabilidade para o Agrinho 2026.*
EOF

# 4. Criando arquivos .gitkeep
echo "🔖 Criando arquivos .gitkeep..."
touch documentos/.gitkeep
touch pesquisa/.gitkeep
touch src/.gitkeep
touch assets/imagens/.gitkeep
touch assets/logos/.gitkeep
touch assets/graficos/.gitkeep
touch assets/videos/.gitkeep

# 5. Criando .gitignore
echo "📛 Criando .gitignore..."
cat << 'EOF' > .gitignore
# Arquivos temporários
*.tmp
*.bak
.DS_Store
Thumbs.db

# Ambientes virtuais
venv/
__pycache__/
*.pyc

# Arquivos grandes
*.zip
*.rar
*.7z
EOF

# 6. Inicializando o Git
echo "🚀 Inicializando repositório Git..."
git init
git branch -M main

git add .
git commit -m "Initial commit: Estrutura base do Projeto Agrinho 2026"

echo ""
echo "✅ Projeto configurado com sucesso!"
echo "============================================================"
echo "📍 Próximos passos:"
echo ""
echo "1. Crie um repositório vazio no GitHub chamado 'agrinho-2026'"
echo "2. Execute os seguintes comandos:"
echo ""
echo "   git remote add origin https://github.com/SEU-USUARIO/agrinho-2026.git"
echo "   git push -u origin main"
echo ""
echo "============================================================"
