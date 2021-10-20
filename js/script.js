/*
  chiedere nome, cognome e colore preferito
  generare password dagli stessi concatenati + "21"
  scrivere da quanti caratteri è composta la password
*/ 

const firstName = prompt("Qual è il tuo nome?");
const lastName = prompt("Qual è il tuo cognome?");
const favColor = prompt("Qual è il tuo colore preferito?");
const pwd = firstName + lastName + favColor + "21";

//costante che definisce la lunghezza della password, bonus
const pwdLength = pwd.length;


document.getElementById("content").innerHTML = 
`
  <p>
    La password generata in base ai dati inseriti è: <strong>${pwd}</strong> <br>
    E' stata generata una password lunga <strong>${pwdLength}</strong> caratteri.
  </p>
`;