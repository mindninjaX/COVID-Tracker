function fetchCovid() {
    fetch("https://disease.sh/v3/covid-19/all")
        .then(response => response.json())
        .then(data => {
            let update = data.updated;
            document.getElementById("cases").innerHTML = data.cases;
            document.getElementById("todaycases").innerHTML = data.todayCases;
            document.getElementById("deaths").innerHTML = data.deaths;
            document.getElementById("todayDeaths").innerHTML = data.todayDeaths;
            document.getElementById("recovered").innerHTML = data.recovered;
            document.getElementById("active").innerHTML = data.active;
            document.getElementById("critical").innerHTML = data.critical;
            document.getElementById("affectedCountries").innerHTML = data.affectedCountries;
        })

        document.getElementsByClassName("data")[0].style.opacity = 1;
}