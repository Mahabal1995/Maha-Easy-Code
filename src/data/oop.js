export const oops = [
  {
    slNo: 1,
    question: "What is object-oriented programming (OOP) in Java?",
    answer:
      "Object-oriented programming (OOP) is a programming paradigm that uses objects and classes to design and organize code. It focuses on encapsulating data and behavior within objects, which can communicate and interact with each other. Java is an object-oriented programming language that supports the four main principles of OOP: encapsulation, inheritance, polymorphism, and abstraction.",
  },
  {
    slNo: 2,
    question: "What is a class in Java?",
    answer:
      "In Java, a class is a blueprint for creating objects. It defines the properties (variables) and behaviors (methods) that the objects of the class will have. Classes are used to create instances (objects) in Java, and each object created from a class is referred to as an instance of that class.",
  },
  {
    slNo: 3,
    question: "What is an object in Java?",
    answer:
      "In Java, an object is a runtime instance of a class. It is a basic unit of the object-oriented paradigm and represents a real-world entity with its attributes (variables) and behaviors (methods). Objects in Java have state (values of their variables) and behavior (implemented by methods), and they can interact with other objects through method calls.",
  },
  {
    slNo: 4,
    question: "What is the difference between a class and an object in Java?",
    answer:
      "In Java, a class is a blueprint or template used to create objects, whereas an object is a runtime instance of a class. A class defines the properties and behaviors that objects of that class will have, while an object represents a specific instance of a class with its own unique state and behavior.",
  },
  {
    slNo: 5,
    question: "What is inheritance in Java?",
    answer:
      "Inheritance is a fundamental concept of object-oriented programming in Java, where a class (subclass) can inherit properties and behaviors from another class (superclass). The subclass inherits all the non-private members (variables and methods) of the superclass and can also have its specific members. This allows code reuse and enables creating specialized classes from more general ones.",
  },
  {
    slNo: 6,
    question: "How does encapsulation work in Java?",
    answer:
      "Encapsulation is the principle of bundling data (instance variables) and methods that operate on that data within a single unit called a class. The data is hidden from the outside world and can only be accessed through methods provided by the class. This protects the data from unauthorized access and modification, and it allows the class to have control over its internal state.",
  },
  {
    slNo: 7,
    question: "What is polymorphism in Java?",
    answer:
      "Polymorphism is a concept in Java that allows objects of different classes to be treated as objects of a common superclass through a single interface. It enables a single method or operator to work with different types of objects in a uniform way. There are two types of polymorphism in Java: compile-time (method overloading) and runtime (method overriding).",
  },
  {
    slNo: 8,
    question: "What is abstraction in Java?",
    answer:
      "Abstraction is the process of simplifying complex systems by breaking them down into smaller, more manageable parts. In Java, abstraction is achieved using abstract classes and interfaces. Abstract classes cannot be instantiated and are meant to be extended by subclasses. Interfaces define a contract for classes to implement specific methods without providing an implementation. Abstraction allows developers to focus on essential features while hiding unnecessary details.",
  },
  {
    slNo: 9,
    question:
      "What are the access modifiers in Java, and what do they signify?",
    answer: `In Java, there are four types of access modifiers: public, protected, default (package-private), and private. They control the visibility and accessibility of classes, methods, and variables in different contexts. 

- 'public': The public access modifier allows access from any class and package. 
- 'protected': The protected access modifier allows access from the same package and subclasses.
- Default (Package-Private): If no access modifier is specified, it is considered 'default', which allows access within the same package.
- 'private': The private access modifier restricts access to within the same class only. 

Access modifiers provide encapsulation and control over the visibility of class members.`,
  },
  {
    slNo: 10,
    question: "What is the 'static' keyword in Java, and how is it used?",
    answer: `The 'static' keyword in Java is used to define class-level members, which are associated with the class rather than an instance of the class. It can be applied to variables, methods, blocks, and nested classes.

- Static Variables: A single copy of the variable is shared among all instances of the class.
- Static Methods: Can be called using the class name and are not associated with any particular instance.

Static members are useful for creating utility methods, constants, and variables that are shared among all instances of the class.`,
  },
  {
    slNo: 11,
    question: "What is method overloading in Java?",
    answer:
      "Method overloading is a feature in Java that allows a class to have multiple methods with the same name but different parameters. The parameters can differ in number, order, or type. Java uses the number and type of arguments to determine which overloaded method to call at compile time. Method overloading enables developers to provide multiple ways of invoking a method based on different input arguments.",
  },
  {
    slNo: 12,
    question: "What is method overriding in Java?",
    answer:
      "Method overriding is a feature in Java that allows a subclass to provide a specific implementation for a method that is already defined in its superclass. The method in the subclass must have the same name, return type, and parameters as the method in the superclass. Method overriding is used to achieve runtime polymorphism, where the actual method called is determined by the type of the object at runtime.",
  },
  {
    slNo: 13,
    question: "Define the 'super' keyword in Java and its purpose.",
    answer: `The 'super' keyword in Java is used to refer to the superclass, particularly when a subclass overrides a method from its superclass. It is used to call the superclass's version of the method or access its instance variables.

For example:

class Animal {
    String sound = "Animal sound";

    void makeSound() {
        System.out.println(sound);
    }
}

class Dog extends Animal {
    String sound = "Dog barks";

    void makeSound() {
        System.out.println(sound); // Prints \"Dog barks\"
        System.out.println(super.sound); // Prints \"Animal sound\"
    }
}


The 'super' keyword can also be used to call the superclass constructor from the subclass constructor.`,
  },
  {
    slNo: 14,

    question:
      "What are constructors in Java, and how are they different from methods?",
    answer: `Constructors in Java are special methods that are used to initialize objects of a class. They have the same name as the class and do not have a return type. Constructors are called automatically when an object is created using the 'new' keyword.

Differences between constructors and methods:
- Constructor name must be the same as the class name; method names can be anything.
- Constructors are called automatically during object creation; methods are called explicitly using their names.
- Constructors do not have a return type; methods can have a return type.
- Constructors can only be invoked using the 'new' keyword; methods can be invoked without the 'new' keyword.

Constructors are essential for initializing object state and setting initial values for instance variables.`,
  },
  {
    slNo: 15,
    question: "What is the 'this' keyword used for in Java?",
    answer: `The 'this' keyword in Java is used to refer to the current instance of the class. In constructors, 'this' is used to distinguish between instance variables and parameters with the same name.

Using 'this' allows you to assign the values passed as parameters to the corresponding instance variables. It helps in disambiguating which variable is being referred to, particularly when there is a naming conflict between instance variables and method parameters.`,
  },
  {
    slNo: 16,
    question: "What is the purpose of the 'final' keyword in Java?",
    answer: `The 'final' keyword in Java is used to create entities (variables, methods, and classes) that cannot be changed or extended.

- 'final' Variables: A 'final' variable's value cannot be changed once it is assigned. It behaves like a constant.
- 'final' Methods: A 'final' method cannot be overridden by subclasses. It ensures that the method's implementation remains the same across all subclasses.
- 'final' Classes: A 'final' class cannot be subclassed. It prevents the class from being extended by other classes.

Using 'final' can make code more robust and secure by preventing unintended modifications or extensions.`,
  },
  {
    slNo: 17,
    question: "Explain the 'static' keyword in Java with examples.",
    answer: `The 'static' keyword in Java is used to define class-level members, which are associated with the class rather than an instance of the class. It can be applied to variables, methods, blocks, and nested classes.

- Static Variables: A single copy of the variable is shared among all instances of the class. Changing the value of a static variable will affect all instances.

class MyClass {
    static int count = 0;
    // Other class members and methods
}

public class Main {
    public static void main(String[] args) {
        MyClass obj1 = new MyClass();
        MyClass obj2 = new MyClass();
        obj1.count++; // count is now 1
        obj2.count++; // count is now 2
    }
}

- Static Methods: A static method belongs to the class, not to any specific instance. It can be called using the class name and is not associated with any particular object.

class MathUtils {
    static int add(int a, int b) {
        return a + b;
    }
}

public class Main {
    public static void main(String[] args) {
        int sum = MathUtils.add(5, 3); // sum is 8
    }
}


Static members are useful for creating utility methods, constants, and variables that are shared among all instances of the class.`,
  },
  {
    slNo: 18,
    question: "What is method overloading in Java, and how is it achieved?",
    answer: `Method overloading is a feature in Java that allows a class to have multiple methods with the same name but different parameters. The parameters can differ in number, order, or type. Java uses the number and type of arguments to determine which overloaded method to call at compile time.

Method overloading is achieved by declaring multiple methods with the same name but different parameter lists in the same class. The methods must have unique parameter lists to distinguish them.


class MathUtils {
    int add(int a, int b) {
        return a + b;
    }

    double add(double a, double b) {
        return a + b;
    }
}

public class Main {
    public static void main(String[] args) {
        MathUtils math = new MathUtils();
        int sum1 = math.add(2, 3); // sum1 is 5
        double sum2 = math.add(2.5, 3.5); // sum2 is 6.0
    }
}


In this example, the 'MathUtils' class has two 'add' methods, one for integer addition and one for double addition. The appropriate method is called based on the argument types at compile time.`,
  },
  {
    slNo: 19,
    question: "What is method overriding in Java?",
    answer: `Method overriding is a feature in Java that allows a subclass to provide a specific implementation for a method that is already defined in its superclass. The method in the subclass must have the same name, return type, and parameters as the method in the superclass.

To override a method, the subclass method uses the '@Override' annotation (optional but recommended) to indicate that it is intended to override a superclass method. The 'super' keyword is used to call the superclass's version of the method if needed.

class Animal {
    void makeSound() {
        System.out.println(\"Animal makes a sound\");
    }
}

class Dog extends Animal {
    @Override
    void makeSound() {
        System.out.println(\"Dog barks\");
        super.makeSound(); // Calls the superclass method
    }
}

public class Main {
    public static void main(String[] args) {
        Animal animal = new Dog();
        animal.makeSound(); // Output: Dog barks \n Animal makes a sound
    }
}


In this example, the 'Dog' class overrides the 'makeSound' method from the 'Animal' class and provides its specific implementation. The 'super' keyword is used to call the 'makeSound' method from the 'Animal' class.`,
  },
  {
    slNo: 20,
    question: "What is the 'final' keyword used for in Java?",
    answer: `The 'final' keyword in Java is used to create entities (variables, methods, and classes) that cannot be changed or extended.

- 'final' Variables: A 'final' variable's value cannot be changed once it is assigned. It behaves like a constant.
final int MAX_VALUE = 100;
- 'final' Methods: A 'final' method cannot be overridden by subclasses. It ensures that the method's implementation remains the same across all subclasses.
class Parent {
    final void finalMethod() {
        // Method implementation
    }
}
- 'final' Classes: A 'final' class cannot be subclassed. It prevents the class from being extended by other classes.
final class FinalClass {
    // Class implementation

}
Using 'final' can make code more robust and secure by preventing unintended modifications or extensions.`,
  },
  {
    slNo: 21,
    question: "What is the purpose of the 'abstract' keyword in Java?",
    answer: `The 'abstract' keyword in Java is used to define abstract entities (classes and methods) that cannot be instantiated or have no implementation.

- Abstract Classes: An abstract class cannot be instantiated and can have both abstract and concrete (implemented) methods. Abstract classes are meant to be extended by subclasses, and they can provide a common base for subclasses to implement specific behaviors.

abstract class Shape {
    abstract void draw(); // Abstract method without implementation

    void area() {
        // Concrete method with implementation
    }
}

- Abstract Methods: An abstract method is declared without providing a method body. It is meant to be implemented by the subclass. Any class that extends an abstract class must provide concrete implementations for all its abstract methods.

abstract class Shape {
    abstract void draw(); // Abstract method without implementation
}
class Circle extends Shape {
    void draw() {
        // Implementation for the draw() method
    }
}

The 'abstract' keyword helps in achieving abstraction and providing a contract for subclasses to follow while allowing flexibility in implementing specific behaviors.`,
  },
  {
    slNo: 22,
    question:
      "What is the difference between an abstract class and an interface in Java?",
    answer: `In Java, both abstract classes and interfaces are used to achieve abstraction, but they have some differences:

- Abstract Class:
   - An abstract class can have both abstract (without implementation) and concrete (with implementation) methods.
   - An abstract class can have instance variables that can be inherited by subclasses.
   - An abstract class can have constructors.
   - A class can extend only one abstract class.

- Interface:
   - An interface can only have abstract methods (all methods are implicitly abstract and public).
   - An interface cannot have instance variables (all variables are implicitly public, static, and final).
   - An interface cannot have constructors.
   - A class can implement multiple interfaces.

Choosing between an abstract class and an interface depends on the specific design requirements. Use an abstract class when you want to provide a common base with some shared implementation, and use an interface when you want to define a contract without specifying any implementation.`,
  },
  {
    slNo: 23,
    question: "What is the 'final' keyword used for in Java?",
    answer: `The 'final' keyword in Java is used to create entities (variables, methods, and classes) that cannot be changed or extended.

- 'final' Variables: A 'final' variable's value cannot be changed once it is assigned. It behaves like a constant.

final int MAX_VALUE = 100;

- 'final' Methods: A 'final' method cannot be overridden by subclasses. It ensures that the method's implementation remains the same across all subclasses.

class Parent {
    final void finalMethod() {
        // Method implementation
    }
}

- 'final' Classes: A 'final' class cannot be subclassed. It prevents the class from being extended by other classes.

final class FinalClass {
    // Class implementation
}

Using 'final' can make code more robust and secure by preventing unintended modifications or extensions.`,
  },
  {
    slNo: 24,
    question:
      "What are the access modifiers in Java, and what do they signify?",
    answer: `In Java, there are four types of access modifiers: public, protected, default (package-private), and private. They control the visibility and accessibility of classes, methods, and variables in different contexts.

- 'public': The public access modifier allows access from any class and package. It has the widest scope of accessibility.

public class MyClass {
    // Public class accessible from any package
    public int publicVariable;
    // Public method accessible from any package
    public void publicMethod() {
        // Method implementation
    }
}

- 'protected': The protected access modifier allows access from the same package and subclasses. It is used for providing restricted access to certain members.

class MyClass {
    // Protected variable accessible within the same package and subclasses
    protected int protectedVariable;
    // Protected method accessible within the same package and subclasses
    protected void protectedMethod() {
        // Method implementation
    }
}
- Default (Package-Private): If no access modifier is specified, it is considered 'default', which allows access within the same package. It is used when no access control is necessary.
class MyClass {
    // Default variable accessible within the same package
    int defaultVariable;
    // Default method accessible within the same package
    void defaultMethod() {
        // Method implementation
    }
}
- 'private': The private access modifier restricts access to within the same class only. It is used for encapsulation and to hide implementation details from external classes.
class MyClass {
    // Private variable accessible only within the same class
    private int privateVariable;
    // Private method accessible only within the same class
    private void privateMethod() {
        // Method implementation
    }
}

Access modifiers provide encapsulation and control over the visibility of class members.`,
  },
  {
    slNo: 25,
    question: "What is the role of the 'static' keyword in Java?",
    answer: `The 'static' keyword in Java is used to define class-level members, which are associated with the class rather than an instance of the class. It can be applied to variables, methods, blocks, and nested classes.

- Static Variables: A single copy of the variable is shared among all instances of the class. Changing the value of a static variable will affect all instances.

class MyClass {
    static int count = 0;
    // Other class members and methods
}

public class Main {
    public static void main(String[] args) {
        MyClass obj1 = new MyClass();
        MyClass obj2 = new MyClass();
        obj1.count++; // count is now 1
        obj2.count++; // count is now 2
    }
}

- Static Methods: A static method belongs to the class, not to any specific instance. It can be called using the class name and is not associated with any particular object.

class MathUtils {
    static int add(int a, int b) {
        return a + b;
    }
}

public class Main {
    public static void main(String[] args) {
        int sum = MathUtils.add(5, 3); // sum is 8
    }
}


Static members are useful for creating utility methods, constants, and variables that are shared among all instances of the class.`,
  },
  {
    slNo: 26,
    question: "What is method overloading in Java, and how is it achieved?",
    answer: `Method overloading is a feature in Java that allows a class to have multiple methods with the same name but different parameters. The parameters can differ in number, order, or type. Java uses the number and type of arguments to determine which overloaded method to call at compile time.

Method overloading is

 achieved by declaring multiple methods with the same name but different parameter lists in the same class. The methods must have unique parameter lists to distinguish them.

class MathUtils {
    int add(int a, int b) {
        return a + b;
    }

    double add(double a, double b) {
        return a + b;
    }
}

public class Main {
    public static void main(String[] args) {
        MathUtils math = new MathUtils();
        int sum1 = math.add(2, 3); // sum1 is 5
        double sum2 = math.add(2.5, 3.5); // sum2 is 6.0
    }
}
In this example, the 'MathUtils' class has two 'add' methods, one for integer addition and one for double addition. The appropriate method is called based on the argument types at compile time.`,
  },
  {
    slNo: 27,
    question: "What is method overriding in Java, and how is it achieved?",
    answer: `Method overriding is a feature in Java that allows a subclass to provide a specific implementation for a method that is already defined in its superclass. The method in the subclass must have the same name, return type, and parameters as the method in the superclass.

To override a method, the subclass method uses the '@Override' annotation (optional but recommended) to indicate that it is intended to override a superclass method. The 'super' keyword is used to call the superclass's version of the method if needed.

class Animal {
    void makeSound() {
        System.out.println(\"Animal makes a sound\");
    }
}

class Dog extends Animal {
    @Override
    void makeSound() {
        System.out.println(\"Dog barks\");
        super.makeSound(); // Calls the superclass method
    }
}

public class Main {
    public static void main(String[] args) {
        Animal animal = new Dog();
        animal.makeSound(); // Output: Dog barks \n Animal makes a sound
    }
}


In this example, the 'Dog' class overrides the 'makeSound' method from the 'Animal' class and provides its specific implementation. The 'super' keyword is used to call the 'makeSound' method from the 'Animal' class.`,
  },
  {
    slNo: 28,
    question: "What is the 'super' keyword in Java, and how is it used?",
    answer: `The 'super' keyword in Java is used to refer to the superclass, particularly when a subclass overrides a method from its superclass. It is used to call the superclass's version of the method or access its instance variables.

For example:

class Animal {
    String sound = \"Animal sound\";

    void makeSound() {
        System.out.println(sound);
    }
}

class Dog extends Animal {
    String sound = \"Dog barks\";

    void makeSound() {
        System.out.println(sound); // Prints \"Dog barks\"
        System.out.println(super.sound); // Prints \"Animal sound\"
    }
}


The 'super' keyword can also be used to call the superclass constructor from the subclass constructor.`,
  },
  {
    slNo: 29,
    question: "What is the 'this' keyword used for in Java?",
    answer: `The 'this' keyword in Java is used to refer to the current instance of the class. In constructors, 'this' is used to distinguish between instance variables and parameters with the same name.

Using 'this' allows you to assign the values passed as parameters to the corresponding instance variables. It helps in disambiguating which variable is being referred to, particularly when there is a naming conflict between instance variables and method parameters.`,
  },
  {
    slNo: 30,
    question: "What is the purpose of the 'final' keyword in Java?",
    answer: `The 'final' keyword in Java is used to create entities (variables, methods, and classes) that cannot be changed or extended.

- 'final' Variables: A 'final' variable's value cannot be changed once it is assigned. It behaves like a constant.
final int MAX_VALUE = 100;
- 'final' Methods: A 'final' method cannot be overridden by subclasses. It ensures that the method's implementation remains the same across all subclasses.
class Parent {
    final void finalMethod() {
        // Method implementation
    }
}
- 'final' Classes: A 'final' class cannot be subclassed. It prevents the class from being extended by other classes.
final class FinalClass {
    // Class implementation
}


Using 'final' can make code more robust and secure by preventing unintended modifications or extensions.`,
  },
  {
    slNo: 31,
    question:
      "What are the access modifiers in Java, and what do they signify?",
    answer: `In Java, there are four types of access modifiers: public, protected, default (package-private), and private. They control the visibility and accessibility of classes, methods, and variables in different contexts.
- 'public': The public access modifier allows access from any class and package. It has the widest scope of accessibility.
public class MyClass {
    // Public class accessible from any package
    public int publicVariable;
    // Public method accessible from any package
    public void publicMethod() {
        // Method implementation
    }
}
- 'protected': The protected access modifier allows access from the same package and subclasses. It is used for providing restricted access to certain members.
class MyClass {
    // Protected variable accessible within the same package and subclasses
    protected int protectedVariable;
    // Protected method accessible within the same package and subclasses
    protected void protectedMethod() {
        // Method implementation
    }
}
- Default (Package-Private): If no access modifier is specified, it is considered 'default', which allows access within the same package. It is used when no access control is necessary.
class MyClass {
    // Default variable accessible within the same package
    int defaultVariable;
    // Default method accessible within the same package
    void defaultMethod() {
        // Method implementation
    }
}
- 'private': The private access modifier restricts access to within the same class only. It is used for encapsulation and to hide implementation details from external classes.
class MyClass {
    // Private variable accessible only within the same class
    private int privateVariable;
    // Private method accessible only within the same class
    private void privateMethod() {
        // Method implementation
    }
}
Access modifiers provide encapsulation and control over the visibility of class members.`,
  },
  {
    slNo: 32,
    question: "What is the role of the 'static' keyword in Java?",
    answer: `The 'static' keyword in Java is used to define class-level members, which are associated with the class rather than an instance of the class. It can be applied to variables, methods, blocks, and nested classes.

- Static Variables: A single copy of the variable is shared among all instances of the class. Changing the value of a static variable will affect all instances.

class MyClass {
 static int count = 0;
    // Other class members and methods
}

public class Main {
    public static void main(String[] args) {
        MyClass obj1 = new MyClass();
        MyClass obj2 = new MyClass();
        obj1.count++; // count is now 1
        obj2.count++; // count is now 2
    }
}

- Static Methods: A static method belongs to the class, not to any specific instance. It can be called using the class name and is not associated with any particular object.

class MathUtils {
    static int add(int a, int b) {
        return a + b;
    }
}

public class Main {
    public static void main(String[] args) {
        int sum = MathUtils.add(5, 3); // sum is 8
    }
}


Static members are useful for creating utility methods, constants, and variables that are shared among all instances of the class.`,
  },
  {
    slNo: 33,
    question: "What is method overloading in Java, and how is it achieved?",
    answer: `Method overloading is a feature in Java that allows a class to have multiple methods with the same name but different parameters. The parameters can differ in number, order, or type. Java uses the number and type of arguments to determine which overloaded method to call at compile time.

Method overloading is achieved by declaring multiple methods with the same name but different parameter lists in the same class. The methods must have unique parameter lists to distinguish them.


class MathUtils {
    int add(int a, int b) {
        return a + b;
    }

    double add(double a, double b) {
        return a + b;
    }
}

public class Main {
    public static void main(String[] args) {
        MathUtils math = new MathUtils();
        int sum1 = math.add(2, 3); // sum1 is 5
        double sum2 = math.add(2.5, 3.5); // sum2 is 6.0
    }
}

In this example, the 'MathUtils' class has two 'add' methods, one for integer addition and one for double addition. The appropriate method is called based on the argument types at compile time."
    },
    {
        "slNo": 34,
        "question": "What is method overriding in Java, and how is it achieved?",
        "answer": "Method overriding is a feature in Java that allows a subclass to provide a specific implementation for a method that is already defined in its superclass. The method in the subclass must have the same name, return type, and parameters as the method in the superclass.

To override a method, the subclass method uses the '@Override' annotation (optional but recommended) to indicate that it is intended to override a superclass method. The 'super' keyword is used to call the superclass's version of the method if needed.

class Animal {
    void makeSound() {
        System.out.println(\"Animal makes a sound\");
    }
}

class Dog extends Animal {
    @Override
    void makeSound() {
        System.out.println(\"Dog barks\");
        super.makeSound(); // Calls the superclass method
    }
}

public class Main {
    public static void main(String[] args) {
        Animal animal = new Dog();
        animal.makeSound(); // Output: Dog barks \n Animal makes a sound
    }
}

In this example, the 'Dog' class overrides the 'makeSound' method from the 'Animal' class and provides its specific implementation. The 'super' keyword is used to call the 'makeSound' method from the 'Animal' class.`,
  },
  {
    slNo: 35,
    question: "What is the 'super' keyword in Java, and how is it used?",
    answer: `The 'super' keyword in Java is used to refer to the superclass, particularly when a subclass overrides a method from its superclass. It is used to call the superclass's version of the method or access its instance variables.

For example:

class Animal {
    String sound = \"Animal sound\";

    void makeSound() {
        System.out.println(sound);
    }
}

class Dog extends Animal {
    String sound = \"Dog barks\";

    void makeSound() {
        System.out.println(sound); // Prints \"Dog barks\"
        System.out.println(super.sound); // Prints \"Animal sound\"
    }
}

The 'super' keyword can also be used to call the superclass constructor from the subclass constructor.`,
  },
  {
    slNo: 36,
    question: "What is the 'this' keyword used for in Java?",
    answer: `The 'this' keyword in Java is used to refer to the current instance of the class. In constructors, 'this' is used to distinguish between instance variables and parameters with the same name.
Using 'this' allows you to assign the values passed as parameters to the corresponding instance variables. It helps in disambiguating which variable is being referred to, particularly when there is a naming conflict between instance variables and method parameters.`,
  },
  {
    slNo: 37,
    question: "What is the purpose of the 'final' keyword in Java?",
    answer: `The 'final' keyword in Java is used to create entities (variables, methods, and classes) that cannot be changed or extended.

- 'final' Variables: A 'final' variable's value cannot be changed once it is assigned. It behaves like a constant.
final int MAX_VALUE = 100;
- 'final' Methods: A 'final' method cannot be overridden by subclasses. It ensures that the method's implementation remains the same across all subclasses.
class Parent {
    final void finalMethod() {
        // Method implementation
    }
}
- 'final' Classes: A 'final' class cannot be subclassed. It prevents the class from being extended by other classes.
final class FinalClass {
    // Class implementation
}

Using 'final' can make code more robust and secure by preventing unintended modifications or extensions.`,
  },
  {
    slNo: 38,
    question:
      "What are the access modifiers in Java, and what do they signify?",
    answer: `In Java, there are four types of access modifiers: public, protected, default (package-private), and private. They control the visibility and accessibility of classes, methods, and variables in different contexts.
- 'public': The public access modifier allows access from any class and package. It has the widest scope of accessibility.

public class MyClass {
    // Public class accessible from any package
    public int publicVariable;
    // Public method accessible from any package
    public void publicMethod() {
        // Method implementation
    }
}

- 'protected': The protected access modifier allows access from the same package and subclasses. It is used for providing restricted access to certain members.

class MyClass {
    // Protected variable accessible within the same package and subclasses
    protected int protectedVariable;
    // Protected method accessible within the same package and subclasses
    protected void protectedMethod() {
        // Method implementation
    }
}

- Default (Package-Private):

 If no access modifier is specified, it is considered 'default', which allows access within the same package. It is used when no access control is necessary.

class MyClass {
    // Default variable accessible within the same package
    int defaultVariable;
    // Default method accessible within the same package
    void defaultMethod() {
        // Method implementation
    }
}

- 'private': The private access modifier restricts access to within the same class only. It is used for encapsulation and to hide implementation details from external classes.

class MyClass {
    // Private variable accessible only within the same class
    private int privateVariable;
    // Private method accessible only within the same class
    private void privateMethod() {
        // Method implementation
    }
}

Access modifiers provide encapsulation and control over the visibility of class members.`,
  },
  {
    slNo: 39,
    question: "What is the role of the 'static' keyword in Java?",
    answer: `The 'static' keyword in Java is used to define class-level members, which are associated with the class rather than an instance of the class. It can be applied to variables, methods, blocks, and nested classes.

- Static Variables: A single copy of the variable is shared among all instances of the class. Changing the value of a static variable will affect all instances.

class MyClass {
    static int count = 0;
    // Other class members and methods
}

public class Main {
    public static void main(String[] args) {
        MyClass obj1 = new MyClass();
        MyClass obj2 = new MyClass();
        obj1.count++; // count is now 1
        obj2.count++; // count is now 2
    }
}

- Static Methods: A static method belongs to the class, not to any specific instance. It can be called using the class name and is not associated with any particular object.

class MathUtils {
    static int add(int a, int b) {
        return a + b;
    }
}

public class Main {
    public static void main(String[] args) {
        int sum = MathUtils.add(5, 3); // sum is 8
    }
}


Static members are useful for creating utility methods, constants, and variables that are shared among all instances of the class.`,
  },
  {
    slNo: 40,
    question: "What is method overloading in Java, and how is it achieved?",
    answer: `Method overloading is a feature in Java that allows a class to have multiple methods with the same name but different parameters. The parameters can differ in number, order, or type. Java uses the number and type of arguments to determine which overloaded method to call at compile time.

Method overloading is achieved by declaring multiple methods with the same name but different parameter lists in the same class. The methods must have unique parameter lists to distinguish them.

class MathUtils {
    int add(int a, int b) {
        return a + b;
    }

    double add(double a, double b) {
        return a + b;
    }
}

public class Main {
    public static void main(String[] args) {
        MathUtils math = new MathUtils();
        int sum1 = math.add(2, 3); // sum1 is 5
        double sum2 = math.add(2.5, 3.5); // sum2 is 6.0
    }
}

In this example, the 'MathUtils' class has two 'add' methods, one for integer addition and one for double addition. The appropriate method is called based on the argument types at compile time.`,
  },
  {
    slNo: 41,
    question: "What is method overriding in Java, and how is it achieved?",
    answer: `Method overriding is a feature in Java that allows a subclass to provide a specific implementation for a method that is already defined in its superclass. The method in the subclass must have the same name, return type, and parameters as the method in the superclass.

To override a method, the subclass method uses the '@Override' annotation (optional but recommended) to indicate that it is intended to override a superclass method. The 'super' keyword is used to call the superclass's version of the method if needed.

class Animal {
    void makeSound() {
        System.out.println(\"Animal makes a sound\");
    }
}

class Dog extends Animal {
    @Override
    void makeSound() {
        System.out.println(\"Dog barks\");
        super.makeSound(); // Calls the superclass method
    }
}

public class Main {
    public static void main(String[] args) {
        Animal animal = new Dog();
        animal.makeSound(); // Output: Dog barks \n Animal makes a sound
    }
}

In this example, the 'Dog' class overrides the 'makeSound' method from the 'Animal' class and provides its specific implementation. The 'super' keyword is used to call the 'makeSound' method from the 'Animal' class.`,
  },
  {
    slNo: 42,
    question: "What is the 'super' keyword in Java, and how is it used?",
    answer: `The 'super' keyword in Java is used to refer to the superclass, particularly when a subclass overrides a method from its superclass. It is used to call the superclass's version of the method or access its instance variables.

For example:

class Animal {
    String sound = \"Animal sound\";

    void makeSound() {
        System.out.println(sound);
    }
}

class Dog extends Animal {
    String sound = \"Dog barks\";

    void makeSound() {
        System.out.println(sound); // Prints \"Dog barks\"
        System.out.println(super.sound); // Prints \"Animal sound\"
    }
}

The 'super' keyword can also be used to call the superclass constructor from the subclass constructor.`,
  },
  {
    slNo: 43,
    question: "What is the 'this' keyword used for in Java?",
    answer: `The 'this' keyword in Java is used to refer to the current instance of the class. In constructors, 'this' is used to distinguish between instance variables and parameters with the same name.
Using 'this' allows you to assign the values passed as parameters to the corresponding instance variables. It helps in disambiguating which variable is being referred to, particularly when there is a naming conflict between instance variables and method parameters.`,
  },
  {
    slNo: 44,
    question: "What is the purpose of the 'final' keyword in Java?",
    answer: `The 'final' keyword in Java is used to create entities (variables, methods, and classes) that cannot be changed or extended.

- 'final' Variables: A 'final' variable's value cannot be changed once it is assigned. It behaves like a constant.

final int MAX_VALUE = 100;
- 'final' Methods: A 'final' method cannot be overridden by subclasses. It ensures that the method's implementation remains the same across all subclasses.
class Parent {
    final void finalMethod() {
        // Method implementation
    }
}

- 'final'

 Classes: A 'final' class cannot be subclassed. It prevents the class from being extended by other classes.

final class FinalClass {
    // Class implementation
}

Using 'final' can make code more robust and secure by preventing unintended modifications or extensions.`,
  },
  {
    slNo: 45,
    question:
      "What are the access modifiers in Java, and what do they signify?",
    answer: `In Java, there are four types of access modifiers: public, protected, default (package-private), and private. They control the visibility and accessibility of classes, methods, and variables in different contexts.

- 'public': The public access modifier allows access from any class and package. It has the widest scope of accessibility.

public class MyClass {
    // Public class accessible from any package
    public int publicVariable;
    // Public method accessible from any package
    public void publicMethod() {
        // Method implementation
    }
}

- 'protected': The protected access modifier allows access from the same package and subclasses. It is used for providing restricted access to certain members.

class MyClass {
    // Protected variable accessible within the same package and subclasses
    protected int protectedVariable;
    // Protected method accessible within the same package and subclasses
    protected void protectedMethod() {
        // Method implementation
    }
}

- Default (Package-Private): If no access modifier is specified, it is considered 'default', which allows access within the same package. It is used when no access control is necessary.

class MyClass {
    // Default variable accessible within the same package
    int defaultVariable;
    // Default method accessible within the same package
    void defaultMethod() {
        // Method implementation
    }
}

- 'private': The private access modifier restricts access to within the same class only. It is used for encapsulation and to hide implementation details from external classes.

class MyClass {
    // Private variable accessible only within the same class
    private int privateVariable;
    // Private method accessible only within the same class
    private void privateMethod() {
        // Method implementation
    }
}


Access modifiers provide encapsulation and control over the visibility of class members.`,
  },
  {
    slNo: 46,
    question: "What is the role of the 'static' keyword in Java?",
    answer: `The 'static' keyword in Java is used to define class-level members, which are associated with the class rather than an instance of the class. It can be applied to variables, methods, blocks, and nested classes.

- Static Variables: A single copy of the variable is shared among all instances of the class. Changing the value of a static variable will affect all instances.

class MyClass {
    static int count = 0;
    // Other class members and methods
}

public class Main {
    public static void main(String[] args) {
        MyClass obj1 = new MyClass();
        MyClass obj2 = new MyClass();
        obj1.count++; // count is now 1
        obj2.count++; // count is now 2
    }
}

- Static Methods: A static method belongs to the class, not to any specific instance. It can be called using the class name and is not associated with any particular object.

class MathUtils {
    static int add(int a, int b) {
        return a + b;
    }
}

public class Main {
    public static void main(String[] args) {
        int sum = MathUtils.add(5, 3); // sum is 8
    }
}


Static members are useful for creating utility methods, constants, and variables that are shared among all instances of the class.`,
  },
];
