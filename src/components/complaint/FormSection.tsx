import type { ReactNode } from "react";

interface FormSectionProps {
  number: number;
  title: string;
  children: ReactNode;
}

export default function FormSection({
  number,
  title,
  children,
}: FormSectionProps) {
  return (
    <section className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
          {number}. {title}
        </h2>

        <div className="border-b" />
      </div>

      {children}
    </section>
  );
}
