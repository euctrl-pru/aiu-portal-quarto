  // code found @ https://stackoverflow.com/questions/9847580/how-to-detect-safari-chrome-ie-firefox-and-opera-browser
  var isFirefox = typeof InstallTrigger !== 'undefined';
  console.log("hello");
  var data
 
  if (isFirefox == true) {
   window.addEventListener('message', function (e) {
   var $iframe = $('#traffic-plot');

   data = JSON.parse(e.data);
   console.log("hello2");
   UpdateTraffic();
   
  }, false);
   console.log("hello3");    
  } else {
  window.onload = function() {
   window.addEventListener('message', function (e) {
   var $iframe = $('#traffic-plot');

   data = JSON.parse(e.data);
   console.log("hello2");
   UpdateTraffic();
   
  }, false);
   console.log("hello3");    
  }
}
 
 function UpdateTraffic() { 
     // Calculate datestrings
   var last_day = new Date(data.LAST_DATA_DAY);
   var last_day_text = last_day.toString();
       last_day_text = last_day_text.substring(8, 11) + last_day_text.substring(4, 8) + last_day_text.substring(11, 15);

 //calculate 1st day of rolling week and string
  var first_week_day = new Date();
      first_week_day = first_week_day.setDate(last_day.getDate()-6);
      first_week_day = new Date(first_week_day);
      first_week_day = first_week_day.toString();
  var last_week_text = first_week_day.substring(8, 11) + (last_day_text.substring(3, 7) == first_week_day.substring(4, 8) ? "" :  first_week_day.substring(4, 8)) + "- " + last_day_text;

  var y2d_day_text = last_day_text.substring(3, 7) == "Jan " ? "01 - " + last_day_text : "01 Jan - " + last_day_text;
 
 // Calculate traffic scorecard values
  var day_traffic = data.DAY_TFC;
  
  var dif_day_prev_week = Math.round(data.DAY_TFC_PREV_WEEK_PERC*100);
      dif_day_prev_week = (dif_day_prev_week >= 0) ? "+" + dif_day_prev_week : "" + dif_day_prev_week ;
  
  var dif_day_2019 = Math.round(data.DAY_TFC_DIFF_2019_PERC*100);
      dif_day_2019 = (dif_day_2019 >= 0) ? "+" + dif_day_2019 : "" + dif_day_2019;
  
  var dif_day_prev_year = Math.round(data.DAY_DIFF_PREV_YEAR_PERC*100);
      dif_day_prev_year = (dif_day_prev_year >= 0) ? "+" + dif_day_prev_year : "" + dif_day_prev_year ;

  var week_traffic = data.TOTAL_ROLLING_WEEK;
  var avg_week_traffic = Math.round(week_traffic/7);
  
  var dif_week_prev_week = Math.round(data.DIF_PREV_WEEK_PERC*100);
      dif_week_prev_week = (dif_week_prev_week >= 0) ? "+" + dif_week_prev_week : "" + dif_week_prev_week;
  
  var dif_week_2019 = Math.round(data.DIF_ROLLING_WEEK_2019_PERC*100);
      dif_week_2019 = (dif_week_2019 >= 0) ? "+" + dif_week_2019 : "" + dif_week_2019;
  
  var dif_week_prev_year = Math.round(data.DIF_WEEK_PREV_YEAR_PERC*100);
      dif_week_prev_year = (dif_week_prev_year >= 0) ? "+" + dif_week_prev_year : "" + dif_week_prev_year;
   
  var y2d_traffic = data.Y2D_TFC_YEAR;
  var avg_y2d_traffic = Math.round(data.Y2D_AVG_TFC_YEAR);
  var dif_y2d_2019 = Math.round(data.Y2D_DIFF_2019_PERC*100);
      dif_y2d_2019 = (dif_y2d_2019 >= 0) ? "+" + dif_y2d_2019 : "" + dif_y2d_2019;
  var dif_y2d_prev_year = Math.round(data.Y2D_DIFF_PREV_YEAR_PERC*100);
      dif_y2d_prev_year = (dif_y2d_prev_year >= 0) ? "+" + dif_y2d_prev_year : "" + dif_y2d_prev_year;


// Update scorecard values
  document.getElementById("last_day").innerHTML = "Day (" + last_day_text + ")";
  document.getElementById("last_week").innerHTML = "Rolling week (" + last_week_text + ")";
  document.getElementById("y2d_day_text").innerHTML = "Year to date (" + y2d_day_text + ")";
   
  document.getElementById("day_traffic").innerHTML = String(day_traffic).replace(/(.)(?=(\d{3})+$)/g, '$1,');
  document.getElementById("dif_day_prev_week").innerHTML = dif_day_prev_week + '%';
  document.getElementById("dif_day_2019").innerHTML = dif_day_2019 + '%';
  document.getElementById("dif_day_prev_year").innerHTML = dif_day_prev_year + '%';
  
  document.getElementById("week_traffic").innerHTML = String(week_traffic).replace(/(.)(?=(\d{3})+$)/g, '$1,');
  document.getElementById("avg_week_traffic").innerHTML = String(avg_week_traffic).replace(/(.)(?=(\d{3})+$)/g, '$1,') + " daily flights";
  document.getElementById("dif_week_prev_week").innerHTML = dif_week_prev_week + '%';
  document.getElementById("dif_week_2019").innerHTML = dif_week_2019 + '%';
  document.getElementById("dif_week_prev_year").innerHTML = dif_week_prev_year + '%';
  
  document.getElementById("y2d_traffic").innerHTML = String(y2d_traffic).replace(/(.)(?=(\d{3})+$)/g, '$1,');
  document.getElementById("avg_y2d_traffic").innerHTML = String(avg_y2d_traffic).replace(/(.)(?=(\d{3})+$)/g, '$1,') + " daily flights";
  document.getElementById("dif_y2d_2019").innerHTML = dif_y2d_2019 + '%';
  document.getElementById("dif_y2d_prev_year").innerHTML = dif_y2d_prev_year + '%';


 }
 