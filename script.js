#!/bin/bash

# ==============================================================================
# SCRIPT DE CONFIGURAÇÃO DO SITE - AGRINHO 2026
# ==============================================================================

echo "🌱 Criando a estrutura do site Agrinho 2026..."
sleep 1

# 1. Criando pastas do projeto web
mkdir -p agrinho-site-2026/{css,js,assets/imagens}
cd agrinho-site-2026

# 2. Criando o arquivo index.html (Página Principal)
echo "🌐 Gerando index.html..."
cat << 'EOF' > index.html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Agrinho 2026 - Inovação e Sustentabilidade</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-stone-50 text-stone-800 font-sans">

    <nav class="bg-green-700 text-white p-4 shadow-md">
        <div class="container mx-auto flex justify-between items-center">
            <h1 class="text-xl font-bold flex items-center gap-2">🌱 Agrinho 2026</h1>
            <ul class="flex gap-6">
                <li><a href="#sobre" class="hover:underline">Sobre</a></li>
                <li><a href="#projeto" class="hover:underline">O Projeto</a></li>
                <li><a href="#equipe" class="hover:underline">Equipe</a></li>
            </ul>
        </div>
    </nav>

    <header class="bg-gradient-to-b from-green-600 to-green-800 text-white py-20 px-4 text-center">
        <div class="max-w-3xl mx-auto">
            <h2 class="text-4xl md:text-5xl font-extrabold mb-4">Sustentabilidade e Tecnologia no Campo</h2>
            <p class="text-lg md:text-xl text-green-100 mb-8">Conectando a educação escolar às transformações e inovações do ecossistema agrícola.</p>
            <a href="#projeto" class="bg-amber-500 hover:bg-amber-600 text-stone-900 font-bold py-3 px-6 rounded-lg transition shadow-lg">Conheça nossa ideia</a>
        </div>
    </header>

    <section id="sobre" class="py-16 container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
            <h3 class="text-3xl font-bold text-green-800 mb-4">O Programa Agrinho</h3>
            <p class="text-stone-600 leading-relaxed">
                O Agrinho é uma iniciativa que incentiva a pesquisa, a criatividade e o desenvolvimento de soluções voltadas para o campo. Em 2026, focamos em como as novas tecnologias e práticas sustentáveis podem garantir a segurança alimentar e a preservação ambiental.
            </p>
        </div>
    </section>

    <section id="projeto" class="bg-white py-16 border-t border-b border-stone-200">
        <div class="container mx-auto px-4">
            <h3 class="text-3xl font-bold text-center text-green-800 mb-12">Nossa Proposta</h3>
            <div class="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                
                <div class="bg-stone-50 p-6 rounded-xl shadow border border-stone-100">
                    <div class="text-3xl mb-3">💧</div>
                    <h4 class="text-xl font-bold mb-2">Uso da Água</h4>
                    <p class="text-stone-600 text-sm">Métodos inteligentes e manejo eficiente para evitar o desperdício na irrigação.</p>
                </div>

                <div class="bg-stone-50 p-6 rounded-xl shadow border border-stone-100">
                    <div class="text-3xl mb-3">🤖</div>
                    <h4 class="text-xl font-bold mb-2">Tecnologia</h4>
                    <p class="text-stone-600 text-sm">Aplicação de pequenos sensores e automação acessível para a agricultura familiar.</p>
                </div>

                <div class="bg-stone-50 p-6 rounded-xl shadow border border-stone-100">
                    <div class="text-3xl mb-3">🍃</div>
                    <h4 class="text-xl font-bold mb-2">Consciência</h4>
                    <p class="text-stone-600 text-sm">Ações educativas para integrar a comunidade escolar e os produtores locais.</p>
                </div>

            </div>
        </div>
    </section>

    <section id="equipe" class="py-16 container mx-auto px-4 text-center">
        <h3 class="text-3xl font-bold text-green-800 mb-8">Quem Faz Acontecer</h3>
        <div class="flex flex-wrap justify-center gap-12">
            <div>
                <div class="w-24 h-24 bg-stone-300 rounded-full mx-auto mb-3 flex items-center justify-center text-xl font-bold text-stone-600">A1</div>
                <h5 class="font-bold">Aluno(a) 1</h5>
                <p class="text-xs text-stone-500">Pesquisa e Conteúdo</p>
            </div>
            <div>
                <div class="w-24 h-24 bg-stone-300 rounded-full mx-auto mb-3 flex items-center justify-center text-xl font-bold text-stone-600">A2</div>
                <h5 class="font-bold">Aluno(a) 2</h5>
                <p class="text-xs text-stone-500">Desenvolvimento Web</p>
            </div>
            <div>
                <div class="w-24 h-24 bg-green-200 rounded-full mx-auto mb-3 flex items-center justify-center text-xl font-bold text-green-700">PR</div>
                <h5 class="font-bold">Professor(a)</h5>
                <p class="text-xs text-stone-500">Orientador(a)</p>
            </div>
        </div>
    </section>

    <footer class="bg-stone-900 text-stone-400 py-8 text-center text-sm border-t border-stone-800">
        <p>&copy; 2026 - Projeto Escolar para o Programa Agrinho. Todos os direitos reservados.</p>
    </footer>

</body>
</html>
EOF

# 3. Criando arquivos de suporte vazios
echo "🎨 Criando arquivos auxiliares de estilo e script..."
touch css/style.css
touch js/script.js
touch assets/imagens/.gitkeep

# 4. Criando o README.md explicativo para o GitHub
echo "📝 Gerando README.md..."
cat << 'EOF' > README.md
# 🌐 Site Oficial - Agrinho 2026

Repositório destinado ao código-fonte do site desenvolvido para o **Programa Agrinho 2026**.

## 🚀 Como visualizar o site?
Este projeto foi configurado para ser publicado via **GitHub Pages**. Assim que o deploy estiver ativo, o link estará disponível nas configurações do repositório.

## 🛠️ Tecnologias Utilizadas
* HTML5
* Tailwind CSS (via CDN)
* JavaScript (Estrutura inicial)

## 📁 Estrutura de Pastas
* `/css` - Estilos customizados adicionais
* `/js` - Scripts de interatividade
* `/assets` - Imagens e mídias do site
* `index.html` - Página principal do projeto
EOF

# 5. Inicializando o Git
echo "🚀 Inicializando repositório Git..."
git init
git checkout -b main
git add .
git commit -m "Initial commit: Estrutura do site do Agrinho 2026"

echo "--------------------------------------------------------"
echo "✅ Estrutura criada com sucesso na pasta 'agrinho-site-2026'!"
echo "📍 Próximos passos:"
echo "  1. Entre na pasta: cd agrinho-site-2026"
echo "  2. Crie um repositório no seu GitHub chamado 'agrinho-site-2026'"
echo "  3. Vincule e envie o código usando os comandos:"
echo "     git remote add origin https://github.com/SEU-USUARIO/agrinho-site-2026.git"
echo "     git push -u origin main"
echo "  4. No GitHub, vá em Settings > Pages e ative a branch 'main' para publicar o site!"
echo "--------------------------------------------------------"
