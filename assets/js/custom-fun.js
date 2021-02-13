const tableSkills = document.querySelectorAll('td:not(.cat)');
const highlightClassList = ['cloud', 'server', 'ui', 'scripting', 'testing', 'bigdata', 'cicd']
const highlightClassSelector = '.' + highlightClassList.join(',.')
const highLightElems = document.querySelectorAll(highlightClassSelector);
highLightElems.forEach(el => el.addEventListener('mouseover', event => highlight(event)));
highLightElems.forEach(el => el.addEventListener('mouseout', event => remhighlight(event)));


function highlight(event) {
    let targetClassList = event.target.classList
    let highLightClasses =  highlightClassList.filter(value => targetClassList.contains(value))

    // loop through all skills td elements
    for (i = 0; i < tableSkills.length; i++) {
        let highLightClassesSkills = Array.from(highLightClasses, x => x + '-skill')
        let containsRelevantSkill = (element) => highLightClassesSkills.includes(element)
        // Remove the class 'active' if it exists
        if (!Array.from(tableSkills[i].classList).some(containsRelevantSkill)) {
            tableSkills[i].classList.add('hide-elem')
        }
    }
}

function remhighlight(event) {
    // loop through all skills td elements
    for (i = 0; i < tableSkills.length; i++) {
        // Remove the class 'active' if it exists
        tableSkills[i].classList.remove('hide-elem')
    }
}

