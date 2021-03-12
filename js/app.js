'use strict';

// let time=['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
// let tableElement=document.getElementById('table');

// function patCookies(branchName, minClintPerHour, maxClintPerHour, avgCookieSale){
// this.branchName=branchName;
// this.minClintPerHour;
// this.maxClintPerHour=maxClintPerHour;
// this.avgCookieSale=avgCookieSale;
// this.clintHourly =[];
// this.coockiesHourly =[];
// this.totalCoockiesPerDay = 0;
// }

// patCookies.prototype.calcClintHourly = function(){
// for(let x = 0; x < time.length; x++) {
//     this.calcClintHourly.push(random(this.minClintPerHour,maxClintPerHour));
// }
// };

// patCookies.prototype.calccookiesHourly = function(){
//     this.calcClintHourly();
//     for( let x = 0; x < time.length; x++){
//         let oneHour = Math.ceil(this.clintHourly[x] * this.avgCookieSale);
//         this.coockiesHourly.push(oneHour);
//         this.totalCoockiesPerDay +=oneHour;
//     }
// };

// patCookies.prototype.render = function(){
//     this.calccookiesHourly();
//     let tableRow = document.createElement('tr');
//     let tableDataElement= document.createElement('td');
//     tableDataElement.textContent=this.branchName;
//     tableRow.appendChild(tableDataElement);
    
//     for (let x = 0; x < time.length; x++){
//        tableDataElement = document.createElement('td');
//        tableDataElement.textContenta = this.coockiesHourly[x];
//        tableRow.appendChild(tableDataElement);
//     }
//     let tableHeader = document.createElement('th');
//     tableHeader.textContent = this.totalCoockiesPerDay;
//     tableRow.appendChild(tableHeader);
//     tableElement.appendChild(tableRow);
// };

// new patCookies('Seattle', 23 , 65 , 6.3);
// new patCookies('Tokyo', 3 , 24 , 1.2);
// new patCookies('Dubai', 11 , 38 , 3.7);
// new patCookies('Paris', 20 , 38 , 2.3);
// new patCookies('Lima', 2 , 16 , 4.6);
// let branchList =[seattle, tokyo, dubai, paris, lima];


// function headerLine(){
//     let tableRow = document.createElement('tr');
//     let tableHeader = document.createElement('th');
//     tableHeader.textContent('Branchs');
//     tableRow.appendChild(tableHeader);

//     for (let x = 0; x < time.length; x++ ){
//       tableHeader.document.createElement('th');
//       tableHeader.textContent=time[x];
//       tableRow.appendChild(tableHeader);
//     } 
//     tableHeader = document.createElement('th');
//     tableHeader.textContent ='Branchs Total';
//     tableRow.appendChild(tableHeader);
//     tableElement.appendChild(tableRow);
// }

// function footerLine (){
//     let tableRow = document.createElement('tr'); 
//     let tableHeader = document.createElement('th');
//     tableHeader.textContent('Total Coockies Over The Branches per Hour');
//     tableRow.appendChild(tableHeader);
//     let totalSummation = 0;
//     for (let x = 0; x < time.length; x++);{
//       let totalPerHour = 0;
//       for ( y =0; y < branchList.length; y++);{
//           totalPerHour += branchList[y].coockiesHourly[x];
//           totalSummation +=branchList[y].coockiesHourly[x];
//       }
//       tableHeader=document.createElement('th');
//       tableHeader.textContent = totalPerHour;
//       tableRow.appendChild(tableHeader);
//     }
//     tableHeader = document.createElement('th');
//     tableHeader.textContent = totalSummation;
//     tableRow.appendChild(tableHeader);
//     tableElement.appendChild(tableRow);
// }
// (function renderTable (){
//     headerLine();
//     for ( let x =0; x < branchList.length; x++){
//         branchList.render();
//     }
// footerLine();
// })();

let time = ['6:00 am', '7:00 am', '8:00 am', '9:00 am', '10:00 am', '11:00 am', '12:00 pm', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm', '6:00 pm', '7:00 pm'];
//Global Variable - Store Locations Array
let branchLocations = [];
//Get Sales Data Table from sales.html
let salesTable = document.getElementById('salesTable');
//Get
// var salesInput = document.getElementById('salesInput');
// var clearTable = document.getElementById('submit');

//Store constructor
function Branchs(name, minCustomers, maxCustomers, avgCookies) {
  //Properties
  this.name = name;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookies = avgCookies;
  //Arrays
  this.averageCustomersPerHour = [];
  this.averageCookiesPerHour = [];
  this.totalCookiesPerDay = 0;
  //Methods
  this.numOfCustomersPerHour();
  this.cookiesPerCustomer();
  //Push the created instance to the storeLocations array
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

headerLine();
renderBranchs();
footerLine();