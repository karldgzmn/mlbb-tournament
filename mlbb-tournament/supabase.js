/* ============================================================
   SUPABASE CONFIG
   ============================================================ */

const SUPABASE_URL = 'https://luilqujlicoqfmflwvnt.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx1aWxxdWpsaWNvcWZtZmx3dm50Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg5NzI3NTIsImV4cCI6MjA5NDU0ODc1Mn0.jPKESe0rcvfZvb8m5GaqtHwvymdCAL6oUA0iERSYsdY';

const { createClient } = supabase;
const db = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
