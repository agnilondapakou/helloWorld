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
        name: 'Solidity',
        description: 'Langage orienté objet pour les smart contracts sur Ethereum',
        link: 'https://soliditylang.org/'
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

const languageFiles = {
    'ABAP': 'source/basic/hello_world.abap',
    'ActionScript': 'source/basic/hello_world.as',
    'Ada': 'source/basic/hello_world.adb',
    'ALGOL 68': 'source/basic/hello_world.a68',
    'APL': 'source/basic/hello_world.apl',
    'Applescript': 'source/basic/hello_world.scpt',
    'Assembly': 'source/basic/hello_world.asm',
    'AutoIt': 'source/basic/hello_world.au3',
    'Awk': 'source/basic/hello_world.awk',
    'Azle': 'source/basic/hello_world.ts',
    'B': 'source/basic/hello_world.b',
    'Ballerina': 'source/basic/hello_world.bal',
    'BASIC': 'source/basic/hello_world.bas',
    'Bash': 'source/basic/hello_world.sh',
    'Batch': 'source/basic/hello_world.bat',
    'BCPL': 'source/basic/hello_world.bcpl',
    'Befunge 93': 'source/basic/helloworld.bfg',
    'Bhailang': 'source/hello_world.bhai',
    'Bicep': 'source/basic/hello.bicep',
    'Blaz': 'source/hello_world.blaz',
    'boo': 'source/basic/hello_world.boo',
    'Brainfuck': 'source/basic/hello_world.bf',
    'C': 'source/basic/hello_world.c',
    'C++': 'source/basic/hello_world.cpp',
    'C#': 'source/basic/hello_world.cs',
    'Cangjie': 'source/basic/hello_world.cj',
    'Carbon': 'source/basic/hello_world.carbon',
    'Cairo': 'source/basic/hello_world.cairo',
    'Cecil': 'source/basic/hello_world.cecil',
    'Chapel': 'source/basic/hello_world.chpl',
    'Clojure': 'source/basic/hello_world.clj',
    'CLIPS': 'source/basic/hello_world.clp',
    'COBOL': 'source/basic/hello_world.cob',
    'Coffeescript': 'source/basic/hello_world.coffee',
    'COOL': 'source/basic/hello_world.cl',
    'Crystal': 'source/basic/hello_world.cr',
    'Curl': 'source/basic/hello_world.curl',
    'cypher': 'source/basic/hello_world.cypher',
    'ChucK': 'source/basic/helloworld.ck',
    'COBOLScript': 'source/basic/helloworld.cbls',
    'COW': 'source/basic/helloworld.cow',
    'D': 'source/basic/hello_world.d',
    'Dart': 'source/basic/hello_world.dart',
    'Daytona': 'source/basic/hello_world(daytona).io',
    'Delphi': 'source/basic/hello_world.dpr',
    'Dragon': 'source/basic/hello_world.dragon',
    'Dylan': 'source/basic/hello_world.dylan',
    'E': 'source/basic/hello_world(E).e',
    'Eiffel': 'source/basic/hello_world.e',
    'Elixir': 'source/basic/hello_world.exs',
    'Elm': 'source/basic/hello_world.elm',
    'Erlang': 'source/basic/hello_world.erl',
    'Euphoria': 'source/basic/hello_world.ex',
    'Factor': 'source/basic/hello_world.factor',
    'Falcon': 'source/basic/hello_world.fcn',
    'Fantom': 'source/basic/hello_world.fan',
    'F#': 'source/basic/hello_world.fs',
    'forth': 'source/basic/hello_world.fth',
    'Fortran': 'source/basic/hello_world.f90',
    'Futhark': 'source/basic/hello_world.fut',
    'False': 'source/basic/helloworld.fls',
    'Gambas': 'source/basic/hello_world.gambas',
    'GDScript': 'source/basic/helloworld.gd',
    'GML': 'source/basic/helloWorld.gml',
    'Go': 'source/basic/helloworld.go',
    'Groovy': 'source/basic/helloworld.groovy',
    'Hack': 'source/basic/hello_world.hack',
    'Haskell': 'source/basic/hello_world.hs',
    'Haxe': 'source/basic/hello_world.hx',
    'HolyC': 'source/basic/hello_world.HC',
    'HTML': 'source/basic/hello_world.html',
    'Icon': 'source/basic/hello_world.icn',
    'Idris': 'source/basic/hello_world.idr',
    'INTERCAL': 'source/basic/hello_world.i',
    'io': 'source/basic/hello_world.io',
    'J': 'source/basic/hello_world.j',
    'Janet': 'source/basic/hello_world.janet',
    'Java': 'source/basic/hello_world.java',
    'Javascript': 'source/basic/hello_world.js',
    'JavaServer Pages': 'source/basic/hello_world.jsp',
    'Julia': 'source/basic/hello_world.jl',
    'K': 'source/basic/hello_world.k',
    'KornShell': 'source/basic/hello_world.ksh',
    'Kotlin': 'source/basic/hello_world.kt',
    'Lisk': 'source/basic/hello_world-lisk.js',
    'Logo': 'source/basic/hello_world.logo',
    'Lua': 'source/basic/hello_world.lua',
    'Lol': 'source/basic/Hello_World.lol',
    'LiveCode': 'source/basic/helloworld.livecode',
    'Maple': 'source/basic/hello_world.mpl',
    'MATLAB': 'source/basic/hello_world.m',
    'Mercury': 'source/basic/hello_world.m',
    'Miranda': 'source/basic/hello_world.m',
    'Modula-2': 'source/basic/hello_world.mod',
    'Motoko': 'source/basic/hello_world.mo',
    'Monkey X': 'source/basic/helloworld.monkey',
    'MQL': 'source/basic/helloworld.mq5',
    'NASM(Netwide-Assembler)': 'source/basic/hello_world_nasm.asm',
    'Nim': 'source/basic/hello_world.nim',
    'OAK': 'source/basic/helloworld.oak',
    'Objective-C': 'source/basic/hello_world.m',
    'OCaml': 'source/basic/hello_world.ml',
    'Occam': 'source/basic/hello_world.occ',
    'Oberon': 'source/basic/helloworld.obr',
    'OpenCL': 'source/basic/helloworld.cl',
    'Pascal': 'source/basic/hello_world.pas',
    'Perl': 'source/basic/hello_world.pl',
    'PHP': 'source/basic/hello_world.php',
    'Pike': 'source/basic/hello_world.pike',
    'Plug': 'source/basic/hello_world.plug',
    'Pony': 'source/basic/hello_world.pony',
    'PostScript': 'source/basic/hello_world.ps',
    'PowerShell': 'source/basic/hello_world.ps1',
    'Prolog': 'source/basic/hello_world.pl',
    'Pug': 'source/basic/hello_world.pug',
    'Python': 'source/basic/hello_world.py',
    'Pico': 'source/basic/helloworld.pico',
    'PL/I': 'source/basic/helloworld.pli',
    'Processing': 'source/basic/helloworld.pde',
    'Q': 'source/basic/hello_world.q',
    'R': 'source/basic/hello_world.r',
    'Racket': 'source/basic/hello_world.rkt',
    'Raku': 'source/basic/hello_world.raku',
    'ReasonML': 'source/basic/hello_world.re',
    'Red': 'source/basic/hello_world.red',
    'Ruby': 'source/basic/hello_world.rb',
    'Rust': 'source/basic/hello_world.rs',
    'Rebol': 'source/basic/helloworld.reb',
    'Rockstar': 'source/basic/helloworld.rks',
    'SAS': 'source/basic/hello_world.sas',
    'Sather': 'source/basic/hello_world.sather',
    'Scala': 'source/basic/hello_world.scala',
    'Scheme': 'source/basic/hello_world.scm',
    'Simula': 'source/basic/hello_world.sim',
    'Smalltalk': 'source/basic/hello_world.st',
    'SNOBOL': 'source/basic/hello_world.sno',
    'Solidity': 'source/basic/hello_world.sol',
    'Soroban': 'source/basic/hello_world.rs',
    'SPARK': 'source/basic/hello_world.adb',
    'Spin': 'source/basic/helloworld.spin',
    'SQL': 'source/basic/hello_world.sql',
    'Swift': 'source/basic/hello_world.swift',
    'Stata': 'source/basic/hello_world.do',
    'TADS': 'source/basic/hello_world(TADS).t',
    'Tcl': 'source/basic/hello_world.tcl',
    'Thue': 'source/basic/hello_world.thue',
    'Transact-SQL': 'source/basic/HelloWorld.sql',
    'Turing': 'source/basic/hello_world.t',
    'Typescript': 'source/basic/hello_world.ts',
    'V': 'source/basic/hello_world.v',
    'Vala': 'source/basic/hello_world.vala',
    'VB.NET': 'source/basic/hello_world(VB.NET).vb',
    'VBScript': 'source/basic/hello_world.vbs',
    'Verilog': 'source/basic/hello_world.sv',
    'VHDL': 'source/basic/hello_world.vhdl',
    'VIM': 'source/basic/hello_world.vim',
    'VisualBasic': 'source/basic/hello_world.vb',
    'WhiteSpace': 'source/basic/hello_world.ws',
    'Wolfram': 'source/basic/hello_world.wl',
    'Wren': 'source/basic/hello_world.wren',
    'Xamarin': 'source/basic/hello_world.xaml',
    'Xojo': 'source/basic/HelloWorld.xojo_project',
    'Xquery': 'source/basic/hello_world.xquery',
    'YAML': 'source/basic/hello_world.yaml',
    'Zig': 'source/basic/hello_world.zig',
    'Zonnon': 'source/basic/hello_world.NET',
    'Zsh': 'source/basic/hello_world.zsh'
};

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
            <button type="button" class="code-toggle" aria-expanded="false">View Code</button>
            <pre class="code-block" hidden></pre>
        `;
        
        card.addEventListener('click', () => {
            window.open(language.link, '_blank', 'noopener,noreferrer');
        });

        const codeToggle = card.querySelector('.code-toggle');
        const codeBlock = card.querySelector('.code-block');

        codeToggle.addEventListener('click', (event) => {
            event.stopPropagation();
            if (!codeBlock.dataset.loaded) {
                codeBlock.dataset.loaded = 'true';
                const file = languageFiles[language.name];
                if (!file) {
                    codeBlock.textContent = 'No example file is registered for this language.';
                    codeBlock.hidden = false;
                    codeToggle.textContent = 'Hide Code';
                    codeToggle.setAttribute('aria-expanded', 'true');
                    return;
                }
                fetch(file)
                    .then(response => {
                        if (!response.ok) throw new Error(`Failed to load ${file}`);
                        return response.text();
                    })
                    .then(code => {
                        codeBlock.textContent = code.trimEnd();
                        codeBlock.hidden = false;
                        codeToggle.textContent = 'Hide Code';
                        codeToggle.setAttribute('aria-expanded', 'true');
                    })
                    .catch(() => {
                        codeBlock.textContent = 'Code cannot be fetched from a local file. Open the deployed site or serve the page over HTTP to view the example (see source/basic/ in the repository).';
                        codeBlock.hidden = false;
                        codeToggle.textContent = 'Hide Code';
                        codeToggle.setAttribute('aria-expanded', 'true');
                    });
            } else {
                const show = codeBlock.hidden;
                codeBlock.hidden = !show;
                codeToggle.textContent = show ? 'Hide Code' : 'View Code';
                codeToggle.setAttribute('aria-expanded', show ? 'true' : 'false');
            }
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