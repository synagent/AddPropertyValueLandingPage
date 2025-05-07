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
    window.location.href = https://wa.me/17862360774?text=New lead on AddPropertyValue.com: ${form.name}, ${form.phone}, ${form.email}, ${form.address};
  };

  return (
    <>
      <Head>
        <title>Add Property Value Test !!!!!!!!</title>
        <meta name="description" content="Boost your home's value with our free report and inspection tips." />
      </Head>
      <main style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', background: '#f7f7f7' }}>
        <div style={{ maxWidth: '500px', width: '100%', padding: '2rem', background: '#fff', boxShadow: '0 0 10px rgba(0,0,0,0.1)', borderRadius: '10px' }}>
          <h1 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>Add Value to Your Home — Fast.</h1>
          <p style={{ marginBottom: '1.5rem', fontSize: '1rem' }}>
            Get a <strong>Free Property Value Boost Plan</strong> + Inspection Tips to Protect Your Investment.
          </p>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <input name="name" placeholder="Full Name" onChange={handleChange} required style={inputStyle} />
            <input name="phone" placeholder="Phone Number" onChange={handleChange} required style={inputStyle} />
            <input name="email" placeholder="Email" type="email" onChange={handleChange} required style={inputStyle} />
            <input name="address" placeholder="Home Address" onChange={handleChange} required style={inputStyle} />
            <button type="submit" style={buttonStyle}>Get My Free Report</button>
          </form>
          <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#555' }}>
            Licensed & Insured | Serving Homeowners in Your Area !!!!!!!!!!!!!!
          </p>
          <p> Update test: It works now !!!!! </p>

        </div>
      </main>
    </>
  );
}

const inputStyle = {
  padding: '10px',
  borderRadius: '5px',
  border: '1px solid #ccc',
  fontSize: '1rem'
};

const buttonStyle = {
  padding: '12px',
  borderRadius: '5px',
  border: 'none',
  backgroundColor: '#0066cc',
  color: '#fff',
  fontSize: '1rem',
  cursor: 'pointer'
};