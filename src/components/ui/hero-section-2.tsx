import { cn } from "@/lib/utils";
import { motion } from 'framer-motion';
import { Globe, MapPin, Phone } from 'lucide-react';
import React from 'react';
import { AnimatedGridPattern } from './animated-grid-pattern';

// Icon component for contact details
const InfoIcon = ({ type }: { type: 'website' | 'phone' | 'address' }) => {
    const icons = {
        website: <Globe className="h-5 w-5 text-primary" />,
        phone: <Phone className="h-5 w-5 text-primary" />,
        address: <MapPin className="h-5 w-5 text-primary" />,
    };
    return <div className="mr-2 flex-shrink-0">{icons[type]}</div>;
};


// Prop types for the HeroSection component
interface HeroSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  logo?: {
    url?: string;
    alt?: string;
    text?: string;
    icon?: React.ReactNode;
  };
  slogan?: string;
  title: React.ReactNode;
  subtitle: string;
  callToAction: {
    text: string;
    href: string;
  };
  secondaryAction?: {
    text: string;
    href: string;
  };
  backgroundImage: string;
  contactInfo: {
    website: string;
    phone: string;
    address: string;
  };
}

const HeroSection2 = React.forwardRef<HTMLDivElement, HeroSectionProps>(
  ({ className, logo, slogan, title, subtitle, callToAction, secondaryAction, backgroundImage, contactInfo, ...props }, ref) => {
    
    // Animation variants for the container to orchestrate children animations
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.15,
          delayChildren: 0.2,
        },
      },
    };

    // Animation variants for individual text/UI elements
    const itemVariants = {
      hidden: { y: 20, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
          ease: "easeOut",
        },
      },
    };
    
    return (
      <motion.section
        ref={ref}
        className={cn(
          "relative flex min-h-screen w-full flex-col overflow-hidden bg-background text-foreground md:flex-row",
          className
        )}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        {...props}
      >
        {/* Left Side: Content */}
        <div className="flex w-full flex-col justify-between p-8 md:w-1/2 md:p-12 lg:w-3/5 lg:p-16">
            {/* Top Section: Logo & Main Content */}
            <div>
                <motion.header className="mb-12" variants={itemVariants}>
                    {logo && (
                        <div className="flex items-center">
                            {logo.icon ? (
                              <div className="mr-3">{logo.icon}</div>
                            ) : logo.url ? (
                              <img src={logo.url} alt={logo.alt || 'Logo'} className="mr-3 h-8" />
                            ) : null}
                            <div>
                                {logo.text && <p className="text-lg font-bold text-foreground">{logo.text}</p>}
                                {slogan && <p className="text-xs tracking-wider text-muted-foreground">{slogan}</p>}
                            </div>
                        </div>
                    )}
                </motion.header>

                <motion.main variants={containerVariants}>
                    <motion.h1 className="text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl" variants={itemVariants}>
                        {title}
                    </motion.h1>
                    <motion.div className="my-6 h-1 w-20 bg-primary" variants={itemVariants}></motion.div>
                    <motion.p className="mb-8 max-w-md text-base text-muted-foreground md:text-lg" variants={itemVariants}>
                        {subtitle}
                    </motion.p>
                    <motion.div className="flex flex-wrap gap-4" variants={itemVariants}>
                      <a 
                        href={callToAction.href} 
                        className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-lg font-bold tracking-wide text-primary-foreground transition-all hover:bg-primary/90 hover:scale-105" 
                      >
                          {callToAction.text}
                      </a>
                      {secondaryAction && (
                        <a 
                          href={secondaryAction.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-lg border-2 border-primary bg-transparent px-6 py-3 text-lg font-bold tracking-wide text-primary transition-all hover:bg-primary/10 hover:scale-105" 
                        >
                            {secondaryAction.text}
                        </a>
                      )}
                    </motion.div>
                </motion.main>
            </div>

            {/* Bottom Section: Footer Info */}
            <motion.footer className="mt-12 w-full" variants={itemVariants}>
                <div className="grid grid-cols-1 gap-6 text-sm text-muted-foreground sm:grid-cols-3">
                    <div className="flex items-center">
                        <InfoIcon type="website" />
                        <span>{contactInfo.website}</span>
                    </div>
                    <div className="flex items-center">
                        <InfoIcon type="phone" />
                        <span>{contactInfo.phone}</span>
                    </div>
                    <div className="flex items-center">
                        <InfoIcon type="address" />
                        <span>{contactInfo.address}</span>
                    </div>
                </div>
            </motion.footer>
        </div>

        {/* Right Side: Image with Clip Path Animation */}
        <motion.div 
          className="w-full min-h-[400px] bg-cover bg-center md:w-1/2 md:min-h-full lg:w-2/5"
          style={{ 
            backgroundImage: `url(${backgroundImage})`,
          }}
          initial={{ clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)' }}
          animate={{ clipPath: 'polygon(25% 0, 100% 0, 100% 100%, 0% 100%)' }}
          transition={{ duration: 1.2, ease: "circOut" }}
        >
        </motion.div>
      </motion.section>
    );
  }
);

HeroSection2.displayName = "HeroSection2";

export { HeroSection2 };

