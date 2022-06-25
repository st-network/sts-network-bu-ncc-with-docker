import Link from 'next/link';

export default () => (
  <div>
    <h1>Welcome to the servingtokens.com network</h1>
    <Link prefetch href="/about">
      <button>About</button>
    </Link>
  </div>
);
