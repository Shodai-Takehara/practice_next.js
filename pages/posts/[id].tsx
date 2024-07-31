import type { FC } from 'react';
import Head from 'next/head';
import type { GetStaticProps } from 'next';
import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Date from '../../components/date';

type PostData = {
  postData: {
    id: string;
    title: string;
    date: string;
    contentHtml: string;
  };
};

export const getStaticPaths = async () => {
  // idに対して可能な値のリストを返す
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // params.idを用いてブログ投稿のデータを取り出す
  const postData = await getPostData(params?.id as string);
  return {
    props: {
      postData,
    },
  };
};

const Post: FC<PostData> = ({ postData }) => {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {/* {postData.date} */}
      <Date dateString={postData.date} />
      <br />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </Layout>
  );
};

export default Post;
