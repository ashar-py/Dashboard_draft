export default async function handler(req, res) {
    try {
      const response = await fetch('https://rhd4lozcs6.execute-api.us-east-1.amazonaws.com/api/onboardTenant', {
        method: 'POST',
        body: req.body,
      });
  
      if (response.ok) {
        res.status(200).json(await response.json());
      } else {
        res.status(500).json({ error: 'Failed to fetch data' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  