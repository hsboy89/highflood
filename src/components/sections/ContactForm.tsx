import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Send, CheckCircle, Loader2, AlertCircle } from 'lucide-react';
import { supabase } from '../../lib/supabase';

const contactSchema = z.object({
    name: z.string().min(2, '성함을 2자 이상 입력해주세요'),
    company: z.string().optional(),
    phone: z
        .string()
        .regex(/^[0-9]{2,3}-?[0-9]{3,4}-?[0-9]{4}$/, '올바른 전화번호 형식을 입력해주세요'),
    email: z.string().email('올바른 이메일 주소를 입력해주세요'),
    projectType: z.string().min(1, '프로젝트 유형을 선택해주세요'),
    budget: z.string().min(1, '예산 범위를 선택해주세요'),
    description: z.string().min(10, '프로젝트 설명을 10자 이상 입력해주세요'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const projectTypes = [
    { value: '', label: '프로젝트 유형 선택' },
    { value: 'web', label: '웹 애플리케이션 개발' },
    { value: 'system', label: '산업용 시스템 (MES)' },
    { value: 'dashboard', label: '데이터 대시보드' },
    { value: 'ai', label: 'AI/ML 솔루션' },
    { value: 'other', label: '기타' },
];

const budgetRanges = [
    { value: '', label: '예산 범위 선택' },
    { value: 'under-1000', label: '1,000만원 미만' },
    { value: '1000-3000', label: '1,000만원 ~ 3,000만원' },
    { value: '3000-5000', label: '3,000만원 ~ 5,000만원' },
    { value: '5000-10000', label: '5,000만원 ~ 1억원' },
    { value: 'over-10000', label: '1억원 이상' },
    { value: 'negotiable', label: '협의 가능' },
];

export default function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = async (data: ContactFormData) => {
        setIsSubmitting(true);
        setError(null);

        try {
            console.log('Attempting to insert into Supabase...', data);
            const { error: dbError } = await supabase
                .from('contacts')
                .insert([
                    {
                        name: data.name,
                        company: data.company,
                        phone: data.phone,
                        email: data.email,
                        project_type: data.projectType,
                        budget: data.budget,
                        description: data.description
                    }
                ]);

            if (dbError) {
                console.error('Supabase DB Error:', dbError);
                throw new Error(`DB 저장 실패: ${dbError.message}`);
            }

            console.log('DB insert successful. Notification will be handled by Supabase Webhook/Function.');

            setIsSuccess(true);
            reset();
            setTimeout(() => setIsSuccess(false), 5000);
            reset();
            setTimeout(() => setIsSuccess(false), 5000);
        } catch (err: any) {
            console.error('Submission Error:', err);
            setError(err.message || '전송 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const inputClasses =
        'w-full bg-deep-blue border border-white/20 rounded-xl px-4 py-3.5 text-white placeholder:text-white/40 focus:border-electric-blue focus:ring-1 focus:ring-electric-blue outline-none transition-all';
    const labelClasses = 'block text-white/80 text-sm font-medium mb-2';
    const errorClasses = 'text-red-400 text-xs mt-1';

    return (
        <section id="contact" className="py-20 md:py-32 bg-deep-blue">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                    {/* Left: Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block px-4 py-2 bg-electric-blue/20 text-electric-blue-light rounded-full text-sm font-medium mb-4">
                            Contact Us
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                            프로젝트{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-electric-blue-light">
                                상담 신청
                            </span>
                        </h2>
                        <p className="text-lg text-white/60 mb-8">
                            프로젝트에 대해 상담하고 싶으시다면 아래 양식을 작성해 주세요.
                            <br />
                            담당자가 확인 후 빠르게 연락드리겠습니다.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-electric-blue/20 rounded-xl flex items-center justify-center">
                                    <span className="text-electric-blue">📧</span>
                                </div>
                                <div>
                                    <p className="text-white/50 text-sm">이메일</p>
                                    <p className="text-white font-medium">highflood.video@gmail.com</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-electric-blue/20 rounded-xl flex items-center justify-center">
                                    <span className="text-electric-blue">📱</span>
                                </div>
                                <div>
                                    <p className="text-white/50 text-sm">전화</p>
                                    <p className="text-white font-medium">010-6567-6625</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="bg-deep-blue-light rounded-2xl p-6 md:p-8 border border-white/10"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                {/* Name */}
                                <div>
                                    <label className={labelClasses}>
                                        성함 <span className="text-electric-blue">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="홍길동"
                                        className={inputClasses}
                                        {...register('name')}
                                    />
                                    {errors.name && (
                                        <p className={errorClasses}>{errors.name.message}</p>
                                    )}
                                </div>

                                {/* Company */}
                                <div>
                                    <label className={labelClasses}>회사명</label>
                                    <input
                                        type="text"
                                        placeholder="(주)회사명"
                                        className={inputClasses}
                                        {...register('company')}
                                    />
                                </div>

                                {/* Phone */}
                                <div>
                                    <label className={labelClasses}>
                                        연락처 <span className="text-electric-blue">*</span>
                                    </label>
                                    <input
                                        type="tel"
                                        placeholder="010-1234-5678"
                                        className={inputClasses}
                                        {...register('phone')}
                                    />
                                    {errors.phone && (
                                        <p className={errorClasses}>{errors.phone.message}</p>
                                    )}
                                </div>

                                {/* Email */}
                                <div>
                                    <label className={labelClasses}>
                                        이메일 <span className="text-electric-blue">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="example@email.com"
                                        className={inputClasses}
                                        {...register('email')}
                                    />
                                    {errors.email && (
                                        <p className={errorClasses}>{errors.email.message}</p>
                                    )}
                                </div>

                                {/* Project Type */}
                                <div>
                                    <label className={labelClasses}>
                                        프로젝트 유형 <span className="text-electric-blue">*</span>
                                    </label>
                                    <select className={inputClasses} {...register('projectType')}>
                                        {projectTypes.map((type) => (
                                            <option key={type.value} value={type.value} className="bg-deep-blue">
                                                {type.label}
                                            </option>
                                        ))}
                                    </select>
                                    {errors.projectType && (
                                        <p className={errorClasses}>{errors.projectType.message}</p>
                                    )}
                                </div>

                                {/* Budget */}
                                <div>
                                    <label className={labelClasses}>
                                        예산 범위 <span className="text-electric-blue">*</span>
                                    </label>
                                    <select className={inputClasses} {...register('budget')}>
                                        {budgetRanges.map((range) => (
                                            <option key={range.value} value={range.value} className="bg-deep-blue">
                                                {range.label}
                                            </option>
                                        ))}
                                    </select>
                                    {errors.budget && (
                                        <p className={errorClasses}>{errors.budget.message}</p>
                                    )}
                                </div>
                            </div>

                            {/* Description */}
                            <div className="mt-5">
                                <label className={labelClasses}>
                                    프로젝트 설명 <span className="text-electric-blue">*</span>
                                </label>
                                <textarea
                                    rows={4}
                                    placeholder="프로젝트에 대해 간략히 설명해 주세요..."
                                    className={`${inputClasses} resize-none`}
                                    {...register('description')}
                                />
                                {errors.description && (
                                    <p className={errorClasses}>{errors.description.message}</p>
                                )}
                            </div>



                            {/* Submit Button */}
                            <motion.button
                                type="submit"
                                disabled={isSubmitting}
                                className="mt-6 w-full bg-electric-blue hover:bg-electric-blue-dark disabled:opacity-50 disabled:cursor-not-allowed text-white py-4 rounded-xl font-semibold text-lg transition-all flex items-center justify-center gap-2"
                                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                        전송 중...
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-5 h-5" />
                                        상담 신청하기
                                    </>
                                )}
                            </motion.button>
                            {/* Error Message */}
                            <AnimatePresence>
                                {error && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="mt-4 p-4 bg-red-500/10 border border-red-500/50 rounded-xl flex items-center gap-3 text-red-400 text-sm"
                                    >
                                        <AlertCircle className="w-5 h-5 flex-shrink-0" />
                                        <p>{error}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </form>

                        {/* Success Toast */}
                        <AnimatePresence>
                            {isSuccess && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    className="fixed bottom-8 right-8 bg-green-500 text-white px-6 py-4 rounded-xl shadow-lg flex items-center gap-3"
                                >
                                    <CheckCircle className="w-5 h-5" />
                                    <span>상담 신청이 완료되었습니다!</span>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
