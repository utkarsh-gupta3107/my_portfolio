import React from 'react'
import './consulting.css'

const Consulting = ({menuData}) => {
  return (
    <div>
      <br></br>
      <br></br>
      <h2 id='h2pad'>Guesstimates Self-solved Examples</h2>
      {menuData.map((curElem)=>{
        const {id,title,scope,approach,formula,calculation,answer}= curElem;
return(
      <div id="some-box">
        <hr></hr>
  <h4>({id}) {title}</h4>
  <hr></hr>


  <article class="row" id="idea-one">
    <div  className='imagecarry'><img src="images/step1.png" alt='step1' /></div>
    <div className='datacarry'>
      <h5>Scope and Approach</h5>
 <p><b>Scope:</b> {scope}</p>
 <p><b>Approach:</b> {approach}</p>  
 </div>
  </article>

  <article class="row" id="idea-two">
  <div  className='imagecarry1' ><img src="images/step2.png" alt='step2'/></div>
  <div className='datacarry'>
      <h5>Formulation and Assumptions</h5>
      <p><b>Formula: </b>{formula}</p>
        </div>
    <div  className='imagecarry'><img src="images/step2.png" alt='step2'/></div>
  </article>

  <article class="row" id="idea-three">
  <div  className='imagecarry'><img src="images/step3.png" alt='step3'/></div>
    <div className='datacarry'>
      <h5>Calculations and Validation</h5>
      <p><b>Calculations: </b>{calculation}</p>
      <p><b>Answer: </b>{answer}</p>
         <p>You can now seek validation from your interviewer.</p>  </div>
  </article>

</div>
)
   
})}
    </div>
  )
}

export default Consulting
