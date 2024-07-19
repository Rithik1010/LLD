# Decorator Pattern

If we don’t use the decorator pattern, we will have to create classes for each combination. By using decorators, we can dynamically add functionalities.

![Sample Use Case](../../images/decorator-example.png)

## Pros and Cons

**Pros:**

-   You can extend an object’s behavior without making a new subclass.
-   You can add responsibilities to an object at runtime.
-   You can combine several behaviors by wrapping an object in multiple decorators.
-   Single Responsibility Principle. You can divide a monolithic class that implements many possible variants of behavior into several smaller classes.

**Cons:**

-   It’s hard to remove a specific wrapper from the wrapper stack.
-   It’s hard to implement a decorator in such a way that its behavior doesn’t depend on the order in the decorator stack.
