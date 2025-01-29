// Get Date
let currentYear = document.querySelector("#current-year");
let dateLastModif = document.querySelector("#last-modified");
const currentDate = new Date();
let oLastModif = new Date(document.lastModified);
const getLastModYear = oLastModif.getFullYear();
const getLastModMonth = oLastModif.getMonth() + 1;
const getLastModDate = oLastModif.getDate();
const getLastModHour = oLastModif.getHours();
const getLastModMinute = oLastModif.getMinutes();
const getLastModSecond = oLastModif.getSeconds();

currentYear.innerHTML = `<span>${currentDate.getFullYear()}</span>`;
dateLastModif.innerHTML = `<span>Last Modified: ${getLastModDate}/${getLastModMonth}/${getLastModYear} ${getLastModHour}:${getLastModMinute}:${getLastModSecond}</span>`

// Responsiveness
const navItems = document.querySelector(".nav-bar");
const hamburger = document.querySelector(".hamburger");
const homePage = document.querySelector(".home-page");
const courseDetails = document.querySelector("#course-details");

courseDetails.addEventListener("click", (event) => {
    const rect = courseDetails.getBoundingClientRect();
    console.log(event);
    if (
        event.clientX < rect.left ||
        event.clientX > rect.right ||
        event.clientY < rect.top ||
        event.clientY > rect.bottom
    ) {
        courseDetails.close();
    }
});

hamburger.addEventListener("click", () => {
    navItems.classList.toggle("show");
    hamburger.classList.toggle("show");
    homePage.classList.toggle("show");
});

const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

const courseList = document.querySelector(".course-list");
let displayTotal = document.createElement("div");
displayTotal.setAttribute("class", "total-credits");

function createButtons() {
    const buttons = document.createElement("div");
    buttons.setAttribute("class", "buttons")

    const cse = document.createElement("button");
    const wdd = document.createElement("button");
    const all = document.createElement("button");

    buttons.append(cse);
    buttons.append(wdd);
    buttons.append(all);

    cse.textContent = "CSE"
    wdd.textContent = "WDD"
    all.textContent = "All";

    cse.setAttribute("class", "cse");
    wdd.setAttribute("class", "wdd");
    all.setAttribute("class", "all");

    courseList.append(buttons);

    cse.addEventListener("click", () => {
        const cseCourses = courses.filter(course => {
            return course.subject === "CSE";
        });
        document.querySelectorAll(".course-banner").forEach(banner => banner.remove());
        createCourse(cseCourses);
        totalCredits(cseCourses);
    });

    wdd.addEventListener("click", () => {
        const wddCourses = courses.filter(course => {
            return course.subject === "WDD";
        });
        document.querySelectorAll(".course-banner").forEach(banner => banner.remove());
        createCourse(wddCourses);
        totalCredits(wddCourses);
    });

    all.addEventListener("click", () => {
        document.querySelectorAll(".course-banner").forEach(banner => banner.remove());
        createCourse(courses);
        totalCredits(courses);
    });

}

function totalCredits (courses) {
    const totalValue = courses.reduce((acc, course) => {
        return acc + course.credits;
    }, 0);

    displayTotal.textContent = `Total Credits: ${totalValue}`;
    courseList.append(displayTotal);
}


function createCourse(filteredCourses) {
    filteredCourses.forEach(course => {
        let courseBanner = document.createElement("div");
        courseBanner.setAttribute("class", "course-banner");
        if (course.completed) {
            courseBanner.classList.add("style-completed");
        }
        let courseName = document.createElement("h3");

        courseName.textContent = `${course.subject} ${course.number}: ${course.title}`;

        courseBanner.append(courseName);
        courseList.append(courseBanner);
    });
    displayModal();
    return filteredCourses
}


function displayModal() {
    const courseListItems = document.querySelectorAll(".course-banner");
    const close = document.createElement("button");
    close.textContent = "Close";
    close.classList.add("close-button");

    if (!courseDetails.querySelector(".close-button")) {
        courseDetails.appendChild(close);
    }


    courseListItems.forEach(courseListItem => {
        courseListItem.addEventListener("click", () => {
            courseDetails.showModal();
        })
    });

    close.addEventListener("click", ()=> {
        courseDetails.close();
    });

}


createButtons();

createCourse(courses);

totalCredits(courses);

// displayModal();
