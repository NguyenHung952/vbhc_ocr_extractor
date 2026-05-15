export async function extractVBHC(ocrText) {

  const response = await fetch(
    'https://api.openai.com/v1/chat/completions',
    {
      method: 'POST',

      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer YOUR_OPENAI_API_KEY`
      },

      body: JSON.stringify({
        model: 'gpt-4.1-mini',

        messages: [
          {
            role: 'system',
            content: 'AI OCR VBHC'
          },

          {
            role: 'user',
            content: ocrText
          }
        ]
      })
    }
  );

  const data = await response.json();

  return data;
}
