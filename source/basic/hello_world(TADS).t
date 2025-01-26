#include <tads.h>

gameMain: GameMainDef
    initialPlayerChar = me
;

+ me: Actor
    desc = "You're just an observer here."
;

+ startRoom: Room 'Starting Room'
    "Hello World."
;