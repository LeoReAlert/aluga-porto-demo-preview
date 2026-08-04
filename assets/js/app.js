const SITE_URL = 'https://alugaporto.com.br';
const WHATSAPP_NUMBER = '5544991416218';
const CURRENCY = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL'
});

const catalog = [
  {
    id: 1,
    type: 'casa',
    badge: 'Mais procurada',
    title: 'Casa Porto Rico Premium',
    location: 'Porto Rico - PR',
    people: 12,
    price: 'Sob consulta',
    priceValue: null,
    priceLabel: 'diária a partir de',
    description: 'Casa ampla para família e amigos, com área de lazer completa e ótima localização.',
    features: ['Até 12 pessoas', 'Piscina', 'Churrasqueira', 'Wi-Fi'],
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85'
  },
  {
    id: 2,
    type: 'casa',
    badge: 'Vista privilegiada',
    title: 'Refúgio às Margens do Rio',
    location: 'Porto Rico - PR',
    people: 10,
    price: 'Sob consulta',
    priceValue: null,
    priceLabel: 'diária a partir de',
    description: 'Ambiente confortável e reservado para descansar e aproveitar os melhores dias no rio.',
    features: ['Até 10 pessoas', 'Área gourmet', 'Garagem', 'Ar-condicionado'],
    image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&q=85'
  },
  {
    id: 3,
    type: 'lancha',
    badge: 'Experiência completa',
    title: 'Lancha Premium 12 Lugares',
    location: 'Rio Paraná',
    people: 12,
    price: 'Sob consulta',
    priceValue: null,
    priceLabel: 'passeio a partir de',
    description: 'Passeio com conforto e espaço para curtir o rio com amigos ou família.',
    features: ['Até 12 pessoas', 'Com piloto', 'Som a bordo', 'Colete incluso'],
    image: 'https://images.unsplash.com/photo-1540946485063-a40da27545f8?auto=format&fit=crop&w=1200&q=85'
  },
  {
    id: 4,
    type: 'lancha',
    badge: 'Ideal para grupos',
    title: 'Lancha Sport 8 Lugares',
    location: 'Porto Rico - PR',
    people: 8,
    price: 'Sob consulta',
    priceValue: null,
    priceLabel: 'passeio a partir de',
    description: 'Modelo esportivo para quem quer agilidade, conforto e um passeio marcante.',
    features: ['Até 8 pessoas', 'Com piloto', 'Toldo', 'Som Bluetooth'],
    image: 'https://images.unsplash.com/photo-1562281302-809108fd533c?auto=format&fit=crop&w=1200&q=85'
  },
  {
    id: 5,
    type: 'jetski',
    badge: 'Adrenalina',
    title: 'Jet Ski Sea-Doo GTI',
    location: 'Porto Rico - PR',
    people: 2,
    price: 'R$ 390,00',
    priceValue: 390,
    priceLabel: '1 hora a partir de',
    description: 'Jet ski confortável, potente e perfeito para aproveitar as águas de Porto Rico.',
    features: ['Até 2 pessoas', 'Colete incluso', 'Orientação', 'Modelo recente'],
    image: 'https://images.unsplash.com/photo-1621277224630-81ef0c9a6b26?auto=format&fit=crop&w=1200&q=85'
  },
  {
    id: 6,
    type: 'jetski',
    badge: 'Mais reservado',
    title: 'Jet Ski Sea-Doo Spark',
    location: 'Porto Rico - PR',
    people: 2,
    price: 'R$ 350,00',
    priceValue: 350,
    priceLabel: '1 hora a partir de',
    description: 'Leve, divertido e fácil de pilotar, ideal para uma experiência rápida e emocionante.',
    features: ['Até 2 pessoas', 'Colete incluso', 'Instrução inicial', 'Econômico'],
    image: 'https://images.unsplash.com/photo-1605281317010-fe5ffe798166?auto=format&fit=crop&w=1200&q=85'
  }
];

const state = {
  filter: 'todos',
  people: '',
  selected: JSON.parse(localStorage.getItem('alugaPortoSelection') || '[]')
};

const grid = document.querySelector('#catalogGrid');
const emptyState = document.querySelector('#emptyState');
const count = document.querySelector('#selectionCount');
const drawer = document.querySelector('#selectionDrawer');
const selectedItems = document.querySelector('#selectedItems');
const selectedEmpty = document.querySelector('#selectedEmpty');
const detailsModal = document.querySelector('#detailsModal');
const modalContent = document.querySelector('#modalContent');
const toast = document.querySelector('#toast');
const whatsappForm = document.querySelector('#whatsappForm');
const searchButton = document.querySelector('#searchButton');

const formFields = {
  name: document.querySelector('#customerName'),
  phone: document.querySelector('#customerPhone'),
  address: document.querySelector('#customerAddress'),
  serviceType: document.querySelector('#serviceType'),
  date: document.querySelector('#interestDate'),
  time: document.querySelector('#interestTime'),
  paymentStatus: document.querySelector('#paymentStatus'),
  paymentMethod: document.querySelector('#paymentMethod'),
  notes: document.querySelector('#interestNotes')
};

function typeLabel(type) {
  return { casa: 'Casa de temporada', lancha: 'Lancha', jetski: 'Jet ski' }[type] || type;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function isSelected(id) {
  return state.selected.includes(id);
}

function formatCurrency(value) {
  return Number.isFinite(value) ? CURRENCY.format(value) : 'A definir';
}

function formatDateInput(value) {
  if (!value) return 'A definir';
  const [year, month, day] = value.split('-');
  return `${day}/${month}/${year}`;
}

function formatTimeInput(value) {
  return value || 'A definir';
}

function saveSelection() {
  localStorage.setItem('alugaPortoSelection', JSON.stringify(state.selected));
  updateSelectionUI();
}

function filteredCatalog() {
  return catalog.filter(item => {
    const matchesCategory = state.filter === 'todos' || item.type === state.filter;
    const matchesPeople = !state.people || item.people >= Number(state.people);
    return matchesCategory && matchesPeople;
  });
}

function renderCatalog() {
  const items = filteredCatalog();
  emptyState.hidden = items.length > 0;
  grid.innerHTML = items.map(item => `
    <article class="card catalog-card">
      <div class="card-copy">
        <div class="card-meta">
          <span>${escapeHtml(typeLabel(item.type))}</span>
          <span>${escapeHtml(item.location)}</span>
        </div>
        <h3>${escapeHtml(item.title)}</h3>
        <p class="card-description">${escapeHtml(item.description)}</p>
        <div class="card-features">
          ${item.features.map(feature => `<span>${escapeHtml(feature)}</span>`).join('')}
        </div>
        <div class="card-footer">
          <div class="price">
            <small>${escapeHtml(item.priceLabel)}</small>
            <strong>${escapeHtml(item.price)}</strong>
          </div>
          <div class="card-actions">
            <button class="details-button" type="button" data-details="${item.id}">Detalhes</button>
            <button
              class="card-favorite ${isSelected(item.id) ? 'selected' : ''}"
              type="button"
              data-toggle="${item.id}"
              aria-label="${isSelected(item.id) ? `Remover ${item.title} do pedido` : `Adicionar ${item.title} ao pedido`}"
            >${isSelected(item.id) ? '−' : '+'}</button>
          </div>
        </div>
      </div>
      <div class="card-media" style="background-image:url('${item.image}')">
        <span class="card-badge">${escapeHtml(item.badge)}</span>
      </div>
    </article>
  `).join('');
}

function toggleSelection(id) {
  const wasSelected = isSelected(id);
  state.selected = wasSelected
    ? state.selected.filter(itemId => itemId !== id)
    : [...state.selected, id];
  saveSelection();
  renderCatalog();
  showToast(wasSelected ? 'Removido do pedido.' : 'Adicionado ao pedido.');
}

function updateSelectionUI() {
  count.textContent = state.selected.length;
  const items = catalog.filter(item => state.selected.includes(item.id));
  selectedEmpty.hidden = items.length > 0;
  selectedItems.innerHTML = items.map(item => `
    <div class="selected-item">
      <img src="${item.image}" alt="${escapeHtml(item.title)}">
      <div>
        <h4>${escapeHtml(item.title)}</h4>
        <small>${escapeHtml(item.priceLabel)}: ${escapeHtml(item.price)}</small>
      </div>
      <button type="button" data-remove="${item.id}" aria-label="Remover">×</button>
    </div>
  `).join('');
}

function openDrawer() {
  drawer.classList.add('open');
  drawer.setAttribute('aria-hidden', 'false');
  document.body.classList.add('no-scroll');
}

function closeDrawer() {
  drawer.classList.remove('open');
  drawer.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('no-scroll');
}

function openModal(id) {
  const item = catalog.find(product => product.id === id);
  if (!item) return;

  modalContent.innerHTML = `
    <div class="modal-image" style="background-image:url('${item.image}')"></div>
    <div class="modal-body">
      <span class="eyebrow dark">${escapeHtml(typeLabel(item.type))} • ${escapeHtml(item.location)}</span>
      <h2>${escapeHtml(item.title)}</h2>
      <p>${escapeHtml(item.description)} O layout foi pensado para catálogo, com navegação rápida, cartão de produto e envio direto para o WhatsApp.</p>
      <div class="card-features">${item.features.map(feature => `<span>${escapeHtml(feature)}</span>`).join('')}</div>
      <div class="modal-actions">
        <div class="price"><small>${escapeHtml(item.priceLabel)}</small><strong>${escapeHtml(item.price)}</strong></div>
        <button class="btn btn-primary" type="button" data-modal-select="${item.id}">${isSelected(item.id) ? 'Remover do pedido' : 'Adicionar ao pedido'}</button>
      </div>
    </div>
  `;

  detailsModal.classList.add('open');
  detailsModal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('no-scroll');
}

function closeModal() {
  detailsModal.classList.remove('open');
  detailsModal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('no-scroll');
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove('show'), 2200);
}

function buildRequestCode() {
  const digits = Math.floor(1000000000 + Math.random() * 9000000000);
  return `BR-${digits}`;
}

function buildWhatsAppMessage(items) {
  const subtotal = items.every(item => Number.isFinite(item.priceValue))
    ? items.reduce((total, item) => total + item.priceValue, 0)
    : null;
  const requestCode = buildRequestCode();
  const serviceType = formFields.serviceType.value || 'Reserva';
  const formattedDate = formatDateInput(formFields.date.value);
  const formattedTime = formatTimeInput(formFields.time.value);
  const customerName = formFields.name.value.trim() || 'A definir';
  const customerPhone = formFields.phone.value.trim() || 'A definir';
  const customerAddress = formFields.address.value.trim() || 'A definir';
  const paymentStatus = formFields.paymentStatus.value || 'Não pago';
  const paymentMethod = formFields.paymentMethod.value || 'A definir';
  const notes = formFields.notes.value.trim();

  const productLines = items.flatMap(item => {
    const priceLabel = item.priceValue === null ? 'Sob consulta' : formatCurrency(item.priceValue);
    return [
      `X1 ${item.title} – ${typeLabel(item.type)}  ${priceLabel}`,
      `    1 Unidade(s)  ${priceLabel}`,
      ...item.features.map(feature => `    +1 ${feature}`)
    ];
  });

  return [
    `👋 Venho de ${SITE_URL}`,
    requestCode,
    `🗓️ ${formattedDate} ⏰ ${formattedTime}`,
    '',
    `Tipo de serviço: ${serviceType}`,
    '',
    `Nome: ${customerName}`,
    `Telefone: ${customerPhone}`,
    `Endereço: ${customerAddress}`,
    '',
    '📝 Produtos',
    ...productLines,
    '',
    `Subtotal: ${subtotal === null ? 'A definir' : formatCurrency(subtotal)}`,
    'Retirada/Entrega: A combinar',
    `Total: ${subtotal === null ? 'A definir' : formatCurrency(subtotal)}`,
    '',
    '💲 Pagamento',
    `Estado do pagamento: ${paymentStatus}`,
    `Total a pagar: ${subtotal === null ? 'A definir' : formatCurrency(subtotal)}`,
    paymentMethod,
    '',
    '👆 Por favor, envie-nos esta mensagem agora. Assim que recebermos estaremos atendendo você.'
  ].join('\n');
}

function sendToWhatsApp(event) {
  event.preventDefault();
  const items = catalog.filter(item => state.selected.includes(item.id));

  if (!items.length) {
    showToast('Selecione pelo menos uma opção antes de enviar.');
    return;
  }

  const message = buildWhatsAppMessage(items);
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
  showToast('Pedido pronto para o WhatsApp.');
}

document.addEventListener('click', event => {
  const toggle = event.target.closest('[data-toggle]');
  const details = event.target.closest('[data-details]');
  const remove = event.target.closest('[data-remove]');
  const modalSelect = event.target.closest('[data-modal-select]');
  const navAction = event.target.closest('.nav-action');

  if (toggle) toggleSelection(Number(toggle.dataset.toggle));
  if (details) openModal(Number(details.dataset.details));
  if (remove) toggleSelection(Number(remove.dataset.remove));
  if (modalSelect) {
    toggleSelection(Number(modalSelect.dataset.modalSelect));
    openModal(Number(modalSelect.dataset.modalSelect));
  }
  if (event.target.closest('[data-open-selection]')) openDrawer();
  if (event.target.closest('[data-close-selection]')) closeDrawer();
  if (event.target.closest('[data-close-modal]')) closeModal();
  if (navAction) openDrawer();
});

document.querySelectorAll('.filter').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.filter').forEach(item => item.classList.remove('active'));
    button.classList.add('active');
    state.filter = button.dataset.filter;
    document.querySelector('#categorySelect').value = state.filter;
    renderCatalog();
  });
});

document.querySelector('#searchButton').addEventListener('click', () => {
  state.filter = document.querySelector('#categorySelect').value;
  state.people = document.querySelector('#peopleSelect').value;
  document.querySelectorAll('.filter').forEach(item => item.classList.toggle('active', item.dataset.filter === state.filter));
  renderCatalog();
  document.querySelector('#catalogo').scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('#dateInput').addEventListener('change', event => {
  formFields.date.value = event.target.value;
});

whatsappForm.addEventListener('submit', sendToWhatsApp);

document.querySelector('.menu-toggle').addEventListener('click', event => {
  const nav = document.querySelector('.main-nav');
  nav.classList.toggle('open');
  event.currentTarget.setAttribute('aria-expanded', String(nav.classList.contains('open')));
});

document.querySelectorAll('.main-nav a').forEach(link => link.addEventListener('click', () => {
  document.querySelector('.main-nav').classList.remove('open');
}));

document.querySelectorAll('.main-nav button').forEach(button => button.addEventListener('click', () => {
  document.querySelector('.main-nav').classList.remove('open');
}));

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    closeDrawer();
    closeModal();
  }
});

renderCatalog();
updateSelectionUI();
