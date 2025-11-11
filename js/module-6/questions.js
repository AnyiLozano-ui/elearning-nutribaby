const initQuestion = () => {
	const selecteds = JSON.parse(localStorage.getItem('selecteds')),
		last_item = selecteds[selecteds.length - 1]

	for (let i = 0; i < 10; i++) {
		$(`.pregunta${i + 1}`).fadeOut()
	}

	$(`.pregunta${last_item.question + 1}`).fadeIn()
	$('.buenas').css('top', last_item.correct.top)
	$('.buenas').css('left', last_item.correct.left)
	if (last_item.correct.height)
		$('.buenas').css('height', last_item.correct.height)
	if (last_item.correct.display)
		$('.buenas').css('display', last_item.correct.display)

	$('.resp-mal').css('top', last_item['resp-mal'].top)
	$('.resp-mal').css('left', last_item['resp-mal'].left)
	if (last_item['resp-mal'].height)
		$('.resp-mal').css('height', last_item['resp-mal'].height)
	if (last_item['resp-mal'].display)
		$('.resp-mal').css('display', last_item['resp-mal'].display)

	$('.resp-mal2').css('top', last_item['resp-mal2'].top)
	$('.resp-mal2').css('left', last_item['resp-mal2'].left)
	if (last_item['resp-mal2'].height)
		$('.resp-mal2').css('height', last_item['resp-mal2'].height)
	if (last_item['resp-mal2'].display)
		$('.resp-mal2').css('display', last_item['resp-mal2'].display)

	$('.resp-mal3').css('top', last_item['resp-mal3'].top)
	$('.resp-mal3').css('left', last_item['resp-mal3'].left)
	if (last_item['resp-mal3'].height)
		$('.resp-mal3').css('height', last_item['resp-mal3'].height)
	if (last_item['resp-mal3'].display)
		$('.resp-mal3').css('display', last_item['resp-mal3'].display)
}

const addControls = () => {
	$('.buenas').on('click', () => handleCorrect())
	$('.resp-mal').on('click', () => { $('.resp-mal').css('background', "#ff00004f"); handleIncorrect() })
	$('.resp-mal2').on('click', () => { $('.resp-mal2').css('background', "#ff00004f"); handleIncorrect() })
	$('.resp-mal3').on('click', () => { $('.resp-mal3').css('background', "#ff00004f"); handleIncorrect() })
}

const handleCorrect = () => {
	const response = JSON.parse(localStorage.getItem('responses'))
	localStorage.setItem('responses', JSON.stringify([...response, 'Check']))
	$('.respuesta').fadeIn()
	$('.buenas').css('background', "#00800047")
	const sound = document.getElementById('correcto')
	sound.currentTime = 0
	sound.play()
}

const handleIncorrect = () => {
	const response = JSON.parse(localStorage.getItem('responses'))
	localStorage.setItem('responses', JSON.stringify([...response, 'Fail']))
	$('.mala').fadeIn()
	$('.mala')
    const sound = document.getElementById('error')
	sound.currentTime = 0
	sound.play()
}

$(document).ready(() => {
	initQuestion()
	addControls()
	$('.respuesta').on('click', () => {
		const response = JSON.parse(localStorage.getItem('responses'))
		if (response.length === 10) {
			const total = JSON.parse(localStorage.getItem('responses')).filter(
				(item) => item === 'Check'
			).length
			if (total > 7)
				return (window.location.href = './Nutribabay-91.html')
			else if (total < 8)
				return (window.location.href = './Nutribabay-92.html')
			else console.log(total)
		} else {
			window.location.href = './Nutribabay-89.html'
		}
	})
	$('.mala').on('click', () => {
		const response = JSON.parse(localStorage.getItem('responses'))
		if (response.length === 10) {
			const total = JSON.parse(localStorage.getItem('responses')).filter(
				(item) => item === 'Check'
			).length
			if (total > 7)
				return (window.location.href = './Nutribabay-91.html')
			else if (total < 8)
				return (window.location.href = './Nutribabay-92.html')
			else console.log(total)
		} else {
			window.location.href = './Nutribabay-89.html'
		}
	})
})
