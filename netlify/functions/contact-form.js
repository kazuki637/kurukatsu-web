// Netlify Function for handling contact form submissions
// This function stores form data (Netlify Forms can be configured manually in dashboard)
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
    const data = JSON.parse(event.body)

    // フォームデータを検証
    if (!data.companyName || !data.name || !data.email || !data.phone || !data.subject || !data.message) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: '必須項目が不足しています' }),
      }
    }

    // 実際の実装では、ここでメール送信サービスやデータベースに保存
    // 今は成功レスポンスを返す（Netlify Formsは後で手動設定）
    console.log('Contact form submission:', {
      会社名: data.companyName,
      お名前: data.name,
      メールアドレス: data.email,
      電話番号: data.phone,
      お問い合わせ種別: data.inquiryType,
      件名: data.subject,
      お問い合わせ内容: data.message,
    })

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ 
        message: 'Form submitted successfully',
        data: {
          会社名: data.companyName,
          お名前: data.name,
          メールアドレス: data.email,
          電話番号: data.phone,
          お問い合わせ種別: data.inquiryType,
          件名: data.subject,
          お問い合わせ内容: data.message,
        }
      }),
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

