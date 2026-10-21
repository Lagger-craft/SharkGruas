/* =========================================================
   Shark Grúas · Maqueta v3 — comportamiento
   Datos de la maqueta. Reemplazar TELEFONO, WHATSAPP y TARIFA
   con los valores oficiales antes de publicar.
   ========================================================= */

const SHARK = {
  TELEFONO: '+56 9 1234 5678',
  WHATSAPP: '56912345678',
  TARIFA: {
    base: 25000,
    porKm: 2900,
    kmMinimo: 10,
    recargoNocturno: 0.2,
    recargoUrgencia: 0.15,
    tipos: {
      liviano: { etiqueta: 'Vehículo liviano (auto, SUV, camioneta, furgón)', extra: 0 },
      maquinaria: { etiqueta: 'Maquinaria (horquilla, Genie, tractor, excavadora)', extra: 18000 },
      pesado: { etiqueta: 'Vehículo pesado (camión, tolva, batea)', extra: 35000 }
    }
  }
};

/* --- Comunas de cobertura (Región Metropolitana) y Cities de prueba --- */
const CIUDADES = [
  { id: 'santiago', nombre: 'Santiago', cobertura: true },
  { id: 'vina', nombre: 'Viña del Mar', cobertura: false },
  { id: 'valparaiso', nombre: 'Valparaíso', cobertura: false },
  { id: 'rancagua', nombre: 'Rancagua', cobertura: false },
  { id: 'sanfernando', nombre: 'San Fernando', cobertura: false }
];

const COMUNAS = [
  // Región Metropolitana — cobertura actual
  { n: 'Alhué', c: 'santiago', lat: -33.760, lon: -71.080 },
  { n: 'Buin', c: 'santiago', lat: -33.570, lon: -70.760 },
  { n: 'Calera de Tango', c: 'santiago', lat: -33.580, lon: -70.750 },
  { n: 'Cerrillos', c: 'santiago', lat: -33.420, lon: -70.730 },
  { n: 'Colina', c: 'santiago', lat: -33.330, lon: -70.670 },
  { n: 'Conchalí', c: 'santiago', lat: -33.380, lon: -70.680 },
  { n: 'Curacaví', c: 'santiago', lat: -33.426, lon: -71.330 },
  { n: 'El Bosque', c: 'santiago', lat: -33.530, lon: -70.600 },
  { n: 'El Monte', c: 'santiago', lat: -33.570, lon: -71.060 },
  { n: 'Huechuraba', c: 'santiago', lat: -33.375, lon: -70.672 },
  { n: 'Independencia', c: 'santiago', lat: -33.440, lon: -70.665 },
  { n: 'Isla de Maipo', c: 'santiago', lat: -33.500, lon: -71.030 },
  { n: 'La Cisterna', c: 'santiago', lat: -33.494, lon: -70.661 },
  { n: 'La Florida', c: 'santiago', lat: -33.455, lon: -70.590 },
  { n: 'La Granja', c: 'santiago', lat: -33.530, lon: -70.640 },
  { n: 'La Pintana', c: 'santiago', lat: -33.560, lon: -70.640 },
  { n: 'La Reina', c: 'santiago', lat: -33.450, lon: -70.590 },
  { n: 'Lampa', c: 'santiago', lat: -33.430, lon: -70.760 },
  { n: 'Las Condes', c: 'santiago', lat: -33.409, lon: -70.617 },
  { n: 'Lo Barnechea', c: 'santiago', lat: -33.353, lon: -70.534 },
  { n: 'Lo Espejo', c: 'santiago', lat: -33.510, lon: -70.620 },
  { n: 'Lo Prado', c: 'santiago', lat: -33.500, lon: -70.750 },
  { n: 'Macul', c: 'santiago', lat: -33.416, lon: -70.599 },
  { n: 'Maipú', c: 'santiago', lat: -33.539, lon: -70.766 },
  { n: 'María Pinto', c: 'santiago', lat: -33.730, lon: -71.130 },
  { n: 'Melipilla', c: 'santiago', lat: -33.680, lon: -71.220 },
  { n: 'Ñuñoa', c: 'santiago', lat: -33.437, lon: -70.642 },
  { n: 'Padre Hurtado', c: 'santiago', lat: -33.527, lon: -70.750 },
  { n: 'Paine', c: 'santiago', lat: -33.575, lon: -70.740 },
  { n: 'Pedro Aguirre Cerda', c: 'santiago', lat: -33.480, lon: -70.640 },
  { n: 'Peñaflor', c: 'santiago', lat: -33.600, lon: -71.020 },
  { n: 'Peñalolén', c: 'santiago', lat: -33.447, lon: -70.575 },
  { n: 'Providencia', c: 'santiago', lat: -33.431, lon: -70.610 },
  { n: 'Pudahuel', c: 'santiago', lat: -33.510, lon: -70.790 },
  { n: 'Puente Alto', c: 'santiago', lat: -33.600, lon: -70.570 },
  { n: 'Quinta Normal', c: 'santiago', lat: -33.440, lon: -70.720 },
  { n: 'Quilicura', c: 'santiago', lat: -33.363, lon: -70.715 },
  { n: 'Recoleta', c: 'santiago', lat: -33.450, lon: -70.650 },
  { n: 'Renca', c: 'santiago', lat: -33.437, lon: -70.729 },
  { n: 'San Bernardo', c: 'santiago', lat: -33.590, lon: -70.670 },
  { n: 'San José de Maipo', c: 'santiago', lat: -33.700, lon: -70.620 },
  { n: 'San Miguel', c: 'santiago', lat: -33.490, lon: -70.660 },
  { n: 'San Pedro', c: 'santiago', lat: -33.440, lon: -71.120 },
  { n: 'San Ramón', c: 'santiago', lat: -33.540, lon: -70.640 },
  { n: 'Santiago', c: 'santiago', lat: -33.449, lon: -70.669 },
  { n: 'Talagante', c: 'santiago', lat: -33.410, lon: -70.940 },
  { n: 'Til Til', c: 'santiago', lat: -33.430, lon: -70.560 },
  { n: 'Vitacura', c: 'santiago', lat: -33.390, lon: -70.600 },
  { n: 'Pirque', c: 'santiago', lat: -33.630, lon: -70.680 },
  // Ciudades fuera de cobertura — solo para probar el aviso
  { n: 'Viña del Mar', c: 'vina', lat: -33.025, lon: -71.618 },
  { n: 'Concón', c: 'vina', lat: -33.030, lon: -71.840 },
  { n: 'Reñaca', c: 'vina', lat: -33.140, lon: -71.590 },
  { n: 'Quilpué', c: 'vina', lat: -33.050, lon: -71.670 },
  { n: 'Villa Alemana', c: 'vina', lat: -33.070, lon: -71.660 },
  { n: 'Valparaíso', c: 'valparaiso', lat: -33.047, lon: -71.613 },
  { n: 'Casablanca', c: 'valparaiso', lat: -33.180, lon: -71.500 },
  { n: 'Rancagua', c: 'rancagua', lat: -34.171, lon: -70.744 },
  { n: 'Mostazal', c: 'rancagua', lat: -34.380, lon: -70.790 },
  { n: 'Rengo', c: 'rancagua', lat: -34.410, lon: -70.870 },
  { n: 'Codegua', c: 'rancagua', lat: -34.220, lon: -70.730 },
  { n: 'San Vicente', c: 'rancagua', lat: -34.440, lon: -71.100 },
  { n: 'Malloa', c: 'rancagua', lat: -34.370, lon: -70.940 },
  { n: 'San Fernando', c: 'sanfernando', lat: -34.583, lon: -70.983 },
  { n: 'Chimbarongo', c: 'sanfernando', lat: -34.690, lon: -71.220 },
  { n: 'Santa Cruz', c: 'sanfernando', lat: -34.630, lon: -71.430 },
  { n: 'Litueche', c: 'sanfernando', lat: -34.610, lon: -71.620 },
  { n: 'Las Cabras', c: 'sanfernando', lat: -34.290, lon: -71.310 },
  { n: 'Pumanque', c: 'sanfernando', lat: -34.680, lon: -71.380 }
];

const MESES = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

/* ---------- utilidades ---------- */
function distanciaKm(a, b) {
  const rad = Math.PI / 180;
  const dLat = (b.lat - a.lat) * rad;
  const dLon = (b.lon - a.lon) * rad;
  const s = Math.sin(dLat / 2) ** 2 +
    Math.cos(a.lat * rad) * Math.cos(b.lat * rad) * Math.sin(dLon / 2) ** 2;
  const directo = 6371 * 2 * Math.atan2(Math.sqrt(s), Math.sqrt(1 - s));
  return Math.round(directo * 1.3); // factor de ruta
}

function comunaPorNombre(nombre, ciudadId) {
  return COMUNAS.find(c => c.n === nombre && c.c === ciudadId);
}

function formatearCLP(n) {
  return '$' + Math.round(n).toLocaleString('es-CL');
}

function capitalizar(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

/* ---------- cotizador ---------- */
function initCotizador() {
  const form = $('#cotizador');
  if (!form) return;

  const selects = {
    origenCiudad: $('#origen-ciudad'), origenComuna: $('#origen-comuna'),
    destinoCiudad: $('#destino-ciudad'), destinoComuna: $('#destino-comuna')
  };
  const tipo = $('#tipo-vehiculo');
  const urgencia = $('#urgencia');
  const salida = {
    distancia: $('#salida-distancia'),
    tarifa: $('#salida-tarifa'),
    base: $('#salida-base'),
    km: $('#salida-km'),
    extra: $('#salida-extra'),
    aviso: $('#aviso-cobertura'),
    boton: $('#enviar-cotizacion'),
    estado: $('#estado-cotizador')
  };

  CIUDADES.forEach(c => {
    [selects.origenCiudad, selects.destinoCiudad].forEach(sel => {
      const opt = document.createElement('option');
      opt.value = c.id;
      opt.textContent = c.nombre + (c.cobertura ? '' : ' (fuera de cobertura)');
      sel.appendChild(opt);
    });
  });

  function llenarComunas(selectCiudad, selectComuna) {
    const ciudadId = selectCiudad.value;
    const opciones = COMUNAS.filter(c => c.c === ciudadId).sort((a, b) => a.n.localeCompare(b.n, 'es'));
    selectComuna.innerHTML = '';
    const vacio = document.createElement('option');
    vacio.value = '';
    vacio.textContent = 'Selecciona una comuna';
    selectComuna.appendChild(vacio);
    opciones.forEach(o => {
      const opt = document.createElement('option');
      opt.value = o.n;
      opt.textContent = o.n;
      selectComuna.appendChild(opt);
    });
    selectComuna.disabled = false;
  }

  function calcular() {
    const origen = comunaPorNombre(selects.origenComuna.value, selects.origenCiudad.value);
    const destino = comunaPorNombre(selects.destinoComuna.value, selects.destinoCiudad.value);

    if (!origen || !destino) {
      salida.distancia.textContent = '—';
      salida.tarifa.textContent = '—';
      salida.base.textContent = '—';
      salida.km.textContent = '—';
      salida.extra.textContent = '—';
      salida.aviso.hidden = true;
      salida.boton.disabled = true;
      return;
    }

    const ciudadOrigen = CIUDADES.find(c => c.id === selects.origenCiudad.value);
    const ciudadDestino = CIUDADES.find(c => c.id === selects.destinoCiudad.value);
    const conCobertura = ciudadOrigen.cobertura && ciudadDestino.cobertura;

    const km = Math.max(distanciaKm(origen, destino), SHARK.TARIFA.kmMinimo);
    const t = SHARK.TARIFA;
    const tipoSel = tipo.value || 'liviano';
    const extraTipo = t.tipos[tipoSel].extra;
    const recargo = urgencia.value === 'urgencia' ? t.recargoUrgencia : 0;
    const base = t.base;
    const costoKm = km * t.porKm;
    let total = base + costoKm + extraTipo;
    total = total * (1 + recargo);

    salida.distancia.textContent = km + ' km';
    salida.tarifa.textContent = formatearCLP(total);
    salida.base.textContent = formatearCLP(base);
    salida.km.textContent = formatearCLP(costoKm);
    salida.extra.textContent = extraTipo > 0 ? formatearCLP(extraTipo) + (recargo ? ' (+ recargo)' : '') : 'Sin recargo';

    if (conCobertura) {
      salida.aviso.hidden = true;
      salida.boton.disabled = false;
    } else {
      salida.aviso.hidden = false;
      salida.aviso.textContent = 'Sin cobertura por ahora: solo trabajamos Santiago y la Región Metropolitana. Esta cotización es referencial.';
      salida.boton.disabled = true;
    }
  }

  selects.origenCiudad.addEventListener('change', () => { llenarComunas(selects.origenCiudad, selects.origenComuna); calcular(); });
  selects.destinoCiudad.addEventListener('change', () => { llenarComunas(selects.destinoCiudad, selects.destinoComuna); calcular(); });
  selects.origenComuna.addEventListener('change', calcular);
  selects.destinoComuna.addEventListener('change', calcular);
  tipo.addEventListener('change', calcular);
  urgencia.addEventListener('change', calcular);

  llenarComunas(selects.origenCiudad, selects.origenComuna);
  llenarComunas(selects.destinoCiudad, selects.destinoComuna);
  calcular();

  form.addEventListener('submit', event => {
    event.preventDefault();
    const origen = comunaPorNombre(selects.origenComuna.value, selects.origenCiudad.value);
    const destino = comunaPorNombre(selects.destinoComuna.value, selects.destinoCiudad.value);
    const ahora = new Date();
    const fecha = ahora.getDate() + ' de ' + MESES[ahora.getMonth()] + ' a las ' +
      String(ahora.getHours()).padStart(2, '0') + ':' + String(ahora.getMinutes()).padStart(2, '0');
    salida.estado.textContent =
      'Maqueta: la solicitud no se envía ni se guarda. Referencia del cálculo — ' +
      capitalizar(origen.n) + ' → ' + capitalizar(destino.n) + ' · ' +
      salida.distancia.textContent + ' · ' + salida.tarifa.textContent + ' · generado el ' + fecha + '.';
  });
}

/* ---------- mapa de regiones ---------- */
function initMapa() {
  const estado = $('#region-status');
  if (!estado) return;
  const botones = $$('[data-region-name]');
  const svg = document.getElementById('mapa-svg');
  const base = estado.textContent;

  function mostrar(id) {
    const boton = botones.find(b => b.dataset.regionName === id);
    if (!boton) return;
    botones.forEach(b => b.classList.toggle('is-highlighted', b === boton));
    estado.textContent = boton.textContent.trim() + ' · ' + boton.dataset.nota;
    if (svg && svg.contentDocument) {
      const grupos = svg.contentDocument.querySelectorAll('[data-region]');
      grupos.forEach(g => g.classList.toggle('is-highlighted', g.dataset.region === id));
    }
  }

  function reiniciar() {
    botones.forEach(b => b.classList.remove('is-highlighted'));
    estado.textContent = base;
    if (svg && svg.contentDocument) {
      svg.contentDocument.querySelectorAll('[data-region]').forEach(g => g.classList.remove('is-highlighted'));
    }
  }

  botones.forEach(b => {
    b.addEventListener('pointerenter', () => mostrar(b.dataset.regionName));
    b.addEventListener('focus', () => mostrar(b.dataset.regionName));
    b.addEventListener('click', () => mostrar(b.dataset.regionName));
    b.addEventListener('pointerleave', () => { if (document.activeElement !== b) reiniciar(); });
    b.addEventListener('blur', reiniciar);
  });
}

/* ---------- menú móvil ---------- */
function initMenu() {
  const boton = $('.menu-toggle');
  const nav = $('#nav-principal');
  if (!boton || !nav) return;
  boton.addEventListener('click', () => {
    const abierto = nav.classList.toggle('abierto');
    boton.setAttribute('aria-expanded', abierto ? 'true' : 'false');
  });
  nav.addEventListener('click', e => {
    if (e.target.tagName === 'A') {
      nav.classList.remove('abierto');
      boton.setAttribute('aria-expanded', 'false');
    }
  });
}

/* ---------- datos de contacto en toda la página ---------- */
function initContacto() {
  const tel = SHARK.TELEFONO.replace(/\s/g, '');
  $$('[data-telefono]').forEach(el => { el.textContent = SHARK.TELEFONO; });
  $$('[data-telefono-link]').forEach(el => { el.href = 'tel:+' + tel; });
  $$('[data-whatsapp]').forEach(el => {
    el.href = 'https://wa.me/' + SHARK.WHATSAPP +
      '?text=' + encodeURIComponent('Hola, quiero cotizar un traslado de grúa.');
  });
  const anio = $('#anio');
  if (anio) anio.textContent = new Date().getFullYear();
}

/* ----------Club de referidos (formulario de maqueta) ---------- */
function initReferidos() {
  const form = $('#form-referidos');
  if (!form) return;
  form.addEventListener('submit', event => {
    event.preventDefault();
    const estado = $('#estado-referidos');
    if (estado) {
      estado.textContent = 'Maqueta: la inscripción no se envía ni se guarda. El programa de referidos se habilita con el sistema oficial.';
    }
  });
}


document.addEventListener('DOMContentLoaded', () => {
  initContacto();
  initCotizador();
  initMapa();
  initMenu();
  initReferidos();
});
