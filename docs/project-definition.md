# Documento de Definição de Projeto — Sorteio FIFA

**Versão:** 1.0
**Data:** 2026-03-19
**Status:** Definido

---

## 1. Visão Geral

Aplicação web pública para realizar sorteio de times entre participantes de campeonatos de futebol de videogame (FIFA). Substitui o processo manual feito com papeis, trazendo praticidade e uma interface compartilhável via print.

---

## 2. Público-alvo

- Uso público (qualquer pessoa pode acessar o link)
- Um usuário assume o papel de **admin** sem necessidade de autenticação formal
- Contexto de uso: grupo de amigos reunidos fisicamente para iniciar um campeonato

---

## 3. Funcionalidades

### 3.1 Cadastro (feito pelo admin)
- Inserir nomes dos **participantes** (um por vez ou em lista)
- Inserir nomes dos **times** livremente (não são fixos, podem ser qualquer nome)
- A quantidade de times deve ser **igual** à quantidade de participantes
- Validação: impedir sorteio se as quantidades forem diferentes

### 3.2 Sorteio
- Lógica: cada participante recebe exatamente **um time** (sorteio aleatório 1:1)
- Sem restrições ou regras especiais de distribuição
- Resultado exibido **de uma vez**, sem animações ou revelações graduais

### 3.3 Resultado
- Exibição clara do par **Participante → Time**
- Otimizado para **captura de tela (print)** para compartilhamento (ex: WhatsApp)
- Não há persistência do resultado — ao fechar/recarregar, os dados são perdidos

### 3.4 Sessão
- Um campeonato por vez
- Botão para **resetar** e iniciar um novo sorteio
- Dados mantidos em **localStorage** durante a sessão

---

## 4. Fora do Escopo (por ora)

- Login/autenticação de admin
- Múltiplos campeonatos simultâneos
- Histórico de campeonatos anteriores
- Potes, fases, confrontos ou chaveamento
- Animações de sorteio
- Backend, API ou banco de dados externo

---

## 5. Requisitos Não-Funcionais

| Requisito | Detalhe |
|---|---|
| Responsividade | Funciona em celulares e desktops (qualquer tamanho de tela) |
| Tema | Escuro, cores sóbrias, visual simples e funcional |
| Performance | Leve, sem dependências pesadas além do stack definido |
| Offline | Pode funcionar offline (sem chamadas externas) |

---

## 6. Stack Tecnológico

| Camada | Tecnologia |
|---|---|
| Framework | React |
| Linguagem | TypeScript |
| Estilização | Tailwind CSS |
| Persistência | localStorage (apenas sessão atual) |
| Deploy | GitHub Pages |
| Backend | Nenhum |

---

## 7. Identidade

- **Nome:** Sorteio FIFA (ou similar genérico)
- **Tema visual:** Escuro, minimalista, funcional
- **Paleta sugerida:** Tons de cinza escuro, verde ou azul como cor de destaque

---

## 8. Fluxo Principal

```
[Admin acessa o app]
        ↓
[Cadastra lista de participantes]
        ↓
[Cadastra lista de times]
        ↓
[Validação: qtd participantes == qtd times?]
        ↓ sim
[Clica em "Sortear"]
        ↓
[Resultado exibido: Participante → Time]
        ↓
[Admin/grupo tira print e compartilha]
        ↓
[Opção de resetar para novo sorteio]
```

---

## 9. Telas Previstas

1. **Tela principal / Setup** — formulário para cadastro de participantes e times
2. **Tela de resultado** — exibição do sorteio em formato limpo, otimizado para print

---

## 10. Decisões e Justificativas

| Decisão | Justificativa |
|---|---|
| Sem login/senha | Admin está presente fisicamente; autenticação seria fricção desnecessária |
| localStorage sem backend | Simplicidade; dados não precisam persistir além da sessão |
| GitHub Pages | Hospedagem gratuita, compatível com React (via build estático) |
| Resultado direto (sem animação) | Foco em funcionalidade; grupo está presente e não precisa de dramaticidade |
| Nomes de times livres | Times podem ser personalizados/editados no FIFA |
