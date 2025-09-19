'use client'

import React from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">문제가 발생했습니다!</h2>
        <p className="text-gray-300 mb-6">
          {error.message || '예상치 못한 오류가 발생했습니다.'}
        </p>
        <button
          onClick={reset}
          className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full transition-colors"
        >
          다시 시도
        </button>
      </div>
    </div>
  )
}
