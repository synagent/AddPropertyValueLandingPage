export default async function handler(req, res) {
  const { name, phone, email, address } = req.body;

  const response = await fetch('https://formspree.io/f/mwpoogkw', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, phone, email, address }),
  });

  res.status(200).json({ status: 'sent to Formspree' });

  await fetch('https://hooks.zapier.com/hooks/catch/22812917/2nm61qh/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, phone, email, address }),
  });
}