
function filterEvenNumbers(arr) {
  let evenNumbers = []; // am facut array pt a stoca numerele pare

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) { //verificare daca nr este par
      evenNumbers.push(arr[i]); //si se adauga in array
    }
  }

  return evenNumbers; //se retuneaza numerele pare in lista de valori
}

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function handleFilter() { //functie pt alegere tip de filtrare
  const input = document.getElementById("inputNumbers").value.trim();
  const output = document.getElementById("output");
  const filterType = document.getElementById("filterType").value;

  if (!input) { 
    output.textContent = "Te rog să introduci o listă de numere."; //mesaj de averizare
    return;
  }

  const numbers = input.split(/\s+/).map(Number).filter(n => !isNaN(n)); //se imparte textul dupa spatii si se convertesc elementele la number, excluzand valorire care nu sunt numere valide

  let filtered = []; // initialiare array gol pt rezultate

  switch (filterType) { //schimbare filtru ales de utilizator
    case "pare":
      filtered = numbers.filter(n => n % 2 === 0);
      break;
    case "impare":
      filtered = numbers.filter(n => n % 2 !== 0);
      break;
    case "prime":
      filtered = numbers.filter(n => isPrime(n)); //functie isprime pt numere prime
      break;
    case "multipli3":
      filtered = numbers.filter(n => n % 3 === 0);
      break;
    default:  // dacă nu s-a ales niciun filtru se afișează toate numerele introduse
      filtered = numbers;
  }

  if (filtered.length === 0) { //mesaj de avertizare
    output.textContent = "Nu există numere care să corespundă filtrului ales.";
  } else {
    output.textContent = "Rezultate filtrate:\n" + filtered.join(", ");
  }
}






  function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}


  for (let i = 0; i < numberStrings.length; i++) {
    numbers.push(Number(numberStrings[i]));// parcurgere si conversie string la numere apoi se adauga in array
  }

  const evenNums = filterEvenNumbers(numbers);
  document.getElementById("output").textContent = "Numerele pare sunt: " + evenNums.join(" "); //afisare- join refacere sir intreg


// citire randuri din fisier text si imprimare doar randuri cu numere pare
function handleFile() {
  const fileInput = document.getElementById("fileInput");
  const output = document.getElementById("outputFile");

  if (!fileInput.files.length) {// conditie de verificare daca s-a ales un fisier
    output.textContent = "Te rog să alegi un fișier .txt."; //mesaj de avertizare 
    return;
  }

  const file = fileInput.files[0];
  const reader = new FileReader();// am creat obiect care citeste fisierul

  reader.onload = function(event) {//cand se termina de citit fisierul se executa functia
    const content = event.target.result; // variabila content pt salva textul din fisier
    const lines = content.split("\n");  // impart textul in linii separate
    const evenLines = []; //lista pt stocare valori pare

    for (let i = 0; i < lines.length; i++) {
      if ((i + 1) % 2 === 0) { //verificare daca  este par
        evenLines.push(lines[i]); //adaugare in lista daca respecta conditia
      }
    }

    output.textContent = "Liniile pare sunt:\n" + evenLines.join("\n");
  };

  reader.readAsText(file); //se incepe citirea fisierului, apoi se executa functia reader.onload
}
function handleJSON() {  //funcctie 
  const fileInput = document.getElementById("jsonInput");  //pt a accesa fisierul
  const output = document.getElementById("jsonOutput");

  if (!fileInput.files.length) {
    output.textContent = "alege un fișier .json.";// verificare daca s-a ales un fisier
    return;
  }

  const file = fileInput.files[0]; //in variabila file are loc salvarea fisierului
  const reader = new FileReader(); //crez obiect fileReader pt citire fisier in browser

  reader.onload = function(event) { //apelare functie
    const content = event.target.result; //se salveaza continutul fisierului citit in variabila content
    const data = JSON.parse(content); // se transforma textul in obiect json
    const numere = data.numere;  //se extrage lista de numere

    const numerePare = []; // care se stocheaza in acest array

    for (let i = 0; i < numere.length; i++) {  //parcurgere si verificare numeree pare
      if (numere[i] % 2 === 0) {
        numerePare.push(numere[i]);  //adaugare in lista
      }
    }

    output.textContent = "Numerele pare din fișierul JSON sunt:\n" + numerePare.join(", ");
  };

  reader.readAsText(file);
}
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}
function resetFields() {  //buton pt  resetare 
  document.getElementById("inputNumbers").value = "";
  document.getElementById("output").textContent = "";
}
