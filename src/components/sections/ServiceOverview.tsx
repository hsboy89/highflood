import { motion } from 'framer-motion';
import { Code2, Factory, Brain } from 'lucide-react';

const services = [
    {
        icon: Code2,
        title: '웹 어플리케이션 개발',
        description:
            'React, FastAPI 기반의 현대적인 웹 애플리케이션을 구축합니다. 반응형 디자인과 뛰어난 UX로 사용자 경험을 극대화합니다.',
        features: ['React / Next.js', 'FastAPI / Node.js', 'Responsive Design', 'SEO 최적화'],
    },
    {
        icon: Factory,
        title: '산업용 시스템 (MES)',
        description:
            '제조 현장의 생산성을 높이는 스마트 팩토리 솔루션. 작업 지시부터 실적 수집, 품질 관리까지 통합 관리합니다.',
        features: ['생산 관리 시스템', '실시간 모니터링', '설비 연동', '데이터 분석'],
    },
    {
        icon: Brain,
        title: 'AI 통합 솔루션',
        description:
            '데이터 기반의 인텔리전스 레이어를 구축합니다. 머신러닝 모델 배포부터 실시간 분석 대시보드까지 제공합니다.',
        features: ['ONNX 모델 배포', '실시간 대시보드', 'API 통합', '예측 분석'],
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
        },
    },
};

export default function ServiceOverview() {
    return (
        <section id="services" className="py-20 md:py-32 bg-deep-blue-light">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-2 bg-electric-blue/20 text-electric-blue-light rounded-full text-sm font-medium mb-4">
                        Our Services
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                        비즈니스를 위한{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-electric-blue-light">
                            핵심 서비스
                        </span>
                    </h2>
                    <p className="text-lg text-white/60 max-w-2xl mx-auto">
                        HighFlood는 다양한 산업 분야에서 검증된 기술력으로 고객의 디지털 혁신을 지원합니다.
                    </p>
                </motion.div>

                {/* Service Cards */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="group relative bg-deep-blue rounded-2xl p-8 border border-white/10 hover:border-electric-blue/50 transition-all duration-300"
                        >
                            {/* Gradient Overlay on Hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/10 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />

                            {/* Icon */}
                            <div className="relative mb-6">
                                <div className="w-14 h-14 bg-electric-blue/20 rounded-xl flex items-center justify-center group-hover:bg-electric-blue/30 transition-colors">
                                    <service.icon className="w-7 h-7 text-electric-blue" />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="relative">
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-electric-blue-light transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-white/60 mb-6 leading-relaxed">
                                    {service.description}
                                </p>

                                {/* Features */}
                                <ul className="space-y-2">
                                    {service.features.map((feature, featureIndex) => (
                                        <li
                                            key={featureIndex}
                                            className="flex items-center text-sm text-white/50"
                                        >
                                            <span className="w-1.5 h-1.5 bg-electric-blue rounded-full mr-3" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
