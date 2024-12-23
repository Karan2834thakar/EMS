
// const employees = [
//   {
//     "id": 1,
//     "email": "employee1@example.com",
//     "password": "123",
//     "firstname": "Arjun",
//     "taskNumbers": {
//       "active": 2,
//       "newTask": 1,
//       "completed": 1,
//       "failed": 0
//     },
//     "tasks": [
//       {
//         "title": "Prepare Report",
//         "description": "Complete the monthly sales report.",
//         "date": "2024-12-21",
//         "active": true,
//         "newTask": true,
//         "completed": false,
//         "failed": false
//       },
//       {
//         "title": "Client Meeting",
//         "description": "Discuss project requirements with the client.",
//         "date": "2024-12-22",
//         "active": true,
//         "newTask": false,
//         "completed": true,
//         "failed": false
//       }
//     ]
//   },
//   {
//     "id": 2,
//     "email": "employee2@example.com",
//     "password": "123",
//     "firstname": "Sneha",
//     "taskNumbers": {
//       "active": 2,
//       "newTask": 1,
//       "completed": 0,
//       "failed": 0
//     },
//     "tasks": [
//       {
//         "title": "Code Review",
//         "description": "Review the code for the new feature.",
//         "date": "2024-12-20",
//         "active": true,
//         "newTask": false,
//         "completed": false,
//         "failed": false
//       },
//       {
//         "title": "Fix Bugs",
//         "description": "Resolve issues in the authentication module.",
//         "date": "2024-12-23",
//         "active": true,
//         "newTask": true,
//         "completed": false,
//         "failed": false
//       }
//     ]
//   },
//   {
//     "id": 3,
//     "email": "employee3@example.com",
//     "password": "123",
//     "firstname": "Rajesh",
//     "taskNumbers": {
//       "active": 1,
//       "newTask": 1,
//       "completed": 1,
//       "failed": 0
//     },
//     "tasks": [
//       {
//         "title": "Database Backup",
//         "description": "Ensure the database is backed up.",
//         "date": "2024-12-19",
//         "active": false,
//         "newTask": false,
//         "completed": true,
//         "failed": false
//       },
//       {
//         "title": "Write Documentation",
//         "description": "Draft API documentation.",
//         "date": "2024-12-25",
//         "active": true,
//         "newTask": true,
//         "completed": false,
//         "failed": false
//       }
//     ]
//   },
//   {
//     "id": 4,
//     "email": "employee4@example.com",
//     "password": "123",
//     "firstname": "Priya",
//     "taskNumbers": {
//       "active": 1,
//       "newTask": 1,
//       "completed": 0,
//       "failed": 1
//     },
//     "tasks": [
//       {
//         "title": "Team Presentation",
//         "description": "Prepare slides for the quarterly review.",
//         "date": "2024-12-28",
//         "active": true,
//         "newTask": true,
//         "completed": false,
//         "failed": false
//       },
//       {
//         "title": "Update Software",
//         "description": "Deploy the new software update.",
//         "date": "2024-12-27",
//         "active": false,
//         "newTask": false,
//         "completed": false,
//         "failed": true
//       }
//     ]
//   },
//   {
//     "id": 5,
//     "email": "employee5@example.com",
//     "password": "123",
//     "firstname": "Anjali",
//     "taskNumbers": {
//       "active": 2,
//       "newTask": 1,
//       "completed": 1,
//       "failed": 0
//     },
//     "tasks": [
//       {
//         "title": "Create Test Cases",
//         "description": "Design test cases for the new feature.",
//         "date": "2024-12-24",
//         "active": true,
//         "newTask": true,
//         "completed": false,
//         "failed": false
//       },
//       {
//         "title": "Inventory Check",
//         "description": "Verify stock availability.",
//         "date": "2024-12-23",
//         "active": true,
//         "newTask": false,
//         "completed": true,
//         "failed": false
//       }
//     ]
//   }
// ];

// const admin = [
//   {
//     "id": 1,
//     "email": "admin@example.com",
//     "password": "123",
//     "firstname": "Vikram"
//   }
// ];


// export const setLocalStorage=()=>{
//  localStorage.setItem('employees',JSON.stringify(employees))
//  localStorage.setItem('admin',JSON.stringify(admin))
// }
// export const getLocalStorage=()=>{
//    const employees= JSON.parse(localStorage.getItem('employees'))
//    const admin= JSON.parse(localStorage.getItem('admin'))
//    return{employees,admin}
// }


 
const employees = [
  {
      "id": 1,
      "firstName": "Arjun",
      "email": "e@e.com",
      "password": "123",
      "taskCounts": {
          "active": 2,
          "newTask": 1,
          "completed": 1,
          "failed": 0
      },
      "tasks": [
          {
              "active": true,
              "newTask": true,
              "completed": false,
              "failed": false,
              "taskTitle": "Update website",
              "taskDescription": "Revamp the homepage design",
              "taskDate": "2024-10-12",
              "category": "Design" 
          },
          {
              "active": false,
              "newTask": false,
              "completed": true,
              "failed": false,
              "taskTitle": "Client meeting",
              "taskDescription": "Discuss project requirements",
              "taskDate": "2024-10-10",
              "category": "Meeting"
          },
          {
              "active": true,
              "newTask": false,
              "completed": false,
              "failed": false,
              "taskTitle": "Fix bugs",
              "taskDescription": "Resolve bugs reported in issue tracker",
              "taskDate": "2024-10-14",
              "category": "Development"
          }
      ]
  },
  {
      "id": 2,
      "firstName": "Sneha",
      "email": "employee2@example.com",
      "password": "123",
      "taskCounts": {
          "active": 1,
          "newTask": 0,
          "completed": 1,
          "failed": 0
      },
      "tasks": [
          {
              "active": true,
              "newTask": false,
              "completed": false,
              "failed": false,
              "taskTitle": "Database optimization",
              "taskDescription": "Optimize queries for better performance",
              "taskDate": "2024-10-11",
              "category": "Database"
          },
          {
              "active": false,
              "newTask": false,
              "completed": true,
              "failed": false,
              "taskTitle": "Design new feature",
              "taskDescription": "Create mockups for the new feature",
              "taskDate": "2024-10-09",
              "category": "Design"
          }
      ]
  },
  {
      "id": 3,
      "firstName": "Ravi",
      "email": "employee3@example.com",
      "password": "123",
      "taskCounts": {
          "active": 2,
          "newTask": 1,
          "completed": 1,
          "failed": 0
      },
      "tasks": [
          {
              "active": true,
              "newTask": true,
              "completed": false,
              "failed": false,
              "taskTitle": "Prepare presentation",
              "taskDescription": "Prepare slides for upcoming client presentation",
              "taskDate": "2024-10-13",
              "category": "Presentation"
          },
          {
              "active": true,
              "newTask": false,
              "completed": false,
              "failed": false,
              "taskTitle": "Code review",
              "taskDescription": "Review the codebase for optimization",
              "taskDate": "2024-10-12",
              "category": "Development"
          },
          {
              "active": false,
              "newTask": false,
              "completed": true,
              "failed": false,
              "taskTitle": "Testing",
              "taskDescription": "Test the latest build for bugs",
              "taskDate": "2024-10-08",
              "category": "QA"
          }
      ]
  },
  {
      "id": 4,
      "firstName": "Priya",
      "email": "employee4@example.com",
      "password": "123",
      "taskCounts": {
          "active": 2,
          "newTask": 1,
          "completed": 0,
          "failed": 0
      },
      "tasks": [
          {
              "active": true,
              "newTask": true,
              "completed": false,
              "failed": false,
              "taskTitle": "Write documentation",
              "taskDescription": "Update the project documentation",
              "taskDate": "2024-10-13",
              "category": "Documentation"
          },
          {
              "active": true,
              "newTask": false,
              "completed": false,
              "failed": false,
              "taskTitle": "Set up CI/CD",
              "taskDescription": "Implement continuous integration pipeline",
              "taskDate": "2024-10-11",
              "category": "DevOps"
          }
      ]
  },
  {
      "id": 5,
      "firstName": "Karan",
      "email": "employee5@example.com",
      "password": "123",
      "taskCounts": {
          "active": 2,
          "newTask": 1,
          "completed": 1,
          "failed": 0
      },
      "tasks": [
          {
              "active": true,
              "newTask": true,
              "completed": false,
              "failed": false,
              "taskTitle": "UI redesign",
              "taskDescription": "Redesign the user interface for better UX",
              "taskDate": "2024-10-14",
              "category": "Design"
          },
          {
              "active": false,
              "newTask": false,
              "completed": true,
              "failed": false,
              "taskTitle": "Deploy new build",
              "taskDescription": "Deploy the latest build to production",
              "taskDate": "2024-10-09",
              "category": "DevOps"
          },
          {
              "active": true,
              "newTask": false,
              "completed": false,
              "failed": false,
              "taskTitle": "Client feedback",
              "taskDescription": "Gather feedback from clients after product launch",
              "taskDate": "2024-10-12",
              "category": "Support"
          }
      ]
  }
];


const admin = [{
  "id": 1,
  "email": "admin@example.com",
  "password": "123"
}];

export const setLocalStorage = ()=>{
  localStorage.setItem('employees',JSON.stringify(employees))
  localStorage.setItem('admin',JSON.stringify(admin))
}
export const getLocalStorage = ()=>{
  const employees = JSON.parse(localStorage.getItem('employees'))
  const admin = JSON.parse(localStorage.getItem('admin'))

  return {employees,admin}
} 
  