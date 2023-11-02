// Get the DOM elements for the filters
const filter_year = document.querySelector('#year');
const filter_month = document.querySelector('#month');
const filter_dname = document.querySelector('#dname');

// Create a set of unique years from the data and sort it
let years = new Set(data.map(function(d) {
  return d.year_save;
}));
years = [...years].sort();

// Clear the year filter and populate it with the sorted years
filter_year.innerHTML = '';
for(let y of years ) {
  filter_year.innerHTML += `<option>${y}</option>`;
}

// Reset the month filter

// Function to reset the month filter based on the selected year
function resetMonth() {
  // Find the selected year
const selected_year = filter_year.Value;

  // Filter data by selected year
  const filtered_data = data.filter(
    d => d.year_save == selected_year
  );
  // Create a set of unique months from the focused data and sort it
  let month = new Set(data.map(function(d) {
    return d.month_save;
  }));
  month = [...month].sort((a, b) => {
    months_th.indexOf(a) - months_th.indexOf(b);
  });
  // Clear the month filter and populate it with the sorted months
  filter_month.innerHTML = '';
  for(let m of month ) {
    filter_month.innerHTML += `<option>${m}</option>`;
  
  }
  // Reset the dname filter
resetDname();
}

// Function to reset the dname filter based on the selected year and month
function resetDname() {
  // Find the selected year and month
  const selected_year = filter_year.Value;
  const selected_month = filter_month.Value;

      
  // Filter data by selected year and month
  const filtered_data = data.filter(
    d => d.year_save == selected_year  
         && d.month_save == selected_month
  );       
  // Create a set of unique dnames from the focused data and sort it
  let dnames = new Set( filtered_data.map(d => d.dname)
  );
  dnames = [...dnames].sort();
  // Clear the dname filter and populate it with the sorted dnames
  filter_dname.innerHTML = '';
  for(let d of dnames ) {
    filter_dname.innerHTML += `<option>${d}</option>`
  
  }
  // Show the chart based on the selected filters
showChart();
}

// Function to show a chart based on the selected filters
function showChart() {
  // Find the selected year, month, and district
  const selected_year = filter_year.Value;
  const selected_month = filter_month.Value;
  const selected_dname = filter_dname.Value;

  // Filter the data based on the selected filters
  const filtered_data = data.filter(
    d => d.year_save == selected_year
         && d.month_save == selected_month
         && d.dname == selected_dname
  )[0];  
  
  // Prepare the labels and data for the chart
const x_tick = Array.from(
  {length:100},
  (Value, index) => index+1
  );
  // Get the chart element and clear it
const chart_data = Array.from(
  x_tick,
  (v, i)  => filtered_data['age'+v]
);
  // Create a new Chart.js bar chart with the prepared labels and data
const chart = document.querySelector('#chaet');
chart.innerHTML = '<canvas></canvas>';

  // Calculate the mean age
 new Chart(chart, {
  type: 'bar',
  data: {
    labels: x_tick,
    dataset: [{
      label: 'จำนวนประชากร',
      data: chart_data

    }]
  },
  option: {
    scale: {
      x: {
        title: {
          display: true,
          text: 'Age'
        }
      }
    }
  }
 });
  // Calculate the median age

  // Calculate the mode age

  // Calculate the variance

  // Calculate the standard deviation

}
