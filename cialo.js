function glowaInfo()
{
    document.getElementById("inf").style.transition = "550ms";
    document.getElementById("inf").style.visibility = "visible";
    document.getElementById("inf").style.width = "40%";
    document.getElementById("inf").style.height = "770px";
    document.getElementById("inf").style.fontSize = "19px";
    document.getElementById("inf").innerHTML = `
<div>
<h3>Budowa anatomiczna głowy</h3>
<p>
Głowa składa się z czaszki chroniącej mózg, otoczonego płynem mózgowo-rdzeniowym i błonami oponowymi. 
Wewnątrz znajdują się główne naczynia krwionośne i nerwy.
</p>

<h4>Główne żyły w głowie:</h4>
<ul>
<li>Żyła szyjna wewnętrzna</li>
<li>Żyła szyjna zewnętrzna</li>
<li>Zatoki żylne opony twardej</li>
</ul>

<h4>Główne kości czaszki:</h4>
<ul>
<li>Kość czołowa</li>
<li>Kość ciemieniowa</li>
<li>Kość potyliczna</li>
<li>Kość skroniowa</li>
</ul>

<h3>Możliwe urazy głowy</h3>
<ul>
<li>Wstrząśnienie mózgu – Poziom zagrożenia: 4/10</li>
<li>Krwiak wewnątrzczaszkowy – Poziom zagrożenia: 9/10</li>
<li>Złamanie kości czaszki – Poziom zagrożenia: 7/10</li>
<li>Uszkodzenie naczyń krwionośnych – Poziom zagrożenia: 8/10</li>
<li>Obrzęk mózgu – Poziom zagrożenia: 10/10</li>
<li>Uraz skóry głowy (np. skaleczenie) – Poziom zagrożenia: 2/10</li>
</ul>
</div>
`;
}


//--------------------------------------
//--------------------------------------


function rekaLewaInfo() {
    document.getElementById("inf").style.transition = "550ms";
    document.getElementById("inf").style.visibility = "visible";
    document.getElementById("inf").style.width = "40%";
    document.getElementById("inf").style.height = "770px";
    document.getElementById("inf").style.fontSize = "19px";
    document.getElementById("inf").innerHTML = `
        <h3>Lewa ręka</h3>
        <h4>Budowa anatomiczna:</h4>
        <p>
            Lewa ręka składa się z kości ramienia, przedramienia i ręki, wspieranych przez mięśnie, ścięgna i nerwy.
        </p>
        <h4>Główne żyły:</h4>
        <ul>
            <li>Żyła odpromieniowa</li>
            <li>Żyła łokciowa</li>
            <li>Żyła ramienna</li>
        </ul>
        <h4>Główne kości:</h4>
        <ul>
            <li>Kość ramienna</li>
            <li>Kość promieniowa</li>
            <li>Kość łokciowa</li>
        </ul>
        <h4>Możliwe urazy:</h4>
        <ul>
            <li>Złamanie kości ramienia – Poziom zagrożenia: 6/10</li>
            <li>Zwichnięcie stawu łokciowego – Poziom zagrożenia: 5/10</li>
            <li>Stłuczenie dłoni – Poziom zagrożenia: 2/10</li>
            <li>Uszkodzenie nerwu łokciowego – Poziom zagrożenia: 7/10</li>
        </ul>
    `;
}


//--------------------------------------
//--------------------------------------


function rekaPrawaInfo() {
    document.getElementById("inf").style.transition = "550ms";
    document.getElementById("inf").style.visibility = "visible";
    document.getElementById("inf").style.width = "40%";
    document.getElementById("inf").style.height = "770px";
    document.getElementById("inf").style.fontSize = "19px";
    document.getElementById("inf").innerHTML = `
        <h3>Prawa ręka</h3>
        <h4>Budowa anatomiczna:</h4>
        <p>
            Prawa ręka ma taką samą budowę jak lewa, umożliwiając precyzyjne ruchy i wykonywanie codziennych czynności.
        </p>
        <h4>Główne żyły:</h4>
        <ul>
            <li>Żyła odpromieniowa</li>
            <li>Żyła łokciowa</li>
            <li>Żyła ramienna</li>
        </ul>
        <h4>Główne kości:</h4>
        <ul>
            <li>Kość ramienna</li>
            <li>Kość promieniowa</li>
            <li>Kość łokciowa</li>
        </ul>
        <h4>Możliwe urazy:</h4>
        <ul>
            <li>Złamanie kości promieniowej – Poziom zagrożenia: 6/10</li>
            <li>Uszkodzenie stawu nadgarstkowego – Poziom zagrożenia: 5/10</li>
            <li>Stłuczenie kciuka – Poziom zagrożenia: 2/10</li>
            <li>Uszkodzenie ścięgien – Poziom zagrożenia: 7/10</li>
        </ul>
    `;
}


//--------------------------------------
//--------------------------------------


function nogaLewaInfo() {
    document.getElementById("inf").style.transition = "550ms";
    document.getElementById("inf").style.visibility = "visible";
    document.getElementById("inf").style.width = "40%";
    document.getElementById("inf").style.height = "770px";
    document.getElementById("inf").style.fontSize = "19px";
    document.getElementById("inf").innerHTML = `
        <h3>Lewa noga</h3>
        <h4>Budowa anatomiczna:</h4>
        <p>
            Lewa noga składa się z uda, podudzia i stopy, wspieranych przez silne mięśnie, ścięgna i więzadła.
        </p>
        <h4>Główne żyły:</h4>
        <ul>
            <li>Żyła odpiszczelowa</li>
            <li>Żyła udowa</li>
            <li>Żyła piszczelowa tylna</li>
        </ul>
        <h4>Główne kości:</h4>
        <ul>
            <li>Kość udowa</li>
            <li>Kość piszczelowa</li>
            <li>Kość strzałkowa</li>
        </ul>
        <h4>Możliwe urazy:</h4>
        <ul>
            <li>Złamanie kości udowej – Poziom zagrożenia: 8/10</li>
            <li>Skręcenie stawu skokowego – Poziom zagrożenia: 4/10</li>
            <li>Stłuczenie kolana – Poziom zagrożenia: 3/10</li>
            <li>Uszkodzenie więzadła krzyżowego przedniego (ACL) – Poziom zagrożenia: 9/10</li>
        </ul>
    `;
}


//--------------------------------------
//--------------------------------------


function nogaPrawaInfo() {
    document.getElementById("inf").style.transition = "550ms";
    document.getElementById("inf").style.visibility = "visible";
    document.getElementById("inf").style.width = "40%";
    document.getElementById("inf").style.height = "770px";
    document.getElementById("inf").style.fontSize = "19px";
    document.getElementById("inf").innerHTML = `
        <h3>Prawa noga</h3>
        <h4>Budowa anatomiczna:</h4>
        <p>
            Prawa noga wspiera ciało podczas chodzenia, biegania i stania, składając się z tych samych elementów co lewa noga.
        </p>
        <h4>Główne żyły:</h4>
        <ul>
            <li>Żyła odpiszczelowa</li>
            <li>Żyła udowa</li>
            <li>Żyła piszczelowa tylna</li>
        </ul>
        <h4>Główne kości:</h4>
        <ul>
            <li>Kość udowa</li>
            <li>Kość piszczelowa</li>
            <li>Kość strzałkowa</li>
        </ul>
        <h4>Możliwe urazy:</h4>
        <ul>
            <li>Złamanie kości strzałkowej – Poziom zagrożenia: 6/10</li>
            <li>Naderwanie ścięgna Achillesa – Poziom zagrożenia: 8/10</li>
            <li>Stłuczenie pięty – Poziom zagrożenia: 3/10</li>
            <li>Uszkodzenie stawu kolanowego – Poziom zagrożenia: 7/10</li>
        </ul>
    `;
}


//--------------------------------------
//--------------------------------------


function klatkaInfo() {
    document.getElementById("inf").style.transition = "550ms";
    document.getElementById("inf").style.visibility = "visible";
    document.getElementById("inf").style.width = "40%";
    document.getElementById("inf").style.height = "515px";
    document.getElementById("inf").style.fontSize = "13px";
    document.getElementById("inf").innerHTML = `
        <h3>Klatka piersiowa</h3>
        <h4>Budowa anatomiczna:</h4>
        <p>
            Klatka piersiowa składa się z żeber, mostka i kręgosłupa piersiowego. Chroni serce, płuca i duże naczynia krwionośne.
        </p>
        <h4>Główne żyły:</h4>
        <ul>
            <li>Żyła główna górna</li>
            <li>Żyły płucne</li>
            <li>Żyły międzyżebrowe</li>
        </ul>
        <h4>Główne kości:</h4>
        <ul>
            <li>Mostek</li>
            <li>Żebra</li>
            <li>Kręgi piersiowe</li>
        </ul>
        <h4>Możliwe urazy:</h4>
        <ul>
            <li>Złamanie żeber – Poziom zagrożenia: 5/10</li>
            <li>Stłuczenie klatki piersiowej – Poziom zagrożenia: 3/10</li>
            <li>Odma opłucnowa – Poziom zagrożenia: 8/10</li>
            <li>Uszkodzenie serca lub płuc – Poziom zagrożenia: 10/10</li>
        </ul>
    `;
}


//--------------------------------------
//--------------------------------------


function brzuchInfo() {
    document.getElementById("inf").style.transition = "550ms";
    document.getElementById("inf").style.visibility = "visible";
    document.getElementById("inf").style.width = "40%";
    document.getElementById("inf").style.height = "515px";
    document.getElementById("inf").style.fontSize = "13px";
    document.getElementById("inf").innerHTML = `
        <h3>Brzuch</h3>
        <h4>Budowa anatomiczna:</h4>
        <p>
            Brzuch zawiera narządy trawienne, takie jak żołądek, jelita, wątroba i trzustka. Ochronę zapewniają mięśnie brzucha i powłoki brzuszne.
        </p>
        <h4>Główne żyły:</h4>
        <ul>
            <li>Żyła główna dolna</li>
            <li>Żyły wrotne wątroby</li>
            <li>Żyły krezkowe</li>
        </ul>
        <h4>Główne kości:</h4>
        <ul>
            <li>Brak kości – ochrona dzięki mięśniom brzucha</li>
        </ul>
        <h4>Możliwe urazy:</h4>
        <ul>
            <li>Stłuczenie brzucha – Poziom zagrożenia: 3/10</li>
            <li>Perforacja jelit – Poziom zagrożenia: 9/10</li>
            <li>Uraz wątroby – Poziom zagrożenia: 8/10</li>
            <li>Krwotok wewnętrzny – Poziom zagrożenia: 10/10</li>
        </ul>
    `;
}


//--------------------------------------
//--------------------------------------


function miednicaInfo() {
    document.getElementById("inf").style.transition = "550ms";
    document.getElementById("inf").style.visibility = "visible";
    document.getElementById("inf").style.width = "40%";
    document.getElementById("inf").style.height = "515px";
    document.getElementById("inf").style.fontSize = "13px";
    document.getElementById("inf").innerHTML = `
        <h3>Miednica</h3>
        <h4>Budowa anatomiczna:</h4>
        <p>
            Miednica składa się z kości biodrowej, łonowej i kulszowej, które tworzą pierścień miedniczny. Chroni narządy układu moczowego i rozrodczego.
        </p>
        <h4>Główne żyły:</h4>
        <ul>
            <li>Żyła biodrowa wewnętrzna</li>
            <li>Żyła biodrowa zewnętrzna</li>
            <li>Żyła biodrowa wspólna</li>
        </ul>
        <h4>Główne kości:</h4>
        <ul>
            <li>Kość biodrowa</li>
            <li>Kość łonowa</li>
            <li>Kość kulszowa</li>
        </ul>
        <h4>Możliwe urazy:</h4>
        <ul>
            <li>Złamanie miednicy – Poziom zagrożenia: 9/10</li>
            <li>Uszkodzenie narządów miednicy – Poziom zagrożenia: 8/10</li>
            <li>Przemieszczenie stawu biodrowego – Poziom zagrożenia: 6/10</li>
            <li>Krwotok wewnętrzny – Poziom zagrożenia: 10/10</li>
        </ul>
    `;
}
