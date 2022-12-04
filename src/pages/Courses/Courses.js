import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';
import LeftSideNav from './LeftSideNav/LeftSideNav';

const Courses = () => {
    const courses = useLoaderData();
    return (
        <div className='grid grid-cols-[1fr_4fr] gap-8'>
            <LeftSideNav />
            
            <div className='container mx-auto grid grid-cols-3 gap-4'>
                {
                    courses.map(course => <Course key={course.id} course={ course} />)
                }
            </div>
        </div>
    );
};

export default Courses;