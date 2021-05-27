//Name, Career, descrption
console.log('Name:' + 'connor pilkinton'.toUpperCase());
console.log('Career:' + 'audio engineer'.toUpperCase());
console.log('Description:' + 'wouldnt you like to know'.toUpperCase());


//My Interests
console.log('My Interests:');
displayInterests('* ' + 'Guitar and Music');
displayInterests('* ' + 'Astrophysics');
displayInterests('* ' + 'Hockey,Soccer');
displayInterests('* ' + 'Collecting Vinyl');
displayInterests('* ' + 'A rousing game of kickball');

function displayInterests(myInterest) {
    console.log(myInterest);

};

//My Previous Experience
console.log('My Previous Experience:');
displayPosition('Nome Recording Studios', 'Lead Audio Engineer ', 'Responsible for all of the projects that went through Suite B.');
displayPosition('Blackbird Studios', 'Internship program', 'In charge of studio set up according the the artist as well as assisting in the console suite.');
displayPosition('The Perch', 'Barista/Manager', 'In charge of the day to day operations of a coffe shop.');

function displayPosition(myPreviousExperience) {
    console.log(myPreviousExperience);
};
function displayPosition(companyName, jobTitle, jobDescription) {
    console.log('*  ' + companyName + ', ' + jobTitle + '-' + jobDescription);
};

//My Skillz
console.log('My Skills:');
displaySkill('Playing Guitar', true);
displaySkill('Audio Engineering', true);
displaySkill('Nunchuck Weilding', false);
displaySkill('Rock CLimbing', true);
displaySkill('Constellation Spotting', true);
displaySkill('Cattle Wrangling', false);
displaySkill('Starting Fires', false);

function displaySkill(mySkills) {
    console.log(mySkills)
};

function displaySkill(mySkills, bam) {
    if (bam === true) {
        console.log('* BAM: ' + mySkills);
    } else if (bam === false) {
        console.log('* ' + mySkills);
    };

};







