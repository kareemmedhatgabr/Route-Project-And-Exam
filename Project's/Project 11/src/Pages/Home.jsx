import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaNewspaper,
  FaUsers,
  FaFolderOpen,
  FaPenNib,
  FaSun,
  FaUser,
  FaMountain,
  FaArrowLeft,
  FaInfoCircle,
  FaChevronLeft,
  FaStar,
  FaClock,
  FaEnvelope,
} from "react-icons/fa";
import { FaSliders } from "react-icons/fa6";


import postsData from "../Data/posts.json";

export default function Home() {
  const [email, setEmail] = useState("");


  const posts = postsData.posts;
  const categories = postsData.categories;


  const featuredArticles = posts
    .filter((post) => post.featured)
    .slice(0, 3)
    .map((post) => ({
      title: post.title,
      description: post.excerpt,
      category: post.category,
      readTime: post.readTime,
      image: post.image,
      author: post.author.name,
      authorImage: post.author.avatar,
      date: post.date,
      slug: post.slug,
    }));

  const recentArticles = posts.slice(3, 6).map((post) => ({
    title: post.title,
    description: post.excerpt,
    category: post.category,
    readTime: post.readTime,
    image: post.image,
    author: post.author.name,
    authorImage: post.author.avatar,
    authorRole: post.author.role,
    date: post.date,
    slug: post.slug,
  }));

  const categoryIcons = {
    إضاءة: <FaSun />,
    بورتريه: <FaUser />,
    "مناظر طبيعية": <FaMountain />,
    تقنيات: <FaSliders />,
    معدات: <FaSun />,
  };

  const categoriesWithIcons = categories.map((cat) => ({
    ...cat,
    icon: categoryIcons[cat.name] || <FaSun />,
    gradient: "from-orange-500 to-yellow-500",
  }));

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(`شكراً للاشتراك! ${email}`);
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] px-4">
   
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0a0a]">
    
        <div className="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl blob"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl blob"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 mb-8 animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              <span className="text-sm font-medium text-neutral-300">
                مرحباً بك في {postsData.siteInfo.name}
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
              اكتشف <span className="gradient-text">فن</span>
              <br />
              التصوير الفوتوغرافي
            </h1>

            <p className="text-xl md:text-2xl text-neutral-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              {postsData.siteInfo.description}
            </p>

         
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
              <Link to="/blog">
                <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/50 hover:-translate-y-0.5 group">
                  <span>استكشف المقالات</span>
                  <FaArrowLeft />
                </button>
              </Link>
              <Link to="/about">
                <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white rounded-xl font-semibold transition-all duration-300 hover:bg-white/10">
                  <FaInfoCircle />
                  <span>اعرف المزيد</span>
                </button>
              </Link>
            </div>

       
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {[
                {
                  icon: <FaNewspaper />,
                  value: `${posts.length}+`,
                  label: "مقالة",
                },
                { icon: <FaUsers />, value: "+10ألف", label: "قارئ" },
                {
                  icon: <FaFolderOpen />,
                  value: categories.length.toString(),
                  label: "تصنيفات",
                },
                { icon: <FaPenNib />, value: "6", label: "كاتب" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="glass-card p-4 rounded-2xl hover:scale-105 transition-transform duration-300 flex flex-col items-center text-center"
                >
                  <div className="text-2xl mb-1 text-orange-500">
                    {stat.icon}
                  </div>
                  <p className="text-2xl md:text-3xl font-bold gradient-text">
                    {stat.value}
                  </p>
                  <p className="text-neutral-500 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

   
      <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-orange-500/5 to-transparent"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                </span>
                <span className="text-sm font-medium text-neutral-400 text-orange-500">
                  مميز
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
                مقالات مختارة
              </h2>
              <p className="text-neutral-400 max-w-lg">
                محتوى منتقى لبدء رحلة تعلمك
              </p>
            </div>
            <Link to="/blog">
              <button className="group inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl font-medium transition-all duration-300 hover:-translate-y-0.5">
                عرض الكل
                <FaChevronLeft />
              </button>
            </Link>
          </div>

          <div className="space-y-8">
            {featuredArticles.map((article, index) => (
              <Link key={index} to={`/blog/${article.slug}`}>
                <article className="group relative bg-[#161616] rounded-3xl overflow-hidden border border-[#262626] hover:border-orange-500/30 transition-all duration-500 cursor-pointer">
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="relative h-72 md:h-[400px] overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                      <div className="absolute top-4 right-4">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-orange-500 to-yellow-500 text-white text-xs font-semibold rounded-full">
                          <FaStar />
                          مميز
                        </span>
                      </div>
                    </div>

                    <div className="p-8 md:p-10 flex flex-col justify-center bg-[#161616]">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 bg-orange-500/10 text-orange-500 text-xs font-semibold rounded-full border border-orange-500/20">
                          {article.category}
                        </span>
                        <span className="flex items-center gap-1 text-sm text-neutral-500">
                          <FaClock />
                          {article.readTime}
                        </span>
                      </div>

                      <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-orange-500 transition-colors duration-300 leading-tight">
                        {article.title}
                      </h2>

                      <p className="text-neutral-400 mb-6 leading-relaxed">
                        {article.description}
                      </p>

                      <div className="flex items-center justify-between mt-auto">
                        <div className="flex items-center gap-3">
                          <div className="relative">
                            <img
                              src={article.authorImage}
                              alt={article.author}
                              className="w-12 h-12 rounded-full object-cover ring-2 ring-[#262626]"
                            />
                            <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-orange-500 rounded-full border-2 border-[#161616]"></div>
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-white">
                              {article.author}
                            </p>
                            <p className="text-xs text-neutral-500">
                              {article.date}
                            </p>
                          </div>
                        </div>

                        <span className="inline-flex items-center gap-2 text-orange-500 font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                          اقرأ المقال
                          <FaArrowLeft />
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>


      <section className="py-24 bg-[#111111] relative border-y border-[#262626]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              <span className="text-sm font-medium text-neutral-400">
                التصنيفات
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
              استكشف حسب الموضوع
            </h2>
            <p className="text-neutral-400 max-w-lg mx-auto">
              اعثر على محتوى مصمم حسب اهتماماتك
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
            {categoriesWithIcons.map((category, index) => (
              <Link
                key={index}
                to={`/blog?category=${encodeURIComponent(category.name)}`}
                className="group relative block p-6 rounded-2xl bg-[#161616] border border-[#262626] overflow-hidden hover:border-orange-500/30 transition-all duration-500 hover:-translate-y-1"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                ></div>

                <div className="relative z-10">
                  <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors duration-300 border border-orange-500/20 group-hover:border-transparent text-orange-400 group-hover:text-white">
                    <span className="text-xl">{category.icon}</span>
                  </div>
                  <h3 className="font-bold text-lg text-white group-hover:text-white transition-colors duration-300 mb-1">
                    {category.name}
                  </h3>
                  <p className="text-sm text-neutral-500 group-hover:text-white/80 transition-colors duration-300">
                    {category.count} مقالة
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

     
      <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-orange-500/5 to-transparent"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                </span>
                <span className="text-sm font-medium text-neutral-400">
                  الأحدث
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
                أحدث المقالات
              </h2>
              <p className="text-neutral-400 max-w-lg">
                محتوى جديد طازج من المطبعة
              </p>
            </div>
            <Link to="/blog">
              <button className="group inline-flex items-center gap-2 text-orange-500 font-semibold hover:text-orange-400 transition-colors">
                عرض جميع المقالات
                <FaArrowLeft />
              </button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentArticles.map((article, index) => (
              <Link key={index} to={`/blog/${article.slug}`}>
                <article className="group bg-[#161616] rounded-2xl overflow-hidden border border-[#262626] hover:border-orange-500/30 transition-all duration-500 hover:-translate-y-1 cursor-pointer">
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-[#0a0a0a]/80 backdrop-blur-sm text-white text-xs font-semibold rounded-full border border-[#333333]">
                        {article.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-3 text-sm text-neutral-500 mb-3">
                      <span className="flex items-center gap-1">
                        <FaClock />
                        {article.readTime}
                      </span>
                      <span className="w-1 h-1 bg-neutral-600 rounded-full"></span>
                      <span>{article.date}</span>
                    </div>

                    <div className="flex flex-col items-start text-right">
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors duration-300 leading-tight line-clamp-2">
                        {article.title}
                      </h3>

                      <p className="text-neutral-400 mb-5 text-sm leading-relaxed line-clamp-2">
                        {article.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-[#262626]">
                      <div className="flex items-center gap-3">
                        <img
                          src={article.authorImage}
                          alt={article.author}
                          className="w-9 h-9 rounded-full object-cover ring-2 ring-[#262626]"
                        />
                        <div>
                          <p className="text-sm font-medium text-white">
                            {article.author}
                          </p>
                          <p className="text-xs text-neutral-500">
                            {article.authorRole}
                          </p>
                        </div>
                      </div>

                      <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-300 border border-orange-500/20 group-hover:border-transparent ">
                        <FaChevronLeft className="text-orange-400" />
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>


      <section className="py-24 relative overflow-hidden bg-[#0a0a0a] w-full">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-orange-500/10 rounded-full blur-3xl"></div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#161616] rounded-3xl border border-[#262626] p-8 md:p-12 lg:p-16 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <FaEnvelope className="w-8 h-8 text-white" />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              اشترك في <span className="gradient-text">نشرتنا الإخبارية</span>
            </h2>

            <p className="text-neutral-400 text-lg mb-8 max-w-xl mx-auto">
              احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك
              الإلكتروني
            </p>

            <form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto mb-6"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="أدخل بريدك الإلكتروني"
                className="flex-1 px-5 py-4 rounded-xl bg-[#0a0a0a] border border-[#262626] focus:outline-none focus:border-orange-500/50 text-white placeholder-neutral-500 transition-colors"
                required
              />
              <button
                type="submit"
                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/50"
              >
                اشترك الآن
              </button>
            </form>

            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-neutral-500">
              <div className="flex items-center gap-4">
                <span>
                  انضم لـ{" "}
                  <span className="text-white font-medium">+10,000</span> مصور
                </span>
              </div>
              <span className="hidden sm:inline text-[#262626]">•</span>
              <span>بدون إزعاج</span>
              <span className="hidden sm:inline text-[#262626]">•</span>
              <span>إلغاء الاشتراك في أي وقت</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
