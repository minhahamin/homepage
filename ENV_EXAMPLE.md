# 🔐 환경 변수 설정 가이드

## 📝 .env.local 파일 생성

프로젝트 루트에 `.env.local` 파일을 만들고 아래 내용을 복사하세요:

```env
# Stripe API 키 설정
# 1. https://stripe.com 에서 회원가입 (사업자 등록 불필요!)
# 2. Dashboard > Developers > API keys
# 3. "Viewing test data" 모드 확인
# 4. 아래 값을 실제 발급받은 키로 교체

# Publishable Key (pk_test_로 시작) - 클라이언트에서 사용
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_여기에_발급받은_퍼블리셔블_키_입력

# Secret Key (sk_test_로 시작) - 서버에서만 사용
STRIPE_SECRET_KEY=sk_test_여기에_발급받은_시크릿_키_입력
```

## ⚠️ 주의사항

- `.env.local` 파일은 Git에 자동으로 제외됩니다
- 환경 변수 변경 시 반드시 서버를 재시작하세요
- `NEXT_PUBLIC_` 접두사가 있는 변수만 클라이언트에서 접근 가능
- Secret Key는 절대 클라이언트 코드에 노출하지 마세요

## 🚀 적용 방법

1. 위 내용을 복사해서 `.env.local` 파일에 붙여넣기
2. Stripe에서 발급받은 키로 교체
3. 파일 저장
4. 개발 서버 재시작: `npm run dev`

## 📍 파일 위치

```
프로젝트_루트/
├── .env.local          ← 여기에 생성!
├── package.json
├── README.md
└── src/
```

## 🔗 관련 문서

자세한 내용은 `STRIPE_SETUP.md` 파일을 참고하세요!

