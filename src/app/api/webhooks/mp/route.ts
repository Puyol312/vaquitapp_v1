import { getPaymentById, WebhokPayload } from "@/lib/mercadopago";
import { confirmPurchase } from "@/lib/purchases";

export async function POST(request: Request, { params }) {
  const body: WebhokPayload = await request.json();

  if (body.type === "payment") {
    const mpPayment = await getPaymentById(body.data.id);
    if (mpPayment.status === "approved") {
      const purchaseId = mpPayment.external_reference;
      await confirmPurchase(purchaseId);
    }
  }
  return Response.json({ received: true });
}
