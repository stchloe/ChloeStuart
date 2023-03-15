$(document).ready(function () {

    // Create array of objects with the properties {index, title, imgsrc, desc}
    // Each object is a slider card

    var sliderCard = [
        {
            index: 1,
            title: "July",
            imgsrc: "images/July16_9.jpg",
            desc: "My first month involved lots of introductions, warm welcomes and getting settled into working life. Myself and the other placement students obtained our DriveWorks Xpress, Solo and Pro Certifications! Being a member of the Tech Team, it was important we developed our DriveWorks knowledge further, and completed aditional training courses on many different concepts, including 3D and Form Design. The Team Manager then tasked us with creating a Scissor Lift configurator using DriveWorks, including user forms and documents to email to the customer."
        },
        {
            index: 2,
            title: "August",
            imgsrc: "images/August16_9.jpg",
            desc: "August began with SOLIDWORKS revision to prepare to take the SOLIDWORKS Professional Certification. The DriveWorks Summer Party was a fantastic way to socialise with people from outside of my team, and play lots of fun games and eat nice food! After completing the Scissor Lift Project, I presented it to a senior Applications Engineer on the Team. I began a course on HTML and CSS to strengthen my coding knowledge. I also became a member of the newly-formed Environmental, Social and Governance (ESG) Committee at DriveWorks. We meet every month and discuss all of the ways we can become a more sustainable, environmental and socially-conscious company."
        },
        {
            index: 3,
            title: "September",
            imgsrc: "images/September16_9.jpg",
            desc: "September kicked off with more SQL training, which included SQL Performance, Driveworks-SQL integration, and preventing SQL injection. In this month's ESG meeting we brainstormed on lots of quick wins, including measuring kettle usage throughout the company and creating a logo. I began a 3D Preview project to get familiar with advanced concepts in 3D, such as lighting, cameras, textures and appearances. The 2nd SOLIDWORKS User group UK Regional event was held at DriveWorks and involved networking with other SOLIDWORKS and DriveWorks users as well as sharing tips and tricks. I also gained my SOLIDWORKS Professional in Mechanical Design as well as my JavaScript Algorithms and Data Structures Certifications!"
        },
        {
            index: 4,
            title: "October",
            imgsrc: "images/October16_9.png",
            desc: "The first two weeks of October were spent on my first Support Stint! This involved supporting our resellers all over the world to help solve customer problems. At the beginning of each day, tech support, senior engineers and developers meet to discuss new cases and come up with solutions to relay to the resellers. I also began the Front End Development Libraries with freecodecamp to further develop my coding skills. This month's ESG meeting involved creating a list of actionable ideas to take to Administration, incuding making more eco-friendly outsourcing decisions, getting coffee and fruits from sustainable sellers, having a dedicated food donation bank and building a bookswap area."
        },
        {
            index: 5,
            title: "November",
            imgsrc: "images/November16_9.png",
            desc: "November kicked off with a Careers Event at a local high school, where I got to chat with students about their aspirations and careers in Tech. This event inspired me to get more involved with social mobility efforts. I became a mentor with Zero Gravity, a platform to connect state school sixth formers and University students to help bridge the gap and make young people more aware of the complete Univsersity experience. Me and my mentee discuss the application process, interviews, societies, financing and many other topics! I also began a new project, to overhaul and revamp an existing Demo on the DriveWorks Live Website, the Entrance Canopy! I started by stripping down the project to the bare minimum and rebuilt the Project using intelligent rules and logic as well as making the forms responsive in the hope of making the Demo more efficient and optimal."
        },
        {
            index: 6,
            title: "December",
            imgsrc: "images/December16_9.jpg",
            desc: "In December, I continued on with my Entrance Canopy project, making great progress with backend details such as 3D and Model Rules. We also had Team Share Day and Office Warming Party which was great fun! I spent a much needed couple of weeks working from home, where I completed a multitude of smaller tasks. This included working with the SOLIDWORKS API and XML documents to create an Advanced Feature Parameter to be built into DriveWorks 21, creating documentation, and learning Microsoft Azure in preparation for testing the Azure PowerPack Plugin for DriveWorks 21. This month I began a course learning the C programming language alongside learning Arduino using the Robotics kits I recieved for Christmas!"
        },
        {
            index: 7,
            title: "January",
            imgsrc: "images/January16_9.jpg",
            desc: "I started January with a few days off and a few days working from home before returning to the office. Preparations began for 3DExperience World and DriveWorks World content. I continued on with my Canopy Project which needed to be finished before the start of 3DExperienceWorld in February. I also started creating tutorial videos for DWW23, the first one being on how to drive Configuration Specific dimensions. In the midst of all of this, myself and two other engineers began testing the DriveWorks PowerPack for Microsoft Azure. With a couple of pushbacks, the PowerPack was ready to release into the wild by the end of Jan! Toward the end of the month, I began my two-week stint on support and took part in a presentation introducing the ESG Committee to the rest of the company."
        },
        {
            index: 8,
            title: "February",
            imgsrc: "images/February16_9.jpg",
            desc: "support stint end, finished project for 3DExperience World, documentation for advanced feature parameter, more DWW Videos, Tech Team Social"
        },
        {
            index: 9,
            title: "March",
            imgsrc: "images/March16_9.jpg",
            desc: "DWW Videos, Pro Certification Testing, QA, Placement tutor visit, Post dev import changes for project, C certification, Front End Libraries certifications"
        }
    ];

    function carouselOutput() {

        // for loop to loop through each object in the array, rendering the appropriate slide to be displayed
        for (var i = 0; i < sliderCard.length; i++) {

            // The variable `outputs` is used to render the HTML elements for each slide.
            var outputs = '<div id="' + sliderCard[i].title + '">' + // The outermost div for rendering which slide to show
                '<div class="singlecard">' +
                '<div class="singlecard-header">' +
                '<img data-lazy="' + sliderCard[i].imgsrc + '">' + // render slider image with lazy loading
                '</div>' +
                '<div class="singlecard-body">' +
                '<div class="singlecard-content">' +
                '<div class="singlecard-title"><strong>' + sliderCard[i].title + '</strong></div>' + // render month for slide
                '<div class="singlecard-text"><p>' + sliderCard[i].desc + '</p></div></div></div></div></div>'; // render paragraph for slider
            $('.slide-sec').append(outputs); // use append method to insert HTML elements to the slide-sec div in index.html
        }
    }
    carouselOutput();

    $('.slide-sec').slick({
        lazyLoad: 'ondemand',
        prevArrow: '<button type="button" class="slick-prev" ><</button>',
        nextArrow: '<button type="button" class="slick-next" >></button>'
    });

    // ammends height of .slick elements to match slides
    $('.slick-slide').css('height', 'auto');
    $('.slick-track').css('height', 'auto');
    $('.slick-list').css('height', 'auto');
});