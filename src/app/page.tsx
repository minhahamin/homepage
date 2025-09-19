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

const ScaleIn = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
)

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* 네비게이션 */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-semibold">TechPro</div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="hover:text-gray-300 transition-colors">기능</a>
              <a href="#specs" className="hover:text-gray-300 transition-colors">사양</a>
              <a href="#gallery" className="hover:text-gray-300 transition-colors">갤러리</a>
              <a href="#pricing" className="hover:text-gray-300 transition-colors">가격</a>
            </div>
            <Link href="/purchase" className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full transition-colors">
              구매하기
            </Link>
          </div>
      </div>
      </nav>

      {/* 히어로 섹션 */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <FadeInUp>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              TechPro Max
          </h1>
          </FadeInUp>
          <FadeInUp delay={0.2}>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              혁신적인 기술과 세련된 디자인이 만나 완성된 프리미엄 디바이스
            </p>
          </FadeInUp>
          <FadeInUp delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/purchase" className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-full text-lg font-semibold transition-colors text-center">
                지금 구매하기
              </Link>
              <button className="border border-gray-600 hover:border-gray-400 px-8 py-4 rounded-full text-lg font-semibold transition-colors">
                더 알아보기
              </button>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* 제품 이미지 섹션 */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <ScaleIn>
            <div className="relative">
              {/* 실제 제품 이미지 */}
              <div className="w-full h-96 sm:h-[900px] lg:h-[1100px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/techpro-phones.jpg"
                  alt="TechPro Max 스마트폰 라인업 - 다양한 색상의 프리미엄 스마트폰들"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                />
              </div>
            </div>
          </ScaleIn>
      </div>
      </section>

      {/* 주요 특징 섹션 */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <FadeInUp>
            <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16">
              혁신적인 기능들
          </h2>
          </FadeInUp>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FadeInUp delay={0.1}>
              <div className="text-center p-8">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-2xl font-semibold mb-4">초고속 성능</h3>
                <p className="text-gray-300">
                  최신 프로세서로 모든 작업을 빠르고 효율적으로 처리합니다.
                </p>
              </div>
            </FadeInUp>
            <FadeInUp delay={0.2}>
              <div className="text-center p-8">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🔋</span>
                </div>
                <h3 className="text-2xl font-semibold mb-4">장시간 배터리</h3>
                <p className="text-gray-300">
                  하루 종일 사용할 수 있는 강력한 배터리 성능을 제공합니다.
                </p>
              </div>
            </FadeInUp>
            <FadeInUp delay={0.3}>
              <div className="text-center p-8">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">📷</span>
                </div>
                <h3 className="text-2xl font-semibold mb-4">프로급 카메라</h3>
                <p className="text-gray-300">
                  전문가 수준의 사진과 동영상을 촬영할 수 있습니다.
                </p>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* 기술 사양 섹션 */}
      <section id="specs" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <FadeInUp>
            <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16">
              기술 사양
          </h2>
          </FadeInUp>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <FadeInUp delay={0.1}>
              <div>
                <h3 className="text-2xl font-semibold mb-8">디스플레이 & 크기</h3>
                <div className="space-y-4">
                  <div className="flex justify-between py-3 border-b border-gray-800">
                    <span className="text-gray-300">화면 크기</span>
                    <span>17.4cm (6.9인치)</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-800">
                    <span className="text-gray-300">가로</span>
                    <span>78mm</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-800">
                    <span className="text-gray-300">세로</span>
                    <span>163.4mm</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-800">
                    <span className="text-gray-300">두께</span>
                    <span>8.75mm</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-800">
                    <span className="text-gray-300">무게</span>
                    <span>231g</span>
                  </div>
                </div>
              </div>
            </FadeInUp>
            <FadeInUp delay={0.2}>
              <div>
                <h3 className="text-2xl font-semibold mb-8">성능 & 저장</h3>
                <div className="space-y-4">
                  <div className="flex justify-between py-3 border-b border-gray-800">
                    <span className="text-gray-300">프로세서</span>
                    <span>A19 Pro</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-800">
                    <span className="text-gray-300">저장공간</span>
                    <span>256GB</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-800">
                    <span className="text-gray-300">통신</span>
                    <span>5G</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-800">
                    <span className="text-gray-300">방수</span>
                    <span>IP68</span>
                  </div>
                </div>
              </div>
            </FadeInUp>
            <FadeInUp delay={0.3}>
              <div>
                <h3 className="text-2xl font-semibold mb-8">카메라 & 배터리</h3>
                <div className="space-y-4">
                  <div className="flex justify-between py-3 border-b border-gray-800">
                    <span className="text-gray-300">후면 카메라</span>
                    <span>4,800만화소 × 3</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-800">
                    <span className="text-gray-300">전면 카메라</span>
                    <span>1,800만화소</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-800">
                    <span className="text-gray-300">충전</span>
                    <span>USB3.2</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-800">
                    <span className="text-gray-300">맥세이프</span>
                    <span>최대 25W</span>
                  </div>
                </div>
              </div>
            </FadeInUp>
          </div>
          
          {/* AI 기능 섹션 */}
          <FadeInUp delay={0.4}>
            <div className="mt-16">
              <h3 className="text-2xl font-semibold mb-8 text-center">AI 기능</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center p-4 bg-gray-800 rounded-lg">
                  <div className="text-3xl mb-2">📝</div>
                  <p className="text-sm text-gray-300">요약</p>
                </div>
                <div className="text-center p-4 bg-gray-800 rounded-lg">
                  <div className="text-3xl mb-2">✏️</div>
                  <p className="text-sm text-gray-300">편집</p>
                </div>
                <div className="text-center p-4 bg-gray-800 rounded-lg">
                  <div className="text-3xl mb-2">🔍</div>
                  <p className="text-sm text-gray-300">교정</p>
                </div>
                <div className="text-center p-4 bg-gray-800 rounded-lg">
                  <div className="text-3xl mb-2">🎨</div>
                  <p className="text-sm text-gray-300">이미지 생성</p>
                </div>
                <div className="text-center p-4 bg-gray-800 rounded-lg">
                  <div className="text-3xl mb-2">🖼️</div>
                  <p className="text-sm text-gray-300">이미지 편집</p>
                </div>
                <div className="text-center p-4 bg-gray-800 rounded-lg">
                  <div className="text-3xl mb-2">🌐</div>
                  <p className="text-sm text-gray-300">실시간 통역</p>
                </div>
                <div className="text-center p-4 bg-gray-800 rounded-lg">
                  <div className="text-3xl mb-2">🎤</div>
                  <p className="text-sm text-gray-300">음성비서</p>
                </div>
                <div className="text-center p-4 bg-gray-800 rounded-lg">
                  <div className="text-3xl mb-2">🤖</div>
                  <p className="text-sm text-gray-300">AI 프로세서</p>
                </div>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* 갤러리 섹션 */}
      <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <FadeInUp>
            <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16">
              갤러리
          </h2>
          </FadeInUp>

          {/* 제품 갤러리 */}
          <FadeInUp delay={0.1}>
            <div className="mb-16">
              <h3 className="text-2xl font-semibold mb-8 text-center">제품 갤러리</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-gray-800 rounded-2xl p-6 text-center">
                  <div className="w-full h-48 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl mb-4 flex items-center justify-center">
                    <div className="w-16 h-24 bg-gradient-to-b from-gray-600 to-gray-700 rounded-lg"></div>
                  </div>
                  <p className="text-sm text-gray-300">정면 뷰</p>
                </div>
                <div className="bg-gray-800 rounded-2xl p-6 text-center">
                  <div className="w-full h-48 bg-gradient-to-br from-orange-600 to-orange-800 rounded-xl mb-4 flex items-center justify-center">
                    <div className="w-16 h-24 bg-gradient-to-b from-orange-500 to-orange-700 rounded-lg"></div>
                  </div>
                  <p className="text-sm text-gray-300">오렌지 컬러</p>
                </div>
                <div className="bg-gray-800 rounded-2xl p-6 text-center">
                  <div className="w-full h-48 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl mb-4 flex items-center justify-center">
                    <div className="w-16 h-24 bg-gradient-to-b from-blue-500 to-blue-700 rounded-lg"></div>
                  </div>
                  <p className="text-sm text-gray-300">다크 블루</p>
                </div>
                <div className="bg-gray-800 rounded-2xl p-6 text-center">
                  <div className="w-full h-48 bg-gradient-to-br from-gray-200 to-gray-400 rounded-xl mb-4 flex items-center justify-center">
                    <div className="w-16 h-24 bg-gradient-to-b from-gray-100 to-gray-300 rounded-lg"></div>
                  </div>
                  <p className="text-sm text-gray-300">화이트 컬러</p>
                </div>
              </div>
            </div>
          </FadeInUp>

          {/* AI 기능 데모 */}
          <FadeInUp delay={0.2}>
            <div className="mb-16">
              <h3 className="text-2xl font-semibold mb-8 text-center">AI 기능 데모</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-gray-800 rounded-2xl p-6">
                  <div className="w-full h-32 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl mb-4 flex items-center justify-center">
                    <span className="text-4xl">🌐</span>
                  </div>
                  <h4 className="text-lg font-semibold mb-2">실시간 통역</h4>
                  <p className="text-sm text-gray-300">다국어 실시간 번역 기능</p>
                </div>
                <div className="bg-gray-800 rounded-2xl p-6">
                  <div className="w-full h-32 bg-gradient-to-r from-green-600 to-blue-600 rounded-xl mb-4 flex items-center justify-center">
                    <span className="text-4xl">🎨</span>
                  </div>
                  <h4 className="text-lg font-semibold mb-2">이미지 생성</h4>
                  <p className="text-sm text-gray-300">AI로 생성한 이미지들</p>
                </div>
                <div className="bg-gray-800 rounded-2xl p-6">
                  <div className="w-full h-32 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-xl mb-4 flex items-center justify-center">
                    <span className="text-4xl">🎤</span>
                  </div>
                  <h4 className="text-lg font-semibold mb-2">음성비서</h4>
                  <p className="text-sm text-gray-300">스마트 음성 어시스턴트</p>
                </div>
              </div>
            </div>
          </FadeInUp>

          {/* 카메라 샘플 */}
          <FadeInUp delay={0.3}>
            <div className="mb-16">
              <h3 className="text-2xl font-semibold mb-8 text-center">카메라 샘플</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-gray-800 rounded-2xl overflow-hidden">
                  <div className="w-full h-48 bg-gradient-to-br from-sky-400 to-blue-600"></div>
                  <div className="p-4">
                    <p className="text-sm text-gray-300">풍경 사진</p>
                    <p className="text-xs text-gray-500">4,800만화소</p>
                  </div>
                </div>
                <div className="bg-gray-800 rounded-2xl overflow-hidden">
                  <div className="w-full h-48 bg-gradient-to-br from-pink-400 to-red-600"></div>
                  <div className="p-4">
                    <p className="text-sm text-gray-300">인물 사진</p>
                    <p className="text-xs text-gray-500">AI 인물 모드</p>
                  </div>
                </div>
                <div className="bg-gray-800 rounded-2xl overflow-hidden">
                  <div className="w-full h-48 bg-gradient-to-br from-green-400 to-emerald-600"></div>
                  <div className="p-4">
                    <p className="text-sm text-gray-300">야간 촬영</p>
                    <p className="text-xs text-gray-500">야간 모드</p>
                  </div>
                </div>
                <div className="bg-gray-800 rounded-2xl overflow-hidden">
                  <div className="w-full h-48 bg-gradient-to-br from-purple-400 to-violet-600"></div>
                  <div className="p-4">
                    <p className="text-sm text-gray-300">매크로 촬영</p>
                    <p className="text-xs text-gray-500">초근접 촬영</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeInUp>

          {/* 사용자 경험 */}
          <FadeInUp delay={0.4}>
            <div className="mb-16">
              <h3 className="text-2xl font-semibold mb-8 text-center">사용자 경험</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-gray-800 rounded-2xl p-6">
                  <div className="w-full h-40 bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl mb-4 flex items-center justify-center">
                    <div className="w-20 h-32 bg-gradient-to-b from-gray-600 to-gray-800 rounded-lg"></div>
                  </div>
                  <h4 className="text-lg font-semibold mb-2">홈 화면</h4>
                  <p className="text-sm text-gray-300">직관적인 사용자 인터페이스</p>
                </div>
                <div className="bg-gray-800 rounded-2xl p-6">
                  <div className="w-full h-40 bg-gradient-to-br from-blue-700 to-blue-900 rounded-xl mb-4 flex items-center justify-center">
                    <div className="w-20 h-32 bg-gradient-to-b from-blue-600 to-blue-800 rounded-lg"></div>
                  </div>
                  <h4 className="text-lg font-semibold mb-2">멀티태스킹</h4>
                  <p className="text-sm text-gray-300">효율적인 작업 관리</p>
                </div>
                <div className="bg-gray-800 rounded-2xl p-6">
                  <div className="w-full h-40 bg-gradient-to-br from-green-700 to-green-900 rounded-xl mb-4 flex items-center justify-center">
                    <div className="w-20 h-32 bg-gradient-to-b from-green-600 to-green-800 rounded-lg"></div>
                  </div>
                  <h4 className="text-lg font-semibold mb-2">게임 플레이</h4>
                  <p className="text-sm text-gray-300">부드러운 게임 경험</p>
                </div>
              </div>
            </div>
          </FadeInUp>

          {/* 디테일 갤러리 */}
          <FadeInUp delay={0.5}>
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-center">디테일 갤러리</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-gray-800 rounded-xl p-4 text-center">
                  <div className="w-full h-24 bg-gradient-to-br from-gray-600 to-gray-800 rounded-lg mb-3 flex items-center justify-center">
                    <div className="w-8 h-8 bg-gray-500 rounded"></div>
                  </div>
                  <p className="text-xs text-gray-300">카메라 모듈</p>
                </div>
                <div className="bg-gray-800 rounded-xl p-4 text-center">
                  <div className="w-full h-24 bg-gradient-to-br from-gray-600 to-gray-800 rounded-lg mb-3 flex items-center justify-center">
                    <div className="w-8 h-2 bg-gray-500 rounded"></div>
                  </div>
                  <p className="text-xs text-gray-300">사이드 버튼</p>
                </div>
                <div className="bg-gray-800 rounded-xl p-4 text-center">
                  <div className="w-full h-24 bg-gradient-to-br from-gray-600 to-gray-800 rounded-lg mb-3 flex items-center justify-center">
                    <div className="w-6 h-6 bg-gray-500 rounded-full"></div>
                  </div>
                  <p className="text-xs text-gray-300">충전 포트</p>
                </div>
                <div className="bg-gray-800 rounded-xl p-4 text-center">
                  <div className="w-full h-24 bg-gradient-to-br from-gray-600 to-gray-800 rounded-lg mb-3 flex items-center justify-center">
                    <div className="w-4 h-4 bg-gray-500 rounded"></div>
                  </div>
                  <p className="text-xs text-gray-300">스피커 그릴</p>
                </div>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* 가격 섹션 */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto text-center">
          <FadeInUp>
            <h2 className="text-4xl sm:text-5xl font-bold mb-16">
              가격
          </h2>
          </FadeInUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeInUp delay={0.1}>
              <div className="bg-gray-800 rounded-2xl p-8">
                <h3 className="text-2xl font-semibold mb-4">TechPro</h3>
                <div className="text-4xl font-bold mb-6">₩1,200,000</div>
                <ul className="space-y-3 text-gray-300 mb-8">
                  <li>128GB 저장공간</li>
                  <li>6.1인치 디스플레이</li>
                  <li>기본 카메라</li>
                </ul>
                <Link href="/purchase" className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-full transition-colors text-center block">
                  선택하기
                </Link>
              </div>
            </FadeInUp>
            <FadeInUp delay={0.2}>
              <div className="bg-gray-800 rounded-2xl p-8 border-2 border-blue-600 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm">
                  인기
                </div>
                <h3 className="text-2xl font-semibold mb-4">TechPro Max</h3>
                <div className="text-4xl font-bold mb-6">₩1,990,000</div>
                <ul className="space-y-3 text-gray-300 mb-8">
                  <li>256GB 저장공간</li>
                  <li>6.9인치 디스플레이</li>
                  <li>4,800만화소 카메라 × 3</li>
                  <li>A19 Pro 프로세서</li>
                  <li>AI 기능 내장</li>
                </ul>
                <Link href="/purchase" className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-full transition-colors text-center block">
                  선택하기
                </Link>
              </div>
            </FadeInUp>
            <FadeInUp delay={0.3}>
              <div className="bg-gray-800 rounded-2xl p-8">
                <h3 className="text-2xl font-semibold mb-4">TechPro Ultra</h3>
                <div className="text-4xl font-bold mb-6">₩1,800,000</div>
                <ul className="space-y-3 text-gray-300 mb-8">
                  <li>512GB 저장공간</li>
                  <li>6.7인치 디스플레이</li>
                  <li>울트라 카메라</li>
                </ul>
                <Link href="/purchase" className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-full transition-colors text-center block">
                  선택하기
                </Link>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* 푸터 */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">TechPro</h3>
                <p className="text-gray-400">
                  혁신적인 기술로 만든 프리미엄 디바이스
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">제품</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>TechPro</li>
                  <li>TechPro Max</li>
                  <li>TechPro Ultra</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">지원</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>고객지원</li>
                  <li>수리서비스</li>
                  <li>보증</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">회사</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>회사소개</li>
                  <li>채용정보</li>
                  <li>뉴스</li>
                </ul>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2024 TechPro. All rights reserved.</p>
            </div>
          </FadeIn>
        </div>
      </footer>
    </main>
  )
}
