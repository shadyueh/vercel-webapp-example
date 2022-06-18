# Imagem de Origem
FROM node:16.15.1-alpine
# Diretório de trabalho(é onde a aplicação ficará dentro do container).
WORKDIR /app
# Copiando a app para o container
COPY . ./
# Adicionando /app/node_modules/.bin para o $PATH
ENV PATH /app/node_modules/.bin:$PATH
# Instalando dependências da aplicação e armazenando em cache.
RUN npm install
# Inicializa a aplicação
CMD ["npm", "run", "dev"]