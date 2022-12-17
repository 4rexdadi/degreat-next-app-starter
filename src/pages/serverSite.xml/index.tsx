// import
import { GetServerSideProps } from "next";
import { ISitemapField, getServerSideSitemap } from "next-sitemap";

export const GetPost = async (): Promise<any> => {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
  });
  return data.json();
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const siteUrl = "https://jsonplaceholder.typicode.com";
  const data = await GetPost();

  const fields: ISitemapField[] = data?.map((data: { id: number }) => ({
    loc: `${siteUrl}/${data.id}`,
    lastmod: new Date().toISOString(),
  }));

  return getServerSideSitemap(ctx, fields);
};

export default function Site(): void {
  // console
}
