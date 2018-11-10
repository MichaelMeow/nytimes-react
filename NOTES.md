# nytimes_fake Notes

* Unforseen Issues and Questions

My angular site had one global css file, and so a lot of this project will be splitting CSS into smaller pieces, and taking the SASS out of it.  I’ll have to manually replace the mixins and variables and pull out nested styles.

I want to have access to specific mock array elements rather than looping through them all.  The .map function does a good job of constructing the components with the props, so I don't want to lose that.  Maybe if I store the .map elements in a constant I can refer to that.  I don't know enough to proceed with this current strategy so I will try to fill the requirements of the assignment this week and work on this problem next week.

I created a component for “quick news” elements, but I have weather and stocks, which share styles but not the entire component.  I had to create global styles so they could share styles.

I want to know how to use conditionals like ngIf on my elements.  I wonder if it has to be done with State.  I'm interested in seeing how working with state can improve my app so I can customize the layout using the admin modal.


* Notes

I used CSS modules rather than objects because I got more comfortable with them this week.  I would like to know the difference between them, what each is good for.  CSS Modules just seems better to me, but the curriculum mentioned that both are used.

The page is a single page and does not require routing.  I added in an admin modal which is not yet functional just to show implementation of a router.


* Thoughts on Angular vs React

Angular was a framework which required a lot of thinking about overall architecture, and adding an element meant making a lot of changes.  Components were larger things based on doing something.

With react I feel lightness in creating components, and I only have to change something in one or two places when I make a new one.  They feel like legos whereas components in react were more like puzzle pieces.  The legos can be put anywhere and they are small and simple.  The puzzle pieces of angular need to be fit in a specific way.

Passing data down and actions up is a little bit easier in React, but it feels similar.  We haven't gotten to passing callback functions as props to pass actions back yet but that sounds like passing actions up in Angular but with a different method.
