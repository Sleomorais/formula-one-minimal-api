# 🏎️ Formula One Minimal API

Uma **Minimal API** construída com **Fastify**, que disponibiliza dados sobre **equipes** e **pilotos da Fórmula 1 (temporada 2026)**.  
A API permite listar todos os times e pilotos, além de buscar por ID.

---

## 🚀 Tecnologias utilizadas

- ⚡ **Fastify** – servidor HTTP performático e minimalista  
- 🔓 **@fastify/cors** – habilitação de CORS para requisições externas  
- 🧩 **TypeScript** – tipagem estática  
- ▶️ **tsx** – execução em desenvolvimento  
- 📦 **tsup** – build para produção  

> Este projeto segue o conceito de **Minimal API**: simples, enxuto e direto ao ponto.

---

## 🚨 Executar o projeto 
 - ⚡ **npm install** – instalar as dependencias
 - ⚡ **npm run start:dev** – executar no ambiente de desenvolvimento
 - ⚡ **npm run start:watch** – executar no ambiente de desenvolvimento com watch
 - ⚡ **npm run start:dist** – versão compilada


## 🌐 Endpoints Disponíveis
A API trabalha com dois tipos de recursos:

- 🏎️ **teams** – equipes da Fórmula 1  
- 👨‍🚀 **drivers** – pilotos da temporada 2026  

Todos os retornos são em **JSON**.

---

### 📌 Listar todas as equipes

**GET** `/teams`

Retorna todas as equipes cadastradas.

**Exemplo de resposta:**

```json
{
  "teams": [
    { "id": 1, "name": "Ferrari", "country": "Italy" },
    { "id": 2, "name": "Mercedes", "country": "Germany" }
  ]
}
```

---

### 📌 Buscar equipe por ID

**GET** `/teams/:id`

**Parâmetros**

| Nome | Tipo | Descrição |
|------|------|-----------|
| id | number | ID da equipe |

**Resposta 200 – sucesso**

```json
{ "id": 1, "name": "Ferrari", "country": "Italy" }
```

**Resposta 404 – não encontrada**

```json
{ "message": "Team not found" }
```

---

### 📌 Listar todos os pilotos

**GET** `/drivers`

Retorna todos os pilotos com:

- id
- name
- team
- nationality

**Exemplo de resposta:**

```json
{
  "drivers": [
    {
      "id": 1,
      "name": "Lando Norris",
      "team": "McLaren",
      "nationality": "British"
    }
  ]
}
```

---

### 📌 Buscar piloto por ID

**GET** `/drivers/:id`

**Parâmetros**

| Nome | Tipo | Descrição |
|------|------|-----------|
| id | number | ID do piloto |

**Resposta 200 – sucesso**

```json
{
  "id": 5,
  "name": "Max Verstappen",
  "team": "Red Bull Racing",
  "nationality": "Dutch"
}
```

**Resposta 404 – não encontrado**

```json
{ "message": "Driver not found" }
```

---

## ✅ Status de execução

- Porta padrão: **3000**
- URL base: `http://localhost:3000`
