# For Goodness Cake!

## Setting

This game takes place at the Culinary Arts classroom at ACC.

## Map

```mermaid
graph TD;
    Lab Station (Culinary Classroom)<-->Locker Room;
    Lab Station<-->Bathroom;
    Lab Station<-->Dish Room;
    Lab Station<-->Baking Area;
    Lab Station<-->Walkin-In Fridge;
```

The player starts at the Lab Station, which is the common area, if it can be called that, in the Culinary Arts classroom (basically where all the students work and do their assignments). From then, the student has to go to certain areas when indicated but also has time to walk around freely as long as they stay on task!

## Story

Each week in the Culinary Arts class there is a lab activity, and this week's is a decorated yellow cake! This lab will take on for 4 days:
* **Day 1:** On the first day, you will prepare your batter and bake your cake.
* **Day 2:** Since the cake has to be decorated, today will be buttercream day. You will make the buttercream to be ready to start decorating the next day.
* **Day 3:** Chef made (or bought) some fillings for the class. You get to choose the flavor of your filling and get the cake filled and crumb coated with the buttercream.
* **Day 4:** The final day is for any piping you want to do and extra decorations. Today you will get graded and get to try the cake you have made!

## Global Variables

The most important variables are 'currentDay' and 'playerScore'. 'currentDay' updates the day in which the player is, like Day 1 or Day3. 'playerScore' keeps track of the player's score.
