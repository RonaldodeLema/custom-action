async function callChatGPT(prompt, apiKey) {
    const url = 'https://api.aimlapi.com/chat/completions';
    const payload = {
      "model": "gpt-3.5-turbo",
      "messages": [{"role": "user", "content": prompt}],
      "max_tokens": 512,
      "stream": false
    };
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify(payload),
    });
    const data: any = await response.json();
    if (response.ok) {
      return data.choices[0].message.content;
    } else {
      console.error('Error:', data);
    }
  }
export { callChatGPT };