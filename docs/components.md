# 컴포넌트 상세 문서

## 📋 목차
1. [레이아웃 컴포넌트](#레이아웃-컴포넌트)
2. [섹션 컴포넌트](#섹션-컴포넌트)
3. [공통 컴포넌트](#공통-컴포넌트)
4. [네비게이션 컴포넌트](#네비게이션-컴포넌트)

---

## 레이아웃 컴포넌트

### MainLayout

**파일 경로**: `src/components/layouts/MainLayout.tsx`

#### 목적
전체 페이지의 기본 레이아웃을 제공하며, Navbar, Footer, 그리고 메인 콘텐츠 영역을 구성합니다.

#### Props
```typescript
interface MainLayoutProps {
    children: React.ReactNode;
}
```

#### 구조
```tsx
<div className="min-h-screen bg-deep-blue">
    <Navbar />
    <main>{children}</main>
    <Footer />
</div>
```

#### 특징
- **최소 높이**: `min-h-screen`으로 전체 화면 높이 보장
- **배경색**: `bg-deep-blue` (커스텀 색상 #0f172a)
- **children**: App.tsx에서 전달받은 모든 섹션 컴포넌트

---

## 섹션 컴포넌트

### 1. Hero

**파일 경로**: `src/components/sections/Hero.tsx`

#### 목적
웹사이트의 첫 화면(히어로 섹션)으로, 회사 소개와 주요 CTA를 제공합니다.

#### 주요 기능
```tsx
const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};

const scrollToServices = () => {
    const element = document.querySelector('#services');
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};
```

#### 구성 요소
1. **메인 헤드라인**: 회사명과 슬로건
2. **서브 텍스트**: 회사 설명
3. **CTA 버튼들**:
   - "프로젝트 시작하기" → Contact 섹션으로 스크롤
   - "서비스 알아보기" → Services 섹션으로 스크롤
4. **스크롤 인디케이터**: ChevronDown 아이콘으로 아래로 스크롤 유도

#### 애니메이션
```tsx
<motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
>
```
- 페이지 로드 시 페이드인 + 위로 슬라이드 효과

---

### 2. ServiceOverview

**파일 경로**: `src/components/sections/ServiceOverview.tsx`

#### 목적
회사가 제공하는 3가지 주요 서비스를 소개합니다.

#### 서비스 데이터 구조
```typescript
const services = [
    {
        icon: Code2,  // lucide-react 아이콘
        title: '웹 어플리케이션 개발',
        description: 'React, FastAPI 기반의 현대적인 웹 애플리케이션...',
        features: ['React / Next.js', 'FastAPI / Node.js', ...]
    },
    // ... 2개 더
];
```

#### 애니메이션 설정
```typescript
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,  // 자식 요소 순차 애니메이션
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 },
    },
};
```

#### 렌더링 흐름
1. 섹션 헤더 애니메이션 (`whileInView`)
2. 서비스 카드 컨테이너 애니메이션
3. 각 서비스 카드 순차적으로 나타남 (0.2초 간격)

#### 카드 구조
```tsx
<motion.div variants={itemVariants} className="group ...">
    {/* Gradient Overlay on Hover */}
    <div className="absolute inset-0 bg-gradient-to-br ..." />
    
    {/* Icon */}
    <div className="w-14 h-14 bg-electric-blue/20 ...">
        <service.icon className="w-7 h-7 text-electric-blue" />
    </div>
    
    {/* Content */}
    <h3>{service.title}</h3>
    <p>{service.description}</p>
    
    {/* Features */}
    <ul>
        {service.features.map(...)}
    </ul>
</motion.div>
```

---

### 3. PortfolioGrid

**파일 경로**: `src/components/sections/PortfolioGrid.tsx`

#### 목적
회사의 포트폴리오 프로젝트들을 그리드 형태로 표시합니다.

#### 데이터 소스
```tsx
import { portfolioData } from '../../data/portfolio';
```

#### 필터링 기능
```tsx
const [activeFilter, setActiveFilter] = useState<string>('All');

const filteredProjects = portfolioData.filter(
    (item) => activeFilter === 'All' || item.category === activeFilter
);
```

#### 카테고리
- **All**: 전체 프로젝트
- **Web**: 웹 어플리케이션
- **System**: 산업용 시스템 (MES)
- **Dashboard**: 데이터 대시보드

#### 렌더링
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {filteredProjects.map((project) => (
        <PortfolioCard key={project.id} {...project} />
    ))}
</div>
```

---

### 4. TechStack

**파일 경로**: `src/components/sections/TechStack.tsx`

#### 목적
회사가 사용하는 기술 스택을 카테고리별로 표시합니다.

#### 기술 스택 구조
```typescript
const techStack = {
    Frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', ...],
    Backend: ['FastAPI', 'Node.js', 'Python', 'PostgreSQL', ...],
    DevOps: ['Docker', 'AWS', 'GitHub Actions', ...],
    AI: ['ONNX', 'TensorFlow', 'PyTorch', ...]
};
```

#### 렌더링 방식
```tsx
{Object.entries(techStack).map(([category, technologies]) => (
    <div key={category}>
        <h3>{category}</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {technologies.map((tech) => (
                <div className="bg-deep-blue-light p-4 rounded-lg">
                    {tech}
                </div>
            ))}
        </div>
    </div>
))}
```

---

### 5. ContactForm

**파일 경로**: `src/components/sections/ContactForm.tsx`

#### 목적
고객 문의를 받기 위한 폼을 제공하고, Supabase에 데이터를 저장합니다.

#### 폼 스키마 (Zod)
```typescript
import { z } from 'zod';

const contactSchema = z.object({
    name: z.string().min(2, '이름을 입력해주세요'),
    company: z.string().min(2, '회사명을 입력해주세요'),
    phone: z.string().regex(/^01[0-9]-?[0-9]{4}-?[0-9]{4}$/),
    email: z.string().email('올바른 이메일을 입력해주세요'),
    projectType: z.string(),
    budget: z.string(),
    description: z.string().min(10, '최소 10자 이상 입력해주세요'),
    privacyConsent: z.boolean().refine((val) => val === true)
});
```

#### React Hook Form 설정
```tsx
const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
        name: '',
        company: '',
        phone: '',
        email: '',
        projectType: '',
        budget: '',
        description: '',
        privacyConsent: false,
    },
});
```

#### 제출 처리
```tsx
const onSubmit = async (data: ContactFormData) => {
    try {
        const { error } = await supabase
            .from('contacts')
            .insert([{
                ...data,
                created_at: new Date().toISOString(),
            }]);

        if (error) throw error;
        
        // 성공 메시지 표시
        form.reset();
    } catch (error) {
        // 에러 처리
    }
};
```

#### 폼 필드
1. **이름** (Input)
2. **회사명** (Input)
3. **연락처** (Input)
4. **이메일** (Input)
5. **프로젝트 유형** (Select)
6. **예산** (Select)
7. **프로젝트 설명** (TextArea)
8. **개인정보 동의** (Checkbox)

---

## 공통 컴포넌트

### 1. Button

**파일 경로**: `src/components/common/Button.tsx`

#### Props
```typescript
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    children: React.ReactNode;
}
```

#### 변형 스타일
```tsx
const variants = {
    primary: 'bg-electric-blue hover:bg-electric-blue-dark text-white',
    secondary: 'bg-slate-grey hover:bg-slate-grey-light text-white',
    outline: 'border-2 border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-white',
};

const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
};
```

---

### 2. Input

**파일 경로**: `src/components/common/Input.tsx`

#### Props
```typescript
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}
```

#### 구조
```tsx
<div className="space-y-2">
    {label && <label>{label}</label>}
    <input
        className={`w-full px-4 py-3 bg-deep-blue-light border ${
            error ? 'border-red-500' : 'border-white/10'
        } rounded-lg ...`}
        {...props}
    />
    {error && <p className="text-red-500 text-sm">{error}</p>}
</div>
```

#### 특징
- 에러 상태에 따른 스타일 변경
- 레이블 옵션
- 모든 HTML input 속성 지원

---

### 3. TextArea

**파일 경로**: `src/components/common/TextArea.tsx`

#### Props
```typescript
interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    error?: string;
}
```

#### 구조
```tsx
<div className="space-y-2">
    {label && <label>{label}</label>}
    <textarea
        className={`w-full px-4 py-3 bg-deep-blue-light border ${
            error ? 'border-red-500' : 'border-white/10'
        } rounded-lg ...`}
        rows={5}
        {...props}
    />
    {error && <p className="text-red-500 text-sm">{error}</p>}
</div>
```

---

## 네비게이션 컴포넌트

### Navbar

**파일 경로**: `src/components/Navbar.tsx`

#### 상태 관리
```tsx
const [isScrolled, setIsScrolled] = useState(false);
const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
```

#### 스크롤 감지
```tsx
useEffect(() => {
    const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
}, []);
```

#### 동적 스타일
```tsx
<nav className={`fixed top-0 left-0 right-0 z-50 transition-all ${
    isScrolled
        ? 'bg-deep-blue/95 backdrop-blur-md shadow-lg'
        : 'bg-transparent'
}`}>
```

#### 네비게이션 링크
```tsx
import { NAV_LINKS } from '../constants';

// NAV_LINKS = [
//     { name: 'Home', href: '#home' },
//     { name: 'Services', href: '#services' },
//     ...
// ]

{NAV_LINKS.map((link) => (
    <motion.a
        key={link.name}
        href={link.href}
        onClick={(e) => {
            e.preventDefault();
            scrollToSection(link.href);
        }}
    >
        {link.name}
    </motion.a>
))}
```

#### 모바일 메뉴
```tsx
<AnimatePresence>
    {isMobileMenuOpen && (
        <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
        >
            {/* 모바일 메뉴 내용 */}
        </motion.div>
    )}
</AnimatePresence>
```

---

### Footer

**파일 경로**: `src/components/Footer.tsx`

#### 구성 요소
1. **회사 정보**
   - 로고
   - 회사 설명
   
2. **빠른 링크**
   - Home, Services, Portfolio, Contact
   
3. **연락처 정보**
   - 이메일
   - 전화번호
   - 주소

4. **저작권 정보**

#### 데이터 소스
```tsx
import { FOOTER_LINKS, CONTACT_INFO, COMPANY_INFO } from '../constants';
```

---

## PortfolioCard

**파일 경로**: `src/components/PortfolioCard.tsx`

#### Props
```typescript
interface PortfolioCardProps {
    id: number;
    title: string;
    category: 'Web' | 'System' | 'Dashboard';
    tech: string[];
    description: string;
    image: string;
    link?: string;
}
```

#### 구조
```tsx
<motion.div
    whileHover={{ y: -8 }}
    className="group relative bg-deep-blue-light rounded-xl overflow-hidden"
>
    {/* 이미지 */}
    <div className="aspect-video overflow-hidden">
        <img src={image} alt={title} className="group-hover:scale-110 transition-transform" />
    </div>
    
    {/* 콘텐츠 */}
    <div className="p-6">
        <span className="text-electric-blue text-sm">{category}</span>
        <h3 className="text-xl font-bold text-white mt-2">{title}</h3>
        <p className="text-white/60 mt-3">{description}</p>
        
        {/* 기술 스택 태그 */}
        <div className="flex flex-wrap gap-2 mt-4">
            {tech.map((t) => (
                <span key={t} className="px-3 py-1 bg-electric-blue/20 text-electric-blue-light rounded-full text-xs">
                    {t}
                </span>
            ))}
        </div>
    </div>
</motion.div>
```

#### 호버 효과
- 카드 위로 이동 (`y: -8`)
- 이미지 확대 (`scale-110`)
- 그라데이션 오버레이 표시

---

## 컴포넌트 재사용 패턴

### 1. 배럴 익스포트 (Barrel Export)
```typescript
// src/components/sections/index.ts
export { Hero } from './Hero';
export { ServiceOverview } from './ServiceOverview';
// ...

// 사용
import { Hero, ServiceOverview } from './components/sections';
```

### 2. Props 확장
```typescript
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary';
}
```
- HTML 기본 속성 + 커스텀 props

### 3. 조건부 스타일링
```tsx
className={`base-class ${condition ? 'true-class' : 'false-class'}`}
```

---

## 애니메이션 패턴

### 1. 페이드인 + 슬라이드
```tsx
<motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
>
```

### 2. 순차 애니메이션
```tsx
const containerVariants = {
    visible: {
        transition: { staggerChildren: 0.2 }
    }
};
```

### 3. 호버 애니메이션
```tsx
<motion.div whileHover={{ scale: 1.05, y: -8 }}>
```

---

## 요약

### 컴포넌트 분류
- **레이아웃**: MainLayout
- **섹션**: Hero, ServiceOverview, PortfolioGrid, TechStack, ContactForm
- **공통**: Button, Input, TextArea
- **네비게이션**: Navbar, Footer
- **카드**: PortfolioCard

### 주요 패턴
1. **Props 타입 정의**: TypeScript 인터페이스
2. **상태 관리**: useState, useEffect
3. **애니메이션**: Framer Motion
4. **폼 처리**: React Hook Form + Zod
5. **스타일링**: Tailwind CSS 유틸리티
