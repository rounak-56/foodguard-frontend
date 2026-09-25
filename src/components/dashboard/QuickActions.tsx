"use client";

import { Camera, QrCode, Search, Clock, MessagesSquare, ShieldAlert } from "lucide-react";
import { useRouter } from "next/navigation";

const actions = [
  {
    id: "label",
    title: "Scan label",
    subtitle: "Photo OCR",
    icon: Camera,
    color: "from-orange-500 to-red-500",
    href: "/scan?open=camera&mode=manual",
  },
  {
    id: "barcode",
    title: "Scan barcode",
    subtitle: "Quick lookup",
    icon: QrCode,
    color: "from-blue-500 to-indigo-500",
    href: "/scan?open=camera&mode=barcode",
  },
  {
    id: "search",
    title: "Search",
    subtitle: "Name or ingredient",
    icon: Search,
    color: "from-green-500 to-teal-500",
    href: "/search",
  },
  {
    id: "history",
    title: "History",
    subtitle: "Past scans",
    icon: Clock,
    color: "from-purple-500 to-pink-500",
    href: "/history",
  },
];

const extra = [
  {
    id: "assistant",
    title: "Ask FoodGuard",
    subtitle: "AI chat",
    icon: MessagesSquare,
    iconClass: "text-indigo-600",
    href: "/assistant",
  },
  {
    id: "report",
    title: "Report issue",
    subtitle: "Food safety",
    icon: ShieldAlert,
    iconClass: "text-orange-600",
    href: "/food-safety-assistant",
  },
];

export function QuickActions() {
  const router = useRouter();

  return (
    <div className="space-y-3">
      <div className="grid grid-cols-2 gap-3">
        {actions.map((action) => (
          <button
            key={action.id}
            type="button"
            onClick={() => router.push(action.href)}
            className="rounded-xl bg-card p-4 text-left shadow-sm transition-shadow hover:shadow-md"
          >
            <div
              className={`mb-3 flex size-12 items-center justify-center rounded-full bg-gradient-to-r text-white ${action.color}`}
            >
              <action.icon className="size-6" aria-hidden="true" />
            </div>
            <h3 className="text-sm font-medium text-foreground">{action.title}</h3>
            <p className="text-xs text-muted-foreground">{action.subtitle}</p>
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-3">
        {extra.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => router.push(item.href)}
            className="rounded-xl bg-card p-4 text-center shadow-sm transition-shadow hover:shadow-md"
          >
            <item.icon className={`mx-auto mb-2 size-8 ${item.iconClass}`} aria-hidden="true" />
            <p className="text-sm font-medium">{item.title}</p>
            <p className="text-xs text-muted-foreground">{item.subtitle}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
