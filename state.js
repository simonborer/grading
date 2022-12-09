class Qu {
    constructor(e, t, o) { this.q = e, this.val = t, this.class = o ?? "" }
}
const web = {
        lab1: {
            total: 8,
            req: [
                new Qu("Send me a codepen link, containing..."), new Qu("...a write-up about what you learned, using..."), new Qu("2 different kinds of headings,"), new Qu("3 paragraphs,"), new Qu("one link,"), new Qu("bolded text,"), new Qu("italic text, and"), new Qu("one list.")
            ],
            fb: [
                "Just one thing - ", "A little feedback...", 'attribute values (i.e. the url in an anchor tag\'s `href` attribute) need to be quoted with "double quotes".', "make sure all your tags are closed.", "review the meaning of numbers in heading tags (h1, h2, etc.). It's not the order that they come in, but the level of the heading (i.e. section, subsection, etc.).", "HTML tags should be written in lowercase.", "I see you've got some familiarity with an older version of HTML. Make sure you're using HTML5 elements like we learn in class.", "make sure all your tags are paired up properly, and closed in the right order.", "the `ul` tag is for a whole list, and the `li` tag is for each item within that list. One ul (list), many li's (list items).", "You're missing a few things:", "- a link (an 'anchor' tag),", "- a second kind of heading (i.e. h2)", "- a list (ul & li elements)", "don't use empty elements - elements are there to describe content, and if there's no content, there's no point in describing it.", "If you're not clear on these, please let me know."
            ]
        },
        lab2: {
            total: 8,
            req: [
                new Qu("Create a document with extension '.html'"), new Qu("Add a doctype declaration"), new Qu("Add an html element (with the required attribute!)"), new Qu("Inside your html element, add a head element, and a body element."), new Qu("Inside your head element, add a title and the charset."), new Qu("Inside your body element, add a header, main, and footer."), new Qu("Inside the header, add the document's title. What's a good element for that?"), new Qu("Also inside the header, add an image that might work as your 'hero' image. Don't worry about copyright attribution for now. Just make sure to add appropriate alternative text."), new Qu("Inside your main, create a table called 'favourites'. Put some of your favourite things in the table. Make sure to give your columns the appropriate headings. Throw an inline element in there while you're at it."), new Qu("Inside the foot, put the copyright symbol, the current year, and your name."),
            ],
            fb: [
                "Just one thing - ", "A little feedback...", 'attribute values (i.e. the url in an anchor tag\'s `href` attribute) need to be quoted with "double quotes".', "make sure all your tags are closed.", "review the meaning of numbers in heading tags (h1, h2, etc.). It's not the order that they come in, but the level of the heading (i.e. section, subsection, etc.).", "HTML tags should be written in lowercase.", "I see you've got some familiarity with an older version of HTML. Make sure you're using HTML5 elements like we learn in class.", "make sure all your tags are paired up properly, and closed in the right order.", "The head and the header are very different things. Make sure you know which one's which.", "You've got kind of a mish-mash of a table and list going. They can't really be combined.", "caption goes inside the table.", "You're missing a few things:", "If you're not clear on these, please let me know."
            ]
        },
        lab3: {
            total: 8,
            req: [
                new Qu("a class selector"), new Qu("an id selector"), new Qu("a sibling selector"), new Qu("a child selector"), new Qu("centred text"), new Qu("a hex code"), new Qu("a font-size"), new Qu("one style that gets overridden by another")
            ],
            fb: [
                "Good work! It's clear you've got the core concepts down. You've missed some of the requirements, but you're making good progress! Feel free to let me know if there's anything in particular you'd like help getting a handle on.", "Make sure your curly braces are closed properly.", "Have another look at how sibling selectors work: https://webintro2021.ca/posts/the-3rd-week/#groupingSelectors", "As I mentioned in class, when you write HTML in CodePen, it has already created the document for you, and you are writing inside a 'body' element."
            ]
        },
        lab4: {
            total: 4,
            req: [
                new Qu("Create a web page with 6 different sections and a page heading.", 1), new Qu("Near the top of your page, include a menu that links to all 6 sections, plus one external link.", 1), new Qu("Section content: A heading for each section.", 1 / 3, "extra"), new Qu("Section content: An image.", 1 / 3, "extra"), new Qu("Section content: A paragraph, including text, and at least one anchor tag.", 1 / 3, "extra"), new Qu("Using an external stylesheet, give different :hover styles to your navigation links and the links in your page content.", 1)
            ],
            fb: [
                "Missing external link in menu"
            ]
        },
        assn1: {
            total: 10,
            req: [
                new Qu("Submit one html file, and one css file, zipped in a folder.", 1), new Qu("Make sure all your HTML and CSS is valid according to the W3C.", 1), new Qu("All your HTML must be semantically correct.", 1), new Qu("Your CSS must be coded mobile-first.", 1), new Qu("include a header image", .5, "extra"), new Qu("include a page title with a different font-family than the body font.", .5, "extra"), new Qu("include in-page navigation", .5, "extra"), new Qu("include three or more sections of content (with section titles where appropriate).", .5, "extra"), new Qu("include enough content that the page extends past the bottom of the viewport.", .5, "extra"), new Qu('include a "back to top" button that remains in the bottom-right of the viewport that returns the user to the top of the page.', .5, "extra"), new Qu("include at least two images in the page content, at least one floated to the right, and at least one floated to the left.", .5, "extra"), new Qu("include appropriate padding/margin around elements to make things pleasant to read.", .5, "extra"), new Qu("include a different colour scheme on desktop and mobile.", .5, "extra"), new Qu("include one word in the body content, not contained in a link, that changes style when hovered over.", .5, "extra"), new Qu("Add a bit of personal style.", 1)
            ],
            fb: [
                "A few issues that I think could've been resolved if you validated your HTML & CSS."
            ]
        },
        lab6: {
            total: 4,
            req: [
                new Qu("Code should be semantic and validate.", .6), new Qu("On larger screens, the content of the page should not take up the full width of the viewport, but instead occupy a centred column.", .6), new Qu("Interactive elements (such as buttons and/or links) should give the user custom feedback when the state changes, using pseudoclass selectors.", .6), new Qu("Content should include a distinct header, footer and main, with images and text.", .6), new Qu('At least one section should have multiple columns that at side-by-each on desktop and "stacked" into a single column on mobile.', .6), new Qu("The page should have some style, such as a consistent color palette (you can generate one if you like).", .2), new Qu("Load Normalize via CDN.", .2), new Qu("Images should be loaded from a local folder.", .2), new Qu("In at least one instance, the flex order should change based on a media query.", .2), new Qu("Paragraph text should not exceed 60 characters in width.", .2)
            ],
            fb: []
        },
        lab7: {
            total: 4,
            req: [
                new Qu("Choose a website you enjoy using."), new Qu("In writing, define two possible user types for this website, and their different goals while using the website."), new Qu("Describe the individual steps (clicks, navigation, form fields, etc.) that they would have to take to achieve (one of) their goals."), new Qu("Does anything occur to you that could make things easier for them, that is achievable by the website's team? What is it? Or, if you can't think of anything, what designs or features are already in place that make those goals easy to achieve?")
            ],
            fb: []
        },
        lab8: {
            total: 4,
            req: [
                new Qu("Put together the copy deck & image assets for a simple three page website."), new Qu("The copy deck should not only include the literal text of your pages, but also note what content will be headings, what content will be linked, and any other UI elements that may be on your page."), new Qu("These pages will need to link to one another, so you can get to any of the other two pages from any of the three pages."), new Qu("On at least one page, give your content a good reason to have a JPEG image.", 1 / 3), new Qu("On at least one page, give your content a good reason to have a PNG image.", 1 / 3), new Qu("On at least one page, give your content a good reason to have a background image.", 1 / 3)
            ],
            fb: []
        },
        lab9: {
            total: 8,
            req: [
                new Qu("You submitted a url that leads to your website", 5), new Qu("Your website has 3 pages I can find easily", 2), new Qu("Your website has a good reason to have a PNG, a JPEG, and a background image.", 1), new Qu("Late marks deducted? (☒ = No, no marks were deducted; ☑ = Yes, late marks were taken off)", -.5)
            ],
            fb: [
                "Your site isn't there? I'm giving you a few marks on the assumption that, since you have a customized URL, you probably did make a site, but I can't see it. Re-submit with your github repo and I can tell you how to fix and up your grade."
            ]
        },
        lab10: {
            total: 4,
            req: [
                new Qu('A homepage, an "About" page, and a "Contact" page, all accessible from every other page (i.e. in the menu).', 4 / 3), new Qu("Relevant content on each of the pages. Simple is fine.", 4 / 3), new Qu("No lorem ipsum or default images.", 4 / 3)
            ],
            fb: []
        },
        assn2: {
            total: 20,
            req: [
                new Qu("Post 1", 3), new Qu("Post 2", 3), new Qu("Post 3", 3), new Qu("Post 4", 3), new Qu("Post 5", 3), new Qu("SyntaxHighlighter Code block", 1), new Qu('The "Custom HTML" block to render your own code.', 1), new Qu('The "Embed" block to embed one example of your work from codePen.', 1), new Qu("A screenshot of a webpage you coded.", 1), new Qu("The Quote block, featuring a quote from the notes, and a link not only to the page, but the page section where the quote appears.", 1), new Qu("Late marks deducted? (☒ = No, no marks were deducted; ☑ = Yes, late marks were taken off)", -2)
            ],
            fb: [
                "Loved reading your posts.", "You sent me to your dashboard, which I don't have access to. Your actual URL is&hellip;", "It looks like you haven't published your site, as all I see is this.\n\nI'm giving you some marks based on the premise that you have a site, you'll publish it, and let me know, and I'll be able to grade it properly.", "The main thing with this assignment was to put your writing in separate portfolio posts"
            ]
        },
        finalPt1: {
            total: 8,
            req: [
                new Qu("Delivered on time", 4), new Qu("Basic accessibility stuff: for example, do all the images have appropriate alternative text?", .5), new Qu("Basic automated audit stuff: are there performance metrics in Lighthouse that could be improved?", .5), new Qu("Basic responsive stuff: does anything break on mobile? Tablet? At a specific breakpoint?", .5), new Qu('Basic colour stuff: is there a coherent colour scheme? Are there any "oddball" colours?', .5), new Qu("Basic design pattern stuff: are things where you expect them to be? Are there useful things that are missing? (Remember your design conventions).", .5), new Qu("Basic quality assurance stuff: do all the buttons and links do something/link to somewhere? Is there any content - either text or images - that doesn't belong?", .5), new Qu("Basic optimization stuff: are there images that could be resized or compressed? Are there images or video in the wrong format?", .5), new Qu("Aesthetic feedback. Okay, this one's tricky: make sure any aesthetic feedback is not negative and is not vague. Give actionable suggestions for things you might prefer.", .5)
            ],
            fb: [
                "Optimization =/= appearance", "Leaving a section blank doesn't tell your partner that things are okay, it just makes them wonder if any testing was done. Telling someone what tests they passed is as important as telling them what needs improvement.", "Seems like there may be a little confusion about the meaning of different feedback categories.", "feedback was supposed to be done per page", "little information is given about how you know things are okay, which may undermine your partner's confidence in your conclusions", "As discussed in class, Lighthouse is not a replacement for manual accessibility testing", "if you'd delivered this as feedback per page, rather than as a whole, it would create more confidence that all aspects had been tested. Knowing what has passed inspection is nearly as important as knowing what failed.", "As mentioned, the emphasis is on actionable feedback - anyone can run a lighthouse audit in a few seconds, but knowing what can be improved and how to improve it is where you give your partner real help.", "I'd suggest working on your spreadsheet formatting (providing feedback per page can help your partner a great deal while they're going through and fixing stuff)."
            ]
        },
        finalPt2: {
            total: 12,
            req: [
                new Qu("Did you make changes on your website based on the peer review?"), new Qu("Was your presentation well-prepared?")
            ],
            fb: [
                "Nice work! Presentation could've used a bit more structure, but good overall.", "Nice work! Perhaps a little more detail into your process, progress and choices would've been nice, but solid overall."
            ]
        }
    },
    db = {
        lab2: {
            total: 4,
            req: [
                new Qu("Q1"), new Qu("Q2"), new Qu("Q3"), new Qu("Q4"), new Qu("Q5"), new Qu("Q6"), new Qu("Q7"), new Qu("Q8")
            ],
            fb: ['Semicolons (;) tell the computer "this query is over", so they can only come at the very end of your statements.', 'The "greater than or equal to" symbol is >=.', "Highest to lowest means descending (DESC).", "To check if there's a billing state listed, we'd write billingState IS NOT NULL.", "Regarding Q1: It seems like you forgot to add the clause 'billingstate IS NOT NULL'", "Regarding Q1: I think the operator you want is 'greater than or equal to', written >=", "Re Q2: you've sorted from youngest to oldest.", "What about this part? `Exclude the two oldest.`", "Regarding Q3: I'm not sure why you added the clause 'company IS NOT NULL'. If you have questions about the meaning of data, feel free to bring that up.", "Q3: The distinct keyword can only go inside COUNT(), and no other functions (i.e. LOWER)", "Q3: No marks taken off for this, but I think you've misunderstood the data a little. Whether or not the customer has a company listed doesn't determine whether or not they're a customer.", " Regarding Q4: What about the first name?", "Regarding Q4: Note that you have to specify one column per clause. Check your data - are there any rows where the firstname has a 't', but the lastname does not?", "Regarding Q4: You'll want to use the SUBSTR function to include a column that lists the third letter of the last name. For the WHERE clause, remember that for every condition you need to restate the column name, so for this we would write WHERE firstname LIKE '%t%' OR lastname LIKE '%t%'", "Regarding Q4, the LIKE clause is case insensitive, so you don't need to check for both 't', and 'T', but regardless, you can't chain together clauses this way - you need to test one column against one clause, and then chain these pairings together with AND or OR, so instead of `firstname OR lastname LIKE '%t%' OR '%T%'`, you'd need to write `firstname LIKE '%t%' OR firstname LIKE '%T% OR lastname LIKE '%t%' OR lastname LIKE '%T%'", "Regarding Q5: Strange that your assignment has a question mark (?) instead of a \xf6 (an o with an \xfclaut). Is this something to do with your computer, or perhaps the font you're using?", "Re Q5: Looks like you forgot to filter out the rows that don't contain a \xf6", "Regarding Q6: It seems like you've confused the syntax for COALESCE with the syntax for the REPLACE function. I think you need to decide how you're going to approach verifying your results. ", 'Regarding Q6: Be careful! A space is not the same thing as an empty string. Also, just as in question 4, for the WHERE clause, remember that for every condition you need to restate the column name, so this needs to be "WHERE state IS NULL OR fax IS NULL;". However, the question should not be answered with this clause. You are to get ALL the results from the customer table. COALESCE will replace null values, but only if they are null.', "Regarding Q6: Unfortunately COALESCE doesn't accept a list of columns, so you have to write the function for each column that you want to affect, like so: \"SELECT customerID, COALESCE(state, ''), COALESCE(fax, '')\"", "Re Q6: The COALESCE function only accepts two parameters - the input data and the output. NULL is implied. Also, be careful - whitespace is not the same as an empty string.", "Regarding Q7: Take a look at the SUBSTR function and the > operator - these are what your answer is missing.", "Regarding Q7: The SUBSTR function starts counting characters at the value '1', so your function is only selecting 19 characters. For your WHERE clause, I believe you meant to use the LENGTH function to get the total number of characters in the title.", "Re Q7: You need to use the substring function in your list of selected columns to return the truncated title. Also, the extra functions (upper and substr) in your where clause don't do anything because they're not being compared to anything.", "Regarding Q8: This works, but repetition not only means extra work, both now and when maintaining the code, but also more opportunities for mistakes. To make your code more concise, you could use parentheses, and write your clause as \"WHERE (billingCity = 'Berlin' OR billingCity = 'Toronto') AND total > 5\", or simply use a list: \"WHERE billingCity IN ('Berlin', 'Toronto') AND total > 5\".", "Regarding Q8: You were very close! Rather than using the LIKE operator (which matches a pattern), you could've used IN (which checks against a list), or the \"equals\" operator (and appropriate parentheses), like this: \"WHERE (billingCity = 'Berlin' OR billingCity = 'Toronto') AND total > 5\"", "Re Q8: Your query selects all the invoices from Berlin, regardless of the value in the total column. You need to use parentheses to group clauses, or use a clause that can capture both cities, like IN"]
        },
        lab3: {
            total: 4,
            req: [
                new Qu("Q1", 4 / 9), new Qu("Q2", 4 / 9), new Qu("Q3", 4 / 9), new Qu("Q4", 4 / 9), new Qu("Q5", 4 / 9), new Qu("Q6", 4 / 9), new Qu("Q7", 4 / 9), new Qu("Q8", 4 / 9), new Qu("Q9", 4 / 9), new Qu("Q10 (Bonus)"), 4 / 9
            ],
            fb: [{ assoc: "0", text: "Occurrence_Year % 2 = 0 means Occurrence_Year is divisible by 2 with no remainder, so this returns odd years. Don't forget to check your results table to see if you're getting what you expect." }, '"Occurrence_Year % 2" returns a value, not a condition. I think what you\'re looking for is "Occurrence_Year % 2 = 1"', "Seems like you didn't address 'Format this result as a dollar figure (include the dollar sign, and don't show fractions of a cent).'", "Why exclude bikes based on their status?", "Look at CONCAT to format with the dollar sign.", "SUBSTR only works here because the returned number is (barely) less than $1000. If you use ROUND() to round off the number to two decimal places, you can keep using your query regardless of the amount.", "If you coalesce null values to 0 in this case, I think you're misrepresenting the data by bringing down the average price when in fact we should only calculate the average based on known values, and exclude the unknown. If a $1000 bike gets stolen, the fact that the value wasn't recorded doesn't make it worthless."]
        },
        lab5: {
            total: 4,
            req: [
                new Qu("Q1"), new Qu("Q2"), new Qu("Q3"), new Qu("Q4"), new Qu("Q5"), new Qu("Q6"), new Qu("Q7"), new Qu("Q8"), new Qu("Q9"), new Qu("Q10")
            ],
            fb: [
                "Q1: You missed a book (the one without an author listed). You'd need to use a left join with both tables (or reorder the tables and use a single right join).", "Q2: WHERE clause is a little overcomplicated", "Q2: Don't hard-code when you can select real data", "Q2: Where's the title?", "Q3: Don't use HAVING when you can use WHERE", "Q3: Where's the rest of the American authors?", "Q4: Why not use the MONTH() function?", "Q4: Don't use LIKE when you mean equals", "Q5: Don't use GROUP BY to replace DISTINCT", "Q7: Use the primary key by default", "Q10: Where's the self-join?", "Q10: This is just a list of first names, not a list of people"
            ]
        },
        lab8: {
            total: 4,
            req: [
                new Qu("Your tables duplicate data as little as possible."), new Qu("Your tables have no one-to-one relationships that you can't justify."), new Qu("Your tables have no many-to-many relationships that aren't mediated by a bridging table."), new Qu("Your tables have one table for each type of entity (person, place, thing, event)."), new Qu("Your tables have one cell for 1 datum (piece of data)."), new Qu("Your tables maintain referential integrity with keys."), new Qu("Your tables maintain data integrity with constraints and referential actions."), new Qu("Your tables maintain semantics with data types."), new Qu("One query that can tell me the names and shifts of the librarians working not this coming Monday, but the Monday following."), new Qu("One query that can tell me Beverly Cleary's assignments for that day.")
            ],
            fb: [
                "The main area of improvement would be the assignments table. Librarians are permanently associated with an assignment, but instead given different assignments from week to week. You could reduce repetition and better reflect the real world by referencing the assignments in the schedule table.", "When selecting for a person, use their id rather than their name, as names change, or can be not unique.", "I think one could argue that since MySQL provides the DAYNAME() function, including the names of dates is superfluous", "There's an argument to be made that assignments are their own entity, and they should be contained in a separate fourth table to meet the requirements for 2NF", "I think there should be at least some appropriate referential actions.", "1NF says we should break up lists of data - your assignment/role data looks like it could get broken up.", "Your schedule table violates the first normal form by having two columns for identical/interchangeable data."
            ]
        },
        lab10: {
            total: 5,
            fb: [
                "Choose five questions, at least one being from questions 6-10"
            ],
            req: [
                new Qu("Take an integer as an input parameter, multiply it by itself, and then multiply that by the value of π (note: you can easily get the value of π with the built-in function PI()). This function can calculate the area of a circle based on the radius!"), new Qu("Take two strings as your input parameters. Concatenate them, starting with the longer of the two strings. (Remember - there is a built-in function for checking the length of strings.)"), new Qu("Set a due date - books are due three weeks from the withdrawal date, unless that date is a Tuesday. The library has shortened hours on Tuesdays, so books withdrawn on a Tuesday are due in three weeks plus one day. Have your function return the due date based on the withdrawal date."), new Qu("Let's cleanse some data! Take a string as an input parameter. If the string begins with 'ca' (regardless of the casing), and the string is not Cabo Verde, Cambodia, or Cameroon, return 'CAN'. Otherwise, return the value of the input parameter."), new Qu("Take three integers as your input parameters. Return the sum of those numbers. If arguments passed in for the first or second parameters are null, set the value of the null argument to zero. If the value of the third argument is null, throw an error."), new Qu("One kilometre is approximately 0.621371 miles. Create a function that accepts two parameters - one for the value, and one for the type of unit. This function should convert miles to kilometres, or vice-versa, rounded to six decimal places."), new Qu("James Hoffman recommends a ratio of 60 grams of ground coffee to 1 litre of water for percolation brewing, and 75 grams of coffee to 1L of water for immersion brewing. Create a function that accepts three inputs - the volume of coffee, the volume of water, and the brew type. If one or the other volume parameters are null, calculate the required volume of the null parameter based on the volume argument provided, and the brew type. If both arguments are provided, round to the nearest gram and ml, and return a response that either confirms that this is the correct ratio, or recommends an adjustment in the volume of water."), new Qu("Create a function that prints integers, counting down from 20 to 1 by twos, using a WHILE loop."), new Qu("Create a non-deterministic function that checks to see if a date is Friday the 13th. If a null argument is passed, it should check if today is Friday the 13th."), new Qu('Create a function to format a date as "{day name}, the {date}{ordinal indicator} of {month name}", for example, today is "Wednesday, the 18th day of November". You can use any built-in date functions except DATE_FORMAT(). Remember to use the appropriate ordinal indicator for a given number, i.e. 1st, 22nd, 23rd.')
            ]
        },
        lab11: {
            total: 5,
            req: [
                new Qu('Create a procedure that accepts four input parameters: two strings, a date, and a number. Have your procedure perform a select statement that selects values from your input parameters in the following format: "{date}\'s episode of Sesame Street has been brought to you by the letters {first letter of string1, uppercased} and {first letter of string2, uppercased}, and the number {number}."'), new Qu("Create a procedure that, when called, will insert values into three of your database's tables: two tables with a many-to-many relationship, and the bridging table that manages that relationship. See the example I used of books & authors on how to do this while maintaining data integrity."), new Qu("Create a procedure that, when called, will set a session variable to the current time. Additionally, write a SELECT statement using that session variable that will subtract the session variable from the current time.")
            ],
            fb: [
                "Re Q1 - follows the general idea, but not the string formatting specified in the question.", "Re Q3 - missing this part of the question: write a SELECT statement using that session variable that will subtract the session variable from the current time.", "Re Q3 - does your procedure set the session variable?", "Take a moment to review the difference between session variables and local variables", "Watch out for line breaks in your code - they may show up in your returned string as a 'pilcrow' character (\xb6)", "Don't forget the space before the semicolon when you're resetting the delimiter to the default - `DELIMITER ;`, not `DELIMITER;`"
            ]
        },
        proposal: {
            total: 10,
            req: [
                new Qu("Description of the problems you're solving.", 2.5), new Qu("Normalized table architecture", .426), new Qu("Column Names", .426), new Qu("Data types", .426), new Qu("Keys", .426), new Qu("Constraints", .426), new Qu("Referential actions", .425), new Qu("Relationships between tables", .426), new Qu("At least one function or procedure", .5), new Qu("At least one view", .5), new Qu("At least one table automatically logging changes to the database", .5), new Qu("Justifications for the architecture and tools", 2.5), new Qu("Reasonably estimated timeline", .5), new Qu("Late marks deducted? (☒ = No, no marks were deducted; ☑ = Yes, late marks were taken off)", -2)
            ],
            fb: ['Set aside a moment to consider your "MVP" (the least you can get away with doing while still having something finished), and then plan to do that set of work first.', "I'm also thinking that your function could simply be a view that leverages COUNT(). Maybe consider something a little better suited to a custom function.", "UNIQUE and NOT NULL are redundant for primary keys", "In your function, how are you going to define the start date of the two-week period? For example, if I am scheduled to work 44 hours each Week 3 and Week 4, can I still add hours for Week 2?", "Where will your triggers log data?", "One thing that's incorrect here, and it's likely my fault for not explaining correctly, but referential actions are not just the foreign key relationship, but the actual actions defined that happen as a consequence, i.e. `ON DELETE CASCADE`."]
        },
        presentation: {
            total: 15,
            req: [],
            fb: [
                "When presenting, the most important thing is to give your audience only the information most relevant to them within the time allotted to you.", "Note that the rubric was focussed on the presentation as a progress report, with an emphasis on innovation.", "I did appreciate the nice formatting of your slides.", "Would've liked to hear a little more about the thought process and progress overall."
            ]
        }
    },
    qa = {
        assn1: {
            description: "Part 1: Choose something you've made that is publicly accessible, or put a new page on the internet!<br>Code quality is not a part of your grade for this assignment.<br>Write up the requirements.<br>Include the following: <ul><li>The URL of the page being tested</li><li>Screenshot or wireframes of the page</li><li>Link URLs</li><li>Copy</li></ul>Put this in a document<br><br>Part 2: Using our ad hoc tools, test the page for the following:<ul><li>HTML & CSS validation</li><li>Accessibility</li><li>JSHint errors/warnings</li><li>Lighthouse recommendations for Performance, Best Practices, & SEO</li><li>Dev tools security audit issues</li><li>Responsive layout issues</li><li>Form submission (if applicable)</li><li>Compliance for layout and content provided by your partner</li></ul>Log any issues in a spreadsheet<br>Provide all information that would be required to locate and understand the issue - without having to follow up with you.<br>Make sure your report is readable and understandable. <br>You are not critiquing the page - you are testing it. You can ignore any validation errors generated by 3rd-party libraries (CSS, JS, etc.) like jQuery, tailwind, or what have you. Ignoring or downplaying issues won't make your partner look good, and it won't save your partner any labour.",
            total: 10,
            req: [
                new Qu("Part 1: The URL of the page being tested", .5), new Qu("Part 1: Screenshot or wireframes of the page in its intended state - including desktop, tablet & mobile", .5), new Qu("Part 1: Link URLs", .5), new Qu("Part 1: Copy (i.e. the text content of the page)", .5), new Qu("Part 1: Submitted part 1 to me and your partner after 9am Toronto time, 01/06", -1), new Qu("Part 2: Test for HTML & CSS validation, accessibility, JSHint errors/warnings, Lighthouse recommendations for Performance, Best Practices, & SEO, dev tools security audit issues, responsive layout issues, Form submission (if applicable), Compliance for layout and content provided by your partner", 5), new Qu("Part 2: Provided all information required to locate and understand issues", 2), new Qu("Part 2: Report is readable and understandable", 1), new Qu("Part 2: Submitted part 2 after 9am Toronto time, 08/06", -.5)
            ],
            fb: [
                "Could have had more detail identifying the origins of particular issues."
            ]
        },
        lab5: {
            description: "Follow Github flow to fix accessibility errors in the HTML document.<br>If there are no accessibility errors remaining for you to fix, add some aesthetically pleasing styles to the page via the script tag in the HTML document's head.<br>Create a feature branch.<br>Fix one accessibility issue<br>Commit your changes. Use the command git pull origin main<br>Push your branch to remote<br>Create a pull request, tagging a classmate asking them for a code review.<br>Perform code reviews as requested<br>(remember, don't merge if there are conflicts!)",
            total: 2,
            url: {
                text: "gh classroom",
                url: "https://classroom.github.com/g/6-NeBNP9"
            },
            req: [
                new Qu("Followed branching model", 1.5), new Qu("Successfully fixed an error or added a style", .5), new Qu("Submitted after 11/6", -.25)
            ]
        },
        assn2: {
            description: "Follow Github flow to successfully follow the instructions described in the project README: In your own feature branch, create a new JavaScript module in the public/people-modules/ folder. Your module should export a new instance of the Person class described in public/people-modules/personConstructor.js The instance you export should contain two strings - your name and a custom string of your choosing (nice, SFW strings only please). These strings have constraints described in test/people.test.js. Import your module into public/main.js, and add your module's exported Person to the people array. Load public/index.html in a browser. You should see your module represented in an HTML table. Run the command npm install to install your development dependencies. Run the command npm test to run style lint and unit tests. Fix as required. Pull the main remote branch into your local feature branch. Fix any merge conflicts. Push your local feature branch to a remote feature branch. Create a pull request, and request a code review from a classmate. Respond to feedback, including making fixes as required. Respond to feedback requests from your classmates, and merging when appropriate.",
            total: 12,
            url: {
                text: "gh classroom",
                url: "https://classroom.github.com/g/F-r6Ryc_"
            },
            fb: [
                "Looks like you forgot to add your module to the unit test, though."
            ],
            req: [
                new Qu("created a new module in public/people-modules/", 1.5), new Qu("module exports new instance of Person", 1.5), new Qu("exported instance contains two strings - your name and a custom string, having constraints described in test/people.test.js", 1.5), new Qu("module imported into public/main.js; module's exported Person added to the people array", 1.5), new Qu("style lint fixed", 1.5), new Qu("unit tests fixed", 1.5), new Qu("merge conflicts resolved", 1.5), new Qu("code review passed", 1.5), new Qu("Submitted after 15/6", -1)
            ]
        },
        groupAssn: {
            description: "Using a shared git repository and a branching model, collaborate in groups of 4-5 in order a static HTML website that is made publicly available through a deployment pipeline (i.e. Netlify).<br>Your repository should include a file called 'README.MD' in the root folder of your repository (not your public site) that lists: <ul><li>The people in your group</li><li>The pages each person contributed</li><li>A description of your branching model</li></ul>Your website needs to have 11 pages - <ul><li>one homepage, which lists and links to the other 10 pages,</li><li>plus one page each for each item in the OWASP Top 10 Web Application Security Risks.</li></ul>Each page should have... <ul><li>a title representing the name of the security risk</li><li>the summary of the security risk that OWASP provides</li><li>your team's best \"plain-English\" description of the risk</li></ul>Each individual will be responsible for creating 2 pages, but after they've been created, you can collaborate on the content.<br> Deliverables for this assignment:<ul><li>In blackboard, submit the live URL of the new site you made, along with</li><li>the link to your github repo.</li></ul>",
            total: 15,
            req: [
                new Qu("README file lists the people in your group", 1), new Qu("README file lists the pages each person contributed", 1), new Qu("README file describes your branching model", 1), new Qu("All pages accessible from home page", 2.5), new Qu("Two pages from each group member", 2.5), new Qu("Each page has a title representing the name of the security risk", 2.5), new Qu('Each page provides a "plain English" description that demonstrates some comprehension of the risk', 4.5), new Qu("Submitted after 22/6", -1)
            ],
            fb: [
                "Plain-english could've been a lot more 'plain'"
            ]
        },
        assn3: {
            description: "Go to the terribly insecure site I've set up for us. Document security flaws. A regular text document is fine. For each issue, note: What the issue is, specifically, on this site. How a malicious user could exploit it. How you found it. What OWASP Top Ten category (or categories) it falls into. How to refactor the code or site architecture to remedy the issue. For the purposes of this exercise, there is a code comment in the `index.html` file at line 39 which asks you to pretend that data is being sent to a database. please write up at least 6.",
            fb: [
                "Here's the stuff I know was wrong: edit url to access files, various HTML headers not set, - Content-Security-Policy , - X-Frame-Options , - X-Content-Type-Options , - Referrer-Policy , - Permissions-Policy, bad password requirements, inputs allow XSS easily, client-side validation only, secure information stored in cookie in plain text, displays sensitive info in plain text, displays sensitive data based on URL params, uses easy-to-guess passwords, allows users without permission to see other data.", "Some solutions were not ideal, but solid understanding of the issues.", "Some of your remedies were light on detail, but solid understanding of the issues.", "Some of your remedies were light on detail, or weren't ideal, but solid understanding of the issues for the most part."
            ],
            total: 5,
            req: [
                new Qu("Identified at least 6 issues", 5 / 6), new Qu("Each issue identified as it occurs on this site, specifically", 5 / 6), new Qu("Described how a malicious user could exploit each issue", 5 / 6), new Qu("Described how you found each issue", 5 / 6), new Qu("Identified appropriate OWASP category for each issue", 5 / 6), new Qu("Described how to refactor the code or site architecture to remedy each issue", 5 / 6), new Qu("Submitted after 27/7", -1)
            ]
        },
        lab8: {
            description: "Use an existing Netlify site of yours, or put together a new one (a one-pager is fine, but won't make setting the headers easier or harder - headers apply to the whole site unless you create exceptions). Follow the instructions for creating a custom HTTP header configuration. Pay attention to the note about disabling asset optimization. Make progress by inspecting the headers on your site through the browser devTools, checking and re-checking your grade on securityheaders.com (Mozilla Observatory works, too) and looking at what values you need to set for which headers. When you're ready, on Blackboard, submit both: A link to your repo, and A link to your securityheaders.com report",
            total: 3,
            req: [
                new Qu("A repo with a header configuration file in it that builds a Netlify site", 2.5), new Qu("B+ or better from securityheaders.com", .5), new Qu("Submitted after 16/7", -.5)
            ],
            fb: [
                ".txt is a specific type of plain text format - just because something is a plain text file, does not mean it should be a '.txt' file. If you remove the '.txt' file extension, your headers should work."
            ]
        },
        lab9: {
            description: "Option 1 Work in Codepen. On the page, create two HTML inputs. For the first input, when a user inputs a string, use it to create a keyword cipher. A keyword cipher maps the letters in the alphabet, and maps them onto a rearranged version of the alphabet. The rearrangement works like this: put the letters from the keyword (without duplication) at the beginning, followed by all remaining letters. So, for the keyword 'secretcode', the cipher would look like this: a    b    c    d    e    f    g    h    i    j    k    l    m    n    o    p    q    r    s    t    u    v    w    x    y    z s    e    c    r    t    o    d    a    b    f    g    h    i    j    k    l    m    n    p    q    u    v    w    z    y    z So if you were to encrypt the phrase \"the eagle flies at midnight\" with this cipher, it would read \"qat tsdht ohbtq sq ibrjbdaq\". For the second input, encrypt any letters which the user inputs using the cipher they established through the first input. Output the encrypted string on the page.<br><br>Option 2 Write, in plain English, a security plan that describes a website where users have a username, a password, and have their credit card information stored securely. Include as much detail using what we have learned over the last three weeks about how you would capture, transmit and store this information. Obviously, there are aspects of this that we haven't gone into great detail about. This is just a lab - don't feel like you need to do any outside research for this, just give as much information as you reasonably can based on the last 3 weeks. This should be about 400-500 words.",
            total: 3,
            req: [
                new Qu("Cipher assignment, or", 3), new Qu("Security plan", 3), new Qu("Submitted after 30/7", -.5)
            ],
            fb: [
                "Would've been nice to see more of a focus on the website/UI/user flow, as opposed to describing general security principles."
            ]
        },
        assn4: {
            description: 'Deploy a site via Netlify that is built with a modern build tool (e.g. Vite).This site should be comprised of 4 pages. A landing page, from which all other pages are linked. Three other pages. (May I suggest the page names "quality assurance", "security", and "bad example".)',
            total: 10,
            req: [
                new Qu("Site created with a modern build tool (e.g. Vite)", 3), new Qu("Site version controlled in Github.", 1), new Qu("Site built/deployed via Netlify.", 1), new Qu("Site features a homepage that links to all other pages.", 1), new Qu("Assets are cache-busted.", 1), new Qu("JavaScript ES6 modules are bundled.", 1), new Qu("Sass is compiled.", 1), new Qu("Assets are minified.", 1), new Qu("Submitted after 10/8", -1)
            ],
            fb: [
                "I think you've missed the mark on how to version control a site like this. You should be be version controlling the files you're developing, including all your build tool configuration, not the end-result. In fact, the files you've version controlled here could, in fact be gitignored - since Netlify will build them for you.", "Not a requirement, but if you want to use external libraries (like Bootstrap), you should look into how to include them via npm, or just downloading them and including them with your assets  - they'll benefit from all the bundling and optimization you're running, and you won't get slowed down (or violate security policies) with their external CDN.", "Had to take a couple marks off because only your homepage is being fully built, and leveraging assets bundled and optimized with your build tool. To work with all pages, put them in your root, and use a vite.config.js file. This one by default: https://gist.github.com/simonborer/c5a5c1beba2f64eb9f22ff56b7c8fcf6 Or, if you're using ES6 imports (like with Mocha), this one: https://gist.github.com/simonborer/4ab0b12486703f46df664f22c9647a23"
            ]
        },
        final: {
            description: 'Deploy a site that documents its own security and quality assurance features. Feel free to extend your site from assignment 4. This site should be comprised of 4 pages:<ul><li>A landing page, from which all other pages are linked.</li><li>A "quality assurance" page.</li><li>A "security" page.</li><li>A "bad example" page.</li></ul>The Quality Assurance page should accurately describe all quality assurance measures involved in the production of your site, including, but not limited to:<ul><li>version control,</li><li>your branching model,</li><li>code linting,</li><li>code standards (including their enforcement),</li><li>unit testing,</li><li>end-to-end testing,</li><li>ad hoc testing tools,</li><li>build tools, and</li><li>deployment pipeline.</li></ul>The Quality Assurance page should also include a roadmap for additional QA measures that have not yet, but would ideally be, implemented.<br>The Security page should accurately describe all security measures involved in the production of your site, including, but not limited to:<ul><li>any security-related HTTP headers, their values, and their purpose,</li><li>any encryption of data in transit,</li><li>any security features that are a result of not doing things,</li><li>any security principles pertaining to the production of this site.</li></ul>Your "bad example" page should explain how you\'ve included an example of what not to do for site security. Document this example, and explain why it\'s a bad idea, and how it could be avoided. Your example must not simply be an omitted or poorly formed HTTP header.',
            total: 20,
            req: [
                new Qu("Site version controlled in Github and built/deployed via Netlify, featuring a homepage that links to all other pages.", 3), new Qu("Site created with a modern build tool (e.g. Vite).", 2), new Qu("Quality Assurance page accurately describes QA measures involved with the production of your site.", 2.5), new Qu("QA measures implemented and described include code linting.", 2), new Qu("QA measures implemented and described include unit testing.", 2), new Qu("Security page accurately describes security measures included on your site.", 2.5), new Qu("Security measures implemented and described include custom HTTP headers.", 2), new Qu("Security measures implemented and described include defined security principles.", 2), new Qu("The Bad Example page explains how to both violate and remedy a security practice. ", 1), new Qu("The Bad Example page demonstrates and documents a live example of a bad security practice.", 1), new Qu("Submitted after 17/8", -2)
            ]
        }
    },
    a11y = {
        proposal: {
            total: 20,
            req: [
                new Qu("Properly scoped/Reasonably estimated timeline", 2), new Qu("Objective/Scope/Questions", 4), new Qu("Participants", 2), new Qu("Methods", 4), new Qu("Metrics", 4), new Qu("Would someone be able to run this plan without any further information?", 4 / 3), new Qu("Were the provided requirements captured?", 4 / 3), new Qu("Did you create confidence that this plan would return valuable insights?", 4 / 3)
            ],
            fb: [
                "How are you going to get accurate data about different age groups with a sample size of ~1 person?", "make sure that you draw a clear line between each question (what do you want to know?), each method (how will you know it?), and each metrics (how will you measure it?)", "Your objectives should be represented in your methods", "Your methods should be captured in your metrics, and your metrics should be generated by your methods.", "\"Time on task\" - how will you evaluate this? What's a good time? What's a bad time?", "Do your best to limit the number of different browsers/devices/operating systems used by your group of users. Cross-browser testing is best left to the QA department and can skew your results, introducing variables which will muddy your conclusions.", "What system usability scale will you use? There's no standard SUS.", "Describe the users' technical environment (browser, operating system, etc) so you can account for variables", "Not sure I understand the logic behind your rating system.", "A heuristic is not a method, it's a good idea.", "If this test is unmoderated, will you still be available to help users recover from critical errors?", "So, the big thing here is understanding the purpose of a usability test. You're meant to be testing your assumptions about how users will behave. It's inappropriate to use the time and resources required for this type of testing to test things that are not aspects of user behaviour, like the loading time of the application. Remove anything that is unrelated to user perception or behaviour from the scope of this test.", "Having users from different demographics (age, for example) isn't necessarily a liability, but it's not an asset either. You won't be able to draw meaningful conclusions about demographics from a sample size of 1-2 people.", "A benchmark is for measuring progress. You can't measure progress if you don't have pre-existing data.", "You haven't captured the requirements I provided.", "Remove the Quality Assurance from your Usability testing. Remove from your scope anything that you can objectively test and verify by yourself without going to the trouble of running a bunch of usability tests.", "Do you not have anything that you've built that you could test? Would you consider doing testing for something a classmate has built? Seems like somewhat of a waste of your talents to test something for a private company that you are not connected to."
            ]
        },
        group: {
            total: 25,
            req: [
                new Qu("#1: Visibility of system status // Individual", 1.25), new Qu("#1: Visibility of system status // Group", .75), new Qu("#2: Match between system and the real world // Individual", 1.25), new Qu("#2: Match between system and the real world // Group", .75), new Qu("#3: User control and freedom // Individual", 1.25), new Qu("#3: User control and freedom // Group", .75), new Qu("#4: Consistency and standards // Individual", 1.25), new Qu("#4: Consistency and standards // Group", .75), new Qu("#5: Error prevention // Individual", 1.25), new Qu("#5: Error prevention // Group", .75), new Qu("#6: Recognition rather than recall // Individual", 1.25), new Qu("#6: Recognition rather than recall // Group", .75), new Qu("#7: Flexibility and efficiency of use // Individual", 1.25), new Qu("#7: Flexibility and efficiency of use // Group", .75), new Qu("#8: Aesthetic and minimalist design // Individual", 1.25), new Qu("#8: Aesthetic and minimalist design // Group", .75), new Qu("#9: Help users recognize, diagnose, and recover from errors // Individual", 1.25), new Qu("#9: Help users recognize, diagnose, and recover from errors // Group", .75), new Qu("#10: Help and documentation // Individual", 1.25), new Qu("#10: Help and documentation // Group", .75), new Qu("Readability - individual submission", 1), new Qu("Readability - group submission", 4), new Qu("Late penalty? (☑ = penalty, ☒ = no penalty)", -2.5)
            ],
            fb: [
                "Some conflation of the website with the browser (i.e. CTRL+R is not provided by the website - it would only be notable if the website _prevented_ browser behaviour).", "I feel like you could've gone a little further in not just passively watching for issues, but exploring and predicting issues, or expanding your ideas of where the heuristics might apply.", "In a few instances, I would've expected your group to collectively be able to produce more substantial analysis."
            ]
        },
        reading2: {
            total: 5,
            req: [
                new Qu("Engaged with the material", 3), new Qu("Applied to web work", 2), new Qu("Late penalty? (☑ = penalty, ☒ = no penalty)", -1)
            ],
            fb: [
                "How would it change your workflow if you had a visually impaired teammate who was working collaboratively with you on your code? Beyond just websites, would it change how you code (and comment your code), document, write emails, etc.?"
            ]
        },
        reading3: {
            total: 5,
            req: [
                new Qu("Engaged with the material", 3), new Qu("Applied to web work", 2), new Qu("Late penalty? (☑ = penalty, ☒ = no penalty)", -1)
            ],
            fb: [
                "Could've dug a little deeper (where can we see this effect in action on the web? what opportunities might be missed?), but still good work.", "Meeting some people's needs turns out to meet even more people's wants :)"
            ]
        },
        reading4: {
            total: 5,
            req: [
                new Qu("Engaged with the material", 3), new Qu("Applied to web work", 2), new Qu("Late penalty? (☑ = penalty, ☒ = no penalty)", -1)
            ],
            fb: [
                "Would've liked to hear more of your thoughts about what all this means for our work, but good summary!", "Definitely look into automation (and other forms of testing) and how it can make these things rely less on our memory.", "Glad this helped with some prioritization :)", "Don't forget that accessibility errors aren't necessarily the fault of a particular framework, but the result of the community that builds them and how they're implemented.", "don't forget that web developers only have a certain degree of autonomy when it comes to deciding how something will be coded, and for some aspects of accessibility you need to get other departments (like content and design) on board.", "Asking the right questions."
            ]
        },
        reading5: {
            total: 5,
            req: [
                new Qu("Engaged with the material", 3), new Qu("Applied to web work", 2), new Qu("Late penalty? (☑ = penalty, ☒ = no penalty)", -1)
            ],
            fb: [
                "What does it mean that there are so many people with different needs? How will you balance those concerns if they're in conflict? How will you identify needs that aren't captured in this one particular Twitter thread."
            ]
        },
        reading6: {
            total: 5,
            req: [
                new Qu("Engaged with the material", 3), new Qu("Applied to web work", 2), new Qu("Late penalty? (☑ = penalty, ☒ = no penalty)", -1)
            ],
            fb: [
                "I think we'd all be lucky to have someone put as much effort into communicating with us as Dickson does with his plants."
            ]
        },
        final: {
            total: 25,
            req: [
                new Qu("Presentation: Speaking to the goals", 5 / 4), new Qu("Presentation: Talking about the methods", 5 / 4), new Qu("Presentation: Walking through the results", 2.5), new Qu("Presentation: Strong conclusions", 2.5), new Qu("Presentation: Reasonable recommendations", 2.5), new Qu("Written: Speaking to the goals", 2.5), new Qu("Written: Talking about the methods", 2.5), new Qu("Written: Walking through the results", 5 / 4), new Qu("Written: Strong conclusions", 2.5), new Qu("Written: Reasonable recommendations", 5 / 4), new Qu("Written: Documentation", 5), new Qu("BONUS: Asked some good questions.", 3 / 4)
            ],
            fb: [
                "The maximum presentation time was 5 minutes", "You could've focussed your presentation more on what can be done, and less on the particular details of how you conducted the tests that lead to those conclusions - that's what the report and documentation is for.", "I would've liked to see you make your recommendations more usable - prioritizing, and giving recommendations on implementation including effort and impact.", "Sharing your camera and actually showing the application made your presentation much stronger than a simple slideshow.", "High rates of successful goal completion is usually an indication that the test wasn't calibrated optimally to find improvements."
            ]
        }
    },
    dt = { web: web, db: db, a11y: a11y, qa: qa },
    assnArray = [],
    opt = document.getElementById("options"),
    container = document.getElementById("container"),
    log = document.getElementById("values"),
    affirmation = document.getElementById("affirmation"),
    customFeedback = document.getElementById("customFeedback"),
    rubric = document.getElementById("rubric"),
    feedback = document.getElementById("feedback"),
    feedbackSection = document.getElementById("sampleFeedback");
    feedbackSection.style.display = "none", Object.keys(dt).forEach(e => {
        var t = '<optgroup label="' + e + '">';
        Object.keys(dt[e]).forEach(e => { t += '<option value="' + e + '">' + e + "</option>" }), t += "</optgroup>", assnArray.push(t)
    }), 
    assnArray.forEach(e => { opt.innerHTML += e });

const showGrades = function(e) {
        let t = e.total,
            o = e.fb,
            a = e.req;
        o ? (feedbackSection.style.display = "block", feedback.innerHTML = "", o.forEach(e => { feedback.innerHTML += `<li><button class='fdbk'${e.assoc?` data-assoc='${e.assoc}'`:""}>${e.text?e.text:e}</button></li>` })) : feedbackSection.style.display = "none", e.description && (container.innerHTML += `<details><summary>Description</summary><div class="assn-description">${e.description}</div></details>`), e.url && (container.innerHTML += `<div><a class="assn-link" href="${e.url.url}" target="_blank">${e.url.text}</a></div>`), document.querySelectorAll(".fdbk").forEach(e => { e.addEventListener("click", t => { customFeedback.innerHTML += e.textContent + "<br>" }) });
        var n = function(e, o, n, i = t / a.length) { return `<div id="${e}" class="radio-group">
        <label><input type="radio" name="${e}" value="${i}">☑</label>
        <label><input type="radio" name="${e}" value="${.75*i}">\xbe</label>
        <label><input type="radio" name="${e}" value="${i/2}"">\xbd</label>
        <label><input type="radio" name="${e}" value="${.25*i}">\xbc</label>
        <label><input type="radio" name="${e}" value="0">☒</label>
        &nbsp;<span class="description">${o}</span>
    </div>` };

    a.forEach((e, t) => {
        if ("object" == typeof e) {
            var o, a, i = (o = e.q, a = t, o.substr(0, o.indexOf(" ")) + a);
            e.val ? container.innerHTML += n(i, e.q, e.class ?? "", e.val) : container.innerHTML += n(i, e.q)
        }
    });
    let i = document.querySelectorAll("input");
    for (let r = 0; r < i.length; r++) i[r].addEventListener("input", l);
    var s = [];
    document.querySelectorAll('input[type="radio"]').forEach(e => { s.push(e.getAttribute("name")) });
    var u = [...new Set(s)];

    function l(e) {
        let o = 0;
        rubric.innerHTML = "", u.forEach(e => {
            var t = document.querySelector('input[name="' + e + '"]:checked');
            null !== t && (o += parseFloat(parseFloat(t.value).toFixed(2)))
        }), o = o % 1 == 0 ? Math.round(o) : parseFloat(o.toFixed(2)), affirmation.textContent = o + " / " + t, o >= .98 * t ? affirmation.innerHTML += "<br>Perfect." : o >= .9 * t ? affirmation.innerHTML += "<br>Amazing work!" : o >= .8 * t ? affirmation.innerHTML += "<br>Terrific work!" : o >= .7 * t ? affirmation.innerHTML += "<br>Good work!" : affirmation.innerHTML += "<br>Some good work here.", u.forEach(e => {
            var t = document.querySelector('input[name="' + e + '"]:checked');
            null !== t ? rubric.innerHTML += t.parentElement.textContent + "&nbsp;" + document.getElementById(e).querySelector(".description").textContent + "<br>" : rubric.innerHTML += "<span class='not-yet'>?&nbsp;&nbsp;&nbsp;" + document.getElementById(e).querySelector(".description").textContent + "</span><br>"
        })
    }
    let d = document.getElementById("reset");
    d.addEventListener("click", e => {
        for (var t = document.querySelectorAll("input[type='radio']"), o = 0; o < t.length; o++) t[o].checked = !1;
        affirmation.innerHTML = "", rubric.innerHTML = "", customFeedback.innerHTML = ""
    });
    let h = document.getElementById("reset");
    h.addEventListener("click", e => { localStorage.clear() })
    
    },

    onAssnSelect = function(e) {
        [container, affirmation, customFeedback, rubric].forEach(e => { e.innerHTML = "" });
        let t = e.querySelector("option:checked").parentElement.label;
        showGrades(dt[t][e.value])
    },

    prevVal = localStorage.getItem("val");

    prevVal && (opt.value = prevVal, onAssnSelect(opt)), opt.addEventListener("change", e => {
        let t = e.target.value;
        t && "" !== t && (localStorage.setItem("val", t), onAssnSelect(e.target))
    });