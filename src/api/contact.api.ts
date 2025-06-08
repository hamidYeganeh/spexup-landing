import { IContact } from "@/types/contact.types";
import { api, ENDPOINTS } from "./api";

export async function createContact(values: IContact) {
  await api.post(ENDPOINTS.contact.create, values);
}
