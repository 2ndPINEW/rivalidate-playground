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

  return {
    props: {
      value: json.title,
    },
    revalidate: 10,
  };
};

export default function Page({ value }: { value: string }) {
  return (
    <>
      <h1>{value}</h1>
    </>
  );
}
