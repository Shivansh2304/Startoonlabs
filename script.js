function createGraph() {
    const inputValue = parseFloat(document.getElementById('input-value').value);
    const maxValue = parseFloat(document.getElementById('max-value').value);



    if (inputValue > maxValue) {
        alert("Input value cannot be greater than max value");
    } else {
        const inputPercentage = (inputValue / maxValue) * 100;
        const inputBarGraph = document.getElementById('input-bar-graph');


        inputBarGraph.style.height = inputPercentage + "%";
        inputBarGraph.style.backgroundColor = "#008CFF"; // Set a background color for the bar graph



        const remainingPercentage = 100 - inputPercentage;

        const data = {

            datasets: [{
                data: [inputPercentage, remainingPercentage],
                backgroundColor: [
                    '#008CFF',
                     '#C2E3FF'

                ]
            }]
        };
        const options = {
            responsive: true,
            radius: '80%'
        };
        const pieChartCanvas = document.getElementById('pie-chart');
        let pieChart = Chart.getChart(pieChartCanvas);

        if (pieChart) {
            pieChart.destroy();
        }

        pieChart = new Chart(pieChartCanvas, {
            type: 'pie',
            data: data,
            options: options
        });

        const inputValueDisplay = document.getElementById('input-value-display');
        inputValueDisplay.innerText = inputValue+'%';
        const inputValueDispla = document.getElementById('input-value-displa');
        inputValueDispla.innerText = inputValue+'%';

        const inputValueDispl = document.getElementById('input-value-displ');
        inputValueDispl.innerText = inputValue+'%';



				const chart = document.querySelector('.cha');
				chart.style.height = inputPercentage + '%';

    }
}
