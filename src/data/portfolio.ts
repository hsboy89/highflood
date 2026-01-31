import type { PortfolioItem } from '../types';

export const portfolioData: PortfolioItem[] = [
    {
        id: 1,
        title: "NewStep - AI-Powered Learning Platform",
        category: "Web",
        tech: ["React", "Supabase", "Tailwind CSS"],
        description: "AI 기반의 학습 플랫폼 NewStep. 개인화된 학습 경로와 실시간 피드백을 제공합니다.",
        image: "https://masblvokjxshlnysyupm.supabase.co/storage/v1/object/public/images/newstep.png",
        link: "https://newstep.vercel.app/"
    },
    {
        id: 8,
        title: "Vocabulary Master - 수강생 전용 단어장",
        category: "Web",
        tech: ["React", "Supabase", "Tailwind CSS"],
        description: "매월 업데이트되는 수강생 전용 영단어 학습 플랫폼. 단어 암기 모드와 테스트 모드를 통해 체계적인 어휘 학습이 가능합니다.",
        image: "https://masblvokjxshlnysyupm.supabase.co/storage/v1/object/public/images/first.png",
        link: "https://vocamaster30.vercel.app/"
    },
    {
        id: 7,
        title: "The US Pulse - Real-time US News Platform",
        category: "Web",
        tech: ["React", "News API", "Tailwind CSS"],
        description: "미국 주요 뉴스를 실시간으로 수집하고 분석하는 뉴스 플랫폼. 카테고리별 필터링과 트렌드 분석 기능 제공.",
        image: "https://masblvokjxshlnysyupm.supabase.co/storage/v1/object/public/images/theusnews.png",
        link: "https://the-us-pulse-w4wf.vercel.app/"
    },
    {
        id: 2,
        title: "Data-Driven Intelligence Dashboard",
        category: "Dashboard",
        tech: ["FastAPI", "Docker", "Tesla API"],
        description: "실시간 뉴스 및 주가 분석 인텔리전스 레이어 구현. 다양한 데이터 소스를 통합하여 인사이트를 제공합니다.",
        image: "https://masblvokjxshlnysyupm.supabase.co/storage/v1/object/public/images/gigapulse.png",
        link: "https://giga-pulse-ruby.vercel.app/"
    },
    {
        id: 3,
        title: "Manufacturing Execution System",
        category: "System",
        tech: ["React", "FastAPI", "PostgreSQL", "Docker"],
        description: "생산 현장의 작업 지시, 실적 수집, 품질 관리를 통합하는 스마트 팩토리 MES 솔루션.",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop"
    },
    {
        id: 4,
        title: "Corporate Branding Website",
        category: "Web",
        tech: ["React", "Framer Motion", "Tailwind CSS"],
        description: "기업의 브랜드 아이덴티티를 효과적으로 전달하는 반응형 웹사이트. 모던한 디자인과 부드러운 애니메이션 적용.",
        image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop"
    },
    {
        id: 5,
        title: "Real-time Production Dashboard",
        category: "Dashboard",
        tech: ["React", "WebSocket", "Chart.js"],
        description: "생산 라인의 실시간 데이터를 시각화하는 대시보드. OEE, 불량률, 생산량을 한눈에 파악 가능.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
    },
    {
        id: 6,
        title: "E-Commerce Platform",
        category: "Web",
        tech: ["Next.js", "Stripe", "PostgreSQL"],
        description: "결제 시스템이 통합된 풀스택 이커머스 플랫폼. 관리자 대시보드와 재고 관리 기능 포함.",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop"
    }
];
