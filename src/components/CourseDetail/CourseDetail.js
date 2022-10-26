import React from 'react';
import { Link } from 'react-router-dom';

const CourseDetail = ({course}) => {
    const {id, name, description, image, level, duration} = course;

    return (
        <div className="col-span-3 p-4 text-center">
            <h1 className="text-2xl font-bold">{name}</h1>
            <p className="p-4">{description}</p>
            <div className="flex justify-center">
                <img className="w-64 p-4" src={image} alt={name} />
            </div>

            <div className="overflow-x-auto p-4 flex justify-center">
                <table className="table w-1/2">
                    <tbody>
                        {/* row 1  */}
                        <tr>
                            <td className="border-2">Level</td>
                            <td className="border-2">{level}</td>
                        </tr>
                        {/* row 2  */}
                        <tr>
                            <td className="border-2">Duration</td>
                            <td className="border-2">{duration}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <Link className="btn btn-primary" to={`/courses/${id}`}>Get Premium Access</Link>
        </div>
    );
};

export default CourseDetail;