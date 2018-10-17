import Layout from '../components/layout'

const FooPage = function(props) {
  return (
    <Layout>

      <h1>Hello from {props.renderedAt}</h1>

    </Layout>
  );
}

FooPage.getInitialProps = function(ctx) {
  return {
    renderedAt: ctx.req ?  'server' : 'client'
  }
}

export default FooPage