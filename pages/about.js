import Link from 'next/link';
import { Component } from 'react';
import fetch from 'isomorphic-unfetch';

import Layout from '../components/Layout';

//ASYNC getInitialProps WITH CLASSICAL COMPONENT
export default class About extends Component {

    static async getInitialProps() {
        const res = await fetch('https://api.github.com/users/Anubhav311')
        const data = await res.json();

        return { user: data}
    }

    render() {
        const { user } = this.props;

        return (
            <Layout title="About">
                <p>{user.name}</p>
                <img src={user.avatar_url} alt="anubhav" height="200px"/>
            </Layout>
        )
    }
} 


//ASYNC getInitialProps WITH FUNCTIONAL COMPONENT
// const About = (props) => {

//     const { user } = props;

//     return (
//         <Layout title="About">
//             <p>{user.name}</p>
//             <img src={user.avatar_url} alt="anubhav" height="200px"/>
//             {console.log(props)}
//         </Layout>
//     )
// } 

// About.getInitialProps = async ({req}) => {
//     const res = await fetch('https://api.github.com/users/Anubhav311')
//     const data = await res.json();
//     return { user: data}
// }

// export default About;