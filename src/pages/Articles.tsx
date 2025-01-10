import React from 'react';
import { posts } from '../data';
import ArticleList from '../components/ArticleList';

const Articles: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">所有文章</h1>
      <ArticleList posts={posts} />
    </div>
  );
}

export default Articles;