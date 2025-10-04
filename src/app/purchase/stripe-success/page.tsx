'use client'

import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useLanguage } from '../../../contexts/LanguageContext'

const FadeInUp = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
)

export default function StripePaymentSuccess() {
  const { t } = useLanguage()
  const searchParams = useSearchParams()
  const [paymentData, setPaymentData] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const sessionId = searchParams.get('session_id')
    
    if (sessionId) {
      // 실제로는 백엔드에서 session 정보를 가져와야 하지만,
      // 테스트용으로 간단하게 표시
      setPaymentData({
        orderNumber: 'ST' + Date.now().toString().slice(-8),
        product: 'TechPro Max',
        price: '₩1,990,000',
        payment: 'Stripe (카드 결제)',
        status: '결제 성공',
        sessionId: sessionId
      })
    }
    
    setLoading(false)
  }, [searchParams])

  if (loading) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-xl text-gray-300">결제 확인 중...</p>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <FadeInUp>
          <div className="text-center mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="w-24 h-24 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </motion.div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              {t('success.title')}
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              {t('success.subtitle')}
            </p>
          </div>
        </FadeInUp>

        {paymentData && (
          <FadeInUp delay={0.2}>
            <div className="bg-gray-800 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-6">{t('success.order.info')}</h2>
              <div className="space-y-4">
                <div className="flex justify-between py-3 border-b border-gray-700">
                  <span className="text-gray-300">{t('success.order.number')}</span>
                  <span className="font-semibold">{paymentData.orderNumber}</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-700">
                  <span className="text-gray-300">{t('success.order.product')}</span>
                  <span className="font-semibold">{paymentData.product}</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-700">
                  <span className="text-gray-300">{t('success.order.price')}</span>
                  <span className="font-semibold text-blue-400">{paymentData.price}</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-700">
                  <span className="text-gray-300">{t('success.order.payment')}</span>
                  <span className="font-semibold">{paymentData.payment}</span>
                </div>
                <div className="flex justify-between py-3">
                  <span className="text-gray-300">Stripe Session ID</span>
                  <span className="font-semibold text-sm truncate max-w-xs">{paymentData.sessionId}</span>
                </div>
              </div>
            </div>
          </FadeInUp>
        )}

        <FadeInUp delay={0.4}>
          <div className="bg-gray-800 rounded-2xl p-6 mb-8">
            <h3 className="text-lg font-semibold mb-3">{t('success.shipping')}</h3>
            <p className="text-gray-300 text-sm mb-2">• {t('success.shipping.1')}</p>
            <p className="text-gray-300 text-sm mb-2">• {t('success.shipping.2')}</p>
            <p className="text-gray-300 text-sm">• {t('success.shipping.3')}</p>
          </div>
        </FadeInUp>

        <FadeInUp delay={0.6}>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/" 
              className="flex-1 bg-gray-700 hover:bg-gray-600 py-3 rounded-full text-center transition-colors"
            >
              {t('success.home')}
            </Link>
            <Link 
              href="/support" 
              className="flex-1 bg-blue-600 hover:bg-blue-700 py-3 rounded-full text-center transition-colors"
            >
              {t('success.support')}
            </Link>
          </div>
        </FadeInUp>
      </div>
    </main>
  )
}

