let selection = []

// Funcion para iniciar el quiz en la pagina de inicio
const initQuiz = () => {
	if (window.location.href.includes('Nutribabay-88.html')) {
		const selecteds = localStorage.getItem('selecteds')
		const response = localStorage.getItem('responses')
		if (!selecteds) localStorage.setItem('selecteds', JSON.stringify([]))
		if (!response) localStorage.setItem('responses', JSON.stringify([]))
	} else {
		const response = localStorage.getItem('responses')
		if (!response) window.location.href = './Nutribabay-88.html'
	}
}

// Function para girar carta
const addControlsToMove = () => {
	if (window.location.href.includes('Nutribabay-89.html')) {
		const selecteds = JSON.parse(localStorage.getItem('selecteds'))
		for (let i = 0; i < 20; i++) {
			$(`.cuadro${i + 1}`).on('click', () => {
				if (selecteds) {
					const exists = selecteds.find(
						(item) => item.card === i || item.tuple === i
					)
					if (!exists) {
						$(`.cuadro${i + 1}`).fadeOut()
						$(`.hm${i + 1}`).fadeIn()
						handleValidateIsCorrect(i)
					}
				}
			})
		}
	}
}

// Funcion para validar si esta correcta la data
const handleValidateIsCorrect = (index) => {
	selection.push(index)
	if (selection.length === 2) {
		const data = cardsData.find(
			(item) => item.card === selection[0] || item.tuple === selection[0]
		)
		if (data.card === selection[0] && data.tuple === selection[1]) {
			const dataToSave = JSON.parse(localStorage.getItem('selecteds'))
			localStorage.setItem(
				'selecteds',
				JSON.stringify([...dataToSave, data])
			)
			setTimeout(() => redirectToQuestions(), 2000)
		}

		if (data.tuple === selection[0] && data.card === selection[1]) {
			const dataToSave = JSON.parse(localStorage.getItem('selecteds'))
			localStorage.setItem(
				'selecteds',
				JSON.stringify([...dataToSave, data])
			)
			setTimeout(() => redirectToQuestions(), 2000)
		}

		if (!(data.tuple === selection[0] && data.card === selection[1]) && !(data.card === selection[0] && data.tuple === selection[1])) {
            setTimeout(() => {
                for (let i = 0; i < selection.length; i++) {
                    $(`.cuadro${selection[i] + 1}`).fadeIn()
                    $(`.hm${selection[i] + 1}`).fadeOut()
                }

                selection = []
            }, 1000)
        }
	}
}

// Funcion para voltear las cartas
const validateCards = () => {
	const selecteds = JSON.parse(localStorage.getItem('selecteds'))
	const responses = JSON.parse(localStorage.getItem('responses'))
	if (selecteds) {
		for (let i = 0; i < selecteds.length; i++) {
			if (responses[i] === 'Fail') {
				$(`.cuadro${selecteds[i].card + 1}`).css(
					'filter',
					'grayscale(1)'
				)
				$(`.cuadro${selecteds[i].tuple + 1}`).css(
					'filter',
					'grayscale(1)'
				)
			} else {
				$(`.cuadro${selecteds[i].card + 1}`).fadeOut()
				$(`.cuadro${selecteds[i].tuple + 1}`).fadeOut()
				$(`.hm${selecteds[i].card + 1}`).fadeIn()
				$(`.hm${selecteds[i].tuple + 1}`).fadeIn()
			}
		}
	}
}

// Funcion para redirigir a las preguntas
const redirectToQuestions = () => {
	window.location.href = './Nutribabay-90.html'
}

$(document).ready(() => {
	initQuiz()
	addControlsToMove()
	validateCards()
})
