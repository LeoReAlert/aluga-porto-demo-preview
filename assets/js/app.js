const WHATSAPP_NUMBER = '5544991416218';

const catalog = [
  {
    id: 1,
    type: 'casa',
    badge: 'Mais procurada',
    title: 'Casa Porto Rico Premium',
    location: 'Porto Rico - PR',
    people: 12,
    price: 'Sob consulta',
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
    price: 'R$ 390',
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
    price: 'R$ 350',
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

function typeLabel(type) {
  return { casa: 'Casa de temporada', lancha: 'Lancha', jetski: 'Jet ski' }[type] || type;
}

function isSelected(id) {
  return state.selected.includes(id);
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
    <article class="card">
      <div class="card-media" style="background-image:url('${item.image}')">
        <span class="card-badge">${item.badge}</span>
        <button class="card-favorite ${isSelected(item.id) ? 'selected' : ''}" type="button" data-toggle="${item.id}" aria-label="Adicionar ${item.title} à seleção">${isSelected(item.id) ? '♥' : '♡'}</button>
      </div>
      <div class="card-body">
        <div class="card-meta"><span>${typeLabel(item.type)}</span><span>${item.location}</span></div>
        <h3>${item.title}</h3>
        <p class="card-description">${item.description}</p>
        <div class="card-features">${item.features.map(feature => `<span>${feature}</span>`).join('')}</div>
        <div class="card-footer">
          <div class="price"><small>${item.priceLabel}</small><strong>${item.price}</strong></div>
          <button class="details-button" type="button" data-details="${item.id}">Ver detalhes</button>
        </div>
      </div>
    </article>
  `).join('');
}

function toggleSelection(id) {
  state.selected = isSelected(id)
    ? state.selected.filter(itemId => itemId !== id)
    : [...state.selected, id];
  saveSelection();
  renderCatalog();
  showToast(isSelected(id) ? 'Adicionado à sua seleção.' : 'Removido da sua seleção.');
}

function updateSelectionUI() {
  count.textContent = state.selected.length;
  const items = catalog.filter(item => state.selected.includes(item.id));
  selectedEmpty.hidden = items.length > 0;
  selectedItems.innerHTML = items.map(item => `
    <div class="selected-item">
      <img src="${item.image}" alt="${item.title}">
      <div><h4>${item.title}</h4><small>${item.priceLabel}: ${item.price}</small></div>
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
      <span class="eyebrow dark">${typeLabel(item.type)} • ${item.location}</span>
      <h2>${item.title}</h2>
      <p>${item.description} Esta é uma apresentação demonstrativa; na versão final podem ser adicionadas galeria de fotos, disponibilidade, regras, itens inclusos, localização e preços por período.</p>
      <div class="card-features">${item.features.map(feature => `<span>${feature}</span>`).join('')}</div>
      <div class="modal-actions">
        <div class="price"><small>${item.priceLabel}</small><strong>${item.price}</strong></div>
        <button class="btn btn-primary" type="button" data-modal-select="${item.id}">${isSelected(item.id) ? 'Remover da seleção' : 'Adicionar à seleção'}</button>
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

function sendToWhatsApp(event) {
  event.preventDefault();
  const items = catalog.filter(item => state.selected.includes(item.id));
  if (!items.length) {
    showToast('Selecione pelo menos uma opção antes de enviar.');
    return;
  }

  const date = document.querySelector('#interestDate').value;
  const people = document.querySelector('#interestPeople').value;
  const notes = document.querySelector('#interestNotes').value.trim();
  const formattedDate = date ? new Date(`${date}T12:00:00`).toLocaleDateString('pt-BR') : 'A definir';

  const message = [
    'Olá! Vim pelo catálogo da Aluga Porto e tenho interesse nas opções abaixo:',
    '',
    ...items.map((item, index) => `${index + 1}. *${item.title}*\n   ${item.priceLabel}: ${item.price}`),
    '',
    `📅 Data: ${formattedDate}`,
    `👥 Pessoas: ${people || 'A definir'}`,
    notes ? `📝 Observação: ${notes}` : '',
    '',
    'Podem me informar disponibilidade e valores finais?'
  ].filter(Boolean).join('\n');

  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
}

document.addEventListener('click', event => {
  const toggle = event.target.closest('[data-toggle]');
  const details = event.target.closest('[data-details]');
  const remove = event.target.closest('[data-remove]');
  const modalSelect = event.target.closest('[data-modal-select]');

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
  document.querySelector('#interestDate').value = event.target.value;
});

document.querySelector('#whatsappForm').addEventListener('submit', sendToWhatsApp);

document.querySelector('.menu-toggle').addEventListener('click', event => {
  const nav = document.querySelector('.main-nav');
  nav.classList.toggle('open');
  event.currentTarget.setAttribute('aria-expanded', String(nav.classList.contains('open')));
});

document.querySelectorAll('.main-nav a').forEach(link => link.addEventListener('click', () => {
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
