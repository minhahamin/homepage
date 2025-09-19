'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '../contexts/LanguageContext'

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
  const { language, setLanguage, t } = useLanguage()

  return (
    <main className="min-h-screen bg-black text-white">
      {/* 네비게이션 */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-semibold">TechPro</div>
            <div className="hidden md:flex space-x-8">
              <a 
                href="#features" 
                className="hover:text-gray-300 transition-colors cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {t('nav.features')}
              </a>
              <a 
                href="#specs" 
                className="hover:text-gray-300 transition-colors cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('specs')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {t('nav.specs')}
              </a>
              <a 
                href="#gallery" 
                className="hover:text-gray-300 transition-colors cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {t('nav.gallery')}
              </a>
              <a 
                href="#pricing" 
                className="hover:text-gray-300 transition-colors cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
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

      {/* 히어로 섹션 */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <FadeInUp>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              {t('hero.title')}
          </h1>
          </FadeInUp>
          <FadeInUp delay={0.2}>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              {t('hero.subtitle')}
            </p>
          </FadeInUp>
          <FadeInUp delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/purchase" className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-full text-lg font-semibold transition-colors text-center">
                {t('hero.buy')}
              </Link>
              <button 
                className="border border-gray-600 hover:border-gray-400 px-8 py-4 rounded-full text-lg font-semibold transition-colors"
                onClick={() => {
                  document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {t('hero.learn')}
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
              {t('features.title')}
          </h2>
          </FadeInUp>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FadeInUp delay={0.1}>
              <div className="text-center p-8">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-2xl font-semibold mb-4">{t('features.performance.title')}</h3>
                <p className="text-gray-300">
                  {t('features.performance.desc')}
                </p>
              </div>
            </FadeInUp>
            <FadeInUp delay={0.2}>
              <div className="text-center p-8">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🔋</span>
                </div>
                <h3 className="text-2xl font-semibold mb-4">AI 기능</h3>
                <p 
                  className="text-gray-300"
                  dangerouslySetInnerHTML={{ __html: t('features.ai.desc') }}
                />
              </div>
            </FadeInUp>
            <FadeInUp delay={0.3}>
              <div className="text-center p-8">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">📷</span>
                </div>
                <h3 className="text-2xl font-semibold mb-4">{t('features.camera.title')}</h3>
                <p className="text-gray-300">
                  {t('features.camera.desc')}
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
              {t('specs.title')}
          </h2>
          </FadeInUp>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <FadeInUp delay={0.1}>
              <div>
                <h3 className="text-2xl font-semibold mb-8">{t('specs.display')} & {t('specs.dimensions')}</h3>
                <div className="space-y-4">
                  <div className="flex justify-between py-3 border-b border-gray-800">
                    <span className="text-gray-300">{t('specs.display.size')}</span>
                    <span>{t('specs.display.value')}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-800">
                    <span className="text-gray-300">{t('specs.dimensions.width')}</span>
                    <span>{t('specs.dimensions.width.value')}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-800">
                    <span className="text-gray-300">{t('specs.dimensions.height')}</span>
                    <span>{t('specs.dimensions.height.value')}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-800">
                    <span className="text-gray-300">{t('specs.dimensions.thickness')}</span>
                    <span>{t('specs.dimensions.thickness.value')}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-800">
                    <span className="text-gray-300">{t('specs.dimensions.weight')}</span>
                    <span>{t('specs.dimensions.weight.value')}</span>
                  </div>
                </div>
              </div>
            </FadeInUp>
            <FadeInUp delay={0.2}>
              <div>
                <h3 className="text-2xl font-semibold mb-8">{t('specs.performance.title')}</h3>
                <div className="space-y-4">
                  <div className="flex justify-between py-3 border-b border-gray-800">
                    <span className="text-gray-300">{t('specs.processor')}</span>
                    <span>{t('specs.processor.value')}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-800">
                    <span className="text-gray-300">{t('specs.storage')}</span>
                    <span>{t('specs.storage.value')}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-800">
                    <span className="text-gray-300">{t('specs.communication')}</span>
                    <span>{t('specs.communication.value')}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-800">
                    <span className="text-gray-300">{t('specs.waterproof')}</span>
                    <span>{t('specs.waterproof.value')}</span>
                  </div>
                </div>
              </div>
            </FadeInUp>
            <FadeInUp delay={0.3}>
              <div>
                <h3 className="text-2xl font-semibold mb-8">{t('specs.camera.title')}</h3>
                <div className="space-y-4">
                  <div className="flex justify-between py-3 border-b border-gray-800">
                    <span className="text-gray-300">{t('specs.camera.rear')}</span>
                    <span>{t('specs.camera.rear.value')}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-800">
                    <span className="text-gray-300">{t('specs.camera.front')}</span>
                    <span>{t('specs.camera.front.value')}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-800">
                    <span className="text-gray-300">{t('specs.charging')}</span>
                    <span>{t('specs.charging.value')}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-800">
                    <span className="text-gray-300">{t('specs.magsafe')}</span>
                    <span>{t('specs.magsafe.value')}</span>
                  </div>
                </div>
              </div>
            </FadeInUp>
          </div>
          
          {/* AI 기능 섹션 */}
          <FadeInUp delay={0.4}>
            <div className="mt-16">
              <h3 className="text-2xl font-semibold mb-8 text-center">{t('features.ai.section.title')}</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center p-4 bg-gray-800 rounded-lg">
                  <div className="text-3xl mb-2">📝</div>
                  <p className="text-sm text-gray-300">{t('specs.ai.summary')}</p>
                </div>
                <div className="text-center p-4 bg-gray-800 rounded-lg">
                  <div className="text-3xl mb-2">✏️</div>
                  <p className="text-sm text-gray-300">{t('specs.ai.edit')}</p>
                </div>
                <div className="text-center p-4 bg-gray-800 rounded-lg">
                  <div className="text-3xl mb-2">🔍</div>
                  <p className="text-sm text-gray-300">{t('specs.ai.correction')}</p>
                </div>
                <div className="text-center p-4 bg-gray-800 rounded-lg">
                  <div className="text-3xl mb-2">🎨</div>
                  <p className="text-sm text-gray-300">{t('specs.ai.imagegen')}</p>
                </div>
                <div className="text-center p-4 bg-gray-800 rounded-lg">
                  <div className="text-3xl mb-2">🖼️</div>
                  <p className="text-sm text-gray-300">{t('specs.ai.imageedit')}</p>
                </div>
                <div className="text-center p-4 bg-gray-800 rounded-lg">
                  <div className="text-3xl mb-2">🌐</div>
                  <p className="text-sm text-gray-300">{t('specs.ai.translation')}</p>
                </div>
                <div className="text-center p-4 bg-gray-800 rounded-lg">
                  <div className="text-3xl mb-2">🎤</div>
                  <p className="text-sm text-gray-300">{t('specs.ai.voice')}</p>
                </div>
                <div className="text-center p-4 bg-gray-800 rounded-lg">
                  <div className="text-3xl mb-2">🤖</div>
                  <p className="text-sm text-gray-300">{t('specs.ai.processor')}</p>
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
              {t('gallery.title')}
          </h2>
          </FadeInUp>

          {/* 제품 갤러리 */}
          <FadeInUp delay={0.1}>
            <div className="mb-16">
              <h3 className="text-2xl font-semibold mb-8 text-center">{t('gallery.product.title')}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-gray-800 rounded-2xl p-6 text-center">
                  <div className="w-full h-64 rounded-xl mb-4 flex items-center justify-center bg-gray-700">
                    <Image
                      src="/tech-front.png"
                      alt="TechPro 정면 뷰"
                      width={200}
                      height={300}
                      className="object-contain"
                    />
                  </div>
                  <p className="text-sm text-gray-300">{t('gallery.product.front')}</p>
                </div>
                <div className="bg-gray-800 rounded-2xl p-6 text-center">
                  <div className="w-full h-64 rounded-xl mb-4 flex items-center justify-center bg-gray-700">
                    <Image
                      src="/tech-orange.png"
                      alt="TechPro 오렌지 컬러"
                      width={200}
                      height={300}
                      className="object-contain"
                    />
                  </div>
                  <p className="text-sm text-gray-300">{t('gallery.product.orange')}</p>
                </div>
                <div className="bg-gray-800 rounded-2xl p-6 text-center">
                  <div className="w-full h-64 rounded-xl mb-4 flex items-center justify-center bg-gray-700">
                    <Image
                      src="/tech-blue.png"
                      alt="TechPro 블루 컬러"
                      width={200}
                      height={300}
                      className="object-contain"
                    />
                  </div>
                  <p className="text-sm text-gray-300">{t('gallery.product.darkblue')}</p>
                </div>
                <div className="bg-gray-800 rounded-2xl p-6 text-center">
                  <div className="w-full h-64 rounded-xl mb-4 flex items-center justify-center bg-gray-700">
                    <Image
                      src="/tech-white.png"
                      alt="TechPro 화이트 컬러"
                      width={200}
                      height={300}
                      className="object-contain"
                    />
                  </div>
                  <p className="text-sm text-gray-300">{t('gallery.product.white')}</p>
                </div>
              </div>
            </div>
          </FadeInUp>

          {/* AI 기능 데모 */}
          <FadeInUp delay={0.2}>
            <div className="mb-16">
              <h3 className="text-2xl font-semibold mb-8 text-center">{t('gallery.ai.title')}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-gray-800 rounded-2xl p-6">
                  <div className="w-full h-32 rounded-xl mb-4 relative overflow-hidden">
                    <Image
                      src="/tech-bunyeok.png"
                      alt="실시간 통역"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{t('gallery.ai.translation')}</h4>
                  <p className="text-sm text-gray-300">{t('gallery.ai.translation.desc')}</p>
                </div>
                <div className="bg-gray-800 rounded-2xl p-6">
                  <div className="w-full h-32 rounded-xl mb-4 relative overflow-hidden">
                    <Image
                      src="/tech-ai-img.jpg"
                      alt="이미지 생성"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{t('gallery.ai.imagegen')}</h4>
                  <p className="text-sm text-gray-300">{t('gallery.ai.imagegen.desc')}</p>
                </div>
                <div className="bg-gray-800 rounded-2xl p-6">
                  <div className="w-full h-32 rounded-xl mb-4 flex items-center justify-center bg-gray-700">
                    <Image
                      src="/tech-siri.png"
                      alt="음성비서"
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-auto h-auto max-w-full max-h-full object-contain"
                    />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{t('gallery.ai.voice')}</h4>
                  <p className="text-sm text-gray-300">{t('gallery.ai.voice.desc')}</p>
                </div>
              </div>
            </div>
          </FadeInUp>

          {/* 카메라 샘플 */}
          <FadeInUp delay={0.3}>
            <div className="mb-16">
              <h3 className="text-2xl font-semibold mb-8 text-center">{t('gallery.camera.title')}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-gray-800 rounded-2xl overflow-hidden">
                  <div className="w-full h-48 relative">
                    <Image
                      src="/tech-pungkung.jpg"
                      alt="풍경 사진"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-gray-300">{t('gallery.camera.landscape')}</p>
                    <p className="text-xs text-gray-500">{t('gallery.camera.landscape.desc')}</p>
                  </div>
                </div>
                <div className="bg-gray-800 rounded-2xl overflow-hidden">
                  <div className="w-full h-48 relative">
                    <Image
                      src="/tech-ai.png"
                      alt="AI 인물 사진"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-gray-300">{t('gallery.camera.portrait')}</p>
                    <p className="text-xs text-gray-500">{t('gallery.camera.portrait.desc')}</p>
                  </div>
                </div>
                <div className="bg-gray-800 rounded-2xl overflow-hidden">
                  <div className="w-full h-48 relative">
                    <Image
                      src="/tech-yagan.jpeg"
                      alt="야간 촬영"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-gray-300">{t('gallery.camera.night')}</p>
                    <p className="text-xs text-gray-500">{t('gallery.camera.night.desc')}</p>
                  </div>
                </div>
                <div className="bg-gray-800 rounded-2xl overflow-hidden">
                  <div className="w-full h-48 relative">
                    <Image
                      src="/tech-macro.png"
                      alt="매크로 촬영"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-gray-300">{t('gallery.camera.macro')}</p>
                    <p className="text-xs text-gray-500">{t('gallery.camera.macro.desc')}</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeInUp>

          {/* 사용자 경험 */}
          <FadeInUp delay={0.4}>
            <div className="mb-16">
              <h3 className="text-2xl font-semibold mb-8 text-center">{t('gallery.ux.title')}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-gray-800 rounded-2xl p-6">
                  <div className="w-full h-40 rounded-xl mb-4 relative overflow-hidden">
                    <Image
                      src="/tech-homeview.png"
                      alt="홈 화면"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{t('gallery.ux.home')}</h4>
                  <p className="text-sm text-gray-300">{t('gallery.ux.home.desc')}</p>
                </div>
                <div className="bg-gray-800 rounded-2xl p-6">
                  <div className="w-full h-40 rounded-xl mb-4 relative overflow-hidden">
                    <Image
                      src="/tech-multitasking.png"
                      alt="멀티태스킹"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{t('gallery.ux.multitask')}</h4>
                  <p className="text-sm text-gray-300">{t('gallery.ux.multitask.desc')}</p>
                </div>
                <div className="bg-gray-800 rounded-2xl p-6">
                  <div className="w-full h-40 rounded-xl mb-4 relative overflow-hidden">
                    <Image
                      src="/tech-gameplay.png"
                      alt="게임 플레이"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{t('gallery.ux.gaming')}</h4>
                  <p className="text-sm text-gray-300">{t('gallery.ux.gaming.desc')}</p>
                </div>
              </div>
            </div>
          </FadeInUp>

          {/* 디테일 갤러리 */}
          <FadeInUp delay={0.5}>
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-center">{t('gallery.detail.title')}</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-gray-800 rounded-xl p-4 text-center">
                  <div className="w-full h-24 rounded-lg mb-3 flex items-center justify-center bg-gray-700">
                    <Image
                      src="/tech-camera-module.png"
                      alt="카메라 모듈"
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-auto h-auto max-w-full max-h-full object-contain"
                    />
                  </div>
                  <p className="text-xs text-gray-300">{t('gallery.detail.camera')}</p>
                </div>
                <div className="bg-gray-800 rounded-xl p-4 text-center">
                  <div className="w-full h-24 rounded-lg mb-3 flex items-center justify-center bg-gray-700">
                    <Image
                      src="/tech-sidebutton.png"
                      alt="사이드 버튼"
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-auto h-auto max-w-full max-h-full object-contain"
                    />
                  </div>
                  <p className="text-xs text-gray-300">{t('gallery.detail.buttons')}</p>
                </div>
                <div className="bg-gray-800 rounded-xl p-4 text-center">
                  <div className="w-full h-24 rounded-lg mb-3 flex items-center justify-center bg-gray-700">
                    <Image
                      src="/tech-charge-port.png"
                      alt="충전 포트"
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-auto h-auto max-w-full max-h-full object-contain"
                    />
                  </div>
                  <p className="text-xs text-gray-300">{t('gallery.detail.port')}</p>
                </div>
                <div className="bg-gray-800 rounded-xl p-4 text-center">
                  <div className="w-full h-24 rounded-lg mb-3 flex items-center justify-center bg-gray-700">
                    <Image
                      src="/tech-speaker.png"
                      alt="스피커 그릴"
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-auto h-auto max-w-full max-h-full object-contain"
                    />
                  </div>
                  <p className="text-xs text-gray-300">{t('gallery.detail.speaker')}</p>
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
              {t('pricing.title')}
          </h2>
          </FadeInUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeInUp delay={0.1}>
              <div className="bg-gray-800 rounded-2xl p-8">
                <h3 className="text-2xl font-semibold mb-4">{t('footer.techpro')}</h3>
                <div className="text-4xl font-bold mb-6">{t('pricing.techpro.price')}</div>
                <ul className="space-y-3 text-gray-300 mb-8">
                  <li>{t('pricing.storage.128')}</li>
                  <li>{t('pricing.display.6.1')}</li>
                  <li>{t('pricing.camera.basic')}</li>
                </ul>
                <Link href="/purchase" className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-full transition-colors text-center block">
                  {t('pricing.select')}
                </Link>
              </div>
            </FadeInUp>
            <FadeInUp delay={0.2}>
              <div className="bg-gray-800 rounded-2xl p-8 border-2 border-blue-600 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm">
                  {t('pricing.popular')}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{t('footer.techpromax')}</h3>
                <div className="text-4xl font-bold mb-6">{t('pricing.techpromax.price')}</div>
                <ul className="space-y-3 text-gray-300 mb-8">
                  <li>{t('pricing.storage.256')}</li>
                  <li>{t('pricing.display.6.9')}</li>
                  <li>{t('pricing.camera.48mp')}</li>
                  <li>{t('pricing.processor.a19')}</li>
                  <li>{t('pricing.ai.builtin')}</li>
                </ul>
                <Link href="/purchase" className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-full transition-colors text-center block">
                  {t('pricing.select')}
                </Link>
              </div>
            </FadeInUp>
            <FadeInUp delay={0.3}>
              <div className="bg-gray-800 rounded-2xl p-8">
                <h3 className="text-2xl font-semibold mb-4">{t('footer.techproultra')}</h3>
                <div className="text-4xl font-bold mb-6">{t('pricing.techproultra.price')}</div>
                <ul className="space-y-3 text-gray-300 mb-8">
                  <li>{t('pricing.storage.512')}</li>
                  <li>{t('pricing.display.6.7')}</li>
                  <li>{t('pricing.camera.ultra')}</li>
                </ul>
                <Link href="/purchase" className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-full transition-colors text-center block">
                  {t('pricing.select')}
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
                  {t('footer.subtitle')}
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">{t('footer.product')}</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>{t('footer.techpro')}</li>
                  <li>{t('footer.techpromax')}</li>
                  <li>{t('footer.techproultra')}</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">{t('footer.support')}</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>{t('footer.customer')}</li>
                  <li>{t('footer.repair')}</li>
                  <li>{t('footer.warranty')}</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">{t('footer.company_info')}</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>{t('footer.about')}</li>
                  <li>{t('footer.careers')}</li>
                  <li>{t('footer.news')}</li>
                </ul>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2024 {t('footer.company')}. {t('footer.rights')}</p>
            </div>
          </FadeIn>
        </div>
      </footer>
    </main>
  )
}
