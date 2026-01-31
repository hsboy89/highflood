import { motion } from 'framer-motion';
import type { PortfolioItem } from '../types';

interface PortfolioCardProps {
    item: PortfolioItem;
    index: number;
}

export default function PortfolioCard({ item, index }: PortfolioCardProps) {
    const CardWrapper = item.link ? motion.a : motion.div;
    const wrapperProps = item.link
        ? {
            href: item.link,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "block group relative overflow-hidden rounded-2xl bg-deep-blue border border-white/10 hover:border-electric-blue/50 transition-all duration-300 cursor-pointer"
        }
        : {
            className: "group relative overflow-hidden rounded-2xl bg-deep-blue border border-white/10 hover:border-electric-blue/50 transition-all duration-300"
        };

    return (
        <CardWrapper
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            {...wrapperProps}
        >
            {/* Image Container */}
            <div className="relative aspect-[4/3] overflow-hidden">
                {/* Placeholder gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/20 via-deep-blue-light to-deep-blue" />

                {/* Actual Image */}
                {item.image && (
                    <img
                        src={item.image}
                        alt={item.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        onError={(e) => {
                            (e.target as HTMLImageElement).style.display = 'none';
                        }}
                    />
                )}

                {/* Category-based pattern (Fallback/Overlay) */}
                <div className="absolute inset-0 opacity-30 group-hover:opacity-10 transition-opacity">
                    {item.category === 'Dashboard' && (
                        <div className="absolute inset-4 grid grid-cols-3 gap-2">
                            {[...Array(6)].map((_, i) => (
                                <div key={i} className="bg-white/10 rounded-lg" />
                            ))}
                        </div>
                    )}
                    {item.category === 'System' && (
                        <div className="absolute inset-4 flex flex-col gap-2">
                            {[...Array(4)].map((_, i) => (
                                <div key={i} className="h-6 bg-white/10 rounded-full" style={{ width: `${60 + Math.random() * 30}%` }} />
                            ))}
                        </div>
                    )}
                    {item.category === 'Web' && (
                        <div className="absolute inset-4">
                            <div className="h-8 bg-white/10 rounded-lg mb-3" />
                            <div className="grid grid-cols-2 gap-3">
                                <div className="h-20 bg-white/10 rounded-lg" />
                                <div className="h-20 bg-white/10 rounded-lg" />
                            </div>
                        </div>
                    )}
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-deep-blue via-deep-blue/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div>
                        <p className="text-white/80 text-sm leading-relaxed">{item.description}</p>
                    </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-electric-blue/90 text-white text-xs font-medium rounded-full shadow-lg">
                        {item.category}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-electric-blue-light transition-colors line-clamp-2">
                    {item.title}
                </h3>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2">
                    {item.tech.map((tech, techIndex) => (
                        <span
                            key={techIndex}
                            className="px-2 py-1 bg-white/5 text-white/60 text-xs rounded-md border border-white/10"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </CardWrapper>
    );
}
