import React from 'react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">404</h2>
        <p className="text-xl text-gray-300 mb-6">페이지를 찾을 수 없습니다.</p>
        <Link
          href="/"
          className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full transition-colors inline-block"
        >
          홈으로 돌아가기
        </Link>
      </div>
    </div>
  )
}
