'use strict';

let time = ['6:00 am', '7:00 am', '8:00 am', '9:00 am', '10:00 am', '11:00 am', '12:00 pm', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm', '6:00 pm', '7:00 pm'];

let branchLocations = [];

let salesTable = document.getElementById('salesTable2');

//Branchs constructor
function Branchs(name, minCustomers, maxCustomers, avgCookies) {
  
  this.name = name;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookies = avgCookies;

  this.averageCustomersPerHour = [];
  this.averageCookiesPerHour = [];
  this.totalCookiesPerDay = 0;
  this.numOfCustomersPerHour();
  this.cookiesPerCustomer();

  branchLocations.push(this);
}

Branchs.prototype.render = function() {
  let rowline = document.createElement('tr');
  let tableData = document.createElement('td');
  tableData.textContent = this.name;
  rowline.appendChild(tableData);
  for (let x = 0; x < this.averageCookiesPerHour.length; x++) {
    let tableDataCell = document.createElement('td');
    tableDataCell.textContent = this.averageCookiesPerHour[x];
    rowline.appendChild(tableDataCell);
  };
  let totalLine = document.createElement('td');
  totalLine.textContent = this.totalCookiesPerDay;
  rowline.appendChild(totalLine);
  salesTable.appendChild(rowline);
};
Branchs.prototype.numOfCustomersPerHour = function() {
  for (let x = 0; x < time.length; x++) {
    let clintPerHour = Math.ceil(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
    this.averageCustomersPerHour.push(clintPerHour);
  }
};
Branchs.prototype.cookiesPerCustomer = function() {
  for (let x = 0; x < time.length; x++) {
    let cookiesPerHour = Math.ceil(this.averageCustomersPerHour[x] * this.avgCookies);
    this.averageCookiesPerHour.push(cookiesPerHour);
    this.totalCookiesPerDay += cookiesPerHour;
  }
};
//Table 
function headerLine() { 
  let rowline = document.createElement('tr');
  let headerElement = document.createElement('th');
  headerElement.textContent = 'Branchs / Time';
  salesTable.appendChild(rowline);
  rowline.appendChild(headerElement);
  for (let x = 0; x < time.length; x++) {
    headerElement = document.createElement('th');
    headerElement.textContent = time[x];
    rowline.appendChild(headerElement);
    console.log(headerElement);
  }
  headerElement = document.createElement('th');
  headerElement.textContent = 'Total For Each Br.';
  rowline.appendChild(headerElement);
  console.log(salesTable);
  salesTable.appendChild(rowline);
};
function renderBranchs() {
  for (let x = 0; x < branchLocations.length; x++) {
    branchLocations[x].render();
  }
}

// Tablefooter
function footerLine() {
  let rowline = document.createElement('tr');
  rowline.textContent = 'Totals';
  salesTable.appendChild(rowline);
  let totalOfTotal = 0;
  for (let x = 0; x < time.length; x++) {
    let totalPerHour = 0;
    for (let y = 0; y < branchLocations.length; y++) {
      totalPerHour = totalPerHour + branchLocations[y].averageCookiesPerHour[x];
      totalOfTotal += branchLocations[y].averageCookiesPerHour[x];
    }
    
    let headerElement = document.createElement('td');
    headerElement.textContent = totalPerHour;
    rowline.appendChild(headerElement);
  }
    let headerElement = document.createElement('td');
    headerElement.textContent = totalOfTotal;
    rowline.appendChild(headerElement);

}
new Branchs('Seattle', 23 , 65 , 6.3);
new Branchs('Tokyo', 3 , 24 , 1.2);
new Branchs('Dubai', 11 , 38 , 3.7);
new Branchs('Paris', 20 , 38 , 2.3);
new Branchs('Lima', 2 , 16 , 4.6);
// let branchs =[seattle, tokyo, dubai, paris, lima];


//Event Handler function
function dataInput(event) {
  event.preventDefault();
  console.log('Submit button was clicked');
//If statement to prevent empty text fields
  if (!event.target.name.value || !event.target.minCustomers.value || !event.target.maxCustomers.value || !event.target.avgCookies.value) {
    return alert('Fields cannot be empty!');
  }

  //  event.target.name = null;
  // event.target.minCustomers = null;
  // event.target.maxCustomers = null;
  // event.target.avgCookies = null;

  let name = event.target.name.value;
  let minCustomers = parseInt(event.target.minCustomers.value);
  let maxCustomers = parseInt(event.target.maxCustomers.value);
  let avgCookies = parseFloat(event.target.avgCookies.value);

  // salesTable.textContent = 0;
  //Code to make the input fields blank after user submits

  // let branchExist = branchThere(branchLocations, name);
  // let index;

  // function branchThere(n,u) {
  //   for (let x = 0; x < n.length; x++) {
  //     if (n[x].name === u) {
  //       index = x;
  //       return true;
  //     }
  //   }
  //   return false;
  // }

  // branchThere(branchLocations, name);
  // console.log(branchThere(branchLocations, name));

  // if (branchExist === true) {
  //   console.log('did find name');
  //   branchLocations[index].minCustomers = parseInt(minCustomers);
  //   branchLocations[index].maxCustomers = parseInt(maxCustomers);
  //   branchLocations[index].avgCookies = parseFloat(avgCookies);
  //   branchLocations[index].averageCustomersPerHour = [];
  //   branchLocations[index].averageCookiesPerHour = [];
  //   branchLocations[index].totalCookiesPerDay = 0;
  //   branchLocations[index].numOfCustomersPerHour();
  //   branchLocations[index].cookiesPerCustomer();
  // }

  // if (branchExist === false) {
    let newBranch = new Branchs(name, minCustomers, maxCustomers, avgCookies);
 
  salesTable.innerHTML='';
  //Re-creating our table with the new user inputs
  headerLine();
  renderBranchs();
  footerLine();

  document.getElementById("salesInput").reset();
}


// makeHeaderRow();
// renderAllStores();
// makeFooterRow();

salesInput.addEventListener('submit', dataInput);

headerLine();
renderBranchs();
footerLine();