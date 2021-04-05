function changeLang() {

    if (document.documentElement.lang == "en-CA") {
        newLanguage = "fr-CA"
    }
    if (document.documentElement.lang == "fr-CA") {
        newLanguage = "en-CA"
    }
    setLanguage(newLanguage)
}

function setLanguage(newLanguage) {
    newLable = newLanguage == "fr-CA" ? "English" : "Français"
    document.documentElement.lang = newLanguage
    document.getElementById("lang").innerText = newLable

    lang = uploadLanguage(newLanguage)
    lang.forEach(element => {
        document.getElementById(element[0]).innerText = element[1]

    });

}

function uploadLanguage(newLanguage) {
    var req = new XMLHttpRequest()
    req.open("GET", "languages.json", false)
    req.onreadystatechange = function() {
        if (req.readyState === 4) {
            if (req.status === 200 || req.status == 0) {
                callback(req.responseText);
            }
        }
    }
    req.send(null);

    parsed = JSON.parse(req.responseText)

    return newLanguage == "fr-CA" ? parsed.french : parsed.english

}
