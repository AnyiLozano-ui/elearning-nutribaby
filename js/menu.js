const menu = [
	{
		label: 'Inicio',
		children: [
			{
				label: 'Introducción y objetivos del curso',
				link: '/Nutribabay-03.html',
			},
			{
				label: 'Video introductorio',
				link: '/Nutribabay-04.html',
			},
		],
	},
	{
		label: 'Módulo 1. Fundamentos de la nutrición infantil',
		children: [
			{
				label: 'Nutrición en los primeros años: la base de una vida saludable',
				link: '/Nutribabay-05.html',
			},
			{
				label: 'Lactancia materna y fórmulas infantiles: Pilares de la nutrición en la primera infancia',
				link: '/Nutribabay-07.html',
			},
		],
	},
	{
		label: 'Módulo 2. Desarrollo del sistema inmune en los primeros meses de vida',
		children: [
			{
				label: 'Lactancia materna y desarrollo del sistema inmunológico',
				link: '/Nutribabay-09.html',
			},
			{
				label: 'Parto, lactancia y nutrición: claves para una microbiota equilibrada',
				link: '/Nutribabay-10.html',
			},
		],
	},
	{
		label: 'Módulo 3. Paso a paso: fórmulas que acompañan el crecimiento',
		children: [
			{
				label: 'Fórmulas infantiles: del nacimiento a los 3 años',
				link: '/Nutribabay-12.html',
			},
			{
				label: 'Nutrición a medida: una fórmula para cada etapa',
				link: '/Nutribabay-13.html',
			},
		],
	},
	{
		label: 'Evaluación interactiva: módulos 1, 2 y 3.',
		link: '/Nutribabay-14.html',
	},
	{
		label: 'Módulo 4. Macronutrientes y micronutrientes en las fórmulas infantiles ',
		children: [
			{
				label: '4.1 Hidratos de carbono',
				children: [
					{
						label: 'Lactosa: el carbohidrato clave en las fórmulas infantiles',
						link: '/Nutribabay-29.html',
					},
					{
						label: 'Carbohidratos en fórmulas infantiles: lo que sí y lo que no',
						link: '/Nutribabay-30.html',
					},
					{
						label: '¿Es cierto que las fórmulas infantiles de inicio no deben contener maltodextrina?',
						link: '/Nutribabay-31.html',
					},
				],
			},
			{
				label: '4.2 Lípidos',
				children: [
					{
						label: 'La importancia de los lípidos en la nutrición infantil',
						link: '/Nutribabay-33.html',
					},
					{
						label: 'Las grasas en los primeros meses de vida: 5 funciones clave para la nutrición del bebé',
						link: '/Nutribabay-34.html',
					},
					{
						label: 'DHA y ARA: aliados en la nutrición temprana',
						link: '/Nutribabay-35.html',
					},
					{
						label: 'Triglicéridos de cadena media (TGCM) en la nutrición infantil',
						link: '/Nutribabay-36.html',
					},
					{
						label: 'El poder del β-palmitato: por qué el “beta” hace la diferencia',
						link: '/Nutribabay-37.html',
					},
					{
						label: 'Perfil lipídico en Nutribaby®',
						link: '/Nutribabay-38.html',
					},
				],
			},
			{
				label: '4.3 Proteínas',
				children: [
					{
						label: 'Proteínas en las fórmulas infantiles',
						link: '/Nutribabay-40.html',
					},
					{
						label: 'Suero y caseína: proteínas importantes en la leche materna, la de vaca y las fórmulas infantiles',
						link: '/Nutribabay-41.html',
					},
				],
			},
			{
				label: '4.4 Vitaminas y minerales',
				children: [
					{
						label: 'Vitaminas y minerales en las fórmulas infantiles',
						link: '/Nutribabay-43.html',
					},
				],
			},
		],
	},

	{
		label: 'Evaluación interactiva: módulo 4',
		link: '/Nutribabay-44.html',
	},
	{
		label: 'Módulo 5. Microbiota y sus aliados: probióticos y prebióticos',
		children: [
			{
				label: 'Probióticos, prebióticos y su relación con la leche materna y las fórmulas infantiles',
				link: '/Nutribabay-57.html',
			},
			{
				label: '¿Qué son los probióticos?',
				link: '/Nutribabay-58.html',
			},
			{
				label: 'Lactobacillus y Bifidobacterium: beneficios y seguridad',
				link: '/Nutribabay-59.html',
			},
			{
				label: '¿Qué son los prebióticos?',
				link: '/Nutribabay-60.html',
			},
			{
				label: 'GOS y “factor bífido”: beneficios clínicos',
				link: '/Nutribabay-61.html',
			},
			{
				label: 'Combinación sinbiótica en NutriBaby® (probióticos+prebióticos)',
				link: '/Nutribabay-62.html',
			},
		],
	},
	{
		label: 'Evaluación interactiva: módulo 5',
		link: '/Nutribabay-63.html',
	},

	{
		label: 'Módulo 6. Componentes bioactivos diferenciales',
		children: [
			{
				label: '6.1. Oligosacáridos de la leche humana',
				children: [
					{
						label: 'HMO: carbohidratos únicos de la leche humana',
						link: '/Nutribabay-76.html',
					},
					{
						label: 'HMO en la leche materna y en las fórmulas infantiles',
						link: '/Nutribabay-77.html',
					},
					{
						label: 'HMO y microbiota: beneficios para el equilibrio intestinal',
						link: '/Nutribabay-78.html',
					},
					{
						label: 'Los HMO contra la adhesión de patógenos',
						link: '/Nutribabay-79.html',
					},
					{
						label: 'Los HMO y su función inmunomoduladora',
						link: '/Nutribabay-80.html',
					},
					{
						label: 'Los HMO y el neurodesarrollo infantil',
						link: '/Nutribabay-81.html',
					},
				],
			},
			{
				label: '6.2. Membrana del glóbulo de grasa láctea',
				children: [
					{
						label: 'MFGM: la membrana invisible de la leche materna',
						link: '/Nutribabay-83.html',
					},
					{
						label: 'Cómo la MFGM impulsa el desarrollo del cerebro del bebé',
						link: '/Nutribabay-84.html',
					},
					{
						label: 'La MFGM y sus efectos en el metabolismo infantil',
						link: '/Nutribabay-85.html',
					},
					{
						label: 'MFGM y salud intestinal del lactante',
						link: '/Nutribabay-86.html',
					},
					{
						label: 'MFGM: apoyo inmunológico para el lactante',
						link: '/Nutribabay-87.html',
					},
				],
			},
		],
	},

	{
		label: 'Evaluación interactiva: módulo 6',
		link: '/Nutribabay-88.html',
	},

	{
		label: 'Módulo 7. Nutribaby®: portafolio y diferenciadores',
		children: [
			{
				label: 'Nutribaby® 1, 2 y 3: definición, indicaciones y beneficios',
				link: '/Nutribabay-94.html',
			},
			{
				label: 'La importancia de la osmolaridad en las fórmulas infantiles',
				link: '/Nutribabay-95.html',
			},
		],
	},

	{
		label: 'Módulo 8. Preparación y manipulación de las fórmulas',
		children: [
			{
				label: 'Nutribaby®: guía práctica de preparación',
				link: '/Nutribabay-97.html',
			},
		],
	},

	{
		label: 'Evaluación interactiva: módulo 7 y 8',
		link: '/Nutribabay-98.html',
	},

	{
		label: 'Cierre del curso',
		link: '/Nutribabay-107.html',
	},
]

let active = null

const handleSetChildren = (items, parentIndex, parentKey = '') => {
	let htmlitems = ''

	for (let i = 0; i < items.length; i++) {
		const node = items[i]
		const key = parentKey ? `${parentKey}-${i}` : `${parentIndex}-${i}` // identificador único
		const isActive =
			node.link && window.location.pathname.includes(node.link)
		if (isActive) active = parentIndex

		if (node.children && node.children.length) {
			// Nodo con hijos: título + contenedor con su propio content-{key}
			htmlitems += `
        <li class="item-children ${
			isActive ? 'active' : ''
		}" style="color: #46afaf !important">
          <h4 class="menu-label" id="menu-${key}">${node.label}</h4>
          <div class="content-${key} content-data">
            ${handleSetChildren(node.children, parentIndex, key)}
          </div>
        </li>
      `
		} else {
			htmlitems += `
        <li class="item-children ${isActive ? 'active' : ''}">
          ${
				node.link
					? `<a href=".${node.link}">${node.label}</a>`
					: node.label
			}
        </li>
      `
		}
	}

	return `
		<div class="items-container">
			<ul class="lista-contenido">
				${htmlitems}
			</ul>
		</div>
	`
}

const handleSetItem = (element, index) => {
	return `
        <h3 class="menu-label" id="menu-${index}">${element.label}</h3>
        <div class="content-${index} content-data">
            ${handleSetChildren(element.children, index)}
        </div>
    `
}

const openAccordion = ($el) => {
	const el = $el.get(0)
	$el.css({ display: 'block', height: '0px' })
	el.offsetHeight
	const end = el.scrollHeight + 'px'
	$el.css('height', end)
	$el.one('transitionend', (e) => {
		if (e.originalEvent.propertyName === 'height') {
			$el.css('height', 'auto')
		}
	})
}

const closeAccordion = ($el) => {
	const el = $el.get(0)
	$el.css('height', el.scrollHeight + 'px')
	el.offsetHeight
	$el.css('height', '0px')
	$el.one('transitionend', (e) => {
		if (e.originalEvent.propertyName === 'height') {
			$el.css('display', 'none')
		}
	})
}

const closeSiblings = ($content) => {
	// cierra SOLO los hermanos del mismo nivel
	$content
		.parent()
		.siblings()
		.each(function () {
			const $c = $(this).children('.content-data')
			if ($c.length && $c.css('display') !== 'none') {
				closeAccordion($c)
			}
		})
}

const handleSetEventElement = (selector, id) => {
	$(selector).on('click', (e) => {
		if (e.target.tagName === 'A') return // si hay link, deja navegar
		const $content = $(`.content-${id}`)

		if ($content.css('display') === 'none') {
			closeSiblings($content) // << solo hermanos del mismo nivel
			openAccordion($content)
		} else {
			closeAccordion($content)
		}
	})
}

$(document).ready(() => {
	// --- [AGREGADO 1] Normaliza ítems con link (sin children) ---
	menu.forEach((m) => {
		if (
			(!Array.isArray(m.children) || m.children.length === 0) &&
			typeof m.link === 'string'
		) {
			m.children = [{ label: m.label, link: m.link }]
			m.__direct = true // marcar como "link directo"
		}
	})
	// -------------------------------------------------------------

	let htmlData = ''
	for (let i = 0; i < menu.length; i++) {
		htmlData += handleSetItem(menu[i], i)
	}

	$('.content').html(htmlData)

	$('[id^="menu-"]').each(function () {
		const id = $(this).attr('id').replace('menu-', '')
		handleSetEventElement(`#menu-${id}`, id)
	})

	$('.close-button').on('click', () => {
		$('.menu').css('display', 'none')
	})

	$('.hamburguesa').on('click', () => {
		$('.menu').css('display', 'block')
	})

	// --- [AGREGADO 2] Convierte header en link y oculta desplegable ---
	menu.forEach((m, i) => {
		if (!m.__direct) return

		const $h3 = $(`#menu-${i}`)
		const $content = $(`.content-${i}`)

		// Desactivar toggle de acordeón en este ítem
		$h3.off('click')

		// Convertir el <h3> en enlace directo
		const href = '.' + (m.link || m.children?.[0]?.link || '#')
		if ($h3.find('a').length === 0) {
			$h3.wrapInner(
				`<a href="${href}" class="menu-directo" style="text-decoration:none;color:#084c8e;font-size: 1.7vw;"></a>`
			)
		} else {
			$h3.find('a').attr('href', href)
		}

		// Ocultar su contenedor de items
		$content.css('display', 'none').attr('aria-hidden', 'true')

		// Opcional: UX de link
		$h3.css('cursor', 'pointer')
	})
})
