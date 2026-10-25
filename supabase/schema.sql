-- Run this in the Supabase SQL Editor before starting the app.
create table if not exists public.projects (
  id text primary key,
  title text not null,
  technology text not null default '',
  description text not null default '',
  image text not null default '',
  url text not null default ''
);

create table if not exists public.skills (
  id text primary key,
  name text not null,
  category text not null default ''
);

create table if not exists public.contact (
  id text primary key,
  email text not null default '',
  phone text not null default '',
  whatsapp text not null default '',
  linkedin text not null default ''
);

alter table public.projects enable row level security;
alter table public.skills enable row level security;
alter table public.contact enable row level security;

-- Replace this placeholder with the email used to create the admin Auth user.
-- Keep public reads enabled for the portfolio, while restricting edits to the
-- admin account. Disable public sign-ups in Supabase Auth settings.
drop policy if exists "Public can manage projects" on public.projects;
drop policy if exists "Public can manage skills" on public.skills;
drop policy if exists "Public can manage contact" on public.contact;
drop policy if exists "Public can read projects" on public.projects;
drop policy if exists "Admin can manage projects" on public.projects;
drop policy if exists "Public can read skills" on public.skills;
drop policy if exists "Admin can manage skills" on public.skills;
drop policy if exists "Public can read contact" on public.contact;
drop policy if exists "Admin can manage contact" on public.contact;

create policy "Public can read projects" on public.projects
  for select to anon, authenticated using (true);
create policy "Admin can manage projects" on public.projects
  for all to authenticated
  using ((select auth.jwt() ->> 'email') = 'ADMIN_EMAIL_HERE')
  with check ((select auth.jwt() ->> 'email') = 'ADMIN_EMAIL_HERE');

create policy "Public can read skills" on public.skills
  for select to anon, authenticated using (true);
create policy "Admin can manage skills" on public.skills
  for all to authenticated
  using ((select auth.jwt() ->> 'email') = 'ADMIN_EMAIL_HERE')
  with check ((select auth.jwt() ->> 'email') = 'ADMIN_EMAIL_HERE');

create policy "Public can read contact" on public.contact
  for select to anon, authenticated using (true);
create policy "Admin can manage contact" on public.contact
  for all to authenticated
  using ((select auth.jwt() ->> 'email') = 'ADMIN_EMAIL_HERE')
  with check ((select auth.jwt() ->> 'email') = 'ADMIN_EMAIL_HERE');
