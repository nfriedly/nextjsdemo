import Link from 'next/link'

const Layout = ({children}) => {
  return (
    <div className="layout">
      <style jsx>{`
        a { color: teal; }

        .layout { width: 100%; margin: 5px; }

        @media(min-width: 600px) {
          .layout { max-width: 400px; margin: auto; }
        }
      `}</style>

      <Link href="/"><a>Home</a></Link>
      {' '}
      <Link href="/foo"><a>Foo</a></Link>

      {children}
    </div>
  );
}

export default Layout;