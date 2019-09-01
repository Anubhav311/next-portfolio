import Link from 'next/link';

import Layout from '../components/Layout';

const PostLink = (props) => (
    <li>
        <Link as={`/${props.slug}`} href={`/post?title=${props.title}`}>
            <a>{props.title}</a>
        </Link>
    </li>
)

export default () => (
    <Layout title="My Blog">
        <ul>
            <PostLink slug="react-post" title="React Post"/>
            <PostLink slug="angular-post" title="Angular Post"/>
            <PostLink slug="vue-post" title="Vue Post"/>
        </ul>
    </Layout>
)