import React from 'react'
import ClassCard from './ClassCard'

function CoursesPage() {
    return (
         <div>
            <h3>My Courses</h3>
            <div className="row mt-5">
                   <ClassCard />
                   <ClassCard />
                   <ClassCard />
                   <ClassCard />
            </div>
        </div>
    )
}

export default CoursesPage
