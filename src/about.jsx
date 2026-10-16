
 import React from 'react';

export default function About() {
  return (
    <section className="min-h-[calc(100vh-4rem)] bg-slate-950 text-white px-4 sm:px-6 lg:px-8 py-12" dir="rtl">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* سربرگ بخش درباره من */}
        <div className="text-center space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-100">
            درباره <span className="text-emerald-400">من</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            آشنایی بیشتر با من، مسیر آموزشی و اهدافی که دنبال می‌کنم.
          </p>
        </div>

        {/* بخش اصلی: چیدمان دو ستونه (در موبایل ستونی، در دسکتاپ ردیفی) */}
        <div className="flex flex-col lg:flex-row items-center gap-12 pt-4">
          
          {/* ستون اول: کانتینر عکس با دیزاین مدرن و افکت درخشان */}
          <div className="w-full lg:w-2/5 flex justify-center">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-2xl overflow-hidden border-2 border-slate-800 shadow-xl group hover:border-emerald-400/50 transition-all duration-300">
              
              {/* افکت لایه درخشان پشت عکس هنگام هاور */}
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
              
              {/* تگ عکس اصلی (کافیست بعداً آدرس واقعی عکس خود را در src جایگزین کنید) */}
              <img 
                src="mahdi.png" 
                alt="محمد مهدی غلامی" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* ستون دوم: اطلاعات متنی و بیوگرافی حرفه‌ای */}
          <div className="w-full lg:w-3/5 space-y-6 text-right">
            <h3 className="text-2xl font-bold text-gray-200">
              من <span className="text-emerald-400">محمد مهدی غلامی</span> هستم
            </h3>
            
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              من ۱۹ سال سن دارم و در حال حاضر آخرین مراحل تحصیلات خود را در مکتب سپری می‌کنم. در کنار تحصیلات رسمی، به دلیل علاقه شدیدی که به دنیای وب و برنامه‌نویسی داشتم، مسیر یادگیری توسعه فرانت‌اند را آغاز کردم و توانستم در این دوره مهارتی، تخصص‌های پایه‌ای ارزشمندی در React کسب کنم.
            </p>

            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              تسلط نسبتاً خوب من به زبان انگلیسی (در سطح B1/B2) به من کمک کرده است تا بتوانم به راحتی از مستندات رسمی فرانت‌اند استفاده کنم و دانش خودم را به‌روز نگه دارم. من همواره به دنبال یادگیری چالش‌های جدید در کدنویسی هستم و هدفم تبدیل شدن به یک توسعه‌دهنده حرفه‌ای فول‌استک است.
            </p>

            {/* لیست کوچک مشخصات کلیدی برای ظاهر شیک‌تر */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-900">
              <div className="flex items-center gap-2">
                <span className="text-emerald-400 font-bold">سن:</span>
                <span className="text-gray-300 text-sm sm:text-base">۱۹ سال</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-400 font-bold">وضعیت تحصیلی:</span>
                <span className="text-gray-300 text-sm sm:text-base">دانش‌آموز مکتب</span>
              </div>
              <div className="flex items-center gap-2 sm:col-span-2">
                <span className="text-emerald-400 font-bold">زبان انگلیسی:</span>
                <span className="text-gray-300 text-sm sm:text-base">سطح متوسط به بالا (B1 / B2)</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
