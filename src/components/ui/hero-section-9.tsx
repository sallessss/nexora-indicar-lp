import { motion, type Easing } from 'framer-motion';
import { Button, type ButtonProps } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import React from 'react';

interface StatProps {
  value: string;
  label: string;
  icon: React.ReactNode;
}

interface ActionProps {
  text: string;
  onClick: () => void;
  variant?: ButtonProps['variant'];
  className?: string;
}

interface HeroSectionProps {
  id?: string;
  title: React.ReactNode;
  subtitle: string;
  actions: ActionProps[];
  stats: StatProps[];
  images: string[];
  className?: string;
}

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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1] as Easing,
    },
  },
};

const floatingAnimation = {
  y: [0, -8, 0],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: [0.45, 0, 0.55, 1] as Easing,
  },
};

const HeroSection = ({ id, title, subtitle, actions, stats, images, className }: HeroSectionProps) => {
  return (
    <section id={id} className={cn("relative min-h-screen flex items-center py-20 overflow-hidden bg-foreground", className)}>
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-foreground via-foreground to-foreground/95" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

      <motion.div
        className="container mx-auto px-4 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text Content */}
          <div className="space-y-8">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-background"
              variants={itemVariants}
            >
              {title}
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-background/70 max-w-xl leading-relaxed"
              variants={itemVariants}
            >
              {subtitle}
            </motion.p>
            <motion.div className="flex flex-wrap gap-4" variants={itemVariants}>
              {actions.map((action, index) => (
                <Button
                  key={index}
                  onClick={action.onClick}
                  variant={action.variant || 'default'}
                  size="xl"
                  className={cn(
                    action.variant === 'outline' || action.variant === 'heroOutline'
                      ? 'border-2 border-background/30 bg-transparent text-background hover:bg-background/10'
                      : '',
                    action.className
                  )}
                >
                  {action.text}
                </Button>
              ))}
            </motion.div>
            <motion.div
              className="flex flex-wrap gap-8 pt-4"
              variants={itemVariants}
            >
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-background"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary">
                    {stat.icon}
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="text-sm text-background/60">{stat.label}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Image Collage */}
          <motion.div
            className="relative h-[500px] lg:h-[600px]"
            variants={itemVariants}
          >
            {/* Decorative Shapes */}
            <motion.div
              className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl"
              animate={floatingAnimation}
            />
            <motion.div
              className="absolute bottom-20 left-0 w-48 h-48 bg-primary/10 rounded-full blur-2xl"
              animate={floatingAnimation}
            />
            <div className="absolute top-10 left-10 w-20 h-20 border-2 border-primary/30 rounded-full" />

            {/* Images */}
            <motion.div
              className="absolute top-0 right-0 w-64 h-80 rounded-2xl overflow-hidden shadow-2xl"
              variants={imageVariants}
            >
              <img
                src={images[0]}
                alt="Hero image 1"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              className="absolute bottom-0 left-0 w-56 h-72 rounded-2xl overflow-hidden shadow-2xl"
              variants={imageVariants}
            >
              <img
                src={images[1]}
                alt="Hero image 2"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-64 rounded-2xl overflow-hidden shadow-2xl ring-4 ring-background/20"
              variants={imageVariants}
            >
              <img
                src={images[2]}
                alt="Hero image 3"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
