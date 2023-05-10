// Ustaw datę wakacji
var vacationDate = new Date('2023-06-23');

function updateCountdown() {
  var currentDate = new Date();
  var timeDifference = vacationDate - currentDate;

  // Obliczanie liczby dni, godzin, minut i sekund
  var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  var hours = Math.floor(timeDifference / (1000 * 60 * 60) );
  var minutes = Math.floor(timeDifference / (1000 * 60) );
  var seconds = Math.floor(timeDifference / 1000 );

  // Aktualizacja wyświetlanych wartości
  document.getElementById('days').textContent = days;
  document.getElementById('hours').textContent = hours;
  document.getElementById('minutes').textContent = minutes;
  document.getElementById('seconds').textContent = seconds;
}

// Uruchomienie funkcji aktualizującej co sekundę
setInterval(updateCountdown, 1000);