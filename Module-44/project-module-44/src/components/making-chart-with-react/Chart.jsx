import { LineChart as LChart, Line,XAxis,YAxis } from 'recharts';

const Chart = () => {

  const dataOfStudent =[
    {"student_id": 1, "name": "Alice", "math_marks": 20, "physics_marks": 50, "chemistry_marks": 15},
    {"student_id": 2, "name": "Bob", "math_marks": 72, "physics_marks": 65, "chemistry_marks": 70},
    {"student_id": 3, "name": "Charlie", "math_marks": 90, "physics_marks": 87, "chemistry_marks": 88},
    {"student_id": 4, "name": "David", "math_marks": 68, "physics_marks": 72, "chemistry_marks": 65},
    {"student_id": 5, "name": "Emily", "math_marks": 78, "physics_marks": 75, "chemistry_marks": 80},
    {"student_id": 6, "name": "Frank", "math_marks": 91, "physics_marks": 89, "chemistry_marks": 92},
    {"student_id": 7, "name": "Grace", "math_marks": 79, "physics_marks": 82, "chemistry_marks": 77},
    {"student_id": 8, "name": "Henry", "math_marks": 83, "physics_marks": 80, "chemistry_marks": 85},
    {"student_id": 9, "name": "Isabel", "math_marks": 88, "physics_marks": 86, "chemistry_marks": 90},
    {"student_id": 10, "name": "Jack", "math_marks": 75, "physics_marks": 68, "chemistry_marks": 72}
  ]

  return (
    <div>
      <LChart className='bg-stone-200' width={800} height={400} data={dataOfStudent}>
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>
      <Line type="monotone" dataKey="math_marks" stroke="blue" />
      <Line type="monotone" dataKey="physics_marks" stroke="red" />
      <Line type="monotone" dataKey="chemistry_marks" stroke="green" />
      </LChart>
    </div>
  );
};

export default Chart;