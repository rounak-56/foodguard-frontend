import { Shield } from "lucide-react";

type TrustFooterProps = {
  message: string;
};

export function TrustFooter({ message }: TrustFooterProps) {
  return (
    <div className="flex items-start gap-3 rounded-xl border border-yellow-200 bg-yellow-50 p-4 dark:border-yellow-900 dark:bg-yellow-950/40">
      <Shield className="mt-0.5 size-5 shrink-0 text-yellow-600" aria-hidden="true" />
      <p className="text-xs leading-relaxed text-yellow-800 dark:text-yellow-200">{message}</p>
    </div>
  );
}
