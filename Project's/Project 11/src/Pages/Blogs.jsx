import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import {
  HiOutlineDocumentText,
  HiOutlineViewGrid,
  HiOutlineMenu,
  HiOutlineEmojiSad,
  HiOutlineRefresh,
} from "react-icons/hi";
import postsData from "../Data/posts.json";
import { FaChevronRight, FaClock, FaSearch } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa6";

export default function Blogs() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [viewMode, setViewMode] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredArticles, setFilteredArticles] = useState([]);

  useEffect(() => {
    const categoryFromUrl = searchParams.get("category");
    if (categoryFromUrl) {
      setActiveCategory(categoryFromUrl);
    }
  }, [searchParams]);

  const resetFilters = () => {
    setSearchQuery("");
    setActiveCategory("all");
    setCurrentPage(1);
    setSearchParams({});
  };

  const categories = [
    { id: "all", name: "جميع المقالات" },
    ...postsData.categories.map((cat) => ({
      id: cat.name,
      name: cat.name,
    })),
  ];

  const allArticles = postsData.posts.map((post, index) => ({
    id: post.id,
    title: post.title,
    description: post.excerpt,
    image: post.image,
    category: post.category,
    readTime: post.readTime,
    date: post.date,
    author: post.author,
    slug: `/blog/${post.slug}`,
    delay: index * 100,
  }));

  useEffect(() => {
    let filtered = allArticles;

    if (activeCategory !== "all") {
      filtered = filtered.filter(
        (article) => article.category === activeCategory,
      );
    }

    if (searchQuery.trim() !== "") {
      filtered = filtered.filter(
        (article) =>
          article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          article.description.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    }

    setFilteredArticles(filtered);
    setCurrentPage(1);
  }, [searchQuery, activeCategory]);

  const articlesPerPage = 6;
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
  const startIndex = (currentPage - 1) * articlesPerPage;
  const endIndex = startIndex + articlesPerPage;
  const currentArticles = filteredArticles.slice(startIndex, endIndex);

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
    setCurrentPage(1);
    setSearchParams({});
  };

  return (
    <main className="flex-grow pt-20">
      <div className="min-h-screen bg-[#0a0a0a]">
        <div className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[#0a0a0a]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-flex items-center gap-2 mb-6 px-4 py-2 text-orange-400 rounded-full text-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              <HiOutlineDocumentText />
              مدونتنا
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              استكشف{" "}
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                مقالاتنا
              </span>
            </h1>

            <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
              اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث
            </p>
          </div>
        </div>

        <div className="sticky top-20 z-40 bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-[#262626]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="relative w-full md:w-80">
                <input
                  type="text"
                  placeholder="ابحث في المقالات..."
                  className="w-full px-5 py-3 pr-12 pl-12 bg-[#161616] border border-[#262626] rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:border-orange-500/50 transition-colors"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500" />
              </div>

              <div className="flex flex-wrap justify-center gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => handleCategoryChange(category.id)}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                      activeCategory === category.id
                        ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white"
                        : "bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/30"
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 scroll-mt-[146px]">
          <div className="mb-8 flex items-center justify-between">
            <p className="text-neutral-400">
              عرض{" "}
              <span className="font-bold text-white">
                {filteredArticles.length}
              </span>{" "}
              مقالات
            </p>

            <div className="flex items-center gap-2">
              <div className="flex items-center bg-[#161616] border border-[#262626] rounded-xl p-1">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    viewMode === "grid"
                      ? "bg-orange-500 text-white"
                      : "text-neutral-400 hover:text-white"
                  }`}
                  title="عرض شبكي"
                >
                  <HiOutlineViewGrid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    viewMode === "list"
                      ? "bg-orange-500 text-white"
                      : "text-neutral-400 hover:text-white"
                  }`}
                  title="عرض قائمة"
                >
                  <HiOutlineMenu className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {currentArticles.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-24 h-24 bg-[#161616] border border-[#262626] rounded-full flex items-center justify-center mx-auto mb-6">
                <HiOutlineEmojiSad className="w-12 h-12 text-neutral-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                لا توجد مقالات
              </h3>
              <p className="text-neutral-400 mb-6">
                حاول تعديل البحث أو الفلتر للعثور على ما تبحث عنه.
              </p>
              <button
                onClick={resetFilters}
                className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl font-medium hover:from-orange-600 hover:to-orange-700 transition-all duration-300 inline-flex items-center gap-2 shadow-lg shadow-orange-500/20"
              >
                <HiOutlineRefresh className="w-5 h-5" />
                إعادة تعيين الفلاتر
              </button>
            </div>
          ) : (
            <>
              {viewMode === "grid" && (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {currentArticles.map((article) => (
                    <article
                      key={article.id}
                      className="group bg-[#0a0a0a] border border-[#262626] rounded-2xl overflow-hidden hover:border-orange-500/30 transition-all duration-500"
                      style={{ animationDelay: `${article.delay}ms` }}
                    >
                      <a href={article.slug} className="block">
                        <div className="relative h-52 overflow-hidden">
                          <img
                            src={article.image}
                            alt={article.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
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
                              <FaClock className="w-4 h-4" />
                              {article.readTime}
                            </span>
                            <span className="w-1 h-1 bg-neutral-600 rounded-full"></span>
                            <span>{article.date}</span>
                          </div>

                          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors duration-300 line-clamp-2 leading-tight">
                            {article.title}
                          </h3>

                          <p className="text-neutral-400 mb-5 line-clamp-2 text-sm leading-relaxed">
                            {article.description}
                          </p>

                          <div className="flex items-center justify-between pt-4 border-t border-[#262626]">
                            <div className="flex items-center gap-3">
                              <img
                                src={article.author.avatar}
                                alt={article.author.name}
                                className="w-9 h-9 rounded-full object-cover ring-2 ring-[#262626]"
                              />
                              <div>
                                <p className="text-sm font-medium text-white">
                                  {article.author.name}
                                </p>
                                <p className="text-xs text-neutral-500">
                                  {article.author.role}
                                </p>
                              </div>
                            </div>

                            <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-300 border border-orange-500/20 group-hover:border-transparent">
                              <FaChevronRight className="w-4 h-4 text-orange-500 group-hover:text-white transition-colors duration-300 rotate-180" />
                            </div>
                          </div>
                        </div>
                      </a>
                    </article>
                  ))}
                </div>
              )}

              {viewMode === "list" && (
                <div className="space-y-6">
                  {currentArticles.map((article) => (
                    <article
                      key={article.id}
                      className="group bg-[#0a0a0a] border border-[#262626] rounded-2xl overflow-hidden hover:border-orange-500/30 transition-all duration-500"
                      style={{ animationDelay: `${article.delay}ms` }}
                    >
                      <a href={article.slug} className="block">
                        <div className="flex flex-col md:flex-row">
                          <div className="relative md:w-80 h-56 md:h-auto overflow-hidden flex-shrink-0">
                            <img
                              src={article.image}
                              alt={article.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <div className="absolute top-4 right-4">
                              <span className="px-3 py-1 bg-[#0a0a0a]/80 backdrop-blur-sm text-white text-xs font-semibold rounded-full border border-[#333333]">
                                {article.category}
                              </span>
                            </div>
                          </div>

                          <div className="flex-1 p-6 md:p-8 flex flex-col justify-between">
                            <div>
                              <div className="flex items-center gap-3 text-sm text-neutral-500 mb-3">
                                <span className="flex items-center gap-1">
                                  <FaClock className="w-4 h-4" />
                                  {article.readTime}
                                </span>
                                <span className="w-1 h-1 bg-neutral-600 rounded-full"></span>
                                <span>{article.date}</span>
                              </div>

                              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-orange-500 transition-colors duration-300 leading-tight">
                                {article.title}
                              </h3>

                              <p className="text-neutral-400 mb-6 line-clamp-3 text-base leading-relaxed">
                                {article.description}
                              </p>
                            </div>

                            <div className="flex items-center justify-between pt-4 border-t border-[#262626]">
                              <div className="flex items-center gap-3">
                                <img
                                  src={article.author.avatar}
                                  alt={article.author.name}
                                  className="w-12 h-12 rounded-full object-cover ring-2 ring-[#262626]"
                                />
                                <div>
                                  <p className="text-base font-medium text-white">
                                    {article.author.name}
                                  </p>
                                  <p className="text-sm text-neutral-500">
                                    {article.author.role}
                                  </p>
                                </div>
                              </div>

                              <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-300 border border-orange-500/20 group-hover:border-transparent">
                                <FaChevronRight className="w-4 h-4 text-orange-500 group-hover:text-white transition-colors duration-300 rotate-180" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </article>
                  ))}
                </div>
              )}

              {totalPages > 1 && (
                <div className="flex justify-center items-center gap-2 mt-12">
                  <button
                    disabled={currentPage === 1}
                    onClick={() =>
                      setCurrentPage((prev) => Math.max(prev - 1, 1))
                    }
                    className={`p-3 rounded-xl border transition-all duration-300 ${
                      currentPage === 1
                        ? "bg-[#0a0a0a] border-[#262626] text-neutral-600 cursor-not-allowed opacity-50"
                        : "bg-[#161616] border-[#262626] text-white hover:border-orange-500/50 hover:bg-[#1a1a1a]"
                    }`}
                  >
                    <FaChevronLeft className="w-5 h-5 rotate-180" />
                  </button>

                  <div className="flex items-center gap-1">
                    {Array.from(
                      { length: Math.min(totalPages, 5) },
                      (_, i) => i + 1,
                    ).map((page) => (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`min-w-[44px] h-11 rounded-xl text-sm font-medium transition-all duration-300 ${
                          currentPage === page
                            ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white"
                            : "bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/50 hover:text-white"
                        }`}
                      >
                        {page}
                      </button>
                    ))}
                  </div>

                  <button
                    disabled={currentPage === totalPages}
                    onClick={() =>
                      setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                    }
                    className={`p-3 rounded-xl border transition-all duration-300 ${
                      currentPage === totalPages
                        ? "bg-[#0a0a0a] border-[#262626] text-neutral-600 cursor-not-allowed opacity-50"
                        : "bg-[#161616] border-[#262626] text-white hover:border-orange-500/50 hover:bg-[#1a1a1a]"
                    }`}
                  >
                    <FaChevronRight className="w-5 h-5 rotate-180" />
                  </button>
                </div>
              )}

              <p className="text-center text-neutral-500 mt-4 text-sm">
                صفحة {currentPage} من {totalPages}
              </p>
            </>
          )}
        </div>
      </div>
    </main>
  );
}
