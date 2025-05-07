import Head from 'next/head'
import { useState } from 'react'

export default function Home() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', address: '' });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    await fetch('/api/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    window.location.href = `https://wa.me/17862360774?text=Hello! I just submitted my info to AddPropertyValue.com: ${form.name}, ${form.phone}, ${form.email}, ${form.address}`;
  };

  return (
    <>
      <Head>
        <title>Add Property Value</title>
        <meta name="description" content="Boost your home's value with our free report and inspection tips." />
      </Head>
      <main style={{ padding: '2rem', fontFamily: 'Arial' }}>
        <h1>Add Value to Your Home — Fast.</h1>
        <p>Get a <strong>Free Property Value Boost Plan</strong> + Inspection Tips to Protect Your Investment.</p>
        <form onSubmit={handleSubmit}>
          <input name="name" placeholder="Full Name" onChange={handleChange} required /><br />
          <input name="phone" placeholder="Phone Number" onChange={handleChange} required /><br />
          <input name="email" placeholder="Email" type="email" onChange={handleChange} required /><br />
          <input name="address" placeholder="Home Address" onChange={handleChange} required /><br />
          <button type="submit">Get My Free Report</button>
        </form>
        <p>Licensed & Insured | Serving Homeowners in Your Area</p>
      </main>
    </>
  );
}