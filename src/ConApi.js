const Cenu = [
   {
      // id,yr,title,timestamp,lang,remark,repo,host,yt, description
      id: 1,
      title:"Number of People visiting Delhi Railway station daily",
      scope:"Passangers including boarding, deboarding and pssing throught. Excluding porter, employees, shopkeepers, people coming to pickup or drop",
      approach:"Supply Side",
      formula:"No. of Platforms * Operation Time * Occupancy Rate * No. of Coaches * No. of seats per coach * % occupancy / Avg. time for a train to be processed at a platform",
      calculation:"16 * 24 * 60 min * 50% * (1 + 1 + 2 + 12 + 2) * 70% / 40 min",
      answer:"3,12,440 people "
     }, 
     {
      // id,yr,title,timestamp,lang,remark,repo,host,yt, description
      id: 2,
      title:"Number of Men's suit sold in US every year",
      scope:"Considering suits worn at office or functions only",
      approach:"Demand Side",
      formula:"Population of US* % of men in US * % target Age Group * % who possess suit to wear to office/function * Number of suits purchased per man / Average replacement cycle",
      calculation:"320Million * 50% * 50/80 * 75% * 3 / 4",
      answer:"56.25 Million volume units"
     },   
     {
      // id,yr,title,timestamp,lang,remark,repo,host,yt, description
      id: 3,
      title:"Disposable diapers market size in India",
      scope:"Diapers used by kids. Not considering for adults or that used for hospitals",
      approach:"Demand Side",
      formula:"Population of India * %Target Grouo * % Who can Afford * % Who prefer disposable diapers * Daily count per child * 365 days * Price of a diaper",
      calculation:"130 Crore * (4/70) * 50% * 70% * 2 * 365 * 10",
      answer:"18980 Crore INR"
     },  
     {
      // id,yr,title,timestamp,lang,remark,repo,host,yt, description
      id: 4,
      title:'Number of weddings in which groom comes in horses',
      scope:"Focusing on Hindu weddings, Excluding second marriages",
      approach:"Demand Side",
      formula:"Population of India / (Life Expectancy * 2) * % of Hindu population * *% who could afford * % where      groom comes on a horse",
      calculation:"140 cr/(70 * 2) *80% * 60% * 80%",
      answer:"38.5 Lakhs"
     },
     {
      // id,yr,title,timestamp,lang,remark,repo,host,yt, description
      id: 5,
      title:"Count of footballs that could fit in a swimming pool",
      scope:"Balls are inflated and air occupies spaces between the balls",
      approach:"Unconventional",
      formula:"Length * Breadth * Height of Pool / (4/3 * Pi * R^3) * Occupancy Rate",
      calculation:"50 m * 20 m * ((1.4 + 3)/2)m / (4/3 * 3.14 * (.24/2)^3) * 74%",
      answer:"304096"
     }, 
     ];
  
  export default Cenu;