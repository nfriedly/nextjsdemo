import Link from 'next/link'

const Layout = ({children}) => {
  return (
    <div>
      <Link href="/"><a>Home</a></Link>
      {' '}
      <Link href="/foo"><a>Foo</a></Link>
      {children}
    </div>
  );
}

export default Layout;