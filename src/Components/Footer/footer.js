// import React from 'react'

const Footer=({nextStep ,backStep} )=> {
  return (
    <>
    <div > 
    <footer className="w-full ft">
    
   <div className="ft1">
   
   <div>
   <button class="button2" onClick={backStep}>
    Back
    </button>
   </div>
   
   <div>
   <button class="button1" onClick={nextStep}>
     Next
    </button>
   </div>
   
    
   </div>
    </footer>
    </div>
    </>
   
  )
}

export default Footer