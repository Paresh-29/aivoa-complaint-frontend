import { Badge } from "@/components/ui/badge";

export default function ComplaintHeader() {
  return (
    <div className="flex items-start justify-between border-b pb-6">
      <div>
        <h1 className="text-4xl font-bold">
          Log Customer Complaint
        </h1>

        <p className="mt-2 text-lg text-muted-foreground">
          API & FDF Quality Assurance Module
        </p>
      </div>

      <Badge
        variant="secondary"
        className="rounded-full px-4 py-2 text-sm"
      >
        Pending Triage
      </Badge>
    </div>
  );
}
