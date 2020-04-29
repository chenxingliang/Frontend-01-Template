# 每周总结可以写在这里

## Javascript

- Atom
   - Grammar
      - 简单语句
         - ExpressionStatement
         - EmptyStatement
         - DebuggerStatement
         - ThrowStatement
         - ContinueStatement
         - BreakStatement
         - ReturnStatement
      - 复合语句
         - BlockStatement
         - IfStatement
         - SwitchStatement
         - IterationStatement
         - WithStatement
         - LabelledStatement
         - TryStatement
      - 声明
         - FunctionDeclaration
         - GeneratorDeclaration
         - AsyncFuntionDeclaration
         - VariableStatement
         - ClassDeclaration
         - LexicalDeclaration
   - Runtime
      - Completion Record
      - Lexical Environment
   - Completion Record
      - [[type]]: normal, break, continue, return, throw
      - [[value]]: Types
      - [[target]]: label
- Expression
- Statement
- Structure
- Program/Module

## Types

- Number
- String
- Boolean
- Object
- Null
- Undefined
- Symbol

## Object 

- Prototype
- Class
- Exercise

# JavaScript标准里有哪些对象是我们无法实现的，都有哪些特性？

Bound Function [call] [[construct]]
Array [[DefineOwnProperty]]
String [[GetOwnProperty]] [[DefineOwnProperty]] [[OwnPropertyKeys]]
Arguments [[GetOwnProperty]] [[DefineOwnProperty]] [[Get]] [[Set]] [[Delete]]
IntegerIndexed [[GetOwnProperty]] [[HasOwnProperty]] [[DefineOwnProperty]] [[Get]] [[Set]] [[OwnPropertyKeys]]
Module Namespace [[SetPropertyOf]] [[IsExtensible]] [[PreventExtensions]] [[GetOwnProperty]] [[DefineOwnProperty]] [[HasProperty]] [[Get]] [[Set]] [[Delete]] [[OwnPropertyKeys]]
Immutable Prototype [[SetPrototypeOf]]
