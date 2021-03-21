import React, { useState } from "react";

const ClaimForm = props => {

  const [submitted, setSubmitted] = useState(false);

  const submit = async (e) => {
    console.log('hello');
    e.preventDefault();
    const response = await fetch('https://sanity-kitchen-sink-web-czm4m4j6.netlify.app/.netlify/functions/addClaim', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstName: e.target.elements.firstName.value,
        lastName: e.target.elements.lastName.value,
        email: e.target.elements.email.value,
        phone: e.target.elements.phone.value,
      })
    })
    console.log(response.json());
    setSubmitted(true);
  }

  return <section className="bg-white py-8 text-black">

    {!submitted ? <form onSubmit={submit} className='flex justify-center'>
      <div className='flex flex-col'>
      <label className='flex flex-col mb-2'>
        Voornaam
      <input name='firstName' type='text' className='border'/>
      </label>
      <label className='flex flex-col mb-2'>
        Achternaam
      <input name='lastName' type='text' className='border'/>
      </label>
      <label className='flex flex-col mb-2'>
        Telefoonnummer
      <input name='phone' type='text' className='border'/>
      </label>
      <label className='flex flex-col mb-2'>
        Email
      <input name='email' type='text' className='border'/>
      </label>
      <label className='flex flex-col mb-2'>
        Aangifte
      <input name='file' type='file'/>
      </label>
      <label className='flex flex-col mb-2'>
        Wat is er precies gebeurd?
      <textarea name='situation' type='text' className='border'/>
      </label>
      <button className='mx-auto lg:mx-0 hover:underline font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow bg-orange-500 text-white' submit>Verstuur</button>
      </div>
    </form> : <div>Claim ontvangen</div>}
  </section>
};

export default ClaimForm;
