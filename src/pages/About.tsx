import React from 'react';
import { Github, Twitter, Mail, Coffee } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600"></div>
        <div className="relative px-6 pb-6">
          <div className="flex flex-col items-center -mt-20">
            <div className="w-32 h-32 bg-white rounded-full p-2 shadow-lg">
              <div className="w-full h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <span className="text-4xl text-white font-bold">张</span>
              </div>
            </div>
            <h1 className="mt-4 text-3xl font-bold text-gray-900">张三</h1>
            <p className="mt-2 text-gray-600">前端开发工程师</p>
            
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                <Github size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div className="mt-8 prose prose-blue max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">关于我</h2>
            <p className="text-gray-600 mb-6">
              你好！我是一名热爱技术的前端开发工程师，专注于 React 生态系统和 Web 性能优化。
              在过去的几年里，我参与过多个大型 Web 应用的开发，对现代前端技术栈有深入的理解。
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">技术栈</h2>
            <div className="flex flex-wrap gap-2 mb-6">
              {['React', 'TypeScript', 'Node.js', 'Next.js', 'Tailwind CSS', 'GraphQL'].map((tech, index) => (
                <span key={index} className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">联系我</h2>
            <p className="text-gray-600 mb-6">
              如果你对我的文章有任何问题，或者想要交流技术，欢迎通过以下方式联系我：
            </p>
            <ul className="list-none space-y-2 mb-6">
              <li className="flex items-center text-gray-600">
                <Mail className="mr-2" size={20} />
                <span>example@email.com</span>
              </li>
              <li className="flex items-center text-gray-600">
                <Github className="mr-2" size={20} />
                <span>@username</span>
              </li>
            </ul>

            <div className="mt-8 flex justify-center">
              <button className="flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <Coffee size={20} />
                <span>请我喝咖啡</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;