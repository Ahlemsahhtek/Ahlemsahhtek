exports.handler = async function(event, context) {
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: JSON.stringify({ error: 'Method Not Allowed' })
        };
    }

    try {
        const requestBody = JSON.parse(event.body);
        const message = requestBody.message;

        // هنا يمكنك إضافة الخطوات لمعالجة الرسالة، مثل إرسالها إلى بريد إلكتروني أو حفظها في قاعدة بيانات
        
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Message sent successfully' })
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Internal Server Error' })
        };
    }
};
