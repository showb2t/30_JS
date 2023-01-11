function invertHex(hex) {
  return (Number(`0x1${hex}`) ^ 0xFFFFFF).toString(16).substr(1).toUpperCase()
}

window.addEventListener('keydown', function(e){
		const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
		const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
		if (!audio) return;
		audio.currentTime = 0;
		audio.play();
		if (!key) return;
		key.classList.add('playing');
		color = Math.floor(Math.random() * 14562358).toString(16);
		key.style.backgroundColor = "#"+ color;
		key.innerHTML = `${e.keyCode}`;
		key.style.color = "#"+invertHex(color);
	});

function removeTransition(e){
	if (e.propertyName !== 'transform') return;
	this.classList.remove('playing');
};

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition ));
