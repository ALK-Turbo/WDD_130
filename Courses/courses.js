// courses.js
const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    catalogYear: "2022",
    sections: [{ sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T' },
    { sectionNum: 2, roomNum: 'STC 347', enrolled: 28, days: 'TTh', instructor: 'Sis A' }
    ],
    findSection: function (toFind) {
        return this.sections.find(function (item) {
            return section.sectionNum = toFind;
        })
    },
    enrollStudent: function (sectionNum) {
        // find the right secitons in this.sections
        const theSection = this.findSection(sectionNum);

        // add one to the enrollment
        theSection.enrolled++;
    },
};


aCourse.sections.find(function (item) {
    aCourse.findSection(item, 1);
})


function setCourseName(course) {

    document.querySelector('#courseName').textContent = course.name;
    document.querySelector('#courseCode').textContent = course.Code;
}

function sectionTemplate(section) {
    return `<tr><td> ${section.sectionNum}</td>
                <td> ${section.roomNum}</td>
                <td> ${section.enrolled}</td>
                <td> ${section.days}</td>
                <td> ${section.instructor}</td>
            </tr>                
    `
}

function renderSections(sections) {
    const sectionsElement = document.querySelector('#sections');
    const sectionHtml = sections.map(sectionTemplate);
    sectionsElement.innerHTML = sectionHtml.join('');
}

setCourseName(aCourse);
renderSections(aCourse.sections);


document
    .querySelector('#enrollStudent')
    .addEventListener('click', funtion(e){
        const sectionNum = document.querySelector('#sectionNumber').value;
        aCourse.enrollStudent(sectionNum);
    });

