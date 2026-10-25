# Personal portfolio CMS

React portfolio backed by Supabase, with a Persian content management page.

## Run

1. Create a Supabase project.
2. In Supabase Auth, create the admin user with an email and password, and disable public sign-ups.
3. In `supabase/schema.sql`, replace `ADMIN_EMAIL_HERE` with that user's email, then run the SQL in the Supabase SQL Editor. For an existing setup, rerun the updated policy section after creating the user.
4. Copy `.env.example` to `.env` and set `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`, and `VITE_ADMIN_EMAIL`.
5. Run `npm install`, then `npm run dev` and open the Vite URL.
6. Visit `/admin` and enter the admin account's password. The email is taken from `VITE_ADMIN_EMAIL`.

## Deploy on Vercel

1. Import this repository into Vercel and set the build command to `npm run build` and the output directory to `dist`.
2. In the Vercel project's **Settings → Environment Variables**, add `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`, and `VITE_ADMIN_EMAIL` for the environments you deploy (Production, and Preview if needed). Use the Supabase project URL and its publishable/anon key. Never put a Supabase `service_role` key in a `VITE_` variable.
3. In Supabase, create the admin Auth user, disable public sign-ups, replace `ADMIN_EMAIL_HERE` in `supabase/schema.sql` with that account's email, and run the SQL in the SQL Editor.
4. Redeploy after setting the Vercel variables. Vite embeds `VITE_` values during the build, so changing them requires a new deployment.
5. Open `/admin` on the deployed domain to sign in and add or edit projects, skills, and contact details. `vercel.json` rewrites app routes such as `/admin` to the React entry point.

If you already have portfolio content in `db.json`, add it through `/admin` after the database is configured; `db.json` is not read by the deployed app.

The portfolio can read the `projects`, `skills`, and `contact` tables publicly. Only the Supabase Auth user matching the email in the SQL policies can edit them. The old `db.json` is no longer used; migrate its rows into the matching Supabase tables if you need to keep that data.
