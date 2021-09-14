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
            "Attribute values (i.e. the url in an anchor tag's `href` attribute) need to be quoted with \"double quotes\".",
            "Make sure all your tags are closed.",
            "Review the meaning of numbers in heading tags (h1, h2, etc.). It's not the order that they come in, but the level of the heading (i.e. section, subsection, etc.).",
            "HTML tags should be written in lowercase.",
            "Make sure all your tags are paired up properly, and closed in the right order.",
            "The `ul` tag is for a whole list, and the `li` tag is for each item within that list. One ul, many li's. (I notice you got this right the second time!)",
            "You're missing a few things:",
            "- a link (an 'anchor' tag),",
            "- a second kind of heading (i.e. h2)",
            "- a list (ul & li elements)",
            "don't use empty elements - elements are there to describe content, and if there's no content, there's no point in describing it.",
            "If you're not clear on these, please let me know."
        ]
    },
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
};

export { web };