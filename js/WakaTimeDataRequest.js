$(document).ready(function() {
    var customColorSet = [
        "#1abc9c", "#ff7979", "#8395a7", "#9b59b6", "#f1c40f", "#e67e22", "#e74c3c", "#badc58", "#6ab04c", "#e056fd", "#ff3838", "#eb4d4b", "#c44569", "#e15f41", "#3dc1d3", "#3ae374"
    ];
    var customColorSetSize = 16;

    var languagesDataNames = [];
    var languagesDataValues = [];
    var languagesDataColorSet = [];

    var editorsDataNames = [];
    var editorsDataValues = [];
    var editorsDataColorSet = [];

    // total time
    $.ajax({
        type: 'GET',
        url: 'https://wakatime.com/share/@devpin/1db4ca40-d864-4712-a7a0-31f6be3b4387.json',
        dataType: 'jsonp',
        success: function(response) {
            console.log(response);
            seconds = 0;
            for ( i = 0; i < response["data"].length; ++i ) {
                seconds += response["data"][i]["grand_total"].total_seconds;
            }
            $("#totalTime").html( (seconds / 60 / 60).toFixed(2) + " hours" );
        },
    });

    // languages
    $.ajax({
        type: 'GET',
        url: 'https://wakatime.com/share/@devpin/99a3909c-780b-4afe-a484-a3b19690a1b7.json',
        dataType: 'jsonp',
        success: function(response) {
            var tempColorSet = customColorSet;
            for ( i = 0; i < response["data"].length; ++i ) {
                languagesDataNames.push( response["data"][i]["name"] );
                languagesDataValues.push( response["data"][i]["percent"] );

                var colorIndex = Math.floor( Math.random() * tempColorSet.length );
                var color = tempColorSet[colorIndex];
                while ( color in languagesDataColorSet ) {
                    ++colorIndex;
                    if ( colorIndex == customColorSetSize ) {
                        colorIndex = 0;
                    }

                    color = tempColorSet[colorIndex];
                }
                tempColorSet.splice(colorIndex, 1);
                languagesDataColorSet.push( color )
            }
            for ( i = 0; i < response["data"].length; ++i ) {
                $("#languagesKey").append("<li>" + languagesDataNames[i] + "<span style=\"color:" + languagesDataColorSet[i] +";\">" + languagesDataValues[i] + "%</span></li>");
            }

            // set up the graph
            var ctx = document.getElementById("languagesChartContainer").getContext('2d');
            var myChart = new Chart(ctx, {
                type: 'doughnut',
                data: {
                    datasets: [{
                        data: languagesDataValues,
                        backgroundColor: languagesDataColorSet,
                        borderColor: ["rgba(0, 0, 0, 0.1)","rgba(0, 0, 0, 0.1)","rgba(0, 0, 0, 0.1)","rgba(0, 0, 0, 0.1)","rgba(0, 0, 0, 0.1)","rgba(0, 0, 0, 0.1)","rgba(0, 0, 0, 0.1)","rgba(0, 0, 0, 0.1)","rgba(0, 0, 0, 0.1)","rgba(0, 0, 0, 0.1)","rgba(0, 0, 0, 0.1)","rgba(0, 0, 0, 0.1)","rgba(0, 0, 0, 0.1)"],
                        borderWidth: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
                    }],
                    labels: languagesDataNames
                },
                options: {
                    legend: {
                        display: false
                    },
                    cutoutPercentage: 70
                }
            });
        },
    });

    // editors
    $.ajax({
        type: 'GET',
        url: 'https://wakatime.com/share/@devpin/b887de9b-100d-4b5f-ace5-6d58480170ae.json',
        dataType: 'jsonp',
        success: function(response) {
            var tempColorSet = customColorSet;
            for ( i = 0; i < response["data"].length; ++i ) {
                editorsDataNames.push( response["data"][i]["name"] );
                editorsDataValues.push( response["data"][i]["percent"] );

                var colorIndex = Math.floor( Math.random() * tempColorSet.length );
                var color = tempColorSet[colorIndex];
                while ( color in editorsDataColorSet ) {
                    ++colorIndex;
                    if ( colorIndex == customColorSetSize ) {
                        colorIndex = 0;
                    }

                    color = tempColorSet[colorIndex];
                }
                tempColorSet.splice(colorIndex, 1);
                editorsDataColorSet.push( color )
            }
            for ( i = 0; i < response["data"].length; ++i ) {
                $("#editorsKey").append("<li>" + editorsDataNames[i] + "<span style=\"color:" + editorsDataColorSet[i] +";\">" + editorsDataValues[i] + "%</span></li>");
            }

            // set up the graph
            var ctx = document.getElementById("editorsChartContainer").getContext('2d');
            var myChart = new Chart(ctx, {
                type: 'doughnut',
                data: {
                    datasets: [{
                        data: editorsDataValues,
                        backgroundColor: editorsDataColorSet,
                        borderColor: ["rgba(0, 0, 0, 0.1)","rgba(0, 0, 0, 0.1)","rgba(0, 0, 0, 0.1)","rgba(0, 0, 0, 0.1)","rgba(0, 0, 0, 0.1)","rgba(0, 0, 0, 0.1)","rgba(0, 0, 0, 0.1)","rgba(0, 0, 0, 0.1)","rgba(0, 0, 0, 0.1)","rgba(0, 0, 0, 0.1)","rgba(0, 0, 0, 0.1)","rgba(0, 0, 0, 0.1)","rgba(0, 0, 0, 0.1)"],
                        borderWidth: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
                    }],
                    labels: editorsDataNames
                },
                options: {
                    legend: {
                        display: false
                    },
                    cutoutPercentage: 70
                }
            });
        },
    });

});