import { v4 as uuidv4 } from "uuid";

export function LoadItem(collName, id) {}

export function LoadItems(collName) {}

export function EmptyCollection(collName) {}

export function AddItem(collName, data) {
  const id = uuidv4();
}

export function DeleteItem(collName, id) {}

export function UpdateItem(collName, updateData) {}
