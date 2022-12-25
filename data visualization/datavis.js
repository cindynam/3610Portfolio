
new Chart(document.getElementById("doughnut-chart"), {
    type: 'doughnut',
    data: {
        labels: [
            'Indie',
            'Singleplayer',
            'Action',
            'Casual',
            'Adventure'
        ],
        datasets: [{
            label: ' Number of Games',
            data: [49047, 43695, 36729, 34784, 34606],
            backgroundColor: [
                'rgba(255, 120, 120, 0.5)',
                'rgba(255, 182, 120, 0.5)',
                'rgba(230, 255, 120, 0.5)',
                'rgba(120, 255, 156, 0.5)',
                'rgba(125, 120, 255, 0.5)',
            ],
            borderColor: [
                'rgba(255, 120, 120,  1)',
                'rgba(255, 182, 120, 1)',
                'rgba(230, 255, 120, 1)',
                'rgba(120, 255, 156, 1)',
                'rgba(125, 120, 255, 1)',
            ],
            borderWidth: 2,
            hoverOffset: 50,
        }]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Steam Games by Genre by Cindy Nam',
                font: {
                    size: 25,
                }
            },
            legend: {
                position: 'bottom',
                labels: {
                    textAlign: 'center',
                    font: {
                        size: 15,
                    }
                }
            }
        }
    }

})

new Chart(document.getElementById("bar-chart-horizontal"), {
    type: 'bar',
    data: {
        labels: [
            'Indie',
            'Singleplayer',
            'Action',
            'Casual',
            'Adventure'
        ],
        datasets: [{
            label: ' Number of Games',
            data: [49047, 43695, 36729, 34784, 34606],
            backgroundColor: [
                'rgba(255, 120, 120, 0.5)',
                'rgba(255, 182, 120, 0.5)',
                'rgba(230, 255, 120, 0.5)',
                'rgba(120, 255, 156, 0.5)',
                'rgba(125, 120, 255, 0.5)',
            ],
            borderColor: [
                'rgba(255, 120, 120,  1)',
                'rgba(255, 182, 120, 1)',
                'rgba(230, 255, 120, 1)',
                'rgba(120, 255, 156, 1)',
                'rgba(125, 120, 255, 1)',
            ],
            borderWidth: 2,
        }]
    },
    options: {
        indexAxis: 'y',
        plugins: {
            legend: { display: false },
            title: {
                display: true,
                text: 'Steam Games by Genre by Cindy Nam',
                font: {
                    size: 25,
                }
            }
        }
    }
})