function navEU() {
    window.location = "./destinations/select_r.html";
}

function navAF() {
    window.location = "./destinations/select_af.html";
}

function navAS() {
    window.location = "./destinations/select_as.html";
}

function navAM() {
    window.location = "./destinations/select_am.html";
}

function navOC() {
    window.location = "./destinations/select_oc.html";
}

document.querySelector("#EU").addEventListener('click', navEU);
document.querySelector("#AF").addEventListener('click', navAF);
document.querySelector("#AS").addEventListener('click', navAS);
document.querySelector("#AM").addEventListener('click', navAM);
document.querySelector("#OC").addEventListener('click', navOC);