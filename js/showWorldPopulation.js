$(document).ready(function () {

    var data = [10, 20, 30, 40, 50];
    var labels = ["Singapore", "Malaysia", "Thailand", "Vietnam", "Myanmar"];
    
    $.ajax({
        type:"GET",
        url: "getStatistics.php",
        cache: false,
        dataType: "JSON",
        success: function (response) {
            
            var data = [];
            var labels = [];
            for (i = o; i < response.length; i++){
                data.push(parseInt(response[i].population));
                labels.push(response[i].country);
            }
            
            var barChart = new Chart($("#barChart"),{
                type: 'horizontalBar',
                data: {
                    datasets: [{
                            data: data,
                            backgroundColor: "lightblue",
                            label: 'Population'
                    }],
                label: labels
                },
                options: {
                    responsive: true
                }
            });
        }
    });
    