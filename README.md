# Kauan Jetss — Catálogo demonstrativo

Projeto estático em HTML, CSS e JavaScript criado para apresentação ao cliente.

## Recursos

- Layout responsivo para celular, tablet e desktop.
- Catálogo com visual de vitrine em lista, mais próximo de um menu de produtos.
- Filtros por categoria e quantidade de pessoas.
- Cards de casas, lanchas e jet skis.
- Modal de detalhes.
- Seleção de vários itens com persistência no navegador (`localStorage`).
- Painel lateral de pedido com nome, telefone, endereço, serviço, data, hora, pagamento e observação.
- Geração automática da mensagem e envio pelo WhatsApp no formato combinado.
- Menu mobile e feedback visual por toast.

## Executar

Abra o `index.html` diretamente no navegador ou use um servidor local:

```bash
python3 -m http.server 8000
```

Depois acesse `http://localhost:8000`.

## Alterar os produtos

Edite o array `catalog` em `assets/js/app.js`. Cada item pode ter preço fixo ou `Sob consulta`.

## Alterar o WhatsApp

Edite as constantes `WHATSAPP_NUMBER` e `SITE_URL` em `assets/js/app.js`.

## Observação

As imagens atuais são demonstrativas e carregadas por URL. Para produção, substitua pelas fotos reais do cliente e hospede os arquivos localmente ou em storage/CDN.
