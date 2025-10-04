'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '../../contexts/LanguageContext'
import { loadStripe } from '@stripe/stripe-js'

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

// Stripe Publishable Key (환경 변수에서 로드)
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '')

export default function Purchase() {
  const { language, setLanguage, t } = useLanguage()
  const [selectedProduct, setSelectedProduct] = React.useState<string>('techpromax')
  const [paymentMode, setPaymentMode] = React.useState<'test' | 'real'>('test') // 테스트 결제 or 실제 결제
  const [isProcessing, setIsProcessing] = React.useState(false) // 결제 처리 중 상태
  const [formData, setFormData] = React.useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    payment: ''
  })

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const product = params.get('product')
    if (product && ['techpro', 'techpromax', 'techproultra'].includes(product)) {
      setSelectedProduct(product)
    }
  }, [])

  // 제품별 가격 반환 (숫자)
  const getProductAmount = () => {
    switch (selectedProduct) {
      case 'techpro': return 1200000
      case 'techpromax': return 1990000
      case 'techproultra': return 2500000
      default: return 1990000
    }
  }

  const getProductName = () => {
    switch (selectedProduct) {
      case 'techpro': return 'TechPro'
      case 'techpromax': return 'TechPro Max'
      case 'techproultra': return 'TechPro Ultra'
      default: return 'TechPro Max'
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // 폼 유효성 검사
    if (!formData.name || !formData.phone || !formData.email || !formData.address) {
      alert(language === 'ko' ? '모든 필드를 입력해주세요.' : 'Please fill in all fields.')
      return
    }

    // 실제 결제 모드 (Stripe Checkout)
    if (paymentMode === 'real') {
      setIsProcessing(true)
      
      try {
        // Stripe Checkout Session 생성
        const response = await fetch('/api/create-checkout-session', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            product: selectedProduct,
            amount: getProductAmount(),
            productName: getProductName(),
          }),
        })

        const data = await response.json()

        if (data.error) {
          alert(data.error)
          setIsProcessing(false)
          return
        }

        // Stripe Checkout 페이지로 리다이렉트
        if (data.url) {
          window.location.href = data.url
        } else {
          alert(language === 'ko'
            ? '결제 페이지 URL을 가져올 수 없습니다.'
            : 'Could not retrieve checkout URL.')
          setIsProcessing(false)
        }
      } catch (error) {
        console.error('결제 요청 실패:', error)
        alert(language === 'ko'
          ? '결제 처리 중 오류가 발생했습니다. 다시 시도해주세요.'
          : 'An error occurred during payment. Please try again.')
      } finally {
        setIsProcessing(false)
      }
      return
    }

    // 테스트 결제 모드
    if (!formData.payment) {
      alert(language === 'ko' ? '결제 방법을 선택해주세요.' : 'Please select a payment method.')
      return
    }

    // 주문 정보 생성
    const orderNumber = 'TP' + Date.now().toString().slice(-8)
    const productNames = {
      techpro: 'TechPro',
      techpromax: 'TechPro Max',
      techproultra: 'TechPro Ultra'
    }
    const prices = {
      techpro: t('purchase.techpro.price'),
      techpromax: t('purchase.techpromax.price'),
      techproultra: t('purchase.techproultra.price')
    }
    const paymentMethods = {
      card: t('purchase.payment.credit'),
      bank: t('purchase.payment.transfer'),
      kakao: t('purchase.payment.kakao')
    }

    const orderInfo = {
      orderNumber,
      product: productNames[selectedProduct as keyof typeof productNames],
      price: prices[selectedProduct as keyof typeof prices],
      payment: paymentMethods[formData.payment as keyof typeof paymentMethods],
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      address: formData.address
    }

    // 로컬 스토리지에 저장
    localStorage.setItem('lastOrder', JSON.stringify(orderInfo))

    // 성공 페이지로 이동
    window.location.href = '/purchase/success'
  }

  return (
    <main className="min-h-screen bg-black text-white">
      {/* 네비게이션 */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-semibold">TechPro</Link>
            <div className="hidden md:flex space-x-8">
              <Link 
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
              </Link>
              <Link 
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
              </Link>
              <Link 
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
              </Link>
              <Link 
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
              </Link>
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
              <div className={`bg-gray-800 rounded-2xl p-8 border-2 transition-all ${selectedProduct === 'techpro' ? 'border-blue-600' : 'border-gray-700'}`}>
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
                <button 
                  onClick={() => setSelectedProduct('techpro')}
                  className={`w-full py-3 rounded-full transition-colors ${selectedProduct === 'techpro' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-700 hover:bg-gray-600'}`}
                >
                  {selectedProduct === 'techpro' ? '✓ ' : ''}{t('purchase.select_btn')}
                </button>
              </div>
            </FadeInUp>

            {/* TechPro Max - 추천 */}
            <FadeInUp delay={0.2}>
              <div className={`bg-gray-800 rounded-2xl p-8 border-2 transition-all relative ${selectedProduct === 'techpromax' ? 'border-blue-600' : 'border-gray-700'}`}>
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
                <button 
                  onClick={() => setSelectedProduct('techpromax')}
                  className={`w-full py-3 rounded-full transition-colors ${selectedProduct === 'techpromax' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-700 hover:bg-gray-600'}`}
                >
                  {selectedProduct === 'techpromax' ? '✓ ' : ''}{t('purchase.select_btn')}
                </button>
              </div>
            </FadeInUp>

            {/* TechPro Ultra */}
            <FadeInUp delay={0.3}>
              <div className={`bg-gray-800 rounded-2xl p-8 border-2 transition-all ${selectedProduct === 'techproultra' ? 'border-blue-600' : 'border-gray-700'}`}>
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
                <button 
                  onClick={() => setSelectedProduct('techproultra')}
                  className={`w-full py-3 rounded-full transition-colors ${selectedProduct === 'techproultra' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-700 hover:bg-gray-600'}`}
                >
                  {selectedProduct === 'techproultra' ? '✓ ' : ''}{t('purchase.select_btn')}
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
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FadeInUp delay={0.1}>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      {t('purchase.name')}
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                      placeholder={t('purchase.name.placeholder')}
                      required
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
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                      placeholder={t('purchase.phone.placeholder')}
                      required
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
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                    placeholder={t('purchase.email.placeholder')}
                    required
                  />
                </div>
              </FadeInUp>

              <FadeInUp delay={0.4}>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    {t('purchase.address')}
                  </label>
                  <textarea
                    value={formData.address}
                    onChange={(e) => setFormData({...formData, address: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent h-24 text-white"
                    placeholder={t('purchase.address.placeholder')}
                    required
                  ></textarea>
                </div>
              </FadeInUp>

              {/* 결제 모드 선택 */}
              <FadeInUp delay={0.45}>
                <div className="border-t border-gray-700 pt-6">
                  <label className="block text-sm font-medium text-gray-300 mb-4">
                    {language === 'ko' ? '결제 방식 선택' : 'Payment Method Selection'}
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <button
                      type="button"
                      onClick={() => setPaymentMode('test')}
                      className={`p-6 rounded-xl border-2 transition-all ${paymentMode === 'test' ? 'border-blue-600 bg-blue-900/20' : 'border-gray-700 bg-gray-700/50 hover:bg-gray-600/50'}`}
                    >
                      <div className="flex items-center justify-center mb-2">
                        <svg className="w-8 h-8 text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <h3 className="text-xl font-semibold">{language === 'ko' ? '테스트 결제' : 'Test Payment'}</h3>
                      </div>
                      <p className="text-sm text-gray-300">
                        {language === 'ko' ? '실제 결제 없이 주문 흐름을 테스트합니다' : 'Test order flow without actual payment'}
                      </p>
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentMode('real')}
                      className={`p-6 rounded-xl border-2 transition-all ${paymentMode === 'real' ? 'border-blue-600 bg-blue-900/20' : 'border-gray-700 bg-gray-700/50 hover:bg-gray-600/50'}`}
                    >
                      <div className="flex items-center justify-center mb-2">
                        <svg className="w-8 h-8 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                        </svg>
                        <h3 className="text-xl font-semibold">{language === 'ko' ? 'Stripe 결제' : 'Stripe Payment'}</h3>
                      </div>
                      <p className="text-sm text-gray-300">
                        {language === 'ko' ? 'Stripe로 실제 테스트 결제를 진행합니다' : 'Process real test payment via Stripe'}
                      </p>
                      <p className="text-xs text-yellow-400 mt-2">
                        {language === 'ko' ? '* 사업자 등록 불필요, 테스트 카드 사용 가능' : '* No business registration required, test cards available'}
                      </p>
                    </button>
                  </div>
                </div>
              </FadeInUp>

              {/* 테스트 결제일 때만 결제 방법 선택 표시 */}
              {paymentMode === 'test' && (
                <FadeInUp delay={0.5}>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      {t('purchase.payment')}
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <label className="flex items-center p-4 bg-gray-700 rounded-lg cursor-pointer hover:bg-gray-600 transition-colors">
                      <input 
                        type="radio" 
                        name="payment" 
                        value="card" 
                        checked={formData.payment === 'card'}
                        onChange={(e) => setFormData({...formData, payment: e.target.value})}
                        className="mr-3" 
                        required
                      />
                      <span>{t('purchase.payment.credit')}</span>
                    </label>
                    <label className="flex items-center p-4 bg-gray-700 rounded-lg cursor-pointer hover:bg-gray-600 transition-colors">
                      <input 
                        type="radio" 
                        name="payment" 
                        value="bank" 
                        checked={formData.payment === 'bank'}
                        onChange={(e) => setFormData({...formData, payment: e.target.value})}
                        className="mr-3" 
                        required
                      />
                      <span>{t('purchase.payment.transfer')}</span>
                    </label>
                    <label className="flex items-center p-4 bg-gray-700 rounded-lg cursor-pointer hover:bg-gray-600 transition-colors">
                      <input 
                        type="radio" 
                        name="payment" 
                        value="kakao" 
                        checked={formData.payment === 'kakao'}
                        onChange={(e) => setFormData({...formData, payment: e.target.value})}
                        className="mr-3" 
                        required
                      />
                      <span>{t('purchase.payment.kakao')}</span>
                    </label>
                  </div>
                </div>
                </FadeInUp>
              )}

              {/* 실제 결제일 때 Stripe 안내 표시 */}
              {paymentMode === 'real' && (
                <FadeInUp delay={0.5}>
                  <div className="border-t border-gray-700 pt-6">
                    <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-xl p-6 border border-blue-500/30">
                      <div className="flex items-start">
                        <svg className="w-8 h-8 text-blue-400 mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                        </svg>
                        <div className="flex-1">
                          <h4 className="text-xl font-semibold mb-3 flex items-center">
                            <span>{language === 'ko' ? 'Stripe 안전 결제' : 'Secure Payment with Stripe'}</span>
                            <span className="ml-2 px-2 py-1 bg-blue-500 text-xs rounded">TEST</span>
                          </h4>
                          <p className="text-sm text-gray-300 mb-4">
                            {language === 'ko' 
                              ? '주문하기 버튼을 클릭하면 Stripe 결제 페이지로 이동합니다. 전 세계적으로 신뢰받는 결제 시스템입니다.' 
                              : 'Click the order button to proceed to Stripe checkout. A globally trusted payment system.'}
                          </p>
                          <div className="bg-black/30 rounded-lg p-4">
                            <p className="text-xs font-semibold text-blue-300 mb-2">
                              {language === 'ko' ? '💳 테스트 카드 정보' : '💳 Test Card Info'}
                            </p>
                            <ul className="text-xs text-gray-400 space-y-1">
                              <li>• {language === 'ko' ? '카드번호' : 'Card Number'}: 4242 4242 4242 4242</li>
                              <li>• {language === 'ko' ? '유효기간' : 'Expiry'}: 12/25 ({language === 'ko' ? '미래 날짜 아무거나' : 'any future date'})</li>
                              <li>• CVC: 123</li>
                              <li>• {language === 'ko' ? '우편번호' : 'ZIP'}: 12345</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeInUp>
              )}

              <FadeInUp delay={0.6}>
                <div className="pt-6 border-t border-gray-700">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-xl font-semibold">{t('purchase.total')}</span>
                    <span className="text-3xl font-bold text-blue-400">
                      {selectedProduct === 'techpro' && t('purchase.techpro.price')}
                      {selectedProduct === 'techpromax' && t('purchase.techpromax.price')}
                      {selectedProduct === 'techproultra' && t('purchase.techproultra.price')}
                    </span>
                  </div>
                  <button 
                    type="submit" 
                    disabled={isProcessing}
                    className={`w-full py-4 rounded-full text-lg font-semibold transition-colors flex items-center justify-center ${
                      isProcessing
                        ? 'bg-gray-600 cursor-not-allowed'
                        : 'bg-blue-600 hover:bg-blue-700'
                    }`}
                  >
                    {isProcessing ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        {language === 'ko' ? '처리 중...' : 'Processing...'}
                      </>
                    ) : paymentMode === 'real' ? (
                      language === 'ko' ? '🔒 Stripe로 결제하기' : '🔒 Pay with Stripe'
                    ) : (
                      t('purchase.order')
                    )}
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
