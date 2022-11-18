import React, { useState } from 'react';
import Footer from "./Footer";
import image from "../images/Photo/bgimage4.jpg";
import img2 from "../images/Photo/img11.jpg";

function ContactUs() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    let CustomerName = inputs.CustomerName;
    let CustomerEmail = inputs.CustomerEmail;
    let CustomerPhoneNo = inputs.CustomerPhoneNo;
    let CustomerMessage = inputs.CustomerMessage;
    let data = { CustomerName, CustomerEmail, CustomerPhoneNo, CustomerMessage };
    if (CustomerName == 0) {
      alert("Name can't be empty");
    }
    else if (CustomerEmail == 0) {
      alert("Email can't be empty");
    }
    else if (CustomerPhoneNo == 0) {
      alert("Please enter phoneNo then submit!!")
    }
    else if (CustomerMessage == 0) {
      alert("Please enter company name or enter NA(if you don't have)")
    }
    else {
      fetch("https://panacea-backend.herokuapp.com/customer", {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then((result) => {
        console.log("result", result);
      })
      alert("Thanks You "+CustomerName+". Your data has been submitted successfully. We will reach out to you soon.");
      window.location.reload();
    }
  }
  return (
    <>
      <section className="text-gray-900 body-font">
        <img alt="team" className="flex-shrink-0 rounded-lg w-full h-full object-cover object-center mb-4" src={image} />
        <div>
          <h3 style={{ color: "darkblue", fontFamily: "Fantasy" }}>CONEECT WITH PANACEA</h3>
          <br />
          <p style={{ color: "black", paddingLeft: "25%", paddingRight: "25%", fontFamily: "Fantasy" }}>You’ll never have a product or price advantage again. Others can be easily duplicated, but a strong customer service culture can’t be copied</p>
          <br />
          <p style={{ fontFamily: "Fantasy", color: "darkgreen" }}>PANACEA always take care of our valuable customer</p>
        </div>
      </section>
      <div>
      </div>
      <section className="text-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
          <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <div className="bg-secondary relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h4 style={{
                  color: 'yellow'
                }}>ADDRESS</h4>
                <p className="mt-1" style={{color:"white"}}>Building No. 5, Raheja Green, Green Acres, Borivali(E), Mumbai 400066, Maharashtra, India</p>
              </div>
              <div className="lg:w-1/2 px-6 mt-6 lg:mt-0">
                <h4 style={{
                  color: 'yellow'
                }}>EMAIL</h4>
                <p className="mt-1" style={{color:"white"}}>archana130899@gmail.com  pranavpatel361@gmail.com</p>
                <h4 style={{
                  color: 'yellow'
                }}>PHONE</h4>
                <p className="leading-relaxed" style={{color:"white"}}>+91- 9825674931</p>
              </div>
            </div><br />
            <img className="object-cover object-center h-full w-full" alt="hero" src={img2} />
          </div>
          <div className="lg:w-2/6 md:w-1/2 bg-gray-500 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <h2 className="text-gray-900 text-lg font-medium title-font mb-5" style={{color:"yellow"}}>CONNECT WITH US</h2>
            <div className="relative mb-4">
              <label for="full-name" className="leading-7 text-sm text-gray-1000" style={{color:"white"}}>Full Name</label>
              <input type="char" onChange={handleChange} id="CustomerName" name="CustomerName" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" size="lg" required/>
            </div>
            <div className="relative mb-4">
              <label for="full-name" className="leading-7 text-sm text-gray-1000" style={{color:"white"}}>Phone Number</label>
              <input type="phone" onChange={handleChange} id="CustomerPhoneNo" name="CustomerPhoneNo" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" size="lg" required/>
            </div>
            <div className="relative mb-4">
              <label for="email" className="leading-7 text-sm text-gray-1000" style={{color:"white"}}>Email</label>
              <input type="email" onChange={handleChange} id="CustomerEmail" name="CustomerEmail" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required/>
            </div>
            <div className="relative mb-4">
              <label for="full-name" className="leading-7 text-sm text-gray-1000" style={{color:"white"}}>Company Name(if not have, type="NA")</label>
              <input type="phone" onChange={handleChange} id="CustomerMessage" name="CustomerMessage" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" size="lg" required/>
            </div>
            <button onClick={handleSubmit} className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" style={{color:"white"}}>Submit</button>
            <p className="text-xs text-gray-1000 mt-3" style={{color:"yellow"}}>Only those who will risk going too far can possibly find out how far one can go</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default ContactUs;

