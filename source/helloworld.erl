-module(hello).
-export([hello_world/0, main/1]).

hello_world() -> io:fwrite("hello world\n").

main(_Args) ->
    hello_world().
