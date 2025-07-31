// ✅ Replace with your actual project info
const SUPABASE_URL = 'https://czcmncfjyayxjfuskzdb.supabase.co'; // your real Supabase URL
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN6Y21uY2ZqeWF5eGpmdXNremRiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM4NTQxOTUsImV4cCI6MjA2OTQzMDE5NX0.xMYT9TEsUq2rcfqTaE-q-1jy3VKbOMUfrqhYEIXCCf8'; // from Supabase > Project Settings > API

const { createClient } = supabase;
const client = createClient(SUPABASE_URL, SUPABASE_KEY);

async function signup() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  console.log("Signup email:", email);
  console.log("Signup password:", password);

  const { data, error } = await client.auth.signUp({
    email,
    password,
  });

  if (error) {
    alert("Signup failed: " + error.message);
    console.error(error);
  } else {
    alert("Signup successful! Check your email.");
    window.location.href = "index.html";
  }
}
  async function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  console.log("Login email:", email);
  console.log("Login password:", password);

  const { data, error } = await client.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    alert("Login failed: " + error.message);
    console.error(error);
  } else {
    alert("Login successful!");
    window.location.href = "success.html"; // or wherever you want to redirect
  }
}
