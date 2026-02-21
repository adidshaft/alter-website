-- 1. Create the waitlist table
create table if not exists public.waitlist (
  id uuid default gen_random_uuid() primary key,
  email text unique not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 2. Turn on Row Level Security (RLS) to keep data safe
alter table public.waitlist enable row level security;

-- 3. CRITICAL FIX: Allow the public website to insert emails
create policy "Allow public insert" on public.waitlist
  for insert
  to anon
  with check (true);
