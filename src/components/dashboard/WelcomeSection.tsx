"use client";

import { User, Settings, Shield } from "lucide-react";
import type { DashboardLabels } from "@/data/dashboard-labels";
import { BrandMark } from "@/components/ui/BrandMark";

type WelcomeSectionProps = {
  labels: DashboardLabels["greeting"];
  userName: string;
  allergies?: string[];
  scanCount?: number;
  healthyCount?: number;
  onProfile?: () => void;
  onSettings?: () => void;
};

export function WelcomeSection({
  labels,
  userName,
  allergies = [],
  scanCount = 0,
  healthyCount = 0,
  onProfile,
  onSettings,
}: WelcomeSectionProps) {
  const hour = new Date().getHours();
  const greeting =
    hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening";

  return (
    <div className="bg-gradient-to-r from-orange-500 to-red-500 p-4 text-white sm:rounded-2xl sm:p-5">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <BrandMark className="size-11 shadow-md" iconClassName="size-5" />
          <div>
            <h1 className="text-xl font-medium">
              {greeting}, {userName}!
            </h1>
            <p className="text-sm text-orange-100">{labels.subtitle}</p>
          </div>
        </div>
        <div className="flex gap-1">
          {onProfile && (
            <button
              type="button"
              onClick={onProfile}
              className="flex size-9 items-center justify-center rounded-lg text-white hover:bg-white/20"
              aria-label="Profile"
            >
              <User className="size-5" />
            </button>
          )}
          {onSettings && (
            <button
              type="button"
              onClick={onSettings}
              className="flex size-9 items-center justify-center rounded-lg text-white hover:bg-white/20"
              aria-label="Settings"
            >
              <Settings className="size-5" />
            </button>
          )}
        </div>
      </div>

      <div className="mb-4 rounded-lg bg-white/20 p-3">
        <div className="mb-2 flex items-center gap-2">
          <Shield className="size-4" />
          <span className="text-sm">Health profile</span>
        </div>
        <div className="flex flex-wrap gap-1">
          {allergies.length === 0 ? (
            <span className="rounded-full bg-white/30 px-2 py-0.5 text-xs">
              No allergies listed
            </span>
          ) : (
            allergies.slice(0, 4).map((allergy) => (
              <span
                key={allergy}
                className="rounded-full border border-white/50 bg-white/30 px-2 py-0.5 text-xs"
              >
                {allergy}
              </span>
            ))
          )}
          {allergies.length > 4 && (
            <span className="rounded-full border border-white/50 bg-white/30 px-2 py-0.5 text-xs">
              +{allergies.length - 4} more
            </span>
          )}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 text-center text-xs">
        <div className="rounded-lg bg-white/20 p-2">
          <p className="text-base font-bold">{scanCount}</p>
          <p className="text-orange-100">Recent scans</p>
        </div>
        <div className="rounded-lg bg-white/20 p-2">
          <p className="text-base font-bold">{healthyCount}</p>
          <p className="text-orange-100">Lower concern</p>
        </div>
        <div className="rounded-lg bg-white/20 p-2">
          <p className="text-base font-bold">{allergies.length}</p>
          <p className="text-orange-100">Allergens</p>
        </div>
      </div>
    </div>
  );
}
