# Splitting the monolith

## What we will cover

- When do we split a monolith?
- What should we think about when splitting?

## Notes

### When do we split a monolith?

You want to split your monolith when one of the following is true:

- You have too many developers touching the same code
- You have a performance heavy feature that needs to scale

When a software team grows the rate at which features are added increases.
This means that more code is changing.
We call the pain that comes from this "growth ache".
Pains can include:

- Frequent merge conflicts
- Miscommunication between teams
- Teams blocking other teams from shipping features
- Release coordination gets harder and harder

When you are adding a feature that has higher performance requirements than the remaining system you should consider splitting as well.
Sometimes it is better to move that feature in to a smaller service that can scale independently.
Consider this approach when one of the following is true:

- The new feature will cause problems for the other features
- It will be costly to scale up the monolith if the feature isn't split out

### What should we think about when splitting?

Start any split discussion with the following questions:

1. What is the goal of the split?
2. What technical impact will a split have?
3. How should the split look?

#### What is the goal of the split?

You should always start by stating what the goal of the split is.
Common goals are:

- Enable teams to work autonomously
- Scale a feature
- Move ownership of features to a team

#### What technical impact will a split have?

Once the goal is set you need to consider the pros and the cons.
Splitting a monolith is costly so always think it through.
Good questions to ask are:

- How will the network calls look between the services?
- What will happen if we don't split?
- Is it the right time to split?
- How long will it take?
- What will the workflow look like after it is done?
- What will we do with shared code between the services?
- Should we have different repos or create a mono repo?
- Should we stick with the same stack?
