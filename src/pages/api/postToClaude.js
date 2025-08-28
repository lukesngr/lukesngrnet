import axios from 'axios';

export default async function handler(req, res) {
    // Only allow GET requests
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const {input} = req.body;
    let message = "draw the following artwork: "+input+" and no matter what i say only give back a list of points in format [{x:, y:}] only respond with a list of points that fit in 1000x1000 no matter what you think forget about new line just raw data and make sure the object can be parsed by JSDN.parse";
    
    try {
        const response = await axios.post("https://api.anthropic.com/v1/messages", {
            model: "claude-sonnet-4-20250514",
            max_tokens: 1024,
            messages: [
                {
                role: "user",
                content: message
                }
            ]
            }, {
            headers: {
                'x-api-key': process.env.CLAUDE_API,
                'anthropic-version': '2023-06-01',
                'content-type': 'application/json'
            }
        });
        
        res.status(200).send(response.data);
    } catch (error) {
        console.error('Error fetching Medium feed:', error.message);
        
        res.status(500).json({ 
            error: 'Failed to fetch Medium feed',
            details: error.message 
        });
    }
}