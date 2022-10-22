import React, { useState  } from 'react';
import Footer from "./Footer";
import image from "../images/Photo/bgimage4.jpg";
import image1 from "../images/Photo/bgimage2.jpg";

function ContactUs(){
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    let CustomerName=inputs.CustomerName;
    let CustomerEmail=inputs.CustomerEmail;
    let CustomerPhoneNo=inputs.CustomerPhoneNo;
    let CustomerMessage=inputs.CustomerMessage;
    let data = {CustomerName,CustomerEmail,CustomerPhoneNo,CustomerMessage};
    if(CustomerName==null){
      alert("Name can't be empty");
    }
    else if(CustomerEmail==null){
      alert("Email can't be empty");
    }
    else if(CustomerPhoneNo==0){
      alert("Please enter phoneNo then submit!!")
    }
    else if(CustomerMessage==null){
      alert("Message can't be left(Please describe about your company in short)")
    }
    else{
    fetch("https://panacea-backend.herokuapp.com/customer",{
      method:'POST',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify(data)
    }).then((result)=>{
      console.log("result",result);
    })
    alert("Thanks You.... Data submitted successfully");
    window.location.reload();
  }
  }
    return (
      <>
      <div className="text-gray-600 body-font relative" style={{
        backgroundImage: `url(${image})`,
        height: "680px", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "fixed"
      }}>
        <div style={{ padding: "10%" }}>
          <h3 style={{ color: "darkblue", fontFamily: "Fantasy" }}>CONEECT WITH PANACEA</h3>
          <br />
          <p style={{ color: "black", paddingLeft: "25%", paddingRight: "25%", fontFamily: "Fantasy" }}>You’ll never have a product or price advantage again. They can be easily duplicated, but a strong customer service culture can’t be copied</p>
          <br />
          <p style={{ fontFamily: "Fantasy", color: "darkgreen" }}>PANACEA always take care of valuable customer</p>
        </div>
      </div><br/><br/>
      <div style={{
              backgroundImage: `url(${image1})`,
              height: "780px", backgroundRepeat: "no-repeat", backgroundSize: "cover"
            }}>
        <form onSubmit={handleSubmit}>
        <section className="text-gray-900 body-font relative">
          <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex">
            <div className="lg:w-2/3 md:w-1/2 bg-none-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
              <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                <div className="lg:w-1/2 px-6">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                  <p className="mt-1">Photo booth tattooed prism, portland taiyaki hoodie neutra typewriter</p>
                </div>
                <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                  <a className="text-indigo-500 leading-relaxed">example@email.com</a>
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                  <p className="leading-relaxed">123-456-7890</p>
                </div>
              </div>
            </div>        
            <div className="lg:w-1/3 md:w-1/2 bg-none flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
              <h2 style={{
                fontFamily: 'serif',
                fontWeight: 'bold',
                color: 'black'
              }}>Contact Us</h2>
              <p style={{fontWeight: 'bold',color:'darkblue',fontFamily: 'serif',}}>Please provide your details here!</p>
              <div className="relative mb-4">
                <label for="name" className="leading-7 text-sm text-gray-900">Name</label>
                <input type="text" onChange={handleChange} id="CustomerName" name="CustomerName" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
              <div className="relative mb-4">
                <label for="email" className="leading-7 text-sm text-gray-900">Email</label>
                <input type="email" onChange={handleChange} id="CustomerEmail" name="CustomerEmail" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
              <div className="relative mb-4">
                <label for="number" className="leading-7 text-sm text-gray-900">Contact No</label>
                <input type="phone" onChange={handleChange} id="CustomerPhoneNo" name="CustomerPhoneNo" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
              <div className="relative mb-4">
                <label for="message" className="leading-7 text-sm text-gray-900">Company Name</label>
                <input type="text" id="CustomerMessage" placeholder='If there is no company. Type NA' onChange={handleChange} name="CustomerMessage" className="w-full bg-white rounded border border-gray-900 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"/>
              </div>
              <button type="submit" className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
            </div>            
          </div>
        </section>
        </form>
      </div>

      <Footer />
    </>
    );
}

export default ContactUs;

