import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface AIRiskAssessmentProps {
  severity: string;
  suggestedAction: string;
  riskAssessment: string;
}

export default function AIRiskAssessment({
  severity,
  suggestedAction,
  riskAssessment,
}: AIRiskAssessmentProps) {
  return (
    <Card className="bg-blue-50/40 border-blue-100">
      <CardHeader>
        <CardTitle>
          AI Copilot Risk Assessment
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label>Severity (Suggested)</Label>

            <Badge variant="secondary">
              {severity}
            </Badge>
          </div>

          <div className="space-y-2">
            <Label>Suggested Next Action</Label>

            <Input
              readOnly
              value={suggestedAction}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label>Risk Assessment</Label>

          <Textarea
            readOnly
            value={riskAssessment}
            className="min-h-24 resize-none"
          />
        </div>
      </CardContent>
    </Card>
  );
}
