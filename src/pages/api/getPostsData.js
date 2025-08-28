import axios from 'axios';

export default async function handler(req, res) {
    // Only allow GET requests
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method not allowed' });
    }
    
    try {
        // Fetch RSS feed from Medium (no CORS issues on server-side)
        const response = await axios.get('https://medium.com/feed/@lukesngr', {
            timeout: 10000, // 10 second timeout
            headers: {
                'User-Agent': 'Mozilla/5.0 (compatible; RSS Reader)'
            }
        });
        
        // Return the raw XML
        res.status(200).send(response.data);
    } catch (error) {
        console.error('Error fetching Medium feed:', error.message);
        
        res.status(500).json({ 
            error: 'Failed to fetch Medium feed',
            details: error.message 
        });
    }
}