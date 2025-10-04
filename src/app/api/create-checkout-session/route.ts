import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2025-09-30.clover',
})

export async function POST(request: NextRequest) {
  try {
    const { product, amount, productName } = await request.json()

    console.log('📝 결제 요청 받음:', { product, amount, productName })

    // 환경 변수 확인
    if (!process.env.STRIPE_SECRET_KEY) {
      console.error('❌ STRIPE_SECRET_KEY가 설정되지 않았습니다')
      return NextResponse.json(
        { error: 'Stripe API 키가 설정되지 않았습니다. .env.local 파일을 확인하세요.' },
        { status: 500 }
      )
    }

    // Stripe Checkout Session 생성
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'krw',
            product_data: {
              name: productName,
              description: `${product} 스마트폰`,
            },
            unit_amount: amount, // 원화는 최소 단위 그대로 사용
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${request.nextUrl.origin}/purchase/stripe-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${request.nextUrl.origin}/purchase/fail`,
      metadata: {
        product,
        productName,
      },
    })

    console.log('✅ Stripe session 생성 성공:', session.id)
    return NextResponse.json({ sessionId: session.id, url: session.url })
  } catch (error: any) {
    console.error('❌ Stripe checkout session 생성 오류:', error)
    return NextResponse.json(
      { error: error.message || '결제 세션 생성 중 오류가 발생했습니다.' },
      { status: 500 }
    )
  }
}

