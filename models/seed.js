const mongoose = require('mongoose');


const players = [
    {
       name: "Kobe Bryant",

       image: "https://image.cnbcfm.com/api/v1/image/101524695-457220551.jpg?v=1395781183&w=630&h=354&ffmt=webp&vtcrop=y",
       
       team: "Los Angeles Lakers"
      },
    
    {
       name: "Michael Jordan", 
       
       image: "https://cdn.nba.com/manage/2021/08/michael-jordan-celebrates-archive.jpg",
       
       team: "Chicago Bulls"
      },
      
      {
         name: "Stephen Curry",
         
         image: "https://library.sportingnews.com/styles/crop_style_16_9_desktop_webp/s3/2022-01/stephen-curry-ftr_1brlc3k3jwvwr1fjrw3y1k16pj.jpeg.webp?itok=f7eU21Ml",
  
         team: "Golden State Warriors"
      },
  
      {
         name: "Giannis antetokounmpo ",
         
         image: "https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2023/03/1862/1046/GettyImages-1471325192.jpg?ve=1&tl=1",
  
         team: "Milwaukee Bucks"
      }
   ]
      
  
       

module.exports = players;