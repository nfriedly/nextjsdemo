import Link from 'next/link';

export default function() {
  return (
    <div>

      <Link href="/foo"><a>Foo</a></Link>

      <h1>Next.js: React framework with server-side-rendering</h1>
      <h2><small>by</small> Nathan Friedly</h2>

      <ul>
        <li><a href="https://nextjs.org/">nextjs.org</a></li>
        <li><a href="https://github.com/nfriedly/nextjsdemo/">
          github.com/nfriedly/nextjsdemo</a></li>
      </ul>

      <img src="/static/underduck.jpg" />
    </div>
  );
}

