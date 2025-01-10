import React from 'react';
import { User, Github, Twitter, Mail, Tag, Rss, Coffee } from 'lucide-react';

interface SidebarProps {
  tags: string[];
}

const Sidebar: React.FC<SidebarProps> = ({ tags }) => {
  return (
    <div className="space-y-6">
      {/* 个人简介 */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex flex-col items-center text-center">
          <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mb-4 ring-4 ring-blue-50">
            <User size={40} className="text-white" />
          </div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">张三</h2>
          <p className="text-gray-600 mb-4">
            前端开发工程师，热爱技术，喜欢分享。专注于 React 生态系统和 Web 性能优化。
          </p>
          <div className="flex space-x-4 mb-4">
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              <Github size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              <Mail size={20} />
            </a>
          </div>
          <div className="flex space-x-4 text-sm text-gray-500">
            <div>
              <div className="font-semibold text-gray-900">31</div>
              <div>文章</div>
            </div>
            <div className="border-l border-gray-200"></div>
            <div>
              <div className="font-semibold text-gray-900">1.2k</div>
              <div>阅读</div>
            </div>
            <div className="border-l border-gray-200"></div>
            <div>
              <div className="font-semibold text-gray-900">187</div>
              <div>评论</div>
            </div>
          </div>
        </div>
      </div>

      {/* 热门标签 */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center space-x-2 mb-4">
          <Tag className="text-blue-600" size={20} />
          <h3 className="text-lg font-semibold text-gray-900">热门标签</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <a
              key={index}
              href="#"
              className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm hover:bg-blue-50 hover:text-blue-600 transition-colors"
            >
              {tag}
            </a>
          ))}
        </div>
      </div>

      {/* 订阅区域 */}
      <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-sm p-6 text-white">
        <div className="flex items-center space-x-2 mb-4">
          <Rss size={20} />
          <h3 className="text-lg font-semibold">订阅更新</h3>
        </div>
        <p className="text-blue-50 mb-4">订阅我的文章，获取最新技术动态和个人分享。</p>
        <input
          type="email"
          placeholder="输入您的邮箱"
          className="w-full px-4 py-2 rounded-lg bg-white/10 placeholder-blue-100 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 mb-4"
        />
        <button className="w-full bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
          订阅
        </button>
      </div>

      {/* 赞赏支持 */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-center space-x-2 text-gray-900">
          <Coffee size={20} />
          <span className="font-semibold">赞赏支持</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;