import React from 'react';

const Blog = () => {
    return (
        <div className="p-8 text-left">
            <div className="collapse">
                <input type="checkbox" /> 
                <div className="collapse-title text-xl font-medium">
                    What is cors?
                </div>
                <div className="collapse-content"> 
                    <p>Cross-origin resource sharing[cors] is a mechanism which allows restricted resources to be shared to other domains outside the one that contains those resources.</p>
                </div>
            </div>
            <div className="collapse">
                <input type="checkbox" /> 
                <div className="collapse-title text-xl font-medium">
                    Why are you using firebase? What other options do you have to implement authentication?
                </div>
                <div className="collapse-content"> 
                    <p>Firebase provides SDKs which are easy to integrate and also backend services with ready-made UI libraries to be used for authentication. Other alternatives are Auth0, Passport, Okta, MongoDB, etc.</p>
                </div>
            </div>
            <div className="collapse">
                <input type="checkbox" /> 
                <div className="collapse-title text-xl font-medium">
                    How does the private route work?
                </div>
                <div className="collapse-content"> 
                    <p>Private Route is used to block unsigned users from entering certain pages in a website. The private route provider assigned over these pages puts them under this condition. The user is then redirected to the sign-in page.</p>
                </div>
            </div>
            <div className="collapse">
                <input type="checkbox" /> 
                <div className="collapse-title text-xl font-medium">
                    What is Node? How does Node work?
                </div>
                <div className="collapse-content"> 
                    <p>Node is an ope-source backend Javascript runtime that runs Javascript code outside a browser. Node.js runs on chrome V8 engine converting Javascript code to machine code. It is an event loop single threaded language which handles concurrent requests with a single thread without blocking it for one request.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;