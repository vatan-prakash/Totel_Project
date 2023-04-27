import {useState} from 'react'
// import img from 'next/image';
import Map from '../Map/Map';
import ImageGallery from '../ImageGallery/ImageGallery';
import MyForm from '../Box/Input';
import MyFormtwo from '../Box/input2';
import BookingCalendar from '../calender/Calender';


const Main = ({step}) => {
  
  const [guest, setGuest] = useState(0);
  const [bedrooms, setBedrooms] = useState(0);
  const [bed, setBed] = useState(0);
  const [bathrooms, setBathrooms] = useState(0);

  const decreaseHandler = (type) => {
    if (type === 'guest') {
       if (guest === 0) return;
       setGuest(guest - 1);
    }


    else if (type === 'bedrooms') {
      if (bedrooms === 0) return;
      setBedrooms(bedrooms - 1);
   }
  

   else if (type === 'bed'){
    if (bed === 0) return;
    setBed(bed - 1);
  }


   else   {
      if (bathrooms === 0) return;
      setBathrooms(bathrooms - 1);
   }
  }

   const [Mon, setmon] = useState(24);
   const [Tue, settue] = useState(24);
   const [Wed, setwed] = useState(24);
   const [Thurs,setthurs] = useState(24);
   const [Fri, setfri] = useState(24);
   const [Sat, setsat] = useState(24);
   const [Sun, setsun] = useState(24);
   

  //  const [bedrooms, setBedrooms] = useState(0);
  //  const [bed, setBed] = useState(0);
  //  const [bathrooms, setBathrooms] = useState(0);
 
   const decrease = (type) => {
     if (type === 'Mon') {
        if (Mon === 24) return;
        setmon(Mon - 1);
     }
 
    else if (type === 'Tue') {
      if (Tue === 24) return;
      settue(Tue - 1);
   }


   else if (type === 'Wed') {
    if (Wed === 24) return;
    setwed(Wed - 1);
   }

    
 else  if (type === 'Thurs') {
    if (Thurs === 24) return;
    setthurs(Thurs - 1);
   }
   

  else if (type === 'Fri') {
    if (Fri === 24) return;
    setfri(Fri - 1);
   }

  else if (type === 'Sat') {
    if (Sat === 24) return;
    setsat(Sat - 1);
   }
   

   else{
    if (Sun === 24) return;
    setsun(Sun - 1);
 }




   }













  
  
 
  

  const main1 = (
    <div className='page1'>
    <div className='content1'>
      <div className="step" >Step-1</div>
      <div className="heading">Tell us about your place</div>
      <div className="para"><p>In this step, well ask you which type of stays you have and if guests will book the entire place or just a room. Then let us know the location and how many guests can stay.</p></div>
      </div>
      <div className="image">
        <img src ="/images/Rectangle 1.png" />
      </div>
    </div>
  )






  const main2 = (
    <div>
    
      <div className="heading2">Which of these best describes your place?</div>
      <div className="role2 w-full "><p>In this step, we'll ask you which type of stays you have and if guests will book the entire place or just a room. Then let us know the location and how many guests can stay</p></div>
      
    <div className="page2">
      
       <div className="pg2">
       <div className="image2 w-full"><img src="/images/apartment.jpeg"/></div>
       <div className="a">Apartment</div>

     </div>

       <div className="pg2">
       <div className="image2 w-full"><img src="/images/house.jpeg"/></div>
       <div className="a">House</div>

     </div>

     <div className="pg2">
       <div className="image2 w-full"><img src="/images/room.jpeg"/></div>
       <div className="a">Room</div>

     </div>
     
     <div className="pg2">
       <div className="image2 w-full"><img src="/images/flat.jpeg"/></div>
       <div className="a">Flat</div>

     </div>


      </div>
    </div>
  )








  const main3 = (
    <div>
     

     <div className="heading2">What type of place will roommate have?</div>
      <div className="role2 w-full "><p>In this step, we'll ask you which type of stays you have and if guests will book the entire place or just a room. Then let us know the location and how many guests can stay.</p></div>
      
    <div className="page3">
      
       <div className="pg3">
       <div className="image3 w-full"><img src="/images/entire.jpg"/></div>
       <div className="a3">Entire House</div>

     </div>

       <div className="pg3">
       <div className="image3 w-full"><img src="/images/private.jpg"/></div>
       <div className="a3">Private Room</div>

     </div>

     <div className="pg3">
       <div className="image3 w-full"><img src="/images/shared.jpeg"/></div>
       <div className="a3">Shared Room</div>
  
     </div>
      </div>
    </div>
  )






  const main4 = (
    <div className='page4'>
      {/* <div className="step" >Step-4</div> */}
      <div className="heading4">Where is your place located?</div>
      <div className="a4 w-full "><p>In this step, well ask you which type of stays you have and if guests will book the entire place or just a room.</p></div>
      <div
  style={{
    position: "relative",
    height: "calc(100vh - 20px)"
  }}
>
  <Map
    centerAroundCurrentLocation={true}
    zoom={20}
  />
</div>
    </div>
  )





  const main5 = (
    <>
     <div className='content1'>
      {/* <div className="step" >Step-3</div> */}
      <div className="heading">Who can stay in your place?</div>
      <div className="para w-full"><p >You'll add more details later, such as bed types..</p></div>
      </div>

  <div className="stay">
     <div className="who">Who can stay there?</div>    
       <div className='gender'>
         <div className="g male">
          <div className='imagep'>
            <img src="/images/male1.png"/>
          </div>     
         <div className='person m'>Male</div>
       </div>
         <div className="g female">
          <div className='imagep'>
            <img src="/images/female.png"/>
          </div>
          <div className='person f'>Female</div>
         </div>

         <div className="g both">
          <div className='imagep'><img src="/images/both.png"/></div>
          <div className='person b'>Both can stay</div>
         </div>
    </div>      
    </div>


      <div style={{width:'85%',margin:'2rem auto'}}>
        <div className="who">Sharable Details</div>
      <div className='main_btn'>
         <div>Guests</div>
          <div className='right'>
            <div className='btn' onClick={() => decreaseHandler('guest')}>-</div>
            <div style={{width: '25px',textAlign:'center'}}>{guest}</div>
            <div className='btn' onClick={() => setGuest(guest +1)}>+</div>
          </div>
      </div>
      </div>


      <div style={{width:'85%',margin:'2rem auto'}}>
      <div className='main_btn'>
         <div>Bedrooms</div>
          <div className='right'>
            <div className='btn' onClick={() => decreaseHandler('bedrooms')}>-</div>
            <div style={{ width: '25px', textAlign: 'center' }}>{bedrooms}</div>
            <div className='btn' onClick={() => setBedrooms(bedrooms +1)}>+</div>
          </div>
      </div>
      </div>


      <div style={{width:'85%',margin:'2rem auto'}}>
      <div className='main_btn'>
         <div>Beds</div>
          <div className='right'>
            <div className='btn' onClick={() => decreaseHandler('bed')}>-</div>
            <div style={{ width: '25px', textAlign: 'center' }}>{ bed}</div>
            <div className='btn' onClick={() => setBed(bed +1)}>+</div>
          </div>
      </div>
      </div>

      <div style={{width:'85%',margin:'2rem auto'}}>
      <div className='main_btn'>
         <div>Bathrooms</div>
          <div className='right'>
            <div className='btn' onClick={() => decreaseHandler('bathrooms')}>-</div>
            <div style={{ width: '25px', textAlign: 'center' }}>{bathrooms}</div>
            <div className='btn' onClick={() => setBathrooms(bathrooms +1)}>+</div>
          </div>
      </div>
      </div>

  </>
      
     
  )




  const main6 = (
    <div>
    <div className='content1'>
      <div className="step" >Step-2</div>
      <div className="heading">Make your place stand out</div>
      <div className="para"><p >In this step, you’ll add some of the amenities your place offers, plus 5 or more photos. Then you’ll create a title and description.
      </p>
      </div>
      </div>
      <div className="image">
        <img src ="/images/pages6.png" />
      </div>
    </div>
  )






  const main7= (
    <div className='page8'>
    <div className='content1'>
      {/* <div className="step" >Step-1</div> */}
      <div className="heading">Add your house pictures!</div>
      <div className="para"><p >You'll need 5 photos to get started. You can add more or make changes later. Choose at least 5 photos.</p></div>
      </div>
      <div className="imagegallery">
      <ImageGallery/>
      </div>
    </div>
  )

  const main8 = (
    <div className='page1'>
    <div className='content1'>
    
      <div className="heading">Let's give your house a title & description!</div>
      <div className="para"><p>Short titles work best. Have fun with it – you can always change it later..</p></div>
     
    <div className="hd">
     <div className='head9'>
      <div className='title'>Heading</div>

      <div>
        <MyForm/>
      </div> 

      <div className='title'>Enter Description</div>

      <div>
        <MyFormtwo/>
      </div> 
      </div>
      </div>
     


      </div>
    </div>
  )








  const main9 = (
    <div>
     <div className='content1'>
      <div className="step" >Step-3</div>
      <div className="heading">Finish up and publish</div>
      <div className="para w-full"><p >Finally, you’ll choose if you'd like to start with an experienced guest, then you'll set your nightly price. Answer a few quick questions and publish when you're ready.</p></div>
      </div>
      <div className="image w-full">
        <img src ="/images/pages6.png" />
      </div>
    </div>
  )




  const main10 = (
    <div className='page1'>
    <div className='content1'>
      <div className="heading">What are the amenities you have?</div>
      <div className="para"><p>You'll add more details later, such as bed types..</p></div>
      {/* <div className='title'>Who can stay there? </div> */}
    
  <div className="amenities">
     <div className="who">Who can stay there?</div>
   <div className='facilities'>
       <div className='facility f1'>
         
          <div className="g free">
          <div className='imagep'>
            <img src="/images/car.png"/>
          </div>     
          <div className='person m'>Free parking on premises</div>
          </div>

         <div className="g tv">
          <div className='imagep'>
          <img src="/images/screen.png"/></div>
          <div className='person m'>TV</div>
         </div>

         <div className="g both work">
          <div className='imagep'><img src="/images/web.png"/></div>
          <div className='person b'>Dedicated workspace</div>
         </div>
      </div>

      <div className='facility f2'>
         
         <div className="g free">
         <div className='imagep'>
           <img src="/images/para.png"/>
         </div>     
         <div className='person m'>Air Conditioning</div>
         </div>

        <div className="g tv">
         <div className='imagep'>
         <img src="/images/wifi.svg"/></div>
         <div className='person m'>WIFI</div>
        </div>

        <div className="g both work">
         <div className='imagep'><img src="/images/wash.svg"/></div>
         <div className='person b'>Washing Machine</div>
        </div>
     </div>
     
    
     <div className="who standout">Fire Fit</div>
     <div className='facility f3'>
         <div className="g free">
         <div className='imagep'>
           <img src="/images/para.png"/>
         </div>     
         <div className='person m'>Games</div>
         </div>

        <div className="g tv">
         <div className='imagep'>
         <img src="/images/wifi.svg"/></div>
         <div className='person m'>Room service</div>
        </div>

        <div className="g both work">
         <div className='imagep'><img src="/images/web.png"/></div>
         <div className='person b'>Washing Machine</div>
        </div>
     </div>
  


     <div className='facility f2 f4'>
         
         <div className="g free">
         <div className='imagep'>
           <img src="/images/para.png"/>
         </div>     
         <div className='person m'>Exercise equipment</div>
         </div>

        <div className="g tv">
         <div className='imagep'>
         <img src="/images/screen.png"/></div>
         <div className='person m'>Patio</div>
        </div>

        <div className="g both work">
         <div className='imagep'><img src="/images/web.png"/></div>
         <div className='person b'>BBQ grill</div>
        </div>
     </div>


     <div className='facility f2 f4'>
         
         <div className="g free">
         <div className='imagep'>
           <img src="/images/para.png"/>
         </div>     
         <div className='person m'>Outdoor shower</div>
         </div>

        <div className="g tv">
         <div className='imagep'>
         <img src="/images/screen.png"/></div>
         <div className='person m'>pool</div>
        </div>

        <div className="g both work">
         <div className='imagep'><img src="/images/web.png"/></div>
         <div className='person b'>Hot tube</div>
        </div>
     </div>

   </div>      
    </div>

    
      </div>
    
    </div>
  )



  const main11 = (
    <div className='page'>
    <div className='content1'>

      <div className="heading">Set your price</div>

      <div className="para"><p>Short titles work best. Have fun with it – you can always change it later..</p></div>
    
      <div className='hour'></div>

      <div className='expenses'>

      <div style={{margin:'1rem auto', }}>
        
      <div className='main_btn'>
         <div>Monday</div>
          <div className='right'>
            <div className='btn' onClick={() => decrease('Mon')}>-</div>
            <div style={{width: '25px',textAlign:'center'}}>{Mon}</div>
            <div className='btn' onClick={() => setmon(Mon +1)}>+</div>
          </div>
      </div>
      </div>

      <div style={{margin:'1rem auto'}}>
       
      <div className='main_btn'>
         <div>Tuesday</div>
          <div className='right'>
            <div className='btn' onClick={() => decrease('Tue')}>-</div>
            <div style={{width: '25px',textAlign:'center'}}>{Tue}</div>
            <div className='btn' onClick={() => settue(Tue +1)}>+</div>
          </div>
      </div>
      </div>
     
      <div style={{margin:'1rem auto'}}>
      <div className='main_btn'>
         <div>Wednesday</div>
          <div className='right'>
            <div className='btn' onClick={() => decrease('guest')}>-</div>
            <div style={{width: '25px',textAlign:'center'}}>{ Wed}</div>
            <div className='btn' onClick={() => setwed(Wed +1)}>+</div>
          </div>
      </div>
      </div>

      <div style={{margin:'1rem auto'}}>
      <div className='main_btn'>
         <div>Thursday</div>
          <div className='right'>
            <div className='btn' onClick={() => decrease('Thurs')}>-</div>
            <div style={{width: '25px',textAlign:'center'}}>{Thurs}</div>
            <div className='btn' onClick={() => setthurs(Thurs +1)}>+</div>
          </div>
      </div>
      </div>

      <div style={{margin:'1rem auto'}}>
      <div className='main_btn'>
         <div>Friday</div>
          <div className='right'>
            <div className='btn' onClick={() => decrease('guest')}>-</div>
            <div style={{width: '25px',textAlign:'center'}}>{Fri}</div>
            <div className='btn' onClick={() => setfri(Fri +1)}>+</div>
          </div>
      </div>
      </div>
     
     
      <div style={{margin:'1rem auto'}}>
      <div className='main_btn'>
         <div>Saturday</div>
          <div className='right'>
            <div className='btn' onClick={() => decrease('Sat')}>-</div>
            <div style={{width: '25px',textAlign:'center'}}>{Sat}</div>
            <div className='btn' onClick={() => setsat(Sat +1)}>+</div>
          </div>
      </div>
      </div>

      <div style={{margin:'1rem auto'}}>
      <div className='main_btn'>
         <div>Sunday</div>
          <div className='right'>
            <div className='btn' onClick={() => decrease('Sun')}>-</div>
            <div style={{width: '25px',textAlign:'center'}}>{Sun}</div>
            <div className='btn' onClick={() => setsun(Sun +1)}>+</div>
          </div>
      </div>
      </div>

      </div>
    </div>
     
    </div>
  )

  const main12 = (
    <div className='page1'>
    <div className='content1'>
      <div className="heading">Set your availability</div>
      <div className="para"><p>Short titles work best. Have fun with it – you can always change it later.</p></div>
    
    <div className='calender'></div>
    <BookingCalendar/>
</div>


</div>
)



  return (
    <div>
      {step === 1 ? main1 : step === 2 ? main2 : step ===3 ? main3 : step === 4 ? main4 : step === 5 ? main5 :step === 6 ? main6 : step=== 7 ? main7: step===8? main8: step===9? main9: step===10? main10 : step==11? main11 : main12 }
    </div>
  )
}

export default Main;