# Splitting the monolith

## What we will cover

- When do we split a monolith?
- What should we think about when splitting?

## Notes

### When do we split a monolith?

You want to split your monolith when one of the following is true:

- You have too many developers touching the same code
- You have a performance heavy feature that needs to scale

We call the pain that comes from staying on a monolith for too long "growth ache".
Pains can include:

- Frequent merge conflicts
- Miscommunication between teams
- Teams blocking other teams from shipping features
- Release coordination gets harder and harder

Sometimes it is better to move a feature in to a smaller service that can scale independently.
Consider this approach when one of the following is true:

- The new feature will cause problems for the other features
- It will be costly to scale up the monolith if the feature isn't split out

### What should we think about when splitting?

Start any split discussion with the following questions:

1. What is the goal of the split?
2. What technical impact will a split have?
3. How should the split look?

#### 1. What is the goal of the split?

You should always start by stating what the goal of the split is.
Common goals are:

- Enable teams to work autonomously
- Scale a feature
- Move ownership of features to a team

#### 2. What technical impact will a split have?

Splitting is costly so always think it through.
Good questions to ask are:

- How will the network calls look between the services?
- What will happen if we don't split?
- Is it the right time to split?
- How long will it take?
- What will the workflow look like after it is done?
- What will we do with shared code between the services?
- Should we have different repos or create a mono repo?
- Should we stick with the same stack?

#### 3. How should the split look?

How to structure the split is the hardest part.
We need a split that will help our teams move faster.
This is easier said than done.

If we do this right the developers will be able to work faster.
If we do it wrong work will slow down.
