var Data
var my_view_traffic
var last_day
var y2d_traffic
var y2d_prev_year_traffic
var y2d_2019_traffic 
var avg_y2d_traffic
var dif_y2d_2019
var dif_y2d_prev_year

google.load("visualization", "1.1", {
  packages: ["corechart", "table", "controls", "bar"]
});
google.setOnLoadCallback(Initialisation);

function Initialisation() {
var query = new google.visualization.Query(
    "https://docs.google.com/spreadsheets/d/14Lt3C3PCxxYCLXXYxRrFXd1s0tVZ3EQ8q9YfuYvx3Ww/edit?usp=sharing&sheet=NW_Flights_All"
  );

query.send(drawDashboard);
}

function drawDashboard(response) {
  Data = response.getDataTable();


UpdateTraffic();
 }
//---------------------------Update traffic---------------------------------------------
function UpdateTraffic() {
my_view_traffic = new google.visualization.DataView(Data);

last_day = my_view_traffic.getValue(0, 38); 
my_view_traffic.setRows(
Data.getFilteredRows([{ column: 7, value: last_day }])
);

// Calculate datestrings
last_day_text = last_day.toDateString();
last_day_text = last_day_text.substring(8, 11) + last_day_text.substring(4, 8) + last_day_text.substring(11);
y2d_day_text = last_day_text.substring(3, 7) == "Jan " ? "01 – " + last_day_text : "01 Jan – " + last_day_text;

// Calculate traffic scorecard values
y2d_traffic = my_view_traffic.getValue(0, 30);
y2d_prev_year_traffic = my_view_traffic.getValue(0, 31);
y2d_2019_traffic = my_view_traffic.getValue(0, 32);

avg_y2d_traffic = Math.round(my_view_traffic.getValue(0, 33));
dif_y2d_2019 = Math.round(my_view_traffic.getValue(0, 37)*100);
dif_y2d_2019 = (dif_y2d_2019 >= 0) ? "+" + dif_y2d_2019 : "" + dif_y2d_2019;
dif_y2d_prev_year = Math.round(my_view_traffic.getValue(0, 36)*100);
dif_y2d_prev_year = (dif_y2d_prev_year >= 0) ? "+" + dif_y2d_prev_year : "" + dif_y2d_prev_year;

// Update scorecard values
document.getElementById("y2d_day_text").innerHTML =  "Latest network traffic situation: " + y2d_day_text; 
document.getElementById("y2d_traffic").innerHTML = String(y2d_traffic).replace(/(.)(?=(\d{3})+$)/g, '$1,');
document.getElementById("avg_y2d_traffic").innerHTML = String(avg_y2d_traffic).replace(/(.)(?=(\d{3})+$)/g, '$1,');
document.getElementById("dif_y2d_2019").innerHTML = String(dif_y2d_2019) + '%' ;
document.getElementById("dif_y2d_prev_year").innerHTML = String(dif_y2d_prev_year) + '%';
}
