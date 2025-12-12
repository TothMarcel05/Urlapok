// /^[a-zA-ZáéíóöőúüűÁÉÍÓÖŐÚÜŰ ]+$/

function ellenorAlap()
{
    let nev = document.forms["alapUrlap"]["nev"].value;
    console.log(nev);

    if(!nev.trim() === ""){
        alert("A név mező nem lehet üres!");
        return false;
    }
    
    let nevfilter = /^[a-zA-ZáéíóöőúüűÁÉÍÓÖŐÚÜŰ ]+$/;
}