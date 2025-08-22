async function mapAsyncLimit(iterable, callbackFn, size) {
  const out = [];
  for (let i = 0; i < iterable.length; i += size) {
    const chunk = iterable.slice(i, i + size);
    const chunkResults = await Promise.all(chunk.map(callbackFn));

    out.push(...chunkResults);
  }
  return out;
}

export default async function mapAsyncUtil() {
  async function fetchUpperCase(q) {
    // Fake API service that converts a string to uppercase.
    const res = await fetch(
      "https://dummyjson.com/products/search?q=" + encodeURIComponent(q)
    );
    return await res.text();
  }

  // Only a maximum of 2 pending requests at any one time.
  const results = await mapAsyncLimit(
    ["foo", "bar", "qux", "quz"],
    fetchUpperCase,
    2
  );
  console.log(results); // ['FOO', 'BAR', 'QUX', 'QUZ'];
}
