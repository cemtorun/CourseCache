var mongoose = require("mongoose");
var brownCourse = require("./models/brown");
var westernCourse = require("./models/western");

western = [
    {
        title: "ACTURSCI 1021B - INTRO TO FINANCIAL SECURE SYS",
        description:"The nature and cause of financial security and insecurity; public, private and employer programs and products to reduce financial insecurity, including social security, individual insurance and annuities along with employee pensions and benefits.",
        prereq:"None",
        times:"",
        associations:"finance"
    },
    {
        title: "ACTURSCI 2053 - MATH FOR FINANCIAL ANALYSIS",
        description:"Simple and compound interest, annuities, amortization, sinking funds, bonds, bond duration, depreciation, capital budgeting, probability, mortality tables, life annuities, life insurance, net premiums and expenses",
        prereq:"Prerequisite(s): 1.0 course or two 0.5 courses at the 1000 level or higher from Applied Mathematics, Calculus, or Mathematics.",
        times:"",
        associations:""
    },
    {
        title: "ACTURSCI 2427B - LONG TERM ACTUARIAL MATH I",
        description:"Models for the time until death, single life annuity and life insurance present values and their probability distributions; introduction to equivalence principle and premium calculations.",
        prereq:"A minimum mark of 60% in each of Actuarial Science 2553A/B, either Calculus 2402A/B or Calculus 2502A/B, and Statistical Sciences 2857A/B. Restricted to students enrolled in any Actuarial Science module.",
        times:"",
        associations:""
    },
    {
        title: "ACTURSCI 2553A - MATHEMATICS OF FINANCE",
        description:"Time value of money, accumulation and discount functions, effective rates of interest and discount and present values, as applied to annuities and other financial products, and/or applications including loan repayment schedules and methods.",
        prereq:"A minimum mark of 60% in Calculus 1501A/B or Applied Mathematics 1413, or Calculus 1301A/B with a minimum mark of 85%.",
        times:"",
        associations:"financial"
    },
    {
        title: "ACTURSCI 3424B - SHORT TERM ACTUARIAL MATH I",
        description:"Insurance loss frequency and severity models; aggregate loss models; risk measures; ruin theory; coverage modifications.",
        prereq:"A minimum mark of 60% in Statistical Sciences 3657A/B. Restricted to students enrolled in any Actuarial Science module, or those registered in the Honors Specialization module in Statistics or the Honors Specialization in Financial Modelling module.",
        times:"",
        associations:""
    },
    {
        title: "ACTURSCI 3429A - LONG TERM ACTUARIAL MATH II",
        description:"Single life annuity and life insurance loss random variables and their distributions, with applications to the analysis of benefit premiums and reserves; survival model estimates; mortality Improvement and longevity models.",
        prereq:"A minimum mark of 60% in each of Actuarial Science 2427A/B and Statistical Sciences 2858A/B",
        times:"",
        associations:""
    },
    {
        title: "ACTURSCI 3431B - LONG TERM ACTUARIAL MATH III",
        description:"Analysis of probability distributions and present values associated with multiple life models, multiple decrement models and more general multi-state models and applications to life Insurance and other long term coverages including disability Income and other health care coverages.",
        prereq:"A minimum mark of 60% in each of Actuarial Science 3429A/B and in Statistical Sciences 3657A/B. Restricted to students enrolled in any Actuarial Science module.",
        times:"",
        associations:""
    },
    {
        title: "ACTURSCI 4426F - ACTUARIAL PRACTICE I",
        description:"Introduction to the major areas and issues of actuarial practice, including insurance and annuity product design, pricing and valuation, analysis of the cost of pensions and other employee benefits, asset liability management and professionalism.",
        prereq:"A minimum mark of 60% in Actuarial Science 2427A/B. Restricted to students who have completed all courses specifically mentioned in the Major in Actuarial Science module.",
        times:"",
        associations:""
    },
    {
        title: "ACTURSCI 4823A - SURVIVAL ANALYSIS",
        description:"Survival models, nonparametric estimation of the survival function, one and two or more sample hypothesis tests, inference for semiparametric regression models, inference for parametric regression models.",
        prereq:"A minimum mark of 60% in Statistical Sciences 3858A/B.",
        times:"",
        associations:"stats statistics"
    },
    {
        title: "ACTURSCI 4824A - SHORT TERM ACTUARIAL MATH II",
        description:"Selection, calibration, and validation of parametric models for insurance losses; credibility theory; short term reserving and pricing; reinsurance coverages.",
        prereq:"A minimum mark of 60% in Statistical Sciences 3858A/B. Restricted to students enrolled in any Actuarial Science module, or those registered in the Honors Specialization module in Statistics or the Honors Specialization in Financial Modelling module.",
        times:"",
        associations:"stats statistics finance"
    },
    {
        title: "AMERICAN 2310F - AMERICAN NIGHTMARE",
        description:"In the increasingly polarized culture of the US, one American’s dream often seems to be another American’s nightmare. This course introduces key ideas in American culture (the American Dream, American Exceptionalism, and American Identity), and examines recent socio-political movements such as #Black Lives Matter, #Me Too, and White Nationalism.",
        prereq:"None",
        times:"",
        associations:"history trump random"
    },
    {
        title: "AMERICAN 3310F - ADVANCED AMERICAN STUDIES",
        description:"What defines being “American”? How is the American identity constructed, and how and why is it frequently contested? This course employs an interdisciplinary approach to explore the meaning(s) and definition(s) of American identity from multiple viewpoints, and within the context of US history, politics, regions, values, and culture. ",
        prereq:"1.0 History course at the 2200 level or above OR enrolment in an American Studies module.",
        times:"",
        associations:""
    },
    {
        title: "ANATCELL 2200B - SYSTEMIC ANATOMY",
        description:"An introduction to the gross anatomical structures and functional connections of the core systems in the human body, including the musculoskeletal, circulatory, respiratory, gastrointestinal, urinary, and reproductive systems. Demonstrations reinforce and extend the lectures.",
        prereq:"None",
        times:"",
        associations:"biology"
    },
    {
        title: "ANATCELL 2221 - FUNCTIONAL HUMAN ANATOMY",
        description:"The musculoskeletal, cardiovascular, respiratory, nervous, digestive, excretory, and reproductive systems with emphasis on locomotion and function.",
        prereq:"Grade 12U Biology (SBI4U) or equivalent.",
        times:"",
        associations:"biology"
    },
    {
        title: "ANATCELL 3200A - FUNCTIONAL HUMAN NEUROANATOMY",
        description:" An introduction to the central nervous system (CNS). Topics include: the basic structures and functional interconnections between subdivisions of the brain, spinal cord and autonomic nervous systems; CNS development; structures that protect and support the brain; and clinical conditions associated with disruption of the CNS.",
        prereq:"Registration in third or fourth year. A background in introductory biology is recommended.",
        times:"",
        associations:"neuroscience neurology"
    },
    {
        title: "ANATCELL 3309 - MAMMALIAN HISTOLOGY",
        description:"A detailed study of the cellular and microscopic structure of the various tissues and organ systems of the body, with emphasis on man and other mammals used in medical research. Systems are examined stressing the relations of structure to function.",
        prereq:"Registration in third or fourth year. Note: This course is recommended for students with a background in introductory biology.",
        times:"",
        associations:""
    },
    {
        title: "ANATCELL 4410A - DISCOVERY-BASED CELL BIO I",
        description:"This course focuses on advanced cell biological principles and the research pathways that lead to new discoveries in cytoskeletal regulation and cancer cell biology. Students will examine the controversial social/ethical parameters that guide bench-to-bedside experimentation and clinical translation, and will be trained in effective verbal and written scientific presentations.",
        prereq:"One of Biology 3316A/B or Physiology 3140A with a minimum mark of 70%, or Anatomy and Cell Biology 3309 with a minimum mark of 75%. The preferred prerequisite is one of Biology 3316A/B or Physiology 3140A.",
        times:"",
        associations:""
    },
    {
        title: "ANATCELL 4411B - DISCOVERY BASED CELL BIO II",
        description:"This course focuses on cell signalling diseases, cell specialization, stem cells, cloning and the cell biology of aging. Students will be trained in effective verbal and written scientific presentations.",
        prereq:"One of Biology 3316A/B or Physiology 3140A with a minimum mark of 70%, or Anatomy and Cell Biology 3309 with a minimum mark of 75%. The preferred prerequisite is one of Biology 3316A/B or Physiology 3140A.",
        times:"",
        associations:""
    },
    {
        title: "ANATCELL 4429A - ADVANCED MEDICAL CELL BIOLOGY",
        description:"The study of the molecules and functions common to mammalian cells, the specializations that make differentiated cells distinct, and the diseases that result from the dysregulation or loss of these cellular functions. This course will cover cellular organization, biogenesis of organelles, cellular growth and differentiation from an experimental perspective.",
        prereq:"Either Biology 3316A/B or Physiology 3140A, with a minimum mark of 70%.",
        times:"",
        associations:""
    },
    {
        title: "ANATCELL 4451F - INTEGRATIVE NEUROSCIENCE",
        description:"This course focuses on the link between cellular/molecular mechanisms in the brain and behaviour. Topics include fundamental brain functions such as learning and memory, circadian rhythms and sleep, sexual behavior, motivation and reward, addiction, fear and anxiety, pain, stress, and the neurobiology of neurological and neuropsychiatric disorders.",
        prereq:"One of Neuroscience 2000, Physiology 3120 or Physiology 3140A.",
        times:"",
        associations:"neurology"
    },
    {
        title: "ANATCELL 4452B - NEUROBIOLOGY OF MENTAL ILLNESS",
        description:"An introduction to common mental health disorders focusing on anatomical, clinical, biological, genetic and epidemiological aspects of psychiatric disorders including schizophrenia, addiction, depression, phobias, panic/anxiety, post-traumatic stress disorder, OCD, paranoia, attention-deficit hyperactivity disorder, suicide and autism. In addition to lectures and tutorials, students will debate important ethical issues in psychiatry.",
        prereq:"a minimum mark of 70% in one of the following: (both Anatomy and Cell Biology 2200A/B and Anatomy and Cell Biology 3200A/B), Neuroscience 2000 or the former Anatomy and Cell Biology 3319.",
        times:"",
        associations:""
    },
    {
        title: "ANATCELL 4461B - TRANSLATIONAL MODELS OF CANCER",
        description:" This course introduces main cancer types in terms of histology, prognosis, biomarkers, imaging, and sites of metastasis. The role of translational research models in the development of disease-specific diagnostic tools and treatment modalities will be emphasized.",
        prereq:"a minimum mark of 70% in one of Anatomy and Cell Biology 3309 or Pathology 3500 or the former Pathology 3240A",
        times:"",
        associations:""
    },
    {
        title: "ANTHRO 1020 - MANY WAYS OF BEING HUMAN",
        description:"An introduction to anthropology (the study of human beings, past and present) co-taught by specialists in biological anthropology, archaeology, linguistic anthropology, and sociocultural anthropology. Students will explore anthropological approaches to and findings concerning: human evolution; variation and adaptation; diverse forms of social, political, and economic organization; culture; ritual; language; communication; identity; gender; health; social inequality; and globalization.",
        prereq:"None",
        times:"",
        associations:"random"
    },
    {
        title: "ANTHRO 1021A - INTRO SOCIOCUL & LINGUIST ANTH",
        description:"An introductory course teaching basic concepts in the study of socio-cultural and linguistic practices worldwide. It underscores shared human experiences as well as our rich diversity. Topics include, changing socio-cultural and economic institutions, political and religious systems, and the role of language in the workings of power, indexicality and identity.",
        prereq:"None",
        times:"",
        associations:""
    },
    {
        title: "ANTHRO 1022B - INTRO BIOL ANTHRO & ARCHA",
        description:"An introduction to aspects of Biological Anthropology and Archaeology which help us to understand the place of humankind in nature. Topics to be covered include heredity, human evolution and variability, archaeological method, the development of culture, the domestication of plants and animals, and the rise of civilization and the state.",
        prereq:"None",
        times:"",
        associations:"biology"
    },
    {
        title: "ANTHRO 1025F - INTRO SOCIOCUL & LINGUIST ANTH",
        description:"An introductory course teaching basic concepts in the study of socio-cultural and linguistic practices worldwide. It underscores shared human experiences as well as our rich diversity. Topics include, changing socio-cultural and economic institutions, political and religious systems, and the role of language in the workings of power, indexicality and identity.",
        prereq:"None",
        times:"",
        associations:""
    },
    {
        title: "ANTHRO 1025G - INTRO SOCIOCUL & LINGUIST ANTH",
        description:"An introductory course teaching basic concepts in the study of socio-cultural and linguistic practices worldwide. It underscores shared human experiences as well as our rich diversity. Topics include, changing socio-cultural and economic institutions, political and religious systems, and the role of language in the workings of power, indexicality and identity.",
        prereq:"None",
        times:"",
        associations:""
    },
    {
        title: "ANTHRO 1026F - INTRO BIOL ANTHRO & ARCHA",
        description:"An introduction to aspects of biological anthropology and archaeology which help us to understand the place of humankind in nature. Topics to be covered include heredity, human evolution and variability, archaeological method, the development of culture, the domestication of plants and animals, and the rise of civilization and the state.",
        prereq:"None",
        times:"",
        associations:""
    },
    {
        title: "ANTHRO 1026G - INTRO BIOL ANTHRO & ARCHA",
        description:"An introduction to aspects of biological anthropology and archaeology which help us to understand the place of humankind in nature. Topics to be covered include heredity, human evolution and variability, archaeological method, the development of culture, the domestication of plants and animals, and the rise of civilization and the state.",
        prereq:"None",
        times:"",
        associations:""
    },
    {
        title: "ANTHRO 1027A - INTRO TO LINGUISTICS",
        description:"Introduction to basic concepts and methods of modern linguistics. Topics include articulatory and acoustic phonetics, phonology, morphology, syntax and semantics. This course is a prerequisite for subsequent linguistics courses in the Department of Anthropology and/or the Linguistics program.",
        prereq:"None",
        times:"",
        associations:"language"
    },
    {
        title: "ANTHRO 1027B - INTRO TO LINGUISTICS",
        description:"Introduction to basic concepts and methods of modern linguistics. Topics include articulatory and acoustic phonetics, phonology, morphology, syntax and semantics. This course is a prerequisite for subsequent linguistics courses in the Department of Anthropology and/or the Linguistics program.",
        prereq:"None",
        times:"",
        associations:"language"
    },
    {
        title: "ANTHRO 2100 - ARCH & WORLD PREHISTORY",
        description:"The field of archaeology, with emphasis on the major discoveries of the discipline. Topics include the evolution of humans, their spread throughout the world, the origins of agriculture, urbanization, and the development of early civilizations. Major archaeological sites like Olduvai Gorge, Stonehenge, Giza, Ur and Teotihuacan will be discussed.",
        prereq:"None",
        times:"",
        associations:"history"
    },
    {
        title: "ANTHRO 2101B - GREAT ARCHAEOLOGICAL SITES",
        description:"An examination of spectacular archaeological sites around the world, including many on the UNESCO World Heritage List. The course covers sites of complex hunter-gatherers and farmers, and early states and empires in Mesopotamia, Egypt, the Aegean, Asia and Mesoamerica, the Andes and the Classical World.",
        prereq:"None",
        times:"",
        associations:""
    },
    {
        title: "ANTHRO 2151A - LANGUAGE, GENDER AND SEXUALITY",
        description:"This course explores the relationship between language and sex/gender systems from a critical linguistic anthropology perspective. Areas investigated include: language and gender stereotypes; gender variation in language usage; power and women's status; and male vs female communicative styles in different contexts.",
        prereq:"Any first year Arts and Humanities or Social Science course.",
        times:"",
        associations:""
    },
    {
        title: "ANTHRO 2212G - CULTURES OF THE PACIFIC",
        description:"The cultures of Polynesia, Micronesia and Melanesia with an emphasis on indigenous social structures. Other topics include ecology and economy, male-female relations, ritual and cosmology, hierarchical and egalitarian political systems, Pacific history, and contemporary political and economic issues.",
        prereq:"Any Arts and Humanities or Social Science 0.5 or 1.0 Essay course.",
        times:"",
        associations:""
    },
    {
        title: "ANTHRO 2216F - CULTURES OF LATIN AMERICA",
        description:"The cultural history of Latin American societies. Topics include the historical formation of indigenous communities, and a wide variety of contemporary social problems in Latin America.",
        prereq:"None",
        times:"",
        associations:"Any Arts and Humanities or Social Science 0.5 or 1.0 Essay course."
    },
    {
        title: "ANTHRO 2222F - DEBATES IN SOCIOCULT ANTHRO",
        description:" Sociocultural Anthropologists commonly debate the foundations of their discipline. What are the goals of Sociocultural Anthropology? How should we be doing it, and why? For whom do we do it? This course contextualizes such key debates focusing especially on what they tell us about the discipline's past, present, and future.",
        prereq:"Anthropology 1020 (formerly Anthropology 1020E) or Anthropology 1025F/G or Anthropology 1021A/B.",
        times:"",
        associations:""
    },
    {
        title: "ANTHRO 2226B - BIOLOGICAL ANTHROPOLOGY",
        description:"A survey of the major areas of biological anthropology, including heredity, paleo-anthropology, human adaptability and variability, and growth and development.",
        prereq:"Anthropology 1020 (formerly Anthropology 1020E), or one of Anthropology 1025F/G or Anthropology 1021A/B and one of Anthropology 1026F/G or Anthropology 1022A/B.",
        times:"",
        associations:"biology"
    },
    {
        title: "ANTHRO 2229F - PRINCIPLES OF ARCHAEOLOGY",
        description:"This course provides an overview of the goals, theory and analytical methods of archaeology as practised by anthropologists. The course serves to provide a basic appreciation of how one is able to go from the material remains of past peoples to statements about the nature of their cultural systems, and also, how archaeologists are uniquely poised to address certain general questions of concern to all anthropologists.",
        prereq:"Anthropology 1020 (formerly Anthropology 1020E), or one of Anthropology 1025F/G or Anthropology 1021A/B and one of Anthropology 1026F/G or Anthropology 1022A/B.",
        times:"",
        associations:""
    },
    {
        title: "ANTHRO 2233F - ONTARIO ARCHAEOLOGY",
        description:"The prehistoric societies of Ontario and surrounding areas. Topics include the entry of humans into the New World and their arrival in Ontario; development of agriculture; appearance of historic period societies such as the Huron, Neutral and Ojibwa; impact of European settlement and economic systems on native societies.",
        prereq:"Anthropology 1020 (formerly Anthropology 1020E), or one of Anthropology 1025F/G or Anthropology 1021A/B and one of Anthropology 1026F/G or Anthropology 1022A/B, or Anthropology 2100, or First Nations Studies 1020E.",
        times:"",
        associations:"canada"
    },
    {
        title: "ANTHRO 2236B - GROWTH, DEVELOPMENT AND AGING",
        description:"This course examines the growth, development and aging of the human body using evolutionary, comparative and cross-cultural approaches. We will draw on practical methods from bioarchaeology and forensics, theoretical perspectives from biological evolution and evolutionary ecology, cultural aspects from cultural anthropology, and clinical perspectives from modern medical studies.",
        prereq:"Any one of the following: Anthropology 1020 (formerly Anthropology 1020E), Anthropology 1022A/B, Anthropology 1026F/G, Sociology 1020, Sociology 1021E, Biology 1225, Biology 1290B, Health Sciences 1001A/B and Health Sciences 1002A/B.",
        times:"",
        associations:"biology"
    },
    {
        title: "ANTHRO 2237A - HUMAN ADAPTABILITY & RESILIENC",
        description:"Humans are a remarkably adaptable species who have colonized almost all regions of our planet. This course examines the mechanisms that underlie our adaptability, including human biological diversity, the ways we adapt to environmental stress, and the resilience of our species in response to rapid environmental and cultural change.",
        prereq:"Completion of first year, including at least one course in Social Science, Science, or Health Sciences. Recommended: Anthropology 1020, Anthropology 1021A/B, Anthropology 1022A/B, Anthropology 1025F/G, Anthropology 1026F/G, Geography 1100, Geography 1300A/B, Geography 1400F/G, Geography 1500F/G, Biology 1225, Biology 1290B, Health Sciences 1001A/B or Health Sciences 1002A/B.",
        times:"",
        associations:""
    },
    {
        title: "ANTHRO 2238B - READING LIFE & DEATH",
        description:" While alive our bodily tissues store a tremendous amount of information. These clues can be used to tell a lot about a person’s life and death. This information is explored in three contexts: Living Individuals, Recently Deceased Individuals (focus on forensic applications), and Older Deceased Individuals (focus on archaeological applications).",
        prereq:"Any first year Social Science, Health Sciences, or Science course.",
        times:"",
        associations:""
    },
    {
        title: "ANTHRO 2245G - APPROACHES TO LANGUAGE",
        description:"Introduces theories and methods of linguistic anthropology. Topics include: the relationship between language and thought, connections between linguistic practices and social categories, the role of language in cultural practices",
        prereq:"Anthropology 1020 (formerly Anthropology 1020E), or Anthropology 1021A/B, or Anthropology 1025F/G, or Anthropology 1027A/B, or Linguistics 2288A/B.",
        times:"",
        associations:""
    },
    {
        title: "ANTHRO 2250F - VERBAL ART, PERF & SPEECH PLAY",
        description:"This course examines the artful and playful use of spoken language in relation to social organization and cultural practices. Topics include: structures and patterns in speech play, participation of the audience in the performance, evaluation of competence, issues of authenticity and identity, and the tension between tradition and innovation.",
        prereq:"One of Anthropology 1020 (formerly Anthropology 1020E), Anthropology 1021A/B, Anthropology 1025F/G, Anthropology 1027A/B, Linguistics 2288A/B or permission from the instructor.",
        times:"",
        associations:""
    },
    {
        title: "ANTHRO 2251F - LANGUAGE, GENDER AND SEXUALITY",
        description:"This course explores the relationship between language and sex/gender systems from a critical linguistic anthropological perspective. Areas investigated include: language and gender stereotypes; gender variation in language usage; power and women's status; and male vs female communicative styles in different contexts. An essay on a relevant topic is required.",
        prereq:"One of Anthropology 1020 (formerly Anthropology 1020E), Anthropology 1021A/B, Anthropology 1025F/G, Anthropology 1027A/B, Women's Studies 1020E, Women's Studies 1021F/G, or Linguistics 2288A/B.",
        times:"",
        associations:""
    },
    {
        title: "ANTHRO 2264G - ISSUES IN PRIMATE CONSERVATION",
        description:"A consideration of conservation issues confronting primatologists, including: conservation assessment, variables for understanding the conservation biology of nonhuman primate populations, biogeographic patterns contributing to declining primate populations, strategies in primate conservation, and how ethnoprimatology - the study of interactions between humans and nonhuman primate populations - can be useful in primate conservation.",
        prereq:"Any Arts and Humanities or Social Science 0.5 or 1.0 Essay course.",
        times:"",
        associations:""
    },
    {
        title: "ANTHRO 2265F - PRIMATE BEHAVIOR",
        description:"This course considers the behavioral patterns, and diversity, exhibited across species of the Order Primates. Critical examination of theoretical models developed to explain primate behavior is emphasized. Topics covered, using species comparisons, include socioecological contexts of primate behavior, reproduction, growth and development, kinship and dominance, communication and cognition.",
        prereq:"Any Arts and Humanities or Social Science 0.5 or 1.0 Essay course.",
        times:"",
        associations:""
    },
    {
        title: "ANTHRO 2267B - ANTHROPOLOGY OF ZOOS",
        description:"Modern zoos characterize themselves as key players in conserving endangered species. But, is this message getting across to zoo visitors? This course utilizes anthropological and interdisciplinary approaches to assess key aspects of zoo-based conservation action, and the extent to which zoos can generate public engagement in 21st century conservation concerns.",
        prereq:"None",
        times:"",
        associations:""
    },
    {
        title: "ANTHRO 2272F - ANTHROPOLOGY OF TOURISM",
        description:"This course examines various aspects of tourism from an anthropological point of view. Topics will include the cultural effects of tourism on both hosts and guests, on the political and economic issues involved in tourism, on the connection between tourism and environmental concerns, and on conflict over local resources.",
        prereq:"At least a 0.5 Essay course in any faculty.",
        times:"",
        associations:""
    },
    {
        title: "ANTHRO 2272G - ANTHROPOLOGY OF TOURISM",
        description:"This course examines various aspects of tourism from an anthropological point of view. Topics will include the cultural effects of tourism on both hosts and guests, on the political and economic issues involved in tourism, on the connection between tourism and environmental concerns, and on conflict over local resources.",
        prereq:"At least a 0.5 Essay course in any faculty.",
        times:"",
        associations:""
    },
    {
        title: "ANTHRO 2277F - ANTHROPOLOGY OF DISASTER",
        description:"This course explores anthropological approaches to the study of crisis, disaster, and emergency. We will look at theoretical frameworks for understanding disaster and apply them to case studies of disasters ranging from fires and hurricane to earthquakes and humanitarian emergencies.",
        prereq:"At least 0.5 essay course in Arts and Humanities or Social Science.",
        times:"",
        associations:""
    },
    {
        title: "ANTHRO 2285G - ANTHRO OF FASHION",
        description:"This course focuses on the anthropological study of clothing and fashion. It will critically examine the meaning of clothing and the role it plays in the formation of identities and the negotiation of power inequalities. It will further explore the social and political-economic processes that influence clothing production and consumption.",
        prereq:"Any Arts and Humanities or Social Science 0.5 or 1.0 Essay course.",
        times:"",
        associations:""
    },
    {
        title: "ANTHRO 3223F - FIELDWORK SOCIOCULTURAL ANTHRO",
        description:"This course will explore the methodology of fieldwork in Sociocultural Anthropology. The emphasis will be less on reading about anthropology and more on actually doing what anthropologists do. Assignments will focus on participant observation and include talking with people, observing what they are doing and taking part in their activities.",
        prereq:"Registration in Year 3 or 4 in any Anthropology module.",
        times:"",
        associations:""
    },
    {
        title: "ANTHRO 3243G - APPLIED LINGUISTICS",
        description:"A survey of practical applications of linguistic theory. Topics may include discussion of the relevance of linguistic research to language teaching and learning, communication disorders, language policy development and language revitalization, translation and intercultural communication, media, law, business, communication technologies, and social justice.",
        prereq:"Enrolment in third or fourth year, and Linguistics 2247A/B or Linguistics 2248A/B.",
        times:"",
        associations:"language"
    },
    {
        title: "ANTHRO 3307A - FIELD METHODS IN ARCHAEOLOGY",
        description:"This course provides a practical introduction to field methods and preliminary laboratory techniques of archaeology. Practical training will be given at a field camp to be held at an archaeological site near London.",
        prereq:"Anthropology 2229F/G and registration in Anthropology module Year 3 or 4. Application required.",
        times:"",
        associations:""
    },
    {
        title: "ANTHRO 3308G - ARCHAEOLOGY: THEORY & PRACTICE",
        description:"This course examines contemporary theoretical frameworks in archaeology and explores how they shape and are shaped by current issues, the development of new methods, and archaeological practice around the globe.",
        prereq:"Anthropology 2229F/G and registration in Year 3 or 4 in any Anthropology module.",
        times:"",
        associations:""
    },
    {
        title: "ANTHRO 3310B - ZOOARCHAELOGY",
        description:"An introduction to the range of information about past human groups gleaned from the animal remains. Lectures will cover various topics in zooarchaeological theory and practice. Labs will teach the basics of skeletal identification for fish, birds and mammals, and will provide experience in the identification of fragmentary archaeological remains.",
        prereq:"Anthropology 2229F/G.",
        times:"",
        associations:""
    },
    {
        title: "ANTHRO 3325F - READINGS IN ANTHROPOLOGY",
        description:" Individual reading and research of current interest in Anthropology. Students are responsible for making arrangements with an Anthropology faculty member. An application must be completed with approval from the Instructor and the Chair. Applications are available on the Anthropology website.",
        prereq:"Registration in third year in any program. Application required.",
        times:"",
        associations:""
    },
    {
        title: "ANTHRO 3325G - READINGS IN ANTHROPOLOGY",
        description:"Individual reading and research of current interest in Anthropology. Students are responsible for making arrangements with an Anthropology faculty member. An application must be completed with approval from the Instructor and the Chair. Applications are available on the Anthropology website.",
        prereq:"Registration in third year in any program. Application required.",
        times:"",
        associations:""
    },
    {
        title: "ANTHRO 3334F - PRIMATE & HUMAN PALEONTOL",
        description:"This course will combine general principles of vertebrate paleontology and evolutionary biology to examine the fossil evidence for primate and human evolution. Important events, such as primate and hominid origins will be investigated in detail, emphasizing the cross-disciplinary nature of this field of study.",
        prereq:"Anthropology 2226A/B and registration in year 3 or 4 in any module.",
        times:"",
        associations:""
    },
    {
        title: "ANTHRO 3338F - HUMAN SKELETAL BIOLOGY",
        description:"An exploration of the role that skeletal material plays in providing anthropological information. Emphasis will be placed on the analytical techniques used in osteology and odontology for: measuring biological adaptability in archaeological populations; creating individual biographies; the reconstruction of cultural activities.",
        prereq:"Anthropology 2226A/B and registration in year 3 or 4 in any module.",
        times:"",
        associations:""
    },
    {
        title: "ANTHRO 3350F - SOCIETY AND CULTURE I",
        description:"This course explores where anthropology came from, what influenced its early questions, and how those questions evolved over time, through an examination of some classic anthropological work on society and culture.",
        prereq:"Registration in third or fourth year in any Anthropology module.",
        times:"",
        associations:""
    },
    {
        title: "ANTHRO 3351G - SOCIETY AND CULTURE II",
        description:"This course examines the various principles through which societies are organized, by examining the construction of social formations and social identities over time in contexts of differential power.",
        prereq:"Anthropology 3350F and third or fourth year standing in any anthropology module.",
        times:"",
        associations:""
    },
    {
        title: "ANTHRO 3354G - DISABILITY AND HEALTH",
        description:"This course will provide students with a foundation to think critically about occupying health and disability and to use an anthropological lens to provide students with skills to critically evaluate health- occupation- and disability-related experiences both locally and globally.",
        prereq:"Registration in third or fourth year in any Anthropology module or Disability Studies module.",
        times:"",
        associations:""
    },
    {
        title: "ANTHRO 4400E - ANTHROPOLOGICAL THOUGHT",
        description:"Exploration of current anthropological debates and contemporary theoretical frameworks as they may be used in the analysis of anthropological problems and thought.",
        prereq:"Anthropology 3350F (or the former Anthropology 3301E), and registration in Year 4 in any module.",
        times:"",
        associations:""
    },
    {
        title: "ANTHRO 4409G - ANTHRO OF ETHICS AND MORALITY",
        description:"Through an anthropological approach to the study of ethics and morality, the course explores how value and meaning are socially, culturally, and historically produced. It covers a range of ethnographic case studies that explore how ethical and moral values operate in various contexts, from everyday talk to international humanitarian intervention.",
        prereq:"Fourth-year in an Anthropology module and by application (see Department website).",
        times:"",
        associations:""
    },
    {
        title: "ANTHRO 4412G - LANGUAGE AND POWER",
        description:"This course examines linkages between linguistic practices and relations of power, drawing primarily on tools and methodologies of Linguistic Anthropology and Discourse Analysis. Topics such as racism, disability, migration will be addressed.",
        prereq:"Fourth-year in an Anthropology module and by application (see Department website).",
        times:"",
        associations:""
    },
    {
        title: "ANTHRO 4422G - ACTIVITY & ENERGETICS IN PAST",
        description:"This course explores the interaction between habitual activity and energetics throughout human evolution, prehistory, and the recent past. Particular focus will be placed on the energetic biology of species, and how it has changed throughout human evolution in relation to habitual activity and changing resources use.",
        prereq:"Registration in fourth year in Anthropology and permission of the instructor.",
        times:"",
        associations:""
    },
    {
        title: "ANTHRO 4424F - ANALYTICAL TECHNIQ, ARCH & BIO",
        description:"This course explores how analytical techniques are applied in archaeology and bioanthropology. The focus is not on any specific analytical technique per se. Rather, the coursefocuses on the theoretical context and paradigm within which techniques are applied and results interpreted and the broad anthropological questions that they can address.",
        prereq:"Registration in fourth year in Anthropology and permission of the instructor.",
        times:"",
        associations:""
    },
    {
        title: "ANTHRO 4429G - PRINCIPLES APPLED ARCHAEOLOGY",
        description:"This course will examine the principles and concerns that are integral to the practice of applied archaeology in North America and the role of applied archaeology in heritage management. The course will review legislation and professional practices that govern applied archaeologists who undertake Cultural Resource Management (CRM).",
        prereq:"Registration in fourth year in Anthropology. Application Required.",
        times:"",
        associations:""
    },
    {
        title: "APPLMATH 1201B - CALC & PROBABILITY W BIO APPS",
        description:" Applications of integration, integration using mathematical software packages. Scaling and allometry. Basic probability theory. Fundamentals of linear algebra: vectors, matrices, matrix algebra. Difference and differential equations. Each topic will be illustrated by examples and applications from the biological sciences, such as population growth, predator-prey dynamics, age-structured populations.",
        prereq:"One or more of Calculus 1000A/B, Calculus 1500A/B or Mathematics 1225A/B",
        times:"",
        associations:"biology"
    },
    {
        title: "APPLMATH 1411A - LNR ALG NUM ANALYSIS FOR ENG",
        description:"Matrix operations, systems of linear equations, linear spaces and transformations, determinants, eigenvalues and eigenvectors, applications of interest to Engineers including diagonalization of matrices, quadratic forms, orthogonal transformations; introduction to MATLAB with applications from linear algebra. Restricted to students in the Faculty of Engineering.",
        prereq:"Ontario Secondary School MHF4U or MCV4U, or Mathematics 0110A/B.",
        times:"",
        associations:""
    },
    {
        title: "APPLMATH 1411B - LNR ALG NUM ANALYSIS FOR ENG",
        description:"Matrix operations, systems of linear equations, linear spaces and transformations, determinants, eigenvalues and eigenvectors, applications of interest to Engineers including diagonalization of matrices, quadratic forms, orthogonal transformations; introduction to MATLAB with applications from linear algebra. Restricted to students in the Faculty of Engineering.",
        prereq:"Ontario Secondary School MHF4U or MCV4U, or Mathematics 0110A/B.",
        times:"",
        associations:""
    },
    {
        title: "APPLMATH 1413 - APP MATH FOR ENGRS I",
        description:" Limits, continuity, differentiation of functions of one variable with applications, extreme values, integration, the fundamental theorem of calculus, methods and applications of integration to areas, volumes and engineering applications. Sequences and series, convergence, power series. Vector functions, partial differential calculus, gradients, directional derivatives and applications. Restricted to students in the Faculty of Engineering.",
        prereq:"One or more of Ontario Secondary School MHF4U, MCV4U, or Mathematics 0110A/B.",
        times:"",
        associations:""
    },
    {
        title: "APPLMATH 2270A - APPLIED MATH FOR ENGINEER II",
        description:"Topics include first order ODE's of various types, higher order ODE's and methods of solving them, initial and boundary value problems, applications to mass-spring systems and electrical RLC circuits, Laplace transforms and their use for solving differential equations, systems of linear ODE's, orthogonal functions and Fourier.",
        prereq:"Applied Mathematics 1411A/B and Applied Mathematics 1413.",
        times:"",
        associations:""
    },
    {
        title: "APPLMATH 2270B - APPLIED MATH FOR ENGINEER II",
        description:"Topics include first order ODE's of various types, higher order ODE's and methods of solving them, initial and boundary value problems, applications to mass-spring systems and electrical RLC circuits, Laplace transforms and their use for solving differential equations, systems of linear ODE's, orthogonal functions and Fourier.",
        prereq:"Applied Mathematics 1411A/B and Applied Mathematics 1413.",
        times:"",
        associations:""
    },
    {
        title: "APPLMATH 2276B - APP MATH ELEC & MEC ENG III",
        description:"Topics covered include a review of orthogonal expansions of functions and Fourier series and transforms, multiple integration with methods of evaluation in different systems of coordinates, vector fields, line integrals, surface and flux integrals, the Green, Gauss and Stokes theorems with applications.",
        prereq:"Applied Mathematics 2270A/B.",
        times:"",
        associations:""
    },
    {
        title: "APPLMATH 2277B - APPL MATH CHEM & CIVIL ENG III",
        description:"Topics covered include a review of orthogonal expansions of functions and Fourier series, partial differential equations and Fourier series solutions, boundary value problems, the wave, diffusion and Laplace equations, multiple integration with methods of evaluation in different systems of coordinates, vector fields, line integrals, surface and flux integrals, the Green, Gauss and Stokes theorems with applications.",
        prereq:"Applied Mathematics 2270A/B.",
        times:"",
        associations:""
    },
    {
        title: "APPLMATH 2402A - ORDINARY DIFF EQUATIONS",
        description:"Introduction to first order differential equations, linear second and higher order differential equations with applications, complex numbers including Euler's formula, series solutions, Bessel and Legendre equations, existence and uniqueness, introduction to systems of linear differential equations.",
        prereq:"A minimum mark of 60% in Calculus 1301A/B, or a minimum mark of 55% in Calculus 1501A/B or Applied Mathematics 1413. Pre-or Corequisite(s): Mathematics 1600A/B or the former Linear Algebra 1600A/B.",
        times:"",
        associations:""
    },
    {
        title: "APPLMATH 2811B - LINEAR ALGEBRA II",
        description:"Vector space examples. Inner products, orthogonal sets including Legendre polynomials, trigonometric functions, wavelets. Projections, least squares, normal equations, Fourier approximations. Eigenvalue problems, diagonalization, defective matrices. Coupled difference and differential equations; applications such as predator-prey, business competition, coupled oscillators. Singular value decomposition, image approximations. Linear transformations, graphics.",
        prereq:"Applied Mathematics 1413 or Calculus 1301A/B or Calculus 1501A/B and a minimum mark of 60% in Mathematics 1600A/B or the former Linear Algebra 1600A/B, or Applied Mathematics 1411A/B.",
        times:"",
        associations:""
    },
    {
        title: "APPLMATH 2814G - NUMERICAL ANALYSIS",
        description:"Introduction to numerical analysis; polynomial interpolation, numerical integration, matrix computations, linear systems, nonlinear equations and optimization, the initial value problem. Assignments using a computer and the software package, Matlab, are an important component of this course.",
        prereq:"A minimum mark of 55% in Mathematics 1600A/B. Pre-or Corequisite(s): Calculus 2302A/B, Calculus 2402A/B or Calculus 2502A/B.",
        times:"",
        associations:""
    },
    {
        title: "APPLMATH 3413A - ADV APPL MATH MECH ENGINEERING",
        description:"Topics include: introduction to complex analysis; complex integration; Fourier series, integrals and transforms; boundary value problems; separation of variables; transform methods of solution for PDE's; applications to mechanical engineering. ",
        prereq:"Applied Mathematics 2270A/B and Applied Mathematics 2276A/B, or the former Applied Mathematics 2413.",
        times:"",
        associations:""
    },
    {
        title: "APPLMATH 3415A - ADV APPL MATH ELEC ENGINEERING",
        description:"Topics Include: introduction to complex analysis; complex integration; boundary value problems; separation of variables; Fourier series and transform methods of solution for PDE's, applications to electrical engineering.",
        prereq:"Applied Mathematics 2270A/B and 2276A/B, or the former Applied Mathematics 2415.",
        times:"",
        associations:""
    },
    {
        title: "APPLMATH 3611F - INTRO OBJECT ORIENTED SCIEN",
        description:"Basic introduction to C++ and the concept of object-oriented programming techniques. Applications to scientific computation applied to numerical methods, linear algebra and differential equations. Grade is largely based on projects and presentations.",
        prereq:"Calculus 1301A/B, Calculus 1501A/B, Applied Mathematics 1201A/B or Applied Mathematics 1413. Pre-or Corequisite(s): Applied Mathematics 2402A, or Applied Mathematics 2811B, or Applied Mathematics 2814F/G, or Statistical Sciences 2857A/B.",
        times:"",
        associations:""
    },
    {
        title: "APPLMATH 3811A - COMPLEX VARIABLES WITH APPLCT",
        description:"Functions of a complex variable, analytic functions, integration in the complex plane, Taylor and Laurent series, analytic continuation, Cauchy's theorem, evaluation of integrals using residue theory, applications to Laplace transforms, conformal mapping and its applications",
        prereq:"Calculus 2303A/B or Calculus 2503A/B.",
        times:"",
        associations:""
    },
    {
        title: "APPLMATH 3813B - NONLINEAR ORDINARY DIFF EQS",
        description:"Existence and uniqueness of solutions, phase space, singular points, stability, periodic attractors, Poincaré-Bendixson theorem, examples from physics, biology and engineering, frequency (phase) locking, parametric resonance, Floquet theory, stability of periodic solutions, strange attractors and chaos, Lyapunov exponents, chaos in nature, fractals.",
        prereq:"Applied Mathematics 2402A or the former Differential Equations 2402A; Calculus 2303A/B or Calculus 2503A/B and Mathematics 1600A/B or the former Linear Algebra 1600A/B.",
        times:"",
        associations:""
    },
    {
        title: "APPLMATH 3815A - PARTIAL DIFFERENTL EQUATIONS I",
        description:"Boundary value problems for Laplace, heat, and wave equations; derivation of equations; separation of variables; Fourier series; Sturm-Liouville Theory; eigenfunction expansions; cylindrical and spherical problems; Legendre and Bessel functions; spherical harmonics; Fourier and Laplace transforms.",
        prereq:"(i) Mathematics 1600A/B; Applied Mathematics 2402A; Calculus 2303A/B or Calculus 2503A/B; or (ii) Calculus 2402A/B and Statistical Sciences 2503A/B. In each course a minimum mark of 60% is required.",
        times:"",
        associations:""
    },
    {
        title: "APPLMATH 3911G - MODELLING AND SIMULATION",
        description:"Basic principles of modelling and simulation, description and treatment of deterministic and random processes, computational methods and applications with emphasis on the use of computers. The course includes a major project.",
        prereq:"None",
        times:"",
        associations:""
    },
    {
        title: "APPLMATH 4615F - INTRO TO APP COMPUTER ALGEBRA",
        description:"Strengths and limitations of computer algebra systems (CAS); complexity of exact computations versus possible instability of numerical computations; selecta from Groebner bases, resultants, fractional derivatives, Risch integration algorithm, special functions including the Lambert W function. The emphasis is on preparing the student to use CAS in mathematics, science, and engineering.",
        prereq:"Applied Mathematics 2814F/G or the former Applied Mathematics 2413, the former Applied Mathematics 2415",
        times:"",
        associations:""
    },
    {
        title: "APPLMATH 4617B - NUMERICAL SOLUTION, P.D.E.",
        description:"Finite difference methods, stability analysis for time-dependent problems. ",
        prereq:"Applied Mathematics 2814F/G or the former Applied Mathematics 2413. Pre-or Corequisite(s): Applied Mathematics 3413A/B, Applied Mathematics 3415A/B or Applied Mathematics 3815A/B.",
        times:"",
        associations:""
    },
    {
        title: "ARABIC 1030 - ARABIC FOR BEGINNERS",
        description:"For students with no previous knowledge of Arabic, this course introduces spoken and written Modern Standard Arabic with emphasis on the development of communicative skills. Prepares students for progression directly to Arabic 2250.",
        prereq:"None",
        times:"",
        associations:""
    },
    {
        title: "ARABIC 1035 - BEGINNER ARABIC",
        description:"For students with some background in Arabic (heritage speakers), this course develops communicative skills and the ability to use Modern Standard Arabic. Prepares students for progression into Arabic 2250. Students are enrolled on the basis of a placement test.",
        prereq:"None",
        times:"",
        associations:""
    },
    {
        title: "ARABIC 1070A - QURANIC ARABIC FOR BEGINNERS",
        description:"An introduction to Quranic Arabic for beginners with no previous knowledge of the Arabic language. Learn the script of the Qur’an, acquire core vocabulary necessary to understand short Quranic chapters, and dive into basic grammar of classical Arabic.",
        prereq:"None",
        times:"",
        associations:""
    },
    {
        title: "ARABIC 2080B - INTERMEDIATE QURANIC ARABIC",
        description:"This course builds upon Quranic Arabic for Beginners 1070A/B. The focus is to expand Quranic vocabulary and to acquire a familiarity with more complex grammatical structures through studying Quranic texts. By the end of this course, students will have acquired the key principles of Quranic grammar.",
        prereq:"Arabic 1070A/B, or permission of the instructor.",
        times:"",
        associations:""
    },
    {
        title: "ARABIC 2250 - INTERMEDIATE ARABIC",
        description:"This course is designed to build upon skills in reading and speaking Arabic developed in earlier courses. Students will gain increased vocabulary and a greater understanding of more complex grammatical structures. They will be able to approach prose, fiction, and non-fiction written in the language.",
        prereq:"Arabic 1030, Arabic 1035 or Grade 12U Arabic, or permission of the Department.",
        times:"",
        associations:""
    },
    {
        title: "AH 1642A - HISTORY OF ART & VISUAL CULTUR",
        description:"An introductory visual and historical survey with a focus on Western art from the Baroque period to Contemporary times. The course provides a study of painting, sculpture, architecture, and other forms of media through considerations of the cultural environments within which they were produced. Students will gain a working knowledge of terms, methodologies, and themes in art history. ",
        prereq:"None",
        times:"",
        associations:"random"
    },
    {
        title: "AH 1648B - COLLECTING ART AND CULTURE",
        description:"This introductory course serves as a starting point to study the foundations of art history. It focuses on historical and contemporary practices of collecting art and cultural objects and introduces key principles of museum and curatorial studies. ",
        prereq:"None",
        times:"",
        associations:""
    },
    {
        title: "AH 2600F - THEORIES & PRAC OF ART HIST",
        description:"A brief introduction to historical and contemporary theories, methods, and practices for the study of art history and visual culture.",
        prereq:" Registration in years 2 - 4 of a Department of Visual Arts Module, or permission of the department.",
        times:"",
        associations:""
    },
    {
        title: "AH 2632G - CANADIAN ART",
        description:"An introduction to the visual arts of Canada in the 20th century, including First Nations and Inuit art, cultural policy, and collecting and curatorial practices in Canada. Key movements in Canadian art are discussed in relation to the social and political context. ",
        prereq:"1.0 from Art History 1640 or two of Art History 1641A/B-1648A/B, or the former VAH 1040 or two of the former VAH 1041A/B–1045A/B, or 1.0 essay course from Arts and Humanities, FIMS, or Social Science, or permission of the Department.",
        times:"",
        associations:""
    },
    {
        title: "AH 2636F - BAROQUE IN EUROPE & IBERIAN",
        description:"A survey of Baroque and Iberian colonial-era art and architecture. Lectures will consider cultural connections between the Spanish and Portuguese Baroque styles and the colonial exchanges linking Europe, the Americas, Asia and other continental connections.",
        prereq:"1.0 from Art History 1640 or two of Art History 1641A/B-1648A/B, or the former VAH 1040 or two of the former VAH 1041A/B–1045A/B, or Medieval Studies 1022, Medieval Studies 1025A/B or Medieval Studies 1026A/B, or 1.0 essay course from Arts and Humanities, FIMS, or Social Science, or permission of the Department.",
        times:"",
        associations:""
    },
    {
        title: "AH 2676F - INTRODUCTION TO DESIGN",
        description:"This course examines the history and practice of modern design from the end of the 19th century to the present day. It outlines some of the fundamental principles of design, as well as looking at its political and sociocultural impact.",
        prereq:"1.0 from Art History 1640 or two of Art History 1641A/B-1648A/B, or the former VAH 1040 or two of the former VAH 1041A/B–1045A/B, or 1.0 essay course from Arts and Humanities, FIMS, or Social Science, or permission of the Department.",
        times:"",
        associations:"random"
    },
    {
        title: "AH 3660G - HOLLYWOOD AND ART",
        description:"This course explores the relationship between film and the visual arts, from the invention of cinema to contemporary visual artists who have made Hollywood film the subject of their work.",
        prereq:"Registration in years 3 or 4 of a Department of Visual Arts Module, or permission of the Department.",
        times:"",
        associations:"random"
    },
    {
        title: "ARTHUM 1020E - INTRO TO THE ARTS & HUMANITIES",
        description:"A combined historical and thematic survey of select fields that comprise the Humanities and the various approaches and methods they employ in furthering our understanding of the human experience. The various forms of communication used in the arts will also be examined",
        prereq:"Admission to the School for Advanced Studies in Arts and Humanities",
        times:"",
        associations:""
    },
    {
        title: "ARTHUM 2200E - CRITICAL THEORIES - ARTS & HUM",
        description:"This course addresses contemporary theories and historical approaches currently used in the Arts and Humanities. The course aims to provide a foundation for critical thought by exploring how different disciplines understand and interpret texts, objects, and historical contexts.",
        prereq:"75% or higher in Arts and Humanities 1020E.",
        times:"",
        associations:""
    },
    {
        title: "ARTHUM 2220F - EFFECTIVE CMN IN THE ARTS&HUM",
        description:"This course examines the critical forms and strategies of writing and speaking in the Arts and Humanities by studying the principles and practices of rhetoric, argumentation, stylistic clarity, editing/rewriting, with an eye to students' professional as well as academic development. ",
        prereq:"75% or higher in Arts and Humanities 1020E.",
        times:"",
        associations:""
    },
    {
        title: "ARTHUM 2230G - DIGITAL TOOLS, DIGITAL LIT",
        description:"This course examines the evolution of information systems and the impact of digital technologies on research in the Arts and Humanities through a hands-on examination of databases, search engines, and online archives; text mining and analysis tools; visualization, bibliography and citation software; social media, blogging, and website design and creation.",
        prereq:"75% or higher in Arts and Humanities 1020E.",
        times:"",
        associations:""
    },
    {
        title: "ARTHUM 3000A - INTERNSHIP",
        description:"Academic Internship may be paid or unpaid, credit internship for up to four months, or a minimum of 140 hours. Students may pursue an internship within an approved institution or industry related to their module within the Faculty of Arts and Humanities. Extra Information: International students should consult with the Faculty’s academic counselling office to confirm eligibility. The student is required to a) maintain a suitable level of performance in the position as verified by the employer through evaluations and b) submit a mid-term as well as a final report, demonstrating how the experience gained through the internship relates to his/her coursework and program of study.",
        prereq:"Registration in the third or fourth year of either a Major or Specialization within the Faculty of Arts and Humanities, with a cumulative average of at least 70% and no failures. Approval of the Department and Dean’s Office of the Arts and Humanities.",
        times:"",
        associations:""
    },
    {
        title: "ASTRONOM 1021 - GENERAL ASTRONOMY",
        description:"A general survey of astronomy including: the solar system and its constituents; stars, their basic properties and evolution; systems of stars including clusters, the milky way and other galaxies; the universe, its past, present and future structure; astronomical instruments; topics of current interest including pulsars, quasars, black holes.",
        prereq:"None",
        times:"",
        associations:""
    },
    {
        title: "ASTRONOM 2020F - TWO-EYED SEEING AND ASTRONOMY",
        description:"An introduction to the intersection between Indigenous and Western astronomy, particularly as it relates to naked-eye observations of the night sky; using astronomy as a gateway to learn more about Indigenous culture, history, and the process of decolonization and reconciliation.",
        prereq:"None",
        times:"",
        associations:"random"
    },
    {
        title: "ASTRONOM 2021A - SEARCH FOR LIFE IN THE UNIVERS",
        description:"This course is designed for non-science students as an introduction to current scientific thinking on the possibility of extraterrestrial life and intelligence. Ideas, observations, and experiments from the frontiers of many areas of science converge in this unique interdisciplinary field. Emphasis will be on topics of current interest, including searches for life in our Solar System, detection of extrasolar planets, and the origins of life on Earth.",
        prereq:"NOT AVAILABLE TO STUDENTS REGISTERED IN THE FACULTY OF SCIENCE EXCEPT THOSE REGISTERED IN ANY ENVIRONMENTAL SCIENCE MODULE, MINOR IN CONCEPTUAL ASTRONOMY, OR MINOR IN PLANETARY SCIENCE AND SPACE EXPLORATION.",
        times:"",
        associations:""
    },
    {
        title: "ASTRONOM 2022B - THE ORIGIN OF THE UNIVERSE",
        description:"This course is designed for non-science students as an introduction to current ideas about the universe. Topics include the Big Bang, cosmic microwave background, origin of elements, and origin of galaxies, stars, and planetary systems.",
        prereq:"MAY NOT BE TAKEN FOR CREDIT BY STUDENTS IN THE FACULTY OF SCIENCE.",
        times:"",
        associations:""
    },
    {
        title: "ASTRONOM 2201B - PLANETARY SYSTEMS",
        description:"An examination of planets and their environments, both in our own Solar System and in planetary systems around other stars. Celestial mechanics; dynamics of the Earth; the Earth-Moon System; planets, including atmospheres and interiors; satellites; comets; meteors; the interplanetary medium; detection, origin and evolution of planetary systems.",
        prereq:"Physics 1028A/B or Physics 1301A/B or Physics 1401A/B or Physics 1501A/B) and (Physics 1029A/B or Physics 1302A/B or Physics 1402A/B or Physics 1502A/B); Calculus 1000A/B or Calculus 1500A/B, and Calculus 1501A/B (or Calculus 1301A/B with a minimum mark of 85%). Integrated Science 1001X with a minimum mark of 60% can be used in place of Physics 1302A/B and Calculus 1301A/B.",
        times:"",
        associations:""
    },
    {
        title: "ASTRONOM 2801A - OBSERVING THE STARS",
        description:"The properties of stars, the building blocks of the universe, and how we obtain their characteristics. The night sky, coordinates, detectors, telescopes, stellar magnitudes and fluxes, spectra, interaction of light and matter, Hertzsprung-Russell diagram, stellar evolution, and the Sun. Introduction to astrophysics, order of magnitude estimates, astronomical nomenclature and observations.",
        prereq:"(Physics 1028A/B or Physics 1301A/B or Physics 1401A/B or Physics 1501A/B) and (Physics 1029A/B or Physics 1302A/B or Physics 1402A/B or Physics 1502A/B); Calculus 1000A/B or Calculus 1500A/B, and Calculus 1501A/B (or Calculus 1301A/B with a minimum mark of 85%). Integrated Science 1001X with a minimum mark of 60% can be used in place of Physics 1302A/B and Calculus 1301A/B.",
        times:"",
        associations:""
    },
    {
        title: "ASTRONOM 3302A - ASTROPHYSICS INTRSTLLR SPACE",
        description:"The physics of interstellar space - the gas, dust, electromagnetic radiation, cosmic rays, and magnetic fields - present between the stars in a galaxy and between galaxies. Star formation, the interaction of light and matter, and the physical processes that determine the properties, dynamics, and behavior of the interstellar medium.",
        prereq:"Physics 2101A/B, Physics 2102A/B.",
        times:"",
        associations:""
    },
    {
        title: "ASTRONOM 4602B - GRAVITATNL ASTROPHYS & COSMLGY",
        description:"Introduction to gravity in astrophysics. Application of Newtonian gravitation to basic galactic dynamics and galactic structure. An introduction to general relativity with applications to black holes, cosmology, and the early universe.",
        prereq:"Physics 2101A/B and Physics 2102A/B, or the former Physics 2128A/B and the former Physics 2129A/B; Calculus 2503A/B.",
        times:"",
        associations:""
    },
    {
        title: "BIOCHEM 2280A - BIOCHEM & MOLEC BIOL",
        description:"An introduction to biochemistry with emphasis on protein structure and function, intermediary metabolism and nucleic acid structure and function.",
        prereq:"Either Biology 1001A or Biology 1201A and either Biology 1002B or Biology 1202B; Chemistry 1301A/B and Chemistry 1302A/B. Integrated Science 1001X can be used as a prerequisite in place of Biology 1002B and Chemistry 1302A/B.",
        times:"",
        associations:""
    },
    {
        title: "BIOCHEM 2288A - BIOCHEM & MOLECULAR BIOLOGY",
        description:" An introduction to biochemistry with emphasis on protein structure and function, intermediary metabolism and nucleic acid structure and function.",
        prereq:"Chemistry 1301A/B and Chemistry 1302A/B; Biology 1290B; and registration in senior years of Foods and Nutrition modules.",
        times:"",
        associations:""
    },
    {
        title: "BIOCHEM 3380G - BIOCHEMISTRY LABORATORY",
        description:"This course consists of a series of laboratory exercises designed to familiarize the student with the basic methods in biochemistry and molecular biology, and to demonstrate concepts taught in biochemistry lecture courses. Students will learn how to present their results in an acceptable scientific format.",
        prereq:"Biochemistry 3381A and Biochemistry 3382A.",
        times:"",
        associations:""
    },
    {
        title: "BIOCHEM 3381A - BIOLOGICAL MACROMOLECULES",
        description:"A consideration of the structure of proteins and nucleic acids; enzymology; elements of recombinant DNA technology and related methodology.",
        prereq:"A minimum mark of 65% in either Biochemistry 2280A or Biochemistry 2288A; a minimum mark of 60% in either Chemistry 2213A/B or Chemistry 2273A; and a minimum mark of 60% in either Chemistry 2223B or Chemistry 2283G.",
        times:"",
        associations:""
    },
    {
        title: "BIOCHEM 3382A - BIOCHEMICAL REGULATION",
        description:"Among the topics discussed will be principles of metabolic control, mechanisms of signal transduction, regulation of DNA replication, regulation of gene expression, and epigenetic mechanisms of gene regulation.",
        prereq:"A minimum mark of 65% in either Biochemistry 2280A or Biochemistry 2288A; a minimum mark of 60% in either Chemistry 2213A/B or Chemistry 2273A; and a minimum mark of 60% in either Chemistry 2223B or Chemistry 2283G",
        times:"",
        associations:""
    },
    {
        title: "BIOCHEM 3383F/G - INTRO TO BIOCHEMICAL RESEARCH",
        description:"Students carry out a research project under the direction of a faculty member, gaining practical experience in a biochemistry research laboratory. Experimental design, critical thinking, and scientific communication will be emphasized, and students will develop skills at reading and reviewing primary scientific literature.",
        prereq:"Permission of the Department. Pre-or Corequisite(s): Biochemistry 3381A and Biochemistry 3382A.",
        times:"",
        associations:""
    },
    {
        title: "BIOCHEM 3385A - HUMAN BIOCHEMISTRY",
        description:"A course dealing with Biochemical aspects of the human condition. Topics in human disease, medical testing, and lifestyle will be considered in a clinical-case-oriented fashion. The emphasis will be on structural and metabolic issues related to carbohydrates, lipids, vitamins, minerals, nucleic acids and proteins.",
        prereq:"A minimum mark of 65% in either Biochemistry 2280A or Biochemistry 2288A.",
        times:"",
        associations:""
    },
    {
        title: "BIOCHEM 3386B - CLINICAL BIOCHEMISTRY",
        description:"The application of biochemical and molecular principles to the analytical components used to select, evaluate and interpret tests for clinical diseases. Also included will be discussions on the specialized instruments required. Students will gain understanding of the practice of clinical biochemistry, as one of the disciplines of laboratory medicine.",
        prereq:"Either Biochemistry 2280A or Biochemistry 2288A with a mark of at least 65%.",
        times:"",
        associations:""
    },
    {
        title: "BIOCHEM 3390B - ADVANCED METHODS FOR BIOCHEM",
        description:"Students will explore the chemical and physical underpinnings of biochemical phenomena by solving practical, real-world, quantitative problems. Students will learn how to answer biochemical research questions by applying advanced experimental strategies and techniques, including methods in bioinformatics and the mining of biochemical databases.",
        prereq:"None",
        times:"",
        associations:""
    },
    {
        title: "BIOCHEM 3392G - SYNTHETIC BIOLOGY",
        description:"An introduction to the principles of synthetic biology. Students learn to retrieve and apply information from databases to design and model regulated biological circuits using standard components (Biobricks). Teams of students create, communicate, and defend original synthetic biology proposals.",
        prereq:"Biochemistry 2280A, Biology 2290F/G, Biology 2382A/B and Biology 2581A/B.",
        times:"",
        associations:""
    },
    {
        title: "BIOCHEM 4410A - MOLECULAR BIO DNA & RNA",
        description:"The use of fundamental techniques in molecular biology and molecular genetics are illustrated using examples from the classic and current literature. Selected topics include eukaryotic gene cloning, transgenic animals, rational drug design, DNA replication and cell cycle regulation.",
        prereq:"Biochemistry 3381A and Biochemistry 3382A.",
        times:"",
        associations:""
    },
    {
        title: "BIOCHEM 4415B - APPL SYNTHETIC BIO & CHEM GEN",
        description:"This course will explore how metabolic pathways are currently being re-engineered in microorganisms to produce drugs that are otherwise difficult to manufacture. We will also investigate how drug targets are being identified using newly developed chemical genetic screening methods. The impact of both approaches on medicine will be evaluated.",
        prereq:"Either (Biochemistry 3381A and Biochemistry 3382A) or (Biochemistry 2280A and one of Chemistry 3393A/B or Chemistry 4493A/B).",
        times:"",
        associations:""
    },
    {
        title: "BIOCHEM 4420A - MOLECULAR BIO OF PROTEINS",
        description:"Topics to be considered at an advanced level will include: translation, folding and assembly, targeting, turnover, structure and motifs.",
        prereq:"Prerequisite(s): Biochemistry 3381A.",
        times:"",
        associations:""
    },
    {
        title: "BIOCHEM 4425B - PROTEOMICS & PROTEIN BIOTECH",
        description:"The course will cover applied aspects of protein chemistry in biotechnology and protein design. Topics covered will include applications of modern analytical and biophysical techniques used in proteomics and related biochemical analyses, protein structure design, and antibody engineering.",
        prereq:"Biochemistry 4420A.",
        times:"",
        associations:"technology"
    },
    {
        title: "BIOCHEM 4450A - MOLECULAR GENETICS HUMAN CANCR",
        description:"Key cellular pathways that are frequently subverted in tumour cells leading to neoplasia will be discussed, as well as mechanisms by which environmental factors affect tumour development. Cancer models and molecular therapies will also be considered.",
        prereq:"Biology 2581A/B, Biochemistry 3381A.",
        times:"",
        associations:""
    },
    {
        title: "BIOCHEM 4455G - TRANSLATION IN CANCER BIOLOGY",
        description:"The translation of cancer research discoveries into clinical practice, emphasizing critical thinking, research design, evaluation of data from the literature and ethics. Students will engage with community partners associated with cancer research, patient support and care, and will work on a team project relevant to the partners’ needs.",
        prereq:"Biochemistry 4450A.",
        times:"",
        associations:""
    },
    {
        title: "BIOCHEM 4463B - MOLECULAR BASIS OF HUMAN DIS.",
        description:"This course applies knowledge of biochemistry and molecular biology to the understanding of human diseases. Topics of current interest are used as examples to explore the molecular mechanisms by which disease states arise and how this knowledge can be used to design therapies.",
        prereq:"Biochemistry 3381A.",
        times:"",
        associations:""
    },
    {
        title: "BIOLOGY 1001A - BIOLOGY FOR SCIENCE I",
        description:"The principles of biology taught using an integrative, question-based approach. Topics include inheritance, evolution and ecology. This course is intended for students registered in the Faculty of Science.",
        prereq:"Prerequisite(s): Grade 12U (SB14U) Biology or Grade 11U (SB13UA) Biology and permission of the Department. A minimum mark of 80% in Grade 12 U Biology (SB14U) is recommended for students registered in a faculty other than the Faculty of Science.",
        times:"",
        associations:""
    },
    {
        title: "BIOLOGY 1002B - BIOLOGY FOR SCIENCE II",
        description:"The principles of biology taught using an integrative, question-based approach. This course is primarily intended for students enrolled in the Faculty of Science. Topics include enzyme structure/function, membrane structure/function, bioenergetics, photosynthesis, respiration, molecular genetics. Antirequisite(s): Biology 1202B, Biology 1225. Extra Information: 2 lecture hours, 3 laboratory/tutorial hours.",
        prereq:"Prerequisite(s): Grade 12U (SB14U) Biology or Grade 11U (SB13UA) Biology and permission of the Department. A minimum mark of 80% in Grade 12U Biology (SB14U) is recommended for students registered in a faculty other than the Faculty of Science",
        times:"",
        associations:""
    },
    {
        title: "BIOLOGY 1201A - GENERAL BIOLOGY I",
        description:"This course provides an understanding of fundamental biological concepts with emphasis on function in and relevance to humans. Topics include inheritance, evolution, ecology, behaviour, ecosystem health. This course is not available to students enrolled in the Faculty of Science (students registered in the Faculty of Science should select Biology 1001A).",
        prereq:"Prerequisite(s): Grade 12U (SB14U) Biology or Grade 11U (SB13UA) Biology and permission of the Department.",
        times:"",
        associations:""
    },
    {
        title: "BIOLOGY 1202B - GENERAL BIOLOGY II",
        description:"This course provides an understanding of fundamental biological concepts with emphasis on function in and relevance to humans. Topics include molecular genetics, physiology, bioenergetics. This course is not available to students enrolled in the Faculty of Science (students registered in the Faculty of Science should select Biology 1002B).",
        prereq:"Prerequisite(s): Grade 12U (SB14U) Biology or Grade 11U (SB13UA) Biology and permission of the Department.",
        times:"",
        associations:""
    },
    {
        title: "BIOLOGY 1225 - BIOLOGY OF ORGANISMS",
        description:"A study of the whole organism with emphasis on organization, growth, development, integration, reproduction and heredity.",
        prereq:"None",
        times:"",
        associations:""
    },
    {
        title: "BIOLOGY 1290B - BIOLOGY AND MICROORGANISMS",
        description:"The fundamental principles of biology with emphasis on cell function and the role of microorganisms in public health, sanitation, food, and nutrition. Restricted to Food and Nutrition modules or by permission of the Department of Biology",
        prereq:"Prerequisite(s): Grade 12U (SBI4U) Biology.",
        times:"",
        associations:""
    },
    {
        title: "BIOLOGY 2217B - ECONOMIC BOTANY",
        description:"An introduction to economically important plants and their products, especially as sources of food, fuel, drugs and industrial raw materials. National and international programs relating to food and other plant resources.",
        prereq:"Either Biology 1001A or Biology 1201A and either Biology 1002B or Biology 1202B or Integrated Science 1001X; or registration in Foods and Nutrition modules.",
        times:"",
        associations:"biology"
    },
    {
        title: "BIOLOGY 2244A/B - ANALYSIS & INTERPRETATION",
        description:"An introductory course in the application of statistical methods, intended for students in departments other than Statistical and Actuarial Sciences, Applied Mathematics, Mathematics, or students in the Faculty of Engineering. Topics include sampling, confidence intervals, analysis of variance, regression and correlation.",
        prereq:"1.0 Mathematics course or equivalent numbered 1000 or above. Statistical Sciences 1024A/B can be used to meet 0.5 of the 1.0 mathematics course requirement.",
        times:"",
        associations:""
    },
    {
        title: "BIOLOGY 2290F/G - SCIENTIFIC METHOD BIOLOGY",
        description:"A laboratory course designed to promote understanding of the scientific method by acquainting students with selected technical and conceptual tools that will enable them to generate, analyze and communicate data from experimental investigations of their own design in the areas of cell biology, population biology and genetics.",
        prereq:"A minimum mark of 60% in either Biology 1001A or Biology 1201A and a minimum mark of 60% in either Biology 1002B or Biology 1202B or Integrated Science 1001X.",
        times:"",
        associations:""
    },
    {
        title: "BIOLOGY 2382B - CELL BIOLOGY",
        description:"Molecular and structural organization of cells in relation to function. Composition and dynamics of the plasma membrane and membrane-bound compartments in cells. Synthesis and trafficking of proteins. Cytoskeleton and cell motility. Membrane receptors in signal and energy transduction, cell-cell adhesion and recognition. Excitable membranes. ",
        prereq:"Either Biology 1001A or Biology 1201A and either Biology 1002B or Biology 1202B; Chemistry 1301A/B and Chemistry 1302A/B. Integrated Science 1001X with a minimum mark of 60% can be used as a prerequisite in place of Biology 1002B and Chemistry 1302A/B.",
        times:"",
        associations:""
    },
    {
        title: "BIOLOGY 2483A - ECOLOGY",
        description:"An introduction to ecology, the scientific study of the interactions that determine the distribution and abundance of plants, animals, and microorganisms. Ecological concepts at the organism, population and ecosystem levels will be considered, including tolerance limits, life history evolution, competition, predation, population growth and control, and ecosystem dynamics.",
        prereq:"A minimum mark of 60% in either Biology 1001A or Biology 1201A and a minimum mark of 60% in either Biology 1002B or Biology 1202B or Integrated Science 1001X.",
        times:"",
        associations:""
    },
    {
        title: "BIOLOGY 2485B - ENVIRONMENTAL BIOLOGY",
        description:"Basic principles of environmental biology, human ecology, ecosystem structure and function. Human population growth and its impact on soil, water, energy, agriculture and natural populations of plants and animals. Environmental problems created by resource exploitation and possible solutions.",
        prereq:"Either Biology 1001A or Biology 1201A and either Biology 1002B or Biology 1202B or Integrated Science 1001X.",
        times:"",
        associations:""
    },
    {
        title: "BIOLOGY 2581B - GENETICS",
        description:"The structure, transmission and expression of genetic elements in prokaryotic and eukaryotic organisms and populations.",
        prereq:"A minimum mark of 60% in either Biology 1001A or 1201A and a minimum mark of 60% in either Biology 1002B or 1202B or Integrated Science 1001X; Biochemistry 2280A.",
        times:"",
        associations:""
    },
    {
        title: "BIOLOGY 2601A - ORGANISMAL PHYSIOLOGY",
        description:"This course provides a general background in the mechanisms and consequences of physiological processes in plants and animals. It will take an integrated approach and include a comparative context, wherever possible. It will include hands-on laboratory work with both plants and animals.",
        prereq:"A minimum mark of 60% in either Biology 1001A or Biology 1201A and a minimum mark of 60% in either Biology 1002B or Biology 1202B or Integrated Science 1001X.",
        times:"",
        associations:""
    },
    {
        title: "BIOLOGY 3218G - BIOLOGY OF THE FUNGI",
        description:"This course provides an introduction to the fungi with emphasis on their biology, ecology, genetics and interactions with other organisms, including humans and their crops. Emphasis is on the true fungi, including yeasts, with brief treatment of other fungus-like microbes of the Kingdoms Chromalveolata and Amoebozoa.",
        prereq:"At least 1.0 course in Biology at the 2200-level or higher.",
        times:"",
        associations:""
    },
    {
        title: "BIOLOGY 3220Z - FIELD STUDIES IN BIOLOGY",
        description:"Permission of the Department of Biology. See the departmental office in January of each year for list of offerings, requirements, and credits. This course may be used as a half laboratory course.",
        prereq:"Specialized field courses given by biologists from Ontario universities at various times during the year. Students should be prepared to meet travel and living expenses. Extra Information: Sessions and hours by arrangement.",
        times:"",
        associations:""
    },
    {
        title: "BIOLOGY 3229G - ANIMAL DIVERSITY",
        description:" An introduction to animal phyla focused on understanding the diversity of body plans across the animal kingdom. Characteristics defining major animal groups, and key evolutionary designs and innovations are discussed in relation to ecology and life habits. Both extant, and some fossil, forms will be considered to illustrate animal evolution.",
        prereq:"At least 1.0 course from: Biology 2290F/G, Biology 2382A/B, Biology 2483A/B, Biology 2581A/B, Biology 2601A/B and registration in third or fourth year.",
        times:"",
        associations:""
    },
    {
        title: "BIOLOGY 3230F - FIELD RESEARCH IN BIOLOGY",
        description:"This field course provides a theoretical and hands-on introduction to the planning and execution of field studies in biology using quantitative tools. A breadth of study organisms and systems will be covered. This course includes four or five field trips during the lab and lecture timeslots.",
        prereq:"A minimum mark of 60% in Biology 1001A or Biology 1201A, and Biology 1002B or Biology 1202B or Integrated Science 1001X, and Biology 2244A/B or Statistical Science 2244A/B.",
        times:"",
        associations:""
    },
    {
        title: "BIOLOGY 3316B - ADVANCED CELL BIOLOGY",
        description:"The functional organization and physiology of cells with special reference to cellular membranes, energetics, cell motility, cell specializations, and cell-cell interactions. The course is based on the interpretation of experimental observations.",
        prereq:"Biochemistry 2280A; Biology 2382A/B",
        times:"",
        associations:""
    },
    {
        title: "BIOLOGY 3326F - CELL BIOLOGY LABORATORY",
        description:"Training in current cell biological methods such as tissue culture, cell fractionation, computer-assisted microscopic analysis and immunocytochemistry.",
        prereq:"Biology 2290F/G, Biochemistry 2280A; a minimum mark of 70% in Biology 2382A/B.",
        times:"",
        associations:""
    },
    {
        title: "BIOLOGY 3338A - DEVELOPMENTAL BIOLOGY",
        description:"Principles underlying the molecular, biochemical, and cellular mechanisms by which an organism develops. Classic and contemporary perspectives in embryology and development.",
        prereq:"Biochemistry 2280A; Biology 2581A/B, and Biology 2382A/B.",
        times:"",
        associations:""
    },
    {
        title: "BIOLOGY 3355B - MOLECULAR CELL BIO OF STRESS",
        description:"This course will cover a range of environmental, physiological, and pathological stresses common to animal systems. The focus will be on evolutionary conserved cell stress responses, individual signaling pathways and the molecules controlling the action of specific stress stimuli.",
        prereq:"Biology 2382A/B.",
        times:"",
        associations:""
    },
    {
        title: "BIOLOGY 3415G - AQUATIC ECOLOGY",
        description:"This course examines water as a habitat for life and the ecology of freshwater and marine environments. Emphasis will be placed on the diversity and roles of zooplankton and microorganisms in aquatic ecosystems. Ecological impacts of ocean acidification, invasive species, and eutrophication will also be examined.",
        prereq:"Biology 2483A/B.",
        times:"",
        associations:""
    },
    {
        title: "BIOLOGY 3435G - ANIMAL ECOLOGY",
        description:"Key concepts in applied, individual-based animal ecology: limiting factors and the ecological niche, habitat selection, ecological traps, movement, dispersal, migration, growth and bioenergetics, and physiological flexibility. Labs will integrate field-based and quantitative approaches in the study of individual-based ecology.",
        prereq:"Biology 2483A/B; and Biology 2244A/B or Statistical Sciences 2244A/B with a minimum grade of 60%.",
        times:"",
        associations:""
    },
    {
        title: "BIOLOGY 3436F - ANIMAL BEHAVIOUR",
        description:"Introduction to the science of animal behavior with emphasis on the evolution and adaptive nature of behavior. A comparative experimental approach is used to illustrate topics such as the development, control, and organization of behavior, foraging, predation, mate choice, mating systems, parental care, communication, and social behavior.",
        prereq:"One of the following: Biology 2244A/B, Statistical Sciences 2244A/B, Psychology 2810. Pre-or Corequisite(s): Biology 2483A/B.",
        times:"",
        associations:""
    },
    {
        title: "BIOLOGY 3440A - ECOLOGY OF POPULATIONS",
        description:"Knowing how many individuals of a given species there are and identifying the factors that cause population numbers to change is fundamental for conservation, fisheries, forestry, and managing everything from pest insects to pandas. This course combines the central tenets of population ecology with hands-on techniques for its practical application.",
        prereq:"Biology 2483A/B; One of Biology 2244A/B, Psychology 2810, or Statistical Sciences 2244A/B.",
        times:"",
        associations:""
    },
    {
        title: "BIOLOGY 3442F - CONSERVATION BIOLOGY",
        description:"This course introduces fundamental concepts and issues in conservation biology. We explore the three prongs of conservation including: (1) the science involved in conserving biodiversity; (2) the political systems that directly affect conservation; (3) how to access the political system to maximize the probability of implementing conservation programs.",
        prereq:"Biology 2483A/B.",
        times:"",
        associations:""
    },
    {
        title: "BIOLOGY 3444A - MOLECULAR ECOLOGY",
        description:"An introduction to the use of molecular tools in addressing both basic and applied questions in ecological research, including population, behavioural, community and ecosystem ecology. Lectures and student-led seminars develop basic knowledge and theory underlying molecular ecology, and present many recent case studies from the primary literature.",
        prereq:"Biology 2483A/B, Biology 2581A/B.",
        times:"",
        associations:""
    },
    {
        title: "BIOLOGY 3445F - COMMUNITY ECOLOGY",
        description:"An integrative approach to ecology, stressing the structure and function of communities. Theoretical explanations for community assembly/disassembly, patterns in space and time, and emergent properties of stability and productivity are evaluated using a variety of community types as examples.",
        prereq:"Biology 2483A/B; and Biology 2244A/B or Statistical Sciences 2244A/B with a minimum grade of 60%.",
        times:"",
        associations:""
    },
    {
        title: "BIOLOGY 3446B - WILDLIFE ECOLOGY/MGMT",
        description:"The application of ecological principles to the management of wildlife species. Topics include techniques, harvest, predation, habitat loss and management, stocking and reintroductions, and economics of wildlife. Identification and biology of game, pest and furbearing species in laboratories; films are used frequently.",
        prereq:"Biology 2483A/B.",
        times:"",
        associations:""
    },
    {
        title: "BIOLOGY 3466B - EVOLUTIONARY GENETICS",
        description:"The study of evolution in large and small random and non-random mating populations, showing discrete and quantitative inheritance. The roles and importance of mutation, inbreeding, drift, selection and linkage.",
        prereq:"One of Biology 2244A/B, Statistical Sciences 2244A/B, Psychology 2810; Biology 2581A/B; or permission of the Department.",
        times:"",
        associations:""
    },
    {
        title: "BIOLOGY 3484B - PATTERNS IN DIVERSITY OF LIFE",
        description:"This course considers the large-scale patterns in the Earth's biota: patterns in life's diversification and extinction, changing the biota through time; patterns in the form and functioning of organisms, reflected in biological classification; patterns in the global distribution of life's lineages, and in their major responses to Earth's diverse climate.",
        prereq:"At least 1.0 course from: Biology 2290F/G, Biology 2382A/B, Biology 2483A/B, Biology 2581A/B, Biology 2601A/B and registration in third or fourth year.",
        times:"",
        associations:""
    },
    {
        title: "BIOLOGY 3592A - PRINC OF HUMAN GENETICS",
        description:"Genetic principles and their application to humans. Special attention will be directed to the genetic variation in our species, mutations, mechanisms of gene expression, and mapping the human genome.",
        prereq:"Biochemistry 2280A; Biology 2581A/B.",
        times:"",
        associations:""
    },
    {
        title: "BIOLOGY 3593B - GENETIC ENGINEERING",
        description:"An accounting of the principles in genetics that have led to advances in animal and plant breeding earlier in this century; recombinant DNA and other technologies employed in contemporary biotechnology; and the basis for continued progress in genetic engineering.",
        prereq:"Biochemistry 2280A; Biology 2581A/B.",
        times:"",
        associations:""
    },
    {
        title: "BIOLOGY 3594B - DNA:GENOME ORG, MUTAGEN & RPR",
        description:"This course will cover concepts related to DNA organization, replication, mutagenesis and repair in both prokaryotic and eukaryotic organisms. Lecture topics will include current literature in DNA mutagenesis and repair designed to permit direct examination of concepts, experimental design, methodology, data analysis and future trends.",
        prereq:"Biochemistry 2280A; Biology 2581A/B.",
        times:"",
        associations:""
    },
    {
        title: "BIOLOGY 3595B - ADVANCED GENETICS",
        description:"This course will use examples from diverse biological systems to expand basic genetic principles such as mutation, recombination, gene and genome evolution, complex inheritance and functional genomics. Current research information will be used to inform discussion of the implication and applications of these topics.",
        prereq:"A minimum grade of 70% in Biology 2581A/B.",
        times:"",
        associations:""
    },
    {
        title: "BIOLOGY 3596A/B - GENOMICS & BEYOND: A LAB COURSE",
        description:"A practical introduction to modern experimental approaches in genetics and molecular biology as applied to such topics as genomics (gene identification and classification), functional genomics (genome expression profiles) and bioinformatics (computational genomic analysis).",
        prereq:"A minimum mark of 70% in each of Biology 2290F/G and Biology 2581A/B.",
        times:"",
        associations:""
    },
    {
        title: "BIOLOGY 3597A - REGULATION OF GENE EXPRESSION",
        description:"A discussion of the genetic material and molecular mechanisms governing its expression in a variety of organisms.",
        prereq:"Biochemistry 2280A; Biology 2581A/B.",
        times:"",
        associations:""
    },
    {
        title: "BIOLOGY 3598A - BEHAVIOURAL GENETICS",
        description:"The roles of genes and genetic variation in the evolution and expression of animal behaviour are examined. Major themes include the population genetics and quantitative genetics of behaviour, the molecular biology of gene discovery, and the evolution of behavioural traits, including social traits, as studied through vertebrate and invertebrate model systems.",
        prereq:"Biology 2581A/B.",
        times:"",
        associations:""
    },
    {
        title: "BIOLOGY 3601A - ANIMAL PHYSIOLOGY I",
        description:"This course will examine the form and function of physiological and biochemical systems in the vast diversity of non-human animals. It will emphasize the importance of phylogeny and environmental selective pressures on the evolution of these systems.",
        prereq:"A minimum mark of 60% in Biology 2601A/B.",
        times:"",
        associations:""
    },
    {
        title: "BIOLOGY 3602B - ANIMAL PHYSIOLOGY II",
        description:"This course explores the mechanisms, integration and evolution of physiological and biochemical systems within animals. By using a comparative approach, we will explore the diversity of evolutionary 'strategies' adopted by phylogenetically distinct animals. Animals thriving in extreme environments will be featured. Human physiology will be discussed only briefly.",
        prereq:"A minimum mark of 60% in Biology 2601A/B",
        times:"",
        associations:""
    },
    {
        title: "BIOLOGY 3603A - ECOPHYSIOLOGY OF PLANTS",
        description:"This course introduces students to the physiological mechanisms governing the success and distribution of plants in different environments. Specific topics covered will include leaf energy balance, photosynthesis, water transport and mineral nutrition. This course will provide background information for further courses in plant ecology or plant physiology.",
        prereq:"Biology 2601A/B.",
        times:"",
        associations:""
    },
    {
        title: "BIOLOGY 3625G - TECHNQUES IN PHYSIOL & BIOCHEM",
        description:"Training in current techniques used in physiology and biochemistry. Emphasis is placed on the functional integration of systems from the molecules to the whole organism level and the assignment of function to genes. Techniques include chromatography, electrophoresis, protein and nucleic acid blotting, enzyme assays and whole organism or organelle measurements.",
        prereq:"Biochemistry 2280A; Biology 2290F/G; Biology 2382A/B; one of Biology 2601A/B, Physiology 3120 or Physiology 3140A.",
        times:"",
        associations:""
    },
    {
        title: "BIOLOGY 3660B - PLANT METABOLISM",
        description:"Plants are photoautotrophs and biosynthesize all of their metabolites using CO2, water, micronutrients and sunlight. This course surveys the major metabolic pathways of plants, including primary (C, N, S and P assimilation, amino acid and nucleotide biosynthesis) and secondary (alkaloids, phenolics, terpeniods) metabolism, with emphasis on enzyme and pathway regulation.",
        prereq:"Biology 2601A/B or permission of the Department.",
        times:"",
        associations:""
    },
    {
        title: "BIOLOGY 4218A - PLANT PATHOLOGY",
        description:"Plant diseases caused by abiotic and biotic factors with emphasis on effects of important pathogenic viruses, bacteria and fungi. Relationships between host, pathogen and environmental factors, epidemiology and methods of control.",
        prereq:"Biology 3218F/G, or permission of the Department.",
        times:"",
        associations:""
    },
    {
        title: "BIOLOGY 4230A - ECOSYSTEM HEALTH",
        description:"A characterization of ecosystems, contaminants, and the human health concerns. Course material will cover the production, transport, transformation and fate of environmental contaminants, with an emphasis on their anthropogenic impacts. Emphasis will include the assessment of human health exposure and biomarkers of environmentally associated disease.",
        prereq:"None",
        times:"",
        associations:""
    },
    {
        title: "BIOLOGY 4259F - RESEARCH HYPOTHESIS TESTING",
        description:"This course will equip students with some of the basics of experimental design and statistical analysis useful for understanding, conducting and presenting biological research. The emphasis is on practical application rather than theory, and on problems of particular concern in biological studies.",
        prereq:"Biology 2244A/B or Statistical Sciences 2244A/B (see note); and completion of at least 1.5 Biology courses at the 3000-level or above.",
        times:"",
        associations:""
    },
    {
        title: "BIOLOGY 4260B - CELLULAR SYSTEMS BIOLOGY",
        description:"This course focuses on using interdisciplinary systems-level methods to understand both biochemical reaction networks and gene regulatory networks. The application of systems level knowledge to the emerging discipline of synthetic biology also forms a major component of the course.",
        prereq:"Completion of at least 1.5 Biology courses at the 3000 level or above.",
        times:"",
        associations:""
    },
    {
        title: "BIOLOGY 4289B - BIOSYSTEMATICS & PHYLOGENETICS",
        description:"An overview of modern approaches to the classification and identification of living organisms, dealing with such topics as molecular evolution, the theory of biological systematics, phylogenetics, DNA fingerprinting, the Tree of Life and Barcoding projects, and bioinformatics.",
        prereq:"Biology 2581A/B and completion of at least 1.5 Biology courses at the 3000 level or above.",
        times:"",
        associations:""
    },
    {
        title: "BIOLOGY 4338G - ADV DEVELOPMENTAL BIOLOGY",
        description:"An analysis of specific topics in the embryology and development of model organisms. The course will focus primarily on genetic and biochemical pathways which have been conserved between distantly related organisms.",
        prereq:"A minimum grade of 75% in Biology 3338A/B.",
        times:"",
        associations:""
    },
    {
        title: "BIOLOGY 4355F - THE BIOLOGY OF AGING",
        description:"Aging is an extremely complex multifactoral process governed by genetic, epigenetic and environmental factors. This course will explore current topics including: model organisms to study aging, identification of 'aging genes', longevity variation among different species, signalling pathways and the role of reactive oxygen species in aging and age-associated diseases. ",
        prereq:"Biology 3316A/B and enrollment in Year 4 of an Honors Specialization module offered through the Department of Biology or the Basic Medical Science departments.",
        times:"",
        associations:"random"
    },
    {
        title: "BIOLOGY 4405B - ECOSYSTEM ECOLOGY",
        description:"This course traces the flow of water, energy, and nutrients from their abiotic origins, to their cycles through microbes, plants, and animals. This course will synthesize current advances in ecology with established theory to offer a comprehensive survey of ecosystem pattern and process.",
        prereq:"Biology 2483A/B and 0.5 Biology course at the 3000-level.",
        times:"",
        associations:""
    },
    {
        title: "BIOLOGY 4410F - RESTORATION ECOLOGY",
        description:"The theory and practice of restoration of habitats for native biodiversity. Topics include ecosystem functioning and relationships at various spatial scales as applied to restoration, invasive species management and reclamation of contaminated sites. The value of ecosystem services, financial and practical considerations will be discussed.",
        prereq:"Biology 3442F/G and Biology 3445F/G.",
        times:"",
        associations:""
    },
    {
        title: "BIOLOGY 4412G - BIODIVERSITY SCIENCE",
        description:"A consideration of the major aspects of biodiversity, including the approaches and techniques used for its measurement, assessment, monitoring and management. Biodiversity will be viewed from the level of the gene through species to ecosystems. The causes of biodiversity loss and its ecological and socio-economic impacts will also be discussed.",
        prereq:"Biology 2244A/B or Statistical Sciences 2244A/B with a minimum grade of 60% and at least 0.5 course from Biology 3440A/B, Biology 3442F/G, Biology 3445F/G.",
        times:"",
        associations:""
    },
    {
        title: "BIOLOGY 4420A - INSECT BIOLOGY",
        description:"An introduction to external and internal insect anatomy and fundamentals of insect physiology. The course will also examine how variations in morphological and physiological traits allow insects to exploit diverse habitats worldwide. The laboratory component will focus on the characteristics of major insect orders and families.",
        prereq:"Biology 2483A/B and 0.5 Biology course at the 3000-level.",
        times:"",
        associations:""
    },
    {
        title: "BIOLOGY 4436G - BEHAVIOURAL ECOLOGY",
        description:"A study of the relationships between animal behavior, ecology and evolution. Topics include: behavioral genetics and learning; mating systems, reproductive strategies and parental investment; foraging behavior, predation and competition; social groups and communication.",
        prereq:"Biology 3436F/G or Psychology 3221F/G and either completion of at least 1.5 Biology courses from the 3000 level or above, or registration in year 4 of the Honors Specialization in Animal Behaviour.",
        times:"",
        associations:""
    },
    {
        title: "BIOLOGY 4515B - GENOME BIOLOGY",
        description:"The course will present concepts, techniques and approaches that represent basis for the field of modern genomics. The course focus is on the power of genomic and whole genome sequencing as a tool to understand whole genome regulation, expression and interactions between different genomes and discuss experimental design in genomics.",
        prereq:"1.0 course from: Biology 3592A/B, Biology 3593A/B, Biology 3594A/B, Biology 3595A/B, Biology 3596A/B, Biology 3597A/B, Biology 3598A/B; and registration in Year 4 of an Honors Specialization module offered by the Department of Biology.",
        times:"",
        associations:""
    },
    {
        title: "BIOLOGY 4560B - HUMAN MOLECULAR BIOLOGY",
        description:"This course will offer an up-to-date examination of the current status of human genetics with emphasis on the molecular information. The specific course content is expected to change from year to year reflecting research progress, including the human genome project.",
        prereq:"Biology 3592A/B and Biology 3596A/B; one additional 0.5 course in Biology at the 3000 level or above; and registration in year 4 of an Honors Specialization module offered through the Department of Biology or a Major in Genetics.",
        times:"",
        associations:""
    },
    {
        title: "BIOLOGY 4561F - GENES AND GENOMES I",
        description:"An examination of genome-level analytic methods in the context of more accurately defining the genotype-phenotype relationship. Topics to be covered include functional genomics, synthetic genomics, genome-wide association studies, machine learning, and synthetic genetic arrays.",
        prereq:"Biology 3596A/B; and one of the following: Biology 3594A/B, Biology 3595A/B, Biology 3597A/B; and one additional 0.5 course in Biology at the 3000 level or above; and registration in year 4 of an Honors Specialization module or a Major in Genetics offered through the Department of Biology.",
        times:"",
        associations:""
    },
    {
        title: "BIOLOGY 4562B - GENES AND GENOMES II",
        description:"An examination of our understanding of the organization, structure and function of the genes and genomes of plants, emphasizing recent developments in plant molecular genetics involving model organisms. Topics include plant gene expression, mapping of plant genes, molecular tools for DNA transfer, the interrelationship of nuclear, mitochondrial and chloroplast genes.",
        prereq:"Completion of at least 1.5 Biology courses at the 3000 level or above; and registration in year 4 of an Honors Specialization module or a Major in Genetics offered through the Department of Biology; or permission of the instructor.",
        times:"",
        associations:""
    },
    {
        title: "BIOLOGY 4583F - MOLECULAR GENETICS LABORATORY",
        description:"Project-based inquiry focused on refining the laboratory skills of senior genetics students. Experimental approaches will include analysis of gene expression using modern tools and techniques.",
        prereq:"A minimum mark of 70% in each of Biology 3596A/B and 1.0 course from: Biology 3466A/B, Biology 3592A/B, Biology 3593A/B, Biology 3594A/B, Biology 3595A/B, Biology 3597A/B, Biology 3598A/B; and registration in year 4 of an Honors Specialization in Genetics or permission of the Genetics Undergraduate Coordinator.",
        times:"",
        associations:""
    },
    {
        title: "BIOLOGY 4602F - THERMAL PHYSIOLOGY",
        description:"This course examines the roles of heat and temperature as “master regulators” of physiology and biochemistry. It will emphasize how mechanisms underlying thermal effects integrate over spatial and temporal scales. Illustrative examples will be taken from the primary literature about organisms living in extreme or rapidly changing thermal environments.",
        prereq:"A minimum mark of 65 % in one of Biology 3601A/B or Biology 3602A/B.",
        times:"",
        associations:""
    },
    {
        title: "BIOLOGY 4608G - ENVIRONMENTAL PLANT PHYSIOLOGY",
        description:"Analysis of the primary literature on the physiological responses of plants to the environment. Topics include plant hormones and stress responses. Students will be encouraged to think broadly about plant biology, both its role in society (e.g. food safety and security, alternative fuels) and the scientific process (experimental design, publication).",
        prereq:"Biology 2601A/B; registration in a Biology module and completion of at least 1.5 Biology courses at the 3000-level or above. Biology 3603A/B and Biology 3660A/B are recommended.",
        times:"",
        associations:""
    },
    {
        title: "BIOLOGY 4611F - PHYSIOLOGY OF ANIMAL MIGRATION",
        description:"The study of animal migration, focusing on migration as a life history trait, integrating physiology and biochemistry with ecological and evolutionary processes.",
        prereq:"Biology 2601A/B or Physiology 3120; and either completion of at least 1.5 Biology courses from the 3000-level or above, or registration in Year 4 of an Honors Specialization in Animal Behaviour.",
        times:"",
        associations:""
    },
    {
        title: "BIOLOGY 4998E - SYNTHETIC BIOLOGY",
        description:"In this course students will develop project proposals in Synthetic Biology through group and peer workshops. The final project will be presented and subsequently executed in an open laboratory using the reagents provided.",
        prereq:"Biology 3596A/B, Biochemistry 3392F/G. Pre-or Corequisite(s): Science 3377A/B.",
        times:"",
        associations:""
    },
    {
        title: "BME 3201A - FUNDAMENTALS OF BME DESIGN",
        description:"The objective of this course is to develop design skills and tools used in Biomedical Engineering. Integration of the engineering and life sciences will be illustrated by presenting design principles for medical devices and systems. Emphasis will be placed on engineering design for the cardiovascular and musculoskeletal systems.",
        prereq:"Completion of the first-year curriculum in the Faculty of Engineering with a year-weighted average of at least 80%.",
        times:"",
        associations:""
    },
    {
        title: "BIOSTATS 3100A - BIOSTATISTICAL METHODS",
        description:"Epidemiologists work with categorical data (e.g. healthy, sick, dead) and with time to event data (e.g. time to death). This course introduces analytic methods of such data, expanding on aspects of study design and analysis introduced in Epidemiology 2200A/B. It requires a prior introduction to analyses of continuous data.",
        prereq:"Biology 2244A/B or Statistical Sciences 2244A/B, and Epidemiology 2200A/B, with a minimum mark of 75% in each. Pre-or Corequisite(s): Epidemiology 3200A.",
        times:"",
        associations:""
    },
    {
        title: "BIOSTATS 3110B - MULTIVARIABLE METHODS",
        description:"This course covers frequently used multivariable regression models (linear for continuous outcomes and logistic for binary outcomes) in health research. By the end of the course students will (i) understand and critique applications of regression models appearing in the biomedical literature and (ii) carry out their own analyses.",
        prereq:"Biostatistics 3100A and Epidemiology 3200A, with a minimum mark of 70% in each.",
        times:"",
        associations:""
    },
    {
        title: "BUSINESS 1220E - INTRODUCTION TO BUSINESS",
        description:"Business Administration 1220E, offered by the Ivey Business School, gives students from all faculties the opportunity to learn business fundamentals in finance, marketing, operations, organizational behavior and general management. The course is delivered using Ivey's renowned case method, which challenges students to learn by doing, within an active class environment of no more than 85 students. Students explore real business issues, make management decisions, defend their position, and take action. This course will be particularly appealing to those students who want a glimpse of Ivey's unique learning experience.",
        prereq:"None",
        times:"",
        associations:""
    },
    {
        title: "BUSINESS 1299E - BUSINESS FOR ENGINEERS",
        description:"Students learn business fundamentals in finance, marketing, engineering economics, organizational behaviour and general management. Students are taught business decisionmaking using the case method, wherein students explore real business issues, make management decisions, defend their position, and take action, within an active class environment of no more than 85 students. ",
        prereq:"None",
        times:"",
        associations:""
    },
    {
        title: "BUSINESS 2257 - ACCOUNTING & BUSINESS ANA",
        description:"Prerequisite for entry to Honors Business Administration. Course Divisions: (1) Financial Accounting - development of financial statements, and the assessment of their uses and limitations. (2) Business Analysis and Management Accounting - using case studies with an emphasis on smaller businesses, students learn various quantitative decision-making tools highlighted by an entrepreneurial feasibility study.",
        prereq:"Five courses at University level.",
        times:"",
        associations:""
    },
    {
        title: "BUSINESS 2295F/G - BUSINESS BASICS FOR SCIENCES",
        description:"This course is designed to provide students pursuing modules offered by the Faculties of Science, Health Sciences or the Schulich School of Medicine and Dentistry with an understanding of how business operates and how the individual employee fits into the larger business organization. Students are introduced to the basics of finance, marketing and organizational behaviour through Ivey Business School’s case method.",
        prereq:"Registration in a Major, Specialization or Honors Specialization in the Faculties of Science, Health Sciences or the Schulich School of Medicine and Dentistry.",
        times:"",
        associations:""
    },
    {
        title: "BUSINESS 2299E - BUSINESS FOR ENGINEERS",
        description:"The course is designed to introduce students to managerial decision-making. The case method is used to present selected problems in finance, engineering economics, marketing, organizational behaviour and general management.",
        prereq:"Successful completion of third year Engineering.",
        times:"",
        associations:""
    },
    {
        title: "BUSINESS 4417B - CORP FINANCIAL REPORTING",
        description:"The main objective of this course is to prepare students to become better users of financial statements by developing a knowledge and understanding of some of the key financial reporting concepts and accounting principles and an understanding of the financial reporting system. The course also takes a managerial perspective of financial disclosure.",
        prereq:"None",
        times:"",
        associations:""
    },
    {
        title: "BUSINESS 4629B - SALES FOUNDATIONS",
        description:"This course focuses on the skills, techniques, and strategies required to be successful in today’s increasingly competitive marketplace. Students will learn how to: create a compelling value proposition, package it to resonate with their target buyer(s), deliver the proposition to prospects, and ultimately close deals to drive strategic growth.",
        prereq:"None",
        times:"",
        associations:""
    },
    {
        title: "CALCULUS 1000A/B - CALCULUS I",
        description:"Review of limits and derivatives of exponential, logarithmic and rational functions. Trigonometric functions and their inverses. The derivatives of the trig functions and their inverses. L'Hospital's rules. The definite integral. Fundamental theorem of Calculus. Simple substitution. Applications including areas of regions and volumes of solids of revolution.",
        prereq:"Ontario Secondary School MCV4U or Mathematics 0110A/B.",
        times:"",
        associations:""
    },
    {
        title: "CALCULUS 1301A/B - CALCULUS II",
        description:" For students requiring the equivalent of a full course in calculus at a less rigorous level than Calculus 1501A/B. Integration by parts, partial fractions, integral tables, geometric series, harmonic series, Taylor series with applications, arc length of parametric and polar curves, first order linear and separable differential equations with applications.",
        prereq:"A final mark of at least 55% in either Calculus 1000A/B or Calculus 1500A/B.",
        times:"",
        associations:""
    },
    {
        title: "CALCULUS 1501B - CALCULUS II",
        description:"Students who intend to pursue a degree in Actuarial Science, Applied Mathematics, Astronomy, Mathematics, Physics, or Statistics should take this course. Techniques of integration; The Mean Value Theorem and its consequences; series, Taylor series with applications; parametric and polar curves with applications; first order linear and separable differential equations with applications. ",
        prereq:"A minimum mark of 60% in one of Calculus 1000A/B, Calculus 1500A/B.",
        times:"",
        associations:""
    },
    {
        title: "CALCULUS 2302A - INTERMEDIATE CALCULUS I",
        description:"Three dimensional analytic geometry: dot and cross product; equations for lines and planes; quadric surfaces; vector functions and space curves; arc length; curvature; velocity; acceleration. Differential calculus of functions of several variables: level curves and surfaces; limits; continuity; partial derivatives; tangent planes; differentials; chain rule; implicit functions; extrema; Lagrange multipliers. ",
        prereq:"A minimum mark of 55% in Calculus 1501A/B or Calculus 1301A/B, or Applied Mathematics 1413.",
        times:"",
        associations:""
    },
    {
        title: "CALCULUS 2303B - INTERMEDIATE CALCULUS II",
        description:"Integral calculus of functions of several variables: double, triple and iterated integrals; applications; surface area. Vector integral calculus: vector fields; line integrals in the plane; Green's theorem; independence of path; simply connected and multiply connected domains; parametric surfaces and their areas; divergence and Stokes' theorem.",
        prereq:"Calculus 2502A/B or Calculus 2302A/B.",
        times:"",
        associations:""
    },
    {
        title: "CALCULUS 2402A - CALCULUS W/ ANALYSIS FOR STATS",
        description:"Functions of multiple variables and their differential calculus. The gradient and the Hessian. Constrained and unconstrained optimization of scalar-valued functions of many variables: Lagrange multipliers. Multidimensional Taylor series. Integrating scalar-valued functions of several variables: Jacobian transformations. Pointwise and uniform convergence. Power series.",
        prereq:"Calculus 1301A/B or Calculus 1501A/B or Applied Mathematics 1413, in each case with a minimum mark of 55%.",
        times:"",
        associations:""
    },
    {
        title: "CALCULUS 2502A - ADVANCED CALCULUS I",
        description:"Differential calculus of functions of several variables: level curves and surfaces; limits; continuity; partial derivatives; total differentials; Jacobian matrix; chain rule; implicit functions; inverse functions; curvilinear coordinates; derivatives; the Laplacian; Taylor Series; extrema; Lagrange multipliers; vector and scalar fields; divergence and curl.",
        prereq:"A minimum mark of 60% in Calculus 1501A/B or Applied Mathematics 1413, or Calculus 1301A/B with a mark of at least 85%. Pre-or Corequisite(s): Mathematics 1600A/B.",
        times:"",
        associations:""
    },
    {
        title: "CALCULUS 2503B - ADVANCED CALCULUS II",
        description:"Integral calculus of functions of several variables: multiple integrals; Leibnitz' rule; arc length; surface area; Green's theorem; independence of path; simply connected and multiply connected domains; three dimensional theory and applications; divergence theorem; Stokes' theorem.",
        prereq:"A minimum mark of 60% in Calculus 2502A/B.",
        times:"",
        associations:""
    },
    {
        title: "CGS 1021F/G - INTRO TO GLOBAL CULTURE",
        description:"This course explores how studies of our world are shaped by practices of and cultural contestations in mapping, narration, definition, classification, and aesthetic production, informed by historical experiences and politics of knowing. Students learn to gain critical perspectives on contemporary ideas of the world and their own locations in it.",
        prereq:"None",
        times:"",
        associations:""
    },
    {
        title: "CGS 1022F/G - INTRODUCTION TO GLOBALIZATION",
        description:"This course offers an interdisciplinary introduction to the dominant material and cultural trends under the conditions of economic globalization. Key topics are labour in the global economy, the globalization of the capitalist mode of production, transnational resource flows, responses to inequality and resistance.",
        prereq:"None",
        times:"",
        associations:"random"
    },
    {
        title: "CGS 1023F/G - INTRO TO GLOBAL DEVELOPMENT",
        description:"This course is an introduction to the interdisciplinary field of international development studies with the focus on investigating the notion of 'poverty'. It will examine the roles of development organizations, states and civil society in addressing globally identified development issues through the negotiation of global development agendas.",
        prereq:"None",
        times:"",
        associations:""
    },
    {
        title: "CGS 2002F - PROBLEMS OF GLOBAL DEVELOPMENT",
        description:"This course provides a comparative and theoretical examination of societies and cultures undergoing significant change and of the complex global relations between developing and industrialized areas. It offers an interdisciplinary perspective on such issues as economic development, development indicators, gender, foreign policy, development aid, participatory development and post-development.",
        prereq:"Centre for Global Studies 1023F/G or Centre for Global Studies 2001F/G, or permission of the Centre for Global Studies.",
        times:"",
        associations:""
    },
    {
        title: "CGS 2003F - DISCOURSES OF GLOBAL STUDIES",
        description:"This course investigates how methods and objects of inquiry in global studies are formed in the limiting and productive interplay of ideas, language, and social/political force. Students examine how our studies of global problems are made possible in systems of communication that render us responsible for their formation and address.",
        prereq:"0.5 Centre for Global Studies course at the 1000-1099 level, or permission of the Centre for Global Studies.",
        times:"",
        associations:""
    },
    {
        title: "CGS 2004G - CRITIQUE OF CAPITALISM",
        description:"This course explores the socio-economic form of 'capitalism', and examines the development and spread of the key features of capitalist social organization - the division of labour, private property, primitive accumulation - and examines their functioning in a rapidly globalizing world.",
        prereq:" 0.5 Centre for Global Studies course at the 1000-1099 level, or permission of the Centre for Global Studies.",
        times:"",
        associations:""
    },
    {
        title: "CGS 3001F/G - COLLABORATIVE & PARTICIPATORY",
        description:"This course examines the work of formulating and collaborating in community-based projects. Students learn to recognize and respond to ethical, socio-political, institutional and epistemological dimensions of collaboration, participation and research practice in contexts characterized by forms of inequality. Students prepare a research proposal, funding application and ethics review.",
        prereq:"0.5 course from Centre for Global Studies 2002F/G - 2004F/G, or permission of the Centre for Global Studies.",
        times:"",
        associations:""
    },
    {
        title: "CGS 3005G - THEORISING SUBJECTIVITY & POWER",
        description:"This course surveys and investigates recent and contemporary efforts to critically understand human subjectivity and agency in the power relations in which these things are realised. Students will examine theories and analyses of subjectivity and subjectification in terms of material conditions, language and symbolic economies, ideology, bodies, difference, and domination.",
        prereq:"0.5 course from Centre for Global Studies 2002F/G - 2004F/G, or permission of the Centre for Global Studies.",
        times:"",
        associations:""
    },
    {
        title: "CGS 3006F - CRTCL & ANTI-OPPRESSIVE METHOD",
        description:" This course addresses collective and community approaches to knowledge production in the service of protecting and promoting cultural, political, and territorial integrity and self-determination. Students learn to engage with empirical research based on emancipatory goals and are introduced to how notions of antioppression, `cosmovision', and interculturalism are mobilized in research. ",
        prereq:"0.5 course from Centre for Global Studies 2002F/G - 2004F/G, or permission of the Centre for Global Studies.",
        times:"",
        associations:""
    },
    {
        title: "CGS 3509F - INDIGENOUS PPL & GLBL DISPOSS",
        description:"0.5 Centre for Global Studies course at the 1000-1099 level, or permission of the Centre for Global Studies.",
        prereq:"An examination of the impact of global capitalism and neo-colonialism on territories Indigenous Peoples use and claim. The course examines strategies to secure land-based community autonomy against global dispossession. The question of the coexistence of dominant practices of global development with Indigenous ways of knowing is addressed.",
        times:"",
        associations:""
    },
    {
        title: "CGS 3513F - NON-HEGEMONIC ECON FORMS",
        description:"An examination of the function and socio-political outcomes of informal, subsistence, land-based and other allied economies in the context of global capitalism. Themes include the production of communitybased economic autonomy, localization, place-making and alternative economic development. ",
        prereq:"0.5 Centre for Global Studies course at the 1000-1099 level, or permission of the Centre for Global Studies.",
        times:"",
        associations:""
    },
    {
        title: "CGS 3514G - GLOBAL RESISTANCE MOVEMENTS",
        description:"An examination of the political, social and cultural foundations of resistance movements that claim a transnational, global or international scale. Cases may include: anti-globalization, environmentalism, indigenous people's rights, women's rights, human rights, Fair Trade, and alternative trade organizations.",
        prereq:"0.5 Centre for Global Studies course at the 1000-1099 level, or permission of the Centre for Global Studies.",
        times:"",
        associations:""
    },
    {
        title: "CGS 3515F - GLOBAL CULTURES OF GENDERING",
        description:"This course examines how material and social orders of our world are organised in practices of gendering and the normalising of social and bodily orientations. Students will engage contemporary feminist and queer theory, practical deployments of gender and orientation globally, and problems of resistance pertinent to the politics of both.",
        prereq:"0.5 Centre for Global Studies course at the 1000-1099 level, or permission of the Centre for Global Studies.",
        times:"",
        associations:""
    },
    {
        title: "CGS 3516F - ECONOMIES OF DEVELOPMENT",
        description:"This course examines alternative tools for assessing development, such as development indicators and indices (GNP/GDP, Human Development/Poverty Indices, Physical Quality of Life Index, Gender Empowerment Measure), community-based indicators, and explanations of economic development in micro and macro contexts.",
        prereq:"0.5 Centre for Global Studies course at the 1000-1099 level, or permission of the Centre for Global Studies.",
        times:"",
        associations:""
    },
    {
        title: "CGS 3517G - DECOLONIALITY",
        description:"This course explores decoloniality as a practical and analytical orientation to confrontations with the entrenched injustices identified with coloniality. The course considers decoloniality through characteristic projects, practices and globalized movements to decolonize knowledge, livelihoods, politics and community.",
        prereq:"0.5 Centre for Global Studies course at the 1000-1099 level, or permission of the Centre for Global Studies.",
        times:"",
        associations:"random"
    },
    {
        title: "CGS 3519F - GLBL INEQUAL BASED SEXUAL DIFF",
        description:"This course examines core ways in which persons and populations are situated in positions of inequality under globalization and development contexts on bases of sexual difference and differences in sexuality. Students will study the significance of these differences and will gain practice in research methods appropriate to such a focus.",
        prereq:"0.5 Centre for Global Studies course at the 1000-1099 level, or permission of the Centre for Global Studies.",
        times:"",
        associations:""
    },
    {
        title: "CGS 3520G - OVERCOMING MGMT PARADIGMS",
        description:"This course critically examines how practices of Global Development are typically reduced to problems of management and how such paradigms are problematic and incompetent with respect to the global inequalities that provoke development as a question. Students will explore alternative approaches, seeking greater practical address of responsibilities in development work.",
        prereq:"0.5 Centre for Global Studies course at the 1000-1099 level, or permission of the Centre for Global Studies.",
        times:"",
        associations:""
    },
    {
        title: "CGS 3522F - GLOBAL MOBILITIES",
        description:"This course examines how we may analyse human life, globally, as in movement and as different forms of mobilities, and how it is that social, political, economic, legal, and cultural orders in the world are conditioned, at fundamental levels, by efforts to manage, shape, objectify, and discipline movement.",
        prereq:"0.5 Centre for Global Studies course at the 1000-1099 level, or permission of the Centre for Global Studies.",
        times:"",
        associations:""
    },
    {
        title: "CGS 3523G - LAW GLBL RLTNS & LANG OF PWR",
        description:"This course examines struggles to define subjects of law and establish just rules of behaviour between them within global contexts. Students will examine and critically evaluate often conflicting efforts of movements, actors, institutions, and social groups to make lawful specific ideals or, alternatively, to delegitimise the world views of others. ",
        prereq:"0.5 Centre for Global Studies course at the 1000-1099 level, or permission of the Centre for Global Studies.",
        times:"",
        associations:""
    },
    {
        title: "CGS 3526G - CHALLENGING RGMS GLB CITIZENS",
        description:"Examines how practices to promote global citizenship and internationalize learning respond to relations of power. Focus is given to pedagogical strategies initiated by universities, charities, and civil society organizations to situate their memberships within orders of difference. Emphasis is placed on learning critical practices of de-internationalization in global awareness.",
        prereq:"0.5 Centre for Global Studies course at the 1000-1099 level, or permission of the Centre for Global Studies.",
        times:"",
        associations:""
    },
    {
        title: "CGS 3527G - GLOBLZD CAPITALIST AGRICULTURE",
        description:"An examination of the deployment and consumption of labour, natural resources, manufactured inputs, and transportation regimes in the production of agricultural products. This course examines each of these broad themes as it is shaped by and produces capitalist social, political, and material relations.",
        prereq:"0.5 Centre for Global Studies course at the 1000-1099 level, or permission of the Centre for Global Studies.",
        times:"",
        associations:""
    },
    {
        title: "CGS 4010F - HONORS SEMINAR: POVERTY",
        description:" Examinations of social, environmental and political sources of structural economic inequality. For core themes and cases in the current session, please see the Centre for Global Studies.",
        prereq:"0.5 course from Centre for Global Studies 3001F/G-3005F/G or permission of the Centre for Global Studies.",
        times:"",
        associations:""
    },    
    {
        title: "CGS 4015G - HONS SEM: POWER & RESISTANCE",
        description:"Examination of the relations of power and resistance, including studies of forms of oppression, hegemonic structures, and forms of organizing. For core themes in the current session, please see the Centre for Global Studies.",
        prereq:"0.5 course from Centre for Global Studies 3001F/G-3005F/G or permission of the Centre for Global Studies.",
        times:"",
        associations:""
    }   
    // {
    //     title: "",
    //     description:"",
    //     prereq:"None",
    //     times:"",
    //     associations:""
    // },

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
					} // else {
					//	console.log("Added a western course!!")
					//}
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