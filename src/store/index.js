import { writable } from "svelte/store";

export default function () {
  const loading = writable(false);
  const error = writable(false);
  const data = writable({});

  async function getData() {
    loading.set(true);
    error.set(false);

    try {
      const response = await fetch(
        // "https://api.jsonbin.io/v3/b/6492fa9f9d312622a3733f99" // for test case with 3 items
        "https://api.jsonbin.io/v3/b/6492fa818e4aa6225eb201e1"
      );

      const { record } = await response.json();

      setTimeout(() => {
        data.set(record);
        loading.set(false);
      }, 1_000); // Delay for testing preloaders
    } catch (e) {
      error.set(e);
    }
  }

  getData();

  return [data, loading, error];
}
