import type { LoaderFunction } from "@remix-run/server-runtime";
import { json, redirect } from "@remix-run/server-runtime";
import { getInvoiceListItems } from "~/models/invoice.server";

export const loader: LoaderFunction = async () => {
  const [firstInvoice] = await getInvoiceListItems();
  if (!firstInvoice) {
    return json({});
  }
  return redirect(`/sales/invoices/${firstInvoice.id}`);
};

export default function InvoiceIndex() {
  return <div>You don't have any invoices 😭</div>;
}
