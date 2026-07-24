export interface Complaint {
  customer_name: string | null;
  complaint_source: string | null;

  product_name: string | null;
  product_strength: string | null;
  batch_number: string | null;

  manufacturing_date: string | null;
  expiry_date: string | null;

  complaint_type: string | null;
  complaint_description: string | null;
  quantity_affected: string | null;

  severity: string | null;
  priority: string | null;

  suggested_action: string | null;
  risk_assessment: string | null;

  uploaded_file: string | null;
}
