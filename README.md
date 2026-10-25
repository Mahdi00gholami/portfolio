# Personal portfolio CMS

React portfolio backed by Supabase, with a Persian content management page.

## Run

1. Create a Supabase project.
2. In Supabase Auth, create the admin user with an email and password, and disable public sign-ups.
3. In `supabase/schema.sql`, replace `ADMIN_EMAIL_HERE` with that user's email, then run the SQL in the Supabase SQL Editor. For an existing setup, rerun the updated policy section after creating the user.
4. Copy `.env.example` to `.env` and set `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`, and `VITE_ADMIN_EMAIL`.
5. Run `npm install`, then `npm run dev` and open the Vite URL.
6. Visit `/admin` and enter the admin account's password. The email is taken from `VITE_ADMIN_EMAIL`.

The portfolio can read the `projects`, `skills`, and `contact` tables publicly. Only the Supabase Auth user matching the email in the SQL policies can edit them. The old `db.json` is no longer used; migrate its rows into the matching Supabase tables if you need to keep that data.
