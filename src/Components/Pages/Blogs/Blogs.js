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
                        NodeJS is an open-source, cross-platform Javascript runtime environment for server-side javascript execution. Thanks to Nodejs, Javascript code may now run outside of the browser. Nodejs is a web development framework with a vast number of modules. <br />
                        A scripting language is Javascript. The most popular abbreviation is JS. The ECMA script might be considered an upgraded version of Javascript. Javascript is a high-level programming language that uses the Oops notion and is based on prototype inheritance.
                    </p>
                </div>
            </div>
            <div class="blogs mt-3">
                <div class="card-header">
                    <h1>When should you use nodejs and when should you use mongodb?</h1>
                </div>
                <div class="card-body">
                    <p class="card-text fs-5">
                        Each project requires a programming environment and a runtime library that can build and/or interpret your code, as well as basic programming tools and help. Nodejs is a Javascript-based programming language. Similar tools are available in Python, Java, PHP, C#, C++, Go, and other languages. <br />
                        If your software requires the capacity to save data so that it can be searched or updated later, a database will almost certainly be necessary. There are several well-known databases accessible. One such database is MongoDB. Other databases include MariaDB, MySql, CouchDB, DynamoDB (on Amazon Web Services), and Postgres.
                    </p>
                </div>
            </div>
            <div class="blogs mt-3">
                <div class="card-header">
                    <h1>Differences between sql and nosql databases?</h1>
                </div>
                <div class="card-body">
                    <p class="card-text fs-5">
                        SQL programming may be used for inserting, searching, updating, and removing database records. That isn't to suggest that SQL can't do more. Table-based data types are supported. SQL is compatible with databases such as MySQL, SQL Server, Oracle, and others. Declarative commands make SQL basic and easy to understand. <br />
                        NoSQL is a non-relational database management system that does not require a fixed schema, joins, or is easy to scale. A NoSQL database is used for scattered data repositories with massive data storage requirements. The greatest benefit of NoSQL is its flexibility. Programmers aren't restricted to merely storing organized data. Because NoSQL databases are not bound by a predetermined structure, they may readily store and retrieve data.
                    </p>
                </div>
            </div>
            <div class="blogs mt-3">
                <div class="card-header">
                    <h1>What is the purpose of jwt and how does it work?</h1>
                </div>
                <div class="card-body">
                    <p class="card-text fs-5">
                        JWT (JSON Web Token) is an open standard that allows two parties — a client and a server — to communicate security information. JSON items, containing a set of claims, are encoded in each JWT.
                        The server produces and sends a token to the client that confirms the user's identity. The client will send the token back to the server with each subsequent request, indicating that the request is originating from a certain identity.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;