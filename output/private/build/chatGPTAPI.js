"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.callChatGPT = callChatGPT;
async function callChatGPT(prompt, apiKey) {
    const url = 'https://api.aimlapi.com/chat/completions';
    const payload = {
        "model": "gpt-3.5-turbo",
        "messages": [{ "role": "user", "content": prompt }],
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
    const data = await response.json();
    if (response.ok) {
        return data.choices[0].message.content;
    }
    else {
        console.error('Error:', data);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdEdQVEFQSS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jaGF0R1BUQVBJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBdUJTLGtDQUFXO0FBdkJwQixLQUFLLFVBQVUsV0FBVyxDQUFDLE1BQU0sRUFBRSxNQUFNO0lBQ3JDLE1BQU0sR0FBRyxHQUFHLDBDQUEwQyxDQUFDO0lBQ3ZELE1BQU0sT0FBTyxHQUFHO1FBQ2QsT0FBTyxFQUFFLGVBQWU7UUFDeEIsVUFBVSxFQUFFLENBQUMsRUFBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUMsQ0FBQztRQUNqRCxZQUFZLEVBQUUsR0FBRztRQUNqQixRQUFRLEVBQUUsS0FBSztLQUNoQixDQUFDO0lBQ0YsTUFBTSxRQUFRLEdBQUcsTUFBTSxLQUFLLENBQUMsR0FBRyxFQUFFO1FBQ2hDLE1BQU0sRUFBRSxNQUFNO1FBQ2QsT0FBTyxFQUFFO1lBQ1AsY0FBYyxFQUFFLGtCQUFrQjtZQUNsQyxlQUFlLEVBQUUsVUFBVSxNQUFNLEVBQUU7U0FDcEM7UUFDRCxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUM7S0FDOUIsQ0FBQyxDQUFDO0lBQ0gsTUFBTSxJQUFJLEdBQVEsTUFBTSxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDeEMsSUFBSSxRQUFRLENBQUMsRUFBRSxFQUFFLENBQUM7UUFDaEIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7SUFDekMsQ0FBQztTQUFNLENBQUM7UUFDTixPQUFPLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNoQyxDQUFDO0FBQ0gsQ0FBQyJ9