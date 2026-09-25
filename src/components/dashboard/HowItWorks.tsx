"use client";

import { ScanLine, Cpu, Lightbulb, GitCompare } from "lucide-react";
import type { DashboardLabels } from "@/data/dashboard-labels";

type HowItWorksProps = {
  labels: DashboardLabels["howItWorks"];
};

const stepColors = [
  "bg-gradient-to-br from-orange-500 to-red-500",
  "bg-gradient-to-br from-blue-500 to-indigo-500",
  "bg-gradient-to-br from-green-500 to-teal-500",
  "bg-gradient-to-br from-purple-500 to-pink-500",
];
const stepIcons = [ScanLine, Cpu, Lightbulb, GitCompare];

export function HowItWorks({ labels }: HowItWorksProps) {
  return (
    <div className="rounded-xl bg-card p-4 shadow-sm sm:p-5">
      <h2 className="mb-5 text-base font-medium text-foreground">{labels.title}</h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {labels.steps.map((step, i) => {
          const Icon = stepIcons[i] ?? ScanLine;
          return (
            <div key={step.number} className="flex flex-col items-center text-center">
              <div
                className={`mb-3 flex size-12 items-center justify-center rounded-full text-white ${stepColors[i] ?? stepColors[0]}`}
              >
                <Icon className="size-5" aria-hidden="true" />
              </div>
              <span className="text-xs font-bold text-orange-500/70">{step.number}</span>
              <p className="mt-1 text-sm font-medium text-foreground">{step.label}</p>
              <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
