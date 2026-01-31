import { motion } from 'framer-motion';

const technologies = [
    { name: 'React', color: '#61DAFB' },
    { name: 'TypeScript', color: '#3178C6' },
    { name: 'Next.js', color: '#FFFFFF' },
    { name: 'FastAPI', color: '#009688' },
    { name: 'Python', color: '#3776AB' },
    { name: 'PHP', color: '#777BB4' },
    { name: 'Docker', color: '#2496ED' },
    { name: 'PostgreSQL', color: '#4169E1' },
    { name: 'ONNX', color: '#005CED' },
    { name: 'TensorFlow', color: '#FF6F00' },
    { name: 'Node.js', color: '#339933' },
    { name: 'Tailwind', color: '#06B6D4' },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.4,
        },
    },
};

export default function TechStack() {
    return (
        <section id="tech" className="py-20 md:py-32 bg-deep-blue-light">
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
                        Tech Stack
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                        우리가 사용하는{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-electric-blue-light">
                            기술 스택
                        </span>
                    </h2>
                    <p className="text-lg text-white/60 max-w-2xl mx-auto">
                        최신 기술과 검증된 도구를 활용하여 안정적이고 확장 가능한 솔루션을 제공합니다.
                    </p>
                </motion.div>

                {/* Tech Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-6"
                >
                    {technologies.map((tech, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="group relative"
                        >
                            <motion.div
                                className="bg-deep-blue rounded-xl p-6 border border-white/10 hover:border-electric-blue/50 transition-all duration-300 flex flex-col items-center justify-center aspect-square"
                                whileHover={{ y: -5, scale: 1.02 }}
                            >
                                {/* Tech Icon Placeholder */}
                                <div
                                    className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center text-2xl font-bold"
                                    style={{
                                        backgroundColor: `${tech.color}20`,
                                        color: tech.color,
                                    }}
                                >
                                    {tech.name.charAt(0)}
                                </div>

                                {/* Tech Name */}
                                <span className="text-white/80 text-sm font-medium text-center group-hover:text-white transition-colors">
                                    {tech.name}
                                </span>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Additional Info */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-16 text-center"
                >
                    <p className="text-white/50 text-sm">
                        프로젝트 요구사항에 따라 최적의 기술 스택을 선택하여 적용합니다.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
