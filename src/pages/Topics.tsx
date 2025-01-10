import React from 'react';

const Topics: React.FC = () => {
  const topics = [
    {
      title: "React 深入浅出",
      description: "从基础到高级的 React 开发技巧和最佳实践",
      articleCount: 12,
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "性能优化实战",
      description: "Web 应用性能优化的各个方面，从加载到运行时优化",
      articleCount: 8,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "TypeScript 实践",
      description: "TypeScript 在实际项目中的应用和技巧分享",
      articleCount: 6,
      image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">专题合集</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {topics.map((topic, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            <img 
              src={topic.image} 
              alt={topic.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-2">{topic.title}</h2>
              <p className="text-gray-600 mb-4">{topic.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">{topic.articleCount} 篇文章</span>
                <button className="px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors">
                  查看专题
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Topics;