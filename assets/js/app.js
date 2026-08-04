const SITE_URL = 'https://alugaporto.com.br';
const WHATSAPP_NUMBER = '5544991416218';
const CURRENCY = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL'
});

const catalog = [
  {
    "id": "Casa Madrid",
    "name": "Casa Madrid",
    "type": "casa",
    "price": 990,
    "period": "/noite",
    "badge": "Novo",
    "location": "Madrid",
    "details": { "suites": 3, "quartos": 3, "banheiros": 1, "pessoas": 12 },
    "amenities": ["Piscina", "Wi-Fi", "Ar condicionado", "Churrasqueira", "Cozinha completa", "Lavanderia"],
    "image": "casas/Casa Madrid/1.jpeg"
  },
  {
    "id": "Casa10",
    "name": "Casa Portal 2",
    "type": "casa",
    "price": 1250,
    "period": "/noite",
    "badge": "Destaque",
    "location": "Jardin Portal",
    "details": { "suites": 3, "quartos": 4, "banheiros": 4, "pessoas": 12 },
    "amenities": ["Piscina", "Wi-Fi", "Ar condicionado", "Churrasqueira", "Cozinha completa", "Eletrodomesticos", "Banheiro social", "Garagem 3 Carros", "Mesa de Sinuca", "Som", "Lavanderia"],
    "image": "casas/Casa10/1.jpeg"
  },
  {
    "id": "Catamara Aurora 750",
    "name": "Catamarã Aurora 750",
    "type": "embarcacao",
    "price": 4500,
    "period": "/Dia)",
    "badge": "Novo",
    "location": "Aguas de Porto Rico",
    "details": { "pessoas": 17, "motor": "150 hp", "modelo": "Catamarã Aurora 750" },
    "amenities": ["Guia Experiente", "Guarda-Sol", "Coletes Salva Vidas", "Pia", "Churrasqueira"],
    "image": "casas/Catamara Aurora 750/1.jpeg"
  },
  {
    "id": "Catamara Vcat 750",
    "name": "Catamarã Vcat 750",
    "type": "embarcacao",
    "price": 4500,
    "period": "/Dia)",
    "badge": "Novo",
    "location": "Hangar 365",
    "details": { "pessoas": 17, "motor": "200 hp", "modelo": "Catamarã Vcat 750" },
    "amenities": ["Guia Experiente", "Guarda-Sol", "Cadeiras de Praia", "Coletes Salva Vidas", "Pia", "Churrasqueira", "Banheiro Privativo"],
    "image": "casas/Catamara Vcat 750/1.webp"
  },
  {
    "id": "Catamara Vcat 900",
    "name": "Catamarã Vcat 900",
    "type": "embarcacao",
    "price": 4500,
    "period": "/Dia)",
    "badge": "Novo",
    "location": "Porto Seguro",
    "details": { "pessoas": 20, "motor": "200 hp", "modelo": "Catamarã Vcat 900" },
    "amenities": ["Guia Experiente", "Tenda", "Coletes Salva Vidas", "Pia", "Churrasqueira a Gás"],
    "image": "casas/Catamara Vcat 900/1.webp"
  },
  {
    "id": "GTI 170",
    "name": "Jetski Sea-Doo Gti 170",
    "type": "embarcacao",
    "price": 1700,
    "period": "/Dia",
    "badge": "Novo",
    "location": "Hangar 365",
    "details": { "pessoas": 3, "motor": "170 hp", "modelo": "Gti 170" },
    "amenities": ["Colete Salva-vidas", "Sistema iBR (freio e ré)"],
    "image": "casas/GTI 170/1.jpeg"
  },
  {
    "id": "Gti 170 SE",
    "name": "Jetski Sea-Doo Gti 170 Se",
    "type": "embarcacao",
    "price": 1700,
    "period": "/Dia",
    "badge": "Novo",
    "location": "Aluga Porto",
    "details": { "pessoas": 3, "motor": "170 hp", "modelo": "Gti 170 Se" },
    "amenities": ["Colete Salva-vidas", "Sistema iBR (freio e ré)"],
    "image": "casas/Gti 170 SE/1.jpeg"
  },
  {
    "id": "Lancha FS 230",
    "name": "FS 230",
    "type": "embarcacao",
    "price": 2900,
    "period": "/Dia)",
    "badge": "Novo",
    "location": "Marina",
    "details": { "pessoas": 9, "motor": "250 hp", "modelo": "FS 230" },
    "amenities": ["Guia Experiente", "Colete Salva Vidas", "Banheiro Privativo"],
    "image": "casas/Lancha FS 230/1.jpeg"
  },
  {
    "id": "Lancha Focker 188",
    "name": "Lancha Focker 188",
    "type": "embarcacao",
    "price": 2000,
    "period": "/Dia)",
    "badge": "Novo",
    "location": "Marina Grecia",
    "details": { "pessoas": 7, "motor": "100 hp", "modelo": "Lancha Focker 188" },
    "amenities": ["Guia Experiente", "Coletes Salva Vidas", "Som"],
    "image": "casas/Lancha Focker 188/1.jpeg"
  },
  {
    "id": "Lancha Focker 272",
    "name": "Lancha Focker 272",
    "type": "embarcacao",
    "price": 3500,
    "period": "/Dia",
    "badge": "Novo",
    "location": "Porto Rico Resort",
    "details": { "pessoas": 13, "motor": "300 hp", "modelo": "Focker 272" },
    "amenities": ["Coletes Salva-vidas", "Som bluetooth", "2 Guarda Sol"],
    "image": "casas/Lancha Focker 272/1.webp"
  },
  {
    "id": "Lancha Naja 195",
    "name": "Lancha Naja 195",
    "type": "embarcacao",
    "price": 2000,
    "period": "/Dia)",
    "badge": "Novo",
    "location": "Marina Aluga Porto",
    "details": { "pessoas": 7, "motor": "135 hp", "modelo": "Lancha Naja 195" },
    "amenities": ["Guia Experiente", "Guarda-Sol", "Coletes Salva Vidas", "Pia", "Churrasqueira", "Som"],
    "image": "casas/Lancha Naja 195/1.jpeg"
  },
  {
    "id": "Lancha Nhd 270",
    "name": "Lancha Nhd 270",
    "type": "embarcacao",
    "price": 3500,
    "period": "/Dia)",
    "badge": "Novo",
    "location": "Marina Aluga Porto",
    "details": { "pessoas": 13, "motor": "250 hp", "modelo": "Lancha Nhd 270" },
    "amenities": ["Guia Experiente", "Coletes Salva Vidas", "Pia", "Churrasqueira", "Banheiro Privativo"],
    "image": "casas/Lancha Nhd 270/1.jpeg"
  },
  {
    "id": "Mestra 210",
    "name": "Lancha Mestra 210",
    "type": "embarcacao",
    "price": 2500,
    "period": "/Dia",
    "badge": "Novo",
    "location": "Aluga Porto",
    "details": { "pessoas": 9, "motor": "200 hp", "modelo": "Mestra 210" },
    "amenities": ["Coletes Salva-vidas", "Som bluetooth", "Churrasqueira", "Guarda-Sol"],
    "image": "casas/Mestra 210/1.webp"
  },
  {
    "id": "Mestra 222",
    "name": "Lancha Mestra 222",
    "type": "embarcacao",
    "price": 3500,
    "period": "/Dia",
    "badge": "Novo",
    "location": "Aluga Porto",
    "details": { "pessoas": 11, "motor": "200 hp", "modelo": "Mestra 222" },
    "amenities": ["Coletes Salva-vidas", "Som bluetooth", "Churrasqueira"],
    "image": "casas/Mestra 222/1.jpeg"
  },
  {
    "id": "NX 280",
    "name": "Nx 280",
    "type": "embarcacao",
    "price": 4000,
    "period": "/Dia)",
    "badge": "Novo",
    "location": "Marina Grecia",
    "details": { "pessoas": 13, "motor": "300 hp", "modelo": "Nx 280" },
    "amenities": ["Guia Experiente", "Colete Salva Vidas", "Banheiro Privativo"],
    "image": "casas/NX 280/1.jpeg"
  },
  {
    "id": "Phoenix 270",
    "name": "Phoenix 270",
    "type": "embarcacao",
    "price": 3500,
    "period": "/Dia)",
    "badge": "Novo",
    "location": "Marina",
    "details": { "pessoas": 10, "motor": "300 hp", "modelo": "Phoenix 270" },
    "amenities": ["Guia Experiente", "Colete Salva Vidas", "Banheiro Privativo"],
    "image": "casas/Phoenix 270/1.jpeg"
  },
  {
    "id": "Wake 230 Pro",
    "name": "Jetski Sea-Doo Wake 230",
    "type": "embarcacao",
    "price": 1800,
    "period": "/Dia",
    "badge": "Novo",
    "location": "Aluga Porto",
    "details": { "pessoas": 3, "motor": "230 hp", "modelo": "Wake 230" },
    "amenities": ["Colete Salva-vidas", "Som Bluetooth", "Sistema iBR (freio e ré)"],
    "image": "casas/Wake 230 Pro/1.jpeg"
  },
  {
    "id": "casa1",
    "name": "Casa Luxo Grécia",
    "type": "casa",
    "price": 990,
    "period": "/noite",
    "badge": "Destaque",
    "location": "Jardin Grécia",
    "details": { "suites": 3, "quartos": 3, "banheiros": 4, "pessoas": 12 },
    "amenities": ["Piscina", "Wi-Fi", "Ar condicionado", "Churrasqueira", "Cozinha completa", "Eletrodomesticos", "Banheiro social", "Tvs nos Quartos", "Lavanderia"],
    "image": "casas/casa1/1.webp"
  },
  {
    "id": "casa11",
    "name": "Casa Riviera 5",
    "type": "casa",
    "price": 1350,
    "period": "/noite",
    "badge": "Destaque",
    "location": "Jardin Riviera",
    "details": { "suites": 1, "quartos": 3, "banheiros": 3, "pessoas": 12 },
    "amenities": ["Piscina", "Wi-Fi", "Ar condicionado", "Cervejeira", "Churrasqueira", "Cozinha completa", "Eletrodomesticos", "Banheiro social", "Lavanderia"],
    "image": "casas/casa11/1.webp"
  },
  {
    "id": "casa12",
    "name": "Casa Riviera 6",
    "type": "casa",
    "price": 1150,
    "period": "/noite",
    "badge": "Destaque",
    "location": "Jardin Riviera",
    "details": { "suites": 1, "quartos": 3, "banheiros": 3, "pessoas": 12 },
    "amenities": ["Piscina", "Wi-Fi", "Ar condicionado", "Churrasqueira", "Cozinha completa", "Eletrodomesticos", "Banheiro social", "Lavanderia"],
    "image": "casas/casa12/1.webp"
  },
  {
    "id": "casa13",
    "name": "Casa Bela Vista 3",
    "type": "casa",
    "price": 1250,
    "period": "/noite",
    "badge": "Destaque",
    "location": "Bela Vista",
    "details": { "suites": 3, "quartos": 3, "banheiros": 4, "pessoas": 12 },
    "amenities": ["Piscina", "Wi-Fi", "Ar condicionado", "Churrasqueira", "Cozinha completa", "Eletrodomesticos", "Banheiro social", "Tvs nos Quartos", "Lavanderia"],
    "image": "casas/casa13/1.webp"
  },
  {
    "id": "casa2",
    "name": "Casa Riviera",
    "type": "casa",
    "price": 1400,
    "period": "/noite",
    "badge": "Destaque",
    "location": "Jardin Riviera",
    "details": { "suites": 2, "quartos": 4, "banheiros": 4, "pessoas": 14 },
    "amenities": ["Piscina", "Wi-Fi", "Ar condicionado", "Churrasqueira", "Cozinha completa", "Lavanderia"],
    "image": "casas/casa2/1.webp"
  },
  {
    "id": "casa4",
    "name": "Casa Riviera 2",
    "type": "casa",
    "price": 1100,
    "period": "/noite",
    "badge": "Novidade",
    "location": "Jardin Portal",
    "details": { "suites": 1, "quartos": 3, "banheiros": 2, "pessoas": 8 },
    "amenities": ["Piscina", "Wi-Fi", "Ar condicionado", "Churrasqueira", "Microondas", "Forno Eletrico", "Cozinha Completa", "Lavanderia"],
    "image": "casas/casa4/1.webp"
  },
  {
    "id": "casa5",
    "name": "Casa Grécia",
    "type": "casa",
    "price": 1200,
    "period": "/noite",
    "badge": "Destaque",
    "location": "Jardin Grécia",
    "details": { "suites": 1, "quartos": 3, "banheiros": 2, "pessoas": 12 },
    "amenities": ["Piscina", "Wi-Fi", "Ar condicionado", "Churrasqueira", "Cozinha completa", "Lavanderia"],
    "image": "casas/casa5/1_n.webp"
  },
  {
    "id": "casa6",
    "name": "Sobrado Maliboo",
    "type": "casa",
    "price": 1250,
    "period": "/noite",
    "badge": "Novo",
    "location": "Maliboo",
    "details": { "suites": 1, "quartos": 4, "banheiros": 3, "pessoas": 16 },
    "amenities": ["Piscina", "Wi-Fi", "Ar condicionado", "Churrasqueira", "Cozinha completa", "Lavanderia"],
    "image": "casas/casa6/1.webp"
  },
  {
    "id": "casa7",
    "name": "Sobrado Grécia",
    "type": "casa",
    "price": 1550,
    "period": "/Diária",
    "badge": "Novo",
    "location": "Grécia",
    "details": { "suites": 2, "quartos": 5, "banheiros": 4, "pessoas": 18 },
    "amenities": ["Piscina", "Wi-Fi", "Ar condicionado", "Churrasqueira", "Cozinha completa", "Lavanderia"],
    "image": "casas/casa7/1.webp"
  },
  {
    "id": "casa8",
    "name": "Casa Riviera 3",
    "type": "casa",
    "price": 1200,
    "period": "/noite",
    "badge": "Novo",
    "location": "Riviera",
    "details": { "suites": 3, "quartos": 3, "banheiros": 3, "pessoas": 12 },
    "amenities": ["Piscina", "Wi-Fi", "Ar condicionado", "Churrasqueira", "Cozinha completa", "Lavanderia"],
    "image": "casas/casa8/1.webp"
  },
  {
    "id": "casa9",
    "name": "Sobrado Riviera 4",
    "type": "casa",
    "price": 1300,
    "period": "/noite",
    "badge": "Novo",
    "location": "Riviera",
    "details": { "suites": 3, "quartos": 4, "banheiros": 4, "pessoas": 12 },
    "amenities": ["Piscina", "Wi-Fi", "Ar condicionado", "Churrasqueira", "Cozinha completa", "Lavanderia"],
    "image": "casas/casa9/1.webp"
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

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function encodeImagePath(path) {
  return `${SITE_URL}/${encodeURI(path)}`;
}

function formatMoney(value) {
  return CURRENCY.format(value);
}

function normalizePeriod(period) {
  return String(period || '').replace(/[)]+$/g, '').trim();
}

function getCategory(item) {
  if (item.type === 'casa') return 'casa';
  return item.name.toLowerCase().includes('jetski') ? 'jetski' : 'lancha';
}

function categoryLabel(category) {
  return {
    casa: 'Casas de temporada',
    lancha: 'Lanchas e catamarãs',
    jetski: 'Jet skis'
  }[category] || category;
}

function isSelected(id) {
  return state.selected.includes(id);
}

function saveSelection() {
  localStorage.setItem('alugaPortoSelection', JSON.stringify(state.selected));
  updateSelectionUI();
}

function shortDescription(item) {
  if (item.type === 'casa') {
    return `Casa de temporada em ${item.location}, com ${item.details.quartos} quartos, ${item.details.banheiros} banheiros e capacidade para até ${item.details.pessoas} pessoas.`;
  }
  return `${item.details.modelo} em ${item.location}, com ${item.details.motor} e capacidade para ${item.details.pessoas} pessoas.`;
}

function detailChips(item) {
  if (item.type === 'casa') {
    const chips = [];
    if (item.details.suites) chips.push(`${item.details.suites} suítes`);
    if (item.details.quartos) chips.push(`${item.details.quartos} quartos`);
    if (item.details.banheiros) chips.push(`${item.details.banheiros} banheiros`);
    if (item.details.pessoas) chips.push(`${item.details.pessoas} pessoas`);
    return chips;
  }

  return [
    item.details.modelo,
    item.details.motor,
    `${item.details.pessoas} pessoas`
  ].filter(Boolean);
}

function filteredCatalog() {
  return catalog.filter(item => {
    const matchesCategory = state.filter === 'todos' || getCategory(item) === state.filter;
    const matchesPeople = !state.people || Number(item.details.pessoas || 0) >= Number(state.people);
    return matchesCategory && matchesPeople;
  });
}

function renderCard(item) {
  return `
    <article class="card product-card">
      <div class="card-copy">
        <div class="card-meta">
          <span>${escapeHtml(categoryLabel(getCategory(item)))}</span>
          <span>${escapeHtml(item.location)}</span>
        </div>
        <h3>${escapeHtml(item.name)}</h3>
        <p class="card-description">${escapeHtml(shortDescription(item))}</p>
        <div class="card-features">
          ${detailChips(item).map(chip => `<span>${escapeHtml(chip)}</span>`).join('')}
        </div>
        <div class="card-features">
          ${item.amenities.slice(0, 5).map(chip => `<span>${escapeHtml(chip)}</span>`).join('')}
        </div>
        <div class="card-footer">
          <div class="price">
            <small>${escapeHtml(normalizePeriod(item.period) || 'A partir de')}</small>
            <strong>${formatMoney(item.price)}</strong>
          </div>
          <div class="card-actions">
            <button class="details-button" type="button" data-details="${escapeHtml(item.id)}">Detalhes</button>
            <button class="card-favorite ${isSelected(item.id) ? 'selected' : ''}" type="button" data-toggle="${escapeHtml(item.id)}" aria-label="${isSelected(item.id) ? `Remover ${item.name} do pedido` : `Adicionar ${item.name} ao pedido`}">${isSelected(item.id) ? '−' : '+'}</button>
          </div>
        </div>
      </div>
      <div class="card-media" style="background-image:url('${encodeImagePath(item.image)}')">
        <span class="card-badge">${escapeHtml(item.badge)}</span>
      </div>
    </article>
  `;
}

function renderCatalog() {
  const items = filteredCatalog();
  emptyState.hidden = items.length > 0;

  const groups = ['casa', 'lancha', 'jetski'];
  const groupedHtml = groups.map(group => {
    const groupItems = items.filter(item => getCategory(item) === group);
    if (!groupItems.length) return '';

    return `
      <section class="catalog-group">
        <div class="catalog-group-header">
          <div>
            <span class="eyebrow dark">${escapeHtml(categoryLabel(group))}</span>
            <h3>${escapeHtml(categoryLabel(group))}</h3>
          </div>
          <small>${groupItems.length} item(ns)</small>
        </div>
        <div class="catalog-group-grid">
          ${groupItems.map(renderCard).join('')}
        </div>
      </section>
    `;
  }).join('');

  grid.innerHTML = groupedHtml;
}

function toggleSelection(id) {
  const selected = isSelected(id);
  state.selected = selected ? state.selected.filter(itemId => itemId !== id) : [...state.selected, id];
  saveSelection();
  renderCatalog();
  showToast(selected ? 'Removido do pedido.' : 'Adicionado ao pedido.');
}

function updateSelectionUI() {
  count.textContent = state.selected.length;
  const items = catalog.filter(item => state.selected.includes(item.id));
  selectedEmpty.hidden = items.length > 0;
  selectedItems.innerHTML = items.map(item => `
    <div class="selected-item">
      <img src="${encodeImagePath(item.image)}" alt="${escapeHtml(item.name)}">
      <div>
        <h4>${escapeHtml(item.name)}</h4>
        <small>${escapeHtml(normalizePeriod(item.period))} • ${formatMoney(item.price)}</small>
      </div>
      <button type="button" data-remove="${escapeHtml(item.id)}" aria-label="Remover">×</button>
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
    <div class="modal-image" style="background-image:url('${encodeImagePath(item.image)}')"></div>
    <div class="modal-body">
      <span class="eyebrow dark">${escapeHtml(categoryLabel(getCategory(item)))} • ${escapeHtml(item.location)}</span>
      <h2>${escapeHtml(item.name)}</h2>
      <p>${escapeHtml(shortDescription(item))} Consulte disponibilidade, valores e detalhes para fechar a reserva pelo WhatsApp.</p>
      <div class="card-features">${detailChips(item).map(chip => `<span>${escapeHtml(chip)}</span>`).join('')}</div>
      <div class="card-features">${item.amenities.map(chip => `<span>${escapeHtml(chip)}</span>`).join('')}</div>
      <div class="modal-actions">
        <div class="price">
          <small>${escapeHtml(normalizePeriod(item.period) || 'A partir de')}</small>
          <strong>${formatMoney(item.price)}</strong>
        </div>
        <button class="btn btn-primary" type="button" data-modal-select="${escapeHtml(item.id)}">${isSelected(item.id) ? 'Remover do pedido' : 'Adicionar ao pedido'}</button>
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
  const subtotal = items.reduce((total, item) => total + Number(item.price || 0), 0);
  const requestCode = buildRequestCode();
  const serviceType = formFields.serviceType.value || 'Reserva';
  const formattedDate = formFields.date.value ? new Date(`${formFields.date.value}T12:00:00`).toLocaleDateString('pt-BR') : 'A definir';
  const formattedTime = formFields.time.value || 'A definir';
  const customerName = formFields.name.value.trim() || 'A definir';
  const customerPhone = formFields.phone.value.trim() || 'A definir';
  const customerAddress = formFields.address.value.trim() || 'A definir';
  const paymentStatus = formFields.paymentStatus.value || 'Não pago';
  const paymentMethod = formFields.paymentMethod.value || 'A definir';
  const notes = formFields.notes.value.trim();

  const productLines = items.flatMap(item => {
    const priceLine = `${formatMoney(item.price)} ${normalizePeriod(item.period)}`;
    return [
      `X1 ${item.name} – ${categoryLabel(getCategory(item))} ${priceLine}`,
      `    1 Unidade(s) ${priceLine}`,
      ...detailChips(item).map(chip => `    +1 ${chip}`)
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
    '📝 Aluguéis selecionados',
    ...productLines,
    '',
    `Subtotal: ${formatMoney(subtotal)}`,
    'Delivery: A definir',
    `Total: ${formatMoney(subtotal)}`,
    '',
    '💲 Pagamento',
    `Estado do pagamento: ${paymentStatus}`,
    `Total a pagar: ${formatMoney(subtotal)}`,
    paymentMethod,
    notes ? `📝 Observação: ${notes}` : '',
    '',
    '👆 Por favor, envie-nos esta mensagem agora. Assim que recebermos estaremos atendendo você.'
  ].filter(Boolean).join('\n');
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

  if (toggle) toggleSelection(String(toggle.dataset.toggle));
  if (details) openModal(String(details.dataset.details));
  if (remove) toggleSelection(String(remove.dataset.remove));
  if (modalSelect) {
    toggleSelection(String(modalSelect.dataset.modalSelect));
    openModal(String(modalSelect.dataset.modalSelect));
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

document.querySelectorAll('.main-nav a, .main-nav button').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.main-nav').classList.remove('open');
  });
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    closeDrawer();
    closeModal();
  }
});

renderCatalog();
updateSelectionUI();
