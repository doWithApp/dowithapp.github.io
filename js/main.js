let demoButton, iframe, modal, video;

window.addEventListener('DOMContentLoaded', () => {
  demoButton = document.getElementById('demo-video');
  demoVideo = document.getElementById('demo-youtube');
  iframe = document.querySelector( 'iframe');
  video = document.querySelector( 'video' );
  modal = document.querySelector('.modal');

  demoButton.addEventListener('click', openDemoModal);
  modal.addEventListener('click', hideDemoModal);
});

function hideDemoModal() {
  stopVideo();
  modal.classList.remove("show");
}

function openDemoModal() {
  modal.classList.add('show');
}

function stopVideo () {
	if ( iframe ) {
		const iframeSrc = iframe.src;
		iframe.src = iframeSrc;
	}
	if ( video ) {
		video.pause();
	}
};
