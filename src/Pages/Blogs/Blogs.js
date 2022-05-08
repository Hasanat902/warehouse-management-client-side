import React from 'react';

const Blogs = () => {
    return (
        <div className='container' style={{minHeight: "79vh"}}>
            <h2 className='text-center text-primary mt-3'>Welcome to our Blog</h2>
            <div className='border shadow p-3 my-3'>
                <h5>Difference between javascript and nodejs?</h5>
                <p><span className='fw-bold'>Answer:</span> Javascript is a lightweight, object-oriented scripting language that is used to build dynamic HTML pages with interactive effects on a webpage. JavaScript is also commonly used in game development and mobile app development. It is an interpreted scripting language, and the code can only be executed and run in a web browser. We can use Node.js to execute and run the code outside of the browser. It's also known as a browser's language, and it can be used for both client-side and server-side development. <br /> Node.js is a cross-platform, open-source JavaScript runtime environment that enables JavaScript to be run on the server. Node.js enables JavaScript code to run outside of the browser. Node.js comes with a large number of modules and is mostly used in web creation. It may run on various platforms including, Windows, Linux, Mac OS, etc. It provides a cross-platform runtime environment with event-driven, non-blocking (asynchronous) I/O for creating highly scalable server-side JavaScript applications.</p>
            </div>
            <div className='border shadow p-3 my-3'>
                <h5>When should you use nodejs and when should you use mongodb?</h5>
                <p><span className='fw-bold'>Answer:</span> Nodejs is a Javascript engine that you can write any application you want with (by programming in the Javascript language). It runs your Javascript code.if you want to write some kind of stand-alone program or server in Javascript, then you can use nodejs for it. <br /> MongoDB is a database engine. Code within some application or server uses MongoDB to save, query or update data in a database. There are many web servers built with nodejs that will then use MongoDB for storing data.If your application needs the ability to persistently store data in a way that you can efficiently query or update it later, then you would typically use some form of database. There are dozens of popular databases. MongoDB is one such database.</p>
            </div>
            <div className='border shadow p-3 my-3'>
                <h5>Differences between sql and nosql databases?</h5>
                <p><span className='fw-bold'>Answer:</span> SQL Databases are categorized as Relational Database Management System.NoSQL databases are categorized as Non-relational or distributed database system.SQL databases have fixed or static or predefined schema.NoSQL databases have dynamic schema.SQL databases display data in form of tables so it is known as table-based database.NoSQL databases display data as collection of key-value pair, documents, graph databases or wide-column stores.SQL databases are vertically scalable.NoSQL databases are horizontally scalable.SQL databases are best suited for complex queries.NoSQL databases are not so good for complex queries because these are not as powerful as SQL queries.</p>
            </div>
            <div className='border shadow p-3 my-3'>
                <h5>What is the purpose of jwt and how does it work?</h5>
                <p><span className='fw-bold'>Answer:</span>  JWT or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.</p>
            </div>
        </div>
    );
};

export default Blogs;