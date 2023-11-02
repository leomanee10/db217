// Get the DOM elements for the filters
const filter_year = document.querySelector('#year');
const filter_month = document.querySelector('#month');
const filter_dname = document.querySelector('#dname');

// Create a set of unique years from the data and sort it
let years = new Set(data.map(d=>d.year_save));
year = [...years].sort();

// Clear the year filter and populate it with the sorted years
filter_year.innerHTML = '';
for(let y of years) {
  filter_year.innerHTML += `<option>${y}</option>`
}

// Reset the month filter
resetMonth();
// Function to reset the month filter based on the selected year
function resetMonth() { 
  // Find the selected year
const selected_year = filter_year.value;

  // Filter data by selected year
const filtered_data = data.filter(d=>d.year_save==selected_year);

  // Create a set of unique months from the focused data and sort it
  let months = new Set(filtered_data.map(d=>d.month_save)
  );
  months = [...months].sort(
    (a, b) => {
     months_th.indexOf(a) - months_th.indexOf(b) }
  );
  // Clear the month filter and populate it with the sorted months
  filter_month.innerHTML = '';
  for(let m of months) {
    filter_month.innerHTML += `<option>${m}</option>`
  }

  // Reset the dname filter
resetDname();
}

// Function to reset the dname filter based on the selected year and month
function resetDname() {
  // Find the selected year and month
  const selected_year = filter_year.value;
  const selected_month = filter_month.value;

  // Filter data by selected year and month
const filtered_data = data.filter(
  d=> d.year_save == selected_year 
      && d.month_save == selected_month
);

  // Create a set of unique dnames from the focused data and sort it
let dnames = new Set(filtered_data.map(d=>d.dname)
  );
  dnames = [...dnames].sort();
  // Clear the dname filter and populate it with the sorted dnames
  filter_dname.innerHTML = '';
  for(let d of dnames) {
    filter_dname.innerHTML += `<option>${d}</option>`
  }
  // Show the chart based on the selected filters
   showChart();
}

// Function to show a chart based on the selected filters
function showChart() {
  // Find the selected year, month, and district
  const selected_year = filter_year.value;
  const selected_month = filter_month.value;
  const selected_dname = filter_dname.value;
  // Filter the data based on the selected filters
    const filtered_data = data.filter(
    d=> d.year_save == selected_year 
        && d.month_save == selected_month
        && d.dname == selected_dname
  )[0];

  // Prepare the labels and data for the chart
  const x_ticks = Array.from(
    {length:100},
    (value, index) => index+1
 );
   const chart_data = Array.from(
    x_ticks,
    (v, i) => filtered_data['age'+v]
   );

  // Get the chart element and clear it
  const chart = document.querySelector('#chart');
  chart.innerHTML = '<canvas></canvas>';

  // Create a new Chart.js bar chart with the prepared labels and data
 new Chart(chart.querySelector('canvas'), {
   type: 'bar',
   data: {
    labels: x_ticks, 
    datasets: [{
      label: 'จำนวนประชากร',
      data: chart_data
    }]
   },
   options: {
    scales: {
      x: {
        title: {
          display: true,
          text: 'Age'
        }
      }
    }
   }
 });
  // Calculate the mean age

  // Calculate the median age

  // Calculate the mode age

  // Calculate the variance

  // Calculate the standard deviation

}