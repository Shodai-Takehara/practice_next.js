import type { FC } from 'react';
import type { GetStaticProps } from 'next';
import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';

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
  const postData = getPostData(params?.id as string);
  return {
    props: {
      postData,
    },
  };
};

const Post: FC<PostData> = ({ postData }) => {
  return (
    <Layout>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
    </Layout>
  );
};

export default Post;
