// Netlify Functionsでフォーム送信を処理し、Netlify Forms APIに送信

exports.handler = async (event, context) => {
  // CORS対応
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json',
  }

  // OPTIONSリクエスト（プリフライト）の処理
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: '',
    }
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' }),
    }
  }

  try {
    // フォームデータをパース
    const formData = new URLSearchParams(event.body || '')
    
    // form-nameが含まれていることを確認
    if (!formData.has('form-name')) {
      formData.append('form-name', 'contact')
    }

    // Netlify Forms APIに直接送信する
    // サイトの完全なURLを構築
    const siteUrl = process.env.URL || 
                    (event.headers.host ? `https://${event.headers.host}` : 'https://kurukatsu-web.netlify.app')
    
    console.log('Submitting form to Netlify Forms:', siteUrl)
    console.log('Form data:', formData.toString())

    // サイトのルートにPOSTすることで、Netlify Formsが処理する
    const response = await fetch(`${siteUrl}/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData.toString(),
    })

    console.log('Netlify Forms response status:', response.status)

    if (response.ok || response.status === 200 || response.status === 302) {
      // 成功した場合（302はリダイレクト、200は成功を意味する）
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ success: true }),
      }
    } else {
      const errorText = await response.text()
      console.error('Netlify Forms error:', response.status, errorText)
      return {
        statusCode: response.status,
        headers,
        body: JSON.stringify({ error: '送信に失敗しました' }),
      }
    }
  } catch (error) {
    console.error('Form submission error:', error)
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: error.message || 'Internal server error' }),
    }
  }
}
