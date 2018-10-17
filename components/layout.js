import Link from 'next/link'

const Layout = ({children}) => {
  return (
    <div className="layout">
      <style global jsx>{`
          body { color: white; background-color: black; }
          a { color: teal; }
      `}</style>

      <style jsx>{`
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