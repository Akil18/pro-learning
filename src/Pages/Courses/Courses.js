import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Course from '../../components/Course/Course';

const Courses = () => {
    const [courseDetail, setCourseDetail] = useState({});
    const courses = useLoaderData();
    console.log(courses);

    const handleClickedCourse = (id) => {
        setCourseDetail(courses.find(course => course.id === id));
    }

    return (
        <div className="grid grid-cols-4">
            {
                courseDetail?.id > 0 ?
                <div className="col-span-3">
                    <h1>{courseDetail.name}</h1>
                    <Link to={`/courses/${courseDetail.id}`}>Get Premium</Link>
                </div>
                :
                <div className="col-span-3">
                <h1>What is a Programming Language?</h1> 
                <p>
                    A programming language is a way for programmers (developers) to communicate with computers. Programming languages consist of a set of rules that allows string values to be converted into various ways of generating machine code, or, in the case of visual programming languages, graphical elements. Generally speaking, a program is a set of instructions written in a particular language (C, C++, Java, Python) to achieve a particular task.
                </p>


                <h1>What Are the Best Programming Languages to Learn in 2023?</h1>
                <p>
                    What coding and programming language should i learn? JavaScript and Python, two of the most popular languages in the startup industry, are in high demand. Most startups use Python-based backend frameworks such as Django (Python), Flask (Python), and NodeJS (JavaScript). These languages are also considered to be the best programming languages to learn for beginners.
                </p>

                <h2>We offer a list of six of the most popular programming languages that will be in demand in 2023.</h2>
                </div> 
            }
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                </div> 
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        {
                            courses.map(course => <Course 
                                key={course.id} 
                                course={course}
                                handleClickedCourse={handleClickedCourse}
                                ></Course>
                            )
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Courses;