## Few comments on the railstutorial.org/book for the workshop

###  General remarks

If I remember correctly, it started to take longer to finish chapters around
chapter 8. The last two chapters took really long too, especially 14.

There were some details about using a production environment on Heroku
scattered around the tutorial, but not enough to distract. Those can be easily
skipped.

Overall this tutorial is not too hard to follow and covers a lot of things for
someone who starts it with 0 knowledged about Rails or similar frameworks.

In the following are some comments on the individual chapters.
Lack of details means I don't think anything stood out particularly.

### Chapter 1

Overview of Rails, some parts can be skipped without losing anything:

* Cloud9IDE setup (maybe replace that with a short guide on how to
  setup ruby, rails and bundler)
* Git (there is a git workshop in year 1)
* Deployment using Heroku


### Chapter 2

Simple version of the app that gets taught in chapters 3 to 14, good
introduction to core concepts.

### Chapter 3

Introduces test-driven development*, ERb and `rails g controller
ControllerName`, these three things took a while and practice.

*there is a workshop for Ruby and TDD for year 1 & 2

### Chapter 4

Mainly just Ruby, can be skipped if everyone knows the very basics (see my
mention of the workshop above)

### Chapter 5

Satisfying (since it looks like a modern website now), introduces Bootstrap and 
CSS. One thing that took me some time was the destinction between '.class' and 
'#id', I often mixed them up. This was because I only had to copy his css code,
maybe some 

### Chapter 6

Using the rails console to edit the db was a bit hard at the beginning, but did
not take long to get accustomed to it.

### Chapter 7

I liked learning about debugging with byebug.

### Chapter 8

Another satisfying chapter (logging in)

### Chapter 9

Another good one (remember me)

### Chapter 10

This and the following chapters are quite complex.

### Chapter 12

This is the last chapter of the more generic part. Chapters 13 and 14 add the
twitter-like functionality (posting microposts and following other users)

### Chapter 13

User <-> Micropost associations via `has_many` and `belongs_to` were hard to
understand at first.

### Chapter 14

This was the chapter that took me the longest. It has a lot of content,
adding active relationships.
