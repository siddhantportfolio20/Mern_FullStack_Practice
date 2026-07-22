import { useState } from "react";
// important example 
const initialStudents = [
  { id: 1, name: "Alice", present: false },
  { id: 2, name: "Bob", present: false },
  { id: 3, name: "Charlie", present: false },
];
initialStudents.map(item =>console.log({...item, present : true}))

const StudentAttendance = () => {
     const [students, setStudents] = useState(initialStudents);
     //toggle present for that student
     const togglePresent = (id) => {
        console.log(id);
        setStudents((prev) => prev.map(item => {
            if(item.id == id){
                return {...item,present: !item.present}
            }else{
                return item
            }
        }))
     };

    //  mark all as present
   const markAllPresent = () => {;
        // setStudents((prev)=> ([...prev]))


        setStudents((prev )=> prev.map(item => ({...item,present:true})))
   }
        return (
    <div>

         <h2>Student Attendance</h2>
      <button onClick={markAllPresent}>Mark all present</button>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            <label>
              <input
                type="checkbox"
                checked={student.present}
                onChange={() => togglePresent(student.id)}
              />
              {student.name} ({student.present ? "Present" : "Absent"})
            </label>
          </li>
        ))}
      </ul>

    </div>
  )
}

export default StudentAttendance