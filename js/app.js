"use strict"
 
let time=["6am " ,'7am ','8am','9am','10am','11am','12pm ','1pm ','2pm ','3pm ','4pm ','5pm ','6pm ','7pm '];
//seattle:
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
    location: 'tokyo Branch',
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
