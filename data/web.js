import { Qu } from './qu.js';

const web = {
    lab1: {
        total: 8,
        req: [
            new Qu("Send me a codepen link, containing..."),
            new Qu("...a write-up about what you learned, using..."),
            new Qu("2 different kinds of headings,"),
            new Qu("3 paragraphs,"),
            new Qu("one link,"),
            new Qu("bolded text,"),
            new Qu("italic text, and"),
            new Qu("one list.")
        ],
        fb: ["Just one thing - ", "A little feedback...",
            "attribute values (i.e. the url in an anchor tag's `href` attribute) need to be quoted with \"double quotes\".",
            "make sure all your tags are closed.",
            "review the meaning of numbers in heading tags (h1, h2, etc.). It's not the order that they come in, but the level of the heading (i.e. section, subsection, etc.).",
            "HTML tags should be written in lowercase.",
            "I see you've got some familiarity with an older version of HTML. Make sure you're using HTML5 elements like we learn in class.",
            "make sure all your tags are paired up properly, and closed in the right order.",
            "the `ul` tag is for a whole list, and the `li` tag is for each item within that list. One ul (list), many li's (list items).",
            "You're missing a few things:",
            "- a link (an 'anchor' tag),",
            "- a second kind of heading (i.e. h2)",
            "- a list (ul & li elements)",
            "don't use empty elements - elements are there to describe content, and if there's no content, there's no point in describing it.",
            "If you're not clear on these, please let me know."
        ]
    },
    lab2: {
        total: 8,
        req: [
            new Qu("Create a document with extension '.html'"),
            new Qu("Add a doctype declaration"),
            new Qu("Add an html element (with the required attribute!)"),
            new Qu("Inside your html element, add a head element, and a body element."),
            new Qu("Inside your head element, add a title and the charset."),
            new Qu("Inside your body element, add a header, main, and footer."),
            new Qu("Inside the header, add the document's title. What's a good element for that?"),
            new Qu("Also inside the header, add an image that might work as your 'hero' image. Don't worry about copyright attribution for now. Just make sure to add appropriate alternative text."),
            new Qu("Inside your main, create a table called 'favourites'. Put some of your favourite things in the table. Make sure to give your columns the appropriate headings. Throw an inline element in there while you're at it."),
            new Qu("Inside the foot, put the copyright symbol, the current year, and your name."),
        ],
        fb: ["Just one thing - ", "A little feedback...",
            "attribute values (i.e. the url in an anchor tag's `href` attribute) need to be quoted with \"double quotes\".",
            "make sure all your tags are closed.",
            "review the meaning of numbers in heading tags (h1, h2, etc.). It's not the order that they come in, but the level of the heading (i.e. section, subsection, etc.).",
            "HTML tags should be written in lowercase.",
            "I see you've got some familiarity with an older version of HTML. Make sure you're using HTML5 elements like we learn in class.",
            "make sure all your tags are paired up properly, and closed in the right order.",
            "The head and the header are very different things. Make sure you know which one's which.",
            "You've got kind of a mish-mash of a table and list going. They can't really be combined.",
            "caption goes inside the table.",
            "You're missing a few things:",
            "If you're not clear on these, please let me know."
        ]
    },
    lab3: {
        total: 8,
        req: [
            new Qu("a class selector"),
            new Qu("an id selector"),
            new Qu("a sibling selector"),
            new Qu("a child selector"),
            new Qu("centred text"),
            new Qu("a hex code"),
            new Qu("a font-size"),
            new Qu("one style that gets overridden by another")
        ],
        fb: ["Good work! It's clear you've got the core concepts down. You've missed some of the requirements, but you're making good progress! Feel free to let me know if there's anything in particular you'd like help getting a handle on.", "Make sure your curly braces are closed properly.", "Have another look at how sibling selectors work: https://webintro2021.ca/posts/the-3rd-week/#groupingSelectors", "As I mentioned in class, when you write HTML in CodePen, it has already created the document for you, and you are writing inside a 'body' element."]
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
                "extra"),
            new Qu(
                "Using an external stylesheet, give different :hover styles to your navigation links and the links in your page content.", 1)
        ],
        fb: ["Missing external link in menu"]
    },
    assn1: {
        total: 10,
        req: [
            new Qu("Submit one html file, and one css file, zipped in a folder.",1),
            new Qu("Make sure all your HTML and CSS is valid according to the W3C.",1),
            new Qu("All your HTML must be semantically correct.",1),
            new Qu("Your CSS must be coded mobile-first.",1),
            new Qu("include a header image", 0.5, "extra"),
            new Qu("include a page title with a different font-family than the body font.", 0.5, "extra"),
            new Qu("include in-page navigation", 0.5, "extra"),
            new Qu("include three or more sections of content (with section titles where appropriate).",0.5,"extra"),
            new Qu("include enough content that the page extends past the bottom of the viewport.",0.5,"extra"),
            new Qu('include a "back to top" button that remains in the bottom-right of the viewport that returns the user to the top of the page.',0.5,"extra"),
            new Qu("include at least two images in the page content, at least one floated to the right, and at least one floated to the left.",0.5,"extra"),
            new Qu("include appropriate padding/margin around elements to make things pleasant to read.",0.5,"extra"),
            new Qu("include a different colour scheme on desktop and mobile.",0.5,"extra"),
            new Qu("include one word in the body content, not contained in a link, that changes style when hovered over.",0.5,"extra"),
            new Qu("Add a bit of personal style.",1)
        ],
        fb: ["A few issues that I think could've been resolved if you validated your HTML & CSS."]
    },
    lab6: {
        total: 4,
        req: [
            new Qu("Code should be semantic and validate.", 3 / 5),
            new Qu("On larger screens, the content of the page should not take up the full width of the viewport, but instead occupy a centred column.",
                3 / 5
            ),
            new Qu("Interactive elements (such as buttons and/or links) should give the user custom feedback when the state changes, using pseudoclass selectors.",
                3 / 5
            ),
            new Qu("Content should include a distinct header, footer and main, with images and text.",
                3 / 5
            ),
            new Qu(
                'At least one section should have multiple columns that at side-by-each on desktop and "stacked" into a single column on mobile.',
                3 / 5
            ),
            new Qu("The page should have some style, such as a consistent color palette (you can generate one if you like).",
                1 / 5
            ),
            new Qu("Load Normalize via CDN.", 1 / 5),
            new Qu("Images should be loaded from a local folder.", 1 / 5),
            new Qu("In at least one instance, the flex order should change based on a media query.",
                1 / 5
            ),
            new Qu("Paragraph text should not exceed 60 characters in width.",
                1 / 5
            )
        ],
        fb: []
    },
    lab7: {
        total: 4,
        req: [
            new Qu("Choose a website you enjoy using."),
            new Qu("In writing, define two possible user types for this website, and their different goals while using the website."),
            new Qu("Describe the individual steps (clicks, navigation, form fields, etc.) that they would have to take to achieve (one of) their goals."),
            new Qu("Does anything occur to you that could make things easier for them, that is achievable by the website's team? What is it? Or, if you can't think of anything, what designs or features are already in place that make those goals easy to achieve?")
        ],
        fb: []
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
    lab9: {
        total: 8,
        req: [
            new Qu("You submitted a url that leads to your website", 5),
            new Qu("Your website has 3 pages I can find easily", 2),
            new Qu("Your website has a good reason to have a PNG, a JPEG, and a background image.", 1),
            new Qu("Late marks deducted? (☒ = No, no marks were deducted; ☑ = Yes, late marks were taken off)", -0.5)
        ],
        fb: ["Your site isn't there? I'm giving you a few marks on the assumption that, since you have a customized URL, you probably did make a site, but I can't see it. Re-submit with your github repo and I can tell you how to fix and up your grade."]
    },
    lab10: {
        total: 4,
        req: [new Qu("A homepage, an \"About\" page, and a \"Contact\" page, all accessible from every other page (i.e. in the menu).", 4 / 3), new Qu("Relevant content on each of the pages. Simple is fine.", 4 / 3), new Qu("No lorem ipsum or default images.", 4 / 3)],
        fb: []
    },
    assn2: {
        total: 20,
        req: [
            new Qu("Post 1", 3),
            new Qu("Post 2", 3),
            new Qu("Post 3", 3),
            new Qu("Post 4", 3),
            new Qu("Post 5", 3),
            new Qu("SyntaxHighlighter Code block",1.25),
            new Qu("Custom HTML block to render your own code, or to embed one example of your work from codePen.", 1.25),
            new Qu("A screenshot of a webpage you coded.", 1.25),
            new Qu("The Quote block, featuring a quote from the notes, and a link not only to the page, but the page section where the quote appears.", 1.25),
            new Qu("Late marks deducted? (☒ = No, no marks were deducted; ☑ = Yes, late marks were taken off)", -2)
        ],
        fb: ["Loved reading your posts.", "The main thing with this assignment was to put your writing in separate portfolio posts"]
    },
    finalPt1: {
        total: 8,
        req: [
            new Qu("Delivered on time", 4),
            new Qu("Basic accessibility stuff: for example, do all the images have appropriate alternative text?", 0.5),
            new Qu("Basic automated audit stuff: are there performance metrics in Lighthouse that could be improved?", 0.5),
            new Qu("Basic responsive stuff: does anything break on mobile? Tablet? At a specific breakpoint?", 0.5),
            new Qu("Basic colour stuff: is there a coherent colour scheme? Are there any \"oddball\" colours?", 0.5),
            new Qu("Basic design pattern stuff: are things where you expect them to be? Are there useful things that are missing? (Remember your design conventions).", 0.5),
            new Qu("Basic quality assurance stuff: do all the buttons and links do something/link to somewhere? Is there any content - either text or images - that doesn't belong?", 0.5),
            new Qu("Basic optimization stuff: are there images that could be resized or compressed? Are there images or video in the wrong format?", 0.5),
            new Qu("Aesthetic feedback. Okay, this one's tricky: make sure any aesthetic feedback is not negative and is not vague. Give actionable suggestions for things you might prefer.", 0.5)
        ],
        fb: ["Optimization =/= appearance","Leaving a section blank doesn't tell your partner that things are okay, it just makes them wonder if any testing was done. Telling someone what tests they passed is as important as telling them what needs improvement.", "Seems like there may be a little confusion about the meaning of different feedback categories.", "feedback was supposed to be done per page", "little information is given about how you know things are okay, which may undermine your partner's confidence in your conclusions", "As discussed in class, Lighthouse is not a replacement for manual accessibility testing", "if you'd delivered this as feedback per page, rather than as a whole, it would create more confidence that all aspects had been tested. Knowing what has passed inspection is nearly as important as knowing what failed.", "As mentioned, the emphasis is on actionable feedback - anyone can run a lighthouse audit in a few seconds, but knowing what can be improved and how to improve it is where you give your partner real help.", "I'd suggest working on your spreadsheet formatting (providing feedback per page can help your partner a great deal while they're going through and fixing stuff)."]
    },
    finalPt2: {
        total: 12,
        req: [
            new Qu("Did you make changes on your website based on the peer review?"),
            new Qu("Was your presentation well-prepared?")
        ],
        fb: ["Nice work! Presentation could've used a bit more structure, but good overall.", "Nice work! Perhaps a little more detail into your process, progress and choices would've been nice, but solid overall."]
    }
};

export { web };