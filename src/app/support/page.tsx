'use client'

import React from 'react'
import { motion } from 'framer-motion'
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

export default function Support() {
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
              <Link href="/purchase" className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full transition-colors">
                {t('nav.buy')}
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* 지원 페이지 헤더 */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <FadeInUp>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              지원 센터
            </h1>
          </FadeInUp>
          <FadeInUp delay={0.2}>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              TechPro 제품에 대한 모든 지원 정보를 확인하세요
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* 지원 메뉴 */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FadeInUp delay={0.1}>
              <Link href="#faq" className="bg-gray-800 rounded-2xl p-8 text-center hover:bg-gray-700 transition-colors group">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-2xl">❓</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">FAQ</h3>
                <p className="text-gray-300 text-sm">자주 묻는 질문들</p>
              </Link>
            </FadeInUp>

            <FadeInUp delay={0.2}>
              <Link href="#guide" className="bg-gray-800 rounded-2xl p-8 text-center hover:bg-gray-700 transition-colors group">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-2xl">📖</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">사용 가이드</h3>
                <p className="text-gray-300 text-sm">제품 사용법</p>
              </Link>
            </FadeInUp>

            <FadeInUp delay={0.3}>
              <Link href="#warranty" className="bg-gray-800 rounded-2xl p-8 text-center hover:bg-gray-700 transition-colors group">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">보증 정보</h3>
                <p className="text-gray-300 text-sm">보증 및 수리 정보</p>
              </Link>
            </FadeInUp>

            <FadeInUp delay={0.4}>
              <Link href="#downloads" className="bg-gray-800 rounded-2xl p-8 text-center hover:bg-gray-700 transition-colors group">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-2xl">⬇️</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">다운로드</h3>
                <p className="text-gray-300 text-sm">앱, 매뉴얼 다운로드</p>
              </Link>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* FAQ 섹션 */}
      <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <FadeInUp>
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
              자주 묻는 질문
            </h2>
          </FadeInUp>

          <div className="space-y-6">
            <FadeInUp delay={0.1}>
              <div className="bg-gray-800 rounded-2xl p-6">
                <h3 className="text-lg font-semibold mb-3">TechPro Max는 언제 출시되나요?</h3>
                <p className="text-gray-300">TechPro Max는 2024년 12월에 정식 출시됩니다. 현재 사전 주문을 받고 있습니다.</p>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.2}>
              <div className="bg-gray-800 rounded-2xl p-6">
                <h3 className="text-lg font-semibold mb-3">배송은 얼마나 걸리나요?</h3>
                <p className="text-gray-300">주문 후 2-3일 내에 배송되며, 무료 배송 서비스를 제공합니다.</p>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.3}>
              <div className="bg-gray-800 rounded-2xl p-6">
                <h3 className="text-lg font-semibold mb-3">AI 기능은 어떻게 사용하나요?</h3>
                <p className="text-gray-300">설정 &gt; AI 기능에서 원하는 기능을 활성화할 수 있습니다. 실시간 통역, 이미지 생성, 음성비서 등이 포함됩니다.</p>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.4}>
              <div className="bg-gray-800 rounded-2xl p-6">
                <h3 className="text-lg font-semibold mb-3">방수 기능이 있나요?</h3>
                <p className="text-gray-300">네, IP68 등급의 방수 기능을 지원하여 최대 6미터 깊이에서 30분간 방수됩니다.</p>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.5}>
              <div className="bg-gray-800 rounded-2xl p-6">
                <h3 className="text-lg font-semibold mb-3">충전기는 별도로 구매해야 하나요?</h3>
                <p className="text-gray-300">기본 충전기는 포함되어 있으며, USB3.2와 맥세이프 충전을 모두 지원합니다.</p>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* 사용 가이드 섹션 */}
      <section id="guide" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <FadeInUp>
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
              사용 가이드
            </h2>
          </FadeInUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FadeInUp delay={0.1}>
              <div className="bg-gray-800 rounded-2xl p-6">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-xl">🔧</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">초기 설정</h3>
                <p className="text-gray-300 mb-4">제품을 처음 사용할 때 필요한 기본 설정 방법을 안내합니다.</p>
                <button className="text-blue-400 hover:text-blue-300 transition-colors">가이드 보기 →</button>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.2}>
              <div className="bg-gray-800 rounded-2xl p-6">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-xl">📱</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">기본 사용법</h3>
                <p className="text-gray-300 mb-4">홈 화면, 앱 사용, 멀티태스킹 등 기본 기능 사용법을 설명합니다.</p>
                <button className="text-blue-400 hover:text-blue-300 transition-colors">가이드 보기 →</button>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.3}>
              <div className="bg-gray-800 rounded-2xl p-6">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-xl">🤖</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">AI 기능 활용</h3>
                <p className="text-gray-300 mb-4">AI 기능들을 효과적으로 사용하는 방법과 팁을 제공합니다.</p>
                <button className="text-blue-400 hover:text-blue-300 transition-colors">가이드 보기 →</button>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.4}>
              <div className="bg-gray-800 rounded-2xl p-6">
                <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-xl">📷</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">카메라 사용법</h3>
                <p className="text-gray-300 mb-4">프로급 카메라 기능을 최대한 활용하는 촬영 기법을 안내합니다.</p>
                <button className="text-blue-400 hover:text-blue-300 transition-colors">가이드 보기 →</button>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.5}>
              <div className="bg-gray-800 rounded-2xl p-6">
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-xl">⚙️</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">고급 설정</h3>
                <p className="text-gray-300 mb-4">개인화 설정, 성능 최적화 등 고급 사용법을 설명합니다.</p>
                <button className="text-blue-400 hover:text-blue-300 transition-colors">가이드 보기 →</button>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.6}>
              <div className="bg-gray-800 rounded-2xl p-6">
                <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-xl">🔋</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">배터리 관리</h3>
                <p className="text-gray-300 mb-4">배터리 수명을 연장하고 효율적으로 사용하는 방법을 안내합니다.</p>
                <button className="text-blue-400 hover:text-blue-300 transition-colors">가이드 보기 →</button>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* 보증 정보 섹션 */}
      <section id="warranty" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <FadeInUp>
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
              보증 정보
            </h2>
          </FadeInUp>

          <div className="space-y-8">
            <FadeInUp delay={0.1}>
              <div className="bg-gray-800 rounded-2xl p-8">
                <h3 className="text-2xl font-semibold mb-4">제품 보증</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2"></span>
                    <span>구매일로부터 1년간 무상 수리 서비스</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2"></span>
                    <span>제조사 하자에 대한 무상 교체 서비스</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2"></span>
                    <span>전국 서비스 센터에서 수리 가능</span>
                  </li>
                </ul>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.2}>
              <div className="bg-gray-800 rounded-2xl p-8">
                <h3 className="text-2xl font-semibold mb-4">수리 서비스</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2"></span>
                    <span>화면 파손: 1회 무상 교체 (구매 후 6개월 이내)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2"></span>
                    <span>배터리 교체: 2년간 무상 교체</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2"></span>
                    <span>소프트웨어 업데이트: 평생 무상 지원</span>
                  </li>
                </ul>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.3}>
              <div className="bg-gray-800 rounded-2xl p-8">
                <h3 className="text-2xl font-semibold mb-4">보증 제외 사항</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2"></span>
                    <span>사용자 부주의로 인한 파손</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2"></span>
                    <span>액체 침수로 인한 손상</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2"></span>
                    <span>개조 또는 수정된 제품</span>
                  </li>
                </ul>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* 다운로드 섹션 */}
      <section id="downloads" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <FadeInUp>
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
              다운로드
            </h2>
          </FadeInUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FadeInUp delay={0.1}>
              <div className="bg-gray-800 rounded-2xl p-6">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-4">
                  <span className="text-2xl">📱</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">TechPro 앱</h3>
                <p className="text-gray-300 mb-4">제품 관리 및 설정을 위한 공식 앱</p>
                <button className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg transition-colors">
                  다운로드
                </button>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.2}>
              <div className="bg-gray-800 rounded-2xl p-6">
                <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mb-4">
                  <span className="text-2xl">📖</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">사용자 매뉴얼</h3>
                <p className="text-gray-300 mb-4">상세한 제품 사용 설명서 (PDF)</p>
                <button className="w-full bg-green-600 hover:bg-green-700 py-3 rounded-lg transition-colors">
                  다운로드
                </button>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.3}>
              <div className="bg-gray-800 rounded-2xl p-6">
                <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mb-4">
                  <span className="text-2xl">🎵</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">벨소리 & 알림음</h3>
                <p className="text-gray-300 mb-4">프리미엄 벨소리 및 알림음 모음</p>
                <button className="w-full bg-purple-600 hover:bg-purple-700 py-3 rounded-lg transition-colors">
                  다운로드
                </button>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.4}>
              <div className="bg-gray-800 rounded-2xl p-6">
                <div className="w-16 h-16 bg-orange-600 rounded-2xl flex items-center justify-center mb-4">
                  <span className="text-2xl">🖼️</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">월페이퍼</h3>
                <p className="text-gray-300 mb-4">고화질 월페이퍼 컬렉션</p>
                <button className="w-full bg-orange-600 hover:bg-orange-700 py-3 rounded-lg transition-colors">
                  다운로드
                </button>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.5}>
              <div className="bg-gray-800 rounded-2xl p-6">
                <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mb-4">
                  <span className="text-2xl">🔧</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">펌웨어 업데이트</h3>
                <p className="text-gray-300 mb-4">최신 펌웨어 및 소프트웨어 업데이트</p>
                <button className="w-full bg-red-600 hover:bg-red-700 py-3 rounded-lg transition-colors">
                  다운로드
                </button>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.6}>
              <div className="bg-gray-800 rounded-2xl p-6">
                <div className="w-16 h-16 bg-teal-600 rounded-2xl flex items-center justify-center mb-4">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">성능 도구</h3>
                <p className="text-gray-300 mb-4">시스템 모니터링 및 최적화 도구</p>
                <button className="w-full bg-teal-600 hover:bg-teal-700 py-3 rounded-lg transition-colors">
                  다운로드
                </button>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* 푸터 */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center text-gray-400">
              <p>&copy; 2024 TechPro. All rights reserved.</p>
              <p className="mt-2 text-sm">언제든지 고객지원팀에 문의하세요.</p>
            </div>
          </FadeIn>
        </div>
      </footer>
    </main>
  )
}
