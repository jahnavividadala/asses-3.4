/*
 * Module 2 Practice Assessment — Task Tracker data utilities
 * ------------------------------------------------------------------
 * Implement the 10 functions below. Each one is checked by a Jasmine
 * spec in tests/FunctionsTest.js (10 specs x 2 marks = 20).
 *
 * A "task" is a plain object shaped like:
 *   { title: "Buy milk", status: "todo", done: false, priority: "high" }
 *
 * Rules:
 *   - Do NOT rename the functions and do NOT change their parameters.
 *   - Do NOT edit index.html, main.css, or tests/FunctionsTest.js.
 *   - Keep each function pure: return a value, do not print or mutate
 *     the inputs unless the task explicitly says to.
 * ------------------------------------------------------------------
 */

// 1. greet(name) -> a greeting built with a TEMPLATE LITERAL.
//    greet("Aisha") must return exactly:  "Hi, Aisha! Welcome back."
function greet(name) {
  // TODO: use a template literal (backticks) to build the string
}

// 2. isPassing(score) -> true if score is 40 or more, else false.
function isPassing(score) {
  // TODO: use a comparison operator
}

// 3. sumScores(scores) -> the sum of all numbers in the array.
//    sumScores([]) must return 0.
function sumScores(scores) {
  // TODO: add up the array (a loop OR reduce)
}

// 4. highScores(scores, min) -> a NEW array with only the scores
//    strictly greater than min.  highScores([10,50,90], 40) -> [50,90]
function highScores(scores, min) {
  // TODO: filter the array
}

// 5. titles(tasks) -> an array of every task's .title, in order.
function titles(tasks) {
  // TODO: map each task object to its title
}

// 6. countByStatus(tasks, status) -> how many tasks have that .status.
function countByStatus(tasks, status) {
  // TODO: count the matches
}

// 7. toggleDone(task) -> a NEW task object identical to the input but
//    with .done flipped. The ORIGINAL object must not be changed.
function toggleDone(task) {
  // TODO: copy the object (spread) and flip done
}

// 8. longestTitle(tasks) -> the single .title string with the most
//    characters. Assume at least one task; ties may return either.
function longestTitle(tasks) {
  // TODO: compare title lengths
}

// 9. averageScore(scores) -> the average of the numbers.
//    averageScore([]) must return 0 (do not divide by zero).
function averageScore(scores) {
  // TODO: guard the empty case, then average
}

// 10. formatTask(task) -> a display line built with a TEMPLATE LITERAL:
//     done tasks start with "[x] ", not-done with "[ ] ", then the
//     title, then " (priority)".
//     { title:"Ship", done:true, priority:"low" } -> "[x] Ship (low)"
function formatTask(task) {
  // TODO: choose the box with a conditional, build with a template literal
}
