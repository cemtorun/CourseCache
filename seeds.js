var mongoose = require("mongoose");
var brownCourse = require("./models/brown");
var westernCourse = require("./models/western");

western = [
	{
		title: "ACTURSCI 1021B - INTRO TO FINANCIAL SECURE SYS",
		description: "The nature and cause of financial security and insecurity; public, private and employer programs and products to reduce financial insecurity, including social security, individual insurance and annuities along with employee pensions and benefits.",
		prereq: "",
		times: "",
		associations: ""
	},
	{
		title: "ACTURSCI 2053 - MATH FOR FINANCIAL ANALYSIS",
		description: "Simple and compound interest, annuities, amortization, sinking funds, bonds, bond duration, depreciation, capital budgeting, probability, mortality tables, life annuities, life insurance, net premiums and expenses.",
		prereq: "",
		times: "",
		associations: ""
	},
	{
		title: "CALCULUS 2503B - ADVANCED CALCULUS II",
		description: "Integral calculus of functions of several variables: multiple integrals; Leibnitz' rule; arc length; surface area; Green's theorem; independence of path; simply connected and multiply connected domains; three dimensional theory and applications; divergence theorem; Stokes' theorem.",
		prereq: "",
		times: "",
		associations: ""
	},
	{
		title: "BUSINESS 1220E - INTRODUCTION TO BUSINESS",
		description: "Business Administration 1220E, offered by the Ivey Business School, gives students from all faculties the opportunity to learn business fundamentals in finance, marketing, operations, organizational behavior and general management. The course is delivered using Ivey's renowned case method, which challenges students to learn by doing, within an active class environment of no more than 85 students. Students explore real business issues, make management decisions, defend their position, and take action. This course will be particularly appealing to those students who want a glimpse of Ivey's unique learning experience."
	}
]

brown = [
  {
    title: "AFRI 0090: An Introduction to Africana Studies",
    description:"This course introduces students to the vibrant and contested field of Africana Studies by critically exploring and analyzing the links and disjunctures in the cultural, political, and intellectual practices and experiences of people of African descent throughout the African diaspora. Beginning with a critical overview of the history, theoretical orientations, and multiple methodological strategies of the discipline, the course is divided into three thematic units that examine intellectuals, politics, and movements; identity construction and formation; and literary, cultural, and aesthetic theories and practices in the African diaspora. WRIT",
    prereq:"None",
    times:"TTh 1pm-2:20pm in CIT Center (Thomas Watson CIT) 165",
    associations:"Africa"
  },
  {
    title: "AFRI 0110C: Autobiography of the Civil Rights Movement",
    description:"Most of the rich written history of the civil rights movement originates from first-hand accounts documented in oral histories and autobiographies. This interdisciplinary course plots the milestones of the civil rights movement through the lens of several autobiographies. The aim is to critique autobiography as a historical document as well as use it to tell the stories of the civil rights movement. We will compare and contrast different texts, analyze content and map a history of the era. Students will work with a writing fellow to develop one critical paper and one autobiographical paper. Enrollment limited to 19 first year students. WRIT",
    prereq:"Instructor override required",
    times:"M 3pm-5:30pm in Sayles Hall 300",
    associations:""
  },
  {
    title: "AFRI 0210: Afro Latin Americans and Blackness in the Americas",
    description:"This course focuses on the position of Blacks in the national histories and societies of Latin America from slavery to the present-day. Emphasis is on a multidisciplinary engagement with issues and the exposure of students to the critical discussion of national images and realities about blackness and Africa-descended institutions and practices. The role of racial issues in national and transnational encounters and the consequences of migration of people and ideas within the hemisphere are explored.",
    prereq:"None",
    times:"TTh 2:30pm-3:50pm in Churchill House 206",
    associations:"Africa"
  },
  {
    title: "AFRI 0980: Fela Kuti: African Freedom from Afrobeat to Afrobeats",
    description:"Miles Davis famously described Fela Kuti (1938-1997) as “the future of music.” Beyoncé’s attempt “to do something that sounds like Fela” saw her compose an unpublished 20-track album. Arguably Africa’s most prolific and controversial artist of the twentieth century, Fela continues to be invoked as musical genius and as icon of popular struggle. This course invites students to explore the complexities of Fela’s art and activism. We mobilize his life/work as a springboard for examining emergent debates about African identity—from postcolonial masculinity to the creative logics of African cities, from contemporary African youth culture to the gendered politics of cultural memory.",
    prereq:"None",
    times:"TTh 2:30pm-3:50pm in Churchill House 106",
    associations:""
  },
  {
    title: "AFRI 1020D: Race, Rights and Rebellion",
    description:"Provides an in-depth examination of different kinds of social movements. Emphasis will be placed on the theoretical and methodological distinctions among the various kinds of social protests and social movement actors. From anti-slavery revolts to struggles for independence to anti-apartheid movements, key concepts will include power, resistance, subaltern, hegemony, identity politics and consciousness. WRIT",
    prereq:"None",
    times:"TTh 9am-10:20am in Churchill House 106",
    associations:""
  },
  {
    title: "AFRI 1060U: An Introduction to Africa",
    description:"Africa invokes myriad images in the global imagination. It figures in debates on the evolution of humans; in the formation of capitalism, and even as a counterpoint to discourses on human progress. This course interrogates how “Africa” gets mobilized in popular discourse in the US and beyond. How might we reconcile the idea of Africa with contemporary conditions of the African continent? We will not only examine Africa through a broad range of disciplinary perspectives; but also become familiar with social, cultural, political and economic diversity of the African continent. We will engage the disciplines of history, economics, politics, cultural studies and gender studies among others.",
    prereq:"None",
    times:"M 3pm-5:30pm in Churchill House 106",
    associations:""
  },
  {
    title: "AFRI 1110: Voices Beneath the Veil",
    description:"VBV is an interdisciplinary exploration of African-American history and cultures through the analyses of Black authored plays from 1858 to the present. The course focuses on the development of a thesis paper, which includes an incremental re-writing process. WRIT",
    prereq:"None",
    times:"TTh 10:30am-11:50am in Churchill House 106",
    associations:""
  },
  {
    title: "AFRI 1190: Haiti: A New World, A Free World",
    description:"Course examines the dual Haitian Revolution as a pivotal moment in the making of the modern world. It reviews the various historical interpretations of Haitian events, examines how these events contribute to or troubles our ideas about modern politics and notions of freedom as well as our conceptions of revolution. Course engages in these issues by working through three archives: Vodou Religion; The Art of the Revolution and the conventional historiography about the revolution, and will be tied to a joint Brown/RISD exhibition on Haitian Art. Enrollment limited to 15 juniors/seniors concentrating in Africana Studies, Visual Art, History; 15 RISD students.",
    prereq:"None",
    times:"Th 4pm-6:30pm in Page-Robinson Hall 202",
    associations:""
  },
  {
    title: "AFRI 1920: Health Inequality in Historical Perspective",
    description:"Seminar takes a historical perspective to explore causes of health inequality in the US. Draws on studies from the 19th century-present. Examines socio–political and economic context of health/disease, focusing on how race, class, and gender shape the experience of health, disease causality, and public health responses. Includes health consequences of immigration, incarceration, race-based medicine, the Chicago heatwave, and Katrina. Enrollment restricted to 20, second and third-year students.",
    prereq:"None",
    times:"W 3pm-5:30pm in Page-Robinson Hall 302",
    associations:""
  },
  {
    title: "AMST 1220: Boatbuilding: Design, Making, and Culture",
    description:"This course introduces the study of the design, work, material culture and history through the construction of a traditional workboat, a Maine peapod. As the class builds the boat we’ll gain a hands-on understanding of issues of design, skill, and workmanship. At the same time, we’ll do historical research and visit museums to gain insight into the history of small craft and their builders and users from the nineteenth century to the present, and also consider philosophical issues of tradition, creativity, and knowledge in engineering and making. Weekly writing assignments, including a journal, will connect hands-on work and research.",
    prereq:"None",
    times:"WF 10am-12pm",
    associations:"random boats boat"
  },
  {
    title: "AMST 1901B: Form Matters: Contemporary Short Fiction",
    description:"Form Matters is an advanced seminar in reading contemporary short fiction, mainly centered on US writers. The class particularly focuses on socially-attuned and historically-minded neo-formalist analyses of literature. Fiction readings will be supplemented with relevant critical readings from both scholars and practicing writers. Students will be expected to engage in rigorous discussion of the material. Goals of the course include introducing you to a relevant critical vocabulary for discussing form, deepening your familiarity with contemporary US short fiction, and improving your oral and written communication skills.",
    prereq:"None",
    times:"TTh 1pm-2:20pm in Sayles Hall 200",
    associations:""
  },
  {
    title: "AMST 1903I: Museum Histories",
    description:"Museums collect and display art and artifacts not only to preserve culture heritage, but also to educate, engage, and entertain. This course examines the history of museums– of art, history, anthropology, natural history, science and technology– to understand their changing goals and their changing place in American society. It also considers the changes within museums, in the work of curation, conservation, education, and social engagement. Students will read museum history and theory, engage with museum archives and other primary sources, and produce a research paper or a digital or public project.",
    prereq:"None",
    times:"TTh 10:30am-11:50am in 357 Benefit St - Nightingale 212",
    associations:""
  },
  {
    title: "ANTH 0066D: Who Owns the Past?",
    description:"Examines the role of the past in the present. Using examples from the U.S. and other parts of the world, we will look at how archaeological evidence is implicated in contemporary cultural and political issues. Students will learn that the past is not just the focus of archaeologists’ interest and scientific inquiries, but is also a subject romanticized by antiquarians, mobilized in nation-building, marketed for profit, re-enacted as entertainment, consumed by tourists, and glorified in commemoration. Understanding these different and competing valuations, claims, and uses of the archaeological past will provide an introduction to why the past matters in the present and to the future. Enrollment limited to 19 first year students.",
    prereq:"None",
    times:"W 3pm-5:30pm in Rockefeller Library 205",
    associations:""
  },
  {
    title: "ANTH 0300: Culture and Health",
    description:"An introduction to the field of Medical Anthropology. Lecture reading and discussion will examine the social context of health and illness, looking at the diverse ways in which humans use cultural resources to cope with disease and develop medical systems. The course will provide an introduction to the overall theoretical frameworks that guide anthropological approaches to studying human health related behavior. Medical anthropology offers a unique and revealing perspective on the cultural diversity that characterizes human experiences of sexuality, disease, aging, mental illness, disability, inequality and death. WRIT",
    prereq:"None",
    times:"MWF 11am-11:50am in 85 Waterman Street 130",
    associations:""
  },
  {
    title: "ANTH 0310: Human Evolution",
    description:"Examination of theory and evidence on human evolution in the past, present and future. Topics include evolution and adaptation, biocultural adaptation, fossil evidence, behavioral evolution in primates, human genetic variation and contemporary human biological variation.",
    prereq:"None",
    times:"MWF 10am-10:50am in List Art Center 110",
    associations:"random"
  },
  {
    title: "ANTH 1125: Indigenous Archaeologies",
    description:"This is an intro. to Indigenous archaeology, sometimes defined as archaeology by, for and with Indigenous peoples. These approaches combine the study of the past with contemporary social justice concerns. However, they are more than this. In addition to seeking to make archaeology more inclusive of and responsible to Indigenous peoples, they seek to contribute a more accurate understanding of archaeological record. They thus do not reject science, but attempt to broaden it through a consideration of Indigenous epistemologies. This course covers topics as the history of anthropological archaeology, Indigenous knowledge and science, decolonizing methodologies, representational practices and NAGPRA.",
    prereq:"None",
    times:"TTh 10:30am-11:50am in 101 Thayer Street (VGQ 1st fl) 116E",
    associations:""
  },
  {
    title: "ANTH 1553: Energy and Power",
    description:"This course explores how physical energy infrastructures configure social and political power across human societies. It enables students to understand contemporary energy challenges not simply as a matter of scarce or unsustainable material resources but also as a matter of socioeconomic inequality, geopolitical instability, structural racism and sexism, indigenous sovereignty, and other social issues. In introducing students to the complex operations of coal, oil, solar, wind, gas, and other energy resources, this course offers a conceptual framework for making sense of the intersecting material and social dynamics of political power, and for navigating today's greatest resource challenges.",
    prereq:"None",
    times:"M 3pm-5:30pm in Rockefeller Library 205",
    associations:""
  },
  {
    title: "APMA 0330: Methods of Applied Mathematics I, II",
    description:"This course will cover mathematical techniques involving ordinary differential equations used in the analysis of physical, biological, and economic phenomena. The course emphasizes established methods and their applications rather than rigorous foundation. Topics include: first and second order differential equations, an introduction to numerical methods, series solutions, and Laplace transformations.",
    prereq:"MATH 0100, 0170, 0180, 0190, 0200, 0350, minimum score of 4 in 'AP Calculus BC', minimum score of 5 in 'AP Calculus BC' or minimum score of WAIVE in 'Graduate Student PreReq'.",
    times:"MWF 12pm-12:50pm in Friedman Hall 102",
    associations:"math"
  },
  {
    title: "APMA 0340: Methods of Applied Mathematics I, II",
    description:"Mathematical techniques involving differential equations used in the analysis of physical, biological and economic phenomena. Emphasis on the use of established methods, rather than rigorous foundations. I: First and second order differential equations. II: Applications of linear algebra to systems of equations; numerical methods; nonlinear problems and stability; introduction to partial differential equations; introduction to statistics.",
    prereq:"MATH 0100, 0170, 0180, 0190, 0200, 0350, minimum score of 4 in 'AP Calculus BC', minimum score of 5 in 'AP Calculus BC' or minimum score of WAIVE in 'Graduate Student PreReq'.",
    times:"MWF 12pm-12:50pm in Barus & Holley 158",
    associations:"math"
  },
  {
    title: "APMA 0350: Applied Ordinary Differential Equations",
    description:"This course provides a comprehensive introduction to ordinary differential equations and their applications. During the course, we will see how applied mathematicians use ordinary differential equations to solve practical applications, from understanding the underlying problem, creating a differential-equations model, solving the model using analytical, numerical, or qualitative methods, and interpreting the findings in terms of the original problem. We will also learn about the underlying rigorous theoretical foundations of differential equations. Format: lectures and problem-solving workshops.",
    prereq:"MATH 0100, MATH 0170, MATH 0180, MATH 0190, MATH 0200, MATH 0350 or advanced placement. MATH 0520 (can be taken concurrently).",
    times:"MWF 2pm-2:50pm in Barus & Holley 168",
    associations:"math"
  },
  {
    title: "APMA 0360: Applied Partial Differential Equations I",
    description:"This course builds on APMA 0350 which covers ordinary differential equations and systems involving a single independent variable. We will look at processes with two or more independent variables formulated as partial differential equations (PDE) using concepts from multivariable calculus. We will see how problems are described quantitatively as PDEs, how seemingly unrelated contexts can result in similar equations; and develop methods for solution using analytical, numerical or qualitative methods. Contexts include first order equations; the second order wave equation and problems involving diffusion processes; steady state balances for systems in two or three dimensions; together with insights from theory.",
    prereq:"(MATH 0180, 0200 or 0350) and APMA 0350 or minimum score of WAIVE in 'Graduate Student PreReq'.",
    times:"MWF 1pm-1:50pm in Kassar House FOX",
    associations:"math"
  },
  {
    title: "APMA 1170: Introduction to Computational Linear Algebra",
    description:"Focuses on fundamental algorithms in computational linear algebra with relevance to all science concentrators. Basic linear algebra and matrix decompositions (Cholesky, LU, QR, etc.), round-off errors and numerical analysis of errors and convergence. Iterative methods and conjugate gradient techniques. Computation of eigenvalues and eigenvectors, and an introduction to least squares methods.",
    prereq:"None",
    times:"MWF 10am-10:50am in CIT Center (Thomas Watson CIT) 165",
    associations:""
  },
  {
    title: "APMA 1080: Inference in Genomics and Molecular Biology",
    description:"Massive quantities of fundamental biological and geological sequence data have emerged. Goal of APMA1080 is to enable students to construct and apply probabilistic models to draw inferences from sequence data on problems novel to them. Statistical topics: Bayesian inferences; estimation; hypothesis testing and false discovery rates; statistical decision theory; change point algorithm; hidden Markov models; Kalman filters; and significances in high dimensions. Prerequisites: One of following APMA1650, APMA1655, MATH1610, CSCI1450; and one of the following AMPA0160, CSCI0040, CSCI0150, CSCI0170, CSCI0190, CLPS0950, waver for students with substantial computing experience and their acceptance of responsibility for their own computing.",
    prereq:"APMA 1650, 1655, MATH 1610, CSCI 1450, 0450 or minimum score of WAIVE in 'Graduate Student PreReq'.",
    times:"MW 3pm-4:20pm in Barus & Holley 155",
    associations:"math biology"
  },
  {
    title: "APMA 1650: Statistical Inference I",
    description:"APMA 1650 is an integrated first course in mathematical statistics. The first half of APMA 1650 covers probability and the last half is statistics, integrated with its probabilistic foundation. Specific topics include probability spaces, discrete and continuous random variables, methods for parameter estimation, confidence intervals, and hypothesis testing.",
    prereq:"MATH 0100, 0170, 0180, 0190, 0200, 0350, minimum score of 4 in 'AP Calculus BC', minimum score of 5 in 'AP Calculus BC' or minimum score of WAIVE in 'Graduate Student PreReq'.",
    times:"TTh 2:30pm-3:50pm in MacMillan Hall 117",
    associations:"math"
  },
  {
    title: "APMA 1655: Statistical Inference I",
    description:"Students may opt to enroll in 1655 for more in depth coverage of APMA 1650. Enrollment in 1655 will include an optional recitation section and required additional individual work. Applied Math concentrators are encouraged to take 1655.",
    prereq:"MATH 0100, 0170, 0180, 0190, 0200, or 0350.",
    times:"TTh 2:30pm-3:50pm in Smith-Buonanno Hall 106",
    associations:""
  },
  {
    title: "APMA 1710: Information Theory",
    description:"Information theory is the study of the fundamental limits of information transmission and storage. This course, intended primarily for advanced undergraduates and beginning graduate students, offers a broad introduction to information theory and its applications: Entropy and information, lossless data compression, communication in the presence of noise, channel capacity, channel coding, source-channel separation, lossy data compression. Prerequisite: one course in probability.",
    prereq:"None",
    times:"MWF 9am-9:50am in Salomon Center 003",
    associations:"math"
  },
  {
    title: "APMA 1930T: Waves",
    description:"The seminar will discuss a diverse sample of wave phenomena encountered in physics, biology and other aspects of common experience, which are modeled through differential equations, and will demonstrate how the marvelous mathematics emerging from the study of these equations contribute to our understanding of the underlying phenomena. Students are expected to have some familiarity with the theory of partial differential equations, at the level of APMA 0360.",
    prereq:"None",
    times:"MWF 11am-11:50am in Barus & Holley 163",
    associations:"math"
  },
  {
    title: "ARAB 0100: First-Year Arabic",
    description:"Builds basic listening, speaking, reading, and writing skills, introducing the Arabic language in its cultural environment. Five contact hours per week, with an emphasis on grammar and communication, plus written, audio, and video assignments outside of class. This is the first half of a year-long course whose first semester grade is normally a temporary one. Neither semester may be elected independently without special written permission. The final grade at the end of the course work in ARAB 0200 covers the entire year and is recorded as the final grade for both semesters. If course is full, please sign the wait list in Room 205, 195 Angell Street. Enrollment limited to 18.",
    prereq:"None",
    times:"Multiple sections - check cab.brown.edu",
    associations:""
  },
  {
    title: "ARAB 0300: Second-Year Arabic",
    description:"Develops listening, speaking, reading and writing skills at the intermediate level of language proficiency through extensive use of various texts and multimedia. Promotes better understanding of Arabic cultural traditions. Five contact hours weekly, plus written, audio, and video assignments outside of class. Prerequisite: ARAB 0200. This is the first half of a year-long course. Neither semester may be elected independently without special written permission. The final grade at the end of the course work in ARAB 0400 covers the entire year and is recorded as the final grade for both semesters.",
    prereq:"ARAB 0100 and 0200 or minimum score of WAIVE in 'Graduate Student PreReq'.",
    times:"Multiple sections - check cab.brown.edu",
    associations:""
  },
  {
    title: "ARAB 0500: Third-Year Arabic",
    description:"Offers comprehensive training in listening, speaking, reading, and writing, with grammar review as needed. Broadens students' perspective of Arabic culture using selections from the classical and modern traditions of Arabic writing and various art forms. Four contact hours weekly. Prerequisite: ARAB 0400.",
    prereq:"ARAB 0400 or minimum score of WAIVE in 'Graduate Student PreReq'.",
    times:"Multiple sections - check cab.brown.edu",
    associations:""
  },
  {
    title: "ARCH 0420: Archaeologies of the Greek Past",
    description:"The Onion once reported that ancient Greek civilization was a complete modern fraud, since obviously no one culture could have invented so much, not least all that Great Art and Architecture. But they did. This course will explore the material world of ancient Greece, from the monumental (the Parthenon) to the mundane (waste management), and everything in between. Enrollment limited to 50. WRIT",
    prereq:"None",
    times:"MWF 11am-11:50am",
    associations:"random"
  },
  {
    title: "ARCH 0440: Archaeologies of the Ancient Middle East",
    description:"What were Neanderthals really like? Why stop hunting and start farming? This course will explore these and other questions through an examination of the earliest archaeologies of the Middle East. Topics will include the evidence for the first hominids and humans in the region, the nature of hunter-gatherer existence, the origins of cultivation and pastoralism, and the rise of social inequality.",
    prereq:"None",
    times:"TTh 10:30am-11:50am",
    associations:""
  },
  {
    title: "ARCH 0530: Hannibal ad Portas! Fact and Fiction on Carthage and the Punic World",
    description:"'Hannibal stands at the gates': Roman parents would terrify their children with these words. And many others have been haunted by Hannibal Barca: the Carthaginian general still fascinates the European imagination, not least his epic trek over the Alps with three dozen elephants. This course explores fact and fiction about Hannibal and his world, holding up historical and mythical records against hard archaeological evidence. Enrollment limited to 50.",
    prereq:"None",
    times:"MWF 12pm-12:50pm in Rhode Island Hall 108",
    associations:""
  },
  {
    title: "ARCH 0770: Archaeology of Eating and Drinking",
    description:"Everybody eats -- but patterns of eating and drinking vary dramatically from culture to culture. This course will examine the social roles and meanings of eating and drinking from prehistory to the present, using case studies from the Mediterranean and other parts of the world. How are identity, gender, and power negotiated through food and drink? What are the roles of the body, the senses, and memory? What does a history of humanity look like from the point of view of the consuming body? WRIT",
    prereq:"None",
    times:"TTh 9am-10:20am in Rhode Island Hall 008",
    associations:""
  },
  {
    title: "ARCH 1870: Environmental Archaeology",
    description:"From Neanderthals on the brink of extinction to the smog of the Industrial Revolution, humans have been impacted by the environment for millions of years. How has climate change affected the development of human society? How have people adapted to their environments in the past? What does sustainability mean over the long term? Environmental archaeology is the study of these questions through the use of scientific techniques to analyze soils, plants, artifacts, and human and animal remains from ancient archaeological contexts. These methods will be introduced with an eye toward how they allow us to interpret human-environmental interactions in the past, as well as the present and future.",
    prereq:"None",
    times:"TTh 1pm-2:20pm in Rhode Island Hall 108",
    associations:""
  },
  {
    title: "ARCH 1900: The Archaeology of College Hill",
    description:"A hands-on training class in archaeological field and laboratory techniques. Topics include the nature of field archaeology, excavation and survey methodologies, archaeological ethics, computer technologies (such as GIS), and site and artifact analysis and conservation. Students will act as practicing archaeologists (i.e., actually dig and analyze the results!) through the investigation of local historical and archaeological sites in the College Hill area (e.g. the First Baptist Church of America and Brown University's Quiet Green).",
    prereq:"None",
    times:"W 3pm-5:30pm",
    associations:"random"
  },
  {
    title: "ASYR 1600: Astronomy Before the Telescope",
    description:"This course provides an introduction to the history of astronomy from ancient times down to the invention of the telescope, focusing on the development of astronomy in Babylon, Greece, China, the medieval Islamic world, and Europe. The course will cover topics such as the invention of the zodiac, cosmological models, early astronomical instruments, and the development of astronomical theories. We will also explore the reasons people practiced astronomy in the past. No prior knowledge of astronomy is necessary for this course.",
    prereq:"None",
    times:"TTh 10:30am-11:50am in Salomon Center 003",
    associations:""
  },
  {
    title: "BIOL 0030: Principles of Nutrition",
    description:"Introduces the basic principles of human nutrition, and the application of these principles to the specific needs of humans, and the role of nutrition in chronic diseases. Provides an overview of the nutrients and their use by the human body. Also examines the role of nutrients in specific functions and disease states of the body. Not for biology concentration credit. Enrollment limited to 100.",
    prereq:"None",
    times:"TTh 9am-10:20am in Bio Med Center 202",
    associations:"biology"
  },
  {
    title: "BIOL 0170: Biotechnology in Medicine",
    description:"Introduces undergraduates to the main technological advances currently dominating the practice of medicine. Provides an overview of the objectives, techniques, and problems related to the application of biomedical technology to the diagnosis and treatment of disease and the contemporary health care industry. Topics include: pharmaceutical development and formulation; organ replacement by prosthesis and transplantation; medical imaging; tissue engineering, therapeutic cloning, regenerative medicine; stem cells; societal, economic, and ethical issues. This course does carry Biology concentration credit.",
    prereq:"None",
    times:"MWF 1pm-1:50pm in 85 Waterman Street 130",
    associations:"biology"
  },
  {
    title: "BIOL 0210: Diversity of Life",
    description:"This course will explore biological diversity – the number of taxa, and the functions, and processes that support life – from the perspectives of ecology and evolutionary biology. It will draw on examples and case studies from the geological record, functional morphology, the evolution of organ systems in vertebrates, genomics, behavior and sexual selection in birds and invertebrates. Overarching themes will emphasize that taxonomic diversity is an emergent property of complex life on Earth, and the importance of diversity of biological functions and processes in generating and maintaining taxonomic diversity. The course is open to all students.",
    prereq:"None",
    times:"MWF 11am-11:50am in MacMillan Hall 117",
    associations:"random biology"
  },
  {
    title: "BIOL 0380: The Ecology and Evolution of Infectious Disease",
    description:"Infectious diseases remain among the leading causes of death worldwide, and this burden is disproportionately borne by children living in low- and middle-income countries. Thus management of infectious disease remains a critical intellectual challenge in the 21st century. This course will develop and apply ecological and evolutionary theory to infectious microbes (and their hosts) via the detailed examination of a number of case studies. This will be accomplished by a combination of lectures, discussions, and readings drawn mainly from the primary literature. Assessment will be based on biweekly problem sets, two midterms and one final exam.",
    prereq:"BIOL 0200 or equivalent.",
    times:"MWF 10am-10:50am in Bio Med Center 291",
    associations:"biology"
  },
  {
    title: "BIOL 0470: Genetics",
    description:"Genetic phenomena at the molecular, cellular, organismal, and population levels. Topics include transmission of genes and chromosomes, mutation, structure and regulation of the expression of the genetic material, elements of genetic engineering, and evolutionary genetics. One laboratory session and one discussion session per week. (Students should not plan to take BIOL 0470 after 1540.) ",
    prereq:"BIOL 0200 (or equivalent placement).",
    times:"TTh 10:30am-11:50am",
    associations:"biology"
  },
  {
    title: "BIOL 0480: Evolutionary Biology",
    description:"A broad introduction to the patterns and processes of evolution at diverse levels of biological organization. Topics covered include natural selection, adaptation, speciation, systematics, macroevolution, mass extinction events, and human evolution. Weekly discussion sections involve debates on original research papers. Occasional problem sets involve computer exercises with population genetics and phylogeny reconstruction.",
    prereq:"BIOL 0200 (or equivalent placement).",
    times:"MWF 9:00am-9:50am",
    associations:""
  },
  {
    title: "BIOL 0530: Principles of Immunology",
    description:"Introduction to experimental and theoretical foundations of immunology. Focuses on concepts, landmark experiments and recent advances. Topics include innate and adaptive immunity; structure/function of antibody molecules and T cell receptors; regulation of immune responses through cellular interactions. Applications of concepts to medically significant issues (vaccines, transplantation, inflammation, autoimmunity, cancer, HIV/AIDS) are discussed. Interpretative analysis of experimental data is emphasized.",
    prereq:"BIOL 0200 or equivalent placement credit.",
    times:"TTh 2:30pm-3:50pm in 85 Waterman Street 130",
    associations:"biology"
  },
  {
    title: "BIOL 0800: Principles of Physiology",
    description:"Introduction to the function and integration of organ systems with an emphasis on human physiology. Includes basic concepts in cell and organ system physiology as well as fundamentals of modern trends in physiological science. Emphasizes the application of physical and chemical principles to organ function at both the cellular and systemic levels.",
    prereq:"BIOL 0200 or equivalent.",
    times:"TTh 10:30am-11:50am",
    associations:"biology"
  },
  {
    title: "BIOL 1430: Population Genetics",
    description:"Population genetics considers the genetic basis of evolution: temporal changes in the genetic composition of populations in response to processes such as mutation, natural selection and random sampling effects. Starting from first principles, this course will develop a theoretical understanding of these dynamics. We will also explore the application of these tools to genomic-scale data in order to quantify the influence of various evolutionary processes at work in natural populations. Assessments will be based on problem sets, two midterm exams and one final exam.",
    prereq:"(MATH 0100, 0170, 0190, minimum score of 4 in 'AP Calculus BC' or minimum score of 5 in 'IB HL Mathematics') and (BIOL 0470 or 0480) or minimum score of WAIVE in 'Graduate Student PreReq'.",
    times:"MWF 11am-11:50am in Smith-Buonanno Hall 201",
    associations:"biology"
  },
  {
    title: "BIOL 1520: Innate Immunity",
    description:"Innate immunity is the initial response to microbes that prevents infection of the host. It acts within minutes to hours, allowing the development of the adaptive response in vertebrates. It is the sole mechanism of defense in invertebrates such as insects. The components and mechanisms dictating this response are explored. ",
    prereq:"BIOL 0530 or minimum score of WAIVE in 'Graduate Student PreReq'.",
    times:"MW 8:30am-9:50am in Bio Med Center 291",
    associations:"biology"
  },
  {
    title: "CHEM 0100: Introductory Chemistry",
    description:"Explores stoichiometry, atomic and molecular structure, chemical bonding, solutions, gases, chemical reactions, equilibria, thermochemistry. Three hours of lecture, one conference per week, no laboratory section. S/NC.",
    prereq:"None",
    times:"TTh 9:00am-10:20am",
    associations:"chemistry"
  },
  {
    title: "CHEM 0330: Equilibrium, Rate, and Structure",
    description:"Explores the electronic structure of atoms and molecules, thermodynamics, solution equilibrium, electrochemistry, chemical kinetics, and reaction mechanisms. Course includes lecture and laboratory sections. Laboratory cannot be taken without the lecture. Students who previously passed 0330 lab may be excused from repeating the lab portion of the course.",
    prereq:"CHEM 0100 or AP Chemistry 4 or CHEM Placement Test 8 or IBC Chemistry.",
    times:"Multiple sections - check cab.brown.edu",
    associations:""
  },
  {
    title: "CHEM 0360: Organic Chemistry",
    description:"Sequel to CHEM 0350. Investigates the constitution and properties of organic compounds at a fundamental level with an introduction to physical organic, bioorganic, and synthetic organic chemistry. Laboratory work is concerned with the identification and characterization of organic compounds, including modern instrumental methods. Three hours of lecture and five hours of prelaboratory and laboratory.",
    prereq:"CHEM 0350.",
    times:"MWF 9:00am-9:50am",
    associations:""
  },
  {
    title: "CHEM 0999: Chemistry and Art",
    description:"Chemistry and Art is an interdisciplinary course that explores different chemical concepts and techniques through the lenses of art and art history. The topics covered include paint and painting, stained glass; pottery and porcelains; gemstones and jewelry; color and art conservation. Drawing from early artistic texts, we will take a historically informed approach, connecting medieval stained-glass techniques, early pigmentation sourcing, and Qin dynasty pottery work to modern chemical explanations. Throughout the course, lectures, discussions, hands-on activities, and writing are totally integrated and the chemistry principles and techniques behind art objects and art-making are introduced through a series of case studies. Students are asked to request overrides through Courses@Brown. Overrides will be granted after the first day of the class. WRIT",
    prereq:"Instructor override required",
    times:"W 3pm-5:30pm in Geo-Chemistry Building 351",
    associations:"random"
  },
  {
    title: "CHEM 1240: Biochemistry",
    description:"Examines the chemical, mechanistic, and structural basis for enzymatic catalysis. Uses examples from the recent literature to examine how the experimental and conceptual tools of chemical synthesis, isotopic labeling, stereochemistry, enzymology, kinetics, and protein structure can be brought to bear to unravel the chemical and physical principles underlying the enormous catalytic acceleration and exquisite structural specificity of enzyme-catalyzed reactions.",
    prereq:"BIOL 0280 and CHEM 0360 or minimum score of WAIVE in 'Graduate Student PreReq'.",
    times:"TTh 9am-10:20am",
    associations:"biology chemistry"
  },
  {
    title: "CHIN 0100: Basic Chinese",
    description:"A year-long introduction to Standard Chinese (Mandarin). Speaking, reading, writing, and grammar. Five classroom meetings weekly. This is the first half of a year-long course whose first semester grade is normally a temporary one. Neither semester may be elected independently without special written permission. The final grade submitted at the end of course work in CHIN 0200 covers the entire year and is recorded as the final grade for both semesters.",
    prereq:"None",
    times:"Multiple sections - check cab.brown.edu",
    associations:""
  },
  {
    title: "CHIN 0350: Elementary to Intermediate Chinese for Advanced Beginners",
    description:"This course is designed to enhance listening, speaking, reading, and writing skills for Chinese heritage students who have some prior knowledge of Chinese. Five classroom meetings weekly. Placement interview required.",
    prereq:"None",
    times:"MTWThF 12pm-12:50pm in Rockefeller Library 412",
    associations:""
  },
  {
    title: "CLAS 0765: Witches and Vixens: Nasty Women in Ancient Greece and Rome",
    description:"What do video vixens and Foxy Brown have in common with 'Witchy Woman'? These modern metaphors continue a long history of equating female sexual allure with dangers found in/or capable of subverting Nature. This course will use contemporary methodologies to make sense of similar descriptions of women found in Greco-Roman literature: how do the Greeks and Romans express a concern about gender, ethnicity, class, and/or politics using these metaphors? How do these same categories help distinguish what is 'natural' from 'unnatural'? To what end does this discourse about women and nature affect law, public space, or other aspects of 'civilization'?",
    prereq:"None",
    times:"TTh 10:30am-11:50am in Page-Robinson Hall 301",
    associations:""
  },
  {
    title: "CLAS 0810A: Alexander the Great and the Alexander Tradition",
    description:"This course focuses on a single historical figure, Alexander the Great, using him as a point of departure for exploring a wide range of problems and approaches that typify the field of Classical Studies. How knowledge of Alexander has been used and abused provides a fascinating case study in the formation and continuous reinterpretation of the western Classical tradition.",
    prereq:"None",
    times:"MWF 10am-10:50am in Sayles Hall 002",
    associations:"random"
  },
  {
    title: "CLAS 1120G: The Idea of Self",
    description:"Literature gestures us toward a certain kind of knowledge not quite psychological, not quite philosophical. We read widely in the classical and medieval traditions in order to gauge the peculiar nature of what this knowledge tells us about experience and the ways in which expressions of selfhood abide or are changed over time. Authors include but are not limited to Sappho, Pindar, Catullus, Horace, Augustine, and Fortunatus. WRIT",
    prereq:"None",
    times:"MWF 11am-11:50am in Friedman Hall 101",
    associations:"random"
  },
  {
    title: "CLAS 1205: The Long Fall of the Roman Empire",
    description:"Once thought of as the 'Dark Ages,' this period of western European history should instead be seen as a fascinating time in which late Roman culture fused with that of the Germanic tribes, a mixture tempered by a new religion, Christianity. Issues of particular concern include the symbolic construction of political authority, the role of religion, the nature of social loyalties, and gender roles.",
    prereq:"None",
    times:"TTh 10:30am-11:50am in Sayles Hall 105",
    associations:"random"
  },
  {
    title: "CLPS 0010: Mind, Brain and Behavior: An Interdisciplinary Approach",
    description:"This course will provide an interdisciplinary approach to the science of the mind through lens of psychology, cognitive science, cognitive neuroscience, behavioral neuroscience, computational modeling and linguistics, as uniquely represented by our department. It will focus on questions that drive the field, current state-of-the-art, and successful techniques and approaches. Questions addressed will include: What is the nature of the human mind? How do we get input from the world? How do we communicate? How do we change as infants and adults through experience? How do we make decisions and judgments? How do minds meet other minds in a social world? WRIT",
    prereq:"None",
    times:"MWF 11am-11:50am in Salomon Center DECI",
    associations:"random"
  },
  {
    title: "CLPS 0120: Introduction to Sleep",
    description:"This course uses sleep as the focal point for describing complex behavioral phenomena. How is sleep measured and defined? How does sleep differ across species? What accounts for the timing of sleep? How does sleep change with age? What are the behavioral, physiological, and cognitive concomitants of different states of sleep? How can dreaming be understood? What can go wrong with sleep? ",
    prereq:"CLPS 0001 or NEUR 0010, or an AP course in psychology or physiology.",
    times:"W 3pm-5:30pm in Friedman Hall 208",
    associations:"random"
  },
  {
    title: "CLPS 0300: Introduction to Linguistics",
    description:"The ability to speak and understand a language involves having mastered (quite unconsciously) an intricate and highly structured rule-governed system. Linguists seek to model that rule system. This course introduces the principles underlying phonology (the principles that govern how sounds are put together), syntax (the rule system governing sentence structure), and semantics (the system that relates sentences to meanings).",
    prereq:"None",
    times:"MWF 10am-10:50am in Kassar House FOX",
    associations:"languages"
  },
  {
    title: "CLPS 0550: Science of Consciousness",
    description:"This course will focus on consciousness related to visual perception, attention, memory, and cognitive control. The learning goal is to understand the neural correlates of consciousness, with an emphasis on visual consciousness. We will examine 1) basic neural mechanisms of perceptual and cognitive processing; 2) philosophical and neuroscientific models of consciousness; 3) the interaction between attention, reward, and memory and visual consciousness; 4) recent advances in research of consciousness by neuroscientific experiments with animals and humans.",
    prereq:"None",
    times:"TTh 6:30pm-7:50pm in Metcalf Research Building 230",
    associations:""
  },
  {
    title: "CLPS 0610: Children's Thinking: The Nature of Cognitive Development",
    description:"An examination of children's thinking and cognitive development from infancy to middle childhood. Considers a range of topics including memory, reasoning, categorization, perception, and children's understanding of concepts such as space, time, number, mind, and biology. Major theories of cognitive development are described and evaluated in light of the available psychological data.",
    prereq:"None",
    times:"MWF 1pm-1:50pm in Metcalf Research Building AUD",
    associations:""
  },
  {
    title: "CLPS 0700: Social Psychology",
    description:"Examines the theories, findings, and methods of social psychology. Topics include: social cognition (person perception, attitudes), social influence (cultural sources of attitudes, conformity), and social relations (aggression, altruism, prejudice). Students become better informed consumers of empirical research and acquire a new framework for interpreting social behavior. Applications to historic and current events. WRIT",
    prereq:"None",
    times:"TTh 2:30pm-3:50pm in Metcalf Research Building AUD",
    associations:""
  },
  {
    title: "CLPS 0701: Personality",
    description:"A survey of the major perspectives (psychoanalytic, behavioral, humanistic, etc.) within theories of personality. Particular emphasis is placed on the integration of research and theory.",
    prereq:"None",
    times:"TTh 9am-10:20am in CIT Center (Thomas Watson CIT) 165",
    associations:"random"
  },
  {
    title: "CLPS 1580C: Visualizing Information",
    description:"There has been an explosion of interest in how to present information in a visual way rather than as a bunch of boring numbers. Visualizations can be outstanding at conveying information, but there have also been colossal failures. We will explore the good, the bad, and the ugly and harness knowledge of visual perception to understand why some are more successful than others. Someone interested in how to create effective visual displays (posters, infographics) would benefit from this course. Some background in visual perception is recommended such as a CLPS or NEUR course about vision or familiarity with graphic design.",
    prereq:"None",
    times:"M 3pm-5:30pm in Metcalf Research Building 105",
    associations:""
  },
  {
    title: "COLT 0510K: The 1001 Nights",
    description:"Explores the origins, performance, reception, adaptation, and translation of the 1001 Nights, one of the most beloved and influential story collections in world literature. We will spend the semester in the company of genies, princes, liars, slaves, mass murderers, orientalists, and Walt Disney, and will consider the Nights in the context of its various literary, artistic, and cinematic afterlives. WRIT",
    prereq:"None",
    times:"MWF 10am-10:50am in Friedman Hall 208",
    associations:""
  },
  {
    title: "COLT 0711L: The Quran and its Readers",
    description:"Like the Bible, the Quran has had a monumental impact upon world literature. Its narratives and imagery permeate the textual, visual, and auditory landscapes of many societies in the Islamic world and beyond. In this course, we approach the Quran through the works of some of its most interesting readers, including Avicenna, Ibn Khaldun, Dante, Rumi, Hafez, Goethe, Borges, Houellebecq, and Rushdie. All readings are in English. WRIT",
    prereq:"None",
    times:"MWF 1pm-1:50pm in Salomon Center 203",
    associations:"Islam Religion"
  },
  {
    title: "COLT 0810H: How Not to Be a Hero",
    description:"One of Shakespeare’s greatest plays is about a character who was an irredeemable failure: Coriolanus. What can failure teach us? What kind of strength does a language of failure possess? We will read the ancient sources themselves (Livy, Lucian, Plutarch), and modern adaptations of these stories (Bertolt Brecht, T. S. Eliot, Günter Grass). We will also look at other “exemplary” failures who inspired Shakespeare and later literature, including Lucullus and Timon.",
    prereq:"None",
    times:"TTh 9am-10:20am in Prospect House 102",
    associations:"random"
  },
  {
    title: "COLT 0811I: Classical Mythology and the Western Tradition",
    description:"Reads classical texts that expound the fundamental mythological stories and elements of the Western tradition, then will read selected texts from the Renaissance through the twentieth century that utilize these myths. Ancient texts covered will include the Epic of Gilgamesh, Hesiod's Theogony and Works and Days, Ovid's Metamorphoses, and plays by Aeschylus, Sophocles, and Euripides. Later texts will include Shakespeare's Venus and Adonis and Rape of Lucrece, Milton's 'Lycidas,'' and lyric poetry by Keats, Shelley, Browning, Swinburne, Rilke, Auden, and Yeats. This course is suitable for anyone wishing to understand the classical background to Western literature.",
    prereq:"None",
    times:"MWF 11am-11:50am in Smith-Buonanno Hall 101",
    associations:""
  },
  {
    title: "COLT 1431C: Poets, Poetry, and Politics",
    description:"The award of the 2016 Nobel Prize for Literature to Bob Dylan ignited a lively debate about who is, and who is not, a poet. Historically, who were deemed poets, what was their function? What do their poems do and how do they work? Do they foment revolution or “make nothing happen,” as Auden once wrote? How does the poet aspire to a unique, individual voice even as he or she may (be seen to) best represent a constituency? This course relates the poetic act to political action and interrogates the commonly aired contention that politics makes for bad poetry.",
    prereq:"None",
    times:"MWF 2pm-2:50pm in Sayles Hall 104",
    associations:""
  },
  {
    title: "COLT 1440R: This is Palestine",
    description:"This course introduces students to the modern history and culture of Palestine through poetry, short stories, novels, novellas, and films. We’ll review the major events of the twentieth century by exploring works from both the “interior” (Israel and the Occupied Palestinian Territories) and the “exterior” (other countries in the Middle East and the West). We’ll examine such topics as exile and displacement, resistance, steadfastness (sumud), and everyday life under siege and occupation. No Arabic necessary; those with reading knowledge are welcome to read in the original.",
    prereq:"None",
    times:"MWF 9am-9:50am in Page-Robinson Hall 403",
    associations:""
  },
  {
    title: "CSCI 0020: The Digital World",
    description:"Removes the mystery surrounding computers and the ever-growing digital world. Introduces a range of topics and many aspects of multimedia, along with explanations of the underlying digital technology and its relevance to our society. Other topics include artificial intelligence, IT security, ethics and the economics of computing as well as the effects of its pervasiveness in today’s world. Introductory programming and analytic skills are developed through HTML, Photoshop, Excel and Python assignments. CSCI 0020 is a good introduction to a wide range of CS topics that have broad relevance in our society. No prerequisites.",
    prereq:"None",
    times:"TTh 9am-10:20am in MacMillan Hall 117",
    associations:"random"
  },
  {
    title: "CSCI 0100: Data Fluency for All",
    description:"This course is intended to introduce Brown students to computational techniques that data scientists use to tell stories. Data fluency encompasses both data literacy, the basics of statistics and machine learning, and data communication, which relies heavily on principles of design. Students will gain hands on experience using statistical tools such as 'R' to analyze real world data sets, and 'ggplot' to visualize them. Sample application domains include just about every field, since the only requirement is data, which there almost always are (e.g., the complete works of Shakespeare is a sample data set).",
    prereq:"None",
    times:"MWF 1pm-1:50pm in CIT Center (Thomas Watson CIT) 368",
    associations:"data random"
  },
  {
    title: "CSCI 0130: User Interfaces and User Experience",
    description:"Topics include understanding when to use different interfaces, modeling and representing user interaction, principles of user experience design, eliciting requirements and feedback from users, methods for designing and prototyping interfaces, and user interface evaluation. Students interested in learning the process behind building a user interface and gaining hands-on experience designing a user interface should take this course. Programming experience is unnecessary. There will be assignments, readings, and design labs. CSCI 0130 is the same lecture, labs, and readings as CSCI 1300 but half of the assignments will be different (CSCI 1300 will have assignments with computer science prerequisites). Website: http://cs.brown.edu/courses/csci1300/",
    prereq:"None",
    times:"TTh 6:40pm-8pm in MacMillan Hall 117",
    associations:""
  },
  {
    title: "CSCI 0150: Introduction to Object-Oriented Programming and Computer Science",
    description:"Emphasizes object-oriented design and programming in Java, an effective modern technique for producing modular, reusable, internet-aware programs. Also introduces interactive computer graphics, user interface design and some fundamental data structures and algorithms. A sequence of successively more complex graphics programs, including Tetris, and culminating in a significant final project, helps provide a serious introduction to the field intended for both potential concentrators and those who may take only a single course. No prerequisites, no prior knowledge of programming required.",
    prereq:"None",
    times:"TTh 2:30pm-3:50pm in Salomon Center DECI",
    associations:""
  },
  {
    title: "CSCI 0170: Computer Science: An Integrated Introduction",
    description:"CSCI0170/0180 is an introductory sequence that helps students begin to develop the skills, knowledge, and confidence to solve computational problems elegantly, correctly, efficiently, and with ease. The sequence is unique in teaching both the functional and imperative programming paradigms---the first through the languages Scheme and ML in CSCI0170; the second through Java in CSCI0180. The sequence requires no previous programming experience. Indeed, few high school students are exposed to functional programming; hence even students with previous programming experience often find this sequence an invaluable part of their education. \n \nAlthough students are taught to use programming languages as tools, the goal of CSCI0170/0180 is not merely to teach programming. On the contrary, the goal is to convey to students that computer science is much more than programming! All of the following fundamental computer science techniques are integrated into the course material: algorithms, data structures, analysis, problem solving, abstract reasoning, and collaboration. Concrete examples are drawn from different subareas of computer science: in 0170, from arbitrary-precision arithmetic, natural language processing, databases, and strategic games; in 0180, from discrete-event simulation, data compression, and client/server architectures.",
    prereq:"None",
    times:"MWF 10am-10:50am in 85 Waterman Street 130",
    associations:""
  },
  {
    title: "CSCI 1230: Introduction to Computer Graphics",
    description:"Fundamental concepts in 2D and 3D computer graphics, e.g., 2D raster graphics techniques, simple image processing, and user interface design. Focuses on geometric transformations, and 3D modeling, viewing and rendering. A sequence of assignments in C++ culminates in a simple geometric modeler and ray tracer.",
    prereq:"CSCI 0160, 0180, 0190 or minimum score of WAIVE in 'Graduate Student PreReq'.",
    times:"TTh 10:30am-11:50am in Metcalf Research Building AUD",
    associations:""
  },
  {
    title: "CSCI 1250: Introduction to Computer Animation",
    description:"Introduction to 3D computer animation production including story writing, production planning, modeling, shading, animation, lighting, and compositing. The first part of the course leads students through progressive exercises that build on each other to learn basic skills in 2D and 3D animation. At each step, student work is evaluated for expressiveness, technical correctness and aesthetic qualities. Students then work in groups creating a polished short animation. Emphasis on in-class critique of ongoing work which is essential to the cycle of visually evaluating work in progress, determining improvements, and implementing them for further evaluation. Please see course website for application procedure.",
    prereq:"None",
    times:"MW 12pm-1:50pm in CIT Center (Thomas Watson CIT) 316",
    associations:""
  },
  {
    title: "CSCI 1270: Database Management Systems",
    description:"Introduction to database structure, organization, languages, and implementation. Relational model, query languages, query processing, query optimization, normalization, file structures, concurrency control and recovery algorithms, and distributed databases. Coverage of modern applications such as the Web, but with emphasis on Database Management Systems internals.",
    prereq:"CSCI 0160, 0180, 0190 or minimum score of WAIVE in 'Graduate Student PreReq'.",
    times:"MW 3pm-4:20pm in MacMillan Hall 115",
    associations:"data"
  },
  {
    title: "CSCI 1410: Artificial Intelligence",
    description:"Practical approaches to designing intelligent systems. Topics include search and optimization, uncertainty, learning, and decision making. Application areas include natural language processing, machine vision, machine learning, and robotics. ",
    prereq:"(CSCI 0160, 0180 or 0190) and (CSCI 0220, 1450, 0450, APMA 1650 or 1655) or minimum score of WAIVE in 'Graduate Student PreReq'.",
    times:"TTh 1pm-2:20pm in Salomon Center 001",
    associations:""
  },
  {
    title: "CSCI 1470: Deep Learning",
    description:"Deep learning is the name for a particular version of neural networks--a version that emphasizes multiple layers of networks. Deep leaning, plus the specialized techniques that it has inspired (e.g. convolutional features and word embeddings) have lead to rapid improvements in many applications such as computer vision, machine translation, and computer Go. This course intends to give students a practical understanding of deep learning as applied in these and other areas. It also teaches the Tensorflow programming language for the expression of deep leaning algorithms. (The primary API for Tensorflow is from Python.)",
    prereq:"(CSCI 0150, 0170 or 0190) and (CSCI 0530, MATH 0520 or 0540) and (CSCI 0220, 1450, 0450, MATH 1610, APMA 1650 or 1655) or minimum score of WAIVE in 'Graduate Student PreReq'.",
    times:"MWF 12pm-12:50pm in Salomon Center DECI",
    associations:""
  },
  {
    title: "CSCI 1570: Design and Analysis of Algorithms",
    description:"A single algorithmic improvement can have a greater impact on our ability to solve a problem than ten years of incremental improvements in CPU speed. We study techniques for designing and analyzing algorithms. Typical problem areas addressed include hashing, searching, dynamic programming, graph algorithms, network flow, and optimization algorithms including linear programming.",
    prereq:"CSCI 0160, CSCI 0180, or CSCI 0190, and one of CSCI 0220, CSCI 1010, CSCI 1450, MATH 0750, MATH 1010, MATH 1530.",
    times:"MW 3pm-4:20pm in Metcalf Research Building AUD",
    associations:""
  },
  {
    title: "CSCI 1650: Software Security and Exploitation",
    description:"Covers software exploitation techniques and state-of-the-art mechanisms for protecting (vulnerable) software. It begins with a summary of prevalent software defects, typically found in applications written in memory unsafe languages, like C/C++, and proceeds with studying traditional and modern exploitation techniques, ranging from classical code-injection and code-reuse up to the newest goodies (just-in-time code reuse). For the most part, it focuses on defenses against certain vulnerability classes and exploitation methods. Students will learn about the boundaries and effectiveness of virtualization, stack and heap protections, and address space randomization, and analyze advanced exploitation techniques and countermeasures.",
    prereq:"Prerequisites: CSCI 0330, 1670 or minimum score of WAIVE in 'Graduate Student PreReq'.",
    times:"MW 1pm-2:20pm in CIT Center (Thomas Watson CIT) 477",
    associations:""
  },
  {
    title: "CSCI 1680: Computer Networks",
    description:"Covers the technologies supporting the Internet, from Ethernet and WiFi through the routing protocols that govern the flow of traffic and the web technologies that are generating most of it. A major concern is understanding the protocols used on the Internet: what the issues are, how they work, their shortcomings, and what improvements are on the horizon.",
    prereq:"CSCI 0330 or consent of instructor.",
    times:"TTh 1pm-2:20pm in CIT Center (Thomas Watson CIT) 368",
    associations:""
  },
  {
    title: "CSCI 1730: Design and Implementation of Programming Languages",
    description:"Explores the principles of modern programming languages by implementation. Examines linguistic features, especially control operators such as first-class functions, exceptions, and continuations. Studies data and their types, including polymorphism, type inference, and type soundness. Examines compiler and run-time system topics: continuation-passing style and garbage collection.",
    prereq:"CSCI 0160, 0180, 0190 or minimum score of WAIVE in 'Graduate Student PreReq'.",
    times:"MWF 11am-11:50am in CIT Center (Thomas Watson CIT) 368",
    associations:""
  },
  {
    title: "CSCI 1805: Computers, Freedom and Privacy",
    description:"Who is the Big Brother that we most fear? Is it the NSA -- or is it Google and Facebook? Rapidly changing social mores and the growing problem of cybersecurity have all contributed to a sense that privacy is dead. Laws protecting privacy and civil liberties are stuck in the analog age, while the capabilities for mass digital surveillance continue to advance rapidly. This course will examine a variety of informational privacy and technology issues. A major theme: the historical and contemporary struggle to bring surveillance under democratic control to protect against abuses of privacy, civil liberties and human rights. WRIT",
    prereq:"None",
    times:"TTh 9am-10:20am in Friedman Hall 108",
    associations:""
  },
  {
    title: "CSCI 1810: Computational Molecular Biology",
    description:"High-throughput experimental approaches now allow molecular biologists to make large-scale measurements of DNA, RNA, and protein, the three fundamental molecules of the cell. The resulting datasets are often too large for manual analysis and demand computational techniques. This course introduces algorithms for sequence comparison and alignment; molecular evolution and phylogenetics; DNA/RNA sequencing and assembly; recognition of genes and regulatory elements; and RNA and protein structure. The course demonstrates how to model biological problems in terms of computer science.",
    prereq:"CSCI 0160, CSCI 0180 or CSCI 0190, or consent of instructor.",
    times:"TTh 2:30pm-3:50pm in CIT Center (Thomas Watson CIT) 241",
    associations:""
  },
  {
    title: "CSCI 1870: Cybersecurity Ethics",
    description:"This timely, topical course offers a comprehensive examination of ethical questions in cybersecurity. These issues pervade numerous, diverse aspects of the economy and society in the Information Age, from human rights to international trade. Students will learn about these topics, beginning first with acquaintance with the dominant ethical frameworks of the 20th and 21st centuries, then employing these frameworks to understand, analyze, and develop solutions for leading ethical problems in cybersecurity. The things that you learn in this course will stay with you and inform your personal and professional lives.",
    prereq:"None",
    times:"M 3pm-5:30pm in CIT Center (Thomas Watson CIT) 241",
    associations:""
  },
  {
    title: "CSCI 1950N: 2D Game Engines",
    description:"2D Game Engines covers core techniques used in the development of the software that drives computer games and other interactive software. Projects involve building different varieties of 2D game engines as well as games that require use of the features implemented in the engines. Topics include high-level engine design, vector and raster graphics, animation, collision detection, physics, content management, and game AI.",
    prereq:"CSCI 0160, 0180, or 0190.",
    times:"W 3pm-5:30pm in CIT Center (Thomas Watson CIT) 241",
    associations:"games random"
  },
  {
    title: "CSCI 1951R: Introduction to Robotics",
    description:"Each student will learn to program a small quad-rotor helicopter. We will provide each student with their own robot for the duration of the course. The course will cover PID controllers for stable flight, localization with a camera, mapping, and autonomous planning. At the end of the course, the aim is for students to understand the basic concepts of a mobile robot and aerial vehicle. Enrollment by instructor permission.",
    prereq:"(CSCI 0160, 0180 or 0190) and (CSCI 0220, 0450 or 1450) or minimum score of WAIVE in 'Graduate Student PreReq'.",
    times:"TTh 10:30am-11:50a",
    associations:"random"
  }
]

/*
,
{
  title: "",
  description:"",
  prereq:"None",
  times:"",
  associations:""
}

Multiple sections - check cab.brown.edu
*/


function seedDB(){
   //Remove all Courses
   westernCourse.remove({}, function(err){
        if(err){
            console.log(err);
        } else {
        	console.log("removed all western courses!!!");
			// Add in the courses
			western.forEach(function(seed){
				westernCourse.create(seed, function(err, data){
					if(err){
						console.log(err)
					} else {
						console.log("Added a western course!!")
					}
				});
			})
		}	   
   });
   brownCourse.remove({}, function(err){
        if(err){
            console.log(err);
        } else {
        	console.log("removed all brown courses!!!");
			// Add in the courses
			brown.forEach(function(seed){
				brownCourse.create(seed, function(err, data){
					if(err){
						console.log(err)
					} // else {
					// 	console.log("Added a brown course!!")
					// }
				});
			})
		}	   
   });
}
	

module.exports = seedDB;