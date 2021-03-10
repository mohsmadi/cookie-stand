"use strict"
 
let time=["6am " ,'7am ','8am','9am','10am','11am','12pm ','1pm ','2pm ','3pm ','4pm ','5pm ','6pm ','7pm '];


let seattleBranch = {
    location: 'Seattle Branch',
    min: 23,
    max: 65,
    avgCookieSale: 6.3,
    hourlySales:[],
    dailySales:0,

   randomCust :function () {
        let range=this.max-this.min;
         let randomCount=Math.random() * range+this.min;
         return Math.ceil(randomCount);
      },

    hourlyDailySales :function () {
        for (let i=0;i<time.length;i++){
            let numOfCookies= Math.ceil(this.randomCust()*this.avgCookieSale);
            this.hourlySales.push(numOfCookies);
            this.dailySales += numOfCookies;
        }
        },
       
   render :function(){
       let container=document.getElementById('content-area');
       let h2 =document.createElement('h2');
       container.appendChild(h2);
       h2.textContent=this.location;
       container.appendChild(h2);
       let list=document.createElement('ul');
       container.appendChild(list);
       for (let i=0;i<time.length;i++){
        let listItem = document.createElement('li');
        listItem.textContent  =time[i]+': '+this.hourlySales[i]+' cookies';
        list.appendChild(listItem);
       }
       let listItem = document.createElement('li');
        listItem.textContent  ='Total: '+this.dailySales+' cookies';
        list.appendChild(listItem);


   },
}


    seattleBranch.hourlyDailySales();
    seattleBranch.render();


   let tokyoBranch = {
    location: 'Tokyo Branch',
    min: 3,
    max: 24,
    avgCookieSale: 1.2,
    hourlySales:[],
    dailySales:0,

   randomCust :function () {
        let range=this.max-this.min;
         let randomCount=Math.random() * range+this.min;
         return Math.ceil(randomCount);
      },

    hourlyDailySales :function () {
        for (let i=0;i<time.length;i++){
            let numOfCookies= Math.ceil(this.randomCust()*this.avgCookieSale);
            this.hourlySales.push(numOfCookies);
            this.dailySales += numOfCookies;
        }
        },
       
   render :function(){
       let container=document.getElementById('content-area');
       let h2 =document.createElement('h2');
       container.appendChild(h2);
       h2.textContent=this.location;
       container.appendChild(h2);
       let list=document.createElement('ul');
       container.appendChild(list);
       for (let i=0;i<time.length;i++){
        let listItem = document.createElement('li');
        listItem.textContent  =time[i]+': '+this.hourlySales[i]+' cookies';
        list.appendChild(listItem);
       }
       let listItem = document.createElement('li');
        listItem.textContent  ='Total: '+this.dailySales+' cookies';
        list.appendChild(listItem);


   },
}
   tokyoBranch.hourlyDailySales();
   tokyoBranch.render();

   let dubaiBranch = {
    location: 'Dubai Branch',
    min: 11,
    max: 38,
    avgCookieSale:  3.7,
    hourlySales:[],
    dailySales:0,

   randomCust :function () {
        let range=this.max-this.min;
         let randomCount=Math.random() * range+this.min;
         return Math.ceil(randomCount);
      },

    hourlyDailySales :function () {
        for (let i=0;i<time.length;i++){
            let numOfCookies= Math.ceil(this.randomCust()*this.avgCookieSale);
            this.hourlySales.push(numOfCookies);
            this.dailySales += numOfCookies;
        }
        },
       
   render :function(){
       let container=document.getElementById('content-area');
       let h2 =document.createElement('h2');
       container.appendChild(h2);
       h2.textContent=this.location;
       container.appendChild(h2);
       let list=document.createElement('ul');
       container.appendChild(list);
       for (let i=0;i<time.length;i++){
        let listItem = document.createElement('li');
        listItem.textContent  =time[i]+': '+this.hourlySales[i]+' cookies';
        list.appendChild(listItem);
       }
       let listItem = document.createElement('li');
        listItem.textContent  ='Total: '+this.dailySales+' cookies';
        list.appendChild(listItem);


   }
}
   dubaiBranch.hourlyDailySales();
   dubaiBranch.render();


   let parisBranch = {
    location: 'Paris Branch',
    min: 20,
    max: 38,
    avgCookieSale:  3.7,
    hourlySales:[],
    dailySales:0,

   randomCust :function () {
        let range=this.max-this.min;
         let randomCount=Math.random() * range+this.min;
         return Math.ceil(randomCount);
      },

    hourlyDailySales :function () {
        for (let i=0;i<time.length;i++){
            let numOfCookies= Math.ceil(this.randomCust()*this.avgCookieSale);
            this.hourlySales.push(numOfCookies);
            this.dailySales += numOfCookies;
        }
        },
       
   render :function(){
       let container=document.getElementById('content-area');
       let h2 =document.createElement('h2');
       container.appendChild(h2);
       h2.textContent=this.location;
       container.appendChild(h2);
       let list=document.createElement('ul');
       container.appendChild(list);
       for (let i=0;i<time.length;i++){
        let listItem = document.createElement('li');
        listItem.textContent  =time[i]+': '+this.hourlySales[i]+' cookies';
        list.appendChild(listItem);
       }
       let listItem = document.createElement('li');
        listItem.textContent  ='Total: '+this.dailySales+' cookies';
        list.appendChild(listItem);


   }
}
   parisBranch.hourlyDailySales();
   parisBranch.render();

   let limaBranch = {
    location: 'Lima Branch',
    min: 2,
    max: 16,
    avgCookieSale: 4.6,
    hourlySales:[],
    dailySales:0,

   randomCust :function () {
        let range=this.max-this.min;
         let randomCount=Math.random() * range+this.min;
         return Math.ceil(randomCount);
      },

    hourlyDailySales :function () {
        for (let i=0;i<time.length;i++){
            let numOfCookies= Math.ceil(this.randomCust()*this.avgCookieSale);
            this.hourlySales.push(numOfCookies);
            this.dailySales += numOfCookies;
        }
        },
       
   render :function(){
       let container=document.getElementById('content-area');
       let h2 =document.createElement('h2');
       container.appendChild(h2);
       h2.textContent=this.location;
       container.appendChild(h2);
       let list=document.createElement('ul');
       container.appendChild(list);
       for (let i=0;i<time.length;i++){
        let listItem = document.createElement('li');
        listItem.textContent  =time[i]+': '+this.hourlySales[i]+' cookies';
        list.appendChild(listItem);
       }
       let listItem = document.createElement('li');
        listItem.textContent  ='Total: '+this.dailySales+' cookies';
        list.appendChild(listItem);


   },
}
   limaBranch.hourlyDailySales();
   limaBranch.render();

// let time=['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
let tableElement=document.getElementById('table');

function patCookies(branchName, minClintPerHour, maxClintPerHour, avgCookieSale){
this.branchName=branchName;
this.minClintPerHour;
this.maxClintPerHour=maxClintPerHour;
this.avgCookieSale=avgCookieSale;
this.clintHourly =[];
this.coockiesHourly =[];
this.totalCoockiesPerDay = 0;
}

patCookies.prototype.calcClintHourly = function(){
for(let x = 0; x < time.length; x++) {
    this.calcClintHourly.push(random(this.minClintPerHour,maxClintPerHour));
}
};

patCookies.prototype.calccookiesHourly = function(){
    this.calcClintHourly();
    for( let x = 0; x < time.length; x++){
        let oneHour = Math.ceil(this.clintHourly[x] * this.avgCookieSale);
        this.coockiesHourly.push(oneHour);
        this.totalCoockiesPerDay +=oneHour;
    }
};

patCookies.prototype.render = function(){
    this.calccookiesHourly();
    let tableRow = document.createElement('tr');
    let tableDataElement= document.createElement('td');
    tableDataElement.textContent=this.branchName;
    tableRow.appendChild(tableDataElement);
    
    for (let x = 0; x < time.length; x++){
       tableDataElement = document.createElement('td');
       tableDataElement.textContenta = this.coockiesHourly[x];
       tableRow.appendChild(tableDataElement);
    }
    let tableHeader = document.createElement('th');
    tableHeader.textContent = this.totalCoockiesPerDay;
    tableRow.appendChild(tableHeader);
    tableElement.appendChild(tableRow);
};
// let branchList =[seattle, tokyo, dubai, paris, lima];
seattle = new patCookies('Seattle', 23 , 65 , 6.3);
tokyo = new patCookies('Tokyo', 3 , 24 , 1.2);
dubai = new patCookies('Dubai', 11 , 38 , 3.7);
paris = new patCookies('Paris', 20 , 38 , 2.3);
lima = new patCookies('Lima', 2 , 16 , 4.6);


function headerLine(){
    let tableRow = document.createElement('tr');
    let tableHeader = document.createElement('th');
    tableHeader.textContent('Branchs');
    tableRow.appendChild(tableHeader);

    for (let x = 0; x < time.length; x++ ){
      tableHeader.document.createElement('th');
      tableHeader.textContent=time[x];
      tableRow.appendChild(tableHeader);
    } 
    tableHeader = document.createElement('th');
    tableHeader.textContent ='Branchs Total';
    tableRow.appendChild(tableHeader);
    tableElement.appendChild(tableRow);
}

function footerLine (){
    let tableRow = document.createElement('tr'); 
    let tableHeader = document.createElement('th');
    tableHeader.textContent('Total Coockies Over The Branches per Hour');
    tableRow.appendChild(tableHeader);
    let totalSummation = 0;
    for (let x = 0; x < time.length; x++);{
      let totalPerHour = 0;
      for ( y =0; y < branchList.length; y++);{
          totalPerHour += branchList[y].coockiesHourly[x];
          totalSummation +=branchList[y].coockiesHourly[x];
      }
      tableHeader=document.createElement('th');
      tableHeader.textContent = totalPerHour;
      tableRow.appendChild(tableHeader);
    }
    tableHeader = document.createElement('th');
    tableHeader.textContent = totalSummation;
    tableRow.appendChild(tableHeader);
    tableElement.appendChild(tableRow);
}
(function renderTable (){
    headerLine();
    for ( let x =0; x < branchList.length; x++){
        branchList.render();
    }
footerLine();
})();
