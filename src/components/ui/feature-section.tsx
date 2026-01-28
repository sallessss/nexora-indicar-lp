"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  Target,
  Shield,
  Users,
  Zap,
  CheckCircle,
} from "lucide-react";

interface Task {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
}

interface FeatureSectionProps {
  badge?: string;
  title: React.ReactNode;
  description: React.ReactNode;
  badges?: string[];
  tasks: Task[];
}

export default function FeatureSection({
  badge = "Automação",
  title,
  description,
  badges = [],
  tasks,
}: FeatureSectionProps) {
  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          {/* LEFT SIDE - Task Loop with Vertical Bar */}
          <div className="relative flex h-[400px] items-center justify-center overflow-hidden">
            <Card className="relative h-full w-full max-w-sm overflow-hidden border-border/50 bg-card shadow-card">
              <CardContent className="h-full p-0">
                {/* Scrollable Container */}
                <div className="relative h-full overflow-hidden">
                  {/* Motion list */}
                  <motion.div
                    className="flex flex-col gap-4 py-4 px-4"
                    animate={{ y: ["0%", "-50%"] }}
                    transition={{
                      y: {
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                      },
                    }}
                  >
                    {[...tasks, ...tasks].map((task, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between gap-4 rounded-xl border border-border/50 bg-background p-4 shadow-sm"
                      >
                        {/* Icon + Content */}
                        <div className="flex items-center gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                            {task.icon}
                          </div>
                          <div className="flex flex-col">
                            <span className="text-sm font-semibold text-foreground">
                              {task.title}
                            </span>
                            <span className="text-xs text-muted-foreground">
                              {task.subtitle}
                            </span>
                          </div>
                        </div>
                        <CheckCircle className="h-5 w-5 text-primary" />
                      </div>
                    ))}
                  </motion.div>

                  {/* Fade effect only inside card */}
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-card to-transparent" />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-card to-transparent" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* RIGHT SIDE - Content */}
          <div className="flex flex-col items-start gap-6">
            <Badge variant="outline" className="text-primary border-primary/30">
              {badge}
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              {title}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {description}
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {badges.map((badgeText, index) => (
                <Badge key={index} variant="secondary" className="text-sm px-3 py-1">
                  {badgeText}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
