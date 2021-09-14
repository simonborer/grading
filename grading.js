import { qa } from './data/qa.js';

const dt = { qualityAssurance: qa };

const assnArray = [];

const opt = document.getElementById('options');

const container = document.getElementById("container"),
    log = document.getElementById("values"),
    affirmation = document.getElementById("affirmation"),
    customFeedback = document.getElementById("customFeedback"),
    rubric = document.getElementById("rubric"),
    feedback = document.getElementById("feedback"),
    feedbackSection = document.getElementById("sampleFeedback");

feedbackSection.style.display = 'none';

// Split up assignments in the dropdown by subject
Object.keys(dt).forEach(d => {
    var optGroup = '<optgroup label="' + d + '">'
    Object.keys(dt[d]).forEach(k => {
        optGroup += '<option value="' + k + '">' + k + '</option>';
    });
    optGroup += '</optgroup>';
    assnArray.push(optGroup);
});

assnArray.forEach(asn => {
    opt.innerHTML += asn;
});

const showGrades = function(assn) {
    const total = assn.total;
    const standardFeedback = assn.fb;
    const requirements = assn.req;


    if (!standardFeedback) {
    	feedbackSection.style.display = 'none';
    } else {
    	feedbackSection.style.display = 'block';
        feedback.innerHTML = "";
	    standardFeedback.forEach((f) => {
	        feedback.innerHTML += "<li><button class='fdbk'>" + f + "</button></li>";
	    });
    }

    if (assn.description) {
        container.innerHTML += `<details><summary>Description</summary><div class="assn-description">${assn.description}</div></details>`;
    }

    if (assn.url) {
        container.innerHTML += `<div><a class="assn-link" href="${assn.url.url}" target="_blank">${assn.url.text}</a></div>`;
    }

    document.querySelectorAll(".fdbk").forEach((elem) => {
        elem.addEventListener("click", (e) => {
            customFeedback.innerHTML += elem.textContent + "<br>";
        });
    });

    var group = function(
        name,
        req,
        divClass,
        baseVal = total / requirements.length
    ) {
        var halfVal = baseVal / 2;
        var str =
            '<div id="' +
            name +
            '" class="radio-group ' +
            divClass +
            '"><label><input type="radio" name="' +
            name +
            '" value="' +
            baseVal +
            '">☑</label><label><input type="radio" name="' +
            name +
            '" value="' +
            halfVal +
            '">½</label><label><input type="radio" name="' +
            name +
            '" value="0">☒</label>&nbsp;<span class="description">' +
            req +
            "</span></div>";
        return str;
    };

    var nme = function(str, ind) {
        return str.substr(0, str.indexOf(" ")) + ind;
    };

    requirements.forEach((req, index) => {
        if (typeof req === "object") {
            var nm = nme(req.q, index);
            if (req.val) {
                container.innerHTML += group(nm, req.q, req.class ?? "", req.val);
            } else {
                container.innerHTML += group(nm, req.q);
            }
        }
    });

    const input = document.querySelectorAll("input");

    for (let i = 0; i < input.length; i++) {
        input[i].addEventListener("input", updateValue);
    }
    var radioGroupsArr = [];
    var radio = document.querySelectorAll('input[type="radio"]');
    radio.forEach((rad) => {
        radioGroupsArr.push(rad.getAttribute("name"));
    });
    var radioGroups = [...new Set(radioGroupsArr)];

    function updateValue(e) {
        let runningTotal = 0;
        rubric.innerHTML = "";
        radioGroups.forEach((rad) => {
            var targ = document.querySelector('input[name="' + rad + '"]:checked');
            if (targ !== null) {
                runningTotal += parseFloat(parseFloat(targ.value).toFixed(2));
            }
        });

        if (runningTotal % 1 === 0) {
        	runningTotal = Math.round(runningTotal);
        } else {
        	runningTotal = parseFloat(runningTotal.toFixed(2))
        }

        affirmation.textContent = runningTotal + " / " + total;
        if (runningTotal >= total * 0.98) {
            affirmation.innerHTML += "<br>Perfect.";
        } else if (runningTotal >= total * 0.9) {
            affirmation.innerHTML += "<br>Amazing work!";
        } else if (runningTotal >= total * 0.8) {
            affirmation.innerHTML += "<br>Terrific work!";
        } else if (runningTotal >= total * 0.7) {
            affirmation.innerHTML += "<br>Good work!";
        } else {
            affirmation.innerHTML += "<br>Some good work here.";
        }

        radioGroups.forEach((rad) => {
            var targ = document.querySelector('input[name="' + rad + '"]:checked');
            if (targ !== null) {
                rubric.innerHTML +=
                    targ.parentElement.textContent +
                    "&nbsp;" +
                    document.getElementById(rad).querySelector(".description").textContent +
                    "<br>";
            } else {
                rubric.innerHTML +=
                    "<span class='not-yet'>?&nbsp;&nbsp;&nbsp;" +
                    document.getElementById(rad).querySelector(".description").textContent +
                    "</span><br>";
            }
        });
    }

    const button = document.getElementById("reset");

    button.addEventListener("click", (event) => {
        var ele = document.querySelectorAll("input[type='radio']");
        for (var i = 0; i < ele.length; i++) {
            ele[i].checked = false;
        }
        affirmation.innerHTML = "";
        rubric.innerHTML = "";
        customFeedback.innerHTML = "";
    });



    // const copyButton = document.getElementById("copy");

    // const copyFunc = function(){
    //   var copyText = document.querySelector("#textOutput").textContent;

    // // var r = document.createRange();
    // // r.selectNode(copyText);
    // // window.getSelection().addRange(r);
    // //   document.execCommand("copy");

    // navigator.clipboard.writeText(copyText).then(function() {
    //   console.log('Async: Copying to clipboard was successful!');
    // }, function(err) {
    //   console.error('Async: Could not copy text: ', err);
    // });
    // };

    // copyButton.addEventListener("click", (e) => {
    //   copyFunc()
    // })
};


const onAssnSelect = function(selector) {
    [container, affirmation, customFeedback, rubric].forEach(elem => {
        elem.innerHTML = "";
    });
    const group = selector.querySelector('option:checked').parentElement.label;
	showGrades(dt[group][selector.value]);
};

const prevVal = localStorage.getItem('val');

// TODO if prevVal isn't a valid option, catch error
if (prevVal) {
	opt.value = prevVal;
	onAssnSelect(opt);
}

opt.addEventListener('change', (event) => {
	const value = event.target.value;
	if (value && value !== "") {
		localStorage.setItem('val', value);
		onAssnSelect(event.target);
	}
});