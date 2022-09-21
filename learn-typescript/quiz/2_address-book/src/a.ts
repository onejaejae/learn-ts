function fetchItems(): string[] {
  let items = ["a", "b", "c"];
  return items;
}

fetchItems();

function fetchItems2(): Promise<string[]> {
  let items = ["a", "b", "c"];
  return new Promise((resolve) => resolve(items));
}
