section .data
    msg db "Hello, World!", 0

section .text
    global _start

_start:
    mov eax, 4         
    mov ebx, 1         
    mov ecx, msg       
    mov edx, 13        
    int 0x80          

    mov eax, 1        
    xor ebx, ebx       
    int 0x80
