import React from 'react';

const Course = ({course, handleClickedCourse}) => {
    const {id, name} = course;
    return (
        <li>
            <button onClick={() => handleClickedCourse(id)} to='/course-detail'>{name}</button>
        </li>
    );
};

export default Course;