import { Qu } from './qu.js';

const db = {
    proposal: {
        total: 20,
        req: [
            new Qu("Description of the problems you're solving.", 4),
            new Qu("Normalized table architecture", 5 / 7),
            new Qu("Column Names", 5 / 7),
            new Qu("Data types", 5 / 7),
            new Qu("Keys", 5 / 7),
            new Qu("Constraints", 5 / 7),
            new Qu("Referential actions", 5 / 7),
            new Qu("Relationships between tables", 5 / 7),
            new Qu("At least one function"),
            new Qu("At least one procedure"),
            new Qu("At least one trigger"),
            new Qu("At least one view"),
            new Qu(
                "At least one table automatically logging changes to the database"),
            new Qu("Justifications for the architecture and tools", 4),
            new Qu("Reasonably estimated timeline", 2)
        ],
        fb: [
            'Set aside a moment to consider your "MVP" (the least you can get away with doing while still having something finished), and then plan to do that set of work first.',
            "I'm also thinking that your function could simply be a view that leverages COUNT(). Maybe consider something a little better suited to a custom function.",
            "One thing that's incorrect here, and it's likely my fault for not explaining correctly, but referential actions are not just the foreign key relationship, but the actual actions defined that happen as a consequence, i.e. `ON DELETE CASCADE`."
        ]
    },
    lab8: {
        total: 5,
        req: [
            new Qu("One query that can tell me the names and shifts of the librarians working not this coming Monday, but the Monday following.", 0.5),
            new Qu("One query that can tell me Beverly Cleary's assignments for that day.", 0.5),
            new Qu("Your tables duplicate data as little as possible.", 0.5),
            new Qu("Your tables have no one-to-one relationships that you can't justify.", 0.5),
            new Qu("Your tables have no many-to-many relationships that aren't mediated by a bridging table.", 0.5),
            new Qu("Your tables have one table for each type of entity (person, place, thing, event).", 0.5),
            new Qu("Your tables have one cell for 1 datum (piece of data).", 0.5),
            new Qu("Your tables maintain referential integrity with keys.", 0.5),
            new Qu("Your tables maintain data integrity with constraints and referential actions.", 0.5),
            new Qu("Your tables maintain semantics with data types.", 0.5)
        ],
        fb: ["The main area of improvement would be the assignments table. Librarians are permanently associated with an assignment, but instead given different assignments from week to week. You could reduce repetition and better reflect the real world by referencing the assignments in the schedule table.",
            "When selecting for a person, use their id rather than their name, as names change.",
            "I think one could argue that since MySQL provides the DAYNAME() function, including the names of dates is superfluous",
            "There's an argument to be made that assignments are their own entity, and they should be contained in a separate fourth table to meet the requirements for 2NF",
            "I think there should be at least some appropriate referential actions.",
            "1NF says we should break up lists of data - your assignment/role data looks like it could get broken up."
        ]
    },
    lab10: {
        total: 5,
        fb: ["Choose five questions, at least one being from questions 6-10"],
        req: [
            new Qu("Take an integer as an input parameter, multiply it by itself, and then multiply that by the value of π (note: you can easily get the value of π with the built-in function PI()). This function can calculate the area of a circle based on the radius!"),
            new Qu("Take two strings as your input parameters. Concatenate them, starting with the longer of the two strings. (Remember - there is a built-in function for checking the length of strings.)"),
            new Qu("Set a due date - books are due three weeks from the withdrawal date, unless that date is a Tuesday. The library has shortened hours on Tuesdays, so books withdrawn on a Tuesday are due in three weeks plus one day. Have your function return the due date based on the withdrawal date."),
            new Qu("Let's cleanse some data! Take a string as an input parameter. If the string begins with 'ca' (regardless of the casing), and the string is not Cabo Verde, Cambodia, or Cameroon, return 'CAN'. Otherwise, return the value of the input parameter."),
            new Qu("Take three integers as your input parameters. Return the sum of those numbers. If arguments passed in for the first or second parameters are null, set the value of the null argument to zero. If the value of the third argument is null, throw an error."),
            new Qu("One kilometre is approximately 0.621371 miles. Create a function that accepts two parameters - one for the value, and one for the type of unit. This function should convert miles to kilometres, or vice-versa, rounded to six decimal places."),
            new Qu("James Hoffman recommends a ratio of 60 grams of ground coffee to 1 litre of water for percolation brewing, and 75 grams of coffee to 1L of water for immersion brewing. Create a function that accepts three inputs - the volume of coffee, the volume of water, and the brew type. If one or the other volume parameters are null, calculate the required volume of the null parameter based on the volume argument provided, and the brew type. If both arguments are provided, round to the nearest gram and ml, and return a response that either confirms that this is the correct ratio, or recommends an adjustment in the volume of water."),
            new Qu("Create a function that prints integers, counting down from 20 to 1 by twos, using a WHILE loop."),
            new Qu("Create a non-deterministic function that checks to see if a date is Friday the 13th. If a null argument is passed, it should check if today is Friday the 13th."),
            new Qu("Create a function to format a date as \"{day name}, the {date}{ordinal indicator} of {month name}\", for example, today is \"Wednesday, the 18th day of November\". You can use any built-in date functions except DATE_FORMAT(). Remember to use the appropriate ordinal indicator for a given number, i.e. 1st, 22nd, 23rd.")
        ]
    },
    lab11: {
        total: 5,
        req: [
            new Qu('Create a procedure that accepts four input parameters: two strings, a date, and a number. Have your procedure perform a select statement that selects values from your input parameters in the following format: "{date}\'s episode of Sesame Street has been brought to you by the letters {first letter of string1, uppercased} and {first letter of string2, uppercased}, and the number {number}."'),
            new Qu('Create a procedure that, when called, will insert values into three of your database\'s tables: two tables with a many-to-many relationship, and the bridging table that manages that relationship. See the example I used of books & authors on how to do this while maintaining data integrity.'),
            new Qu('Create a procedure that, when called, will set a session variable to the current time. Additionally, write a SELECT statement using that session variable that will subtract the session variable from the current time.')
        ],
        fb: [
            "Re Q1 - follows the general idea, but not the string formatting specified in the question.",
            "Re Q3 - missing this part of the question: write a SELECT statement using that session variable that will subtract the session variable from the current time.",
            "Re Q3 - does your procedure set the session variable?",
            "Take a moment to review the difference between session variables and local variables",
            "Watch out for line breaks in your code - they may show up in your returned string as a 'pilcrow' character (¶)",
            "Don't forget the space before the semicolon when you're resetting the delimiter to the default - `DELIMITER ;`, not `DELIMITER;`"
        ]
    },
    presentation: {
        total: 15,
        req: [],
        fb: ["When presenting, the most important thing is to give your audience only the information most relevant to them within the time allotted to you.", "Note that the rubric was focussed on the presentation as a progress report, with an emphasis on innovation.", "I did appreciate the nice formatting of your slides.", "Would've liked to hear a little more about the thought process and progress overall."]
    }
};

export { db };