# Automação de Testes com Playwright   

![CI](https://github.com/user-attachments/assets/5bb5ed54-45b0-49a2-8a8b-79ade80f9a22)


### [Acesse o playwright Test Report](https://vitoriarx.github.io/automacaoServeRest-playwright/)
--- 
Projeto de automação de testes end-to-end utilizando [**Playwright**](https://playwright.dev/) e integração contínua com **GitHub Actions**.  
O objetivo é validar os principais fluxos, garantindo qualidade e confiança nas entregas.

---

## 🚀 Tecnologias utilizadas
- [Node.js](https://nodejs.org/)  
- [Playwright](https://playwright.dev/)  
- [TypeScript](https://www.typescriptlang.org/)  
- [GitHub Actions](https://docs.github.com/pt/actions) – CI/CD  
- [GitHub Pages](https://pages.github.com/) – publicação de relatórios  

---
```bash
## 📂 Estrutura do projeto

├── .github/workflows/ # Pipelines CI/CD
│ ├── playwright.yml # Executa os testes e gera relatórios
│ └── report-pages.yml # Publica relatórios no GitHub Pages
├── tests/ # Casos de teste automatizados
├── playwright.config.ts # Configuração do Playwright
├── package.json
└── README.md
```

---

## ⚙️ Como executar localmente

1. Clone este repositório:
```bash
git clone https://github.com/SEU-USUARIO/SEU-REPO.git
cd SEU-REPO
```
   
2. Instale as dependências:
```bash
npm install
```

3. Instale os navegadores suportados:
```bash
npx playwright install
```

4.Rode os testes:
```bash
npx playwright test
```

5.Visualize o relatório local:
```bash
npx playwright show-report
```
---

🔄 CI/CD  
Este projeto está integrado ao GitHub Actions:    
- A cada push ou pull request na branch main ou master:    
✅ Os testes são executados em Ubuntu (máquina virtual)   
📊 Um relatório HTML é gerado   
🌐 O relatório é publicado automaticamente via GitHub Pages

--- 
