import Link from 'next/link';

function Home() {
  return (
    <div>
      <h1>Home page</h1>
      <Link href="/blog">
          Blog
      </Link>
      <br />
      <Link href="/products">
          Products
      </Link>
    </div>
  );
}

export default Home;
