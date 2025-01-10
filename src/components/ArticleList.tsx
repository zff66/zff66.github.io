import React from 'react';
import { Calendar, Clock, Heart, MessageCircle, Share2, ChevronRight } from 'lucide-react';

interface Post {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  coverImage: string;
  likes: number;
  comments: number;
}

interface ArticleListProps {
  posts: Post[];
}

const ArticleList: React.FC<ArticleListProps> = ({ posts }) => {
  return (
    <div className="space-y-8">
      {posts.map((post, index) => (
        <article key={index} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
          <img 
            src={post.coverImage} 
            alt={post.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
              <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full">
                {post.category}
              </span>
              <div className="flex items-center">
                <Calendar size={16} className="mr-1" />
                {post.date}
              </div>
              <div className="flex items-center">
                <Clock size={16} className="mr-1" />
                {post.readTime}
              </div>
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
              <a href="#">{post.title}</a>
            </h2>
            <p className="text-gray-600 mb-4">{post.excerpt}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4 text-gray-500">
                <button className="flex items-center space-x-1 hover:text-red-500 transition-colors">
                  <Heart size={18} />
                  <span>{post.likes}</span>
                </button>
                <button className="flex items-center space-x-1 hover:text-blue-500 transition-colors">
                  <MessageCircle size={18} />
                  <span>{post.comments}</span>
                </button>
                <button className="flex items-center space-x-1 hover:text-green-500 transition-colors">
                  <Share2 size={18} />
                </button>
              </div>
              <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-700">
                阅读更多
                <ChevronRight size={16} className="ml-1" />
              </a>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default ArticleList;