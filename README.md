# Aluga Porto — Catálogo demonstrativo

Projeto estático em HTML, CSS e JavaScript criado para apresentação ao cliente.

## Recursos

- Layout responsivo para celular, tablet e desktop.
- Catálogo com filtros por categoria e quantidade de pessoas.
- Cards de casas, lanchas e jet skis.
- Modal de detalhes.
- Seleção de vários itens com persistência no navegador (`localStorage`).
- Formulário com data, quantidade de pessoas e observação.
- Geração automática da mensagem e envio pelo WhatsApp.
- Menu mobile e feedback visual por toast.

## Executar

Abra o `index.html` diretamente no navegador ou use um servidor local:

```bash
python3 -m http.server 8000
```

Depois acesse `http://localhost:8000`.

## Alterar os produtos

Edite o array `catalog` em `assets/js/app.js`.

## Alterar o WhatsApp

Edite a constante `WHATSAPP_NUMBER` em `assets/js/app.js`.

## Observação

As imagens atuais são demonstrativas e carregadas por URL. Para produção, substitua pelas fotos reais do cliente e hospede os arquivos localmente ou em storage/CDN.
