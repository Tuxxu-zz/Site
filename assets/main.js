$(document).ready(function(){
	var d = new Date();
	var n = d.getHours();
	if (n > 5 || n < 18)
	  document.body.className = "night";
	else
	  document.body.className = "day";
});

new TypeIt('#about', {
  speed: 50,
  waitUntilVisible: true
})
.type('I am a Brazilian')
.pause(200)
.break()
.type('designer based')
.pause(200)
.break()
.type('in São Paulo.')
.break()
.break()
.pause(500)
.type('Passionate')
.pause(300)
.break()
.type('about pizza')
.break()
.type('and cats')
.type('...')
.pause(350)
.delete(23)
.pause(350)
.type('about design')
.break()
.type('and new')
.break()
.type('technologies!')
.go();
