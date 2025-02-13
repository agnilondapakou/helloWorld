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
        description: 'An esoteric programming language.It is a Brainfuck variant designed humorously with Bovinae in mind',
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
    },
    {
        name: 'Velato',
        description: 'Velato is an esoteric programming language that uses MIDI files as source code. Programs in Velato are defined by the pitch and order of notes.',
        link: 'http://velato.net/'
    },
    {
        name: 'ArnoldC',
        description: 'ArnoldC is an esoteric programming language created with Scala by Lauri Hartikka.',
        link: 'https://banhawy.github.io/ArnoldC-Technical-Documentation/'
    },
    {
        name: 'Kipple',
        description: 'Kipple is a minimalistic esoteric programming language with a set of stacks, four operators, and a single control structure.',
        link: 'https://www.pvv.ntnu.no/~runeberg/kipple/index.html'
    },
    {
        name: 'GolfScript',
        description: 'GolfScript is a stack oriented esoteric programming language aimed at solving problems (holes) in as few keystrokes as possible.',
        link: 'https://www.golfscript.com/golfscript/index.html'
    },
    {
        name: 'Jelly',
        description: 'The Jelly programming language was created to code Siri Shortcuts in a text base language. ',
        link: 'https://docs.jellycuts.com/Getting_Started/language_overview.html'
    },
    {
        name: 'Brain-Flak',
        description: 'Stack-based esoteric language designed by Programming Puzzles and Code-Golf user, DJMcMayhem. The name is a cross between "brainfuck", which was a big inspiration for the language, and "flak-overstow", since the language is confusing and stack-based.',
        link: 'https://github.com/DJMcMayhem/Brain-Flak'
    },
    {
        name: 'Seed',
        description: 'Seed is a language based on random seeds. Actually, programs only contain two instructions: length and random seed, separated by a space.',
        link: 'https://esolangs.org/wiki/Seed'
    },
    {
        name: 'NASM',
        description: 'NASM (netwide assembler), is an assembler and disassembler for the Intel x86 architecture.',
        link: 'https://cratecode.com/info/nasm'
    },
    {
        name: 'A Pear Tree',
        description: 'The trivial derivative of Perl created by User:ais523 in 2016, mostly as a joke. It aims to mildly modify the language to make it more suitable for writing polyglots particularly with Python 3.',
        link: 'https://esolangs.org/wiki/A_Pear_Tree'
    },
    {
        name: 'ABC',
        description: 'Interactive programming language and environment for personal computing, originally intended as a good replacement for BASIC.',
        link: 'https://homepages.cwi.nl/~steven/abc/'
    },
    {
        name: 'Aceto',
        description: 'An esoteric programming language made by L3viathan, designed according to the wishes of @sarnthil. The name has no meaning other than being a reference to OIL.',
        link: 'https://esolangs.org/wiki/Aceto'
    },
    {
        name: 'Agda',
        description: 'Agda is a dependently typed programming language. It is an extension of Martin-Löfs type theory and is the latest in the tradition of languages developed in the programming logic group at Chalmers.',
        link: 'https://agda.readthedocs.io/en/latest/overview.html'
    },
    {
        name: 'Agony',
        description: 'An esoteric programming language and It is based on, most of the time backwards compatible with Brainfuck.',
        link: 'https://esolangs.org/wiki/Agony'
    },
    {
        name: 'Aheui',
        description: 'Aheui (아희 in Korean language) is the first esoteric programming language ever to be designed for Hangul, the Korean alphabet, designed by User:Puzzlet Chung.',
        link: 'https://esolangs.org/wiki/Aheui#:~:text=Aheui%20(%EC%95%84%ED%9D%AC%20in%20Korean%20language,26%20stacks%20and%20one%20queue.'
    },
    {
        name: 'Alchemist',
        description: 'Alchemist is a non-deterministic programming language based on chemical reaction networks. A program is a (multi-)set of rules of the form LHS -> RHS, where the LHS consists of simple atoms separated by + and the RHS consists of atoms separated by +.',
        link: 'https://esolangs.org/wiki/Alchemist'
    },
    {
        name: 'ATS',
        description: 'ATS is a statically typed programming language that unifies implementation with formal specification.',
        link: 'https://ats-lang.sourceforge.net/'
    },
    {
        name: 'BITBITJUMP',
        description: 'BitBitJump is one of the simplest OISC languages. It allows calculations by only bit copying process without using conventional logic operations like AND, OR, XOR, NAND, or NOT.',
        link: 'https://esolangs.org/wiki/BitBitJump'
    },
    {
        name: 'BoolFuck',
        description: 'Boolfuck is an esoteric programming language based on Brainfuck, but operating only on bits',
        link: 'https://samuelhughes.com/boof/'
    },
    {
        name: 'BrainGolf',
        description: 'Braingolf is a simple, symbol-based language.Every symbol in Braingolf is either an operator, a modifier, or a literal.',
        link: 'https://github.com/dylanrenwick/braingolf'
    },
    {
        name: 'BrachyLog',
        description: 'Brachylog is a declarative golfing language based on SWI-Prolog. It was created by Fatalize in 2015.',
        link: 'https://github.com/JCumin/Brachylog'
    },
    {
        name: 'Broccoli',
        description: 'Broccoli is an exciting new programming language that is guaranteed to make you pee your pants (in a good way)',
        link: 'https://github.com/broccoli-lang/broccoli'
    },
    {
        name: 'Burlesque',
        description: 'Burlesque is a concatenative, dynamic typed, lazy, probably esoteric programming language.',
        link: 'https://github.com/FMNSSun/Burlesque'
    },
    {
        name: 'Caboose',
        description: 'Caboose aims to be a simple and easy to learn language while still being powerful enough for everyday use.',
        link: 'https://github.com/CabooseLang/Caboose'
    },
    {
        name: 'Cardinal',
        description: 'An esoteric programming language by User:Madk, named for the directions that the instruction pointers can travel. Execution takes place on a 2D grid.',
        link: 'https://esolangs.org/wiki/Cardinal'
    },
    {
        name: 'Carrot',
        description: 'Carrot is an esoteric string-based programming language made for code-golfing. Its memory is based around a two-dimensional tape called a garden.',
        link: 'https://github.com/kritixilithos/Carrot'
    },
    {
        name: 'Ceylon',
        description: 'An object-oriented, strongly statically typed programming language with an emphasis on immutability, created by Red Hat.',
        link: 'https://projects.eclipse.org/projects/technology.ceylon'
    },
    {
        name: 'Charcol',
        description: 'An ASCII-art oriented prefix golfing language designed by the Programming Puzzles and Code Golf',
        link: 'https://github.com/charcoal-lang/Charcoal'
    },
    {
        name: 'Charm',
        description: 'A computer programming language devised in the early 1990s with similarities to the RTL/2, Pascal and C languages in addition to containing some unique features of its own.',
        link: 'https://en.wikipedia.org/wiki/Charm_(programming_language)'
    },
    {
        name: 'Checked C',
        description: 'It extends C with bounds checking and improved type safety. It helps programmers retrofit existing C code to be more secure.',
        link: 'https://github.com/checkedc/checkedc'
    },
    {
        name: 'Cheddar',
        description: 'The goal of Cheddar is to be a fast, powerful, extensible programming language.',
        link: 'https://cheddar.vihan.org/#:~:text=The%20goal%20of%20Cheddar%20is,the%20least%20syntax%20overhead%20possible.'
    },
    {
        name: 'Chez Scheme',
        description: 'It is both a programming language and an implementation of that language, with supporting tools and documentation.',
        link: 'https://cisco.github.io/ChezScheme/'
    },
    {
        name: 'Chicken Scheme',
        description: 'It is a compiler for the Scheme programming language. It produces portable and efficient C and supports the R5RS and R7RS (work in progress) standards, and many extensions',
        link: 'https://www.call-cc.org/'
    },
    {
        name: 'Chip',
        description: 'Chip is a language that processes streams of bytes in a manner not dissimilar to an integrated circuit. A Chip circuit is a 3-dimensional specification; most computation occurring in 2-dimensions, with pins to allow layers to interact. ',
        link: 'https://github.com/Phlarx/chip'
    },
    {
        name: 'CIL (Mono IL Assembler)',
        description: 'The Common Intermediate Language is object-oriented and stack-based, which means that instruction parameters and results are kept on a single stack instead of in several registers or other memory locations, as in most programming languages.',
        link: 'https://www.mono-project.com/docs/tools+libraries/tools/monodis/'
    },
    {
        name: 'Clam',
        description: 'It is a token-based language. The transpiler iterates through each character of source code one by one and, provided it is a valid Clam token, calls a function that will output JS code corresponding to that token. Some',
        link: 'https://github.com/dylanrenwick/Clam'
    },
    {
        name: 'Cobra',
        description: 'It is an imperative, high-level, object-oriented language with direct support for contracts, unit tests and compile-time nil tracking',
        link: 'http://cobra-language.com/'
    },
    {
        name: 'Coconut',
        description: 'It is a variant of Python built for simple, elegant, Pythonic functional programming. Coconut syntax is a strict superset of the latest Python 3 syntax.',
        link: 'https://coconut.readthedocs.io/en/latest/DOCS.html'
    },
    {
        name: 'Common LISP',
        description: 'It is a high-level, general-purpose, object-oriented, dynamic, functional programming language.',
        link: 'https://clisp.sourceforge.io/'
    },
    {
        name: 'Condit',
        description: 'An esoteric programming language "condit", created by Paul Equinox Collins.',
        link: 'https://github.com/TryItOnline/condit'
    },
    {
        name: 'CPY',
        description: 'It is a (Pre)Compiler of .cpy files, those are basically C++ without redundancy.',
        link: 'https://github.com/vrsperanza/CPY'
    },
    {
        name: 'Cubix',
        description: 'A 2D esoteric language wrapped around the faces of a cube. Online interpreter, Code design helper',
        link: 'https://github.com/ETHproductions/cubix'
    },
    {
        name: 'CY',
        description: 'Cy (pronounced like "sigh") is a development environment for the World Wide Hack -- a worldwide collaborative search through the space of useful software components.',
        link: 'https://github.com/cyoce/Cy'
    },
    {
        name: 'Dafny',
        description: "It is a verification-ready programming language. As you type in your program, Dafny's verifier constantly looks over your shoulder, flags any errors, shows you counterexamples, and congratulates you when your code matches your specifications",
        link: 'https://github.com/dafny-lang/dafny'
    },
    {
        name: 'Detour',
        description: "An Esoteric Language with 2D data flow",
        link: 'https://github.com/cyoce/detour'
    },
    {
        name: 'Dirty',
        description: "A two-dimensional, lazily evaluated recreational language, implemented in Clean.",
        link: 'https://github.com/Ourous/dirty'
    },
    {
        name: 'DStack',
        description: "It is a stack-based esoteric language created by User:-Dark-Phantom- on November, 2015. ",
        link: 'https://github.com/alejandrocoria/DStack'
    },
    {
        name: 'Dyvil',
        description: "It is a multi-paradigm, general purpose programming language that is based on Java and the JVM.",
        link: 'https://github.com/dyvil/dyvil'
    },
    {
        name: 'Egel',
        description: "It is an untyped concurrent functional scripting language based on eager combinator rewriting with a concise but remarkably powerful syntax.",
        link: 'https://github.com/egel-lang/egel'
    },
    {
        name: 'Element',
        description: "It is a simple golfing language that compiles to Perl. It was first created in March 2012.",
        link: 'https://github.com/PhiNotPi/Element'
    },
    {
        name: 'ELVM-IR',
        description: "It is similar to LLVM but dedicated to Esoteric Languages. This project consists of two components - frontend and backend. ",
        link: 'https://github.com/shinh/elvm'
    },
    {
        name: 'Emacs-Lisp',
        description: "It is Reference Manual and several other manuals documenting major modes and other optional features",
        link: 'https://www.gnu.org/software/emacs/manual/eintr.html'
    },
    {
        name: 'Emoji',
        description: "It is a stack-based esoteric programming language that uses emoji to manipulate the stack. In most cases, non-emoji characters are ignored.",
        link: 'https://esolangs.org/wiki/Emoji'
    },
    {
        name: 'Emoji Gramming',
        description: "It (proper name 💻) is a simple emoji-based esolang.",
        link: 'https://esolangs.org/wiki/Emoji-gramming'
    },
    {
        name: 'EmojiCode',
        description: "It is an open-source,full-blown programming languageconsisting of emojis.",
        link: 'https://www.emojicode.org/'
    },
    {
        name: 'EmojiCoder',
        description: "It is an esoteric programming language that uses emoji to represent commands and arguments.",
        link: 'https://esolangs.org/wiki/EmojiCoder'
    },
    {
        name: 'Emotif**k',
        description: "It is an esoteric, Turing-complete programming language created in 1993 by Urban Müller. It consists of 8 commands and an instruction pointer.",
        link: 'https://github.com/Romulus10/emotif___'
    },
    {
        name: 'Emotinomicon',
        description: "It is a stack-based language by User:Conor O'Brien. Source code in this language is text built from emoticon characters. ",
        link: 'https://github.com/ConorOBrien-Foxx/Emotinomicon'
    },
    {
        name: 'ES',
        description: "It is an extensible shell. The language was derived from the Plan 9 shell, rc, and was influenced by functional programming languages, such as Scheme, and the Tcl embeddable programming language.",
        link: 'https://github.com/wryun/es-shell'
    },
    {
        name: 'ETA',
        description: "The programming language that not only resembles natural language, but can resemble whatever specific natural language you want (with the exception of those that require non-Latin characters: apologies to Chinese and Japanese programmers.)",
        link: 'https://www.miketaylor.org.uk/tech/eta/doc/'
    },
    {
        name: 'Evil',
        description: "It is a programming language with a simple execution model and an even simpler syntax. The cost for this is that writing programs is quite painful. A good language for masocistic computer scientists.",
        link: 'https://web.archive.org/web/20070103000858/www1.pacific.edu/~twrensch/evil/index.html'
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

document.addEventListener('DOMContentLoaded', () => {
    createAlphabetFilter();
    createLanguageCards();
    setupSearch();
}); 
