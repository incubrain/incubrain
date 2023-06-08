---
id: 1
title: Junior Frontend Technical Interview
visible_on: null
tags: ['hiring', 'businss']
excerpt: 'A list of tasks to give to frontend candidates during a technical interview.'
card_image: /projects/mlfx-website/hero.png
post_image: /projects/mlfx-website/hero.png
published: 8th June 2023
---

This interview is designed to test the candidate's frontend ability.

This interview will measure:

1. **Problem solving:** Can the candidate solve problems in a logical and efficient way?
2. **Code quality:** Can the candidate write clean, readable, and maintainable code?
3. **Communication:** Can the candidate communicate effectively with the interviewer?
4. **Technical knowledge:** Does the candidate have the technical knowledge required for the role?
5. **Design Implementation:** Can the candidate implement a design to a high standard?

I'm not a fan of whiteboard interviews, so I've designed this interview to be as close to real work
as possible. The candidate will be given a task to complete, and will be able to use any resources
they would normally use in their day-to-day work. The interviewer will be available to answer any
questions the candidate has, and will provide feedback and guidance throughout the interview.

The candidate should keep following in mind:

- **This is not a test.** The interviewer is not looking for a perfect solution, they are looking
  for a solution that demonstrates your ability to solve problems and write clean, maintainable
  code.
- **You are not expected to know everything.** If you don't know something, ask the interviewer.
- **Please talk through your thought process:** The interviewer wants to know how you think, so
  please talk through your thought process as you work through the tasks.
- **You are not expected to finish:** The interviewer is more interested in how you approach the
  task.

**1. Introduction (10 minutes):**

- Brief self-introduction, explaining your role and the objectives of the interview.
- Ask their experience in frontend development and specific experience with Vue/Nuxt or React/Next.

**4. Hands-on Pair Coding (60 minutes):**

- **Simple Task** (20 minutes): Create an application with a navigation bar and three routes/pages -
  Home, About, and Contact.
- **Complex Task** (40 minutes): Develop a feature where a user can fetch data from a public API
  (like a list of users from https://jsonplaceholder.typicode.com/users), display this data in a
  list/card grid on the Home page, clicking on an item in the list takes the user to a detailed view
  of that item. **Bonus:**
  - Add a search bar to the Home page that allows users to search the list of items.
  - Add a pagination feature to the Home page that allows users to navigate between pages of items.
  - Add state managed CRUD functionality.

**5. Code Review and Discussion (20 minutes):**

- Discuss the code written, ask why they made the choices they did, what they could improve or do
  differently, how they would scale it up, etc.

**6. Best Practices & Performant Applications (20 minutes):**

- Question: How do you ensure your web applications are accessible?
- Question: What steps do you take to optimize the performance of your applications?
- Question: How do you handle security in your applications?

**7. Q&A (15 minutes):**

- Give the candidate an opportunity to ask any questions they have. This will help you understand
  their expectations and what they value in their work environment.

Remember to approach the interview as a conversation, not a one-way interrogation. Provide feedback
and guidance throughout the coding exercise to mimic the collaboration they would experience on the
job.

---

Sure, here are some task ideas:

**Simple Tasks**

1. **Create a basic CRUD app:** This would involve creating, reading, updating, and deleting data
   from a simple data store (it could be local data in the state, or remote data from an API).

2. **Create a blog site:** Make a simple blog with a homepage that lists blog posts and a page that
   shows individual blog post content.

3. **Build a to-do list:** This is a classic application that would involve adding to-dos, marking
   them as complete, and deleting them.

4. **Make a weather dashboard:** This could involve fetching data from a weather API and displaying
   it.

5. **Form validation:** Create a registration form with different fields (email, password, confirm
   password) and perform client-side validation.

6. **Image gallery:** Create a simple image gallery where images can be added, viewed, and deleted.

7. **User Profile page:** Create a user profile page where users can update their profile
   information.

8. **Commenting system:** Build a simple commenting system where users can post comments and see
   comments from others.

9. **Pagination:** Implement a pagination feature on a page that lists multiple items (like blog
   posts or products).

10. **Theming switcher:** Implement a feature that allows users to switch between light and dark
    modes in the application.

## Complex Tasks

1. **State-Dependent Rendering:** Build a component that changes its rendering based on the state of
   the application. For example, show a different UI if data is loading, if an error occurred, or if
   data loaded successfully.

2. **Advanced Form:** Create a form with various fields that demonstrates your understanding of form
   validation, handling form state, and handling form submission. This could involve a mixture of
   text inputs, select dropdowns, radio buttons, and checkboxes.

3. **Filterable List:** Fetch data from a public API and render it in a list. Add functionality to
   filter list items based on user input.

4. **Nested Routing:** Create an application with nested routing. For instance, a user list where
   clicking on a user takes you to a detail page for that user.

5. **Infinite Scroll:** Implement an infinite scroll feature, where more data loads automatically as
   the user scrolls down the page.

6. **Custom Hook:** For React/Next.js candidates, ask them to build a custom hook to perform a
   common task, like fetching data from an API.

7. **Client-Side Search:** Build a client-side search feature where users can search data (fetched
   from an API) that's stored on the client-side.

8. **Real-Time Search Results:** Create a search bar that shows results in real time as the user
   types, based on data fetched from an API.

9. **Interactive Dashboard:** Develop a simple dashboard with mock data where clicking on a data
   point filters or changes the data displayed elsewhere on the dashboard.

10. **Dynamic Page Generation:** For Next.js candidates, have them build an application that
    dynamically generates pages based on data fetched from an API. For Nuxt.js candidates, a similar
    task can be done with the Nuxt's dynamic routing.

Remember to make these tasks relevant to the actual work they will be doing, and to consider how
much time is reasonable for the task considering the time pressure of the interview setting.
