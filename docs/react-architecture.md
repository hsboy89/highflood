# HighFlood React 아키텍처 문서

## 📋 목차
1. [프로젝트 개요](#프로젝트-개요)
2. [기술 스택](#기술-스택)
3. [프로젝트 구조](#프로젝트-구조)
4. [애플리케이션 실행 흐름](#애플리케이션-실행-흐름)
5. [컴포넌트 계층 구조](#컴포넌트-계층-구조)
6. [DOM 렌더링 과정](#dom-렌더링-과정)
7. [상태 관리 및 이벤트 처리](#상태-관리-및-이벤트-처리)

---

## 프로젝트 개요

**HighFlood**는 웹 솔루션 전문 기업의 포트폴리오 웹사이트로, React 19.2.0과 Vite 빌드 도구를 사용하여 구축된 현대적인 SPA(Single Page Application)입니다.

### 주요 특징
- ⚡ **Vite**: 빠른 개발 서버와 HMR(Hot Module Replacement)
- 🎨 **Tailwind CSS 4.x**: 유틸리티 기반 스타일링
- 🎭 **Framer Motion**: 부드러운 애니메이션 및 전환 효과
- 📱 **반응형 디자인**: 모바일부터 데스크톱까지 최적화
- 🎯 **TypeScript**: 타입 안정성 및 개발자 경험 향상

---

## 기술 스택

### 핵심 라이브러리
```json
{
  "react": "^19.2.0",
  "react-dom": "^19.2.0",
  "framer-motion": "^12.29.0",
  "tailwindcss": "^4.1.18",
  "lucide-react": "^0.563.0",
  "react-hook-form": "^7.71.1",
  "zod": "^4.3.6",
  "@supabase/supabase-js": "^2.91.1"
}
```

### 개발 도구
- **Vite**: 빌드 도구 및 개발 서버
- **TypeScript**: 정적 타입 검사
- **ESLint**: 코드 품질 관리

---

## 프로젝트 구조

```
highflood/
├── index.html                 # HTML 엔트리 포인트
├── vite.config.ts            # Vite 설정
├── tsconfig.json             # TypeScript 설정
├── package.json              # 프로젝트 의존성
│
├── src/
│   ├── main.tsx              # JavaScript 엔트리 포인트
│   ├── App.tsx               # 루트 컴포넌트
│   ├── index.css             # 글로벌 스타일 및 테마
│   │
│   ├── components/           # 컴포넌트 디렉토리
│   │   ├── layouts/          # 레이아웃 컴포넌트
│   │   │   └── MainLayout.tsx
│   │   │
│   │   ├── sections/         # 섹션 컴포넌트
│   │   │   ├── Hero.tsx
│   │   │   ├── ServiceOverview.tsx
│   │   │   ├── PortfolioGrid.tsx
│   │   │   ├── TechStack.tsx
│   │   │   ├── ContactForm.tsx
│   │   │   └── index.ts
│   │   │
│   │   ├── common/           # 공통 컴포넌트
│   │   │   ├── Button.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── TextArea.tsx
│   │   │   └── index.ts
│   │   │
│   │   ├── Navbar.tsx        # 네비게이션 바
│   │   ├── Footer.tsx        # 푸터
│   │   └── PortfolioCard.tsx # 포트폴리오 카드
│   │
│   ├── types/                # TypeScript 타입 정의
│   │   └── index.ts
│   │
│   ├── constants/            # 상수 정의
│   │   └── index.ts
│   │
│   ├── data/                 # 정적 데이터
│   │   └── portfolio.ts
│   │
│   └── lib/                  # 유틸리티 및 설정
│       └── supabase.ts
│
└── public/                   # 정적 자산
```

### 디렉토리 설명

#### `components/layouts/`
페이지 전체 레이아웃을 담당하는 컴포넌트들이 위치합니다.
- **MainLayout.tsx**: Navbar, Footer를 포함한 메인 레이아웃

#### `components/sections/`
페이지의 주요 섹션들을 구성하는 컴포넌트들입니다.
- **Hero.tsx**: 히어로 섹션 (메인 배너)
- **ServiceOverview.tsx**: 서비스 소개 섹션
- **PortfolioGrid.tsx**: 포트폴리오 그리드 섹션
- **TechStack.tsx**: 기술 스택 섹션
- **ContactForm.tsx**: 문의 폼 섹션

#### `components/common/`
재사용 가능한 공통 UI 컴포넌트들입니다.
- **Button.tsx**: 버튼 컴포넌트
- **Input.tsx**: 입력 필드 컴포넌트
- **TextArea.tsx**: 텍스트 영역 컴포넌트

---

## 애플리케이션 실행 흐름

### 1️⃣ HTML 엔트리 포인트 (`index.html`)

```html
<!doctype html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>HighFlood | 웹 솔루션 전문 기업</title>
    <!-- SEO 메타 태그들 -->
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

**역할:**
- 브라우저가 가장 먼저 로드하는 파일
- `<div id="root"></div>`: React 앱이 마운트될 DOM 노드
- `<script type="module" src="/src/main.tsx">`: JavaScript 엔트리 포인트 로드

---

### 2️⃣ JavaScript 엔트리 포인트 (`main.tsx`)

```tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

**실행 순서:**
1. **CSS 임포트**: `index.css` 로드 (글로벌 스타일, Tailwind CSS)
2. **App 컴포넌트 임포트**: 루트 컴포넌트 가져오기
3. **createRoot**: React 18+ 방식의 루트 생성
   - `document.getElementById('root')`: HTML의 `#root` 요소 선택
4. **render**: React 컴포넌트 트리를 DOM에 렌더링
   - `<StrictMode>`: 개발 모드에서 잠재적 문제 감지

---

### 3️⃣ 루트 컴포넌트 (`App.tsx`)

```tsx
import MainLayout from './components/layouts/MainLayout';
import {
  Hero,
  ServiceOverview,
  PortfolioGrid,
  TechStack,
  ContactForm
} from './components/sections';

function App() {
  return (
    <MainLayout>
      <Hero />
      <ServiceOverview />
      <PortfolioGrid />
      <TechStack />
      <ContactForm />
    </MainLayout>
  );
}

export default App;
```

**역할:**
- 애플리케이션의 최상위 컴포넌트
- `MainLayout`으로 전체 레이아웃 구성
- 5개의 주요 섹션 컴포넌트를 순서대로 배치

---

### 4️⃣ 메인 레이아웃 (`MainLayout.tsx`)

```tsx
import Navbar from '../Navbar';
import Footer from '../Footer';

interface MainLayoutProps {
    children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
    return (
        <div className="min-h-screen bg-deep-blue">
            <Navbar />
            <main>{children}</main>
            <Footer />
        </div>
    );
}
```

**구조:**
- **Navbar**: 상단 고정 네비게이션
- **main**: 페이지 콘텐츠 (children props로 전달받음)
- **Footer**: 하단 푸터

---

## 컴포넌트 계층 구조

```
App (루트)
│
└── MainLayout
    ├── Navbar
    │   └── (모바일 메뉴, 네비게이션 링크)
    │
    ├── main (children)
    │   ├── Hero
    │   │   └── (애니메이션, 스크롤 버튼)
    │   │
    │   ├── ServiceOverview
    │   │   └── (서비스 카드 x3)
    │   │
    │   ├── PortfolioGrid
    │   │   └── PortfolioCard (다수)
    │   │
    │   ├── TechStack
    │   │   └── (기술 스택 아이템들)
    │   │
    │   └── ContactForm
    │       ├── Input (다수)
    │       ├── TextArea
    │       └── Button
    │
    └── Footer
        └── (링크, 연락처 정보)
```

---

## DOM 렌더링 과정

### 초기 렌더링 플로우

```
1. 브라우저가 index.html 파싱
   ↓
2. <div id="root"></div> DOM 노드 생성
   ↓
3. main.tsx 스크립트 실행
   ↓
4. React가 가상 DOM 트리 생성
   ↓
5. createRoot()로 React 루트 생성
   ↓
6. render()로 가상 DOM을 실제 DOM에 커밋
   ↓
7. 브라우저가 DOM을 화면에 페인팅
```

### 상세 렌더링 단계

#### Phase 1: Render Phase (순수 계산)
```
App 컴포넌트 호출
  ↓
MainLayout 컴포넌트 호출
  ↓
Navbar, Hero, ServiceOverview... 컴포넌트 호출
  ↓
각 컴포넌트의 JSX를 React 엘리먼트로 변환
  ↓
가상 DOM 트리 구성
```

#### Phase 2: Commit Phase (DOM 조작)
```
가상 DOM과 실제 DOM 비교 (Reconciliation)
  ↓
변경사항 계산 (Diffing)
  ↓
실제 DOM 업데이트 (최소한의 변경만)
  ↓
useEffect 등 사이드 이펙트 실행
```

### 실제 DOM 구조 예시

```html
<div id="root">
  <div class="min-h-screen bg-deep-blue">
    <!-- Navbar -->
    <nav class="fixed top-0 left-0 right-0 z-50">
      <!-- 네비게이션 내용 -->
    </nav>
    
    <!-- Main Content -->
    <main>
      <!-- Hero Section -->
      <section id="home" class="...">
        <!-- 히어로 콘텐츠 -->
      </section>
      
      <!-- ServiceOverview Section -->
      <section id="services" class="...">
        <!-- 서비스 카드들 -->
      </section>
      
      <!-- PortfolioGrid Section -->
      <section id="portfolio" class="...">
        <!-- 포트폴리오 카드들 -->
      </section>
      
      <!-- TechStack Section -->
      <section id="tech" class="...">
        <!-- 기술 스택 아이템들 -->
      </section>
      
      <!-- ContactForm Section -->
      <section id="contact" class="...">
        <!-- 문의 폼 -->
      </section>
    </main>
    
    <!-- Footer -->
    <footer class="...">
      <!-- 푸터 내용 -->
    </footer>
  </div>
</div>
```

---

## 상태 관리 및 이벤트 처리

### 1. Navbar 컴포넌트의 상태 관리

```tsx
export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    // ...
}
```

**상태:**
- `isScrolled`: 스크롤 위치에 따른 네비게이션 스타일 변경
- `isMobileMenuOpen`: 모바일 메뉴 열림/닫힘 상태

**이벤트 처리:**
1. 컴포넌트 마운트 시 `useEffect` 실행
2. `scroll` 이벤트 리스너 등록
3. 스크롤 시 `handleScroll` 함수 호출
4. `window.scrollY > 50`이면 `isScrolled` 상태 업데이트
5. 상태 변경 → 리렌더링 → 스타일 변경

### 2. 스무스 스크롤 네비게이션

```tsx
const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};
```

**동작 흐름:**
1. 네비게이션 링크 클릭
2. `scrollToSection('#services')` 호출
3. 모바일 메뉴 닫기
4. DOM에서 `#services` 요소 찾기
5. `scrollIntoView`로 부드럽게 스크롤

### 3. Framer Motion 애니메이션

```tsx
<motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
>
    {/* 콘텐츠 */}
</motion.div>
```

**애니메이션 단계:**
1. **초기 상태** (`initial`): 투명하고 아래로 30px 이동
2. **뷰포트 진입** (`whileInView`): 요소가 화면에 보이면
3. **최종 상태**: 불투명하고 원래 위치로 (0.6초 동안)
4. **once: true**: 한 번만 애니메이션 실행

### 4. ContactForm의 폼 처리

```tsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
});

const onSubmit = async (data: ContactFormData) => {
    // Supabase에 데이터 저장
    const { error } = await supabase
        .from('contacts')
        .insert([data]);
    // ...
};
```

**폼 처리 흐름:**
1. 사용자가 폼 입력
2. `react-hook-form`이 입력값 추적
3. 제출 시 `zod` 스키마로 유효성 검증
4. 검증 통과 시 `onSubmit` 함수 실행
5. Supabase에 데이터 저장
6. 성공/실패 메시지 표시

---

## 성능 최적화

### 1. 코드 스플리팅
- Vite가 자동으로 청크 분할
- 동적 import 사용 가능

### 2. 이미지 최적화
- Supabase Storage 사용
- 적절한 이미지 포맷 및 크기

### 3. CSS 최적화
- Tailwind CSS의 PurgeCSS로 미사용 스타일 제거
- 프로덕션 빌드 시 최소화

### 4. React 최적화
- `React.memo`로 불필요한 리렌더링 방지 (필요시)
- `useCallback`, `useMemo` 훅 활용 (필요시)

---

## 빌드 및 배포

### 개발 서버 실행
```bash
npm run dev
```
- Vite 개발 서버 시작
- HMR(Hot Module Replacement) 활성화
- 기본 포트: 5173

### 프로덕션 빌드
```bash
npm run build
```
1. TypeScript 컴파일 (`tsc -b`)
2. Vite 빌드 실행
3. `dist/` 폴더에 최적화된 파일 생성
   - HTML, CSS, JS 최소화
   - 해시된 파일명 (캐싱 최적화)
   - 소스맵 생성

### 빌드 결과물
```
dist/
├── index.html
├── assets/
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── [images]
└── ...
```

---

## 주요 설정 파일

### `vite.config.ts`
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

### `index.css` (디자인 시스템)
```css
@theme {
  --color-deep-blue: #0f172a;
  --color-electric-blue: #3b82f6;
  /* ... */
}
```

**커스텀 색상:**
- `deep-blue`: 메인 배경색
- `electric-blue`: 강조 색상
- `slate-grey`: 보조 색상

---

## 요약

1. **엔트리 포인트**: `index.html` → `main.tsx` → `App.tsx`
2. **컴포넌트 구조**: 레이아웃 → 섹션 → 공통 컴포넌트
3. **렌더링**: React 가상 DOM → 실제 DOM 업데이트
4. **상태 관리**: `useState`, `useEffect` 훅 사용
5. **애니메이션**: Framer Motion으로 부드러운 전환
6. **스타일링**: Tailwind CSS 유틸리티 클래스
7. **빌드**: Vite로 빠른 개발 및 최적화된 프로덕션 빌드
