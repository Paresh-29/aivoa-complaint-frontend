import { Card, CardContent } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import ComplaintHeader from "./ComplaintHeader";
import FormSection from "./FormSection";
import AIRiskAssessment from "./AIRiskAssessment";

import { useSelector } from "react-redux";
import type { RootState } from "@/store/store";

export default function ComplaintPanel() {
  const complaint = useSelector((state: RootState) => state.complaint.complaint);
  if (!complaint) {
    // Form still waiting for AI
  }

  return (
    <Card className="h-[90vh] overflow-y-auto">
      <CardContent className="space-y-8 p-8">
        <ComplaintHeader />

        <FormSection
          number={1}
          title="Origin & Customer Details"
        >
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="complaint-source">
                Complaint Source
              </Label>

              <Input
                id="complaint-source"
                readOnly
                placeholder="Awaiting AI extraction..."
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="customer-name">
                Customer Name
              </Label>

              <Input
                id="customer-name"
                readOnly
                // placeholder="Awaiting AI extraction..."
                value={complaint?.customer_name ?? ""}
              />
            </div>
          </div>
        </FormSection>

        <FormSection
          number={2}
          title="Product & Batch Identification"
        >
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="product-name">
                Product Name
              </Label>

              <Input
                id="product-name"
                readOnly
                // placeholder="Awaiting AI extraction..."
                value={complaint?.product_name ?? ""}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="product-strength">
                Product Strength
              </Label>

              <Input
                id="product-strength"
                readOnly
                placeholder="Awaiting AI extraction..."
                // value={complaint?.product_strength ?? ""}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="batch-number">
                Batch / Lot Number
              </Label>

              <Input
                id="batch-number"
                readOnly
                // placeholder="Awaiting AI extraction..."
                value={complaint?.batch_number ?? ""}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="affected-quantity">
                Affected Quantity
              </Label>

              <Input
                id="affected-quantity"
                readOnly
                // placeholder="Awaiting AI extraction..."
                value={complaint?.quantity_affected ?? ""}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="manufacturing-date">
                Manufacturing Date
              </Label>

              <Input
                id="manufacturing-date"
                readOnly
                // placeholder="Awaiting AI extraction..."
                value={complaint?.manufacturing_date ?? ""}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="expiry-date">
                Expiry Date
              </Label>

              <Input
                id="expiry-date"
                readOnly
                // placeholder="Awaiting AI extraction..."
                value={complaint?.expiry_date ?? ""}
              />
            </div>
          </div>
        </FormSection>

        <FormSection
          number={3}
          title="Complaint Details"
        >
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="complaint-type">
                Complaint Type
              </Label>

              <Input
                id="complaint-type"
                readOnly
                // placeholder="Awaiting AI extraction..."
                value={complaint?.complaint_type ?? ""}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="complaint-description">
                Complaint Description
              </Label>

              <Textarea
                id="complaint-description"
                readOnly
                // placeholder="Awaiting AI extraction..."
                value={complaint?.complaint_description ?? ""}
                className="min-h-32 resize-none"
              />
            </div>
          </div>
        </FormSection>

        <FormSection
          number={4}
          title="Initial Assessment & Priority"
        >
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="severity">Severity</Label>

              <Input
                id="severity"
                readOnly
                value={complaint?.severity ?? ""}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="priority">Priority</Label>

              <Input
                id="priority"
                readOnly
                value={complaint?.priority ?? ""}
                placeholder="Awaiting AI analysis..."
              />
            </div>
          </div>
        </FormSection>

        {
          complaint && (
            <AIRiskAssessment
              severity={complaint.severity}
              suggestedAction={complaint.suggested_action}
              riskAssessment={complaint.risk_assessment}
            />
          )
        }
      </CardContent>
    </Card>
  )
}
