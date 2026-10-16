import React from 'react';

export default function Projects() {
  return (
    <section className="min-h-[calc(100vh-4rem)] bg-slate-950 text-white px-4 sm:px-6 lg:px-8 py-12" dir="rtl">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* سربرگ بخش پروژه‌ها */}
        <div className="text-center space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-100">
            پروژه‌های <span className="text-emerald-400">برگزیده دوره</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            نمایش برنامه‌های کاربردی که در طول دوره آموزشی به طور کامل پیاده‌سازی و روی سرور ورسل مستقر کرده‌ام.
          </p>
        </div>

        {/* شبکه گرید ۲ ستونه برای پروژه‌ها */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
          
          {/* کارت پروژه اول: فروشگاه آنلاین Simple Shop */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-lg hover:border-emerald-500/40 transition-all duration-300 flex flex-col group">
            
            {/* باکس تصویر بزرگ و کامل فروشگاه */}
            <div className="w-full aspect-video bg-slate-800 overflow-hidden relative">
              <img 
                src="moon.png" 
                alt="Simple Shop"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                onError={(e) => { e.target.src = "https://placeholder.com"; }}
              />
            </div>

            {/* محتوای متنی پروژه فروشگاه */}
            <div className="p-6 flex flex-col flex-grow space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold text-gray-200 group-hover:text-emerald-400 transition-colors">
                  فروشگاه آنلاین (Simple Shop)
                </h3>
                <span className="text-xs font-mono bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded-full border border-emerald-500/20">React</span>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed flex-grow text-justify">
                یک برنامه کامل فروشگاهی با معماری کامپوننت‌محور در React که دارای قابلیت مدیریت محصولات، کاتالوگ کارت‌های سخت‌افزاری مدرن، سیستم پیشرفته سبد خرید پویا با محاسبه خودکار قیمت‌ها و ثبت لیست نهایی اقلام خریداری شده است.
              </p>
              
              <div className="pt-2">
                <a 
                  href="https://shop-mahdi.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center py-2.5 px-4 bg-slate-950 hover:bg-emerald-500 hover:text-slate-950 text-emerald-400 font-bold text-sm rounded-lg border border-slate-700 hover:border-transparent shadow-md transition-all duration-300"
                >
                  مشاهده نسخه زنده (Vercel)
                </a>
              </div>
            </div>

          </div>

          {/* کارت پروژه دوم: مدیریت عادات هفتگی Habit Tracker */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-lg hover:border-emerald-500/40 transition-all duration-300 flex flex-col group">
            
            {/* باکس تصویر بزرگ و کامل هبیت ترکر */}
            <div className="w-full aspect-video bg-slate-800 overflow-hidden relative flex items-center justify-center">
              {/* نکته: اگر اسکرین‌شات از این پروژه داری، آدرسش را جایگزین لینک زیر کن */}
              <img 
                src="cool.png" 
                alt="Habit Tracker"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* محتوای متنی پروژه هبیت ترکر */}
            <div className="p-6 flex flex-col flex-grow space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold text-gray-200 group-hover:text-emerald-400 transition-colors">
                  مدیریت عادات هفتگی (Habit Tracker)
                </h3>
                <span className="text-xs font-mono bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded-full border border-emerald-500/20">JS / Web</span>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed flex-grow text-justify">
                یک ابزار کاربردی برای ثبت عادات تمرینی هفتگی. این پروژه مجهز به سیستم پویای اضافه کردن تسک جدید، دسته‌بندی موضوعی (مطالعه، کدنویسی، زبان)، فرم سرچ زمان واقعی، محاسبه‌گر درصدی میزان پیشرفت کل جدول و عملیات حذف فیلدها است.
              </p>
              
              <div className="pt-2">
                <a 
                  href="https://first-js-two.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center py-2.5 px-4 bg-slate-950 hover:bg-emerald-500 hover:text-slate-950 text-emerald-400 font-bold text-sm rounded-lg border border-slate-700 hover:border-transparent shadow-md transition-all duration-300"
                >
                  مشاهده نسخه زنده (Vercel)
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
