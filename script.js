var cases
var deaths
var recovered
var active
var critical

function fetchCovid() {
    fetch("https://disease.sh/v3/covid-19/all")
        .then(response => response.json())
        .then(data => {
            cases = data.cases;
            deaths = data.deaths;
            recovered = data.recovered;
            active = data.active;
            critical = data.critical;
            document.getElementById("cases").innerHTML = data.cases;
            document.getElementById("todaycases").innerHTML = data.todayCases;
            document.getElementById("deaths").innerHTML = data.deaths;
            document.getElementById("todayDeaths").innerHTML = data.todayDeaths;
            document.getElementById("recovered").innerHTML = data.recovered;
            document.getElementById("active").innerHTML = data.active;
            document.getElementById("critical").innerHTML = data.critical;
            document.getElementById("affectedCountries").innerHTML = data.affectedCountries;
        })


    var ctx = document.getElementById('myChart');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Total Cases', 'Total Deaths', 'Total Recovered', 'Active Cases', 'Critical Cases'],
            datasets: [{
                label: [],
                data: [cases, deaths, recovered, active, critical],
                backgroundColor: [
                    'rgba(181,68,110,1)',
                    'rgba(0,254,188,1)',
                    'rgba(220,207,236,1)',
                    'rgba(239,148,108,1)',
                    'rgba(233,206,44,1)'
                ],
                // borderColor: [
                //     'rgb(0,254,188)',
                //     'rgb(0,254,188)',
                //     'rgb(0,254,188)',
                //     'rgb(0,254,188)',
                //     'rgb(0,254,188)',
                //     'rgb(0,254,188)'
                // ],
                // borderWidth: 1
            }]
        },
        options: {
            legend: {
                labels: {
                    fontColor: 'rgb(255,255,255)',
                    defaultFontSize: 12,
                    defaultFontFamily: "'Open Sans', cursive",
                    defaultFontColor: 'rgb(255,255,255)',
                }
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });

    document.getElementsByClassName("data")[0].style.opacity = 1;
}
