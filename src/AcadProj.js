import React from 'react'
import './AcadProj.css'

const AcadProj = ({menuData}) => {
  return (
    <body>
     <head>
     <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700&family=Karla:wght@400;700&display=swap" rel="stylesheet" />
        </head> 

        <main>
          <br></br><br></br>
  <h1>Academic Projects</h1>
  <section>
  {menuData.map((curElem)=>{
        const {id,title,timestamp,lang,remark,repo,host, description}= curElem;
return(
  <>
  <br></br>
   <h2 key={id}>{id}. {title}</h2>
    <div class="grid-wrapper">
      <article>
        <h4>Time Stamp</h4>
        <p>{timestamp}</p>
      </article>
      <article>
        <h4>Remarks</h4>
        <p>{remark}</p>
      </article>
      <article>
      </article>
      <article>
                <img src={curElem.image} alt='letsee'/>
      </article>
      <article>
        <h4>Hosted Links</h4>
        {/* <p>{host}</p> */}
        <a href={host}>{host}</a>
      </article>
      <article>
        <h4>Repo Link</h4>
        {/* <p>{repo}</p> */}
        <a href={repo}>{repo}</a>
      </article>
      <article>
      </article>
      <article>
        <h4>Languages/Tools</h4>
        <p>{lang}</p>
        <h4>Description</h4>
        <p>{description}</p>
         </article>
    </div></>

)
   
  })}
  </section>
 
  </main>
  
    </body>
  )
}

export default AcadProj
