'use client'

import React from 'react'
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

export default function PaymentFail() {
  const { t, language } = useLanguage()
  const searchParams = useSearchParams()
  const errorMessage = searchParams.get('message') || (language === 'ko' ? '알 수 없는 오류가 발생했습니다.' : 'An unknown error occurred.')

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <FadeInUp>
          <div className="text-center mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="w-24 h-24 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              {language === 'ko' ? '결제 실패' : 'Payment Failed'}
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              {language === 'ko' ? '결제 처리 중 문제가 발생했습니다.' : 'A problem occurred during payment processing.'}
            </p>
          </div>
        </FadeInUp>

        <FadeInUp delay={0.2}>
          <div className="bg-red-900/20 border border-red-500 rounded-2xl p-8 mb-8">
            <h3 className="text-lg font-semibold mb-3 text-red-400">
              {language === 'ko' ? '오류 메시지' : 'Error Message'}
            </h3>
            <p className="text-gray-300">{errorMessage}</p>
          </div>
        </FadeInUp>

        <FadeInUp delay={0.4}>
          <div className="bg-gray-800 rounded-2xl p-6 mb-8">
            <h3 className="text-lg font-semibold mb-3">
              {language === 'ko' ? '다음 사항을 확인해주세요' : 'Please check the following'}
            </h3>
            <ul className="text-gray-300 text-sm space-y-2">
              <li>• {language === 'ko' ? '카드 한도를 확인해주세요.' : 'Check your card limit.'}</li>
              <li>• {language === 'ko' ? '카드 정보가 정확한지 확인해주세요.' : 'Make sure your card information is correct.'}</li>
              <li>• {language === 'ko' ? '인터넷 연결 상태를 확인해주세요.' : 'Check your internet connection.'}</li>
              <li>• {language === 'ko' ? '문제가 계속되면 고객센터로 문의해주세요.' : 'If the problem persists, please contact customer service.'}</li>
            </ul>
          </div>
        </FadeInUp>

        <FadeInUp delay={0.6}>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/purchase" 
              className="flex-1 bg-blue-600 hover:bg-blue-700 py-3 rounded-full text-center transition-colors"
            >
              {language === 'ko' ? '다시 시도하기' : 'Try Again'}
            </Link>
            <Link 
              href="/" 
              className="flex-1 bg-gray-700 hover:bg-gray-600 py-3 rounded-full text-center transition-colors"
            >
              {t('success.home')}
            </Link>
            <Link 
              href="/support" 
              className="flex-1 bg-gray-700 hover:bg-gray-600 py-3 rounded-full text-center transition-colors"
            >
              {t('success.support')}
            </Link>
          </div>
        </FadeInUp>
      </div>
    </main>
  )
}

