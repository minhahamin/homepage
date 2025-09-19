export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-4 py-8 sm:px-6 lg:px-8 mobile-scroll">
      {/* 헤더 섹션 - 모바일 최적화 */}
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm">
        <p className="flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <span className="text-center text-sm sm:text-base">
            Next.js 홈페이지에 오신 것을 환영합니다!
          </span>
        </p>
      </div>

      {/* 메인 타이틀 섹션 - 모바일 최적화 */}
      <div className="relative flex place-items-center px-4 py-8 sm:py-12">
        <div className="relative before:absolute before:h-[200px] before:w-[300px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[120px] after:w-[180px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:h-[300px] sm:before:w-[480px] sm:after:h-[180px] sm:after:w-[240px] lg:before:h-[360px] z-[-1]">
          <h1 className="text-4xl font-bold text-center sm:text-5xl lg:text-6xl">
            안녕하세요!
          </h1>
        </div>
      </div>

      {/* 카드 그리드 섹션 - 모바일 최적화 */}
      <div className="mb-16 grid w-full max-w-5xl grid-cols-1 gap-4 text-center sm:mb-24 sm:grid-cols-2 lg:mb-32 lg:grid-cols-4 lg:text-left">
        <div className="group rounded-lg border border-transparent px-4 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 sm:px-5 touch-target active:scale-95">
          <h2 className="mb-3 text-xl font-semibold sm:text-2xl">
            Next.js{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 text-xs opacity-50 sm:text-sm">
            React 기반의 풀스택 웹 프레임워크입니다.
          </p>
        </div>

        <div className="group rounded-lg border border-transparent px-4 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 sm:px-5 touch-target active:scale-95">
          <h2 className="mb-3 text-xl font-semibold sm:text-2xl">
            TypeScript{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 text-xs opacity-50 sm:text-sm">
            타입 안전성을 제공하는 JavaScript 확장 언어입니다.
          </p>
        </div>

        <div className="group rounded-lg border border-transparent px-4 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 sm:px-5 touch-target active:scale-95">
          <h2 className="mb-3 text-xl font-semibold sm:text-2xl">
            Tailwind CSS{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 text-xs opacity-50 sm:text-sm">
            유틸리티 우선의 CSS 프레임워크입니다.
          </p>
        </div>

        <div className="group rounded-lg border border-transparent px-4 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 sm:px-5 touch-target active:scale-95">
          <h2 className="mb-3 text-xl font-semibold sm:text-2xl">
            App Router{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 text-xs opacity-50 sm:text-sm">
            Next.js 13+의 새로운 라우팅 시스템입니다.
          </p>
        </div>
      </div>

      {/* 모바일 전용 추가 섹션 */}
      <div className="w-full max-w-5xl px-4 py-8 text-center lg:hidden">
        <div className="rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-white">
          <h3 className="mb-2 text-lg font-semibold">모바일 최적화</h3>
          <p className="text-sm opacity-90">
            이 사이트는 모바일 기기에서도 최적화된 경험을 제공합니다.
          </p>
        </div>
      </div>
    </main>
  )
}
