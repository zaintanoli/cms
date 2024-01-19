export default function handler(req, res) {
    if (req.method === 'GET') {
      // Handle GET request to fetch language information
      // You can retrieve language information from the database or any other data source
  
      // For demonstration purposes, I'm returning a static object
      const languages = [
        { id: 1, code: 'en', name: 'English' },
        { id: 2, code: 'es', name: 'Español' },
        // Add more languages here if needed
      ];
  
      res.status(200).json(languages);
    } else {
      res.status(405).end(); // Method Not Allowed
    }
  }
  