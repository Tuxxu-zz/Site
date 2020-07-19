$(document).ready(function(){
	var d = new Date();
	var n = d.getHours();
	if (n > 18 || n < 6)
	  document.body.className = "night";
	else
	  document.body.className = "day";
});

new TypeIt('#about', {
  speed: 50,
  waitUntilVisible: true
})
.type('I\'m a Brazilian')
.pause(200)
.break()
.type('designer who')
.pause(200)
.break()
.type('currently works')
.pause(200)
.break()
.type('at Ampfy')
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

$( function() {
		$( ".glitch-img" ).mgGlitch({
				  destroy : false,
          glitch: true,
          scale: true,
          blend : true,
          blendModeType : 'screen',
          glitch1TimeMin : 200,
          glitch1TimeMax : 400,
          glitch2TimeMin : 10,
          glitch2TimeMax : 100,
		});
});
