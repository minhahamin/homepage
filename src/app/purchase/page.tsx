'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

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
  return (
    <main className="min-h-screen bg-black text-white">
      {/* 네비게이션 */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-semibold">TechPro</Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/#features" className="hover:text-gray-300 transition-colors">기능</Link>
              <Link href="/#specs" className="hover:text-gray-300 transition-colors">사양</Link>
              <Link href="/#gallery" className="hover:text-gray-300 transition-colors">갤러리</Link>
              <Link href="/#pricing" className="hover:text-gray-300 transition-colors">가격</Link>
            </div>
            <Link href="/" className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full transition-colors">
              홈으로
            </Link>
          </div>
        </div>
      </nav>

      {/* 구매 페이지 헤더 */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <FadeInUp>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              TechPro Max 구매
            </h1>
          </FadeInUp>
          <FadeInUp delay={0.2}>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              프리미엄 스마트폰을 지금 바로 주문하세요
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* 제품 선택 섹션 */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <FadeInUp>
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
              제품 선택
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
                  <h3 className="text-2xl font-semibold mb-2">TechPro</h3>
                  <div className="text-3xl font-bold text-blue-400 mb-4">₩1,200,000</div>
                </div>
                <ul className="space-y-3 text-gray-300 mb-8">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    128GB 저장공간
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    6.1인치 디스플레이
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    기본 카메라
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    A17 프로세서
                  </li>
                </ul>
                <button className="w-full bg-gray-700 hover:bg-gray-600 py-3 rounded-full transition-colors">
                  선택하기
                </button>
              </div>
            </FadeInUp>

            {/* TechPro Max - 추천 */}
            <FadeInUp delay={0.2}>
              <div className="bg-gray-800 rounded-2xl p-8 border-2 border-blue-600 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm">
                  추천
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
                  <h3 className="text-2xl font-semibold mb-2">TechPro Max</h3>
                  <div className="text-3xl font-bold text-blue-400 mb-4">₩1,990,000</div>
                </div>
                <ul className="space-y-3 text-gray-300 mb-8">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    256GB 저장공간
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    6.9인치 디스플레이
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    4,800만화소 카메라 × 3
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    A19 Pro 프로세서
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    AI 기능 내장
                  </li>
                </ul>
                <button className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-full transition-colors">
                  선택하기
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
                  <h3 className="text-2xl font-semibold mb-2">TechPro Ultra</h3>
                  <div className="text-3xl font-bold text-blue-400 mb-4">₩2,500,000</div>
                </div>
                <ul className="space-y-3 text-gray-300 mb-8">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    512GB 저장공간
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    6.9인치 디스플레이
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    울트라 카메라
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    A19 Pro Max 프로세서
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    프리미엄 AI 기능
                  </li>
                </ul>
                <button className="w-full bg-gray-700 hover:bg-gray-600 py-3 rounded-full transition-colors">
                  선택하기
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
              구매 정보 입력
            </h2>
          </FadeInUp>

          <div className="bg-gray-800 rounded-2xl p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FadeInUp delay={0.1}>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      이름
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="홍길동"
                    />
                  </div>
                </FadeInUp>
                <FadeInUp delay={0.2}>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      전화번호
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="010-1234-5678"
                    />
                  </div>
                </FadeInUp>
              </div>

              <FadeInUp delay={0.3}>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    이메일
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="example@email.com"
                  />
                </div>
              </FadeInUp>

              <FadeInUp delay={0.4}>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    배송 주소
                  </label>
                  <textarea
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent h-24"
                    placeholder="서울시 강남구 테헤란로 123, 456동 789호"
                  ></textarea>
                </div>
              </FadeInUp>

              <FadeInUp delay={0.5}>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    결제 방법
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <label className="flex items-center p-4 bg-gray-700 rounded-lg cursor-pointer hover:bg-gray-600 transition-colors">
                      <input type="radio" name="payment" value="card" className="mr-3" />
                      <span>신용카드</span>
                    </label>
                    <label className="flex items-center p-4 bg-gray-700 rounded-lg cursor-pointer hover:bg-gray-600 transition-colors">
                      <input type="radio" name="payment" value="bank" className="mr-3" />
                      <span>계좌이체</span>
                    </label>
                    <label className="flex items-center p-4 bg-gray-700 rounded-lg cursor-pointer hover:bg-gray-600 transition-colors">
                      <input type="radio" name="payment" value="kakao" className="mr-3" />
                      <span>카카오페이</span>
                    </label>
                  </div>
                </div>
              </FadeInUp>

              <FadeInUp delay={0.6}>
                <div className="pt-6 border-t border-gray-700">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-xl font-semibold">총 결제 금액</span>
                    <span className="text-3xl font-bold text-blue-400">₩1,990,000</span>
                  </div>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 py-4 rounded-full text-lg font-semibold transition-colors">
                    주문하기
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
              <p className="mt-2 text-sm">안전한 결제와 빠른 배송을 약속드립니다.</p>
            </div>
          </FadeIn>
        </div>
      </footer>
    </main>
  )
}
