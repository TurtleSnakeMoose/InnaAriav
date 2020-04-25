var ip = ip || {};
ip.content = ip.content || {};

ip.content.loadTextualContent = function () { 

    // get elements
    let about_me_txtContainer = $('#txtContent_aboutMe'),
        saidAboutMe_quote1 = $('#quote_1'),
        saidAboutMe_quote2 = $('#quote_2'),
        saidAboutMe_quote3 = $('#quote_3'),
        steps_step1 = $('#step_1'),
        steps_step2 = $('#step_2'),
        steps_step3 = $('#step_3'),
        lecture_info = $('#lecture_info'),
        links_link_1 = $('#link_1'),
        links_link_2 = $('#link_2'),
        links_link_3 = $('#link_3');
    
    // load "about me" text
    about_me_txtContainer.load("../assets/text_content/about_me.txt");
    
    // load "said about me" quotes
    saidAboutMe_quote1.load("../assets/text_content/aboutMe_q1.txt");
    saidAboutMe_quote2.load("../assets/text_content/aboutMe_q2.txt");
    saidAboutMe_quote3.load("../assets/text_content/aboutMe_q3.txt");
    
    // load 3 steps text
    steps_step1.load("../assets/text_content/steps_step1.txt");
    steps_step2.load("../assets/text_content/steps_step2.txt");
    steps_step3.load("../assets/text_content/steps_step3.txt");
    
    // load lecture info text
    lecture_info.load("../assets/text_content/lecture_info.txt");
    
    // load profile links text AND URLs.
    links_link_1.load("../assets/text_content/link_1.txt");
    links_link_2.load("../assets/text_content/link_2.txt");
    links_link_3.load("../assets/text_content/link_3.txt");
}	


