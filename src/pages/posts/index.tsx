import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
  const json = await res.json();
  const time = Date.now();

  return {
    props: {
      array: json,
      time: time,
    },
    revalidate: 60,
  };
};

export default function Page({ array, time }: { array: any[]; time: number }) {
  return (
    <>
      <h1>Posts: {time}</h1>
      <ul>
        <li></li>
        {array.map((v, i) => (
          <li key={i}>
            <Link href={`/posts/${v.id}`}>{v.id}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
