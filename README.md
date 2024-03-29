# Airport Challenge :airplane:

## Task

We have a request from a client to write the software to control the flow of planes at an airport. The planes can land and take off provided that the weather is sunny. Occasionally it may be stormy, in which case no planes can land or take off. Here are the user stories that we worked out in collaboration with the client:

### User Stories

```
As an air traffic controller
So I can get passengers to a destination
I want to instruct a plane to land at an airport

As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct a plane to take off from an airport and confirm that it is no longer in the airport

As an air traffic controller
To ensure safety
I want to prevent takeoff when weather is stormy

As an air traffic controller
To ensure safety
I want to prevent landing when weather is stormy

As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full

As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate
```

## Approach

Test drive the creation of a set of classes/modules to satisfy all the above user stories. Use a random number generator to set the weather (it is normally sunny but on rare occasions it may be stormy).

## Instructions

Fork this repo, and clone to your local machine

**Run tests**

`open SpecRunner.html`

**Run the app**

**GIF TO BE ADDED**

## Tech Used

- JavaScript
- Jasmine
