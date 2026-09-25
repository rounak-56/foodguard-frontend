"use client";

import { Target, ArrowRight } from "lucide-react";
import type { DashboardLabels } from "@/data/dashboard-labels";
import type { UserPreference } from "@/data/mock-data";

type PersonalizedInsightProps = {
  labels: DashboardLabels["personalized"];
  preferences: UserPreference;
  onEdit: () => void;
};

export function PersonalizedInsight({
  labels,
  preferences,
  onEdit,
}: PersonalizedInsightProps) {
  return (
    <div className="rounded-xl border border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50 p-4 dark:border-blue-900 dark:from-blue-950 dark:to-indigo-950 sm:p-5">
      <div className="mb-4 flex items-center gap-3">
        <div className="flex size-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white">
          <Target className="size-5" aria-hidden="true" />
        </div>
        <h2 className="text-base font-medium text-foreground">{labels.title}</h2>
      </div>

      <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">{labels.goalLabel}:</span>
          <span className="text-sm font-medium text-foreground">
            {preferences.goal || "Not set"}
          </span>
        </div>
        {preferences.focuses.map((focus) => (
          <div key={focus} className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">{labels.focusLabel}:</span>
            <span className="text-sm font-medium text-foreground">{focus}</span>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={onEdit}
        className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-orange-600 hover:underline dark:text-orange-400"
      >
        {labels.editButton}
        <ArrowRight className="size-3.5" aria-hidden="true" />
      </button>
    </div>
  );
}
