import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../../components/Course/Course';
import CourseDetail from '../../components/CourseDetail/CourseDetail';

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
                courseDetail?.id ?
                <CourseDetail course={courseDetail}></CourseDetail>
                :
                <div className="col-span-3">
                    <h2 className="text-2xl font-bold p-32">We offer a list of six of the most popular programming languages that will be in demand in 2023.</h2>
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