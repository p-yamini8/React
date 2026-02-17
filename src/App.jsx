// import Expenses from "./components/Expense/Expense"
// import NewExpense from "./components/newExpense/NewExpense";
// function App() {
//   const expenses = [
//     { id: 1, title: "Insurance", date: new Date(2023, 7, 15), price: 100 },
//     { id: 2, title: "Book", date: new Date(2023, 8, 25), price: 10 },
//     { id: 3, title: "Pen", date: new Date(2023, 2, 10), price: 1 },
//     { id: 4, title: "Laptop", date: new Date(2023, 9, 17), price: 200 },
//   ];

//   return (
//     <div>
//       <NewExpense/>
//       <Expenses expenses={expenses} />
//     </div>
//   );
// }

// export default App;
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function App() {
  // Hint: Define the validation schema using Yup to validate email and password
  // Hint: Email should be a valid email format and required
  // Hint: Password should be at least 6 characters and required
  
  const validationSchema = Yup.object({
    // Add your Yup validation here
   
    email: Yup.string().email("Invalid email format").required("Email is required"),
    password:Yup.string().min(6,"Invalid password formate").required("Password is required")

  });

  const initialValues = {
    // Hint: Set initial values for email and password fields (empty strings to start with)
  
email: "",
password:"",
  };

  // Hint: Create an onSubmit function that logs form values to the console when submitted
  const handleSubmit = (values, { resetForm }) => {
    console.log("form values:", values);
    alert("form submitted !");
    resetForm();
 }

  return (
    <div>
      <h1>Simple Login Form</h1>
      <Formik
        // Hint: Pass the initialValues, validationSchema, and onSubmit function here
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            {/* Email Field */
             }
            <div>
              <label htmlFor="email">Email</label>
              <Field type="email" id="email" name="email"placeholder="email" />
              <ErrorMessage name="email"
                component='p'/>
             

              {/* Hint: Display ErrorMessage for email if validation fails */}
             
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password">Password</label>
              <Field type="password" id="password" name="password" placeholder="Password" />
              <ErrorMessage name="password"
              component="p"/>
              {/* Add the field type password  */}
              {/* Hint: Display ErrorMessage for password if validation fails */}
            </div>

           
            <button type="submit">Submit</button> 
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default App;
