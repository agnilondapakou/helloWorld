section .data
    hello db 'Hello, World!',0xA  ; String with newline (0xA is ASCII for "\n")
    helloLen equ $-hello           ; Calculate the length of the string

section .text
    global _start

_start:
    ; System call: write (to STDOUT)
    mov eax, 4        ; syscall number for sys_write (Linux: 4)
    mov ebx, 1        ; file descriptor 1 - Standard output (STDOUT)
    mov ecx, hello    ; memory address of the string
    mov edx, helloLen ; length of the string
    int 0x80          ; interrupt to make the system call

    ; System call: exit (to terminate the program)
    mov eax, 1        ; syscall number for sys_exit (Linux: 1)
    xor ebx, ebx      ; return code 0
    int 0x80          ; interrupt to make the system call