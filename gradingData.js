class Qu {
    constructor(q, val, cssClass) {
        (this.q = q), (this.val = val), (this.class = cssClass ?? "");
    }
}

var dt = {
    db: {
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
                new Qu("One query that can tell me the names and shifts of the librarians working not this coming Monday, but the Monday following.",0.5),
                new Qu("One query that can tell me Beverly Cleary's assignments for that day.",0.5),
                new Qu("Your tables duplicate data as little as possible.",0.5),
                new Qu("Your tables have no one-to-one relationships that you can't justify.",0.5),
                new Qu("Your tables have no many-to-many relationships that aren't mediated by a bridging table.",0.5),
                new Qu("Your tables have one table for each type of entity (person, place, thing, event).",0.5),
                new Qu("Your tables have one cell for 1 datum (piece of data).",0.5),
                new Qu("Your tables maintain referential integrity with keys.",0.5),
                new Qu("Your tables maintain data integrity with constraints and referential actions.",0.5),
                new Qu("Your tables maintain semantics with data types.",0.5)
            ],
            fb: ["The main area of improvement would be the assignments table. Librarians are permanently associated with an assignment, but instead given different assignments from week to week. You could reduce repetition and better reflect the real world by referencing the assignments in the schedule table.",
            "When selecting for a person, use their id rather than their name, as names change.",
            "I think one could argue that since MySQL provides the DAYNAME() function, including the names of dates is superfluous",
            "There's an argument to be made that assignments are their own entity, and they should be contained in a separate fourth table to meet the requirements for 2NF",
            "I think there should be at least some appropriate referential actions.",
            "1NF says we should break up lists of data - your assignment/role data looks like it could get broken up."]
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
            fb: ["When presenting, the most important thing is to give your audience only the information most relevant to them within the time allotted to you.","Note that the rubric was focussed on the presentation as a progress report, with an emphasis on innovation.", "I did appreciate the nice formatting of your slides.", "Would've liked to hear a little more about the thought process and progress overall."]
        }
    },
    web: {
        lab3: {
            total: 4,
            req: [
                new Qu("a class selector", 0.5),
                new Qu("an id selector", 0.5),
                new Qu("a sibling selector", 0.5),
                new Qu("a child selector", 0.5),
                new Qu("centred text", 0.5),
                new Qu("a hex code", 0.5),
                new Qu("a font-size", 0.5),
                new Qu("one style that gets overridden by another", 0.5)
            ]
        },
        lab4: {
            total: 4,
            req: [
                new Qu(
                    "Create a web page with 6 different sections and a page heading.", 1),
                new Qu(
                    "Near the top of your page, include a menu that links to all 6 sections, plus one external link.", 1),
                new Qu("Section content: A heading for each section.", 1 / 3, "extra"),
                new Qu("Section content: An image.", 1 / 3, "extra"),
                new Qu(
                    "Section content: A paragraph, including text, and at least one anchor tag.",
                    1 / 3,
                    "extra"
                ),
                new Qu(
                    "Using an external stylesheet, give different :hover styles to your navigation links and the links in your page content.", 1)
            ],
            fb: ["Missing external link in menu"]
        },
        assn1: {
            total: 10,
            req: [
                new Qu(
                    "Submit one html file, and one css file, zipped in a folder."),
                new Qu(
                    "Make sure all your HTML and CSS is valid according to the W3C."),
                new Qu("All your HTML must be semantically correct."),
                new Qu("Your CSS must be coded mobile-first."),
                new Qu("include a header image", 0.5, "extra"),
                new Qu(
                    "include a page title with a different font-family than the body font.",
                    0.5,
                    "extra"
                ),
                new Qu("include in-page navigation", 0.5, "extra"),
                new Qu(
                    "include three or more sections of content (with section titles where appropriate).",
                    0.5,
                    "extra"
                ),
                new Qu(
                    "include enough content that the page extends past the bottom of the viewport.",
                    0.5,
                    "extra"
                ),
                new Qu(
                    'include a "back to top" button that remains in the bottom-right of the viewport that returns the user to the top of the page.',
                    0.5,
                    "extra"
                ),
                new Qu(
                    "include at least two images in the page content, at least one floated to the right, and at least one floated to the left.",
                    0.5,
                    "extra"
                ),
                new Qu(
                    "include appropriate padding/margin around elements to make things pleasant to read.",
                    0.5,
                    "extra"
                ),
                new Qu(
                    "include a different colour scheme on desktop and mobile.",
                    0.5,
                    "extra"
                ),
                new Qu(
                    "include one word in the body content, not contained in a link, that changes style when hovered over.",
                    0.5,
                    "extra"
                ),
                new Qu("Add a bit of personal style.")
            ]
        },
        lab6: {
            total: 4,
            req: [
                new Qu("Code should be semantic and validate.", 3 / 5),
                new Qu(
                    "On larger screens, the content of the page should not take up the full width of the viewport, but instead occupy a centred column.",
                    3 / 5
                ),
                new Qu(
                    "Interactive elements (such as buttons and/or links) should give the user custom feedback when the state changes, using pseudoclass selectors.",
                    3 / 5
                ),
                new Qu(
                    "Content should include a distinct header, footer and main, with images and text.",
                    3 / 5
                ),
                new Qu(
                    'At least one section should have multiple columns that at side-by-each on desktop and "stacked" into a single column on mobile.',
                    3 / 5
                ),
                new Qu(
                    "The page should have some style, such as a consistent color palette (you can generate one if you like).",
                    1 / 5
                ),
                new Qu("Load Normalize via CDN.", 1 / 5),
                new Qu("Images should be loaded from a local folder.", 1 / 5),
                new Qu(
                    "In at least one instance, the flex order should change based on a media query.",
                    1 / 5
                ),
                new Qu(
                    "Paragraph text should not exceed 60 characters in width.",
                    1 / 5
                )
            ]
        },
        lab7: {
            total: 4,
            req: [
                new Qu("Choose a website you enjoy using."),
                new Qu("In writing, define two possible user types for this website, and their different goals while using the website."),
                new Qu("Describe the individual steps (clicks, navigation, form fields, etc.) that they would have to take to achieve (one of) their goals."),
                new Qu("Does anything occur to you that could make things easier for them, that is achievable by the website's team? What is it? Or, if you can't think of anything, what designs or features are already in place that make those goals easy to achieve?")
            ]
        },
        lab8: {
            total: 4,
            req: [
                new Qu("Put together the copy deck & image assets for a simple three page website."),
                new Qu("The copy deck should not only include the literal text of your pages, but also note what content will be headings, what content will be linked, and any other UI elements that may be on your page."),
                new Qu("These pages will need to link to one another, so you can get to any of the other two pages from any of the three pages."),
                new Qu("On at least one page, give your content a good reason to have a JPEG image.", 1 / 3),
                new Qu("On at least one page, give your content a good reason to have a PNG image.", 1 / 3),
                new Qu("On at least one page, give your content a good reason to have a background image.", 1 / 3)
            ],
            fb: []
        },
        lab10: {
            total: 4,
            req: [new Qu("A homepage, an \"About\" page, and a \"Contact\" page, all accessible from every other page (i.e. in the menu).", 4 / 3), new Qu("Relevant content on each of the pages. Simple is fine.", 4 / 3), new Qu("No lorem ipsum or default images.", 4 / 3)]
        },
        assn2: {
            total: 20,
            req: [
                new Qu("Post 1", 2),
                new Qu("Post 2", 2),
                new Qu("Post 3", 2),
                new Qu("Post 4", 2),
                new Qu("Post 5", 2),
                new Qu("SyntaxHighlighter Code block", 2),
                new Qu("Custom HTML block to render your own code.", 2),
                new Qu("Custom HTML block to embed one example of your work from codePen.", 2),
                new Qu("A screenshot of a webpage you coded.", 2),
                new Qu("The Quote block, featuring a quote from the notes, and a link not only to the page, but the page section where the quote appears.", 2)
            ],
            fb: ["Loved reading your posts.", "The main thing with this assignment was to put your writing in separate portfolio posts"]
        },
        finalPt1: {
            total: 8,
            req: [
                new Qu("Delivered on time",4),
                new Qu("Basic accessibility stuff: for example, do all the images have appropriate alternative text?", 0.5),
                new Qu("Basic automated audit stuff: are there performance metrics in Lighthouse that could be improved?", 0.5),
                new Qu("Basic responsive stuff: does anything break on mobile? Tablet? At a specific breakpoint?", 0.5),
                new Qu("Basic colour stuff: is there a coherent colour scheme? Are there any \"oddball\" colours?", 0.5),
                new Qu("Basic design pattern stuff: are things where you expect them to be? Are there useful things that are missing? (Remember your design conventions).", 0.5),
                new Qu("Basic quality assurance stuff: do all the buttons and links do something/link to somewhere? Is there any content - either text or images - that doesn't belong?", 0.5),
                new Qu("Basic optimization stuff: are there images that could be resized or compressed? Are there images or video in the wrong format?", 0.5),
                new Qu("Aesthetic feedback. Okay, this one's tricky: make sure any aesthetic feedback is not negative and is not vague. Give actionable suggestions for things you might prefer.", 0.5)
            ],
            fb: ["Leaving a section blank doesn't tell your partner that things are okay, it just makes them wonder if any testing was done. Telling someone what tests they passed is as important as telling them what needs improvement.", "Seems like there may be a little confusion about the meaning of different feedback categories.", "feedback was supposed to be done per page", "little information is given about how you know things are okay, which may undermine your partner's confidence in your conclusions", "As discussed in class, Lighthouse is not a replacement for manual accessibility testing", "if you'd delivered this as feedback per page, rather than as a whole, it would create more confidence that all aspects had been tested. Knowing what has passed inspection is nearly as important as knowing what failed.", "As mentioned, the emphasis is on actionable feedback - anyone can run a lighthouse audit in a few seconds, but knowing what can be improved and how to improve it is where you give your partner real help.", "I'd suggest working on your spreadsheet formatting (providing feedback per page can help your partner a great deal while they're going through and fixing stuff)."]
        },
        finalPt2: {
            total: 12,
            req: [
                new Qu("Did you make changes on your website based on the peer review?"),
                new Qu("Was your presentation well-prepared?")
            ],
            fb: ["Nice work! Presentation could've used a bit more structure, but good overall.", "Nice work! Perhaps a little more detail into your process, progress and choices would've been nice, but solid overall."]
        }
    }
};

export {dt};