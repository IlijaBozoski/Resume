// Function to create the SkillSpaceFlex section
function createSkillSpaceFlex() {
    // Create a section element
    var section = document.createElement('section');
    section.className = 'SkillSpaceFlex';

    // Array of loading bar IDs
    var loadingBarIds = [
        'loadingBarSkill1',
        'loadingBarSkill2',
        'loadingBarSkill3',
        'loadingBarSkill4',
        'loadingBarSkill5',
        'loadingBarSkill6',
        'loadingBarSkill7'
    ];

    // Loop through the loading bar IDs to create the loading bars
    for (var i = 0; i < loadingBarIds.length; i++) {
        var loadingBarFather = document.createElement('div');
        loadingBarFather.className = 'loading-bar-father';

        var loadingBar = document.createElement('div');
        loadingBar.className = 'loading-bar';
        loadingBar.id = loadingBarIds[i];

        loadingBarFather.appendChild(loadingBar);
        section.appendChild(loadingBarFather);
    }

    // Append the section to the body or any other container element
    document.body.appendChild(section);
}

// Call the function to create the SkillSpaceFlex section
createSkillSpaceFlex();
