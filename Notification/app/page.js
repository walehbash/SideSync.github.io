export default function Home() {
  const mockData = { message: 'Hello from mock data!' };
  return (
    <main style={{ padding: 40, fontFamily: 'sans-serif' }}>
      <h1>Welcome to Notification App</h1>
      <p>Mock API message: <b>{mockData.message}</b></p>
      <p>If you see this page, your Next.js app is working without a backend!</p>
    </main>
  );
} 