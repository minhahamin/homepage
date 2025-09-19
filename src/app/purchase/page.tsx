'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '../../contexts/LanguageContext'

// 스크롤 애니메이션 컴포넌트
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

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.8, delay }}
  >
    {children}
  </motion.div>
)

export default function Purchase() {
  const { language, setLanguage, t } = useLanguage()

  return (
    <main className="min-h-screen bg-black text-white">
      {/* 네비게이션 */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-semibold">TechPro</Link>
            <div className="hidden md:flex space-x-8">
              <a 
                href="/#features" 
                className="hover:text-gray-300 transition-colors cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = '/';
                  setTimeout(() => {
                    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
              >
                {t('nav.features')}
              </a>
              <a 
                href="/#specs" 
                className="hover:text-gray-300 transition-colors cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = '/';
                  setTimeout(() => {
                    document.getElementById('specs')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
              >
                {t('nav.specs')}
              </a>
              <a 
                href="/#gallery" 
                className="hover:text-gray-300 transition-colors cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = '/';
                  setTimeout(() => {
                    document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
              >
                {t('nav.gallery')}
              </a>
              <a 
                href="/#pricing" 
                className="hover:text-gray-300 transition-colors cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = '/';
                  setTimeout(() => {
                    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
              >
                {t('nav.pricing')}
              </a>
            </div>
            <div className="flex items-center space-x-4">
              {/* 언어 전환 버튼 */}
              <button
                onClick={() => setLanguage(language === 'ko' ? 'en' : 'ko')}
                className="p-2 hover:bg-gray-800 rounded-full transition-colors"
                title={language === 'ko' ? 'Switch to English' : '한국어로 전환'}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
              </button>
              <Link href="/" className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full transition-colors">
                {t('nav.home')}
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* 구매 페이지 헤더 */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <FadeInUp>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              {t('purchase.hero.title')}
            </h1>
          </FadeInUp>
          <FadeInUp delay={0.2}>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              {t('purchase.hero.subtitle')}
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* 제품 선택 섹션 */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <FadeInUp>
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
              {t('purchase.select')}
            </h2>
          </FadeInUp>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* TechPro */}
            <FadeInUp delay={0.1}>
              <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
                <div className="text-center mb-6">
                  <div className="w-32 h-48 rounded-2xl mx-auto mb-4 relative overflow-hidden">
                    <Image
                      src="/techpro.png"
                      alt="TechPro 스마트폰"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">{t('purchase.techpro')}</h3>
                  <div className="text-3xl font-bold text-blue-400 mb-4">{t('purchase.techpro.price')}</div>
                </div>
                <ul className="space-y-3 text-gray-300 mb-8">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    {t('purchase.techpro.storage')}
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    {t('purchase.techpro.display')}
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    {t('purchase.techpro.camera')}
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    {t('purchase.techpro.processor')}
                  </li>
                </ul>
                <button className="w-full bg-gray-700 hover:bg-gray-600 py-3 rounded-full transition-colors">
                  {t('purchase.select_btn')}
                </button>
              </div>
            </FadeInUp>

            {/* TechPro Max - 추천 */}
            <FadeInUp delay={0.2}>
              <div className="bg-gray-800 rounded-2xl p-8 border-2 border-blue-600 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm">
                  {t('purchase.recommended')}
                </div>
                <div className="text-center mb-6">
                  <div className="w-32 h-48 rounded-2xl mx-auto mb-4 relative overflow-hidden">
                    <Image
                      src="/techpro-phones.jpg"
                      alt="TechPro Max 스마트폰"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">{t('purchase.techpromax')}</h3>
                  <div className="text-3xl font-bold text-blue-400 mb-4">{t('purchase.techpromax.price')}</div>
                </div>
                <ul className="space-y-3 text-gray-300 mb-8">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    {t('purchase.techpromax.storage')}
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    {t('purchase.techpromax.display')}
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    {t('purchase.techpromax.camera')}
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    {t('purchase.techpromax.processor')}
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    {t('purchase.techpromax.ai')}
                  </li>
                </ul>
                <button className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-full transition-colors">
                  {t('purchase.select_btn')}
                </button>
              </div>
            </FadeInUp>

            {/* TechPro Ultra */}
            <FadeInUp delay={0.3}>
              <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
                <div className="text-center mb-6">
                  <div className="w-32 h-48 rounded-2xl mx-auto mb-4 relative overflow-hidden">
                    <Image
                      src="/techproultra.png"
                      alt="TechPro Ultra 스마트폰"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">{t('purchase.techproultra')}</h3>
                  <div className="text-3xl font-bold text-blue-400 mb-4">{t('purchase.techproultra.price')}</div>
                </div>
                <ul className="space-y-3 text-gray-300 mb-8">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    {t('purchase.techproultra.storage')}
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    {t('purchase.techproultra.display')}
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    {t('purchase.techproultra.camera')}
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    {t('purchase.techproultra.processor')}
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    {t('purchase.techproultra.ai')}
                  </li>
                </ul>
                <button className="w-full bg-gray-700 hover:bg-gray-600 py-3 rounded-full transition-colors">
                  {t('purchase.select_btn')}
                </button>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* 구매 정보 입력 섹션 */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <FadeInUp>
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
              {t('purchase.info.title')}
            </h2>
          </FadeInUp>

          <div className="bg-gray-800 rounded-2xl p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FadeInUp delay={0.1}>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      {t('purchase.name')}
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder={t('purchase.name.placeholder')}
                    />
                  </div>
                </FadeInUp>
                <FadeInUp delay={0.2}>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      {t('purchase.phone')}
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder={t('purchase.phone.placeholder')}
                    />
                  </div>
                </FadeInUp>
              </div>

              <FadeInUp delay={0.3}>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    {t('purchase.email')}
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder={t('purchase.email.placeholder')}
                  />
                </div>
              </FadeInUp>

              <FadeInUp delay={0.4}>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    {t('purchase.address')}
                  </label>
                  <textarea
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent h-24"
                    placeholder={t('purchase.address.placeholder')}
                  ></textarea>
                </div>
              </FadeInUp>

              <FadeInUp delay={0.5}>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    {t('purchase.payment')}
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <label className="flex items-center p-4 bg-gray-700 rounded-lg cursor-pointer hover:bg-gray-600 transition-colors">
                      <input type="radio" name="payment" value="card" className="mr-3" />
                      <span>{t('purchase.payment.credit')}</span>
                    </label>
                    <label className="flex items-center p-4 bg-gray-700 rounded-lg cursor-pointer hover:bg-gray-600 transition-colors">
                      <input type="radio" name="payment" value="bank" className="mr-3" />
                      <span>{t('purchase.payment.transfer')}</span>
                    </label>
                    <label className="flex items-center p-4 bg-gray-700 rounded-lg cursor-pointer hover:bg-gray-600 transition-colors">
                      <input type="radio" name="payment" value="kakao" className="mr-3" />
                      <span>{t('purchase.payment.kakao')}</span>
                    </label>
                  </div>
                </div>
              </FadeInUp>

              <FadeInUp delay={0.6}>
                <div className="pt-6 border-t border-gray-700">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-xl font-semibold">{t('purchase.total')}</span>
                    <span className="text-3xl font-bold text-blue-400">{t('purchase.techpromax.price')}</span>
                  </div>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 py-4 rounded-full text-lg font-semibold transition-colors">
                    {t('purchase.order')}
                  </button>
                </div>
              </FadeInUp>
            </form>
          </div>
        </div>
      </section>

      {/* 푸터 */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center text-gray-400">
              <p>&copy; 2024 TechPro. All rights reserved.</p>
              <p className="mt-2 text-sm">{t('footer.purchase')}</p>
            </div>
          </FadeIn>
        </div>
      </footer>
    </main>
  )
}
