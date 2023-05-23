import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
  const json = await res.json();

  return {
    props: {
      array: json,
    },
    revalidate: 10,
  };
};

export default function Page({ array }: { array: any[] }) {
  return (
    <>
      <h1>Posts</h1>
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
