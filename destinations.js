function navEU() {
    window.location = "select_r.html";
}

function navAF() {
    window.location = "select_af.html";
}

function navAS() {
    window.location = "select_as.html";
}

function navAM() {
    window.location = "select_am.html";
}

function navOC() {
    window.location = "select_oc.html";
}

document.querySelector("#EU").addEventListener('click', navEU);
document.querySelector("#AF").addEventListener('click', navAF);
document.querySelector("#AS").addEventListener('click', navAS);
document.querySelector("#AM").addEventListener('click', navAM);
document.querySelector("#OC").addEventListener('click', navOC);