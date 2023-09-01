import { v4 as uuidv4 } from "uuid";

export const COLLECTION_NAME = {
  KOOPS: "koops",
};

export function LoadItem(collName, id) {}

export function LoadItems(collName) {}

export function EmptyCollection(collName) {}

export async function AddItem(collName, data) {
  data.id = uuidv4();
  const res = await SaveItem(collName, data);

  return res;
}

export function DeleteItem(collName, id) {}

export function UpdateItem(collName, updateData) {}
