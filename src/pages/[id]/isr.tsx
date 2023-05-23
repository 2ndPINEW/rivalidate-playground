import Head from "next/head";

export const getStaticPaths = () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps = async ({
  params,
}: {
  params: { id: string };
}) => {
  const id = params.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const json = await res.json();
  console.log(json);

  return {
    props: {
      value: json.title,
    },
    revalidate: 10,
  };
};

export default function Home({ value }: { value: string }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <div>getStaticPropsOnly</div>
      <div>{value}</div>
    </>
  );
}
