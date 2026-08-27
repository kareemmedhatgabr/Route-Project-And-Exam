import {
  FaBolt,
  FaBookOpen,
  FaCheck,
  FaEnvelope,
  FaGithub,
  FaHandshake,
  FaLinkedin,
  FaNewspaper,
  FaPenNib,
  FaUsers,
} from "react-icons/fa";
import { FaArrowsRotate, FaBullseye, FaXTwitter } from "react-icons/fa6";

export default function AboutUs() {
  return (
    <main className="flex-grow pt-20">
      <div className="bg-[#0a0a0a]">
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-[#0a0a0a]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-20 w-72 h-72 bg-orange-500/20 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-yellow-500/10 rounded-full blur-[120px]"></div>
          </div>

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-[#161616] border border-[#262626] rounded-full text-sm  text-orange-500">
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse "></span>
              من نحن
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              مهمتنا هي{" "}
              <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
                الإعلام والإلهام
              </span>
            </h1>

            <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed mb-12">
              مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين
              ونصائح عملية لتطوير مهاراتكم. نحن شغوفون بمشاركة المعرفة ومساعدة
              المصورين على تنمية مهاراتهم من خلال محتوى عالي الجودة.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="bg-[#161616] border border-[#262626] rounded-2xl p-6 hover:border-orange-500/30 transition-all">
                <FaUsers className="text-2xl text-orange-500 mb-2 mx-auto block" />
                <div className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent mb-1">
                  +2مليون
                </div>
                <div className="text-sm text-neutral-500">قارئ شهرياً</div>
              </div>

              <div className="bg-[#161616] border border-[#262626] rounded-2xl p-6 hover:border-orange-500/30 transition-all">
                <FaNewspaper className="text-2xl text-orange-500 mb-2 mx-auto block" />
                <div className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent mb-1">
                  +500
                </div>
                <div className="text-sm text-neutral-500">مقالة منشورة</div>
              </div>

              <div className="bg-[#161616] border border-[#262626] rounded-2xl p-6 hover:border-orange-500/30 transition-all">
                <FaPenNib className="text-2xl text-orange-500 mb-2 mx-auto block" />
                <div className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent mb-1">
                  +50
                </div>
                <div className="text-sm text-neutral-500">كاتب خبير</div>
              </div>

              <div className="bg-[#161616] border border-[#262626] rounded-2xl p-6 hover:border-orange-500/30 transition-all">
                <FaBookOpen className="text-2xl text-orange-500 mb-2 mx-auto block" />
                <div className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent mb-1">
                  +15
                </div>
                <div className="text-sm text-neutral-500">تصنيف</div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#111111] border-y border-[#262626]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
                <span className="w-1.5 h-8 bg-gradient-to-b from-orange-500 to-yellow-500 rounded-full"></span>
                قيمنا
                <span className="w-1.5 h-8 bg-gradient-to-b from-yellow-500 to-orange-500 rounded-full"></span>
              </h2>
              <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
                المبادئ التي توجه كل ما نقوم بإنشائه
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="group p-6 bg-[#161616] rounded-2xl border border-[#262626] hover:border-orange-500/30 transition-all duration-300 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-yellow-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <div className="relative">
                  <FaBullseye className="text-4xl text-orange-500 mb-4 mx-auto block" />
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-500 transition-colors">
                    الجودة أولاً
                  </h3>
                  <p className="text-neutral-400 text-sm">
                    محتوى مدروس ومكتوب بخبرة
                  </p>
                </div>
              </div>

              <div className="group p-6 bg-[#161616] rounded-2xl border border-[#262626] hover:border-orange-500/30 transition-all duration-300 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-600 to-orange-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <div className="relative">
                  <FaBolt className="text-4xl text-orange-500 mb-4 mx-auto block" />
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-500 transition-colors">
                    تركيز عملي
                  </h3>
                  <p className="text-neutral-400 text-sm">
                    أمثلة واقعية يمكنك تطبيقها اليوم
                  </p>
                </div>
              </div>

              <div className="group p-6 bg-[#161616] rounded-2xl border border-[#262626] hover:border-orange-500/30 transition-all duration-300 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-yellow-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <div className="relative">
                  <FaHandshake className="text-4xl text-orange-500 mb-4 mx-auto block" />
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-500 transition-colors">
                    المجتمع
                  </h3>
                  <p className="text-neutral-400 text-sm">
                    تعلم مع آلاف المصورين
                  </p>
                </div>
              </div>

              <div className="group p-6 bg-[#161616] rounded-2xl border border-[#262626] hover:border-orange-500/30 transition-all duration-300 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-600 to-orange-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <div className="relative">
                  <FaArrowsRotate className="text-4xl text-orange-500 mb-4 mx-auto block" />
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-500 transition-colors">
                    دائماً محدث
                  </h3>
                  <p className="text-neutral-400 text-sm">
                    أحدث الاتجاهات وأفضل الممارسات
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#0a0a0a]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-[#161616] border border-[#262626] rounded-full text-sm text-neutral-400">
                فريقنا
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                تعرف على كتابنا
              </h2>
              <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
                فريقنا من المصورين والكتاب ذوي الخبرة شغوفون بمشاركة معرفتهم مع
                المجتمع.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <TeamMemberCard key={index} {...member} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-orange-600 via-orange-500 to-yellow-500 relative overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-10 right-10 w-64 h-64 bg-white/20 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-10 left-10 w-48 h-48 bg-white/20 rounded-full blur-[80px]"></div>
          </div>

          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              لديك أسئلة؟ دعنا نتحدث!
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              نحب أن نسمع منك. سواء كان لديك سؤال حول محتوانا، أو تريد المساهمة،
              أو تريد فقط إلقاء التحية، لا تتردد في التواصل.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="mailto:hello@adasah.com"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0a0a0a] text-white font-semibold rounded-xl hover:bg-neutral-900 transition-all duration-300 hover:-translate-y-0.5"
              >
                <FaEnvelope className="w-5 h-5" />
                تواصل معنا
              </a>

              <a
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white/40 text-white font-semibold rounded-xl hover:bg-white hover:text-[#0a0a0a] transition-all duration-300"
                href="/blog"
              >
                تصفح المقالات
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

function TeamMemberCard({ name, role, image }) {
  return (
    <div className="group bg-[#161616] rounded-2xl p-6 text-center border border-[#262626] hover:border-orange-500/30 transition-all duration-300">
      <div className="relative inline-block mb-4">
        <img
          alt={name}
          className="w-24 h-24 rounded-full object-cover ring-4 ring-[#262626] group-hover:ring-orange-500/30 transition-all"
          src={image}
        />
        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-orange-500 rounded-full border-2 border-[#161616] flex items-center justify-center">
          <FaCheck className="w-3 h-3 text-white" />
        </div>
      </div>

      <h3 className="font-bold text-white text-lg">{name}</h3>
      <p className="text-orange-500 text-sm font-medium mb-4">{role}</p>

      <div className="flex justify-center gap-3">
        <a
          href="#"
          className="w-9 h-9 bg-[#262626] rounded-lg flex items-center justify-center text-neutral-500 hover:bg-orange-500 hover:text-white transition-colors"
        >
          <FaXTwitter className="w-4 h-4" />
        </a>

        <a
          href="#"
          className="w-9 h-9 bg-[#262626] rounded-lg flex items-center justify-center text-neutral-500 hover:bg-neutral-700 hover:text-white transition-colors"
        >
          <FaGithub className="w-4 h-4" />
        </a>

        <a
          href="#"
          className="w-9 h-9 bg-[#262626] rounded-lg flex items-center justify-center text-neutral-500 hover:bg-blue-600 hover:text-white transition-colors"
        >
          <FaLinkedin className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}

const teamMembers = [
  {
    name: "سالم أحمد",
    role: "مصور محترف",
    image: new URL("../assets/Images/member1.png", import.meta.url).href,
  },
  {
    name: "محمد علي",
    role: "مصور بورتريه",
    image: new URL("../assets/Images/member2.png", import.meta.url).href,
  },
  {
    name: "إبراهيم حسن",
    role: "مصور طبيعة",
    image: new URL("../assets/Images/member3.png", import.meta.url).href,
  },
  {
    name: "داود خالد",
    role: "مدرب تصوير",
    image: new URL("../assets/Images/member4.png", import.meta.url).href,
  },
  {
    name: "ليث محمود",
    role: "فنان بصري",
    image: new URL("../assets/Images/member5.png", import.meta.url).href,
  },
  {
    name: "جمال عبدالله",
    role: "مصور ومراجع تقني",
    image: new URL("../assets/Images/member6.png", import.meta.url).href,
  },
  {
    name: "خالد الفيصل",
    role: "مصور فلكي",
    image: new URL("../assets/Images/member7.png", import.meta.url).href,
  },
  {
    name: "نادر سعيد",
    role: "مصور شوارع",
    image: new URL("../assets/Images/member8.png", import.meta.url).href,
  },
  {
    name: "هاني الشمري",
    role: "مصور طعام",
    image: new URL("../assets/Images/member9.png", import.meta.url).href,
  },
  {
    name: "عمر الراشد",
    role: "مصور حياة برية",
    image: new URL("../assets/Images/member10.png", import.meta.url).href,
  },
  {
    name: "فارس العلي",
    role: "فنان فوتوغرافي",
    image: new URL("../assets/Images/member11.png", import.meta.url).href,
  },
  {
    name: "سامي الحربي",
    role: "خبير تعديل صور",
    image: new URL("../assets/Images/member12.png", import.meta.url).href,
  },
  {
    name: "رامي الخطيب",
    role: "مصور ماكرو",
    image: new URL("../assets/Images/member13.png", import.meta.url).href,
  },
  {
    name: "باسم المصري",
    role: "مصور فني",
    image: new URL("../assets/Images/member14.png", import.meta.url).href,
  },
  {
    name: "منصور الزهراني",
    role: "مصور زفاف",
    image: new URL("../assets/Images/member15.png", import.meta.url).href,
  },
  {
    name: "فيصل الدوسري",
    role: "مصور جوي",
    image: new URL("../assets/Images/member16.png", import.meta.url).href,
  },
  {
    name: "لؤي الصالح",
    role: "مصور تجاري",
    image: new URL("../assets/Images/member17.png", import.meta.url).href,
  },
  {
    name: "طارق النعيمي",
    role: "مصور معماري",
    image: new URL("../assets/Images/member18.png", import.meta.url).href,
  },
  {
    name: "أحمد الشهري",
    role: "مصور رياضي",
    image: new URL("../assets/Images/member19.png", import.meta.url).href,
  },
  {
    name: "ماجد القحطاني",
    role: "مصور استوديو",
    image: new URL("../assets/Images/member20.png", import.meta.url).href,
  },
  {
    name: "ياسر العتيبي",
    role: "مصور رحالة",
    image: new URL("../assets/Images/member21.png", import.meta.url).href,
  },
  {
    name: "دحام الحسيني",
    role: "فنان بصري",
    image: new URL("../assets/Images/member22.png", import.meta.url).href,
  },
  {
    name: "نايف المطيري",
    role: "مصور مواليد",
    image: new URL("../assets/Images/member23.png", import.meta.url).href,
  },
  {
    name: "عبدالله الغامدي",
    role: "مصور عقارات",
    image: new URL("../assets/Images/member24.png", import.meta.url).href,
  },
  {
    name: "كريم الفهد",
    role: "خبير تقني",
    image: new URL("../assets/Images/member25.png", import.meta.url).href,
  },
  {
    name: "سلطان الراجحي",
    role: "فنان تصوير",
    image: new URL("../assets/Images/member26.png", import.meta.url).href,
  },
  {
    name: "فهد السبيعي",
    role: "مراجع معدات",
    image: new URL("../assets/Images/member27.png", import.meta.url).href,
  },
  {
    name: "راشد الجاسر",
    role: "فنان بصري",
    image: new URL("../assets/Images/member28.png", import.meta.url).href,
  },
];
