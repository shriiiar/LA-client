import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='blog'>
            <div class="blogs mt-3">
                <div class="card-header">
                    <h1>Difference between javascript and nodejs?</h1>
                </div>
                <div class="card-body">
                    <p class="card-text fs-5">
                        JavaScript is a basic programming language that can be used in any browser that has the JavaScript Engine installed. Whereas Node JS is a JavaScript interpreter or runtime environment with numerous flaws, it requires libraries that can be readily accessible from JavaScript programming for better utilization. For one online application, JavaScript is often utilized for any client-side activities. An activity might be dealing with business validation, dynamic page display at a set time period, or a simple Ajax request. For every online application, they are used for the maximum amount of time. Node JS, on the other hand, is mostly used for non-blocking operations on any operating system. Non-blocking operations on an operating system include writing or executing a shell script, retrieving specified hardware-related information in a single call, obtaining installed certificate data on the system, and doing a large number of defined tasks.
                    </p>
                </div>
            </div>
            <div class="blogs mt-3">
                <div class="card-header">
                    <h1>Differences between sql and nosql databases?</h1>
                </div>
                <div class="card-body">
                    <p class="card-text fs-5">
                        Relational databases are SQL, while non-relational databases are NoSQL.
                        SQL databases have a specified schema and employ structured query language. For unstructured data, NoSQL databases use dynamic schemas.
                        SQL databases scale vertically, but NoSQL databases scale horizontally. NoSQL databases are document, key-value, graph, or wide-column stores, whereas SQL databases are table-based. SQL databases excel in multi-row transactions, while NoSQL excels at unstructured data like documents and JSON.
                    </p>
                </div>
            </div>
            <div class="blogs mt-3">
                <div class="card-header">
                    <h1>What is the purpose of jwt and how does it work?</h1>
                </div>
                <div class="card-body">
                    <p class="card-text fs-5">
                        JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted. A JWT is a string made up of three parts, separated by dots, and serialized using base64. Each subsequent request will contain the JWT once the user has signed in, allowing the user to access routes, services, and resources that are authorized with that token. Because of its low overhead and flexibility to be utilized across several domains, JWT is currently commonly used for Single Sign On.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;