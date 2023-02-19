import React,{useRef} from 'react'
import { Toaster } from 'react-hot-toast';
import toast  from 'react-hot-toast';

import emailjs from 'emailjs-com';
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hnrl0zs', 'template_z1s94tw', form.current, '2_RX1orzfse-SCKBM')
      .then((result) => {
          // console.log(result.text);
          // console.log("message sent")
          toast.success("Message Sent")
      }, (error) => {
          // console.log(error.text);
          toast.success("Error Sending message!")
      });
  };
  return (
    <div id="contact" className='w-[90%] mt-20 sm:w-[95%] sm:rounded-md sm:shadow-none border sm:gap-10 flex-col  flex lg:flex-row md:flex-row 2xl:flex-row rounded-2xl shadow-lg p-5 m-auto '>
      <Toaster center reverseOrder />
      <div className='w-[50%] sm:w-[100%] m-auto'>
         <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center  dark:text-white">Contact Me</h2>
         <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Contact me by filling out the form below.</p>
         <div className='flex flex-col m-auto items-center text-3xl'>
            <span><i className="fa-solid fa-mobile-screen"></i> : <span className='text-xl'>8299061194</span></span>
            <span><i className="fa-solid fa-envelope"></i> : <a href="mailto:anuragsrivastav0027@gmail.com" className='text-xl text-blue-400'>anuragsrivastav0027@gmail.com</a></span>
        </div>
      </div>
      <div className='w-[50%] sm:w-[100%]'>
      <form ref={form} className="flex flex-col" onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" required className='border border-gray-400 rounded-md p-2 outline-none'  name="user_name" />
      <label>Email</label>
      <input type="email" required className='border border-gray-400 rounded-md p-2 outline-none' name="user_email" />
      <label>Message</label>
      <textarea rows={5} required className='border border-gray-400 rounded-md p-2 outline-none' name="message" />
      <input type="submit" className='border mt-2 w-[30%] m-auto bg-blue-800 text-white rounded-md p-2 outline-none' value="Send" />
    </form>
      </div>
        
         
    </div>
  )
}

export default Contact


{/* <section class="bg-white dark:bg-gray-900">
  <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
      <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Contact me by filling out the form below.</p>
      <div className='flex flex-col m-auto items-center text-3xl'>
            <span><i class="fa-solid fa-mobile-screen"></i> : <span className='text-xl'>8299061194</span></span>
            <span><i class="fa-solid fa-envelope"></i> : <a href="mailto:anuragsrivastav0027@gmail.com" className='text-xl text-blue-400'>anuragsrivastav0027@gmail.com</a></span>
        </div>
      <form action="#" class="space-y-8">
          <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
              <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@gmail.com" required/>
          </div>
          <div>
              <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
              <input type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required/>
          </div>
          <div class="sm:col-span-2">
              <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
              <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
          </div>
          <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white bg-blue-900 rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
      </form>
  </div>
</section> */}