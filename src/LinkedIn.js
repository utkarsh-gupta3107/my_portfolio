import React from 'react'
import './Linkedin.css'

const LinkedIn = () => {
 
  return (
    <div className='bodyL'>
      {/* <br></br> */}
           
        <div class="containerL">

  <div class="item headerL"><img src='images/bound.png' width='100%' height='100%' alt='boundlessme'/></div>
 
  <div class="item content-1">        <img src='images/linkedinanalytics.JPG' width='100%' alt='linkedin'/>
</div>
<div class="item sidebar"> <iframe className='leftcolumn1' src="https://www.linkedin.com/embed/feed/update/urn:li:share:7084845926233554944" width='100%' height='100%' frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
</div>
  <div class="item content-2">        <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7083370846018224128" height="100%" width="100%" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
</div>
  <div class="item content-3">        <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7084129842694172672" height="100%" width="100%" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
</div>
  {/* <div class="item footer">footer</div> */}
</div>
       
        {/* <div className='column'>
        <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7083370846018224128" height="798" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
        </div>
        <div className='column'>
        <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7082645434829053952" height="525" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
        </div>
        <div className='column'>
        <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7084129842694172672" height="1113" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
      </div> */}
    </div>
  )
}

export default LinkedIn

