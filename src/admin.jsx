import React, { useEffect, useState } from "react";
import { createItem, deleteItem, getCollection, supabase, updateItem } from "./api";

const adminEmail = import.meta.env.VITE_ADMIN_EMAIL;

export default function Admin() {
  const [session, setSession] = useState(null);
  const [ready, setReady] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!supabase) {
      setReady(true);
      return;
    }

    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setReady(true);
    });
    const { data } = supabase.auth.onAuthStateChange((_event, nextSession) => {
      setSession(nextSession);
      setReady(true);
    });
    return () => data.subscription.unsubscribe();
  }, []);

  const signIn = async (event) => {
    event.preventDefault();
    setError("");
    setSubmitting(true);
    const { error: authError } = await supabase.auth.signInWithPassword({
      email: adminEmail,
      password,
    });
    setSubmitting(false);
    if (authError) setError("Sign-in failed. Check the admin password.");
  };

  if (!ready) return <p className="p-8 text-center text-white">Loading…</p>;

  if (!supabase || !adminEmail) {
    return (
      <p className="p-8 text-center text-white">
        Configure the Supabase settings and VITE_ADMIN_EMAIL to access the admin page.
      </p>
    );
  }

  if (!session) {
    return (
      <section className="min-h-screen bg-slate-950 px-4 py-16 text-white" dir="ltr">
        <form onSubmit={signIn} className="mx-auto max-w-sm space-y-5 rounded-xl border border-slate-800 bg-slate-900 p-6">
          <div>
            <h1 className="text-2xl font-bold">Admin sign-in</h1>
            <p className="mt-2 text-sm text-slate-400">{adminEmail}</p>
          </div>
          <label className="block space-y-2 text-sm text-slate-300">
            Password
            <input
              autoComplete="current-password"
              type="password"
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className={inputClass}
            />
          </label>
          {error && <p role="alert" className="text-sm text-red-300">{error}</p>}
          <button disabled={submitting} className="w-full rounded-lg bg-emerald-500 px-5 py-3 font-bold text-slate-950 disabled:opacity-60">
            {submitting ? "Signing in…" : "Sign in"}
          </button>
        </form>
      </section>
    );
  }

  return (
    <>
      <div className="flex justify-end bg-slate-950 px-6 pt-4">
        <button
          onClick={() => supabase.auth.signOut()}
          className="rounded-lg border border-slate-700 px-3 py-2 text-sm text-slate-300 hover:text-white"
        >
          Sign out
        </button>
      </div>
      <AdminPanel />
    </>
  );
}

const blankProject = {
  title: "",
  technology: "",
  description: "",
  image: "",
  url: "",
};
const blankSkill = { name: "", category: "" };
const inputClass =
  "w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2.5 text-sm text-white outline-none focus:border-emerald-500";
const fields = {
  projects: [
    ["title", "عنوان پروژه"],
    ["technology", "فناوری"],
    ["description", "توضیحات"],
    ["image", "آدرس تصویر"],
    ["url", "آدرس پروژه"],
  ],
  skills: [
    ["name", "نام مهارت"],
    ["category", "دسته‌بندی"],
  ],
};

function AdminPanel() {
  const [tab, setTab] = useState("projects");
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);
  const [contact, setContact] = useState({
    id: "1",
    email: "",
    phone: "",
    whatsapp: "",
    linkedin: "",
  });
  const [form, setForm] = useState(blankProject);
  const [editing, setEditing] = useState(null);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const refresh = async () => {
    const [projectData, skillData, contactData] = await Promise.all([
      getCollection("projects"),
      getCollection("skills"),
      getCollection("contact"),
    ]);
    setProjects(projectData);
    setSkills(skillData);
    setContact(
      contactData[0] || {
        id: "1",
        email: "",
        phone: "",
        whatsapp: "",
        linkedin: "",
      },
    );
  };
  useEffect(() => {
    refresh().catch(() =>
      setError(
        "اتصال به Supabase برقرار نشد. تنظیمات فایل .env و جدول‌های پایگاه داده را بررسی کنید.",
      ),
    );
  }, []);

  const startEdit = (item) => {
    setEditing(item.id);
    setForm({ ...item });
    setMessage("");
    setError("");
  };
  const startAdd = () => {
    setEditing(null);
    setForm(tab === "projects" ? blankProject : blankSkill);
    setMessage("");
    setError("");
  };
  const saveItem = async (event) => {
    event.preventDefault();
    setError("");
    setMessage("");
    try {
      const payload = {
        ...form,
        ...(editing ? { id: editing } : { id: crypto.randomUUID() }),
      };
      if (editing) await updateItem(tab, editing, payload);
      else await createItem(tab, payload);
      await refresh();
      startAdd();
      setMessage("تغییرات ذخیره شد.");
    } catch {
      setError("ذخیره انجام نشد. تنظیمات Supabase و دسترسی جدول را بررسی کنید.");
    }
  };
  const removeItem = async (item) => {
    if (!window.confirm("این مورد حذف شود؟")) return;
    try {
      await deleteItem(tab, item.id);
      await refresh();
      if (editing === item.id) startAdd();
      setMessage("مورد حذف شد.");
      setError("");
    } catch {
      setError("حذف انجام نشد. تنظیمات Supabase و دسترسی جدول را بررسی کنید.");
    }
  };
  const saveContact = async (event) => {
    event.preventDefault();
    setError("");
    setMessage("");
    try {
      await updateItem("contact", contact.id || "1", {
        ...contact,
        id: contact.id || "1",
      });
      setMessage("اطلاعات تماس ذخیره شد.");
    } catch {
      setError("ذخیره اطلاعات تماس انجام نشد.");
    }
  };

  const list = tab === "projects" ? projects : skills;
  return (
    <section
      className="min-h-screen bg-slate-950 px-4 py-10 text-white sm:px-6"
      dir="rtl"
    >
      <div className="mx-auto max-w-6xl space-y-7">
        <header>
          <p className="text-sm font-semibold text-emerald-400">مدیریت محتوا</p>
          <h1 className="mt-2 text-3xl font-extrabold">پنل مدیریت سایت</h1>
          <p className="mt-2 text-slate-400">
            پروژه‌ها، مهارت‌ها و اطلاعات تماس را ویرایش کنید.
          </p>
        </header>
        <nav className="flex flex-wrap gap-2 border-b border-slate-800 pb-4">
          {[
            ["projects", "پروژه‌ها"],
            ["skills", "مهارت‌ها"],
            ["contact", "اطلاعات تماس"],
          ].map(([key, label]) => (
            <button
              key={key}
              onClick={() => {
                setTab(key);
                startAdd();
                setMessage("");
                setError("");
              }}
              className={`rounded-lg px-4 py-2 text-sm font-bold ${tab === key ? "bg-emerald-500 text-slate-950" : "bg-slate-900 text-slate-300 hover:text-white"}`}
            >
              {label}
            </button>
          ))}
        </nav>
        {message && (
          <p
            role="status"
            className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-3 text-sm text-emerald-300"
          >
            {message}
          </p>
        )}
        {error && (
          <p
            role="alert"
            className="rounded-lg border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-300"
          >
            {error}
          </p>
        )}
        {tab === "contact" ? (
          <form
            onSubmit={saveContact}
            className="grid gap-5 rounded-xl border border-slate-800 bg-slate-900 p-6 sm:grid-cols-2"
          >
            {[
              ["email", "ایمیل"],
              ["phone", "شماره تماس"],
              ["whatsapp", "لینک واتساپ"],
              ["linkedin", "لینک لینکدین"],
            ].map(([key, label]) => (
              <label
                key={key}
                className="space-y-2 text-sm font-medium text-slate-300"
              >
                {label}
                <input
                  className={inputClass}
                  dir="auto"
                  value={contact[key] || ""}
                  onChange={(e) =>
                    setContact({ ...contact, [key]: e.target.value })
                  }
                />
              </label>
            ))}
            <button className="rounded-lg bg-emerald-500 px-5 py-3 font-bold text-slate-950 hover:bg-emerald-400 sm:col-span-2">
              ذخیره اطلاعات تماس
            </button>
          </form>
        ) : (
          <div className="grid gap-6 lg:grid-cols-[1.1fr_.9fr]">
            <div className="space-y-3">
              {list.map((item) => (
                <article
                  key={item.id}
                  className="flex items-center justify-between gap-4 rounded-xl border border-slate-800 bg-slate-900 p-4"
                >
                  <div className="min-w-0">
                    <h2 className="truncate font-bold">
                      {item.title || item.name}
                    </h2>
                    <p className="mt-1 truncate text-sm text-slate-400">
                      {item.technology || item.category}
                    </p>
                  </div>
                  <div className="flex shrink-0 gap-2">
                    <button
                      onClick={() => startEdit(item)}
                      className="rounded-md border border-slate-700 px-3 py-2 text-sm text-emerald-300 hover:bg-slate-800"
                    >
                      ویرایش
                    </button>
                    <button
                      onClick={() => removeItem(item)}
                      className="rounded-md border border-red-900 px-3 py-2 text-sm text-red-300 hover:bg-red-950"
                    >
                      حذف
                    </button>
                  </div>
                </article>
              ))}
              {!list.length && (
                <p className="rounded-lg bg-slate-900 p-5 text-slate-400">
                  هنوز موردی ثبت نشده است.
                </p>
              )}
            </div>
            <form
              onSubmit={saveItem}
              className="h-fit space-y-4 rounded-xl border border-slate-800 bg-slate-900 p-6"
            >
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold">
                  {editing ? "ویرایش مورد" : "افزودن مورد"}
                </h2>
                {editing && (
                  <button
                    type="button"
                    onClick={startAdd}
                    className="text-sm text-slate-400 hover:text-white"
                  >
                    لغو ویرایش
                  </button>
                )}
              </div>
              {fields[tab].map(([key, label]) => (
                <label
                  key={key}
                  className="block space-y-2 text-sm font-medium text-slate-300"
                >
                  {label}
                  {key === "description" ? (
                    <textarea
                      rows="4"
                      className={inputClass}
                      value={form[key] || ""}
                      onChange={(e) =>
                        setForm({ ...form, [key]: e.target.value })
                      }
                      required
                    />
                  ) : (
                    <input
                      className={inputClass}
                      dir={key === "url" || key === "image" ? "ltr" : "auto"}
                      value={form[key] || ""}
                      onChange={(e) =>
                        setForm({ ...form, [key]: e.target.value })
                      }
                      required
                    />
                  )}
                </label>
              ))}
              <button className="w-full rounded-lg bg-emerald-500 px-5 py-3 font-bold text-slate-950 hover:bg-emerald-400">
                {editing ? "ذخیره ویرایش" : "افزودن"}
              </button>
            </form>
          </div>
        )}
      </div>
    </section>
  );
}
