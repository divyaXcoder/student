// ==========================================
// CENTRAL CONCEPTUAL QUIZ DATABASE OBJECT
// ==========================================
const quizDatabase = {
  discreteMaths: [
    {
      id: 1,
      question: "Let $G$ be a simple undirected graph with 8 vertices. If every vertex has a degree of 3, what is the exact number of edges in $G$?",
      options: ["24 edges", "12 edges", "8 edges", "16 edges"],
      answer: "12 edges"
    },
    {
      id: 2,
      question: "Consider an algebraic structure $(G, *)$ where $G$ is a finite set. To qualify specifically as an Abelian Group, which property must it hold beyond standard group axioms?",
      options: [
        "The existence of a unique identity element",
        "The commutative property: $a * b = b * a$ for all $a, b \\in G$",
        "The strict condition that every element must be its own self-inverse",
        "The associative mapping condition"
      ],
      answer: "The commutative property: $a * b = b * a$ for all $a, b \\in G$"
    },
    {
      id: 3,
      question: "What is the total number of unique binary relations that can be defined from a set $A$ containing 3 elements to a set $B$ containing 2 elements?",
      options: ["$2^5$", "$2^6$", "$6^2$", "$5^2$"],
      answer: "$2^6$"
    },
    {
      id: 4,
      question: "A partially ordered set (Poset) $(A, \\le)$ is structurally classified as a 'Lattice' if and only if every pair of elements has which properties?",
      options: [
        "A unique lower bound only",
        "Both a Greatest Lower Bound (GLB) and a Least Upper Bound (LUB)",
        "A strict linear chain order",
        "A maximal and minimal boundary sequence matrix"
      ],
      answer: "Both a Greatest Lower Bound (GLB) and a Least Upper Bound (LUB)"
    },
    {
      id: 5,
      question: "In propositional logic, if a compound proposition is structurally true for all possible truth configurations of its component variables, it is termed a:",
      options: ["Contradiction", "Contingency", "Tautology", "Valid Satisfiability Predicate"],
      answer: "Tautology"
    },
    {
      id: 6,
      question: "What is the maximum number of edges possible in a simple connected planar graph containing $v$ vertices, where $v \\ge 3$?",
      options: ["$3v - 6$", "$2v - 4$", "$3v + 6$", "$n(n-1)/2$"],
      answer: "$3v - 6$"
    },
    {
      id: 7,
      question: "Under Euler's formula for connected planar graphs, if a graph has 12 vertices and 8 regions/faces, how many edges must it contain?",
      options: ["14 edges", "18 edges", "20 edges", "16 edges"],
      answer: "18 edges"
    },
    {
      id: 8,
      question: "Which properties must a relation $R$ defined on a set $A$ satisfy simultaneously to be classified as a strict Equivalence Relation?",
      options: [
        "Reflexive, Symmetric, and Transitive",
        "Reflexive, Anti-symmetric, and Transitive",
        "Irreflexive, Symmetric, and Asymmetric",
        "Closure, Identity, and Inverse"
      ],
      answer: "Reflexive, Symmetric, and Transitive"
    },
    {
      id: 9,
      question: "According to the Principle of Inclusion-Exclusion, for three finite sets $A$, $B$, and $C$, the expression for $|A \\cup B \\cup C|$ subtracts which intersections first?",
      options: [
        "The triple intersection $|A \\cap B \\cap C|$",
        "The double intersections: $|A \\cap B| + |B \\cap C| + |A \\cap C|$",
        "The individual set sizes: $|A| + |B| + |C|$",
        "No values are subtracted in this theorem expansion"
      ],
      answer: "The double intersections: $|A \\cap B| + |B \\cap C| + |A \\cap C|$"
    },
    {
      id: 10,
      question: "A graph is structurally defined as a Tree if it satisfies which minimal combined set of topological criteria?",
      options: [
        "It is directed and has regular vertex degree bounds",
        "It is connected and contains no simple cycles (acyclic)",
        "It contains an even number of vertices and matching parallel faces",
        "It can be parsed completely into a bipartite Hamiltonian path alignment"
      ],
      answer: "It is connected and contains no simple cycles (acyclic)"
    }
  ],

  dbms: [
    {
      id: 1,
      question: "Given a relational schema $R(A, B, C, D)$ with functional dependencies $A \\rightarrow B$ and $B \\rightarrow C$. If $A$ is the primary key, which normal form condition does this relation violate due to a transitive dependency?",
      options: ["1NF condition", "2NF condition", "3NF condition", "BCNF structural rule"],
      answer: "3NF condition"
    },
    {
      id: 2,
      question: "During transaction execution under a 2-Phase Locking (2PL) protocol, what happens once a transaction enters its shrinking phase?",
      options: [
        "It can acquire new exclusive locks but cannot release any shared locks",
        "It can release existing locks but is strictly forbidden from acquiring any new locks",
        "It must immediately commit all internal memory adjustments to disk",
        "It releases all shared and exclusive locks instantly in a single atomic cycle"
      ],
      answer: "It can release existing locks but is strictly forbidden from acquiring any new locks"
    },
    {
      id: 3,
      question: "Which specific relational algebra operational symbol represents the 'PROJECT' configuration filter?",
      options: ["$\\sigma$ (Sigma)", "$\\pi$ (Pi)", "$\\bowtie$ (Join)", "$\\rho$ (Rho)"],
      answer: "$\\pi$ (Pi)"
    },
    {
      id: 4,
      question: "In Database storage architectures, what is the primary structural advantage of a $B^+$ Tree index structure over a traditional standard Binary Search Tree?",
      options: [
        "It ensures records are encrypted systematically on disks",
        "It maintains a very low height-balanced fan-out structure, minimizing costly random disk I/O operations for range queries",
        "It completely eliminates the processing overhead of structural locking during updates",
        "It processes string evaluations faster through linear index string arrays"
      ],
      answer: "It maintains a very low height-balanced fan-out structure, minimizing costly random disk I/O operations for range queries"
    },
    {
      id: 5,
      question: "If a relational table schema configuration has a composite primary key, what type of dependency is present if a non-prime attribute depends on only a part of that primary key?",
      options: ["Transitive Dependency", "Partial Dependency", "Trivial Functional Dependency", "Multi-valued Join Constraint"],
      answer: "Partial Dependency"
    },
    {
      id: 6,
      question: "To satisfy the rigorous constraints of the Second Normal Form (2NF), a relation table layout must already be in 1NF and must completely eliminate which tracking anomaly?",
      options: ["Transitive Dependencies", "Partial Dependencies", "Overlapping Candidate Keys", "Referential Integrity Violations"],
      answer: "Partial Dependencies"
    },
    {
      id: 7,
      question: "What transaction isolation storage reading anomaly occurs when a transaction reads data modified by another parallel transaction that has not committed yet?",
      options: ["Non-repeatable Read pattern", "Dirty Read anomaly", "Phantom Read state conflict", "Lost Update sequence overwrite"],
      answer: "Dirty Read anomaly"
    },
    {
      id: 8,
      question: "The structural constraint enforce condition rule 'Cascading Delete' inside a SQL foreign key declaration tells the database engine to do what?",
      options: [
        "Block any delete operations on parent primary key pointer rows completely",
        "Automatically delete all matching child table row entries whenever the referenced parent row is dropped",
        "Set all matching child foreign key cell values to NULL dynamically",
        "Throw an alert error log array code flag trace back directly to the terminal console"
      ],
      answer: "Automatically delete all matching child table row entries whenever the referenced parent row is dropped"
    },
    {
      id: 9,
      question: "Which log-based database recovery mechanism writes data updates to the physical disk storage media immediately during transaction operations before the commit phase completes?",
      options: ["Deferred Update technique", "Immediate Update technique", "Shadow Paging schema", "Asynchronous Cache Dumping"],
      answer: "Immediate Update technique"
    },
    {
      id: 10,
      question: "In the context of the relational model, a Superkey is mathematically defined as a set of one or more attributes that:",
      options: [
        "Must be the absolute minimal set of cells required to index a data row",
        "Collectively identify tuples uniquely within a relation mapping state",
        "Can only contain foreign reference indexing values",
        "Is always chosen directly by the database system administrator as the primary sequence filter"
      ],
      answer: "Collectively identify tuples uniquely within a relation mapping state"
    }
  ],

  microprocessors: [
    {
      id: 1,
      question: "In the 8085 microprocessor architecture, if the Accumulator contains $A7\\text{H}$ and the instruction `ADD A` is executed, how are the Zero (Z) flag and Carry (CY) flag affected?",
      options: ["$Z = 0, CY = 0$", "$Z = 1, CY = 1$", "$Z = 0, CY = 1$", "$Z = 1, CY = 0$"],
      answer: "$Z = 0, CY = 1$"
    },
    {
      id: 2,
      question: "Which bus line architecture in the 8085 microprocessor is strictly unidirectional?",
      options: ["The Data Bus", "The Control Bus", "The Address Bus", "The Status Line Bus"],
      answer: "The Address Bus"
    },
    {
      id: 3,
      question: "What is the exact purpose of the `ALE` (Address Latch Enable) signal line during the first machine cycle ($T_1$ state) of an 8085 processor execution loop?",
      options: [
        "To alert an external device that an interrupt acknowledgment has occurred",
        "To demultiplex the lower-order address/data bus ($AD_0 - AD_7$) by latching the address lines",
        "To force the execution controller to step into a fast wait-state cycle",
        "To switch the microprocessor execution pipeline from 8-bit to 16-bit processing mode"
      ],
      answer: "To demultiplex the lower-order address/data bus ($AD_0 - AD_7$) by latching the address lines"
    },
    {
      id: 4,
      question: "If the 8085 microprocessor executes the instruction `SIM` (Set Interrupt Mask) while the Accumulator holds the byte value $0B\\text{H}$ ($00001011_2$), what structural change occurs?",
      options: [
        "RST 7.5 and RST 6.5 are masked, and serial data transmission is completely disabled",
        "RST 5.5 is masked, RST 7.5 is reset, and the entire mask configuration sequence is actively enabled via MSE",
        "All hardware maskable interrupts are instantly unmasked simultaneously",
        "The system enters a permanent non-maskable TRAP routing execution phase"
      ],
      answer: "RST 5.5 is masked, RST 7.5 is reset, and the entire mask configuration sequence is actively enabled via MSE"
    },
    {
      id: 5,
      question: "In 8086 microprocessor memory segmentation configuration, if the Segment Register contains $2000\\text{H}$ and the Offset/Effective Address is $A000\\text{H}$, what is the calculated 20-bit Physical Address?",
      options: ["$2A000\\text{H}$", "$CA000\\text{H}$", "$2A00\\text{H}$", "$20A00\\text{H}$"],
      answer: "$2A000\\text{H}$"
    },
    {
      id: 6,
      question: "Which hardware interrupt pin in the 8085 microprocessor architecture holds the absolute highest priority and cannot be disabled by software masking or CLI utilities?",
      options: ["RST 7.5", "RST 6.5", "INTR", "TRAP"],
      answer: "TRAP"
    },
    {
      id: 7,
      question: "What does the instruction `XCHG` perform when executed within an 8085 assembly runtime processing sequence?",
      options: [
        "Swaps the 8-bit content configurations of the Accumulator with register B",
        "Exchanges the 16-bit contents of the HL register pair directly with the DE register pair",
        "Pushes the HL register values onto the current top address boundary of the Stack memory segment",
        "Inverts every individual bit sequence sitting inside the internal flags block matrix"
      ],
      answer: "Exchanges the 16-bit contents of the HL register pair directly with the DE register pair"
    },
    {
      id: 8,
      question: "How many internal flag bits are actively used to indicate operational status metrics inside the 8086 microprocessor flag register architecture?",
      options: ["5 status flags", "9 active flags", "16 active flags", "8 status flags"],
      answer: "9 active flags"
    },
    {
      id: 9,
      question: "During a standard `Memory Read` machine cycle in the 8085 architecture, how many clock cycles (T-states) are typically utilized by the execution core?",
      options: ["6 T-states", "4 T-states", "3 T-states", "2 T-states"],
      answer: "3 T-states"
    },
    {
      id: 10,
      question: "What specific logic operation happens when an 8085 microprocessor executes the single-byte instruction `ORA B`?",
      options: [
        "Logically ORs the contents of Register B with the Accumulator, storing the output back in Register B",
        "Logically ORs the contents of Register B with the Accumulator, updating the flags while storing the output in the Accumulator",
        "Performs an exclusive-OR verification loop on both targeted variable elements",
        "Adds Register B to the Accumulator with an appended carry bit reference multiplier"
      ],
      answer: "Logically ORs the contents of Register B with the Accumulator, updating the flags while storing the output in the Accumulator"
    }
  ],

  toc: [
    {
      id: 1,
      question: "What is the primary condition that distinguishes a Non-Deterministic Finite Automaton (NFA) transition configuration from a Deterministic Finite Automaton (DFA)?",
      options: [
        "An NFA can process context-free grammar strings while a DFA cannot",
        "An NFA transition can map a single state and input symbol to multiple possible next states, or read an empty string $(\\epsilon)$",
        "An NFA requires an infinite internal pushdown memory stack layer",
        "An NFA is mathematically more powerful and accepts a larger class of languages than a DFA"
      ],
      answer: "An NFA transition can map a single state and input symbol to multiple possible next states, or read an empty string $(\\epsilon)$"
    },
    {
      id: 2,
      question: "According to the Chomsky Hierarchy, what class of structural machine automata accepts Context-Free Grammars (CFGs)?",
      options: ["Finite State Automata", "Turing Machines", "Linear Bound Automata", "Pushdown Automata"],
      answer: "Pushdown Automata"
    },
    {
      id: 3,
      question: "Let $L$ be a regular language. If $L_1$ and $L_2$ are regular languages, regular languages are strictly closed under which operations?",
      options: [
        "Union, Intersection, and Complement altogether",
        "Union and Concatenation only",
        "Intersection and Kleene Closure only",
        "Substitution variables mappings exclusively"
      ],
      answer: "Union, Intersection, and Complement altogether"
    },
    {
      id: 4,
      question: "What does Pumping Lemma for Regular Languages fundamentally prove when applied to an arbitrary target string pattern?",
      options: [
        "It provides a deterministic mathematical method to find the minimal number of states for any DFA machine",
        "It is a property held by all regular languages used to prove a given language is NOT regular by contradiction",
        "It constructs an optimized syntax parse tree framework for ambiguous context-free grammars",
        "It validates that an execution string can be parsed in linear computation runtime limits"
      ],
      answer: "It is a property held by all regular languages used to prove a given language is NOT regular by contradiction"
    },
    {
      id: 5,
      question: "Which of the following grammar rules defines a structural language model that falls directly under Chomsky Type 2 Grammars?",
      options: [
        "Context-Free Grammar rules: $A \\rightarrow \\alpha$, where $A \\in V_N$ and $\\alpha \\in (V_N \\cup V_T)^*$",
        "Regular Grammar layout models: $A \\rightarrow aB$ or $A \\rightarrow a$",
        "Context-Sensitive structural bounds: $\\alpha A \\beta \\rightarrow \\alpha \\gamma \\beta$",
        "Unrestricted execution structures: $\\alpha \\rightarrow \\beta$"
      ],
      answer: "Context-Free Grammar rules: $A \\rightarrow \\alpha$, where $A \\in V_N$ and $\\alpha \\in (V_N \\cup V_T)^*$"
    },
    {
      id: 6,
      question: "What structural architectural storage component does a Pushdown Automaton (PDA) use to hold data context beyond a standard Finite Automaton?",
      options: ["An indexed random-access data array table", "An infinite, single-ended First-In, First-Out (FIFO) queue line", "An infinite Last-In, First-Out (LIFO) stack memory component space", "A localized hash matrix block look-up layout register"],
      answer: "An infinite Last-In, First-Out (LIFO) stack memory component space"
    },
    {
      id: 7,
      question: "A context-free grammar $G$ is explicitly classified as 'Ambiguous' if there exists at least one string in its language that can produce:",
      options: [
        "More than one derivation tracking string using different grammar rule sets",
        "Two or more distinct leftmost derivations, rightmost derivations, or parse trees",
        "An infinite loop processing error trace profile during runtime processing",
        "A null structural string representation layout map output space"
      ],
      answer: "Two or more distinct leftmost derivations, rightmost derivations, or parse trees"
    },
    {
      id: 8,
      question: "The Halting Problem of a Turing Machine is structurally classified mathematically as which type of decision problem state?",
      options: ["Decidable context logic", "Undecidable but recursively enumerable", "Strictly primitive recursive tracking layout", "Non-recursively enumerable configuration limits"],
      answer: "Undecidable but recursively enumerable"
    },
    {
      id: 9,
      question: "If a Context-Free Grammar is converted into Greibach Normal Form (GNF), every production rule must explicitly conform to which format structural rule?",
      options: [
        "$A \\rightarrow BC$ or $A \\rightarrow a$",
        "$A \\rightarrow a\\alpha$, where $a$ is exactly one terminal symbol and $\\alpha$ is a string of zero or more variables",
        "$\\alpha A \\beta \\rightarrow \\alpha \\gamma \\beta$",
        "$A \\rightarrow \\epsilon$ only"
      ],
      answer: "$A \\rightarrow a\\alpha$, where $a$ is exactly one terminal symbol and $\\alpha$ is a string of zero or more variables"
    },
    {
      id: 10,
      question: "Which machine model sits at the absolute peak of processing power in the Chomsky Hierarchy, accepting Unrestricted (Type 0) Grammars?",
      options: ["Linear Bound Automata (LBA)", "Pushdown Automata (PDA)", "The Turing Machine (TM)", "Universal Non-Deterministic Finite State Systems"],
      answer: "The Turing Machine (TM)"
    }
  ],

  java: [
    {
      id: 1,
      question: "Consider a variable allocation: `String s1 = \"BTU\"; String s2 = new String(\"BTU\");`. What will expressions `(s1 == s2)` and `s1.equals(s2)` evaluate to respectively?",
      options: ["true, true", "false, false", "true, false", "false, true"],
      answer: "false, true"
    },
    {
      id: 2,
      question: "Inside a Java class structure, if a method is declared as `final`, what constraint does it place on object manipulation logic?",
      options: [
        "The method cannot be overloaded within the same class blueprint",
        "The method cannot be overridden by any sub-classes extending this parent class",
        "The method cannot access static reference fields",
        "The method cannot throw checked runtime exceptions"
      ],
      answer: "The method cannot be overridden by any sub-classes extending this parent class"
    },
    {
      id: 3,
      question: "What is the structural tracking sequence memory assignment difference between a `HashMap` and a `Hashtable` collection implementation class in Java?",
      options: [
        "HashMap is synchronized and thread-safe, while Hashtable permits null keys and values smoothly",
        "HashMap is non-synchronized and allows one null key along with multiple null values, whereas Hashtable is fully synchronized and strictly forbids null elements",
        "Hashtable stores data elements linearly, whereas HashMap formats components into double-ended queue arrangements",
        "There are no structural or operational behavioral deviations between these two tracking objects"
      ],
      answer: "HashMap is non-synchronized and allows one null key along with multiple null values, whereas Hashtable is fully synchronized and strictly forbids null elements"
    },
    {
      id: 4,
      question: "When processing multi-threaded exceptions inside Java, which structural block is guaranteed to execute regardless of whether a runtime exception is thrown or caught?",
      options: ["The generic catch block segment", "The finalization system interceptor", "The finally block structure", "The execution try branch mapping workspace"],
      answer: "The finally block structure"
    },
    {
      id: 5,
      question: "What is the primary functional intent of using the `super` keyword inside a subclass initialization constructor mechanism?",
      options: [
        "To destroy obsolete memory reference instances instantly",
        "To explicitly invoke the constructor framework of the parent base superclass",
        "To flag that a class variable belongs strictly to global static blocks",
        "To restrict sub-classes from cloning internal object array models"
      ],
      answer: "To explicitly invoke the constructor framework of the parent base superclass"
    },
    {
      id: 6,
      question: "In Java OOP logic, what condition must be met to successfully implement Method Overriding across multiple classes?",
      options: [
        "The methods must stay inside the same single class but have altered signature arrays",
        "The subclass method must match the exact name, parameter signature list, and return type of the method in its parent class",
        "Both methods must be declared explicitly with private access modifiers",
        "The parent class method must have been compiled with a final flag setting"
      ],
      answer: "The subclass method must match the exact name, parameter signature list, and return type of the method in its parent class"
    },
    {
      id: 7,
      question: "Which of the following features represents a primitive data allocation mechanism that is NOT treated as a formal object by the JVM memory configuration engine?",
      options: ["String variables", "Integer array lists", "The primitive double type", "Custom Interface structures"],
      answer: "The primitive double type"
    },
    {
      id: 8,
      question: "What type of inheritance structural blueprint does Java explicitly forbid at the Class level to prevent diamond-problem compilation conflicts?",
      options: ["Single Inheritance loops", "Multi-level base class routing", "Multiple Inheritance using classes", "Hierarchical structure branches"],
      answer: "Multiple Inheritance using classes"
    },
    {
      id: 9,
      question: "Inside the JVM runtime memory system area layout model, where are raw instance object allocations active?",
      options: ["The Thread Call Stack space", "The System Method register array", "The Heap Memory space", "The Static Symbol pointer layout table"],
      answer: "The Heap Memory space"
    },
    {
      id: 10,
      question: "Which keyword constraint is used in a Java class declaration block to bind it directly to a formal functional blueprint template interface?",
      options: ["extends", "implements", "imports", "instanceof"],
      answer: "implements"
    }
  ],

  python: [
    {
      id: 1,
      question: "What is the evaluation output of the following sequence list operation slice configuration in Python? `my_list = [10, 20, 30, 40, 50]; print(my_list[4:1:-2])`",
      options: ["[50, 40, 30]", "[50, 30]", "[40, 20]", "[50, 40]"],
      answer: "[50, 30]"
    },
    {
      id: 2,
      question: "Which built-in structural data collection primitive type in Python is strictly immutable after instantiation values are set?",
      options: ["List structures", "Dictionary tables", "Set arrangements", "Tuple arrays"],
      answer: "Tuple arrays"
    },
    {
      id: 3,
      question: "What is the evaluated output screen terminal print tracking sequence when compiling this expression logic statement in Python? `print(type(1 / 2))`",
      options: ["<class 'int'>", "<class 'float'>", "<class 'double'>", "<class 'decimal'>"],
      answer: "<class 'float'>"
    },
    {
      id: 4,
      question: "Inside Python functional execution blocks, what is the programmatic operational consequence of executing a `lambda` block expression blueprint?",
      options: [
        "It initializes a multi-threaded parallel async listener thread context",
        "It constructs a clean, inline anonymous single-line expression function",
        "It forces an early break operation out of a double nested while loop processing chain",
        "It wraps class attributes into explicit encapsulated safe zones"
      ],
      answer: "It constructs a clean, inline anonymous single-line expression function"
    },
    {
      id: 5,
      question: "What occurs if you attempt to add an arbitrary item key instance to a Python dictionary mapping structure when that targeted key element already exists?",
      options: [
        "The runtime compilation drops out with a KeyError tracking trace back report",
        "The existing value associated with that key is overridden by the newly assigned value data row",
        "The collection engine automatically instantiates an appended list grid block",
        "The operation is silently dropped, leaving the original initialized primitive values unaffected"
      ],
      answer: "The existing value associated with that key is overridden by the newly assigned value data row"
    },
    {
      id: 6,
      question: "Consider this syntax operation structure evaluation processing expression: `set_a = {1, 2, 3}; set_b = {3, 4, 5}; print(set_a & set_b)`. What displays on the terminal?",
      options: ["{1, 2, 3, 4, 5}", "{3}", "{1, 2, 4, 5}", "set() empty instantiation marker"],
      answer: "{3}"
    },
    {
      id: 7,
      question: "In Python memory lifecycle paradigms, what internal strategy handles releasing allocation blocks occupied by objects whose processing scopes have closed?",
      options: [
        "Explicit manual memory free instructions executed by developer declarations",
        "An automated reference-counting and cyclical heuristic Garbage Collection system layer",
        "Compile-time static block scoping memory removal optimization sweeps",
        "Virtual paging address swap allocation adjustments"
      ],
      answer: "An automated reference-counting and cyclical heuristic Garbage Collection system layer"
    },
    {
      id: 8,
      question: "What is the absolute evaluation outcome output when calculating the expression statement string: `print(bool(\"False\"))`?",
      options: ["False boolean value state", "True boolean value state", "Throws an explicit TypeError conversion flag trace profile", "None object instance"],
      answer: "True boolean value state"
    },
    {
      id: 9,
      question: "Which of the following operational statements represents the correct formatting to intercept potential runtime crash exceptions inside Python scripts?",
      options: ["try ... catch blocks", "try ... except blocks", "throw ... catch loops", "begin ... rescue structures"],
      answer: "try ... except blocks"
    },
    {
      id: 10,
      question: "What structural method resolution framework tracking mechanism does Python utilize to process variable inheritance lookups across complex Multiple Inheritance paths?",
      options: ["First-In, First-Out (FIFO) queue traversal mapping", "The C3 Linearization (MRO) Algorithm engine", "Binary search trace tree filtering matrices", "Random state vector branch selection routines"],
      answer: "The C3 Linearization (MRO) Algorithm engine"
    }
  ] 
};

// ==========================================
// ALGORITHMIC EXAM INFLATION ENGINE
// ==========================================

// 1. DISCRETE MATH GENERATOR: Generates Graph Edge Variation Problems
// Formula: Handshaking Lemma (2 * Edges = Sum of Degrees)
function generateMathQuestions() {
  const dataset = [
    { vertices: 10, degree: 4, answer: 20 },
    { vertices: 6, degree: 3, answer: 9 },
    { vertices: 12, degree: 5, answer: 30 },
    { vertices: 20, degree: 4, answer: 40 },
    { vertices: 14, degree: 3, answer: 21 },
    { vertices: 30, degree: 6, answer: 90 },
    { vertices: 16, degree: 4, answer: 32 },
    { vertices: 18, degree: 3, answer: 27 },
    { vertices: 22, degree: 5, answer: 55 },
    { vertices: 50, degree: 2, answer: 50 }
  ];

  dataset.forEach((item, index) => {
    quizDatabase.discreteMaths.push({
      id: 100 + index,
      question: `Let $G$ be a simple undirected graph with ${item.vertices} vertices. If every vertex has a uniform degree of ${item.degree}, calculate the exact number of edges sitting in $G$.`,
      options: [`${item.answer} edges`, `${item.answer * 2} edges`, `${item.vertices + item.degree} edges`, `${item.answer - 2} edges`],
      answer: `${item.answer} edges`
    });
  });
}

// 2. MICROPROCESSOR GENERATOR: Generates Register Tracing Problems
// Traces state manipulation across 8085 Accumulator and register fields
function generateMicroprocessorQuestions() {
  const hexDataset = [
    { reg: "B", val: "22H", instruction: "INR B", ans: "23H" },
    { reg: "C", val: "FFH", instruction: "INR C", ans: "00H" },
    { reg: "D", val: "40H", instruction: "DCR D", ans: "3FH" },
    { reg: "E", val: "01H", instruction: "DCR E", ans: "00H" },
    { reg: "H", val: "A9H", instruction: "INR H", ans: "AAH" },
    { reg: "L", val: "10H", instruction: "DCR L", ans: "0FH" }
  ];

  hexDataset.forEach((item, index) => {
    quizDatabase.microprocessors.push({
      id: 100 + index,
      question: `In an 8085 microprocessor execution cycle, if Register ${item.reg} initially contains the hexadecimal value ${item.val} and the instruction \`${item.instruction}\` is cleanly processed, what is the final hexadecimal value stored in Register ${item.reg}?`,
      options: [`${item.ans}`, `${item.val}`, "00H", "FFH"],
      answer: `${item.ans}`
    });
  });
}

// 3. PYTHON GENERATOR: Generates String/List Index Tracing Slices
function generatePythonQuestions() {
  const slices = [
    { start: 0, end: 3, ans: "[10, 20, 30]" },
    { start: 1, end: 4, ans: "[20, 30, 40]" },
    { start: 2, end: 5, ans: "[30, 40, 50]" },
    { start: 0, end: 5, ans: "[10, 20, 30, 40, 50]" }
  ];

  slices.forEach((item, index) => {
    quizDatabase.python.push({
      id: 100 + index,
      question: `Evaluate the outcome of the following list indexing sequence slice configuration in Python: \n\nmy_list = [10, 20, 30, 40, 50]\nprint(my_list[${item.start}:${item.end}])`,
      options: [`${item.ans}`, "[10, 20]", "[20, 30]", "[30, 40, 50, 60]"],
      answer: `${item.ans}`
    });
  });
}

// AUTOMATICALLY RUN ALL INFLATION ROUTINES AT PAGE LOAD
generateMathQuestions();
generateMicroprocessorQuestions();
generatePythonQuestions();