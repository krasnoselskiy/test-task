export const getData = async () => {
  const res = await fetch(
    // "https://api.jsonbin.io/v3/b/6492fa9f9d312622a3733f99"
    "https://api.jsonbin.io/v3/b/6492fa818e4aa6225eb201e1"
  );
  const json = await res.json();

  return new Promise((res) => setTimeout(() => res(json.record), 2000));
};
