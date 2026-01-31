# HighFlood 프로젝트 문서

## 📚 문서 목록

이 폴더에는 HighFlood 프로젝트의 React 구조, 컴포넌트, 데이터 흐름에 대한 상세한 문서가 포함되어 있습니다.

---

## 문서 구성

### 1. [React 아키텍처](./react-architecture.md)
**내용:**
- 프로젝트 개요 및 기술 스택
- 전체 프로젝트 구조 및 디렉토리 설명
- 애플리케이션 실행 흐름 (HTML → main.tsx → App.tsx → 컴포넌트)
- 컴포넌트 계층 구조
- DOM 렌더링 과정 (Render Phase, Commit Phase)
- 성능 최적화 전략
- 빌드 및 배포 프로세스

**추천 대상:**
- 프로젝트 전체 구조를 파악하고 싶은 개발자
- React 애플리케이션의 실행 흐름을 이해하고 싶은 개발자
- 새로운 팀원 온보딩

---

### 2. [컴포넌트 상세](./components.md)
**내용:**
- 모든 컴포넌트의 상세 설명
  - 레이아웃 컴포넌트 (MainLayout)
  - 섹션 컴포넌트 (Hero, ServiceOverview, PortfolioGrid, TechStack, ContactForm)
  - 공통 컴포넌트 (Button, Input, TextArea)
  - 네비게이션 컴포넌트 (Navbar, Footer)
- 각 컴포넌트의 Props, 구조, 기능
- 애니메이션 패턴
- 컴포넌트 재사용 패턴

**추천 대상:**
- 개별 컴포넌트의 동작 방식을 이해하고 싶은 개발자
- 새로운 컴포넌트를 추가하거나 수정하려는 개발자
- UI/UX 개선 작업을 하는 개발자

---

### 3. [데이터 흐름 및 상태 관리](./data-flow.md)
**내용:**
- 단방향 데이터 흐름 개요
- 데이터 소스 분류 (정적 데이터, 동적 데이터, 사용자 입력)
- 상태 관리 전략 (로컬 상태, 폼 상태)
- 이벤트 처리 흐름 (스크롤, 클릭, 폼 제출)
- API 통신 (Supabase)
- 폼 데이터 처리 (React Hook Form + Zod)

**추천 대상:**
- 데이터가 어떻게 흐르는지 이해하고 싶은 개발자
- 상태 관리 로직을 수정하거나 추가하려는 개발자
- API 통신 및 폼 처리를 담당하는 개발자

---

## 빠른 시작 가이드

### 프로젝트 이해하기
1. **먼저 읽기**: [React 아키텍처](./react-architecture.md)
   - 프로젝트 전체 구조 파악
   - 실행 흐름 이해

2. **다음 읽기**: [컴포넌트 상세](./components.md)
   - 각 컴포넌트의 역할 이해
   - 컴포넌트 간 관계 파악

3. **마지막 읽기**: [데이터 흐름 및 상태 관리](./data-flow.md)
   - 데이터가 어떻게 흐르는지 이해
   - 상태 관리 및 이벤트 처리 파악

---

## 주요 개념 요약

### 프로젝트 구조
```
highflood/
├── src/
│   ├── main.tsx              # JavaScript 엔트리 포인트
│   ├── App.tsx               # 루트 컴포넌트
│   ├── components/           # 모든 컴포넌트
│   │   ├── layouts/          # 레이아웃
│   │   ├── sections/         # 섹션
│   │   └── common/           # 공통 컴포넌트
│   ├── types/                # TypeScript 타입
│   ├── constants/            # 상수
│   ├── data/                 # 정적 데이터
│   └── lib/                  # 유틸리티
└── docs/                     # 📚 이 문서들
```

### 실행 흐름
```
index.html
  ↓
main.tsx (createRoot, render)
  ↓
App.tsx
  ↓
MainLayout
  ├── Navbar
  ├── Hero
  ├── ServiceOverview
  ├── PortfolioGrid
  ├── TechStack
  ├── ContactForm
  └── Footer
```

### 기술 스택
- **React 19.2.0**: UI 라이브러리
- **TypeScript**: 정적 타입 검사
- **Vite**: 빌드 도구
- **Tailwind CSS 4.x**: 스타일링
- **Framer Motion**: 애니메이션
- **React Hook Form + Zod**: 폼 처리 및 검증
- **Supabase**: 백엔드 (데이터베이스, 스토리지)

---

## 개발 명령어

### 개발 서버 실행
```bash
npm run dev
```
- 로컬 개발 서버 시작 (http://localhost:5173)
- HMR(Hot Module Replacement) 활성화

### 프로덕션 빌드
```bash
npm run build
```
- TypeScript 컴파일
- Vite 빌드 실행
- `dist/` 폴더에 최적화된 파일 생성

### 빌드 미리보기
```bash
npm run preview
```
- 프로덕션 빌드 결과물 로컬에서 확인

### 린트 검사
```bash
npm run lint
```
- ESLint로 코드 품질 검사

---

## 주요 파일 설명

### 설정 파일
- **vite.config.ts**: Vite 빌드 설정
- **tsconfig.json**: TypeScript 설정
- **package.json**: 프로젝트 의존성 및 스크립트
- **.env**: 환경 변수 (Supabase URL, API Key 등)

### 엔트리 파일
- **index.html**: HTML 엔트리 포인트
- **src/main.tsx**: JavaScript 엔트리 포인트
- **src/App.tsx**: React 루트 컴포넌트

### 스타일 파일
- **src/index.css**: 글로벌 스타일, Tailwind CSS 설정, 커스텀 테마

---

## 컴포넌트 계층 구조

```
App
└── MainLayout
    ├── Navbar
    │   └── (네비게이션 링크, 모바일 메뉴)
    │
    ├── main (children)
    │   ├── Hero
    │   │   └── (히어로 콘텐츠, CTA 버튼)
    │   │
    │   ├── ServiceOverview
    │   │   └── (서비스 카드 x3)
    │   │
    │   ├── PortfolioGrid
    │   │   ├── (필터 버튼)
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

## 데이터 흐름 개요

### 정적 데이터
- **위치**: `src/constants/`, `src/data/`
- **사용**: Navbar, Footer, ServiceOverview, PortfolioGrid

### 사용자 입력 데이터
- **위치**: ContactForm 컴포넌트
- **흐름**: 입력 → 검증 (Zod) → API 호출 (Supabase) → 저장

### 상태 관리
- **로컬 상태**: `useState` (Navbar, PortfolioGrid)
- **폼 상태**: React Hook Form (ContactForm)

---

## 애니메이션 패턴

### Framer Motion 사용
```tsx
// 페이드인 + 슬라이드
<motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
>

// 순차 애니메이션
const containerVariants = {
    visible: {
        transition: { staggerChildren: 0.2 }
    }
};

// 호버 애니메이션
<motion.div whileHover={{ scale: 1.05, y: -8 }}>
```

---

## 스타일링 시스템

### 커스텀 색상 (Tailwind CSS)
```css
--color-deep-blue: #0f172a;           /* 메인 배경 */
--color-deep-blue-light: #1e293b;     /* 보조 배경 */
--color-electric-blue: #3b82f6;       /* 강조 색상 */
--color-electric-blue-light: #60a5fa; /* 강조 색상 (밝음) */
--color-slate-grey: #475569;          /* 보조 색상 */
```

### 사용 예시
```tsx
<div className="bg-deep-blue text-white">
    <button className="bg-electric-blue hover:bg-electric-blue-dark">
        버튼
    </button>
</div>
```

---

## API 통신

### Supabase 설정
```typescript
// src/lib/supabase.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
```

### 사용 예시
```typescript
// ContactForm에서
const { data, error } = await supabase
    .from('contacts')
    .insert([{ ...formData }]);
```

---

## 폼 처리

### React Hook Form + Zod
```typescript
// 스키마 정의
const contactSchema = z.object({
    name: z.string().min(2, '이름을 입력해주세요'),
    email: z.string().email('올바른 이메일을 입력해주세요'),
    // ...
});

// 폼 설정
const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
});

// 제출 처리
const onSubmit = async (data: ContactFormData) => {
    await supabase.from('contacts').insert([data]);
};
```

---

## 성능 최적화

### Vite 빌드 최적화
- 자동 코드 스플리팅
- Tree shaking
- 최소화 (Minification)

### React 최적화
- `React.memo` (필요시)
- `useCallback`, `useMemo` (필요시)
- 조건부 렌더링

### CSS 최적화
- Tailwind CSS의 PurgeCSS
- 미사용 스타일 자동 제거

---

## 추가 리소스

### 공식 문서
- [React 공식 문서](https://react.dev/)
- [Vite 공식 문서](https://vitejs.dev/)
- [Tailwind CSS 공식 문서](https://tailwindcss.com/)
- [Framer Motion 공식 문서](https://www.framer.com/motion/)
- [React Hook Form 공식 문서](https://react-hook-form.com/)
- [Zod 공식 문서](https://zod.dev/)
- [Supabase 공식 문서](https://supabase.com/docs)

### 프로젝트 관련
- [GitHub Repository](https://github.com/hsboy89/highflood)
- [Live Website](https://highflood.dev)

---

## 문서 업데이트

### 최종 업데이트
- **날짜**: 2026-01-29
- **버전**: 1.0.0

### 문서 작성자
- HighFlood 개발팀

---

## 피드백 및 기여

문서에 오류가 있거나 개선 사항이 있다면 이슈를 등록하거나 PR을 보내주세요.

**연락처**: highflood.video@gmail.com
