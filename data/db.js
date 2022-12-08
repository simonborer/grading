 import { Qu } from './qu.js';

const db = {
    proposal: {
        total: 10,
        req: [
            new Qu("Description of the problems you're solving.", 2.5),
            new Qu("Normalized table architecture", .426),
            new Qu("Column Names", .426),
            new Qu("Data types", .426),
            new Qu("Keys", .426),
            new Qu("Constraints", .426),
            new Qu("Referential actions", .425),
            new Qu("Relationships between tables", .426),
            new Qu("At least one function or procedure", 1 / 2),
            new Qu("At least one view", 1 / 2),
            new Qu("At least one table automatically logging changes to the database", 1 / 2),
            new Qu("Justifications for the architecture and tools", 2.5),
            new Qu("Reasonably estimated timeline", 1 / 2)
        ],
        fb: [
            'Set aside a moment to consider your "MVP" (the least you can get away with doing while still having something finished), and then plan to do that set of work first.',
            "I'm also thinking that your function could simply be a view that leverages COUNT(). Maybe consider something a little better suited to a custom function.",
            "UNIQUE and NOT NULL are redundant for primary keys",
            "In your function, how are you going to define the start date of the two-week period? For example, if I am scheduled to work 44 hours each Week 3 and Week 4, can I still add hours for Week 2?",
            "Where will your triggers log data?",
            "One thing that's incorrect here, and it's likely my fault for not explaining correctly, but referential actions are not just the foreign key relationship, but the actual actions defined that happen as a consequence, i.e. `ON DELETE CASCADE`."
        ]
    },
    lab2: {
        total: 4,
        req: [
        new Qu("Q1"),
        new Qu("Q2"),
        new Qu("Q3"),
        new Qu("Q4"),
        new Qu("Q5"),
        new Qu("Q6"),
        new Qu("Q7"),
        new Qu("Q8")],
        fb: ["Semicolons (;) tell the computer \"this query is over\", so they can only come at the very end of your statements.", "The \"greater than or equal to\" symbol is >=.", "Highest to lowest means descending (DESC).", "To check if there's a billing state listed, we'd write billingState IS NOT NULL.", "Regarding Q1: It seems like you forgot to add the clause 'billingstate IS NOT NULL'", "Regarding Q1: I think the operator you want is 'greater than or equal to', written >=", "Re Q2: you've sorted from youngest to oldest.", "What about this part? `Exclude the two oldest.`", "Regarding Q3: I'm not sure why you added the clause 'company IS NOT NULL'. If you have questions about the meaning of data, feel free to bring that up.", "Q3: The distinct keyword can only go inside COUNT(), and no other functions (i.e. LOWER)", "Q3: No marks taken off for this, but I think you've misunderstood the data a little. Whether or not the customer has a company listed doesn't determine whether or not they're a customer.", " Regarding Q4: What about the first name?", "Regarding Q4: Note that you have to specify one column per clause. Check your data - are there any rows where the firstname has a 't', but the lastname does not?", "Regarding Q4: You'll want to use the SUBSTR function to include a column that lists the third letter of the last name. For the WHERE clause, remember that for every condition you need to restate the column name, so for this we would write WHERE firstname LIKE '%t%' OR lastname LIKE '%t%'", "Regarding Q4, the LIKE clause is case insensitive, so you don't need to check for both 't', and 'T', but regardless, you can't chain together clauses this way - you need to test one column against one clause, and then chain these pairings together with AND or OR, so instead of `firstname OR lastname LIKE '%t%' OR '%T%'`, you'd need to write `firstname LIKE '%t%' OR firstname LIKE '%T% OR lastname LIKE '%t%' OR lastname LIKE '%T%'", "Regarding Q5: Strange that your assignment has a question mark (?) instead of a ö (an o with an ülaut). Is this something to do with your computer, or perhaps the font you're using?", "Re Q5: Looks like you forgot to filter out the rows that don't contain a ö", "Regarding Q6: It seems like you've confused the syntax for COALESCE with the syntax for the REPLACE function. I think you need to decide how you're going to approach verifying your results. ", "Regarding Q6: Be careful! A space is not the same thing as an empty string. Also, just as in question 4, for the WHERE clause, remember that for every condition you need to restate the column name, so this needs to be \"WHERE state IS NULL OR fax IS NULL;\". However, the question should not be answered with this clause. You are to get ALL the results from the customer table. COALESCE will replace null values, but only if they are null.", "Regarding Q6: Unfortunately COALESCE doesn't accept a list of columns, so you have to write the function for each column that you want to affect, like so: \"SELECT customerID, COALESCE(state, ''), COALESCE(fax, '')\"", "Re Q6: The COALESCE function only accepts two parameters - the input data and the output. NULL is implied. Also, be careful - whitespace is not the same as an empty string.", "Regarding Q7: Take a look at the SUBSTR function and the > operator - these are what your answer is missing.", "Regarding Q7: The SUBSTR function starts counting characters at the value '1', so your function is only selecting 19 characters. For your WHERE clause, I believe you meant to use the LENGTH function to get the total number of characters in the title.", "Re Q7: You need to use the substring function in your list of selected columns to return the truncated title. Also, the extra functions (upper and substr) in your where clause don't do anything because they're not being compared to anything.", "Regarding Q8: This works, but repetition not only means extra work, both now and when maintaining the code, but also more opportunities for mistakes. To make your code more concise, you could use parentheses, and write your clause as \"WHERE (billingCity = 'Berlin' OR billingCity = 'Toronto') AND total > 5\", or simply use a list: \"WHERE billingCity IN ('Berlin', 'Toronto') AND total > 5\".", "Regarding Q8: You were very close! Rather than using the LIKE operator (which matches a pattern), you could've used IN (which checks against a list), or the \"equals\" operator (and appropriate parentheses), like this: \"WHERE (billingCity = 'Berlin' OR billingCity = 'Toronto') AND total > 5\"", "Re Q8: Your query selects all the invoices from Berlin, regardless of the value in the total column. You need to use parentheses to group clauses, or use a clause that can capture both cities, like IN"
]
    },
    lab3: {
        total: 4,
        req: [
        new Qu("Q1", 4 / 9),
        new Qu("Q2", 4 / 9),
        new Qu("Q3", 4 / 9),
        new Qu("Q4", 4 / 9),
        new Qu("Q5", 4 / 9),
        new Qu("Q6", 4 / 9),
        new Qu("Q7", 4 / 9),
        new Qu("Q8", 4 / 9),
        new Qu("Q9", 4 / 9),
        new Qu("Q10 (Bonus)"), 4 / 9],
        fb: [
            {    
                assoc: "0",
                text: "Occurrence_Year % 2 = 0 means Occurrence_Year is divisible by 2 with no remainder, so this returns odd years. Don't forget to check your results table to see if you're getting what you expect."}, 
            "\"Occurrence_Year % 2\" returns a value, not a condition. I think what you're looking for is \"Occurrence_Year % 2 = 1\"", "Seems like you didn't address 'Format this result as a dollar figure (include the dollar sign, and don't show fractions of a cent).'", "Why exclude bikes based on their status?", "Look at CONCAT to format with the dollar sign.", "SUBSTR only works here because the returned number is (barely) less than $1000. If you use ROUND() to round off the number to two decimal places, you can keep using your query regardless of the amount.", "If you coalesce null values to 0 in this case, I think you're misrepresenting the data by bringing down the average price when in fact we should only calculate the average based on known values, and exclude the unknown. If a $1000 bike gets stolen, the fact that the value wasn't recorded doesn't make it worthless."]
    },
    lab5: {
        total: 4,
        req: [
        new Qu("Q1"),
        new Qu("Q2"),
        new Qu("Q3"),
        new Qu("Q4"),
        new Qu("Q5"),
        new Qu("Q6"),
        new Qu("Q7"),
        new Qu("Q8"),
        new Qu("Q9"),
        new Qu("Q10")],
        fb: ["Q1: You missed a book (the one without an author listed). You'd need to use a left join with both tables (or reorder the tables and use a single right join).", "Q2: WHERE clause is a little overcomplicated", "Q2: Don't hard-code when you can select real data","Q2: Where's the title?", "Q3: Don't use HAVING when you can use WHERE","Q3: Where's the rest of the American authors?","Q4: Why not use the MONTH() function?","Q4: Don't use LIKE when you mean equals","Q5: Don't use GROUP BY to replace DISTINCT", "Q7: Use the primary key by default","Q10: Where's the self-join?", "Q10: This is just a list of first names, not a list of people"]
    },
    lab8: {
        total: 4,
        req: [
            new Qu("Your tables duplicate data as little as possible."),
            new Qu("Your tables have no one-to-one relationships that you can't justify."),
            new Qu("Your tables have no many-to-many relationships that aren't mediated by a bridging table."),
            new Qu("Your tables have one table for each type of entity (person, place, thing, event)."),
            new Qu("Your tables have one cell for 1 datum (piece of data)."),
            new Qu("Your tables maintain referential integrity with keys."),
            new Qu("Your tables maintain data integrity with constraints and referential actions."),
            new Qu("Your tables maintain semantics with data types."),
            new Qu("One query that can tell me the names and shifts of the librarians working not this coming Monday, but the Monday following."),
            new Qu("One query that can tell me Beverly Cleary's assignments for that day.")
        ],
        fb: ["The main area of improvement would be the assignments table. Librarians are permanently associated with an assignment, but instead given different assignments from week to week. You could reduce repetition and better reflect the real world by referencing the assignments in the schedule table.",
            "When selecting for a person, use their id rather than their name, as names change, or can be not unique.",
            "I think one could argue that since MySQL provides the DAYNAME() function, including the names of dates is superfluous",
            "There's an argument to be made that assignments are their own entity, and they should be contained in a separate fourth table to meet the requirements for 2NF",
            "I think there should be at least some appropriate referential actions.",
            "1NF says we should break up lists of data - your assignment/role data looks like it could get broken up.",
            "Your schedule table violates the first normal form by having two columns for identical/interchangeable data."
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