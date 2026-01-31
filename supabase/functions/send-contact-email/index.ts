import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const RESEND_API_KEY = "re_MHrkGpmT_7EUPAQx6XcdmnnSUTCTWPmnd"

serve(async (req) => {
    // CORS preflight 요청 처리
    if (req.method === 'OPTIONS') {
        return new Response('ok', { headers: { 'Access-Control-Allow-Origin': '*' } })
    }

    try {
        const { record } = await req.json()

        console.log('Received record:', record)

        const res = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${RESEND_API_KEY}`,
            },
            body: JSON.stringify({
                from: "HighFlood <onboarding@resend.dev>",
                to: ["highflood.video@gmail.com"],
                subject: `[HighFlood] 새로운 상담 신청: ${record.name}님`,
                html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
            <h2 style="color: #3b82f6; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">새로운 상담 신청 내역</h2>
            <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
              <tr><td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; width: 120px;">성함</td><td style="padding: 10px; border-bottom: 1px solid #eee;">${record.name}</td></tr>
              <tr><td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">회사명</td><td style="padding: 10px; border-bottom: 1px solid #eee;">${record.company || '-'}</td></tr>
              <tr><td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">연락처</td><td style="padding: 10px; border-bottom: 1px solid #eee;">${record.phone}</td></tr>
              <tr><td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">이메일</td><td style="padding: 10px; border-bottom: 1px solid #eee;">${record.email}</td></tr>
              <tr><td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">프로젝트 유형</td><td style="padding: 10px; border-bottom: 1px solid #eee;">${record.project_type}</td></tr>
              <tr><td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">예산 범위</td><td style="padding: 10px; border-bottom: 1px solid #eee;">${record.budget}</td></tr>
              <tr><td style="padding: 10px; font-weight: bold; vertical-align: top;">설명</td><td style="padding: 10px; line-height: 1.6;">${record.description}</td></tr>
            </table>
          </div>
        `,
            }),
        })

        const data = await res.json()
        return new Response(JSON.stringify(data), {
            status: 200,
            headers: { "Content-Type": "application/json", 'Access-Control-Allow-Origin': '*' },
        })
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: { "Content-Type": "application/json", 'Access-Control-Allow-Origin': '*' },
        })
    }
})
