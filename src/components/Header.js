import logo from '../Assets/logo.svg';
import workersimage from '../Assets/illustration.png';
import { IoIosArrowDropdownCircle } from "react-icons/io";
import conicalflask from '../Assets/conical flask.svg';
import gam from '../Assets/gam.svg';
import Rectangle1395 from '../Assets/Rectangle1395.png';
import mentorcity from '../Assets/mentorcity.png';
import postalmethods from '../Assets/postalmethods.png';
import hstay from '../Assets/hstay.png';
import subway from '../Assets/subway.png';
import homevisit from '../Assets/homevisit.png';
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import imageiso from '../Assets/imageiso.png';
import psebimage from '../Assets/psebimage.png';
import pashaimage from '../Assets/pashaimage.png';
import secpimage from '../Assets/secpimage.png';
import { FaPhoneAlt } from "react-icons/fa";
import { MdForwardToInbox } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { AiFillTwitterCircle } from "react-icons/ai";
import footnexisol from '../Assets/footnexisol.svg';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import circlepicone from '../Assets/circlepicone.png';
import circlepictwo from '../Assets/circlepictwo.png';
const Header = ()=> {
    return (
        <>

        <div className='flex flex-col justify-between gap-[2rem]'>
        <div className='flex justify-between m-8 items-center max-md:flex-col max-md:gap-4 max-md:m-[1.1rem]'>
      
    <img src={logo} alt='' className=' w-[100%] max-w-[18.6rem]' />

    <div className='flex w-[100%] max-w-[25rem] justify-between max-md:justify-center max-md:gap-2 '>
     <div className='flex justify-between gap-7 max-md:gap-1 '>
        <p>About</p>
        <div className='flex  gap-2 max-md:gap-1'>
          <p>IT Services</p>
          <IoIosArrowDropdownCircle className='self-center text-[#E92129] text-[1.2rem]' />
        </div>
        <p>Portfolio</p>
     </div>
     <button className='bg-[#E92129] text-[white] min-w-[5.3rem] min-h-[1.6rem] rounded-md text-xs font-semibold'>Contact Us</button>
     </div>
    </div>
   

 {/* Bridging section */}
 <div className='flex flex-col gap-[1rem] items-center max-md:gap-[2rem] px-4 py-4'>
 

  <div className='flex justify-between max-w-[94%] gap-[2rem] max-md:flex-col max-md:items-center '>
  <h1 className=' max-md:text-center text-[70px]  max-lg:text-[40px]  bg-clip-text font-extrabold' style={{backgroundImage: 'linear-gradient(120.79deg, rgb(36, 36, 36) 3.25%, rgb(233, 33, 41) 75.17%)', WebkitTextFillColor: 'transparent'}} >Bridging the gap between ideas and reality</h1>

  <img src={workersimage} alt='' className='max-w-[50%] max-md:max-w-[80%]'/>
  </div>

  {/* {about company} */}
  <div className='flex justify-around items-center max-md:flex-col  max-w-[94%]'>
    <h1 className='text-[70px] max-md:text-center text-[#242424] max-lg:text-[40px] max-md:text-[40px] font-extrabold'>About Company</h1>

    <div className='max-w-[63%] '>
        <h5 className='text-[32px] max-md:text-center'>Lorem ipsum dolor sit amet consectetur. Vestibulum nascetur vitae sapien</h5>
        <p className='text-[20px] max-md:text-center'>Mattis ornare tincidunt tempus mattis mi vel auctor ipsum venenatis. Tellus nunc scelerisque dictum sagittis euismod urna egestas quam. In ornare nisl leo odio magna.</p>
        <div className='flex justify-between '>
            <div className='items-center'>
                <p className='text-[50px]  text-[#242424] max-lg:text-[40px] max-md:text-[30px] font-extrabold'>100<span className='text-[#E92129]'>+</span></p>
                <p>Happy Clients</p>
            </div>

            <div className='items-center'>
                <p className='text-[50px]  text-[#242424] max-lg:text-[40px] max-md:text-[30px] font-extrabold'>05<span className='text-[#E92129]'>+</span></p>
                <p>Years in business</p>
            </div>

             <div className='items-center'>
                <p className='text-[50px]  text-[#242424] max-lg:text-[40px] max-md:text-[30px] font-extrabold'>50<span className='text-[#E92129]'>+</span></p>
                <p>Total Members</p>
            </div>
        </div>
    </div>
  </div>
  </div>

  {/* {Services} */}
  <div className='bg-[#F8F8F8] relative flex flex-col gap-[1rem]'  >
  <div className='flex justify-center  min-h-[15rem]  max-lg:min-h-[7rem]' style={{ background: 'linear-gradient(120.79deg, rgb(233, 33, 41), rgb(36, 36, 36), rgb(36, 36, 36), rgb(36, 36, 36), rgb(36, 36, 36), rgb(233, 33, 41))' }}>
    <p className='text-[#E92129] m-6 text-[50px] font-extrabold '>Services</p>
  </div>



  {/* {brand design boxes} */}
<div className=' px-[2rem] py-[3rem] flex justify-center flex-wrap gap-[2rem] items-center absolute top-0 left-0  mt-[7rem] max-lg:mt-[0rem] max-lg:relative' style={{}}>
  <div className='shadow-xl	bg-[white] flex flex-col gap-[1rem] p-[1rem] w-fit rounded-[10px] items-center ' style={{boxShadow: 'rgba(0, 0, 0, 0.1) 8px 8px 8px'}}>
    <img src={conicalflask} alt='' className='max-w-[2rem]  ' />
    <h5 className='font-semibold text-[18px]'>Branding Design</h5>
    <p className='max-w-[15rem] text-center text-[#525252]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt sed mi posuere in amet turpis nunc, nisl.</p>
  </div> 

  <div className='shadow-xl	bg-[white] flex flex-col gap-[1rem] p-[1rem] w-fit rounded-[10px] items-center ' style={{boxShadow: 'rgba(0, 0, 0, 0.1) 8px 8px 8px'}}>
    <img src={conicalflask} alt='' className='max-w-[2rem]  ' />
    <h5 className='font-semibold text-[18px]'>Branding Design</h5>
    <p className='max-w-[15rem] text-center text-[#525252]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt sed mi posuere in amet turpis nunc, nisl.</p>
  </div> 

  <div className='shadow-xl	bg-[white] flex flex-col gap-[1rem] p-[1rem] w-fit rounded-[10px] items-center ' style={{boxShadow: 'rgba(0, 0, 0, 0.1) 8px 8px 8px'}}>
    <img src={conicalflask} alt='' className='max-w-[2rem]  ' />
    <h5 className='font-semibold text-[18px]'>Branding Design</h5>
    <p className='max-w-[15rem] text-center text-[#525252]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt sed mi posuere in amet turpis nunc, nisl.</p>
  </div> 

  <div className='shadow-xl	bg-[white] flex flex-col gap-[1rem] p-[1rem] w-fit rounded-[10px] items-center ' style={{boxShadow: 'rgba(0, 0, 0, 0.1) 8px 8px 8px'}}>
    <img src={conicalflask} alt='' className='max-w-[2rem]  ' />
    <h5 className='font-semibold text-[18px]'>Branding Design</h5>
    <p className='max-w-[15rem] text-center text-[#525252]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt sed mi posuere in amet turpis nunc, nisl.</p>
  </div> 

  <div className='shadow-xl	bg-[white] flex flex-col gap-[1rem] p-[1rem] w-fit rounded-[10px] items-center ' style={{boxShadow: 'rgba(0, 0, 0, 0.1) 8px 8px 8px'}}>
    <img src={conicalflask} alt='' className='max-w-[2rem]  ' />
    <h5 className='font-semibold text-[18px]'>Branding Design</h5>
    <p className='max-w-[15rem] text-center text-[#525252]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt sed mi posuere in amet turpis nunc, nisl.</p>
  </div> 

  <div className='shadow-xl	bg-[white] flex flex-col gap-[1rem] p-[1rem] w-fit rounded-[10px] items-center ' style={{boxShadow: 'rgba(0, 0, 0, 0.1) 8px 8px 8px'}}>
    <img src={conicalflask} alt='' className='max-w-[2rem]  ' />
    <h5 className='font-semibold text-[18px]'>Branding Design</h5>
    <p className='max-w-[15rem] text-center text-[#525252]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt sed mi posuere in amet turpis nunc, nisl.</p>
  </div> 

  <div className='shadow-xl	bg-[white] flex flex-col gap-[1rem] p-[1rem] w-fit rounded-[10px] items-center ' style={{boxShadow: 'rgba(0, 0, 0, 0.1) 8px 8px 8px'}}>
    <img src={conicalflask} alt='' className='max-w-[2rem]  ' />
    <h5 className='font-semibold text-[18px]'>Branding Design</h5>
    <p className='max-w-[15rem] text-center text-[#525252]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt sed mi posuere in amet turpis nunc, nisl.</p>
  </div> 


  <div className='shadow-xl	bg-[white] flex flex-col gap-[1rem] p-[1rem] w-fit rounded-[10px] items-center ' style={{boxShadow: 'rgba(0, 0, 0, 0.1) 8px 8px 8px'}}>
    <img src={conicalflask} alt='' className='max-w-[2rem]  ' />
    <h5 className='font-semibold text-[18px]'>Branding Design</h5>
    <p className='max-w-[15rem] text-center text-[#525252]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt sed mi posuere in amet turpis nunc, nisl.</p>
  </div> 
  
 
  </div>



  {/* {Portfolio} */}

  <div className='flex mt-[40rem] gap-[1rem] max-lg:flex-col max-lg:mt-[0rem] max-lg:items-center max-md:text-center ' >

 <div className='flex flex-col justify-around p-[2rem] max-lg:gap-[1rem] max-lg:items-center min-w-[50%]'>
   <h1 className='text-[70px] font-extrabold max-lg:text-[40px]'>Portfolio</h1>
   <p className='max-w-[25rem]'>Lorem ipsum dolor sit amet consectetur. Nunc viverra faucibus praesent elementum commodo.</p>
   <button className='bg-[#E92129] text-[white] max-w-[8rem]  min-h-[3rem] rounded-[5px] max-lg:min-w-[8rem]'>Contact Us</button>
 </div>



<div className='flex flex-col gap-[1rem] '>
 <div className='flex gap-[1rem] justify-between  max-lg:justify-center'>
  <div className='max-w-[100%]'>
    <img src={ gam} alt='' className=''/>
  </div>
  <img src={ Rectangle1395} alt='' className='max-w-[20%] h-[97%] max-lg:hidden'/>
</div>


<div className='flex gap-[1rem] justify-center'>
<div>
<IoIosArrowDropleftCircle className='text-[30px] text-[#E92129]'/>
</div>

<div>
 <IoIosArrowDroprightCircle className='text-[30px] text-[#E92129]'/>
</div>
</div>

</div> 

</div>




<div className='flex bg-[black] justify-around pt-[1rem] pb-[1rem] gap-[1rem]'>
  <img src={mentorcity} alt='' className='w-[18%] h-auto max-md:hidden'/>
  <img src={postalmethods} alt='' className='w-[18%]'/>
  <img src={hstay} alt='' className='w-[18%]'/>
  <img src={subway} alt='' className='w-[18%]'/>
  <img src={homevisit} alt='' className='w-[18%]'/>
</div>

</div>

{/* {Testimmonial} */}

<div className='flex  gap-[1rem] max-lg:flex-col max-lg:mt-[0rem] max-lg:items-center max-md:text-center lg:my-[3rem]' >

<div className='flex flex-col justify-around p-[2rem] max-lg:gap-[1rem] max-lg:items-center'>
  <h1 className='text-[70px] font-extrabold max-lg:text-[40px]'>Testimonials</h1>
  <p className='max-w-[25rem]'>Lorem ipsum dolor sit amet consectetur. Nunc viverra faucibus praesent elementum commodo.</p>
  <button className='bg-[#E92129] text-[white] max-w-[8rem]  min-h-[3rem] rounded-[5px] min-w-[12rem] flex items-center justify-center'>Explore More<span><MdOutlineKeyboardArrowRight className='text-[25px] text-[white]'/></span>
</button>
</div>


<div className=' flex flex-col '>
<div className='flex gap-[2rem] justify-center'>
<div className='flex gap-[1rem] m-[2rem] p-[1rem] max-md:flex-col items-center lg:w-[80%] max:md:w-[90%]' style={{boxShadow: 'rgba(0, 0, 0, 0.1) 2px 0px 8px 8px'}}>
  <img src={circlepicone} alt='' className='max-w-[7rem] max-h-[7rem] max:md:w-[7rem] max-md:h-[7rem] md:self-start'/>
  <div className=''>
    <h5 className='text-[26px] font-bold text-[#E92129]'>Adam Smith</h5>
    <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet proin ut urna sit. Varius sed euismod at est, commodo sociis dolor. Elit, suspendisse leo id in eu ut arcu, malesuada. Nibh suspendisse mauris amet, facilisi. Elit, suspendisse leo id in eu ut arcu, malesuada. Nibh suspendisse mauris amet, facilisi Nibh suspendisse mauris amet, facilisi. Elit, suspendisse leo id in eu ut arcu.”</p>
  </div>
</div>
  <img src={circlepictwo} className='max-lg:hidden w-[17%] max-h-[30%] self-end mb-[2rem] xl:max-h-[78%]' alt='' style={{boxShadow: 'rgba(0, 0, 0, 0.1) 2px 0px 8px 8px'}}/>
</div>


<div className='flex gap-[1rem] justify-center'>
<div>
<IoIosArrowDropleftCircle className='text-[30px] text-[#E92129]'/>
</div>

<div>
<IoIosArrowDroprightCircle className='text-[30px] text-[#E92129]'/>
</div>
</div>

</div> 

</div>


{/* {Testimonials black} */}
  

<div className='flex gap-[5rem] max-md:flex-col  max-lg:items-center max-md:text-center bg-[black] text-[white] px-[1rem] py-[2rem] '  style={{backgroundImage: 'linear-gradient(120.79deg, rgb(36, 36, 36), rgb(36, 36, 36), rgb(36, 36, 36), rgb(36, 36, 36), rgb(233, 33, 41))'
 }}>

<div className='flex flex-col justify-around p-[2rem] max-lg:gap-[1rem] max-lg:items-center max-w-[45%] max-md:max-w-[100%]'>
  <p className='self-start text-[22px]'>Testimonials____</p>
  <h1 className='text-[70px] font-extrabold max-lg:text-[40px]'>Book a meeting with us</h1>
  <p className='text-left max-lg:text-center text-[22px]'>Mattis ornare tincidunt tempus mattis mi vel auctor ipsum venenatis. Tellus nunc scelerisque dictum sagittis euismod urna egestas quam. In ornare nisl leo odio magna.</p>
</div>



<div className='flex flex-col justify-around p-[2rem] gap-[1rem]  md:w-[50%] max-md:w-[100%]'>
<input className='w-[100%] bg-transparent border border-white rounded-[6px] min-h-[2.5rem] px-4 ' placeholder='Name' />
<input className='w-[100%] bg-transparent border border-white rounded-[6px] min-h-[2.5rem]  px-4' placeholder='Email'/>
<input className='w-[100%] bg-transparent border border-white rounded-[6px] min-h-[2.5rem]  px-4' placeholder='Phone(Optional)'/>
<textarea className='w-full overflow-auto bg-transparent border border-white rounded-[6px] min-h-[10.5rem]  px-4  ' placeholder='Tell Us More About the Project You are Working on (optional)'>   </textarea>
<button className='bg-[#E92129] text-[white] max-w-[8rem]  min-h-[3rem] rounded-[5px] min-w-[8rem] self-center'>Contact Us</button>

</div> 

</div>

{/* iso cards */}

<div>


     <div className='flex lg:gap-[7rem] gap-[3rem] mx-[3rem] my-[10rem] max-md:gap-[1rem] max-md:mx-[1rem] max-md:my-[1rem]'>
        <div className='shadow-xl rounded-[10px] p-[0.5rem]' style={{boxShadow: 'rgba(0, 0, 0, 0.1) 2px 2px 2px 2px'}}> 
        <img src={imageiso } alt='' className='max-w-[100%] h-auto'/>
        </div>
        <div className='shadow-xl rounded-[10px] p-[0.5rem]' style={{boxShadow: 'rgba(0, 0, 0, 0.1) 2px 2px 2px 2px'}}>
        <img src={imageiso } alt='' className='max-w-[100%] h-auto'/>
        </div>
        <div className='shadow-xl rounded-[10px] p-[0.5rem]' style={{boxShadow: 'rgba(0, 0, 0, 0.1) 2px 2px 2px 2px'}}>
        <img src={psebimage  } alt='' className='max-w-[100%] h-auto'/>
        </div>
        <div className='shadow-xl rounded-[10px] p-[0.5rem]' style={{boxShadow: 'rgba(0, 0, 0, 0.1) 2px 2px 2px 2px'}}>
        <img src={pashaimage  } alt='' className='max-w-[100%] h-auto'/>
        </div>
        <div className='shadow-xl rounded-[10px] p-[0.5rem]' style={{boxShadow: 'rgba(0, 0, 0, 0.1) 2px 2px 2px 2px'}}>
        <img src={secpimage} alt='' className='max-w-[100%] h-auto'/>
        </div>

        
     </div>



  {/* Footer */}

  <div className=''>
  <div className='max-md:hidden relative bottom-[4rem] left-0 '>
  <img src={footnexisol} alt='' className=' w-[38%] h-[auto] absolute '/>
  </div>
    <div className='bg-black text-[white]'>
         <div className='flex justify-between pt-[5rem] pb-[3rem] px-[3rem] max-md:pt-[2rem] max:md:pb-[0rem]  max-md:px-[1rem] max-md:gap-[2rem] max-md:flex-col-reverse'>
            
            <div className='flex gap-[2rem] flex-col'>
               <div className='flex  gap-[1rem]'>
               <FaPhoneAlt  className='text-[24px]'/>
               <p>+92 300 1234567</p>
               </div>

               <div className='flex gap-[1rem]'>
               <MdForwardToInbox  className='text-[24px]'/>

               <p>info@nixxsol.com</p>
               </div>


               <div className='flex gap-[1rem]'>
               <IoLocation  className='text-[24px]'/>

               <p className='max-w-[20rem]'>Lorem ipsum dolor sit amet consectetur. Dui libero lectus pulvinar mattis a.</p>
               </div>
            </div>

             <div className='max-w-[100%] flex flex-col gap-[3rem] '>
                 <div className='flex justify-between lg:gap-[7rem] md:gap-[3rem]'>
                   <p>About</p>
                   <p>Services</p>
                   <p>Portfolio</p>
                   <p>Contact Us</p>
                 </div>

                 <h5 className='text-[24px] font-bold'>Stay in Conection</h5>
                <div className='flex justify-between bg-[#272727]   rounded-[6px] min-h-[3.5rem]  px-4'>
                 <input placeholder='Email Address' className='bg-transparent'/>
                 <button className='bg-[#E92129] text-[white]   min-h-[3rem] rounded-[5px] min-w-[6rem] self-center'>Contact Us</button>
                 </div>
             </div>
         </div>
    </div>

    
    <div className='bg-[#E92129] text-[white]'>
        
        <div className='flex justify-between p-[1.5rem] px-[3rem] max-md:p-[1rem] max-md:px-[2rem]'>
          <p className='text-[14px] max-md:text-[12px]'>© 2022 Nixxsol All Rights Reserved.</p>
          <div className='flex gap-[1rem]'>
          <FaFacebook className='w-[1.3rem] h-[1.3rem]'/>
          <RiInstagramFill className='w-[1.3rem] h-[1.3rem]'/>
          <AiFillTwitterCircle className='w-[1.3rem] h-[1.3rem]'/>


          </div>
        </div>
    </div>

  </div>


</div>



  </div>
  </>
    )
}

export default Header;