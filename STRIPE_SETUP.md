# 💳 Stripe 결제 연동 가이드

## 📋 개요

이 프로젝트는 Stripe를 사용하여 실제 결제 흐름을 테스트할 수 있습니다.
**사업자 등록 없이도** 이메일만으로 테스트 가능합니다!

## 🚀 빠른 시작

### 1단계: Stripe 회원가입 (5분)

1. **Stripe 홈페이지 접속**
   ```
   https://stripe.com
   ```

2. **"Start now" 또는 "시작하기" 클릭**
   - 이메일, 이름, 국가 입력
   - **사업자 등록번호 불필요!**
   - 개인 정보만으로 가입 가능

3. **이메일 인증 완료**
   - 받은 메일에서 인증 링크 클릭

4. **로그인**

### 2단계: API 키 발급 (1분)

1. **Dashboard 접속**
   - 로그인 후 자동으로 Dashboard로 이동

2. **Developers 메뉴 클릭**
   - 우측 상단 또는 좌측 메뉴에서 "Developers" 클릭

3. **API keys 선택**
   - Developers > API keys

4. **테스트 모드 확인**
   - 좌측 상단에 "Viewing **test data**" 토글이 켜져 있는지 확인
   - 꺼져있다면 클릭해서 테스트 모드로 전환

5. **API 키 복사**
   ```
   Publishable key: pk_test_로 시작하는 긴 문자열
   예: pk_test_51AbC123dEf456GhI789jKl...
   
   Secret key: sk_test_로 시작하는 긴 문자열 (Reveal 클릭 필요)
   예: sk_test_51AbC123dEf456GhI789jKl...
   ```

### 3단계: 프로젝트에 API 키 적용 (2분)

1. **환경 변수 파일 생성**
   
   프로젝트 루트 폴더에서:
   
   **Windows (PowerShell)**:
   ```powershell
   New-Item .env.local -ItemType File
   ```
   
   **Mac/Linux**:
   ```bash
   touch .env.local
   ```
   
   또는 VS Code에서:
   - 좌측 파일 탐색기에서 프로젝트 루트 우클릭
   - "New File" 클릭
   - 파일명: `.env.local` 입력

2. **API 키 입력**
   
   `.env.local` 파일을 열고 다음 내용 입력:
   ```env
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_여기에_퍼블리셔블_키_붙여넣기
   STRIPE_SECRET_KEY=sk_test_여기에_시크릿_키_붙여넣기
   ```
   
   ⚠️ **중요**:
   - 공백이나 따옴표 없이 입력
   - 두 개의 키 모두 필요 (Publishable + Secret)
   - `NEXT_PUBLIC_` 접두사 정확히 입력

3. **파일 저장** (Ctrl+S)

4. **개발 서버 재시작**
   ```bash
   # 터미널에서 Ctrl+C로 서버 중지 후
   npm run dev
   ```

### 4단계: 테스트하기 (2분)

1. **구매 페이지로 이동**
   ```
   http://localhost:3000/purchase
   ```

2. **"Stripe 결제" 선택**

3. **구매 정보 입력**
   - 이름: 홍길동
   - 전화번호: 010-1234-5678
   - 이메일: test@example.com
   - 주소: 서울시 강남구...

4. **"🔒 Stripe로 결제하기" 버튼 클릭**
   - Stripe Checkout 페이지로 자동 이동

5. **테스트 카드 정보 입력**
   ```
   카드번호: 4242 4242 4242 4242
   유효기간: 12/25 (미래 날짜 아무거나)
   CVC: 123
   우편번호: 12345
   ```

6. **Pay 버튼 클릭**

7. **성공!** 🎉
   - 결제 성공 페이지로 자동 리다이렉트
   - 주문 정보 확인 가능

## 🎨 Stripe의 장점

### ✅ 개발자 친화적
- 사업자 등록 불필요
- 5분 내 연동 가능
- 훌륭한 문서와 예제

### ✅ 아름다운 UI
- Stripe Checkout은 자동으로 예쁜 결제 UI 제공
- 다국어 자동 지원
- 모바일 최적화

### ✅ 강력한 기능
- 실시간 결제 처리
- 환불 기능
- Webhook 지원
- Dashboard에서 모든 거래 확인

### ✅ 글로벌 표준
- 전 세계 수백만 기업 사용
- 보안성 검증됨
- 지속적인 업데이트

## 🔍 문제 해결

### Q1: "Invalid API Key" 에러가 발생해요
**답변**: 
- `.env.local` 파일이 프로젝트 루트에 있는지 확인
- 환경 변수명이 정확한지 확인 (`NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`, `STRIPE_SECRET_KEY`)
- Stripe Dashboard에서 다시 키를 확인
- "Viewing test data" 모드가 켜져 있는지 확인
- 개발 서버를 재시작했는지 확인

### Q2: Checkout 페이지로 이동하지 않아요
**답변**: 
- 브라우저 콘솔(F12)에서 에러 메시지 확인
- 환경 변수가 제대로 로드되었는지 확인
- API Route가 정상 작동하는지 확인 (`/api/create-checkout-session`)

### Q3: 결제 후 성공 페이지가 안 떠요
**답변**: 
- URL에 `session_id` 파라미터가 있는지 확인
- 브라우저 콘솔에서 에러 확인

### Q4: 실제 돈이 결제되나요?
**답변**: 아니요!
- **테스트 모드**에서는 실제 결제가 발생하지 않습니다
- 테스트 카드는 시뮬레이션용입니다
- Stripe Dashboard에서 "Viewing test data"가 켜져 있으면 안전합니다

## 📚 Stripe 테스트 카드

### 기본 성공 카드
```
카드번호: 4242 4242 4242 4242
유효기간: 미래 날짜 아무거나
CVC: 아무 3자리 숫자
```

### 다양한 시나리오 테스트

| 카드번호 | 결과 |
|---------|-----|
| 4242 4242 4242 4242 | 성공 ✅ |
| 4000 0000 0000 0002 | 카드 거절 ❌ |
| 4000 0000 0000 9995 | 잔액 부족 ❌ |
| 4000 0025 0000 3155 | 3D Secure 인증 필요 🔐 |

## 📱 Stripe Dashboard 활용

로그인 후 Dashboard에서:
- ✅ **Payments**: 모든 테스트 결제 내역 확인
- ✅ **Customers**: 고객 정보 관리
- ✅ **Products**: 제품 정보 관리
- ✅ **Logs**: API 호출 로그 확인

## 🎯 다음 단계

Stripe 연동이 완료되었다면:

1. ✅ 다양한 테스트 카드로 시나리오 테스트
2. ✅ Stripe Dashboard에서 거래 내역 확인
3. ✅ 환불 기능 추가 고려
4. ✅ Webhook 설정 (실시간 결제 상태 업데이트)
5. ✅ 프로덕션 배포 (실제 API 키로 전환)

## ⚠️ 보안 주의사항

1. **API 키 공개 금지**
   - `.env.local`은 자동으로 Git에서 제외됨
   - 절대 코드에 직접 키를 입력하지 마세요
   - GitHub에 올라간 경우 즉시 키를 Regenerate 하세요

2. **테스트/프로덕션 키 구분**
   - 개발: `pk_test_`, `sk_test_` (테스트 키)
   - 배포: `pk_live_`, `sk_live_` (라이브 키)

3. **Vercel 배포 시**
   - Settings > Environment Variables
   - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` 추가
   - `STRIPE_SECRET_KEY` 추가
   - Environment: Production, Preview 모두 선택

## 📚 참고 자료

- Stripe 공식 문서: https://stripe.com/docs
- Checkout Session: https://stripe.com/docs/payments/checkout
- 테스트 카드: https://stripe.com/docs/testing
- Next.js 연동 가이드: https://stripe.com/docs/payments/checkout/how-checkout-works

---

궁금한 점이 있으시면 Stripe 공식 문서를 참고하거나,
Dashboard의 Support를 이용하세요! 🚀

