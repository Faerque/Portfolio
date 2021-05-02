import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <main className="container">
            <div className="row">
                <div className="col-md-12">
                <div className="card card-bg mt-5">
                    <h3 className="text-white mt-3 text-center text-muted"> Blogs are coming soon </h3> 
                   <Link to='/'><button className="p-2 m-2 btn btn-outline-primary"> Back to Home</button></Link> 
                </div>    
                </div>
            </div>

        </main>
    );
};

export default Blog;