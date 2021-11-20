const d = new Date();

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function showPrompt() {
  await sleep(100);

  let random = Math.floor(Math.random() * 10);
  if(random == 0) {
    alert("Tired? Go to sleep.\nThirsty? Drink some water.\nHungry? Get some food.\nStuck? Meditate.");
    //Only activates between the months of October and April
    if(d.getMonth() < 4 || d.getMonth() >= 9)
      alert("Cold? Bundle up or warm up.");
  }
}

showPrompt();
