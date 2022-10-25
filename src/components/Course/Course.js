import React from 'react';
import { Link } from 'react-router-dom';

const Course = ({course, handleClickedCourse}) => {
    const {id, name} = course;
    return (
        <li>
            <button onClick={() => handleClickedCourse(id)} to='/course-detail'>{name}</button>
        </li>
    );
};

export default Course;