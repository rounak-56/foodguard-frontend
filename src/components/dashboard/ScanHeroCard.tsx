"use client";

import { Camera } from "lucide-react";
import type { DashboardLabels } from "@/data/dashboard-labels";

type ScanHeroCardProps = {
  labels: DashboardLabels["scan"];
  onScan: () => void;
};

export function ScanHeroCard({ labels, onScan }: ScanHeroCardProps) {
  return (
    <div className="rounded-xl border-2 border-dashed border-orange-300 bg-gradient-to-br from-orange-50 to-red-50 p-5 dark:border-orange-800 dark:from-orange-950 dark:to-red-950 sm:p-6">
      <button
        type="button"
        onClick={onScan}
        className="flex h-16 w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-lg font-medium text-white shadow-md transition-all hover:from-orange-600 hover:to-red-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2"
      >
        <Camera className="size-8" aria-hidden="true" />
        {labels.scanButton}
      </button>
      <p className="mt-3 text-center text-sm text-muted-foreground">
        {labels.subtitle}
      </p>
    </div>
  );
}
