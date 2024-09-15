var devis= document.forms.devis;
const table= document.querySelector(".tableau table tbody");

function test(){
    console.log(devis.elements.nom.value + " " + devis.elements.tel.value +  " " + devis.elements.mail.value +  " " + devis.elements.adresse.value + " " + devis.elements.destination.value);
}

function ajouter(){
    const nvVoyage = document.createElement('tr');
    const nomTd = document.createElement('td');
    const prenomTd = document.createElement('td');
    const mailTd = document.createElement('td');
    const telTd = document.createElement('td');
    const adresseTd = document.createElement('td');
    const villeTd = document.createElement('td');
    const zipcodeTd = document.createElement('td');
    const destinationTd = document.createElement('td');

    nomTd.textContent = document.devis.nom.value
    prenomTd.textContent = document.devis.prenom.value
    mailTd.textContent = document.devis.mail.value
    telTd.textContent = document.devis.tel.value
    adresseTd.textContent = document.devis.adresse.value
    villeTd.textContent = document.devis.ville.value
    zipcodeTd.textContent = document.devis.zipcode.value
    destinationTd.textContent = document.devis.destination.value
    nomTd.textContent = document.devis.nom.value
    nomTd.textContent = document.devis.nom.value

    if (!document.devis.nom.checkValidity() ||
          !document.devis.prenom.checkValidity() ||
          !document.devis.adresse.checkValidity() ||
          !document.devis.mail.checkValidity()
         ) {
               return
        }

    nvVoyage.append(nomTd,prenomTd,mailTd,telTd,adresseTd,villeTd,zipcodeTd,destinationTd);
    table.appendChild(nvVoyage);
}

function reinit() {
    const tbody = document.querySelector(".tableau table tbody");
    tbody.innerHTML= "";
}