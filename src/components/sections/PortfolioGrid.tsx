import { useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolio';
import PortfolioCard from '../PortfolioCard';

type Category = 'All' | 'Web' | 'System' | 'Dashboard';

const categories: Category[] = ['All', 'Web', 'System', 'Dashboard'];

export default function PortfolioGrid() {
    const [activeCategory, setActiveCategory] = useState<Category>('All');

    const filteredPortfolio =
        activeCategory === 'All'
            ? portfolioData
            : portfolioData.filter((item) => item.category === activeCategory);

    return (
        <section id="portfolio" className="py-20 md:py-32 bg-deep-blue">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <span className="inline-block px-4 py-2 bg-electric-blue/20 text-electric-blue-light rounded-full text-sm font-medium mb-4">
                        Portfolio
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                        검증된{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-electric-blue-light">
                            프로젝트 실적
                        </span>
                    </h2>
                    <p className="text-lg text-white/60 max-w-2xl mx-auto">
                        다양한 산업 분야에서 성공적으로 완료한 프로젝트들을 소개합니다.
                    </p>
                </motion.div>

                {/* Category Filter */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-3 mb-12"
                >
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${activeCategory === category
                                ? 'bg-electric-blue text-white'
                                : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/10'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </motion.div>

                {/* Portfolio Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
                >
                    {filteredPortfolio.map((item, index) => (
                        <PortfolioCard key={item.id} item={item} index={index} />
                    ))}
                </motion.div>

                {/* Empty State */}
                {filteredPortfolio.length === 0 && (
                    <div className="text-center py-16">
                        <p className="text-white/50">해당 카테고리의 프로젝트가 없습니다.</p>
                    </div>
                )}
            </div>
        </section>
    );
}
