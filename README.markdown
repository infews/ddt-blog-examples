Raise your hand if you agree that your tests are not just functional drivers or regression preventers but also documentation of your application. Good.

Now raise your hand if your tests have:

  * common setup implemented as a separate function that is called in multiple tests
  * complex custom assertions that are implemented as functions

If your hand is up you probably have pretty DRY test code.

Why? Indirection and encapsulation in tests often just make it harder for me to understand what your test, and therefore your application, is trying to do.  And remember that _me_ means _you three weeks to six months from now_.

"But Davis", you say, "what about shared code in my tests? Sharing is good!"

Agreed. So let's share code in ways that don't compromise the comprehensibility of the tests.

I'm going to make a key assumption that you're using a BDD system for your tests (the examples below use Jasmine & JavaScript) because then you have useful constructs and guides for code reuse.

## Sharing Setup Among Varying Expectations

The most common place to share code is with common setup.  So you write a function:

  * [soccer-ball-spec.js](http://github.com/infews/ddt-blog-examples/blob/master/spec/soccer-ball-spec.js)

BDD frameworks give you a test context with a `before` function for exactly this purpose. Your setup is clamoring to be written once, but instead of hiding this into a scoped function, put it in a `before` at the top of your `describe` block like this:

  * [soccer-ball-refactored-spec.js](http://github.com/infews/ddt-blog-examples/blob/master/spec/soccer-ball-refactored-spec.js)

Isn't that better?  You get code sharing, but in a common construct that means your test reads nicely top-to-bottom. And when it reads nicely, it's easier to understand.

"That's fine for common setup, but what if I have setup differences, but the expectations are essentially the same?"  Say, peer classes that have identical or overlapping behavior?

## Sharing Expectations Among Varying Setups

So, what you're saying is that you've got something like this:

  * [soccer-and-playground-spec.js](http://github.com/infews/ddt-blog-examples/blob/master/spec/soccer-and-playground-spec.js)

Your setup varies just by the class or object under test. And the objects share some behavior, but not all. So let's build a shared example group.

  * [soccer-and-playground-refactored-spec.js](http://github.com/infews/ddt-blog-examples/blob/master/spec/soccer-and-playground-refactored-spec.js)

Yes, the expectations are 'hiding' up at the top of the file or even in another file. This is still indirection, but when I look at that block of code I don't have to change mental contexts to understand what's going on. It's just a collection of `describe`s and `it`s and I know how to read those.

## DDT

So it's OK to have DRY tests. Just don't DRY them to the point of being crumbling dust - don't _desiccate_ your tests. DDT for short. Use the tools your test framework provides to factor your tests sensibly and you preserve readability. You and your team will thank your the next time you revisit this test code.
