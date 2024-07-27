require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const axios = require('axios')
const apiKey = 'sk-Ds17kkZqR4mpICZyk0O0kEOfvKOAJXYn';

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.static(path.join(__dirname, 'build')));
app.use(express.json());
app.use(cors({ credentials: true }));

app.post('/api/ai/ask', async (req, res) => {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
    };
    const payload = {
        model: 'gpt-4o',
        messages: [
            {
                role: 'user',
                content: [
                    {
                        type: 'text',
                        text: req.body.message
                    }
                ]
            }
        ],
        max_tokens: 1000
    };
    try {
        const { data } = await axios.post('https://api.proxyapi.ru/openai/v1/chat/completions', payload, { headers })
        return res.json(data.choices[0].message)
    } catch (error) {
        console.log(error)
    }

});

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, async () => {
    console.log(`server started on ${PORT}`)
})