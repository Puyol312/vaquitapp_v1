import { Purchase } from "./models/purchase";

type PurchaseOptions = {
  id: number;
  from: string;
  amount: number;
  message: string;
  date: Date;
  status: string;
};

export async function getConfirmedPayments(): Promise<PurchaseOptions[]> {
  const paidPurchases = await Purchase.findAll({
    where: {
      status: "paid",
    },
  });
  const results = paidPurchases.map(purchase => ({
    id: purchase.get("id"),
    from: String(purchase.get("from")),
    amount: Number(purchase.get("amount")),
    message: String(purchase.get("message")),
    date: purchase.get("date") as Date,
    status: String(purchase.get("status")),
  }));
  return results;
}

export async function createPurchase(
  { from, amount, message }: { from: string; amount: number; message: string }
): Promise<number> {
  const newPurchase = await Purchase.create({
    from,
    amount,
    message,
    date: new Date(),
  });

  return newPurchase.get("id");
}

export async function confirmPurchase(purchaseId: string) {
  const purchase = await Purchase.findByPk(Number(purchaseId));

  if (!purchase) {
    throw new Error("Purchase not found");
  }

  await purchase.update({
    status: "paid",
  });

  return purchase;
}