

export default function Home() {

  const processInputData = (data, queries) => {

    const result = [];

    //  For looping through the array
    queries.forEach(query => {

      const res = data.filter(item => item === query)

      result.push(res.length);
    });

    return result;
  }

  const data = ['aba', 'baba', 'aba', 'xzxb']
  const queries = ['aba', 'xzxb', 'ab']

  console.log(processInputData(data, queries));

  const data2 = ['def', 'de', 'fgh']
  const queries2 = ['de', 'lmn', 'fgh']

  console.log(processInputData(data2, queries2));

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      VQode Task <br />

    </div>
  );
}
