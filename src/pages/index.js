import Head from 'next/head';
import Navbar from '../Components/Navbar/navbar';
import  Main  from '../Components/Main/main';
import Footer from '@/Components/Footer/footer';
import {useState} from 'react'

function index() {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  }
  
  const backStep = () => {
    if(step == 1) return;
    setStep(step - 1);
  }


  return (
    <div>
      <Head> 
        <title>Totel website</title>
      </Head>     
      <Navbar/>
      <Main step={step} />
      <Footer nextStep={nextStep} backStep={backStep} />
    </div>
   
  )
}

export default index



