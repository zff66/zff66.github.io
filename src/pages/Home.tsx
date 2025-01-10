import React from 'react';
import { posts, popularTags } from '../data';
import Sidebar from '../components/Sidebar';
import ArticleList from '../components/ArticleList';

const Home: React.FC = () => {
  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <ArticleList posts={posts} />
        </div>
        <Sidebar tags={popularTags} />
      </div>
    </main>
  );
};

export default Home;