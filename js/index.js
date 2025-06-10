(function () {
  function $(id) {
    return document.getElementById(id);
  }

  var card = $('card'),
    openB = $('open'),
    closeB = $('close'),
    timer = null;

  // Create audio element
  var audio = new Audio('song.mp3');
  audio.loop = true; // Optional: loop the song
  audio.volume = 0.7; // Optional: set volume (0.0 to 1.0)

  console.log('wat', card);

  openB.addEventListener('click', function () {
    card.setAttribute('class', 'open-half');

    // Play the song
    audio.play().catch(function (error) {
      console.log('Audio play failed:', error);
    });

    if (timer) clearTimeout(timer);
    timer = setTimeout(function () {
      card.setAttribute('class', 'open-fully');
      timer = null;
    }, 1000);
  });

  closeB.addEventListener('click', function () {
    card.setAttribute('class', 'close-half');

    // Optional: Pause the song when closing
    audio.pause();
    audio.currentTime = 0; // Reset to beginning

    if (timer) clearTimeout(timer); // Fixed typo: was clearTimerout
    timer = setTimeout(function () {
      card.setAttribute('class', '');
      timer = null;
    }, 1000);
  });

}());