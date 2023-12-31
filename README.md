Welcome to my React API project.

Overview:

The task is to build a website using React based on the specifications outline below. This will be based on the Punk API which contains all
the data you will need for the task (there is also a link to a data file which we recommend you use before diving straight into using the
API). Please refer to Earworm as well as the sandbox apps we built together during the module!

You will have to use all of the skills you have gained over the course of the module to complete this challenge. Take things slowly and
follow Reacts recommendation for building an application as outlined at the Thinking in React documentation.

The API used:

Punk-API -> https://punkapi.com/

Setup:

I fist started the project by working on the plan and layout the ground works. This is to make sure I'm not making the mistakes I've made previously where I've stumbled upon the processes of the project.

- First thing was the component tree.
  This needed to be a representation of what I will then eventually be building.

- I also decided to add a few extra post-it notes to make sure that I know and remember what different functions and different syntax are like. This allowed me to spend less time trying to figure out the syntax and more time figuring out the logic of it the project.

![Alt text](readme-photos/Setup.png)

The website design:

- The homepage -

![Alt text](readme-photos/homepage.png)
I've got two buttons on the homepage that will allow you to navigated to the main content for the website.
To access the main content, you can either click on navigation button "Beer Crawl" or click the button in the body text.

The BeerLand logo has been turned into a home button so at any point if the user wants to come back to the home page, they can simply click on that button.

- Mobile view for Beer Crawl -

![Alt text](readme-photos/mobileView.png)

In the mobile view I tried to keep the design as simple and clutter free as possible "less is more".

I've got a simple but functioning search bar that allows you to search for a specific beers and a filter option that allows you to filter through the beers depending on the options selected.

- The desktop view:

![Alt text](readme-photos/desktopView.png)

With the search bar and the filter section remaining the same; for the desktop view, the only difference you'll notice is the way the beers and the information is displayed. With the wider screen there was a lot more room to move beer cards around. So I put them in a grid form with 3 rows.

Sample code:

- In the code snippet below I was struggling to use the useParams correctly due to minor error. The beerId that's collection the id of the beer clicked on was being used a string rather than a number. After fixing the small issue, the code worked perfectly fine without any issues.

![Alt text](readme-photos/useParams.png)

- Here I have the main logic for my radio buttons and the filtering or the radio button. In the first snippet you'll see that the filter is being used for searchBeer - that was the initial purpose of it. This piece of code was to be used for the search bar and for me to create another function for the radio buttons.

The original search bar function was:

![Alt text](readme-photos/searchbarCode.png)

Modified with the addition of the radio buttons:

![Alt text](readme-photos/searchandfiltercode.png)

Testing:

The testing is done while creating the webpage. There was no internal testing done for this project. However, this is something that I will be looking to do in the future to see how well the project held up.

Improvements:

- I want to be able to add more features to the project. For example, random facts to show up on the home page every time the page is loaded.
- The filter to take multiple input rather than one at a time.
- To get access to all 300+ beers.
