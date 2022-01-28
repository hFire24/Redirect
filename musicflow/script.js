function randomStation(id) {
  let number = 0;
  do {
    number = Math.ceil(Math.random() * 12)
  } while(number === id);
  location.href = number;
}
