# TIL 🚀

## "Today I learn" is a repo that shows my study route for inspiring others in the magical world of programming!

A collection of concise write-ups on small ideas that I learn _day to day_ across a
variety of languages and technologies.
With this, I wish to build rapport and engagement among the community for future opportunities!

✨ _20 TIL's and counting..._

---

### Activity: 😀

<details>

<summary>Courses, Repositories, studies **before** TIL</summary>

#### Python's Olympiad History

The year was 2018, my principal called me; at this moment, I thought: "Oh, I'm in (real) trouble"! Instead, he offers me the **opportunity** to participate in the [OBI](https://olimpiada.ic.unicamp.br/) ("Olimpíada Brasileira de Informática" - translation), a National Olympiad of Programming in Brazil. I felt anxious as hell; replied: "sure"!
As I went in my preparation, learning the classic Python language, I started to think like a programmer in term of: conditions, iterations, functions, and opened for me a completely magical world - machines doing tasks. This sentiment of controlling what the computer will do, and no longer a passive experience.
My first line of code was very probably

```py
 print("Hello, World!")
```

, thus, starting in the right way.
After weeks of not understanding the order of coding, loops and how computers actually know how to execute the lines of code - I presumed that computer could magically re-run the code-, for example:

```py
name = 'Diogo'
if name == 'test':
print('Aha!')
name = test
```

And didn't make sense to me why was not printing "Aha!".
Today, I can assure that I know why that's not the case, even though React kind of made my wish possible.
Finally, I passed the first step of the OBI, which was Municipal. I could not control my feelings, felt like a little Kanguru jumping around happy in the middle of my house.
Going on to the State Stage, I passed and went to the National. For a pupil in the eight year, inside the most advanced research center in the country (ITA), coding Python in an Intel's i7 processor, I could not be happier.
In the middle of the 3 hour final test, I pondered about winning a medal- unfortunately didn't happen- but not even one question I couldn't answer. One question was about matrices, the order about graph theory with cities, like BFS, and the order some loops, wich I didn't figure out.
So, at the end, I learned a lot of stuff, including: programming, the importance of practicing, writing clean code and a ton more that in this roadmap/TIL, You can get into.
My advice is to never stop to study and pursue your objectives.

> "The 'no' you already have, so go beyond and don't EVER be afraid to pursue"

</details>

#### Today:

- Finished the course in SoloLearn React + Redux

- Summary:

Redux can be described using the following principles:

###### Single source of truth

The global state of the app is stored in a single store.

###### State is read-only

You can change the state only by dispatching actions. Action are objects, that contain information about what should be changed.

###### Pure reducers

Reducers are functions that handle the actions and return the next state of the application. Reducers need to be pure, meaning they cannot modify the state, they need to return a new state object.

<details>
<summary>Find the detailed history here</summary>

##### 12/1/20201 - JS actions

- Finished the Github Actions course for working with Javascript actions: [Link](https://github.com/actions/toolkit).
- Learned to use _WSL Ubuntu_, which instigate me learning more about git config, conventional commit; command-line interface.

##### 13/1/2021 - Terminology and study for stacks in the market

- Finished the course about publishing to GitHub packages: [Repo](https://github.com/diogojorgebasso/github-actions-for-packages/)
- Start to analyze language CodeQl for understanding about bootstrap's vulnerability in JQuery: [repo for study](https://github.com/diogojorgebasso/codeql-javascript-unsafe-jquery-plugin).
- Learn about Google's process to be hired: how to manage the interview questions about algorithms and data structure, stacks, values, and many more. Hence, started to study in [FreecodeCampe video](https://www.youtube.com/watch?v=oBt53YbR9Kk).
- Learn about Halts Theory and process by Alan Turning to prove that _"computers won't be able to solve every problem that we[as humans] give to them"_;
- Studied the "problem" of multithread and real-time programming to improve my understanding over Node.js. [Check out introduction video by Tom Scott](https://www.youtube.com/watch?v=RY_2gElt3SA).

##### 14/1/2021 - DNA-RNA

- I was seeing difficulties in writing code faster, although I've become a faster typer. Hence, make my programming more productive and achieve more code with less effort is what I'm searching for at the moment. Likewise, I searched and implemented extensions for VsCode.
- Refactor of a [real application](https://github.com/diogojorgebasso/rnaedna) from **Python** to **HTML, CSS, and JS**. This program is responsible for doing the translation of DNA to RNAm, and vice-versa.

##### 15/1/2021 - CodeQl && Security

- Submitted an issue to implement .ql icon in the vscode extension [material themes icon](https://github.com/PKief/vscode-material-icon-theme/issues/931).
- And, as I studied CodeQl, I saw the opportunitie to make the course [security on GitHub](https://github.com/diogojorgebasso/security-on-github/) to really understand the basics of how GitHub deal with.

##### 16/1/2021 - JS30

- Finished the course [JS30](https://javascript30.com/), which helped me -a lot in- expanding the mind about vanilla JS: localStorage, events in general, functions, the structure of arrays, and a lot more. A highly recommended and transforming course that allows programmers and designers to understand the underly logic in Javascript, whereas seeing the possibilities that we can create.
- Studying the possibility of translating the course JS30.

##### 17/1/2021 - Software Architecture

- Learned the power of the _factory_ architecture, the way of making the code more organized and concise.
- Besides, learned how to make _injection of dependency_ in the main function to make _automated test_ -with Jest- easier.
  Example: ```js

export default function core(configuration = {}) {
function start() {
console.log("[Initializing] core...");
//const database = configuration.db ? require('./database') : console.log('No db')
}
function end() {
console.log("[Closing core] ");

    console.log("[Closing app] database.js");

}
}

##### 22/1/2021 - XSS attacks and how to prevent it

- Studied the _race condition_ in the [SerenityOS](https://github.com/SerenityOS/serenity) showed in [this video](https://www.youtube.com/watch?v=oIAP1_NrSbY&t=912s)
- Studied past XSS attack on Google and how to avoid one by sanitizing the HTML(https://www.youtube.com/watch?v=lG7U3fuNw3A)

##### 22/1/2021 - Public API's & Amazon

- Learned about [Public API's repository](https://github.com/public-apis/public-apis#index) and how it could impact in the quality of the repo's that I create.
- Enhance the **Amazon clone UI** with ideas for future improvements, check [here](https://github.com/diogojorgebasso/amazon)

##### 23/1/2021 - Coding

- Finished coding the [Auth Test Driven in Node.js](https://github.com/diogojorgebasso/test-nodejs), which helped my understanding better how JEST worked and how it can improve the consistency of my code.
- Got inspired by the repo: [Make your onw X](https://github.com/danistefanovic/build-your-own-x); showcase a road map for creating your facilities for the web

##### 24/1/2021 - Vacation!

##### 25/1/2021 - Vacation!

##### 26/1/2021 - Vacation!

##### 27/1/2021 - Solidify my understanding in React + Firebase; Python.

- Forked and revised [this repo](https://github.com/diogojorgebasso/React-Firebase-Auth) for **study practices**, and implemented some changes, as you can see in the commit history.
- Started to implement the [Google's Drive Clone](https://github.com/diogojorgebasso/drive-clone);
- Finished in Gist [RocketSeat Challenges](https://gist.github.com/diogojorgebasso/dddb1323befa872d510b6c99bc483978);
- Organized and structured standard-version in all Repo's that I currently maintain;
- Organized [Bootcamp in Advanced Python](https://github.com/diogojorgebasso/bootcamp-python-igti);

##### 28/1/2021 - Studied more advanced Python.

- Created a clean Code example for classes: [gist](https://gist.github.com/diogojorgebasso/5794b66b05977c80911bbe2dd0663691)
- Studied about Multi threading and Multiprocessing; [how to identify with Python](https://gist.github.com/diogojorgebasso/02baecaa1b91608d98d2894fa419178c)
- Finished the [(Google/One) Drive Clone](https://github.com/diogojorgebasso/drive-clone) repository!

##### 29/1/2021 - First npm publication, snippet for scraping a website and making better documenting for an open source repo!

- [Path to webdev](https://github.com/diogojorgebasso/path-webdev) is a repo that contains tons of links, design ideas and packages for making the life of web developer's **easy and more productive**!
- Gist for [cloning a website](https://gist.github.com/diogojorgebasso/011fd4c3df2af764826b59205fbdda67)
- Bettering my [High School portfolio](https://sites.google.com/aluno.colegioplanck.com.br/diogojbasso)

##### 30/1/2021 - Read articles

- I read several articles from github blog and web.dev, in order to understand, respectively, how [github made the world in the homepage](https://github.blog/2020-12-21-how-we-built-the-github-globe/), and [best practices for logIn and E-commerce](https://web.dev/sign-up-form-best-practices/#no-forced-sign-in).

##### 31/1/2021 - Worked in the Amazon Project

- I make several commits in the Amazon's Clone, wrote the description, and deployed with Github's CI/CD actions! [Check out](https://github.com/diogojorgebasso/amazon)

  > (My first complete and independent project as a Software Engineer)

- Finished the fourth challenge in module 4 in my [Bootcamp](https://github.com/diogojorgebasso/bootcamp-python-igti/blob/main/desafio_mod4.ipynb)

##### 01/2/2021 - Started [codePIX FullCycle project for the week](https://github.com/diogojorgebasso/imersao-fullstack)

- Nest in the backend and Next.js in the frontend
- Use case: Completely made with microservices, Docker and software architecture

##### 02/2/2021 - Learning High Level Math

- I studied more about graph theory and its correlation between vertices and matriz.
  ![math theorem](https://bit.ly/3apfQhN)
- Continued with the Full cycle project

##### 03/2/2021 - Day off for school purpose

##### 04/2/2021 - Day off for school purpose

##### 05/2/2021 - Continued with FullCycle Project

Follow it [here](https://github.com/diogojorgebasso/imersao-fullstack-fullcycle)

##### 06/2/2021 - Continued with FullCycle Project

Follow it [here](https://github.com/diogojorgebasso/imersao-fullstack-fullcycle)

##### 07/2/2021 - Continued with FullCycle Project

Follow it [here](https://github.com/diogojorgebasso/imersao-fullstack-fullcycle)

##### 08/2/2021 - Continued with FullCycle Project

Follow it [here](https://github.com/diogojorgebasso/imersao-fullstack-fullcycle)

##### 09/2/2021 - Dev Summit II

- Initiated [Dev Summit II in IGTI](https://github.com/diogojorgebasso/dev-summit)
- Created a personalized Google Actions for Google Assistant with deploy in Firebase!

##### 10/2/2021 - Continued with FullCycle Project

- Fixed Bug and renew TSL certificate in client's [Wordpress Website](sousplastbrasil.com.br)

* Code utilized after _research_:

`bash sudo /opt/bitnami/ctlscript.sh stop sudo /opt/bitnami/letsencrypt/lego --tls --email="EMAIL-ADDRESS" --domains="DOMAIN" --path="/opt/bitnami/letsencrypt" renew --days 90 sudo /opt/bitnami/ctlscript.sh start`

And after, the creation of a Cronjob script in the Ngix Server.

- Commited in [Dev Summit II in IGTI](https://github.com/diogojorgebasso/dev-summit)

##### 18/2/2021 - Learned about Snap-Tabs in HTML

- Studied the following [article](https://web.dev/building-a-tabs-component/)

- Wrote a demo [document](techs/snap-tabs) practicing with it.

##### 22/2/2021 - Designed and Coded for an open source extension

> [material icons ui](https://github.com/PKief/vscode-material-icon-theme)

- As I studied CodeQl, I noticed that there weren't an icon, thus, I created it
  in [Figma](https://www.figma.com/file/F1uQWFkUvQToFhvY9QmYyZ/Untitled?node-id=0%3A1)- check out!

- Submitted the [Pull Request](https://github.com/PKief/vscode-material-icon-theme/pull/959)

##### 23/2/2021 - Learned about Redux with React

- Finished the course in SoloLearn React + Redux, [available here](https://www.sololearn.com/Certificate/1097-20647754/jpg)

  - [first_assignment](https://react-contact-manager-4-qltv3e.stackblitz.io)

- Summary:

Redux can be described using the following principles:

###### Single source of truth

The global state of the app is stored in a single store.

###### State is read-only

You can change the state only by dispatching actions. Action are objects, that contain information about what should be changed.

###### Pure reducers

Reducers are functions that handle the actions and return the next state of the application. Reducers need to be pure, meaning they cannot modify the state, they need to return a new state object.

##### 24/2/2021 - Learned a precious tip in JS

###### Don’t use delete to remove an item from array

- Use **splice** instead of using delete to delete an item from an array. Using **delete** replaces the item with _undefined_ instead of removing it from the array.
  - Checkout one live example in [gist](https://gist.github.com/diogojorgebasso/c60ebac465a2c1a82c11e0fe6e24561d)

##### 25/2/2021 - Continued with the Amazon Project

- I was buying in [Amazon's](https://github.com/diogojorgebasso/amazon) and, at the same time, looking for ways to improve the UX and add more ways to Singing in -with Google, for example. Thus, a [redesign in Amazon](techs/amazon/desing)

</details>

## Folders Hierarchy for better understanding 📂

<pre>
.
├── README.md
|-- programming
├── courses
   ├── GitHub
   ├── Wesbos
   ├── B7Web
   ├── LinkedIn
|── books
|-- stacks
|-- repos
|-- best-practice
|-- technologies
|-- ideas
|-- security & hack
</pre>

```

```
