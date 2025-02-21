const languages = [
    {
        name: 'ABAP',
        description: 'Programming language developed by SAP',
        link: 'https://pages.community.sap.com/topics/abap'
    },
    {
        name: 'ActionScript',
        description: 'Programming language for Flash applications',
        link: 'https://en.wikipedia.org/wiki/ActionScript'
    },
    {
        name: 'Ada',
        description: 'Structured programming language for embedded systems',
        link: 'https://ada-lang.io/'
    },
    {
        name: 'ALGOL 68',
        description: 'Langage de programmation historique influent',
        link: 'https://jmvdveer.home.xs4all.nl/en.algol-68-genie.html'
    },
    {
        name: 'AppleScript',
        description: 'Langage de script pour automatiser les tâches sur macOS',
        link: 'https://developer.apple.com/library/archive/documentation/AppleScript/Conceptual/AppleScriptLangGuide/introduction/ASLR_intro.html'
    },
    {
        name: 'Assembly',
        description: 'Langage de programmation de bas niveau',
        link: 'https://en.wikipedia.org/wiki/Assembly_language'
    },
    {
        name: 'AutoIt',
        description: 'Langage de script pour l\'automatisation Windows',
        link: 'https://www.autoitscript.com/site/autoit/'
    },
    {
        name: 'Awk',
        description: 'A Text-processing programming language',
        link: 'http://www.awklang.org/'
    },
    {
        name: 'Azle',
        description: 'Framework de développement moderne',
        link: 'https://demergent-labs.github.io/azle/'
    },
    {
        name: 'APL',
        description: 'Array-oriented programming language',
        link: 'https://www.dyalog.com/apl.htm'
    },
    {
        name: 'B',
        description: 'Programming language developed at Bell Labs & Predecessor to C',
        link: 'https://www.bell-labs.com/usr/dmr/www/bintro.html'
    },
    {
        name: 'Ballerina',
        description: 'Langage de programmation orienté objet',
        link: 'https://ballerina.io/'
    },
    {
        name: 'BASIC',
        description: 'Langage de programmation classique pour débutants',
        link: 'https://www.vintage-basic.net/'
    },
    {
        name: 'Bash',
        description: 'Shell Unix et langage de script',
        link: 'https://www.gnu.org/software/bash/'
    },
    {
        name: 'Batch',
        description: 'Langage de script Windows',
        link: 'https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/windows-commands'
    },
    {
        name: 'BCPL',
        description: 'Basic Combined Programming Language',
        link: 'https://bcpl.org/'
    },
    {
        name: 'Bhailang',
        description: 'Langage de programmation expérimental',
        link: 'https://bhailang.js.org'
    },
    {
        name: 'Bicep',
        description: 'Langage déclaratif pour Azure',
        link: 'https://learn.microsoft.com/en-us/azure/azure-resource-manager/bicep/overview'
    },
    {
        name: 'Blaz',
        description: 'Programming language for Data Analytics',
        link: 'https://github.com/vladimirdabic/Blaze'
    },
    {
        name: 'Boo',
        description: 'Langage orienté objet pour .NET',
        link: 'https://boo-language.github.io/'
    },
    {
        name: 'Brainfuck',
        description: 'Langage de programmation ésotérique minimaliste',
        link: 'https://brainfuck.org/'
    },
    {
        name: 'C',
        description: 'Langage de programmation système',
        link: 'https://en.wikipedia.org/wiki/C_(programming_language)'
    },
    {
        name: 'C++',
        description: 'Langage de programmation orienté objet',
        link: 'https://en.wikipedia.org/wiki/C%2B%2B'
    },
    {
        name: 'C#',
        description: 'Langage de programmation orienté objet',
        link: 'https://en.wikipedia.org/wiki/C_Sharp_(programming_language)'
    },
    {
        name: 'D',
        description: 'Langage de programmation système',
        link: 'https://en.wikipedia.org/wiki/D_(programming_language)'
    },
    {
        name: 'Dart',
        description: 'Langage de programmation orienté objet',
        link: 'https://dart.dev/'
    },
    {
        name: 'E',
        description: 'Object oriented programming language',
        link: 'http://www.erights.org/'
    },
    {
        name: 'Delphi',
        description: 'Object oriented programming Language created by Borland ',
        link: 'https://learndelphi.org/'
    },
    {
        name: 'Eiffel',
        description: 'Langage de programmation orienté objet',
        link: 'https://en.wikipedia.org/wiki/Eiffel_(programming_language)'
    },
    {
        name: 'Elixir',
        description: 'Langage de programmation fonctionnelle',
        link: 'https://elixir-lang.org/'
    },
    {
        name: 'Erlang',
        description: 'Langage de programmation fonctionnelle',
        link: 'https://www.erlang.org/'
    },
    {
        name: 'F#',
        description: 'Langage de programmation fonctionnelle',
        link: 'https://en.wikipedia.org/wiki/F_Sharp_(programming_language)'
    },
    {
        name: 'Fortran',
        description: 'Langage de programmation haut niveau',
        link: 'https://en.wikipedia.org/wiki/Fortran'
    },
    {
        name: 'Fantom',
        description: 'Programming language for multi-platform applications (JVM, .NET, JavaScript)',
        link: 'https://fantom.org/'
    },
    {
        name: 'GML',
        description: 'Langage de script pour GameMaker',
        link: 'https://manual.gamemaker.io/monthly/en/#t=GameMaker_Language.htm'
    },
    {
        name: 'Go',
        description: 'Langage de programmation système',
        link: 'https://golang.org/'
    },
    {
        name: 'Haskell',
        description: 'Langage de programmation fonctionnelle',
        link: 'https://www.haskell.org/'
    },
    {
        name: 'HTML',
        description: 'Langage de balisage pour la création de pages web',
        link: 'https://developer.mozilla.org/en-US/docs/Web/HTML'
    },
    {
        name: 'Java',
        description: 'Langage de programmation orienté objet',
        link: 'https://www.java.com/en/'
    },
    {
        name: 'JavaScript',
        description: 'Langage de programmation client-side',
        link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
    },
    {
        name: 'Julia',
        description: 'Langage de programmation haut niveau',
        link: 'https://julialang.org/'
    },
    {
        name: 'Kotlin',
        description: 'Langage de programmation orienté objet',
        link: 'https://kotlinlang.org/'
    },
    {
        name: 'KornShell',
        description: 'Unix shell and scripting language',
        link: 'http://kornshell.com/'
    },
    {
        name: 'Lisp',
        description: 'Langage de programmation fonctionnel historique',
        link: 'https://common-lisp.net/'
    },
    {
        name: 'Lua',
        description: 'Langage de programmation orienté objet',
        link: 'https://www.lua.org/'
    },
    {
        name: 'MATLAB',
        description: 'Langage de programmation haut niveau',
        link: 'https://www.mathworks.com/products/matlab.html'
    },
    {
        name: 'Objective-C',
        description: 'Langage de programmation orienté objet',
        link: 'https://en.wikipedia.org/wiki/Objective-C'
    },
    {
        name: 'OCaml',
        description: 'Langage de programmation fonctionnelle',
        link: 'https://ocaml.org/'
    },
    {
        name: 'Pascal',
        description: 'Langage de programmation structuré',
        link: 'https://en.wikipedia.org/wiki/Pascal_(programming_language)'
    },
    {
        name: 'Perl',
        description: 'Langage de programmation orienté objet',
        link: 'https://www.perl.org/'
    },
    {
        name: 'PHP',
        description: 'Langage de programmation server-side',
        link: 'https://www.php.net/'
    },
    {
        name: 'Python',
        description: 'Langage de programmation haut niveau',
        link: 'https://www.python.org/'
    },
    {
        name: 'R',
        description: 'Langage de programmation statistique',
        link: 'https://www.r-project.org/'
    },
    {
        name: 'Ruby',
        description: 'Langage de programmation orienté objet',
        link: 'https://www.ruby-lang.org/en/'
    },
    {
        name: 'Rust',
        description: 'Langage de programmation système',
        link: 'https://www.rust-lang.org/'
    },
    {
        name: 'Scala',
        description: 'Langage de programmation fonctionnelle',
        link: 'https://www.scala-lang.org/'
    },
    {
        name: 'Shell',
        description: 'Langage de script',
        link: 'https://en.wikipedia.org/wiki/Shell_script'
    },
    {
        name: 'Swift',
        description: 'Langage de programmation orienté objet',
        link: 'https://developer.apple.com/swift/'
    },
    {
        name: 'TypeScript',
        description: 'Langage de programmation client-side',
        link: 'https://www.typescriptlang.org/'
    },
    {
        name: 'Transact-SQL',
        description: 'Microsoft SQL Server',
        link: 'https://learn.massstreet.net/transact-sql/basic/hello-world.html'
    },
    {
        name: 'Visual Basic',
        description: 'Langage de programmation classique pour débutants',
        link: 'https://en.wikipedia.org/wiki/Visual_Basic'
    },
    {
        name: 'Zig',
        description: 'Langage système moderne et performant',
        link: 'https://ziglang.org/'
    },
    {
        name: 'Zsh',
        description: 'Unix shell and scripting language',
        link: 'https://zsh.sourceforge.io/'
    },
    {
        name: 'Cangjie',
        description: 'Langage de programmation basé sur les caractères chinois',
        link: 'https://learnxyz.in/cangjie-programming-language/'
    },
    {
        name: 'Carbon',
        description: 'Langage de programmation expérimental de Google',
        link: 'https://docs.carbon-lang.dev/'
    },
    {
        name: 'Cairo',
        description: 'Langage pour les smart contracts',
        link: 'https://www.cairo-lang.org/'
    },
    {
        name: 'Cecil',
        description: 'Langage de programmation orienté objet',
        link: 'https://en.wikipedia.org/wiki/Cecil_(programming_language)'
    },
    {
        name: 'Chapel',
        description: 'Langage de programmation parallèle',
        link: 'https://chapel-lang.org/'
    },
    {
        name: 'Clojure',
        description: 'Langage fonctionnel pour la JVM',
        link: 'https://clojure.org/'
    },
    {
        name: 'CLIPS',
        description: 'Langage pour systèmes experts',
        link: 'https://www.clipsrules.net/'
    },
    {
        name: 'COBOL',
        description: 'Langage pour applications commerciales',
        link: 'https://www.ibm.com/docs/en/cobol-zos'
    },
    {
        name: 'Coffeescript',
        description: 'Langage qui se compile en JavaScript',
        link: 'https://coffeescript.org/'
    },
    {
        name: 'Crystal',
        description: 'Langage statiquement typé inspiré de Ruby',
        link: 'https://crystal-lang.org/'
    },
    {
        name: 'Daytona',
        description: 'Plateforme de développement cloud',
        link: 'https://daytona.io/'
    },
    {
        name: 'Dylan',
        description: 'Langage de programmation dynamique',
        link: 'https://opendylan.org/'
    },
    {
        name: 'Elm',
        description: 'Langage fonctionnel pour le web frontend',
        link: 'https://guide.elm-lang.org/'
    },
    {
        name: 'Euphoria',
        description: 'Langage de programmation interprété',
        link: 'https://openeuphoria.org/'
    },
    {
        name: 'Factor',
        description: 'Langage de programmation stack-based',
        link: 'https://factorcode.org/'
    },
    {
        name: 'Falcon',
        description: 'Langage de script orienté objet',
        link: 'http://www.falconpl.org/'
    },
    {
        name: 'Forth',
        description: 'Langage de programmation stack-based',
        link: 'https://forth-standard.org/'
    },
    {
        name: 'Futhark',
        description: 'Langage fonctionnel pour GPU',
        link: 'https://futhark-lang.org/'
    },
    {
        name: 'GDScript',
        description: 'Langage de script pour Godot Engine',
        link: 'https://docs.godotengine.org/en/stable/tutorials/scripting/gdscript/index.html'
    },
    {
        name: 'Groovy',
        description: 'Langage dynamique pour la JVM',
        link: 'https://groovy-lang.org/'
    },
    {
        name: 'Hack',
        description: 'Langage de programmation pour HHVM',
        link: 'https://hacklang.org/'
    },
    {
        name: 'Haxe',
        description: 'Langage multi-plateforme',
        link: 'https://haxe.org/'
    },
    {
        name: 'HolyC',
        description: 'Langage de programmation pour TempleOS',
        link: 'https://holyc-lang.com'
    },
    {
        name: 'Icon',
        description: 'Langage de programmation pour le traitement de chaînes et structures de données',
        link: 'https://www2.cs.arizona.edu/icon/'
    },
    {
        name: 'Idris',
        description: 'Langage de programmation fonctionnel avec types dépendants',
        link: 'https://www.idris-lang.org/'
    },
    {
        name: 'INTERCAL',
        description: 'Langage de programmation parodique',
        link: 'https://www.tutorialspoint.com/intercal/'
    },
    {
        name: 'J',
        description: 'Langage de programmation array',
        link: 'https://www.jsoftware.com/'
    },
    {
        name: 'Janet',
        description: 'Langage fonctionnel et impératif',
        link: 'https://janet-lang.org/'
    },
    {
        name: 'JavaServer Pages',
        description: 'A server-side programming technology',
        link: 'https://www.oracle.com/java/technologies/jspt.html'
    },
    {
        name: 'K',
        description: 'Langage de programmation array',
        link: 'https://kx.com/'
    },
    {
        name: 'Lisk',
        description: 'Framework pour applications blockchain',
        link: 'https://docs.lisk.com/'
    },
    {
        name: 'Logo',
        description: 'Langage de programmation éducatif',
        link: 'https://people.eecs.berkeley.edu/~bh/logo.html'
    },
    {
        name: 'Maple',
        description: 'Système de calcul symbolique',
        link: 'https://en.wikipedia.org/wiki/Maple_(software)'
    },
    {
        name: 'Mercury',
        description: 'Langage de programmation logique et fonctionnel',
        link: 'https://mercurylang.org/'
    },
    {
        name: 'Miranda',
        description: 'Langage de programmation fonctionnel',
        link: 'https://miranda.org.uk/'
    },
    {
        name: 'Modula-2',
        description: 'Langage de programmation successeur de Pascal',
        link: 'https://www.modula2.org/'
    },
    {
        name: 'Motoko',
        description: 'Langage pour Internet Computer',
        link: 'https://internetcomputer.org/docs/current/motoko/'
    },
    {
        name: 'Occam',
        description: 'Langage de programmation parallèle',
        link: 'https://www.cs.kent.ac.uk/projects/ofa/kroc/'
    },
    {
        name: 'Pike',
        description: 'Langage de programmation orienté objet',
        link: 'https://pike.lysator.liu.se/'
    },
    {
        name: 'Plug',
        description: 'Langage de programmation moderne',
        link: 'https://pluglanguage.org'
    },
    {
        name: 'Pony',
        description: 'Langage de programmation orienté acteur',
        link: 'https://www.ponylang.io/'
    },
    {
        name: 'PostScript',
        description: 'Langage de description de page',
        link: 'https://www.adobe.com/products/postscript.html'
    },
    {
        name: 'Q',
        description: 'Langage de programmation de KDB+',
        link: 'https://kx.com/'
    },
    {
        name: 'Racket',
        description: 'Langage de programmation dérivé de Scheme',
        link: 'https://racket-lang.org/'
    },
    {
        name: 'ReasonML',
        description: 'Syntaxe alternative pour OCaml',
        link: 'https://reasonml.github.io/'
    },
    {
        name: 'Red',
        description: 'Langage de programmation full-stack',
        link: 'https://www.red-lang.org/'
    },
    {
        name: 'Sather',
        description: 'Langage orienté objet inspiré d\'Eiffel',
        link: 'https://en.wikipedia.org/wiki/Sather'
    },
    {
        name: 'SNOBOL',
        description: 'Langage spécialisé dans la manipulation de chaînes',
        link: 'https://www.regressive.org/snobol4/'
    },
    {
        name: 'Soroban',
        description: 'Framework pour Stellar blockchain',
        link: 'https://developers.stellar.org/'
    },
    {
        name: 'SPARK',
        description: 'Sous-ensemble d\'Ada pour systèmes critiques',
        link: 'https://en.wikipedia.org/wiki/SPARK_(programming_language)'
    },
    {
        name: 'Stata',
        description: 'A programming Language for Statistical language',
        link: 'https://www.stata.com/'
    },
    {
        name: 'Thue',
        description: 'Langage de programmation ésotérique',
        link: 'https://esolangs.org/wiki/Thue'
    },
    {
        name: 'Turing',
        description: 'Langage de programmation éducatif',
        link: 'https://turing-lang.io/'
    },
    {
        name: 'Vala',
        description: 'Langage de programmation orienté objet',
        link: 'https://vala.dev/'
    },
    {
        name: 'VB.NET',
        description: 'Programming language developed by Microsoft',
        link: 'https://learn.microsoft.com/en-us/dotnet/visual-basic/'
    },
    {
        name: 'VBScript',
        description: 'Langage de script Microsoft',
        link: 'https://docs.microsoft.com/en-us/previous-versions//d1wf56tt(v=vs.85)'
    },
    {
        name: 'WhiteSpace',
        description: 'Langage de programmation ésotérique',
        link: 'https://en.wikipedia.org/wiki/Whitespace_(programming_language)'
    },
    {
        name: 'Wolfram',
        description: 'Langage de programmation Mathematica',
        link: 'https://www.wolfram.com/language/'
    },
    {
        name: 'Xamarin',
        description: 'Framework pour applications mobiles',
        link: 'https://dotnet.microsoft.com/en-us/apps/xamarin'
    },
    {
        name: 'Xquery',
        description: 'Langage de requête XML',
        link: 'https://www.w3.org/TR/xquery-31/'
    },
    {
        name: 'Xojo',
        description: 'Build Native, Cross-Platform Apps',
        link: 'https://www.xojo.com'
    },
    {
        name: 'COOL',
        description: 'Classroom Object-Oriented Language',
        link: 'https://theory.stanford.edu/~aiken/software/cool/cool.html'
    },
    {
        name: 'Curl',
        description: 'Langage de programmation pour applications web',
        link: 'https://en.wikipedia.org/wiki/Curl_(programming_language)'
    },
    {
        name: 'Cypher',
        description: 'Langage de requête pour bases de données graphes Neo4j',
        link: 'https://neo4j.com/docs/cypher-manual/current/introduction/'
    },
    {
        name: 'Io',
        description: 'Langage de programmation prototype',
        link: 'https://iolanguage.org/'
    },
    {
        name: 'Nim',
        description: 'Langage de programmation système efficace',
        link: 'https://nim-lang.org/'
    },
    {
        name: 'PowerShell',
        description: 'Shell et langage de script Microsoft',
        link: 'https://learn.microsoft.com/en-us/powershell/'
    },
    {
        name: 'Prolog',
        description: 'Langage de programmation logique',
        link: 'https://www.gprolog.org/'
    },
    {
        name: 'Pug',
        description: 'Moteur de template pour Node.js',
        link: 'https://pugjs.org/'
    },
    {
        name: 'Raku',
        description: 'Langage de programmation moderne et flexible',
        link: 'https://docs.raku.org/'
    },
    {
        name: 'SAS',
        description: 'Langage pour l\'analyse statistique',
        link: 'https://www.sas.com/'
    },
    {
        name: 'Scheme',
        description: 'Dialecte minimaliste de Lisp',
        link: 'https://www.scheme.org/'
    },
    {
        name: 'Smalltalk',
        description: 'Langage de programmation orienté objet pur',
        link: 'https://squeak.org/'
    },
    {
        name: 'SQL',
        description: 'Langage de requête pour bases de données relationnelles',
        link: 'https://www.iso.org/standard/76583.html'
    },
    {
        name: 'Simula',
        description: 'Early object-oriented programming language',
        link: 'https://en.wikipedia.org/wiki/Simula'
    },
    {
        name: 'TADS',
        description: 'Programming language developed by High Energy Software',
        link: 'https://www.tads.org/index.htm'
    },
    {
        name: 'Tcl',
        description: 'Tool Command Language',
        link: 'https://www.tcl.tk/about/language.html'
    },
    {
        name: 'V',
        description: 'Langage de programmation système simple et rapide',
        link: 'https://vlang.io/'
    },
    {
        name: 'Verilog',
        description: 'Langage de description matérielle',
        link: 'https://en.wikipedia.org/wiki/Verilog'
    },
    {
        name: 'VIM',
        description: 'Langage de script pour l\'éditeur Vim',
        link: 'https://www.vim.org/'
    },
    {
        name: 'LOL',
        description: 'LOLCODE is an esoteric programming language',
        link: 'https://gist.github.com/sharmaeklavya2/8a0e2581baf969be0f64'
    },
    {
        name: 'YAML',
        description: 'A simple data serialization language',
        link: 'https://yaml.org/'
    },
    {
        name: 'Wren',
        description: 'Lightweight scripting language for embedding in applications',
        link: 'https://wren.io/'
    },
    {
        name: 'ChucK',
        description: 'Strongly-timed, concurrent audio programming language',
        link: 'https://chuck.cs.princeton.edu/'
    },
    {
        name: 'COBOLScript',
        description: 'Scripting variant of COBOL',
        link: 'https://sites.google.com/view/cobolscripting'
    },
    {
        name: 'LiveCode',
        description: 'Visual, high-level programming language',
        link: 'https://livecode.com/'
    },
    {
        name: 'Monkey X',
        description: 'Programming language for game development',
        link: 'https://monkeycoder.co.nz/'
    },
    {
        name: 'MQL',
        description: 'Programming language for MetaTrader platforms (MQL4, MQL5)',
        link: 'https://www.mql5.com/'
    },
    {
        name: 'Oberon',
        description: 'Programming language from the Pascal family',
        link: 'https://www.inf.ethz.ch/personal/wirth/Oberon/index.html'
    },
    {
        name: 'OpenCL',
        description: 'Programming language for parallel programming',
        link: 'https://www.khronos.org/opencl/'
    },
    {
        name: 'Pico',
        description: 'Minimal programming language',
        link: 'http://pico.vub.ac.be/'
    },
    {
        name: 'PL/I',
        description: 'Programming language designed for data processing and scientific computation',
        link: 'https://www.ibm.com/products/pli-compiler-zos'
    },
    {
        name: 'Processing',
        description: 'Visual arts-focused programming language and environment',
        link: 'https://processing.org/'
    },
    {
        name: 'Rebol',
        description: 'Relative Expression-Based Object Language for lightweight scripting',
        link: 'http://www.rebol.com/'
    },
    {
        name: 'SPIN',
        description: 'Programming language for Propeller microcontrollers',
        link: 'https://parallax.com/downloads/spin-programming-language/'
    },
    {
        name: 'Dragon',
        description: 'A multi-paradigm, general-purpose programming language ',
        link: 'https://dragon-lang.org/'
    },
    {
        name: 'Rockstar',
        description: 'An esoteric programming language inspired by rock song lyrics, designed to turn code into poetic expressions',
        link: 'https://codewithrockstar.com/'
    },
    {
        name: 'Zonnon',
        description: 'A programming language in the Pascal/Modula family, with added object-oriented and concurrency features',
        link: 'https://zonnon.org/'
    },
    {
        name: 'Gambas',
        description: 'An object-oriented dialect of the BASIC programming language',
        link: 'https://gambas.sourceforge.net/'
    },
    {
        name: 'NASM',
        description: 'An open-source assembler for x86 and x86-64 architectures ',
        link: 'https://cratecode.com/info/nasm'
    },
    {
        name: 'COW',
        description: 'An esoteric programming language. It is a Brainfuck variant designed humorously with Bovinae in mind',
        link: 'https://bigzaphod.github.io/COW/'
    },
    {
        name: 'OAK',
        description: 'Oak is a low-level translated/compiled programming language with compile-time syntax modification.',
        link: 'https://oaklang.org/'
    },
    {
        name: 'Befunge 93',
        description: 'Befunge 93 is a two-dimensional esoteric programming language with the goal of being as difficult to compile as possible.',
        link: 'https://catseye.tc/article/Languages.md#befunge-93'
    },
    {
        name: 'False',
        description: 'An early Forth-like esoteric programming language with the goal of creating a powerful language with as small a compiler as possible.',
        link: 'https://strlen.com/files/lang/false/false.txt'
    }
];

function createAlphabetFilter() {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const filterContainer = document.querySelector('.alphabet-filter');
    
    alphabet.forEach(letter => {
        const button = document.createElement('button');
        button.className = 'letter-btn';
        button.textContent = letter;
        button.addEventListener('click', () => filterByLetter(letter));
        filterContainer.appendChild(button);
    });
}

function filterByLetter(letter) {
    const buttons = document.querySelectorAll('.letter-btn');
    buttons.forEach(btn => {
        btn.classList.toggle('active', btn.textContent === letter);
    });

    const cards = document.querySelectorAll('.language-card');
    cards.forEach(card => {
        const name = card.querySelector('.language-name').textContent;
        card.style.display = name.toUpperCase().startsWith(letter) ? 'block' : 'none';
    });
}

function createLanguageCards() {
    const languagesGrid = document.getElementById('languagesGrid');
    languagesGrid.innerHTML = '';
    
    languages.sort((a, b) => a.name.localeCompare(b.name)).forEach(language => {
        const card = document.createElement('div');
        card.className = 'language-card';
        
        card.innerHTML = `
            <div class="language-name">${language.name}</div>
            <div class="language-description">${language.description}</div>
            <a href="${language.link}" 
               class="language-link" 
               target="_blank" 
               rel="noopener noreferrer">Official Documentation</a>
        `;
        
        card.addEventListener('click', () => {
            window.open(language.link, '_blank', 'noopener,noreferrer');
        });
        
        languagesGrid.appendChild(card);
    });
}

function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const cards = document.querySelectorAll('.language-card');
        
        cards.forEach(card => {
            const name = card.querySelector('.language-name').textContent.toLowerCase();
            card.style.display = name.includes(searchTerm) ? 'block' : 'none';
        });
    });
}

function showError() {
    const errorMessage = document.getElementById('errorMessage');
    errorMessage.style.display = 'block';
    errorMessage.textContent = 'Unable to load languages. Please try again later.';
}

function setupBackToTop() {
    const backToTopButton = document.getElementById('backToTop');

    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) { // Show button after scrolling 300px
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });

    // Scroll to top when clicked
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Smooth scrolling
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    createAlphabetFilter();
    createLanguageCards();
    setupSearch();
    setupBackToTop();
});