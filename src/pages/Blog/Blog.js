import React from 'react';

const Blog = () => {
    return (
        <>
            <h1 className='text-center text-3xl font-semibold font-mono my-10 underline'>Important Questions and Answers</h1>
            <div className='container mx-auto grid md:grid-cols-2 gap-4 mb-10'>
            <div className='border border-[#ff1f59] p-3 rounded shadow-md'>
                <p className='text-lg font-sans font-semibold'>What is cors?</p>
                <p>cors stands for cross origin resource sharing. It is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served. A web page may freely embed cross-origin images, stylesheets, scripts, iframes, and videos.</p>
            </div>
            <div className='border border-[#ff1f59] p-3 rounded shadow-md'>
                <p className='text-lg font-sans font-semibold'>Why are you using firebase? What other options do you have to implement authentication?</p>
                <p>I am using firebase on my web application,  because its allows me to implement authentication and authorization.</p>
                <p className='text-lg font-sans font-semibold'>There are many options I have to use for authentication</p>
                <ul>
                    <li>1. Auth0</li>
                    <li>2. Okta</li>
                    <li>3. STYTCH</li>
                    <li>4. Supabase</li>
                    <li>5. Ory</li>
                    <li>6. Authress</li>
                    <li>7. Frontegg</li>
                    <li>8. AWS etc.</li>
                </ul>
            </div>
            <div className='border border-[#ff1f59] p-3 rounded shadow-md'>
                <p className='text-lg font-sans font-semibold'>How Does Privateroute work?</p>
                <p>The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.</p>
            </div>
            <div className='border border-[#ff1f59] p-3 rounded shadow-md'>
                <p className='text-lg font-sans font-semibold'>What is Node? How does Node work?</p>
                <p>Node.js is an open-source server environment. Node.js is cross-platform and runs on Windows, Linux, Unix, and macOS. Node.js is a back-end JavaScript runtime environment.</p>
                <p>It is used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code</p>
            </div>
        </div><div className='container mx-auto grid md:grid-cols-2 gap-4 mb-10'>
            <div className='border border-[#ff1f59] p-3 rounded shadow-md'>
                <p className='text-lg font-sans font-semibold'>What is cors?</p>
                <p>cors stands for cross origin resource sharing. It is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served. A web page may freely embed cross-origin images, stylesheets, scripts, iframes, and videos.</p>
            </div>
            <div className='border border-[#ff1f59] p-3 rounded shadow-md'>
                <p className='text-lg font-sans font-semibold'>Why are you using firebase? What other options do you have to implement authentication?</p>
                <p>I am using firebase on my web application,  because its allows me to implement authentication and authorization.</p>
                <p className='text-lg font-sans font-semibold'>There are many options I have to use for authentication</p>
                <ul>
                    <li>1. Auth0</li>
                    <li>2. Okta</li>
                    <li>3. STYTCH</li>
                    <li>4. Supabase</li>
                    <li>5. Ory</li>
                    <li>6. Authress</li>
                    <li>7. Frontegg</li>
                    <li>8. AWS etc.</li>
                </ul>
            </div>
            <div className='border border-[#ff1f59] p-3 rounded shadow-md'>
                <p className='text-lg font-sans font-semibold'>How Does Privateroute work?</p>
                <p>The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.</p>
            </div>
            <div className='border border-[#ff1f59] p-3 rounded shadow-md'>
                <p className='text-lg font-sans font-semibold'>What is Node? How does Node work?</p>
                <p>Node.js is an open-source server environment. Node.js is cross-platform and runs on Windows, Linux, Unix, and macOS. Node.js is a back-end JavaScript runtime environment.</p>
                <p>It is used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code</p>
            </div>
        </div>
        </>
    );
};

export default Blog;