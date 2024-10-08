function fecha()
{
    alert("Hola JS::");
    document.getElementById("fecha").innerHTML = new Date().toLocaleDateString('fr-fr', { weekday:"long", year:"numeric", month:"short", day:"numeric"});
}