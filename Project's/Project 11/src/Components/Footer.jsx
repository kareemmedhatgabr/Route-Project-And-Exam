import {
  FaGithub,
  FaHeart,
  FaLinkedinIn,
  FaYoutube,
  FaChevronRight,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="relative bg-[#0a0a0a] text-neutral-300 overflow-hidden border-t border-[#262626]">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <a className="flex items-center gap-3 mb-6 group" href="/">
              <div
                className="w-11 h-11 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center group-hover:scale-105 transition-all duration-300"
                style={{ boxShadow: "rgba(249, 115, 22, 0.3) 0px 4px 20px" }}
              >
                <span className="text-white font-bold text-xl">ع</span>
              </div>
              <span className="text-xl font-bold text-white">عدسة</span>
            </a>
            <p className="text-sm text-neutral-500 mb-6 leading-relaxed">
              مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين
              ونصائح عملية لتطوير مهاراتكم.
            </p>

            <div className="flex gap-2">
              <a
                href="https://twitter.com/adasah"
                target="_blank"
                className="w-10 h-10 bg-[#161616] border border-[#262626] hover:bg-gradient-to-br hover:from-orange-500 hover:to-orange-600 hover:border-transparent rounded-xl flex items-center justify-center text-neutral-500 hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="twitter"
              >
                <FaXTwitter />
              </a>
              <a
                href="https://github.com/adasah"
                target="_blank"
                className="w-10 h-10 bg-[#161616] border border-[#262626] hover:bg-gradient-to-br hover:from-orange-500 hover:to-orange-600 hover:border-transparent rounded-xl flex items-center justify-center text-neutral-500 hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="github"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/company/adasah"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#161616] border border-[#262626] hover:bg-gradient-to-br hover:from-orange-500 hover:to-orange-600 hover:border-transparent rounded-xl flex items-center justify-center text-neutral-500 hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="linkedin"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://youtube.com/@adasah"
                target="_blank"
                className="w-10 h-10 bg-[#161616] border border-[#262626] hover:bg-gradient-to-br hover:from-orange-500 hover:to-orange-600 hover:border-transparent rounded-xl flex items-center justify-center text-neutral-500 hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="youtube"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full"></span>
              استكشف
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  className="text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group"
                  href="/"
                >
                  <FaChevronRight className="w-4 h-4 opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300 text-orange-500 rotate-180" />
                  الرئيسية
                </a>
              </li>
              <li>
                <a
                  className="text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group"
                  href="/blog"
                >
                  <FaChevronRight className="w-4 h-4 opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300 text-orange-500 rotate-180" />
                  المدونة
                </a>
              </li>
              <li>
                <a
                  className="text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group"
                  href="/about"
                >
                  <FaChevronRight className="w-4 h-4 opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300 text-orange-500 rotate-180" />
                  من نحن
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full"></span>
              التصنيفات
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  className="text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group"
                  href="/blog?category=إضاءة"
                >
                  <FaChevronRight className="w-4 h-4 opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300 text-orange-500 rotate-180" />
                  إضاءة
                </a>
              </li>
              <li>
                <a
                  className="text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group"
                  href="/blog?category=بورتريه"
                >
                  <FaChevronRight className="w-4 h-4 opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300 text-orange-500 rotate-180" />
                  بورتريه
                </a>
              </li>
              <li>
                <a
                  className="text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group"
                  href="/blog?category=مناظر طبيعية"
                >
                  <FaChevronRight className="w-4 h-4 opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300 text-orange-500 rotate-180" />
                  مناظر طبيعية
                </a>
              </li>
              <li>
                <a
                  className="text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group"
                  href="/blog?category=تقنيات"
                >
                  <FaChevronRight className="w-4 h-4 opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300 text-orange-500 rotate-180" />
                  تقنيات
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full"></span>
              ابقى على اطلاع
            </h3>
            <p className="text-sm text-neutral-500 mb-4">
              اشترك للحصول على أحدث المقالات والتحديثات.
            </p>
            <form className="space-y-3">
              <div className="relative">
                <input
                  placeholder="أدخل بريدك الإلكتروني"
                  className="w-full px-4 py-3 bg-[#161616] border border-[#262626] rounded-xl text-sm text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all duration-300 placeholder-neutral-600"
                  type="email"
                />
              </div>
              <button type="submit" className="w-full btn-primary text-sm">
                اشترك
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="relative border-t border-[#262626]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="flex items-center gap-1 text-sm text-neutral-600">
              © 2026 عدسة. صنع بكل
              <FaHeart className="text-orange-500" />
              جميع الحقوق محفوظة.
            </p>

            <div className="flex gap-6">
              <a
                className="text-sm text-neutral-600 hover:text-orange-500 transition-colors duration-300"
                href="/privacy"
              >
                سياسة الخصوصية
              </a>
              <a
                className="text-sm text-neutral-600 hover:text-orange-500 transition-colors duration-300"
                href="/terms"
              >
                شروط الخدمة
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
