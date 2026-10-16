import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', lastName: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: '' });
  };

  const validateForm = () => {
    let tempErrors = {};
    const trimmedName = formData.name.trim();
    const trimmedLastName = formData.lastName.trim();

    if (!trimmedName) {
      tempErrors.name = "نام خود را وارد کنید.";
    } else if (trimmedName.length < 3) {
      tempErrors.name = "نام باید حداقل ۳ حرف باشد.";
    } else if (trimmedName.length > 16) {
      tempErrors.name = "نام نمی‌تواند بیشتر از ۱۶ حرف باشد.";
    }

    if (!trimmedLastName) {
      tempErrors.lastName = "تخلص خود را وارد کنید.";
    } else if (trimmedLastName.length < 3) {
      tempErrors.lastName = "تخلص باید حداقل ۳ حرف باشد.";
    } else if (trimmedLastName.length > 16) {
      tempErrors.lastName = "تخلص نمی‌تواند بیشتر از ۱۶ حرف باشد.";
    }
    
    if (!formData.email.trim()) {
      tempErrors.email = "ایمیل خود را وارد کنید.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) 
 {
      tempErrors.email = "فرمت ایمیل وارد شده صحیح نیست.";
    }
    
    if (!formData.message.trim()) tempErrors.message = "پیام خود را بنویسید.";
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitStatus(null);
    if (!validateForm()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', lastName: '', email: '', message: '' });
    }, 2000);
  };

  return (
    <section className="min-h-[calc(100vh-4rem)] bg-slate-950 text-white px-4 sm:px-6 lg:px-8 py-12" dir="rtl">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* سربرگ */}
        <div className="text-center space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-100">
            ارتباط با <span className="text-emerald-400">من</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            می‌توانید از طریق فرم زیر با من در تماس باشید.
          </p>
        </div>

        {/* چیدمان دو ستونه */}
        <div className="flex flex-col lg:flex-row gap-12 pt-4">
          
          {/* ستون فرم تماس */}
          <div className="w-full lg:w-3/5 bg-slate-900 border border-slate-800 rounded-xl p-6 sm:p-8 shadow-md">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* فیلد نام */}
                <div className="flex flex-col space-y-2">
                  <label className="text-sm font-semibold text-gray-300">نام</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full bg-slate-950 border ${errors.name ? 'border-red-500' : 'border-slate-800'} rounded-lg px-4 py-2.5 text-sm text-gray-200 focus:outline-none focus:border-emerald-500 transition-colors`}
                    placeholder="محمد مهدی"
                  />
                  {errors.name && <span className="text-xs text-red-500">{errors.name}</span>}
                </div>

                {/* فیلد تخلص */}
                <div className="flex flex-col space-y-2">
                  <label className="text-sm font-semibold text-gray-300">تخلص</label>
                  <input 
                    type="text" 
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={`w-full bg-slate-950 border ${errors.lastName ? 'border-red-500' : 'border-slate-800'} rounded-lg px-4 py-2.5 text-sm text-gray-200 focus:outline-none focus:border-emerald-500 transition-colors`}
                    placeholder="غلامی"
                  />
                  {errors.lastName && <span className="text-xs text-red-500">{errors.lastName}</span>}
                </div>
              </div>

              {/* فیلد ایمیل */}
              <div className="flex flex-col space-y-2">
                <label className="text-sm font-semibold text-gray-300">آدرس ایمیل</label>
                <input 
                  type="text" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full bg-slate-950 border ${errors.email ? 'border-red-500' : 'border-slate-800'} rounded-lg px-4 py-2.5 text-sm text-gray-200 focus:outline-none focus:border-emerald-500 transition-colors text-left`}
                  placeholder="gholamigholami025@gmail.com"
                  dir="ltr"
                />
                {errors.email && <span className="text-xs text-red-500">{errors.email}</span>}
              </div>

              {/* فیلد متن پیام */}
              <div className="flex flex-col space-y-2">
                <label className="text-sm font-semibold text-gray-300">متن پیام شما</label>
                <textarea 
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full bg-slate-950 border ${errors.message ? 'border-red-500' : 'border-slate-800'} rounded-lg px-4 py-2.5 text-sm text-gray-200 focus:outline-none focus:border-emerald-500 transition-colors resize-none`}
                  placeholder="پیام خود را اینجا بنویسید..."
                ></textarea>
                {errors.message && <span className="text-xs text-red-500">{errors.message}</span>}
              </div>

              {submitStatus === 'success' && (
                <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 p-3 rounded-lg text-sm font-medium">
                  ✓ پیام شما با موفقیت ارسال شد!
                </div>
              )}

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-emerald-500 hover:bg-emerald-600 disabled:bg-slate-800 disabled:text-slate-500 text-slate-950 font-bold rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-slate-500 border-t-slate-950 rounded-full animate-spin"></span>
                    <span>در حال ارسال...</span>
                  </>
                ) : "ارسال پیام"}
              </button>

            </form>
          </div>

          {/* ستون اطلاعات ارتباطی واقعی و تکمیل شده */}
          <div className="w-full lg:w-2/5 space-y-6">
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-200 pb-3 border-b border-slate-850">اطلاعات مستقیم</h3>
              
              <div className="space-y-5">
                {/* ایمیل شما */}
                <div className="flex flex-col space-y-1">
                  <span className="text-xs text-slate-500">ایمیل کاری</span>
                  <a href="mailto:gholamigholami025@gmail.com" className="text-sm font-medium text-emerald-400 hover:underline select-all" dir="ltr">
                    gholamigholami025@gmail.com
                  </a>
                </div>

                {/* شماره تلفن و واتس‌اپ شما */}
                <div className="flex flex-col space-y-1">
                  <span className="text-xs text-slate-500">شماره تماس و واتس‌اپ</span>
                  <a 
                    href="https://wa.me" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-emerald-400 hover:underline flex items-center gap-1.5"
                    dir="ltr"
                  >
                    <span>+93 78 236 2355</span>
                  </a>
                </div>

                {/* لینکدین واقعی و متصل شده شما */}
                <div className="flex flex-col space-y-1">
                  <span className="text-xs text-slate-500">شبکه‌های حرفه‌ای</span>
                  <div className="flex gap-4 pt-1" dir="ltr">
                    <a 
                      href="https://www.linkedin.com/in/gholami-gholami-09a684440/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-sm text-emerald-400 hover:underline"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
